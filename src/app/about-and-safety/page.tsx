import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Plane,
  Users,
  HeartHandshake,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  FileText
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export const metadata = {
  title: "About Us & Safety Framework | Pearl Roots & Expeditions",
  description: "The story of Collins and Patricia Ssegawa, founded on lived experience at Watoto Mpigi and Institute of Field Research Center. Our 5-tier safety framework and message to parents."
};

export default function AboutAndSafetyPage() {
  const story = cmsContent.foundersStory;

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Founders' Heritage & Safety Infrastructure</span>
          </div>

          <h1 className="text-display text-parchment">{story.headline}</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed">
            {story.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/safeguarding"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs hover:bg-gold-light"
            >
              <span>Child Safeguarding Charter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest text-body-sm font-medium"
            >
              <span>Connect with Collins on WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Founders Narrative */}
      <section className="container-shell">
        <div className="bg-white rounded-3xl border border-forest/15 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto lg:h-full min-h-[380px]">
            <Image
              src="/images/collins-founder.jpg"
              alt="Collins Ssegawa, Founder of Pearl Roots & Expeditions"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <span className="text-eyebrow text-ochre">Collins & Patricia Ssegawa</span>
            <h2 className="text-h2 text-forest-dark">The Heart of Our Organization</h2>
            <div className="space-y-3 text-body-sm text-charcoal leading-relaxed font-light">
              {story.narrative.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <p className="text-[11px] text-charcoal-muted italic pt-2">
              [CONFIRM: Collins and Patricia approval of the biographical copy wording]
            </p>
          </div>
        </div>
      </section>

      {/* Core Ethos Pillars */}
      <section className="container-shell space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-eyebrow text-ochre">Guiding Philosophy</span>
          <h2 className="text-h2 text-forest-dark">Why We Reject 'Voluntourism'</h2>
          <p className="text-body text-charcoal-muted">
            Our enterprise is founded on four foundational ethical commitments:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {story.ethosPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-forest/15 shadow-subtle space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-caption font-bold uppercase tracking-wider text-ochre">0{idx + 1}</span>
                <h3 className="font-serif font-bold text-forest-dark text-lg">{pillar.title}</h3>
                <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-TIER SAFETY FRAMEWORK */}
      <section className="bg-forest-dark text-parchment py-16">
        <div className="container-shell space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-eyebrow text-gold">Duty of Care</span>
            <h2 className="text-h2 text-parchment">Our 5-Tier Field Safety Architecture</h2>
            <p className="text-body text-parchment/80 font-light">
              Fieldwork in East Africa requires robust, proactive emergency protocols. Every participant is supported by an operational safety net:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3">
              <Plane className="w-6 h-6 text-gold" />
              <h3 className="font-serif font-bold text-parchment text-lg">1. AMREF Aero-Medical Evacuation</h3>
              <p className="text-body-sm text-parchment/80 font-light leading-relaxed">
                24/7 fixed-wing air ambulance clearance through AMREF Flying Doctors across Uganda’s bush airstrips with rapid airlift to Level-4 trauma facilities in Kampala.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3">
              <Users className="w-6 h-6 text-gold" />
              <h3 className="font-serif font-bold text-parchment text-lg">2. 24/7 In-Country Coordinators</h3>
              <p className="text-body-sm text-parchment/80 font-light leading-relaxed">
                Dedicated Ugandan field staff monitor participant arrivals, housing check-ins, daily health status, and maintain constant satellite/cellular liaison.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3">
              <ShieldCheck className="w-6 h-6 text-gold" />
              <h3 className="font-serif font-bold text-parchment text-lg">3. Vetted Housing & Water Security</h3>
              <p className="text-body-sm text-parchment/80 font-light leading-relaxed">
                Host families and student lodges undergo structural security audits, mosquito net checks, and are equipped with safe drinking water systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3">
              <FileText className="w-6 h-6 text-gold" />
              <h3 className="font-serif font-bold text-parchment text-lg">4. Institutional RAMS Dossier</h3>
              <p className="text-body-sm text-parchment/80 font-light leading-relaxed">
                Pre-departure Risk Assessment and Management Strategies (RAMS) addressing infectious disease prevention, clinical exposure protocols, and transport safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3">
              <Lock className="w-6 h-6 text-gold" />
              <h3 className="font-serif font-bold text-parchment text-lg">5. Incident Escalation Workflow</h3>
              <p className="text-body-sm text-parchment/80 font-light leading-relaxed">
                Immediate parent and university dean notification protocol within 2 hours of any medical or logistical incident.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-forest/40 border border-forest-surface space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-caption font-mono uppercase text-gold">Regulatory Notice</span>
                <p className="text-caption text-parchment/70 font-light mt-2 italic leading-relaxed">
                  [VERIFY BEFORE PUBLISHING: all-Ugandan team claim, hospital/school/NGO partner names, university credit/logbook sign-off, 24/7 medical coordinator, insurance requirements, licenses e.g. Uganda Tourism Board / UWA permits]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LETTER TO PARENTS & STUDY ABROAD ADVISORS */}
      <section className="container-shell">
        <div className="bg-parchment border border-forest/20 rounded-3xl p-8 sm:p-12 space-y-6 max-w-4xl mx-auto shadow-card">
          <div className="space-y-2 border-b border-forest/15 pb-4">
            <span className="text-eyebrow text-ochre">Direct Reassurance</span>
            <h2 className="text-h2 text-forest-dark">{story.parentAdvisorLetter.salutation}</h2>
          </div>

          <div className="space-y-4 text-body text-charcoal leading-relaxed font-light">
            {story.parentAdvisorLetter.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-forest/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-forest-dark text-lg">{story.parentAdvisorLetter.signOff}</p>
              <p className="text-caption text-charcoal-muted">Plot 14 Lugard Avenue, Entebbe Gateway, Uganda</p>
            </div>

            <a
              href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20a%20parent%20or%20study%20abroad%20advisor%20and%20would%20like%20to%20speak%20about%20safety."
              target="_blank"
              rel="noreferrer"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest text-parchment text-body-sm font-semibold hover:bg-forest-light"
            >
              <span>Direct Advisor WhatsApp Line</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
