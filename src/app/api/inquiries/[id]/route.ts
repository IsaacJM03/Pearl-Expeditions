import { NextRequest, NextResponse } from "next/server";
import { updateInquiry } from "@/lib/inquiries";
import { InquiryStatus } from "@/types/inquiry";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    let body: { status?: string; notes?: string; assignedTo?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON in request body", success: false }, { status: 400 });
    }

    const result = await updateInquiry(id, {
      status: body.status as InquiryStatus | undefined,
      notes: body.notes,
      assignedTo: body.assignedTo,
    });

    if (!result.success) {
      const status = result.error?.includes("Invalid") ? 400 : 404;
      return NextResponse.json({ error: result.error || "Inquiry not found", success: false }, { status });
    }

    return NextResponse.json({ inquiry: result.inquiry, success: true });
  } catch (error) {
    console.error("PATCH /api/inquiries/[id] error:", error);
    return NextResponse.json({ error: "Failed to update inquiry", success: false }, { status: 500 });
  }
}
