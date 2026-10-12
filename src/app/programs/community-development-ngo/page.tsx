import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sprout,
  Users,
  Compass
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Community Development & NGO Placements in Uganda",
  description: "Grassroots development internships in Uganda: women's micro-savings cooperatives, sustainable agro-ecology, and community action research."
};

export default function CommunityDevelopmentNGOPage() {
  const content = cmsContent.placementSectors.communityDevelopmentNGO;

  return (
    <div className="space-y-16 pb-20">
      {/* Sector Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Building2 className="w-4 h-4" />
            <span>Grassroots NGOs & Sustainable Development</span>
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
              <span>Apply for NGO Placement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/safeguarding"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Our Ethical Charter</span>
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
              <h2 className="text-h2 text-forest-dark">Grassroots Leadership & Community Overview</h2>
              <p className="text-body text-charcoal leading-relaxed font-light">
                {content.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-parchment border border-forest/10 text-caption text-charcoal-muted italic">
                {content.verificationPlaceholder}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-forest-dark">Focus Areas & Project Work</h3>
              <ul className="space-y-3">
                {content.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethical Guardrails for Development */}
            <div className="bg-forest/5 p-8 rounded-2xl border border-forest/20 space-y-4">
              <span className="text-eyebrow text-ochre">Community Sovereignty</span>
              <h3 className="font-serif text-2xl font-bold text-forest-dark">
                Rejecting the 'Savior Narrative' in Community Development
              </h3>
              <p className="text-body-sm text-charcoal leading-relaxed font-light">
                Traditional voluntourism portrays Western volunteers arriving to build schools or fix water pumps for communities unable to help themselves. We actively dismantle this harmful narrative.
              </p>
              <p className="text-body-sm text-charcoal leading-relaxed font-light">
                Ugandan village elders, women's cooperative presidents, and agricultural officers are the architects of their own progress. International participants join as apprentices—supporting administrative documentation, digital accounting, and research tasks that local teams request.
              </p>
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
                  <span className="font-semibold text-forest-dark">{content.suggestedDuration}</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Mentorship</span>
                  <span className="font-semibold text-forest-dark">Ugandan Community Project Director</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Accommodation</span>
                  <span className="font-semibold text-forest-dark">Vetted Host Family or Project Cottage</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Eligible Disciplines</span>
                  <span className="font-semibold text-forest-dark">Development Studies, Economics, Agro-Ecology</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?interest=student_placement"
                  className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Inquire for NGO Sector</span>
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
                Connect your community service with Uganda's national park ecosystems across Queen Elizabeth and Lake Bunyonyi.
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
