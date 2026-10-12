import fs from "fs/promises";
import path from "path";
import type { Inquiry, InquiryFormData, InquiryInterest, InquiryStatus } from "@/types/inquiry";

export const VALID_INTERESTS: InquiryInterest[] = [
  "student_placement",
  "volunteer",
  "post_safari",
  "leisure_safari",
  "university_partnership"
];

export const VALID_STATUSES: InquiryStatus[] = [
  "new",
  "contacted",
  "application_sent",
  "confirmed",
  "completed_lost"
];

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");

// In-memory sliding window rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
}

// Initial seed inquiries for live admin dashboard presentation
const initialSeedInquiries: Inquiry[] = [
  {
    id: "inq-seed-01",
    interest: "student_placement",
    fullName: "Elena Rostova",
    email: "elena.rostova@edinburgh.ac.uk",
    phoneOrWhatsApp: "+44 7700 900451",
    country: "United Kingdom",
    travelType: "individual",
    dynamicFields: {
      placementSector: "medical_healthcare",
      durationWeeks: 6,
      targetMonth: "June 2026",
      universityName: "University of Edinburgh Medical School",
      fieldOfStudy: "MBChB Medicine Year 4",
      safariAddonInterested: true
    },
    message: "Seeking an 8-week pre-graduation clinical elective in obstetrics and tropical medicine. Need institutional sign-off for logbook hours.",
    status: "new",
    assignedTo: "Collins Ssegawa",
    notes: "Top candidate. Sent preliminary hospital elective syllabus. Awaiting confirmation of visa dates.",
    slaDeadline: new Date(Date.now() + 18 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "inq-seed-02",
    interest: "university_partnership",
    fullName: "Dr. Marcus Vance",
    email: "mvance@georgetown.edu",
    phoneOrWhatsApp: "+1 202 555 0192",
    country: "United States",
    travelType: "group",
    dynamicFields: {
      departmentOrFaculty: "Department of Global Health & Nursing",
      estimatedCohortSize: 12,
      targetTravelDates: "January 2027",
      chaperoneNeeds: true
    },
    message: "Exploring institutional partnership for a 2-week faculty-led cohort in maternal health systems and community outreach.",
    status: "contacted",
    assignedTo: "Patricia Ssegawa",
    notes: "Zoom call held. Sent RAMS safety dossier and AMREF aero-evacuation documentation.",
    slaDeadline: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "inq-seed-03",
    interest: "post_safari",
    fullName: "Liam & Sarah Jenkins",
    email: "liam.jenkins@gmail.com",
    phoneOrWhatsApp: "+61 491 570 156",
    country: "Australia",
    travelType: "group",
    dynamicFields: {
      safariPackage: "5_day_post_placement",
      travelersCount: 2,
      targetTravelDates: "August 2026"
    },
    message: "Sarah will be finishing her nursing placement in Masaka and we wish to book the 5-day Queen Elizabeth & Bunyonyi safari as her graduation reward.",
    status: "application_sent",
    assignedTo: "Collins Ssegawa",
    notes: "Confirmed Land Cruiser availability and Bunyonyi eco-cottage reservations.",
    slaDeadline: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
  }
];

async function writeInquiriesFile(inquiries: Inquiry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tmpFile = path.join(DATA_DIR, `inquiries.${Date.now()}.${Math.random().toString(36).substring(2, 6)}.tmp`);
  await fs.writeFile(tmpFile, JSON.stringify(inquiries, null, 2), "utf-8");
  await fs.rename(tmpFile, INQUIRIES_FILE);
}

function getSeedInquiries(): Inquiry[] {
  return JSON.parse(JSON.stringify(initialSeedInquiries));
}

export async function getInquiries(): Promise<Inquiry[]> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const content = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const data = JSON.parse(content);
    return Array.isArray(data) ? data : getSeedInquiries();
  } catch {
    const seed = getSeedInquiries();
    try {
      await writeInquiriesFile(seed);
    } catch {
      // Ignore write errors in read-only environment
    }
    return seed;
  }
}

