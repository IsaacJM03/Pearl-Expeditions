# Phase-by-Phase Build Plan & Acceptance Criteria

## Phase 1: MVP (Launch-Ready Public Experience)

### Goal
Deliver an authoritative, conversion-optimized public portal with dynamic educational program pages, full safeguarding declarations, founders' heritage, a high-converting multi-step inquiry engine with automated SLA tracking, and an internal pipeline dashboard.

### Feature Breakdown & Acceptance Criteria

#### 1. Public Content & Navigation
- **Criteria 1.1:** Exact slug routing matches specification:
  - `/` (Dual-gateway hero, 3-pillar Grow/Serve/Discover framework, 3-way audience selector, founders Collins & Patricia story snippet, trust badges).
  - `/programs/student-placements` (Academic placement sectors overview hub).
  - `/programs/medical-healthcare-placements` (Clinical shadowing, public health outreach, Uganda HIV/AIDS public health leadership spotlight, patient consent & confidentiality).
  - `/programs/social-work-and-education` (Education & youth mentorship, strict child protection policy, minimum 4-week commitment).
  - `/programs/community-development-ngo` (Grassroots NGO capacity, women's co-ops, sustainable agriculture).
  - `/volunteer-uganda` (Independent volunteer program, homestays, community immersion).
  - `/tours/5-day-post-placement-safari` (Queen Elizabeth NP + Kazinga Channel boat safari + Lake Bunyonyi relaxation).
  - `/tours/leisure-safaris` (Gorillas in Bwindi, Chimps in Kibale, Murchison Falls & Jinja Nile, cultural tours).
  - `/about-and-safety` (Collins & Patricia Ssegawa's founder story, Watoto Mpigi upbringing, Institute of Field Research Center experience, 5-tier safety framework, letter to parents & study abroad advisors).
  - `/safeguarding` (Child safeguarding policy, ethical volunteering charter, anti-voluntourism safeguards, fee transparency framework).
  - `/for-universities` (Academic credit transfers, RAMS risk assessment, supervisor credentials, downloadable partnership pack).
  - `/contact` (Smart multi-step inquiry engine, WhatsApp direct bridge, FAQ accordion).
  - `/journal` (Impact stories, ethical volunteering reflections, field dispatches).
- **Criteria 1.2:** Content structured into clean CMS data entries in `src/data/` rather than hardcoded inline strings.
- **Criteria 1.3:** Placeholders clearly rendered for items pending formal verification (`[VERIFY BEFORE PUBLISHING: Partner Hospital/School Agreements, Uganda Tourism Board Licensing]`, `[CONFIRM: Fee breakdown percentages]`).

#### 2. Smart Multi-Step Inquiry Form
- **Criteria 2.1:** 4-step wizard:
  - Step 1: Interest selection (Student Placement / Volunteer / Post-Program Safari / Leisure Safari / University Partnership).
  - Step 2: Contact info + country + individual vs group.
  - Step 3: Dynamic conditional fields according to Step 1 selection (e.g. medical sector vs safari package vs cohort size).
  - Step 4: Goals/questions, honeypot field, safeguarding agreement checkbox.
- **Criteria 2.2:** Form automatically saves draft state in `localStorage` to avoid data loss on accidental reload.
- **Criteria 2.3:** Client-side and server-side validation rejecting invalid emails and missing required fields.
- **Criteria 2.4:** Invisible honeypot field silently catches and drops bot spam; sliding-window rate limit blocks IP abuse.

#### 3. Inquiry API & Persistent Storage
- **Criteria 3.1:** Inquiries persist to structured JSON data store (`data/inquiries.json`) with atomic file writes.
- **Criteria 3.2:** System computes `sla_deadline` (24 hours from creation timestamp).
- **Criteria 3.3:** Auto-reply confirmation email generated and queued with "We reply within 24 hours" promise.
- **Criteria 3.4:** Admin notification generated with full submission payload.

#### 4. Internal Admin Pipeline Dashboard (`/admin`)
- **Criteria 4.1:** Kanban / Table view with stages: `New` → `Contacted` → `Application Sent` → `Confirmed` → `Completed/Lost`.
- **Criteria 4.2:** Live SLA countdown timer highlighting inquiries close to or exceeding the 24-hour response window.
- **Criteria 4.3:** Real-time status update, internal coordinator notes editing, and coordinator assignment.
- **Criteria 4.4:** CSV export endpoint (`/api/inquiries/export`) providing downloadable data for administrative spreadsheets.

#### 5. Performance, SEO & Accessibility
- **Criteria 5.1:** LCP under 2.5s on throttled connections; zero cumulative layout shift (CLS).
- **Criteria 5.2:** Metadata, OpenGraph tags, JSON-LD structured data (Organization & TouristTrip), and `sitemap.xml` / `robots.txt` generated.
- **Criteria 5.3:** WCAG AA compliance (4.5:1 text contrast, visible focus rings, responsive tap targets ≥ 44px, `prefers-reduced-motion` support).

---

## Phase 2: Applications, Placements & Bookings

### Goal
Provide passwordless portal for applicants to complete background checks, medical disclosures, view placement site matches, select safari add-ons, and process deposits.

### Features
1. **Magic Link Authentication:** Passwordless sign-in for applicants and university coordinators.
2. **Document & Verification Vault:** Upload police checks, CVs, and travel insurance to encrypted object storage.
3. **Safari Add-On Builder:** Automatically suggests safari departure dates matching the participant's placement end date.
4. **Deposit & Invoicing Engine:** Multi-currency payment processing (USD via Stripe card; UGX via MTN/Airtel Mobile Money) with automated PDF receipts.

---

## Phase 3: In-Country Operations, Digital Logbooks & Growth

### Goal
Digitize on-the-ground student supervision, safety tracking, institutional verification, and alumni advocacy.

### Features
1. **In-Country Coordinator Portal:** Daily roll calls, housing rosters, airport pickup schedules, and AMREF aero-evacuation incident logs.
2. **Digital Student Logbook:** Mobile-friendly shift logging for clinical hours, daily reflection logs, and electronic supervisor sign-off.
3. **Automated Completion Transcripts:** One-click generation of university-certified placement completion certificates with supervisor evaluations.
4. **Alumni & Ethical Referral Engine:** Post-trip testimonial submission with strict media consent management.
