"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Compass,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Send,
  MessageCircle,
  AlertCircle
} from "lucide-react";
import { InquiryFormData, InquiryInterest } from "@/types/inquiry";

const STORAGE_KEY = "pearl_inquiry_draft_v1";

const initialForm: InquiryFormData = {
  interest: "student_placement",
  fullName: "",
  email: "",
  phoneOrWhatsApp: "",
  country: "",
  travelType: "individual",
  dynamicFields: {
    placementSector: "medical_healthcare",
    durationWeeks: 4,
    targetMonth: "",
    universityName: "",
    fieldOfStudy: "",
    safariAddonInterested: true,
    safariPackage: "5_day_post_placement",
    travelersCount: 1,
    travelStyle: "homestay",
    departmentOrFaculty: "",
    estimatedCohortSize: 10,
    chaperoneNeeds: true
  },
  message: "",
  safeguardingAgreed: false,
  botTrap: ""
};

export default function SmartInquiryWizard({ initialInterest }: { initialInterest?: InquiryInterest }) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<InquiryFormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Restore draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed, botTrap: "" }));
      } else if (initialInterest) {
        setFormData((prev) => ({ ...prev, interest: initialInterest }));
      }
    } catch {
      // Ignore localStorage access failures
    }
  }, [initialInterest]);

  // Persist draft to localStorage on change
  useEffect(() => {
    try {
      if (!submittedSuccess) {
        const draft = { ...formData, botTrap: "" };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      }
    } catch {
      // Ignore localStorage access failures
    }
  }, [formData, submittedSuccess]);

  const updateField = (key: keyof InquiryFormData, val: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
  };

  const updateDynamicField = (key: string, val: unknown) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: { ...prev.dynamicFields, [key]: val }
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.interest) errs.interest = "Please select your primary interest.";
    }

    if (currentStep === 2) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        errs.fullName = "Please enter your full name.";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
      if (!formData.phoneOrWhatsApp.trim() || formData.phoneOrWhatsApp.trim().length < 6) {
        errs.phoneOrWhatsApp = "Please enter a valid phone or WhatsApp number.";
      }
      if (!formData.country.trim()) {
        errs.country = "Please enter your country of residence.";
      }
    }

    if (currentStep === 3) {
      if (formData.interest === "student_placement" && !formData.dynamicFields.universityName?.trim()) {
        errs.universityName = "Please enter your university or college.";
      }
      if (formData.interest === "university_partnership" && !formData.dynamicFields.departmentOrFaculty?.trim()) {
        errs.departmentOrFaculty = "Please provide your academic department or institution.";
      }
    }

    if (currentStep === 4) {
      if (!formData.message.trim() || formData.message.trim().length < 10) {
        errs.message = "Please share a brief summary of your goals, dates, or questions (min. 10 characters).";
      }
      if (!formData.safeguardingAgreed) {
        errs.safeguardingAgreed = "You must acknowledge our ethical volunteering & safeguarding standards.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, 4));
    }
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setSubmitting(true);
    setSubmissionError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSubmittedSuccess(true);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us.";
      setSubmissionError(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-forest/15 shadow-card text-center max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-forest mx-auto flex items-center justify-center border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-forest" />
        </div>

        <div className="space-y-2">
          <span className="text-eyebrow text-ochre">Inquiry Registered</span>
          <h2 className="text-h2 text-forest-dark">Thank You, {formData.fullName}</h2>
          <p className="text-body text-charcoal-muted max-w-lg mx-auto">
            Your inquiry is logged. A confirmation email with preliminary program details has been dispatched to{" "}
            <span className="font-semibold text-charcoal">{formData.email}</span>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-parchment border border-forest/10 max-w-md mx-auto flex items-center justify-center gap-3 text-body-sm text-forest-dark font-medium">
          <Clock className="w-5 h-5 text-ochre shrink-0" />
          <span>Our Guarantee: Collins or an in-country coordinator will respond within 24 hours.</span>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={`https://wa.me/256700892410?text=Hello%20Collins,%20I%20just%20submitted%20an%20inquiry%20under%20the%20name%20${encodeURIComponent(
              formData.fullName
            )}.`}
            target="_blank"
            rel="noreferrer"
            className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Open Direct WhatsApp Chat</span>
          </a>

          <button
            onClick={() => {
              setFormData(initialForm);
              setStep(1);
              setSubmittedSuccess(false);
            }}
            className="btn-press min-h-[44px] px-5 py-3 rounded-xl border border-forest/20 text-forest text-body-sm font-medium hover:bg-forest/5"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-forest/15 shadow-card overflow-hidden max-w-3xl mx-auto">
      {/* Progress Header */}
      <div className="px-6 py-5 bg-parchment-muted/60 border-b border-forest/10 flex items-center justify-between">
        <div>
          <span className="text-caption font-bold uppercase tracking-wider text-ochre">
            Step {step} of 4
          </span>
          <h3 className="font-serif text-lg font-bold text-forest-dark">
            {step === 1 && "Choose Your Primary Interest"}
            {step === 2 && "Contact & Travel Details"}
            {step === 3 && "Program Specifics & Dates"}
            {step === 4 && "Objectives & Safeguarding"}
          </h3>
        </div>

        <div className="flex items-center gap-1.5" aria-hidden="true">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step
                  ? "w-7 bg-gold"
                  : i < step
                  ? "w-2.5 bg-forest"
                  : "w-2.5 bg-forest/20"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Hidden Honeypot Spam Trap */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botTrap">Leave empty</label>
          <input
            id="botTrap"
            name="botTrap"
            type="text"
            value={formData.botTrap || ""}
            onChange={(e) => updateField("botTrap", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: INTEREST */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-4"
            >
              <p className="text-body-sm text-charcoal-muted">
                Select the path that matches your journey. We will tailor the questions to your needs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    id: "student_placement",
                    title: "University Student Placement",
                    desc: "Medical, nursing, or social work elective needing credit, logbooks, and supervisor sign-off.",
                    icon: GraduationCap
                  },
                  {
                    id: "volunteer",
                    title: "Independent Volunteer",
                    desc: "Gap-year, career break, or retiree seeking ethical community immersion and homestays.",
                    icon: HeartHandshake
                  },
                  {
                    id: "post_safari",
                    title: "5-Day Post-Placement Safari",
                    desc: "Earned adventure: Queen Elizabeth NP, Kazinga Channel cruise, and Lake Bunyonyi.",
                    icon: Compass
                  },
                  {
                    id: "leisure_safari",
                    title: "Leisure Safaris & Gorillas",
                    desc: "Bespoke wildlife expeditions: Bwindi gorillas, Kibale chimps, Murchison Falls.",
                    icon: Compass
                  },
                  {
                    id: "university_partnership",
                    title: "University / Institutional Partnership",
                    desc: "Faculty-led cohort, study abroad dean, or departmental partnership discussion.",
                    icon: Building2,
                    colSpan: "sm:col-span-2"
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.interest === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => updateField("interest", item.id as InquiryInterest)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        item.colSpan || ""
                      } ${
                        isSelected
                          ? "border-forest bg-forest/5 ring-2 ring-forest/20 shadow-xs"
                          : "border-forest/15 hover:border-forest/40 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-forest text-gold" : "bg-forest/10 text-forest"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-forest-dark text-body-sm">{item.title}</h4>
                          <p className="text-caption text-charcoal-muted mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.interest && <p className="text-caption text-red-600">{errors.interest}</p>}
            </motion.div>
          )}

          {/* STEP 2: CONTACT & TRAVEL TYPE */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1.5">
                    Full Legal Name <span className="text-ochre">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 focus:border-forest focus:ring-1 focus:ring-forest text-body-sm bg-white"
                  />
                  {errors.fullName && <p className="text-caption text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1.5">
                    Email Address <span className="text-ochre">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="e.g. elena@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 focus:border-forest focus:ring-1 focus:ring-forest text-body-sm bg-white"
                  />
                  {errors.email && <p className="text-caption text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1.5">
                    WhatsApp or Phone Number <span className="text-ochre">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => updateField("phoneOrWhatsApp", e.target.value)}
                    placeholder="e.g. +44 7700 900451"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 focus:border-forest focus:ring-1 focus:ring-forest text-body-sm bg-white"
                  />
                  {errors.phoneOrWhatsApp && (
                    <p className="text-caption text-red-600 mt-1">{errors.phoneOrWhatsApp}</p>
                  )}
                </div>

                <div>
                  <label className="block text-caption font-bold text-forest-dark mb-1.5">
                    Country of Residence <span className="text-ochre">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    placeholder="e.g. United Kingdom / USA / Germany"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 focus:border-forest focus:ring-1 focus:ring-forest text-body-sm bg-white"
                  />
                  {errors.country && <p className="text-caption text-red-600 mt-1">{errors.country}</p>}
                </div>
              </div>

              <div>
                <label className="block text-caption font-bold text-forest-dark mb-1.5">
                  Travel Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "individual", label: "Individual Traveler / Student" },
                    { id: "group", label: "Group / Academic Cohort" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => updateField("travelType", t.id as "individual" | "group")}
                      className={`py-2.5 px-3 rounded-xl border text-body-sm font-medium transition-colors ${
                        formData.travelType === t.id
                          ? "border-forest bg-forest/5 text-forest-dark font-semibold"
                          : "border-forest/20 text-charcoal hover:bg-forest/5"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: DYNAMIC FIELDS */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-4"
            >
              {/* Conditional for Student Placement */}
              {formData.interest === "student_placement" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-bold text-forest-dark mb-1.5">
                        Placement Sector
                      </label>
                      <select
                        value={formData.dynamicFields.placementSector || "medical_healthcare"}
                        onChange={(e) => updateDynamicField("placementSector", e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                      >
                        <option value="medical_healthcare">Medical & Healthcare (Hospitals/Clinics)</option>
                        <option value="social_work_education">Social Work & Primary Education</option>
                        <option value="community_ngo">Community Development & NGO</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-caption font-bold text-forest-dark mb-1.5">
                        Duration in Weeks
                      </label>
                      <select
                        value={formData.dynamicFields.durationWeeks || 4}
                        onChange={(e) => updateDynamicField("durationWeeks", Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                      >
                        <option value={4}>4 Weeks (Standard elective)</option>
                        <option value={6}>6 Weeks</option>
                        <option value={8}>8 Weeks</option>
                        <option value={12}>12 Weeks (Full semester)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-caption font-bold text-forest-dark mb-1.5">
                        University or College <span className="text-ochre">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.dynamicFields.universityName || ""}
                        onChange={(e) => updateDynamicField("universityName", e.target.value)}
                        placeholder="e.g. University of Edinburgh"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                      />
                      {errors.universityName && (
                        <p className="text-caption text-red-600 mt-1">{errors.universityName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-caption font-bold text-forest-dark mb-1.5">
                        Degree Program / Year
                      </label>
                      <input
                        type="text"
                        value={formData.dynamicFields.fieldOfStudy || ""}
                        onChange={(e) => updateDynamicField("fieldOfStudy", e.target.value)}
                        placeholder="e.g. 4th Year Nursing / Pre-Med"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-parchment border border-forest/15 space-y-2">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(formData.dynamicFields.safariAddonInterested)}
                        onChange={(e) => updateDynamicField("safariAddonInterested", e.target.checked)}
                        className="w-4 h-4 rounded text-forest focus:ring-forest"
                      />
                      <span className="font-serif font-bold text-forest-dark text-body-sm">
                        Add the 5-Day Queen Elizabeth & Lake Bunyonyi Post-Placement Safari?
                      </span>
                    </label>
                    <p className="text-caption text-charcoal-muted pl-6">
                      Earned reward: transition smoothly from hospital/school into Uganda's legendary wildlife corridor with door-to-door transit.
                    </p>
                  </div>
                </>
              )}

              {/* Conditional for Independent Volunteer */}
              {formData.interest === "volunteer" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Target Duration
                    </label>
                    <select
                      value={formData.dynamicFields.durationWeeks || 4}
                      onChange={(e) => updateDynamicField("durationWeeks", Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    >
                      <option value={2}>2 Weeks</option>
                      <option value={4}>4 Weeks (Recommended)</option>
                      <option value={8}>8 Weeks</option>
                      <option value={12}>12+ Weeks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Preferred Housing Style
                    </label>
                    <select
                      value={formData.dynamicFields.travelStyle || "homestay"}
                      onChange={(e) => updateDynamicField("travelStyle", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    >
                      <option value="homestay">Vetted Host Family (Full Immersion)</option>
                      <option value="guest_house">Private Volunteer Guest House</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Conditional for Safari Options */}
              {(formData.interest === "post_safari" || formData.interest === "leisure_safari") && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Safari Package Focus
                    </label>
                    <select
                      value={formData.dynamicFields.safariPackage || "5_day_post_placement"}
                      onChange={(e) => updateDynamicField("safariPackage", e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    >
                      <option value="5_day_post_placement">5-Day Queen Elizabeth & Lake Bunyonyi</option>
                      <option value="gorilla_bwindi">Bwindi Mountain Gorilla Trekking</option>
                      <option value="chimp_kibale">Kibale Forest Chimpanzee Experience</option>
                      <option value="murchison_jinja">Murchison Falls & Source of the Nile</option>
                      <option value="custom">Custom Tailored Multi-Park Expedition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={formData.dynamicFields.travelersCount || 1}
                      onChange={(e) => updateDynamicField("travelersCount", Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Conditional for University Partnership */}
              {formData.interest === "university_partnership" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Institution & Department <span className="text-ochre">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.dynamicFields.departmentOrFaculty || ""}
                      onChange={(e) => updateDynamicField("departmentOrFaculty", e.target.value)}
                      placeholder="e.g. Faculty of Health Sciences"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    />
                    {errors.departmentOrFaculty && (
                      <p className="text-caption text-red-600 mt-1">{errors.departmentOrFaculty}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-caption font-bold text-forest-dark mb-1.5">
                      Estimated Cohort Size
                    </label>
                    <input
                      type="number"
                      min={4}
                      max={40}
                      value={formData.dynamicFields.estimatedCohortSize || 10}
                      onChange={(e) => updateDynamicField("estimatedCohortSize", Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-caption font-bold text-forest-dark mb-1.5">
                  Target Start Month or Season
                </label>
                <input
                  type="text"
                  value={formData.dynamicFields.targetMonth || ""}
                  onChange={(e) => updateDynamicField("targetMonth", e.target.value)}
                  placeholder="e.g. July 2026 or Spring Semester"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 text-body-sm bg-white"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 4: MESSAGE & SAFEGUARDING */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-caption font-bold text-forest-dark mb-1.5">
                  Personal Objectives, Questions or Logbook Requirements <span className="text-ochre">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell Collins and our field team about your learning goals, specific clinical specialties, or scheduling constraints..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-forest/20 focus:border-forest text-body-sm bg-white"
                />
                {errors.message && <p className="text-caption text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="p-4 rounded-xl bg-parchment border border-forest/15 space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.safeguardingAgreed}
                    onChange={(e) => updateField("safeguardingAgreed", e.target.checked)}
                    className="w-4 h-4 rounded text-forest focus:ring-forest mt-1 shrink-0"
                  />
                  <span className="text-caption text-forest-dark leading-relaxed">
                    <span className="font-bold">Ethical Volunteering & Safeguarding Acknowledgment:</span> I understand that
                    all placements strictly require supervised practice, no unconsented child photography, verified police
                    clearance, and observation-only clinical scope. I agree to uphold these standards.
                  </span>
                </label>
                {errors.safeguardingAgreed && (
                  <p className="text-caption text-red-600 pl-6">{errors.safeguardingAgreed}</p>
                )}
              </div>

              {submissionError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-caption flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{submissionError}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Navigation Buttons */}
        <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="btn-press min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-forest/20 text-forest text-body-sm font-medium hover:bg-forest/5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs hover:bg-forest-light"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 disabled:opacity-50"
            >
              {submitting ? (
                <span>Submitting Inquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry (24h SLA)</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
