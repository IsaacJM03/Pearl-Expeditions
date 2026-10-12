import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  HeartPulse,
  AlertCircle,
  FileCheck,
  Compass
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Medical & Healthcare Placements in Uganda | Clinical Electives",
  description: "Supervised hospital electives and public health clinical shadowing in Uganda. Spotlight on Uganda's HIV/AIDS public health model with strict ethical boundaries."
};

export default function MedicalHealthcarePlacementsPage() {
  const content = cmsContent.placementSectors.medicalHealthcare;

  return (
    <div className="space-y-16 pb-20">
      {/* Sector Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Stethoscope className="w-4 h-4" />
            <span>Clinical Elective & Public Health Fieldwork</span>
          </div>

          <h1 className="text-display text-parchment">{content.title}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=student_placement"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Apply for Medical Elective</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/safeguarding"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Review Clinical Safeguards</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h2 className="text-h2 text-forest-dark">Clinical Setting & Program Overview</h2>
              <p className="text-body text-charcoal leading-relaxed font-light">
                {content.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-parchment border border-forest/10 text-caption text-charcoal-muted italic">
                {content.verificationPlaceholder}
              </div>
            </div>

            {/* Key Clinical Highlights */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-forest-dark">Clinical Rotations & Highlights</h3>
              <ul className="space-y-3">
                {content.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SPOTLIGHT ON UGANDA'S HIV/AIDS PUBLIC HEALTH LEADERSHIP */}
            <div className="bg-forest/5 p-8 rounded-2xl border border-forest/20 space-y-4">
              <div className="flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-ochre" />
                <span className="text-eyebrow text-ochre">Academic Field Spotlight</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-dark">
                Uganda's Global Leadership in HIV/AIDS Public Health
              </h3>
              <p className="text-body-sm text-charcoal leading-relaxed font-light">
                In the late 1980s and 1990s, Uganda became one of the first nations globally to dramatically reverse HIV prevalence rates. This historic public-health success was achieved not through stigma or isolation, but through open presidential leadership, decentralized community-based education, Village Health Teams (VHTs), and compassionate peer support networks.
              </p>
              <p className="text-body-sm text-charcoal leading-relaxed font-light">
                Medical and public health students on placement engage directly with these decentralized healthcare architectures. You will study how community health workers sustain antiretroviral therapy (ART) adherence, conduct respectful mobile outreach, and eliminate mother-to-child transmission (EMTCT)—learning lessons in public-health resilience applicable worldwide.
              </p>
              <div className="p-3 rounded-xl bg-white border border-forest/15 text-caption text-forest-dark font-medium">
                Note on Language: We strictly employ clinical, factual, and respectful terminology. Patients are recognized as individuals with rights and dignity, never defined by diagnostic categories.
              </div>
            </div>

            {/* Clinical Scope & Boundaries */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-forest" />
                <h3 className="font-serif text-xl font-bold text-forest-dark">
                  Clinical Scope & Patient Consent Guardrails
                </h3>
              </div>
              <p className="text-body-sm text-charcoal-muted leading-relaxed">
                To safeguard patients and students alike, we maintain strict adherence to ethical medical practice:
              </p>
              <div className="space-y-3">
                {content.clinicalOrFieldScope.map((scope, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-parchment border border-forest/10 flex items-start gap-3">
                    <FileCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span className="text-body-sm text-charcoal">{scope}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts & Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h4 className="font-serif font-bold text-forest-dark text-lg border-b border-forest/10 pb-3">
                Placement Specifications
              </h4>

              <div className="space-y-3 text-body-sm">
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Duration</span>
                  <span className="font-semibold text-forest-dark">{content.suggestedDuration}</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Supervision Ratio</span>
                  <span className="font-semibold text-forest-dark">1:2 to 1:4 with Senior Medical Officer</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Aero-Evacuation</span>
                  <span className="font-semibold text-forest-dark">AMREF Flying Doctors included</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Eligible Candidates</span>
                  <span className="font-semibold text-forest-dark">MBBS, MD, Nursing, Midwifery, MPH</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?interest=student_placement"
                  className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Inquire for This Sector</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Post-Placement Safari Add-On Banner */}
            <div className="p-6 rounded-2xl bg-parchment border border-forest/15 space-y-3">
              <div className="flex items-center gap-2 text-ochre">
                <Compass className="w-4 h-4" />
                <span className="text-caption font-bold uppercase tracking-wider">Earned Reward</span>
              </div>
              <h4 className="font-serif font-bold text-forest-dark">5-Day Post-Placement Safari</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Add our classic Queen Elizabeth NP and Lake Bunyonyi safari directly onto the conclusion of your hospital elective.
              </p>
              <Link
                href="/tours/5-day-post-placement-safari"
                className="inline-flex items-center gap-1 text-body-sm font-bold text-forest hover:text-ochre transition-colors pt-1"
              >
                <span>View Safari Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
