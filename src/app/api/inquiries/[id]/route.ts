import { NextRequest, NextResponse } from "next/server";
import { updateInquiry } from "@/lib/inquiries";
import { InquiryStatus } from "@/types/inquiry";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const result = await updateInquiry(id, {
      status: body.status as InquiryStatus | undefined,
      notes: body.notes,
      assignedTo: body.assignedTo,
    });

    if (!result.success) {
      return NextResponse.json({ error: "Inquiry not found or update failed", success: false }, { status: 404 });
    }

    return NextResponse.json({ inquiry: result.inquiry, success: true });
  } catch (error) {
    console.error("PATCH /api/inquiries/[id] error:", error);
    return NextResponse.json({ error: "Failed to update inquiry", success: false }, { status: 500 });
  }
}
