import Link from "next/link";
import {
  Building2,
  GraduationCap,
  ShieldCheck,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  Plane,
  Clock,
  HelpCircle
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "For Universities & Faculty | Institutional Study Abroad Partnerships",
  description: "Accredited institutional partnerships in Uganda for university deans, global health faculties, and study abroad advisors. Turnkey RAMS safety dossiers and clinical logbooks."
};

export default function ForUniversitiesPage() {
  const content = cmsContent.forUniversities;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Building2 className="w-4 h-4" />
            <span>Institutional Study Abroad & Global Health Electives</span>
          </div>

          <h1 className="text-display text-parchment">{content.hero.headline}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {content.hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=university_partnership"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Schedule Institutional Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#pack"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <Download className="w-4 h-4 text-gold" />
              <span>Download Institutional Pack</span>
            </a>
          </div>
        </div>
      </section>

      {/* Institutional Offerings */}
      <section className="container-shell space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-eyebrow text-ochre">Turnkey Frameworks</span>
          <h2 className="text-h2 text-forest-dark">Four Pillars for University Partnerships</h2>
          <p className="text-body text-charcoal-muted">
            We simplify institutional risk clearance and syllabus alignment for home faculties:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.institutionalOfferings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-forest/15 shadow-card space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center font-bold font-serif text-lg">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-dark">{offering.title}</h3>
              <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Institutional Pack Section */}
      <section id="pack" className="container-shell">
        <div className="bg-parchment border border-forest/20 rounded-3xl p-8 sm:p-12 space-y-8 shadow-card">
          <div className="max-w-2xl space-y-2">
            <span className="text-eyebrow text-ochre">Faculty Resources</span>
            <h2 className="text-h2 text-forest-dark">Institutional Partnership Pack (PDF Preview)</h2>
            <p className="text-body text-charcoal-muted">
              Download our comprehensive dossier designed for university ethics review boards, study abroad risk managers, and curriculum directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-forest/10 space-y-2">
              <FileText className="w-6 h-6 text-forest" />
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">RAMS Risk Dossier</h4>
              <p className="text-caption text-charcoal-muted">
                Detailed 18-page emergency response plan, water protocols, and aero-medical flight routes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-forest/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-forest" />
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">AMREF Flight Clearance</h4>
              <p className="text-caption text-charcoal-muted">
                Official insurance certificate and Kasese/Entebbe bush airstrip coordinates.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-forest/10 space-y-2">
              <GraduationCap className="w-6 h-6 text-forest" />
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Clinical Logbook Template</h4>
              <p className="text-caption text-charcoal-muted">
                Digital and print hours-logging template with weekly supervisor sign-off tables.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-body-sm text-forest-dark font-medium">
              Ready to execute an institutional Memorandum of Understanding (MoU)?
            </p>
            <Link
              href="/contact?interest=university_partnership"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest text-parchment font-semibold text-body-sm hover:bg-forest-light shrink-0"
            >
              <span>Request University MoU</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-shell space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-eyebrow text-ochre">Questions & Answers</span>
          <h2 className="text-h2 text-forest-dark">Institutional Partnership FAQs</h2>
        </div>

        <div className="space-y-4 max-w-4xl">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-forest/15 shadow-subtle space-y-2">
              <h4 className="font-serif font-bold text-forest-dark text-lg flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-ochre shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-body-sm text-charcoal leading-relaxed font-light pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
