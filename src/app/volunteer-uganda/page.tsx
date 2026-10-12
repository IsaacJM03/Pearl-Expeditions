import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Clock,
  Home,
  MessageCircle,
  Users
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Volunteer in Uganda | Ethical Independent Volunteering",
  description: "Ethical volunteering in Uganda for gap-year, career-break, and retired travelers. Authentic homestays, vetted community projects, and 24/7 in-country support."
};

export default function VolunteerUgandaPage() {
  const content = cmsContent.volunteerUganda;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <HeartHandshake className="w-4 h-4" />
            <span>Ethical Community Immersion</span>
          </div>

          <h1 className="text-display text-parchment">{content.title}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=volunteer"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Inquire for Independent Volunteering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/safeguarding"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Read Fee Transparency & Safeguards</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="container-shell -mt-10">
        <div className="bg-white rounded-2xl border border-forest/15 shadow-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Home className="w-6 h-6 text-forest shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Vetted Host Families</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Safe, inspected residential homes with private lockable rooms.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-ochre shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">24/7 Field Support</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Collins and in-country coordinators on call around the clock.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-forest shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Locally Led Work</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Projects directed by Ugandan headteachers and village leaders.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Compass className="w-6 h-6 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-dark text-body-sm">Earned Safari</h4>
              <p className="text-caption text-charcoal-muted mt-0.5">Optional wildlife add-ons after completing volunteer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h2 className="text-h2 text-forest-dark">A Better Way to Volunteer in Uganda</h2>
              <p className="text-body text-charcoal leading-relaxed font-light">
                {content.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-parchment border border-forest/10 text-caption text-charcoal-muted">
                {content.pricingNote}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-forest-dark">Included Program Support</h3>
              <ul className="space-y-3">
                {content.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-body-sm text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-forest-dark">Available Focus Sectors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {content.sectorsAvailable.map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-parchment border border-forest/10 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span className="font-semibold text-body-sm text-forest-dark">{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <h4 className="font-serif font-bold text-forest-dark text-lg border-b border-forest/10 pb-3">
                Program Quick Summary
              </h4>

              <div className="space-y-3 text-body-sm">
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Duration</span>
                  <span className="font-semibold text-forest-dark">2 to 12 Weeks (Flexible start dates)</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Age Profile</span>
                  <span className="font-semibold text-forest-dark">18+ (Gap-year, career-breakers, retirees)</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Orientation</span>
                  <span className="font-semibold text-forest-dark">3 Days comprehensive cultural immersion</span>
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-charcoal-muted block">Emergency Support</span>
                  <span className="font-semibold text-forest-dark">AMREF aero-evacuation included</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?interest=volunteer"
                  className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Inquire for Volunteering</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-parchment border border-forest/15 space-y-3">
              <div className="flex items-center gap-2 text-ochre">
                <Compass className="w-4 h-4" />
                <span className="text-caption font-bold uppercase tracking-wider">Earned Safari</span>
              </div>
              <h4 className="font-serif font-bold text-forest-dark">Add a Wildlife Safari</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Most independent volunteers attach our 5-day Queen Elizabeth & Bunyonyi safari to cap off their Ugandan journey.
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
