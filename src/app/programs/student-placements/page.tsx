import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Stethoscope,
  HeartHandshake,
  Building2,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Compass
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "University Student Placements in Uganda | Pearl Roots & Expeditions",
  description: "Accredited clinical electives, social work, and NGO field placements in Uganda with formal logbook hours, mentor sign-offs, and 24/7 AMREF safety."
};

export default function StudentPlacementsHubPage() {
  const sectors = Object.values(cmsContent.placementSectors);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>Pre-Graduation University Electives & Placements</span>
          </div>

          <h1 className="text-display text-parchment">
            Real Experience. Clinical Rigor. Supervised Sign-Offs in Uganda.
          </h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            Pre-graduation placements tailored for medical, nursing, public health, and social work undergraduates. Fulfill home faculty elective requirements, maintain formal digital logbooks, and receive verified institutional sign-offs under registered Ugandan supervisors.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=student_placement"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Inquire for Placement Matching</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/for-universities"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Institutional Credit & RAMS Dossier</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Academic Reassurance Banner */}
      <section className="container-shell -mt-10">
        <div className="bg-white rounded-2xl border border-forest/15 shadow-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-forest shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Supervised Practice</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Direct oversight by senior Ugandan clinicians & social workers.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-ochre shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Institutional Logbooks</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Weekly hour verifications & completion certificates for home universities.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-6 h-6 text-forest shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">24-Hour SLA Intake</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Guaranteed initial response within 24 hours of inquiry.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Compass className="w-6 h-6 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Earned Safari Add-On</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Seamless transition into Queen Elizabeth NP post-placement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Hub Grid */}
      <section className="container-shell space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-eyebrow text-ochre">Placement Sectors</span>
          <h2 className="text-h2 text-forest-dark">Select Your Academic Discipline</h2>
          <p className="text-body text-charcoal-muted">
            All placements include safe homestay or guest-house lodging, 3 daily meals, airport pickup, and continuous in-country coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="bg-white rounded-2xl border border-forest/15 shadow-card overflow-hidden flex flex-col justify-between hover:shadow-lift transition-all"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={sector.heroImage}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-forest-dark/85 backdrop-blur-xs text-gold text-caption font-semibold px-2.5 py-1 rounded-md">
                  {sector.badge}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-forest-dark">{sector.title}</h3>
                  <p className="text-caption text-charcoal-muted leading-relaxed font-light">
                    {sector.overview}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-forest/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ochre">Target Fields:</span>
                    <ul className="text-caption text-charcoal space-y-1">
                      {sector.targetDisciplines.slice(0, 3).map((disc) => (
                        <li key={disc} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                          <span>{disc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
                  <span className="text-caption text-charcoal-muted font-medium">Duration: {sector.suggestedDuration}</span>
                  <Link
                    href={`/programs/${sector.slug}`}
                    className="inline-flex items-center gap-1 text-body-sm font-bold text-forest hover:text-ochre transition-colors"
                  >
                    <span>Sector Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* University & Gatekeeper Callout */}
      <section className="container-shell">
        <div className="p-8 sm:p-10 rounded-3xl bg-parchment border border-forest/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-caption font-bold uppercase tracking-wider text-ochre">Parents & Study Abroad Directors</span>
            <h3 className="font-serif text-2xl font-bold text-forest-dark">
              Need Verification of Duty of Care & Risk Protocols?
            </h3>
            <p className="text-body-sm text-charcoal-muted leading-relaxed">
              We provide formal RAMS safety frameworks, institutional MoUs, AMREF Flying Doctors flight clearance, and direct video briefings with Collins Ssegawa.
            </p>
          </div>

          <Link
            href="/for-universities"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs shrink-0 hover:bg-forest-light"
          >
            <span>Review University Pack</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
