import { Metadata } from "next";
import ProposalWizard from "@/components/ProposalWizard";
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Educators Hub & Risk Governance | Pearl Roots & Expeditions",
  description: "Institutional procurement, 4-tier emergency medical protocols, RAMS compliance, and B2B course proposal wizard for university faculty and study abroad deans.",
};

export default function EducatorsPage() {
  return (
    <div className="container-shell py-12 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest-dark text-caption font-semibold">
          <ShieldCheck className="w-4 h-4 text-ochre" />
          <span className="text-eyebrow">Institutional Procurement & Risk Governance</span>
        </div>
        <h1 className="text-h1 text-forest-dark">
          Academic Duty of Care & Course Builder
        </h1>
        <p className="text-body-lg">
          Designed specifically for University Study Abroad Deans, Biology Department Chairs, and IB CAS Coordinators. Collins Ssegawa (former UNDP) bridges academic rigor with UN-grade safety and institutional accountability.
        </p>
      </div>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            Comprehensive Medical Emergency Plan
          </span>
          <h2 className="text-h2 text-forest-dark">
            4-Tier Critical Incident Escalation Matrix
          </h2>
          <p className="text-body">
            From field-level wilderness first aid to direct aero-evacuation into East Africa’s premier trauma intensive care unit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold text-body-sm">
                L1
              </div>
              <span className="text-caption font-bold text-ochre block">
                FIELD STABILIZATION
              </span>
              <h3 className="font-serif text-lg font-bold text-forest-dark">
                Field Guides & Satellite SOS
              </h3>
              <p className="text-body-sm leading-relaxed">
                Wilderness First Responder (WFR) guides with comprehensive trauma packs, onboard LifeStraw filtration, and Garmin inReach satellite SOS transmitters with two-way dispatch.
              </p>
            </div>
            <div className="pt-3 border-t border-forest/10 text-caption text-forest font-semibold">
              ✓ Immediate Field Response (0 mins)
            </div>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-ochre/10 flex items-center justify-center text-ochre font-bold text-body-sm">
                L2
              </div>
              <span className="text-caption font-bold text-ochre block">
                REGIONAL CARE
              </span>
              <h3 className="font-serif text-lg font-bold text-forest-dark">
                Pre-Vetted Referral Clinics
              </h3>
              <p className="text-body-sm leading-relaxed">
                Pre-audited regional diagnostic hospitals: Virika Hospital (Fort Portal / Kibale) and St. Mary’s Hospital Lacor (Gulu). Pre-established medical liaison accounts.
              </p>
            </div>
            <div className="pt-3 border-t border-forest/10 text-caption text-ochre font-semibold">
              ✓ Ground Transit: 25–45 mins
            </div>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-forest-dark text-parchment border border-forest-surface shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold font-bold text-body-sm">
                L3
              </div>
              <span className="text-caption font-mono uppercase tracking-wider text-gold font-bold block">
                AERO-MEDICAL AIRLIFT
              </span>
              <h3 className="font-serif text-lg font-bold text-parchment">
                AMREF Flying Doctors Protocol
              </h3>
              <p className="text-body-sm text-parchment/80 leading-relaxed font-light">
                Staged aero-medical evacuation protocol. ICU-configured aircraft deployed directly to regional airstrips (Kasese, Kihihi, Gulu) as coordinated with local partners.
              </p>
            </div>
            <div className="pt-3 border-t border-forest/40 text-caption text-gold font-mono font-semibold">
              ✓ Air Evac: 42–55 mins to Capital
            </div>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest font-bold text-body-sm">
                L4
              </div>
              <span className="text-caption font-mono uppercase tracking-wider text-ochre font-bold block">
                TERTIARY RECEIVING
              </span>
              <h3 className="font-serif text-lg font-bold text-forest-dark">
                Level-4 Trauma Hospital Liaison
              </h3>
              <p className="text-body-sm text-charcoal-muted leading-relaxed">
                Ground transfer protocols to Nakasero Hospital and The Surgery Uganda in Kampala, with pre-established liaison pathways for rapid triage.
              </p>
            </div>
            <div className="pt-3 border-t border-forest/10 text-caption text-forest font-semibold">
              ✓ Zero-Delay Direct ICU Triage
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8 bg-parchment-muted/60 p-8 sm:p-12 rounded-2xl border border-forest/10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            Institutional Procurement Roadmap
          </span>
          <h2 className="text-h2 text-forest-dark">
            The 14-Month Field Course Pipeline
          </h2>
          <p className="text-body">
            How we guide university faculty from initial syllabus drafting through risk board audits and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            {
              phase: "Months 0 – 3",
              title: "Curriculum Drafting",
              points: [
                "Faculty identifies academic focus & credit hours",
                "Pearl Roots delivers draft 12-day syllabus",
                "Preliminary budget model & station availability locked"
              ]
            },
            {
              phase: "Months 4 – 6",
              title: "Institutional Risk Audit",
              points: [
                "Study Abroad Risk Committee audits RAMS dossier",
                "AMREF Flying Doctors emergency protocol verified",
                "UNCST Research Ethics Committee (REC) facilitation initiated"
              ]
            },
            {
              phase: "Months 7 – 9",
              title: "Student Recruitment",
              points: [
                "On-campus info sessions & parent webinars",
                "Flight blocks secured via Entebbe gateway",
                "Pre-departure medical & cultural briefing pack"
              ]
            },
            {
              phase: "Months 10 – 14",
              title: "Deployment & Capstone",
              points: [
                "Planned field research and wet lab station residency",
                "Field research symposium & student poster sessions",
                "Post-trip academic grading transcripts issued"
              ]
            }
          ].map((col, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3"
            >
              <span className="text-caption font-bold text-ochre block">
                {col.phase}
              </span>
              <h3 className="font-serif font-bold text-base text-forest-dark">
                {col.title}
              </h3>
              <ul className="space-y-2 text-body-sm text-charcoal-muted pt-1">
                {col.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="builder" className="space-y-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            Live Cohort Budget Engine
          </span>
          <h2 className="text-h2 text-forest-dark">
            Interactive Course Proposal Builder
          </h2>
          <p className="text-body">
            Configure your cohort size, chaperone requirements, and accommodation tier to generate an itemized institutional proposal.
          </p>
        </div>

        <ProposalWizard />
      </section>

      <section className="space-y-6 border-t border-forest/10 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            Faculty Resources
          </span>
          <h2 className="text-h2 text-forest-dark">
            Compliance & Syllabus Downloads
          </h2>
          <p className="text-body">
            Download sample risk management documentation and curriculum frameworks for your department review.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <FileText className="w-6 h-6 text-forest" />
            <h3 className="font-serif font-bold text-base text-forest-dark">
              18-Page Faculty Field Course Dossier
            </h3>
            <p className="text-body-sm leading-relaxed">
              Complete course outlines, daily hour logs, reading lists, and accredited syllabus evaluation matrices.
            </p>
            <a
              href="#builder"
              className="btn-press min-h-[44px] inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre pt-2"
            >
              <span>Download via Builder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <ShieldCheck className="w-6 h-6 text-ochre" />
            <h3 className="font-serif font-bold text-base text-forest-dark">
              RAMS Risk Management Protocol
            </h3>
            <p className="text-body-sm leading-relaxed">
              Institutional duty of care audit, AMREF evacuation protocols, hospital triage liaison, and satellite communication trees.
            </p>
            <a
              href="mailto:collins@pearlroots.com?subject=Request%20RAMS%20Risk%20Dossier"
              className="btn-press min-h-[44px] inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre pt-2"
            >
              <span>Request RAMS Pack (PDF)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <Award className="w-6 h-6 text-gold" />
            <h3 className="font-serif font-bold text-base text-forest-dark">
              UNCST Research Permitting Guide
            </h3>
            <p className="text-body-sm leading-relaxed">
              Step-by-step guidance on Research Ethics Committee (REC) approvals, biological specimen transport, and student research visas.
            </p>
            <a
              href="mailto:collins@pearlroots.com?subject=Request%20UNCST%20Permit%20Guide"
              className="btn-press min-h-[44px] inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre pt-2"
            >
              <span>Request Permitting Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
