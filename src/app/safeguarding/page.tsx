import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  CameraOff,
  Users,
  AlertTriangle,
  FileCheck,
  DollarSign,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Child Safeguarding & Ethical Volunteering Charter | Pearl Roots",
  description: "Our non-negotiable child protection rules, observation-only medical boundaries, and transparent fee model. Zero tolerance for exploitative voluntourism."
};

export default function SafeguardingPage() {
  const { childProtectionRules, medicalScopeRules, feeTransparency } = cmsContent.safeguardingPolicy;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Lock className="w-4 h-4" />
            <span>Ethical Standards & Non-Negotiable Rules</span>
          </div>

          <h1 className="text-display text-parchment">
            Child Safeguarding & Ethical Volunteering Policy
          </h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            International volunteering must never cause harm. Founded by Collins Ssegawa—who grew up in the Watoto Mpigi community—Pearl Roots & Expeditions enforces uncompromising child protection protocols, clinical boundaries, and financial transparency.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Acknowledge & Inquire</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/for-universities"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>University Risk Pack</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. CHILD SAFEGUARDING PILLAR */}
      <section className="container-shell space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-eyebrow text-ochre">Pillar 1: Children First</span>
          <h2 className="text-h2 text-forest-dark">Six Non-Negotiable Child Safeguarding Rules</h2>
          <p className="text-body text-charcoal-muted">
            Every volunteer and student working in schools or community settings is bound by these rules:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {childProtectionRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-forest/15 shadow-subtle space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-caption font-bold uppercase tracking-wider text-ochre">Rule 0{idx + 1}</span>
                <h3 className="font-serif font-bold text-forest-dark text-lg leading-snug">{rule.title}</h3>
                <p className="text-body-sm text-charcoal leading-relaxed font-light">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. MEDICAL PLACEMENT ETHICS */}
      <section className="container-shell space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-eyebrow text-ochre">Pillar 2: Clinical Integrity</span>
          <h2 className="text-h2 text-forest-dark">Medical Practice & Patient Dignity Guardrails</h2>
          <p className="text-body text-charcoal-muted">
            Healthcare electives exist for learning under local experts, never for unsupervised experimentation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {medicalScopeRules.map((med, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-forest/15 shadow-subtle space-y-2"
            >
              <FileCheck className="w-6 h-6 text-forest mb-1" />
              <h3 className="font-serif font-bold text-forest-dark text-lg">{med.title}</h3>
              <p className="text-body-sm text-charcoal leading-relaxed font-light">{med.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEE TRANSPARENCY FRAMEWORK */}
      <section className="container-shell space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-eyebrow text-ochre">Pillar 3: Financial Transparency</span>
          <h2 className="text-h2 text-forest-dark">Where Does Your Program Fee Go?</h2>
          <p className="text-body text-charcoal-muted">
            {feeTransparency.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeTransparency.allocations.map((alloc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-3"
            >
              <span className="text-caption font-mono uppercase tracking-wider text-forest font-bold block">
                {alloc.percentagePlaceholder}
              </span>
              <h3 className="font-serif font-bold text-forest-dark text-lg">{alloc.category}</h3>
              <p className="text-caption text-charcoal-muted leading-relaxed font-light">{alloc.description}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-parchment border border-forest/15 text-caption text-charcoal-muted">
          Note: Proportions shown above represent audited target frameworks [CONFIRM: actual audited figures before final formal publication]. Detailed itemized cost invoices are provided to every confirmed participant.
        </div>
      </section>

      {/* Commitment Signature Box */}
      <section className="container-shell">
        <div className="bg-forest-dark text-parchment p-8 sm:p-10 rounded-3xl border border-forest space-y-6 max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-gold mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-parchment">
            Our Promise to Host Communities
          </h3>
          <p className="text-body-sm text-parchment/85 font-light leading-relaxed">
            "We treat every Ugandan child as we would our own, every patient with unconditional respect, and every local partner as an equal co-director of the future."
          </p>
          <span className="text-caption font-bold text-gold uppercase tracking-wider block">
            Collins & Patricia Ssegawa
          </span>
        </div>
      </section>
    </div>
  );
}
