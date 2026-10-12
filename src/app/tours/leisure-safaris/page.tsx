import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  TreePine,
  Waves,
  Landmark
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "Uganda Leisure Safaris & Primate Expeditions | Bwindi & Kibale",
  description: "Bespoke Ugandan wildlife safaris: mountain gorilla trekking in Bwindi, chimpanzee tracking in Kibale, Murchison Falls, and authentic cultural expeditions."
};

export default function LeisureSafarisPage() {
  const leisure = cmsContent.tours.leisureSafaris;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Compass className="w-4 h-4" />
            <span>Primate Tracking & Savannah Expeditions</span>
          </div>

          <h1 className="text-display text-parchment">{leisure.title}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {leisure.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=leisure_safari"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Inquire for Custom Safari</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tours/5-day-post-placement-safari"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>5-Day Post-Placement Safari Add-On</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Safaris Grid */}
      <section className="container-shell space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-eyebrow text-ochre">Signature Itineraries</span>
          <h2 className="text-h2 text-forest-dark">Featured Ugandan Wildlife Expeditions</h2>
          <p className="text-body text-charcoal-muted">
            All itineraries include professional driver-guides, 4WD pop-top Land Cruisers, park entry, and licensed UWA permits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leisure.featuredPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-forest/15 shadow-card p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-lift transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-caption font-mono uppercase tracking-wider text-ochre font-bold">
                    {pkg.duration}
                  </span>
                  <span className="text-caption text-charcoal-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-forest" />
                    <span>{pkg.location}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-forest-dark">{pkg.title}</h3>
                <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                  {pkg.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-caption font-bold text-forest">{pkg.priceIndicator}</span>
                <Link
                  href={`/contact?interest=leisure_safari&package=${encodeURIComponent(pkg.title)}`}
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-forest text-parchment font-semibold text-body-sm hover:bg-forest-light text-center"
                >
                  <span>Inquire for Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conservation Reinvestment Callout */}
      <section className="container-shell">
        <div className="p-8 sm:p-10 rounded-2xl bg-parchment border border-forest/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-caption font-bold uppercase tracking-wider text-ochre">Conservation & Communities</span>
            <h3 className="font-serif text-2xl font-bold text-forest-dark">
              How Your Safari Directly Protects Ugandan Wildlife
            </h3>
            <p className="text-body-sm text-charcoal-muted leading-relaxed">
              Uganda Wildlife Authority gorilla and chimpanzee permit fees fund 24/7 ranger anti-poaching patrols and transfer 20% of revenue directly into local village revenue-sharing funds surrounding national parks.
            </p>
          </div>

          <Link
            href="/contact?interest=leisure_safari"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs shrink-0"
          >
            <span>Plan a Custom Expedition</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
