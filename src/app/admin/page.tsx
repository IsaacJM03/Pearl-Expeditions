"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Download,
  Filter,
  Search,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  FileText,
  RefreshCw,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Inquiry, InquiryStatus } from "@/types/inquiry";
import { calculateSlaMetrics } from "@/lib/inquiryUtils";

const PIPELINE_STAGES: { id: InquiryStatus; label: string; color: string }[] = [
  { id: "new", label: "New Inquiries", color: "border-sky-500 bg-sky-50/50" },
  { id: "contacted", label: "Contacted (<24h SLA)", color: "border-amber-500 bg-amber-50/50" },
  { id: "application_sent", label: "Application Sent", color: "border-purple-500 bg-purple-50/50" },
  { id: "confirmed", label: "Confirmed / Placed", color: "border-emerald-500 bg-emerald-50/50" },
  { id: "completed_lost", label: "Completed / Lost", color: "border-gray-400 bg-gray-50/50" }
];

export default function AdminDashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterInterest, setFilterInterest] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [editingAssignee, setEditingAssignee] = useState("");
  const [savingStatus, setSavingStatus] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/inquiries");
      const data = await res.json();
      if (data.success && Array.isArray(data.inquiries)) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleUpdate = async (id: string, updates: { status?: InquiryStatus; notes?: string; assignedTo?: string }) => {
    try {
      setSavingStatus(true);
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates)
      });
      const data = await res.json();
      if (data.success && data.inquiry) {
        setInquiries((prev) => prev.map((inq) => (inq.id === id ? data.inquiry : inq)));
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(data.inquiry);
        }
      }
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setSavingStatus(false);
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesInterest = filterInterest === "all" || inq.interest === filterInterest;
    const matchesSearch =
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesInterest && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-parchment-muted/50 pb-20 pt-8">
      <div className="container-shell space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest/15">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-eyebrow text-ochre">Operations Command</span>
              <span className="text-caption px-2 py-0.5 rounded-full bg-forest/10 text-forest font-semibold">
                Phase 1 MVP
              </span>
            </div>
            <h1 className="text-h1 text-forest-dark mt-1">Inquiry Pipeline & SLA Operations</h1>
            <p className="text-body-sm text-charcoal-muted mt-1">
              Active intake, coordinator dispatch, and 24-hour response SLA tracking for Collins and the in-country team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchInquiries}
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-forest/20 text-forest text-body-sm font-medium hover:bg-forest/5"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <a
              href="/api/inquiries/export"
              download
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs hover:bg-forest-light"
            >
              <Download className="w-4 h-4 text-gold" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-forest/10 shadow-subtle">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or country..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-forest/20 text-body-sm bg-parchment/30 focus:border-forest focus:ring-1 focus:ring-forest"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-forest shrink-0" />
            <select
              value={filterInterest}
              onChange={(e) => setFilterInterest(e.target.value)}
              className="px-3.5 py-2 rounded-lg border border-forest/20 text-body-sm bg-white"
            >
              <option value="all">All Interest Tracks ({inquiries.length})</option>
              <option value="student_placement">Student Placements</option>
              <option value="volunteer">Independent Volunteers</option>
              <option value="post_safari">Post-Placement Safaris</option>
              <option value="leisure_safari">Leisure Safaris</option>
              <option value="university_partnership">University Partnerships</option>
            </select>
          </div>
        </div>

        {/* Pipeline Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PIPELINE_STAGES.map((stage) => {
            const stageInquiries = filteredInquiries.filter((inq) => inq.status === stage.id);
            return (
              <div
                key={stage.id}
                className={`rounded-2xl border p-4 space-y-3.5 flex flex-col min-h-[500px] ${stage.color}`}
              >
                <div className="flex items-center justify-between border-b border-forest/10 pb-2.5">
                  <h3 className="font-serif font-bold text-forest-dark text-body-sm">{stage.label}</h3>
                  <span className="w-6 h-6 rounded-full bg-forest text-gold text-caption font-bold flex items-center justify-center">
                    {stageInquiries.length}
                  </span>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                  {stageInquiries.length === 0 ? (
                    <p className="text-caption text-charcoal-muted italic py-4 text-center">No inquiries in stage</p>
                  ) : (
                    stageInquiries.map((inq) => {
                      const sla = calculateSlaMetrics(inq.slaDeadline);
                      return (
                        <div
                          key={inq.id}
                          onClick={() => {
                            setSelectedInquiry(inq);
                            setEditingNotes(inq.notes || "");
                            setEditingAssignee(inq.assignedTo || "Collins Ssegawa");
                          }}
                          className={`p-3.5 rounded-xl bg-white border cursor-pointer transition-all shadow-subtle hover:shadow-card hover:-translate-y-0.5 ${
                            selectedInquiry?.id === inq.id
                              ? "border-forest ring-2 ring-forest/20"
                              : "border-forest/15 hover:border-forest/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1 mb-2">
                            <span className="text-caption font-semibold uppercase tracking-wider text-ochre truncate max-w-[120px]">
                              {inq.interest.replace("_", " ")}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sla.badgeClass}`}
                            >
                              {sla.label}
                            </span>
                          </div>

                          <h4 className="font-serif font-bold text-forest-dark text-body-sm leading-snug">
                            {inq.fullName}
                          </h4>
                          <p className="text-caption text-charcoal-muted mt-0.5 truncate">{inq.country}</p>

                          {inq.dynamicFields.universityName && (
                            <p className="text-[11px] text-forest font-medium mt-1 truncate">
                              🎓 {inq.dynamicFields.universityName}
                            </p>
                          )}

                          <div className="mt-3 pt-2 border-t border-forest/10 flex items-center justify-between text-[11px] text-charcoal-muted">
                            <span>{inq.assignedTo || "Unassigned"}</span>
                            <span className="font-mono text-[10px]">
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Inquiry Detail Drawer / Modal */}
        {selectedInquiry && (
          <div className="bg-white rounded-2xl border border-forest/20 shadow-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-forest/15">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-caption font-bold uppercase tracking-wider text-ochre">
                    Inquiry Details: {selectedInquiry.id}
                  </span>
                  <span
                    className={`text-caption font-bold px-2.5 py-0.5 rounded-full border ${
                      calculateSlaMetrics(selectedInquiry.slaDeadline).badgeClass
                    }`}
                  >
                    SLA: {calculateSlaMetrics(selectedInquiry.slaDeadline).label}
                  </span>
                </div>
                <h2 className="text-h2 text-forest-dark mt-1">{selectedInquiry.fullName}</h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="btn-press px-4 py-2 rounded-xl border border-forest/20 text-body-sm text-forest hover:bg-forest/5"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Information */}
              <div className="p-4 rounded-xl bg-parchment border border-forest/10 space-y-3">
                <h3 className="font-serif font-bold text-forest-dark text-body-sm">Contact Information</h3>
                <div className="text-body-sm space-y-1.5 text-charcoal">
                  <p>
                    <span className="font-semibold text-charcoal-muted">Email:</span>{" "}
                    <a href={`mailto:${selectedInquiry.email}`} className="text-forest underline">
                      {selectedInquiry.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-charcoal-muted">WhatsApp/Phone:</span>{" "}
                    <a
                      href={`https://wa.me/${selectedInquiry.phoneOrWhatsApp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-forest underline inline-flex items-center gap-1"
                    >
                      <span>{selectedInquiry.phoneOrWhatsApp}</span>
                      <ExternalLink className="w-3 h-3 text-ochre" />
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-charcoal-muted">Country:</span> {selectedInquiry.country}
                  </p>
                  <p>
                    <span className="font-semibold text-charcoal-muted">Format:</span>{" "}
                    {selectedInquiry.travelType === "individual" ? "Individual Traveler" : "Group / Cohort"}
                  </p>
                </div>
              </div>

              {/* Dynamic Context Fields */}
              <div className="p-4 rounded-xl bg-parchment border border-forest/10 space-y-3">
                <h3 className="font-serif font-bold text-forest-dark text-body-sm">Trip / Academic Specifics</h3>
                <div className="text-body-sm space-y-1.5 text-charcoal">
                  {selectedInquiry.dynamicFields.placementSector && (
                    <p>
                      <span className="font-semibold text-charcoal-muted">Sector:</span>{" "}
                      {selectedInquiry.dynamicFields.placementSector}
                    </p>
                  )}
                  {selectedInquiry.dynamicFields.durationWeeks && (
                    <p>
                      <span className="font-semibold text-charcoal-muted">Duration:</span>{" "}
                      {selectedInquiry.dynamicFields.durationWeeks} Weeks
                    </p>
                  )}
                  {selectedInquiry.dynamicFields.universityName && (
                    <p>
                      <span className="font-semibold text-charcoal-muted">University:</span>{" "}
                      {selectedInquiry.dynamicFields.universityName}
                    </p>
                  )}
                  {selectedInquiry.dynamicFields.fieldOfStudy && (
                    <p>
                      <span className="font-semibold text-charcoal-muted">Program:</span>{" "}
                      {selectedInquiry.dynamicFields.fieldOfStudy}
                    </p>
                  )}
                  {selectedInquiry.dynamicFields.safariAddonInterested && (
                    <p className="text-forest font-semibold">
                      ✓ Post-Placement Safari Add-On Requested
                    </p>
                  )}
                  {selectedInquiry.dynamicFields.targetMonth && (
                    <p>
                      <span className="font-semibold text-charcoal-muted">Target Month:</span>{" "}
                      {selectedInquiry.dynamicFields.targetMonth}
                    </p>
                  )}
                </div>
              </div>

              {/* Status & Assignment Controller */}
              <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 space-y-3">
                <h3 className="font-serif font-bold text-forest-dark text-body-sm">Pipeline Action</h3>

                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1">Update Stage</label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => handleUpdate(selectedInquiry.id, { status: e.target.value as InquiryStatus })}
                    disabled={savingStatus}
                    className="w-full px-3 py-2 rounded-lg border border-forest/20 text-body-sm bg-white"
                  >
                    {PIPELINE_STAGES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1">Assigned Coordinator</label>
                  <select
                    value={editingAssignee}
                    onChange={(e) => {
                      setEditingAssignee(e.target.value);
                      handleUpdate(selectedInquiry.id, { assignedTo: e.target.value });
                    }}
                    className="w-full px-3 py-2 rounded-lg border border-forest/20 text-body-sm bg-white"
                  >
                    <option value="Collins Ssegawa">Collins Ssegawa (Lead Founder)</option>
                    <option value="Patricia Ssegawa">Patricia Ssegawa (Co-Founder)</option>
                    <option value="Dr. Isaac Kato">Dr. Isaac Kato (Clinical Liaison)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Applicant Message */}
            <div className="p-4 rounded-xl bg-white border border-forest/15 space-y-2">
              <h3 className="font-serif font-bold text-forest-dark text-body-sm">Applicant Goals & Message</h3>
              <p className="text-body-sm text-charcoal leading-relaxed whitespace-pre-wrap">
                {selectedInquiry.message}
              </p>
            </div>

            {/* Internal Operational Notes */}
            <div className="space-y-2">
              <label className="block font-serif font-bold text-forest-dark text-body-sm">
                Internal Operational Notes
              </label>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Log internal follow-up steps, university correspondence, or partner hospital reservations..."
                className="w-full p-3 rounded-xl border border-forest/20 text-body-sm bg-parchment/20"
              />
              <button
                onClick={() => handleUpdate(selectedInquiry.id, { notes: editingNotes })}
                disabled={savingStatus}
                className="btn-press min-h-[44px] px-5 py-2 rounded-xl bg-forest text-parchment font-semibold text-body-sm hover:bg-forest-light"
              >
                Save Notes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
