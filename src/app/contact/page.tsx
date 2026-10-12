import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import SmartInquiryWizard from "@/components/SmartInquiryWizard";
import { cmsContent } from "@/data/cmsContent";
import { InquiryInterest } from "@/types/inquiry";

export const metadata = {
  title: "Contact & Inquiries | Pearl Roots & Expeditions",
  description: "Begin your Ugandan journey. 4-step smart inquiry form, direct WhatsApp liaison with Collins Ssegawa, and guaranteed 24-hour response SLA."
};

export default async function ContactPage({
  searchParams
}: {
  searchParams?: Promise<{ interest?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const initialInterest = resolvedParams.interest as InquiryInterest | undefined;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold mx-auto">
            <Clock className="w-4 h-4 text-ochre" />
            <span>Guaranteed 24-Hour Response SLA</span>
          </div>

          <h1 className="text-display text-parchment">
            Start Your Journey with Pearl Roots & Expeditions
          </h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are a university student preparing for a clinical elective, an independent volunteer, a leisure safari traveler, or a study abroad dean—our in-country team is ready to guide you.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="container-shell -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Multi-Step Form */}
          <div className="lg:col-span-8">
            <SmartInquiryWizard initialInterest={initialInterest} />
          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct WhatsApp Box */}
            <div className="bg-white p-6 rounded-2xl border border-forest/15 shadow-card space-y-4">
              <span className="text-caption font-bold uppercase tracking-wider text-ochre block">
                Instant Field Liaison
              </span>
              <h3 className="font-serif font-bold text-forest-dark text-xl">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                Have an urgent question about clinical rotations, travel dates, or safari logistics? Speak directly with Collins Ssegawa on WhatsApp.
              </p>

              <a
                href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20interested%20in%20a%20placement%20or%20safari%20in%20Uganda."
                target="_blank"
                rel="noreferrer"
                className="btn-press min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest hover:bg-forest-light text-parchment font-semibold text-body-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>+256 700 892 410 (WhatsApp)</span>
              </a>
            </div>

            {/* Operations Desk Info */}
            <div className="bg-parchment p-6 rounded-2xl border border-forest/15 space-y-4 text-body-sm">
              <h4 className="font-serif font-bold text-forest-dark text-lg border-b border-forest/10 pb-2">
                Field Operations Desk
              </h4>

              <div className="flex items-start gap-2.5 text-charcoal">
                <MapPin className="w-4 h-4 text-forest shrink-0 mt-1" />
                <span>Plot 14, Lugard Avenue, Entebbe Gateway & Mpigi Field Liaison, Uganda</span>
              </div>

              <div className="flex items-center gap-2.5 text-charcoal">
                <Mail className="w-4 h-4 text-forest shrink-0" />
                <a href="mailto:collins@pearlroots.com" className="text-forest underline">
                  collins@pearlroots.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-charcoal">
                <Clock className="w-4 h-4 text-ochre shrink-0" />
                <span>East Africa Time (EAT, UTC+3)</span>
              </div>
            </div>

            {/* SLA Commitment */}
            <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 text-caption text-charcoal-muted flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>
                All inquiries are logged in our internal operations queue and acknowledged within 24 hours.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container-shell space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-eyebrow text-ochre">Common Questions</span>
          <h2 className="text-h2 text-forest-dark">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4 max-w-4xl">
          {cmsContent.faqList.map((faq, idx) => (
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
