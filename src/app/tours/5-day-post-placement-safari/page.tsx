import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  MapPin,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "5-Day Post-Placement Safari: Queen Elizabeth & Lake Bunyonyi",
  description: "The earned reward after your Ugandan placement: Queen Elizabeth National Park savannah game drives, Kazinga Channel boat safari, and Lake Bunyonyi relaxation."
};

export default function FiveDayPostPlacementSafariPage() {
  const tour = cmsContent.tours.postPlacementSafari;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <Compass className="w-4 h-4" />
            <span>{tour.tagline}</span>
          </div>

          <h1 className="text-display text-parchment">{tour.title}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {tour.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=post_safari"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Book Safari Add-On</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tours/leisure-safaris"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Explore All Wildlife Safaris</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="container-shell -mt-10">
        <div className="bg-white rounded-2xl border border-forest/15 shadow-card p-6 sm:p-8">
          <h3 className="font-serif font-bold text-forest-dark text-lg mb-4">Expedition Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tour.highlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <span className="text-body-sm text-charcoal">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Itinerary */}
      <section className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-eyebrow text-ochre">Day-by-Day Journey</span>
                <h2 className="text-h2 text-forest-dark">Complete 5-Day Field Itinerary</h2>
              </div>

              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-forest/15 shadow-subtle space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-caption font-bold">
                        Day {day.day}
                      </span>
                      <span className="text-caption text-charcoal-muted flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-ochre" />
                        <span>{day.location}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-forest-dark">{day.title}</h3>
                    <p className="text-body-sm text-charcoal leading-relaxed font-light">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-forest/15 shadow-card">
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-forest-dark text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-forest" />
                  <span>What's Included</span>
                </h4>
                <ul className="space-y-2 text-body-sm text-charcoal">
                  {tour.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-forest font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif font-bold text-forest-dark text-lg flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-ochre" />
                  <span>Not Included</span>
                </h4>
                <ul className="space-y-2 text-body-sm text-charcoal">
                  {tour.excluded.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-ochre font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Responsible Tourism Note */}
            <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 text-caption text-charcoal-muted">
              {tour.responsibleTourismNote}
            </div>
          </div>

          {/* Right Column: Quick Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-4 sticky top-28">
              <span className="text-caption font-bold uppercase tracking-wider text-ochre block">
                Safari Add-On
              </span>
              <h3 className="font-serif font-bold text-forest-dark text-2xl">
                Queen Elizabeth & Lake Bunyonyi
              </h3>

              <div className="space-y-3 text-body-sm border-y border-forest/10 py-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Duration:</span>
                  <span className="font-semibold text-forest-dark">5 Days / 4 Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Starting Point:</span>
                  <span className="font-semibold text-forest-dark">Direct from Placement Base</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Ending Point:</span>
                  <span className="font-semibold text-forest-dark">Entebbe Airport (EBB)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Transport:</span>
                  <span className="font-semibold text-forest-dark">Custom 4x4 Safari Cruiser</span>
                </div>
              </div>

              <p className="text-caption text-charcoal-muted leading-relaxed">
                Seamless door-to-door transfer directly from your placement base in Entebbe, Kampala, Masaka, or Fort Portal.
              </p>

              <Link
                href="/contact?interest=post_safari"
                className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
              >
                <span>Reserve Safari Add-On</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
