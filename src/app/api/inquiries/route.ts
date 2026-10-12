import { NextRequest, NextResponse } from "next/server";
import { getInquiries, saveInquiry, checkRateLimit } from "@/lib/inquiries";
import { InquiryFormData } from "@/types/inquiry";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const interest = searchParams.get("interest");

    let inquiries = await getInquiries();

    if (status) {
      inquiries = inquiries.filter((inq) => inq.status === status);
    }
    if (interest) {
      inquiries = inquiries.filter((inq) => inq.interest === interest);
    }

    return NextResponse.json({ inquiries, success: true });
  } catch (error) {
    console.error("GET /api/inquiries failed:", error);
    return NextResponse.json({ error: "Failed to load inquiries", success: false }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries sent from this IP. Please wait a few minutes before trying again.", success: false },
        { status: 429 }
      );
    }

    const body = (await request.json()) as InquiryFormData;

    const result = await saveInquiry(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error, success: false }, { status: 400 });
    }

    return NextResponse.json({ inquiry: result.inquiry, success: true }, { status: 201 });
  } catch (error) {
    console.error("POST /api/inquiries error:", error);
    return NextResponse.json({ error: "Internal server error", success: false }, { status: 500 });
  }
}
