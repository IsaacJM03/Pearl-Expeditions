import { NextResponse } from "next/server";
import { getInquiries, formatInquiriesToCSV } from "@/lib/inquiries";

export async function GET() {
  try {
    const inquiries = await getInquiries();
    const csvContent = formatInquiriesToCSV(inquiries);

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="pearl-inquiries-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (error) {
    console.error("Export inquiries error:", error);
    return NextResponse.json({ error: "Failed to export inquiries", success: false }, { status: 500 });
  }
}
