"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Calculator, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  Users, 
  Building, 
  Plane,
  HeartHandshake
} from "lucide-react";

interface DisciplineOption {
  id: string;
  title: string;
  station: string;
  baseDays: number;
  basePerStudentUSD: number;
  description: string;
  defaultOutcomes: string[];
}

const disciplines: DisciplineOption[] = [
  {
    id: "primate-ecology",
    title: "Primate Behavioral Ecology & Conservation",
    station: "Makerere Biological Field Station (MUBFS), Kibale",
    baseDays: 12,
    basePerStudentUSD: 3450,
    description: "Dawn focal troop sampling, canopy microclimate profiling, and MUBFS student research symposium.",
    defaultOutcomes: [
      "Focal animal behavioral ethograms (Pan troglodytes)",
      "Rainforest canopy light attenuation logging",
      "Beehive fence human-wildlife conflict buffer survey",
      "Shoebill Stork census at Mabamba Bay Ramsar site",
    ]
  },
  {
    id: "peace-studies",
    title: "Transitional Justice & Post-Conflict Recovery",
    station: "Gulu University Institute of Peace & Strategic Studies (IPSS)",
    baseDays: 10,
    basePerStudentUSD: 2950,
    description: "Comparative ICC jurisprudence vs indigenous Mato Oput reconciliation with Acholi elders.",
    defaultOutcomes: [
      "Comparative analysis of ICC vs customary Mato Oput",
      "Auditing former child combatant rehabilitation programs",
      "Acholi Council of Elders moderated peace dialogue",
      "Civilian trauma memorialization site policy brief",
    ]
  },
  {
    id: "agro-ecology",
    title: "Agro-Ecology, Coffee Cooperatives & CAS",
    station: "Mount Elgon Sustainable Agriculture Hub, Sipi",
    baseDays: 9,
    basePerStudentUSD: 2450,
    description: "Arabica coffee value chains, volcanic slope reforestation, and household bio-digester construction.",
    defaultOutcomes: [
      "Bugisu Arabica coffee cooperative value-chain tracing",
      "Volcanic slope landslide hazard and soil moisture mapping",
      "300 indigenous tree planting for watershed restoration",
      "45+ accredited IB CAS service learning hours",
    ]
  },
  {
    id: "custom-hybrid",
    title: "Custom Multi-Disciplinary Field School",
    station: "Makerere MUBFS + Gulu IPSS + Kampala Hub",
    baseDays: 14,
    basePerStudentUSD: 3950,
    description: "Bespoke itinerary blending biological sciences, political economy, and community public health.",
    defaultOutcomes: [
      "Cross-discipline field research modules tailored to syllabus",
      "Joint guest lectures across Makerere, Gulu, and MUST faculties",
      "Comprehensive field data repository for department archive",
    ]
  }
];

