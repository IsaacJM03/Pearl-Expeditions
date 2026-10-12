import { test } from "node:test";
import assert from "node:assert/strict";
import {
  checkRateLimit,
  formatInquiriesToCSV,
  saveInquiry
} from "../src/lib/inquiries.ts";
import { calculateSlaMetrics } from "../src/lib/inquiryUtils.ts";

test("checkRateLimit: allows up to limit and blocks excess from single IP", () => {
  const testIp = `test-ip-${Date.now()}`;
  for (let i = 0; i < 5; i++) {
    assert.equal(checkRateLimit(testIp), true, `Request ${i + 1} should be permitted`);
  }
  // 6th request exceeds limit
  assert.equal(checkRateLimit(testIp), false, "6th request should be blocked by rate limiter");
});

test("saveInquiry: detects honeypot bot trap and rejects spam", async () => {
  const spamPayload = {
    interest: "student_placement",
    fullName: "Bot Spammer",
    email: "bot@spam.com",
    phoneOrWhatsApp: "+1234567890",
    country: "USA",
    travelType: "individual",
    dynamicFields: {},
    message: "Cheap pharmaceuticals buy now",
    safeguardingAgreed: true,
    botTrap: "https://spamlink.xyz"
  };

  const result = await saveInquiry(spamPayload);
  assert.equal(result.success, false);
  assert.equal(result.error, "Spam detected.");
});

test("saveInquiry: rejects missing full name or invalid email", async () => {
  const invalidPayload = {
    interest: "student_placement",
    fullName: "A",
    email: "not-an-email",
    phoneOrWhatsApp: "+123456789",
    country: "USA",
    travelType: "individual",
    dynamicFields: {},
    message: "A short message describing goals",
    safeguardingAgreed: true
  };

  const nameResult = await saveInquiry(invalidPayload);
  assert.equal(nameResult.success, false);
  assert.match(nameResult.error, /full name/i);

  invalidPayload.fullName = "Valid Name";
  const emailResult = await saveInquiry(invalidPayload);
  assert.equal(emailResult.success, false);
  assert.match(emailResult.error, /valid email/i);
});

test("saveInquiry: rejects unagreed safeguarding policy", async () => {
  const unagreedPayload = {
    interest: "volunteer",
    fullName: "Test Volunteer",
    email: "volunteer@example.com",
    phoneOrWhatsApp: "+256700000000",
    country: "Uganda",
    travelType: "individual",
    dynamicFields: {},
    message: "I want to help with literacy programs.",
    safeguardingAgreed: false
  };

  const result = await saveInquiry(unagreedPayload);
  assert.equal(result.success, false);
  assert.match(result.error, /safeguarding principles/i);
});

test("calculateSlaMetrics: handles overdue, urgent, and healthy timers accurately", () => {
  const pastIso = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const overdueMetric = calculateSlaMetrics(pastIso);
  assert.equal(overdueMetric.isOverdue, true);
  assert.match(overdueMetric.label, /Overdue/);

  const urgentIso = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();
  const urgentMetric = calculateSlaMetrics(urgentIso);
  assert.equal(urgentMetric.isOverdue, false);
  assert.match(urgentMetric.label, /Urgent/);

  const healthyIso = new Date(Date.now() + 20 * 60 * 60 * 1000).toISOString();
  const healthyMetric = calculateSlaMetrics(healthyIso);
  assert.equal(healthyMetric.isOverdue, false);
  assert.match(healthyMetric.label, /remaining/);
});

test("formatInquiriesToCSV: produces valid CSV structure with headers and escaped rows", () => {
  const mockInquiries = [
    {
      id: "inq-1",
      interest: "student_placement",
      fullName: "Jane Doe, MD",
      email: "jane@test.org",
      phoneOrWhatsApp: "+44 12345",
      country: "UK",
      travelType: "individual",
      dynamicFields: {
        placementSector: "medical_healthcare",
        durationWeeks: 4,
        universityName: "King's College"
      },
      message: 'Interested in "tropical medicine" shadowing.',
      status: "new",
      assignedTo: "Collins Ssegawa",
      notes: "Reviewed.",
      slaDeadline: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  const csv = formatInquiriesToCSV(mockInquiries);
  assert.ok(csv.startsWith("ID,Created At,Status,Interest"));
  assert.ok(csv.includes('"Jane Doe, MD"'));
  assert.ok(csv.includes('""tropical medicine""'));
  assert.ok(csv.includes('"medical_healthcare"'));
});