export async function saveInquiry(formData: InquiryFormData): Promise<{ success: boolean; inquiry?: Inquiry; error?: string }> {
  if (!formData || typeof formData !== "object") {
    return { error: "Invalid inquiry submission payload.", success: false };
  }

  // 1. Honeypot check
  if (formData.botTrap && formData.botTrap.trim().length > 0) {
    return { error: "Spam detected.", success: false };
  }

  // 2. Interest check
  if (!formData.interest || !VALID_INTERESTS.includes(formData.interest)) {
    return { error: "Please select a valid area of interest.", success: false };
  }

  // 3. Field validations
  if (!formData.fullName || formData.fullName.trim().length < 2 || formData.fullName.trim().length > 120) {
    return { error: "Please enter your full name (2 to 120 characters).", success: false };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim()) || formData.email.trim().length > 254) {
    return { error: "Please enter a valid email address.", success: false };
  }

  if (!formData.phoneOrWhatsApp || formData.phoneOrWhatsApp.trim().length < 6 || formData.phoneOrWhatsApp.trim().length > 35) {
    return { error: "Please enter a valid phone or WhatsApp number.", success: false };
  }

  if (!formData.country || formData.country.trim().length < 2 || formData.country.trim().length > 80) {
    return { error: "Please specify your country of residence.", success: false };
  }

  if (!formData.message || formData.message.trim().length < 10 || formData.message.trim().length > 5000) {
    return { error: "Please provide a short description of your goals or questions (min. 10 characters).", success: false };
  }

  if (!formData.safeguardingAgreed) {
    return { error: "You must agree to our ethical volunteering and safeguarding principles.", success: false };
  }

  const travelType = formData.travelType === "group" ? "group" : "individual";
  const now = new Date();
  const slaDeadline = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours SLA guarantee

  const newInquiry: Inquiry = {
    id: `inq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    interest: formData.interest,
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    phoneOrWhatsApp: formData.phoneOrWhatsApp.trim(),
    country: formData.country.trim(),
    travelType,
    dynamicFields: formData.dynamicFields || {},
    message: formData.message.trim(),
    status: "new",
    assignedTo: "Collins Ssegawa",
    slaDeadline: slaDeadline.toISOString(),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  };

  try {
    const inquiries = await getInquiries();
    inquiries.unshift(newInquiry);
    await writeInquiriesFile(inquiries);

    // Simulated Auto-Reply & Admin notification logs
    console.log(`[Auto-Reply Email Dispatched] To: ${newInquiry.email} | SLA Guarantee: 24 Hours`);
    console.log(`[Admin Alert Dispatched] New Inquiry from ${newInquiry.fullName} (${newInquiry.interest})`);

    return { success: true, inquiry: newInquiry };
  } catch (err) {
    console.error("Error persisting inquiry:", err);
    return { error: "Failed to persist inquiry. Please reach out via WhatsApp.", success: false };
  }
}

export async function updateInquiry(
  id: string,
  updates: { status?: InquiryStatus; notes?: string; assignedTo?: string }
): Promise<{ success: boolean; inquiry?: Inquiry; error?: string }> {
  if (updates.status && !VALID_STATUSES.includes(updates.status)) {
    return { success: false, error: "Invalid status value." };
  }

  const inquiries = await getInquiries();
  const index = inquiries.findIndex((inq) => inq.id === id);

  if (index === -1) {
    return { success: false, error: "Inquiry not found." };
  }

  const updated: Inquiry = {
    ...inquiries[index],
    ...(updates.status ? { status: updates.status } : {}),
    ...(updates.notes !== undefined ? { notes: updates.notes.slice(0, 5000) } : {}),
    ...(updates.assignedTo !== undefined ? { assignedTo: updates.assignedTo.trim().slice(0, 80) } : {}),
    updatedAt: new Date().toISOString()
  };

  inquiries[index] = updated;

  try {
    await writeInquiriesFile(inquiries);
    return { success: true, inquiry: updated };
  } catch (err) {
    console.error("Error updating inquiry:", err);
    return { success: false, error: "Failed to update inquiry." };
  }
}

export function formatInquiriesToCSV(inquiries: Inquiry[]): string {
  const headers = [
    "ID",
    "Created At",
    "Status",
    "Interest",
    "Full Name",
    "Email",
    "Phone / WhatsApp",
    "Country",
    "Travel Type",
    "Sector / Package",
    "Duration (Weeks)",
    "University",
    "Assigned To",
    "SLA Deadline",
    "Message",
    "Notes"
  ];

  const rows = inquiries.map((inq) => {
    const df = inq.dynamicFields || {};
    const sectorOrPkg = df.placementSector || df.safariPackage || df.departmentOrFaculty || "";
    const duration = df.durationWeeks || "";
    const uni = df.universityName || "";

    const clean = (val: unknown) => `"${String(val ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;

    return [
      clean(inq.id),
      clean(inq.createdAt),
      clean(inq.status),
      clean(inq.interest),
      clean(inq.fullName),
      clean(inq.email),
      clean(inq.phoneOrWhatsApp),
      clean(inq.country),
      clean(inq.travelType),
      clean(sectorOrPkg),
      clean(duration),
      clean(uni),
      clean(inq.assignedTo),
      clean(inq.slaDeadline),
      clean(inq.message),
      clean(inq.notes)
    ].join(",");
  });

  return [headers.join(","), ...rows].join("\n");
}