export default function ProposalWizard() {
  const [step, setStep] = useState(1);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState("primate-ecology");
  const [cohortSize, setCohortSize] = useState(12);
  const [term, setTerm] = useState("Summer 2027");
  const [creditType, setCreditType] = useState("3 US Credits");
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>(disciplines[0].defaultOutcomes);
  const [lodgingTier, setLodgingTier] = useState<"dorm" | "cottage" | "safari">("dorm");
  const [includeUNCST, setIncludeUNCST] = useState(true);
  const [institutionName, setInstitutionName] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const activeDiscipline = disciplines.find((d) => d.id === selectedDisciplineId) || disciplines[0];

  const lodgingCostPerStudent = lodgingTier === "dorm" ? 0 : lodgingTier === "cottage" ? 350 : 750;
  const uncstCostPerStudent = includeUNCST ? 220 : 0;
  const perStudentSubtotal = activeDiscipline.basePerStudentUSD + lodgingCostPerStudent + uncstCostPerStudent;
  const totalCohortEstimate = perStudentSubtotal * cohortSize;
  const chaperonesIncluded = Math.max(1, Math.ceil(cohortSize / 6));

  const handleDisciplineSelect = (disc: DisciplineOption) => {
    setSelectedDisciplineId(disc.id);
    setSelectedOutcomes(disc.defaultOutcomes);
  };

  const toggleOutcome = (outcome: string) => {
    if (selectedOutcomes.includes(outcome)) {
      setSelectedOutcomes(selectedOutcomes.filter((o) => o !== outcome));
    } else {
      setSelectedOutcomes([...selectedOutcomes, outcome]);
    }
  };

  const handleDownloadProposal = () => {
    const textContent = `
============================================================
PEARL ROOTS & EXPEDITIONS — OFFICIAL COURSE PROPOSAL DOSSIER
Founder & Director: Collins Ssegawa (ex-UNDP)
Location: Uganda Living Laboratory
Generated for: ${institutionName || "Academic Partner"}
Faculty Contact: ${facultyEmail || "department@university.edu"}
============================================================

1. CURRICULUM PROFILE:
- Program: ${activeDiscipline.title}
- Field Station: ${activeDiscipline.station}
- Duration: ${activeDiscipline.baseDays} Days
- Academic Term: ${term}
- Academic Credit Allocation: ${creditType}

2. COHORT & DUTY-OF-CARE RATIOS:
- Enrolled Students: ${cohortSize}
- Complimentary Faculty Chaperones: ${chaperonesIncluded} (Ratio 1:6 compliant)
- Police & Safeguarding Vetting: 100% INTERPOL / Police Certified Staff
- Aero-Medical Evacuation: AMREF Flying Doctors 24/7 Enrolled (Kasese/Gulu/Entebbe)
- Primary Level-4 Receiving Facility: Nakasero Hospital, Kampala

3. LOGISTICS SPECIFICATIONS:
- Field Station Lodging: ${lodgingTier.toUpperCase()}
- Expedition Fleet: 4x4 Safari Land Cruisers with Garmin inReach SOS & Cellular Routers
- UNCST Permitting: ${includeUNCST ? "Included (REC Ethics Protocol Facilitation)" : "Managed by University"}

4. ITEMIZED FINANCIAL ESTIMATE (USD):
- Estimated Per-Student Tuition: $${perStudentSubtotal.toLocaleString()}
- Total Cohort Investment: $${totalCohortEstimate.toLocaleString()}
- Complimentary Chaperone Value: $${(chaperonesIncluded * perStudentSubtotal).toLocaleString()} (WAIVED)

============================================================
To finalize dates or request syllabus review, contact Collins Ssegawa:
collins@pearlroots.com | WhatsApp: +256 (0) 700 892 410 (Direct Dispatch)
Planned Operations Liaison: Plot 14 Lugard Ave, Entebbe Gateway, Uganda
============================================================
    `.trim();

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Pearl-Roots-Course-Proposal-${selectedDisciplineId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-parchment-card rounded-2xl border border-forest/15 shadow-xs p-6 sm:p-10 text-charcoal">
      <div className="border-b border-forest/10 pb-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-eyebrow flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-ochre" />
              <span>B2B Institutional Course Builder</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark mt-1">
              Field Course Proposal & Budget Engine
            </h3>
          </div>

          <div className="text-right">
            <span className="text-caption font-mono text-charcoal-light">
              Step {step} of 4
            </span>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
                    s === step
                      ? "w-8 bg-forest"
                      : s < step
                      ? "w-4 bg-forest/40"
                      : "w-4 bg-forest/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-body-sm font-semibold">
          {[
            { num: 1, label: "1. Discipline" },
            { num: 2, label: "2. Cohort & Term" },
            { num: 3, label: "3. Logistics & RAMS" },
            { num: 4, label: "4. Proposal & Budget" },
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => setStep(item.num)}
              className={`btn-press min-h-[44px] py-2.5 px-3 rounded-xl text-left flex items-center gap-2 cursor-pointer ${
                step === item.num
                  ? "bg-forest text-parchment font-bold shadow-xs"
                  : step > item.num
                  ? "bg-forest/10 text-forest-dark font-semibold"
                  : "bg-parchment-muted/50 text-charcoal-light hover:bg-parchment-muted"
              }`}
            >
              <span>{item.label}</span>
              {step > item.num && <Check className="w-3.5 h-3.5 text-forest ml-auto" />}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(-10px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(10px)" }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    Select Academic Discipline & Field Syllabus
                  </h4>
                  <p className="text-body-sm text-charcoal-muted mt-1">
                    Choose from our turnkey accredited field schools or design a multi-disciplinary cohort.
                  </p>
                </div>

                <div className="space-y-3">
                  {disciplines.map((disc) => (
                    <div
                      key={disc.id}
                      onClick={() => handleDisciplineSelect(disc)}
                      className={`btn-press p-4 rounded-2xl border cursor-pointer ${
                        selectedDisciplineId === disc.id
                          ? "border-forest bg-forest/5 ring-1 ring-forest shadow-xs"
                          : "border-forest/10 hover:border-forest/30 bg-parchment"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="font-serif font-bold text-base text-forest-dark">
                            {disc.title}
                          </h5>
                          <p className="text-body-sm text-ochre font-medium mt-0.5">
                            {disc.station} • {disc.baseDays} Days
                          </p>
                          <p className="text-body-sm text-charcoal-muted mt-1.5 leading-relaxed">
                            {disc.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-body-sm font-bold text-forest-dark">
                            ${disc.basePerStudentUSD.toLocaleString()}
                          </span>
                          <span className="text-body-sm text-charcoal-light block">/ student</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                    Accredited Credit Allocation Requirement:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Non-Credit / CAS", "3 US Credits", "6 US Credits"].map((cr) => (
                      <button
                        key={cr}
                        type="button"
                        onClick={() => setCreditType(cr)}
                        className={`btn-press min-h-[44px] py-2.5 px-3 rounded-xl text-body-sm font-semibold border cursor-pointer ${
                          creditType === cr
                            ? "bg-forest text-parchment border-forest"
                            : "bg-parchment border-forest/10 text-charcoal hover:bg-forest/5"
                        }`}
                      >
                        {cr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                    Target Learning Outcomes:
                  </label>
                  <div className="space-y-2">
                    {activeDiscipline.defaultOutcomes.map((outcome, i) => {
                      const isChecked = selectedOutcomes.includes(outcome);
                      return (
                        <div
                          key={i}
                          onClick={() => toggleOutcome(outcome)}
                          className={`btn-press flex items-start gap-3 p-3.5 rounded-xl border text-body-sm cursor-pointer ${
                            isChecked
                              ? "bg-forest/5 border-forest/30 text-forest-dark font-medium"
                              : "bg-parchment border-forest/10 text-charcoal-muted"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                              isChecked ? "bg-forest border-forest text-white" : "border-forest/30"
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span>{outcome}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm shadow-xs cursor-pointer"
                  >
                    <span>Configure Cohort & Term</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(-10px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(10px)" }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    Cohort Size & Academic Term
                  </h4>
                  <p className="text-body-sm text-charcoal-muted mt-1">
                    University institutional risk committees mandate strict chaperone-to-student ratios.
                  </p>
                </div>

                <div className="bg-parchment p-6 rounded-2xl border border-forest/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted">
                      Enrolled Students:
                    </label>
                    <span className="font-serif text-2xl font-bold text-forest">
                      {cohortSize} Students
                    </span>
                  </div>

                  <input
                    type="range"
                    min="6"
                    max="28"
                    step="1"
                    value={cohortSize}
                    onChange={(e) => setCohortSize(parseInt(e.target.value))}
                    className="w-full accent-forest h-2 bg-forest/15 rounded-lg cursor-pointer"
                  />

                  <div className="flex justify-between text-caption text-charcoal-light font-mono">
                    <span>Min: 6 Students</span>
                    <span>Standard: 12-16</span>
                    <span>Max Cap: 28 Students</span>
                  </div>

                  <div className="mt-4 p-3.5 rounded-xl bg-forest/5 border border-forest/15 flex items-center justify-between text-body-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-forest" />
                      <span className="text-forest-dark font-medium">
                        Complimentary Faculty Chaperones (1:6 Ratio):
                      </span>
                    </div>
                    <span className="font-bold text-forest bg-forest/10 px-2.5 py-0.5 rounded-lg font-mono">
                      {chaperonesIncluded} Slots Comped
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                    Target Deployment Term:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Fall 2026", "Spring 2027", "Summer 2027", "Fall 2027"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTerm(t)}
                        className={`btn-press min-h-[44px] py-2.5 px-3 rounded-xl text-body-sm font-semibold border cursor-pointer ${
                          term === t
                            ? "bg-forest text-parchment border-forest"
                            : "bg-parchment border-forest/10 text-charcoal hover:bg-forest/5"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-press min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-forest/20 text-forest text-body-sm font-semibold hover:bg-forest/5 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm shadow-xs cursor-pointer"
                  >
                    <span>Configure Logistics & RAMS</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(-10px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(10px)" }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    Lodging & Regulatory RAMS Protocols
                  </h4>
                  <p className="text-body-sm text-charcoal-muted mt-1">
                    Select accommodation tiers and institutional research permitting support.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                    Accommodation Tier:
                  </label>
                  {[
                    {
                      id: "dorm",
                      name: "Makerere MUBFS / IPSS Academic Dormitories",
                      priceDiff: "+$0 (Included)",
                      desc: "Shared academic dorm rooms, wet lab proximity, solar hot water, study halls."
                    },
                    {
                      id: "cottage",
                      name: "Academic Field Cottages & Forest Guest Houses",
                      priceDiff: "+$350 / student",
                      desc: "Twin-share en-suite cottages with private balconies and dedicated research desks."
                    },
                    {
                      id: "safari",
                      name: "Eco-Safari Luxury Academic Lodges",
                      priceDiff: "+$750 / student",
                      desc: "Premium eco-lodge tented suites overlooking rainforest canopy and crater lakes."
                    }
                  ].map((lodge) => (
                    <button
                      key={lodge.id}
                      type="button"
                      onClick={() => setLodgingTier(lodge.id as "dorm" | "cottage" | "safari")}
                      className={`btn-press w-full text-left p-4 rounded-2xl border cursor-pointer ${
                        lodgingTier === lodge.id
                          ? "border-forest bg-forest/5 ring-1 ring-forest"
                          : "border-forest/10 bg-parchment hover:border-forest/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <Building className="w-4 h-4 text-forest mt-1 shrink-0" />
                          <div>
                            <h5 className="font-semibold text-body-sm text-forest-dark">{lodge.name}</h5>
                            <p className="text-body-sm text-charcoal-muted mt-1 leading-relaxed">{lodge.desc}</p>
                          </div>
                        </div>
                        <span className="text-body-sm font-bold text-ochre shrink-0">{lodge.priceDiff}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-parchment border border-forest/10 space-y-3">
                  <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                    Institutional Governance & Clearances:
                  </label>
                  <label
                    className="flex items-start gap-3 cursor-pointer select-none p-2 rounded-xl hover:bg-forest/5 min-h-[44px]"
                  >
                    <input
                      type="checkbox"
                      checked={includeUNCST}
                      onChange={(e) => setIncludeUNCST(e.target.checked)}
                      className="accent-forest w-4 h-4 mt-1 shrink-0"
                    />
                    <div className="text-body-sm">
                      <span className="font-semibold text-forest-dark">
                        Uganda National Council for Science and Technology (UNCST) Facilitation
                      </span>
                      <p className="text-charcoal-muted text-body-sm mt-0.5">
                        Research Ethics Committee (REC) protocol submission, visa letters, and official permit processing (+$220/student).
                      </p>
                    </div>
                  </label>

                  <div className="pt-2 border-t border-forest/10 flex items-center gap-2 text-body-sm text-forest">
                    <Plane className="w-4 h-4 text-ochre" />
                    <span><strong>AMREF Flying Doctors Protocol:</strong> 24/7 Aero-Medical Evacuation protocol is established for cohort participants.</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-press min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-forest/20 text-forest text-body-sm font-semibold hover:bg-forest/5 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm shadow-xs cursor-pointer"
                  >
                    <span>Generate Proposal Summary</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(-10px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                exit={{ opacity: 0, transform: shouldReduceMotion ? "translateX(0)" : "translateX(10px)" }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    Review Dossier & Export Proposal
                  </h4>
                  <p className="text-body-sm text-charcoal-muted mt-1">
                    Your institutional course dossier has been generated with live budget calculations and RAMS compliance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-parchment p-4 rounded-2xl border border-forest/10">
                  <div>
                    <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                      Academic Institution:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. University of Edinburgh"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                      Faculty / Coordinator Email:
                    </label>
                    <input
                      type="email"
                      placeholder="faculty@university.edu"
                      value={facultyEmail}
                      onChange={(e) => setFacultyEmail(e.target.value)}
                      className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 bg-forest/5 p-4 rounded-2xl border border-forest/15 text-body-sm">
                  <div className="flex justify-between pb-2 border-b border-forest/10">
                    <span className="font-semibold text-forest-dark">Course Discipline:</span>
                    <span className="text-charcoal font-medium">{activeDiscipline.title}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-forest/10">
                    <span className="font-semibold text-forest-dark">Field Station:</span>
                    <span className="text-charcoal font-medium">{activeDiscipline.station}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-forest/10">
                    <span className="font-semibold text-forest-dark">Cohort Structure:</span>
                    <span className="text-charcoal font-medium">{cohortSize} Students + {chaperonesIncluded} Chaperones</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-forest/10">
                    <span className="font-semibold text-forest-dark">Deployment Term:</span>
                    <span className="text-charcoal font-medium">{term} ({creditType})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-forest-dark">Duty of Care:</span>
                    <span className="text-charcoal font-medium">AMREF PC-12 Aero-Medical Protocol + Level-4 Hospital Liaison</span>
                  </div>
                </div>

                {submitted && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-body-sm text-emerald-800 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Proposal Dossier Downloaded Successfully!</p>
                      <p className="text-body-sm mt-0.5">
                        Our Expedition Director Collins Ssegawa has been notified. You can also message him directly on WhatsApp for date locks.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setStep(3)}
                    className="btn-press min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-forest/20 text-forest text-body-sm font-semibold hover:bg-forest/5 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleDownloadProposal}
                    className="btn-press min-h-[44px] flex-1 py-3 px-6 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-gold-dark/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Course Proposal Dossier (.TXT)</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-5 bg-forest-dark text-parchment rounded-2xl p-6 sm:p-7 border border-forest-surface shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-forest/50 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-body-sm font-bold uppercase tracking-wider text-parchment">
                Live Cohort Budget Ledger
              </span>
            </div>
            <span className="text-caption font-mono text-gold bg-forest px-2 py-0.5 rounded">
              USD ESTIMATE
            </span>
          </div>

          <div className="bg-forest/60 p-4 rounded-2xl border border-forest-light/30 space-y-3">
            <div>
              <span className="text-body-sm text-parchment/70">Estimated Tuition per Student:</span>
              <div className="font-serif text-3xl font-bold text-parchment mt-0.5">
                ${perStudentSubtotal.toLocaleString()}
                <span className="text-body-sm text-parchment/60 font-sans font-normal ml-1">/ student</span>
              </div>
            </div>

            <div className="pt-2 border-t border-forest/40 flex items-center justify-between">
              <span className="text-body-sm text-parchment/80">Total Cohort Investment ({cohortSize} pax):</span>
              <span className="font-serif text-xl font-bold text-parchment">
                ${totalCohortEstimate.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-body-sm text-parchment/80">
            <div className="flex justify-between py-1 border-b border-forest/30">
              <span>Base Field School ({activeDiscipline.baseDays} Days):</span>
              <span className="font-mono text-parchment">${activeDiscipline.basePerStudentUSD.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-forest/30">
              <span>Lodging Tier Differential:</span>
              <span className="font-mono text-parchment">+${lodgingCostPerStudent}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-forest/30">
              <span>UNCST Research Permit Facilitation:</span>
              <span className="font-mono text-parchment">+${uncstCostPerStudent}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-forest/30">
              <span>Faculty Chaperones (1:6 Ratio):</span>
              <span className="font-mono text-emerald-400">100% COMPLIMENTARY ({chaperonesIncluded} slots)</span>
            </div>
            <div className="flex justify-between py-1">
              <span>AMREF Aero-Medical Evacuation Protocol:</span>
              <span className="font-mono text-gold">INCLUDED</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-forest/40 border border-forest/50 text-body-sm text-parchment/85 space-y-1.5">
            <div className="flex items-center gap-1.5 text-gold font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional Duty of Care Compact</span>
            </div>
            <p className="font-light leading-relaxed">
              Institutional risk mitigation protocol structured with Collins Ssegawa&apos;s UNDP alumni governance framework. Direct institutional billing in USD, EUR, or GBP.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20reviewing%20the%20${encodeURIComponent(activeDiscipline.title)}%20for%20a%20cohort%20of%20${cohortSize}%20students.`}
              target="_blank"
              rel="noreferrer"
              className="btn-press min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-forest hover:bg-forest-light text-parchment font-semibold text-body-sm text-center flex items-center justify-center gap-2 shadow-xs border border-forest-light/40"
            >
              <HeartHandshake className="w-4 h-4 text-gold" />
              <span>Discuss Custom Terms on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
