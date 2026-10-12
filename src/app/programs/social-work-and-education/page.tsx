import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  BookOpen,
  CameraOff,
  AlertTriangle,
  FileCheck,
  Compass
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Social Work & Education Placements in Uganda | Ethical Teaching",
  description: "Accredited educational and youth mentorship placements in Uganda under strict child safeguarding protocols, verified police clearances, and local staff supervision."
};

export default function SocialWorkAndEducationPage() {
  const content = cmsContent.placementSectors.socialWorkEducation;

  return (
    <div className="space-y-16 pb-20">
      {/* Sector Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <BookOpen className="w-4 h-4" />
            <span>Education & Child Development</span>
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
              <span>Apply for Education Placement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/safeguarding"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Read Full Safeguarding Policy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h2 className="text-h2 text-forest-dark">Program Overview & Educational Context</h2>
              <p className="text-body text-charcoal leading-relaxed font-light">
                {content.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-parchment border border-forest/10 text-caption text-charcoal-muted italic">
                {content.verificationPlaceholder}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-forest-dark">Fieldwork Activities</h3>
              <ul className="space-y-3">
                {content.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MANDATORY CHILD SAFEGUARDING PILLAR */}
            <div className="bg-red-50/50 p-8 rounded-2xl border border-red-200/80 space-y-5">
              <div className="flex items-center gap-2 text-red-900">
                <Lock className="w-5 h-5" />
                <span className="text-caption font-bold uppercase tracking-wider">Non-Negotiable Child Safeguarding</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-dark">
                Protecting Children & Eliminating Exploitation
              </h3>
              <p className="text-body-sm text-charcoal-muted leading-relaxed">
                Collins Ssegawa's upbringing in Mpigi informed our unconditional commitment to child protection. We hold our participants to strict international child protection standards:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-red-100 space-y-1.5">
                  <span className="font-serif font-bold text-forest-dark text-body-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-forest" />
                    <span>100% Supervised Contact</span>
                  </span>
                  <p className="text-caption text-charcoal-muted">
                    Volunteers are never left alone with children; all activities occur under local staff oversight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-100 space-y-1.5">
                  <span className="font-serif font-bold text-forest-dark text-body-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-forest" />
                    <span>Mandatory Police Checks</span>
                  </span>
                  <p className="text-caption text-charcoal-muted">
                    Clear national criminal record / FBI / DBS check required prior to departure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-100 space-y-1.5">
                  <span className="font-serif font-bold text-forest-dark text-body-sm flex items-center gap-1.5">
                    <CameraOff className="w-4 h-4 text-ochre" />
                    <span>No Unconsented Photos</span>
                  </span>
                  <p className="text-caption text-charcoal-muted">
                    Strict ban on publishing identifiable photos of children on personal social media.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-red-100 space-y-1.5">
                  <span className="font-serif font-bold text-forest-dark text-body-sm flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-ochre" />
                    <span>No Orphanage Tourism</span>
                  </span>
                  <p className="text-caption text-charcoal-muted">
                    We strictly partner with recognized community day schools and family preservation projects.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-red-200 text-caption text-forest-dark font-medium">
                Minimum Placement Commitment: 4 Weeks [CONFIRM: minimum duration]. Short-term visits cause emotional attachment disruption; extended commitments ensure genuine continuity.
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h4 className="font-serif font-bold text-forest-dark text-lg border-b border-forest/10 pb-3">
                Placement Specifications
              </h4>

              <div className="space-y-3 text-body-sm">
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Duration</span>
                  <span className="font-semibold text-forest-dark">Minimum 4 Weeks (Up to 16 Weeks)</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Supervision Ratio</span>
                  <span className="font-semibold text-forest-dark">Assigned Ugandan Class Teacher or Preceptor</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Safety Backing</span>
                  <span className="font-semibold text-forest-dark">AMREF Aero-Evacuation + 24/7 Coordinator</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Eligible Majors</span>
                  <span className="font-semibold text-forest-dark">Education, Social Work, Psychology, Youth Work</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?interest=student_placement"
                  className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Inquire for Education Sector</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Post-Placement Safari Add-On */}
            <div className="p-6 rounded-2xl bg-parchment border border-forest/15 space-y-3">
              <div className="flex items-center gap-2 text-ochre">
                <Compass className="w-4 h-4" />
                <span className="text-caption font-bold uppercase tracking-wider">The Earned Reward</span>
              </div>
              <h4 className="font-serif font-bold text-forest-dark">5-Day Post-Placement Safari</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Recharge after your teaching placement with our game drives in Queen Elizabeth NP and canoe trips on Lake Bunyonyi.
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
