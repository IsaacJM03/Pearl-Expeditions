"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Plane,
  Users,
  GraduationCap,
  HeartHandshake,
  Compass,
  CheckCircle2,
  Sparkles,
  MapPin,
  ExternalLink,
  Lock,
  ChevronRight
} from "lucide-react";
import { cmsContent } from "@/data/cmsContent";

export default function HomePage() {
  const [selectedPersona, setSelectedPersona] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const currentPersona = cmsContent.audiencePersonas[selectedPersona];

  return (
    <div className="w-full space-y-20 pb-20">
      {/* 1. DUAL-GATEWAY HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden bg-topo">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/10 border border-forest/15 text-forest text-caption font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-ochre" />
                <span>Locally Founded in Uganda by Collins & Patricia Ssegawa</span>
              </div>

              <h1 className="text-display text-forest-dark">
                Gain global experience. <span className="italic font-normal text-ochre">Empower</span> communities. Explore the Pearl of Africa.
              </h1>

              <p className="text-body-lg max-w-2xl text-charcoal-muted">
                Pre-graduation clinical electives, ethical volunteer placements, and purposeful wildlife safaris in Uganda. Impact comes first under local Ugandan leadership; the safari is your earned reward.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/contact"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Inquire for Placement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs/student-placements"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-forest/20 hover:border-forest/40 bg-parchment-card text-forest font-semibold text-body-sm text-center shadow-xs"
                >
                  <span>Explore Placement Sectors</span>
                </Link>
              </div>

              {/* Above-the-Fold Trust Signals Row */}
              <div className="pt-4 border-t border-forest/10 space-y-3">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-body-sm text-forest-dark font-medium">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                    <span>AMREF Flying Doctors Aero-Evacuation</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4 text-ochre shrink-0" />
                    <span>24/7 Dedicated In-Country Coordinators</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Lock className="w-4 h-4 text-forest shrink-0" />
                    <span>Strict Child Safeguarding Protocols</span>
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-muted italic">
                  [VERIFY BEFORE PUBLISHING: Hospital, School & NGO partner MOUs pending formal annual renewal]
                </p>
              </div>
            </motion.div>

            {/* Hero Visual Block */}
            <motion.div
              initial={{ opacity: 0, transform: shouldReduceMotion ? "scale(1)" : "scale(0.98)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden shadow-card border border-forest/15">
                <Image
                  src="/images/hero-rainforest.jpg"
                  alt="Uganda Rainforest and Albertine Rift Valley"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-dark/85 via-forest-dark/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-parchment space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-caption font-mono uppercase tracking-wider text-gold">
                      The Pearl Principle
                    </span>
                  </div>
                  <p className="font-serif text-lg font-bold text-parchment leading-snug">
                    "Impact comes first, and the adventure is the earned reward."
                  </p>
                  <p className="text-caption text-parchment/80">
                    Collins Ssegawa — Raised at Watoto Mpigi, Co-Founder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THREE-PILLAR SECTION: GROW • SERVE • DISCOVER */}
      <section className="container-shell">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-eyebrow text-ochre">The Three Pillars</span>
          <h2 className="text-h2 text-forest-dark">A Connected Journey Designed for Real Impact</h2>
          <p className="text-body text-charcoal-muted">
            We reject commercialized 'voluntourism'. Every placement is built on academic rigor and local community sovereignty, culminating in the earned reward of wildlife discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cmsContent.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-white border border-forest/15 shadow-card hover:shadow-lift transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
                  {pillar.id === "grow" && <GraduationCap className="w-6 h-6 text-forest" />}
                  {pillar.id === "serve" && <HeartHandshake className="w-6 h-6 text-ochre" />}
                  {pillar.id === "discover" && <Compass className="w-6 h-6 text-gold-dark" />}
                </div>

                <div>
                  <span className="text-caption font-bold uppercase tracking-wider text-ochre">Pillar</span>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark">{pillar.title}</h3>
                  <p className="text-body-sm font-semibold text-forest mt-0.5">{pillar.tagline}</p>
                </div>

                <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10">
                {pillar.id === "grow" && (
                  <Link
                    href="/programs/student-placements"
                    className="inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre transition-colors"
                  >
                    <span>View Student Electives</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {pillar.id === "serve" && (
                  <Link
                    href="/safeguarding"
                    className="inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre transition-colors"
                  >
                    <span>Our Safeguarding Charter</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {pillar.id === "discover" && (
                  <Link
                    href="/tours/5-day-post-placement-safari"
                    className="inline-flex items-center gap-1.5 text-body-sm font-bold text-forest hover:text-ochre transition-colors"
                  >
                    <span>5-Day Post-Placement Safari</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 3-WAY AUDIENCE SELECTOR */}
      <section className="bg-forest-dark text-parchment py-16">
        <div className="container-shell space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-eyebrow text-gold">Choose Your Pathway</span>
            <h2 className="text-h2 text-parchment">How Do You Wish to Engage with Uganda?</h2>
            <p className="text-body text-parchment/80 font-light">
              Select your traveler profile below to explore curated sectors, safety protocols, and institutional documentation.
            </p>
          </div>

          {/* Persona Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cmsContent.audiencePersonas.map((persona, idx) => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(idx)}
                className={`btn-press min-h-[44px] px-6 py-3 rounded-xl text-body-sm font-bold transition-all cursor-pointer ${
                  selectedPersona === idx
                    ? "bg-gold text-forest-dark shadow-xs"
                    : "bg-forest/50 text-parchment/80 hover:bg-forest hover:text-parchment border border-forest-surface"
                }`}
              >
                {persona.label}
              </button>
            ))}
          </div>

          {/* Active Persona Spotlight Card */}
          <div className="bg-forest/40 border border-forest-surface rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-caption font-mono uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-forest border border-forest-surface inline-block">
                {currentPersona.badge}
              </span>
              <h3 className="font-serif text-2xl font-bold text-parchment">{currentPersona.label}</h3>
              <p className="text-body text-parchment/85 leading-relaxed font-light">
                {currentPersona.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={currentPersona.primaryAction.href}
                  className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs"
                >
                  <span>{currentPersona.primaryAction.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={currentPersona.secondaryAction.href}
                  className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-parchment/20 text-parchment hover:bg-forest/40 text-body-sm font-medium"
                >
                  <span>{currentPersona.secondaryAction.text}</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 p-5 rounded-xl bg-forest-dark/70 border border-forest-surface text-caption space-y-2.5">
              <span className="font-bold uppercase tracking-wider text-gold block">Our Commitment</span>
              <p className="text-parchment/80 leading-relaxed font-light">
                • 100% Supervised & Vetted
              </p>
              <p className="text-parchment/80 leading-relaxed font-light">
                • Direct Community Benefit
              </p>
              <p className="text-parchment/80 leading-relaxed font-light">
                • 24-Hour Inquiry Response Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDERS' STORY TEASER */}
      <section className="container-shell">
        <div className="bg-white rounded-3xl border border-forest/15 shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative aspect-4/3 sm:aspect-5/4 lg:aspect-auto lg:h-full min-h-[360px]">
            <Image
              src="/images/collins-founder.jpg"
              alt="Collins Ssegawa, Co-Founder of Pearl Roots & Expeditions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest-dark/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
            <span className="text-eyebrow text-ochre">Authentic Ugandan Heritage</span>
            <h2 className="text-h2 text-forest-dark">
              From Watoto Mpigi to Ethical Fieldwork Leadership
            </h2>
            <p className="text-body text-charcoal leading-relaxed font-light">
              Collins Ssegawa lost both parents by 2006 and grew up in the Watoto community homes in Mpigi. There, he saw how volunteers change the course of young lives when guided with humility and local mentorship.
            </p>
            <p className="text-body text-charcoal leading-relaxed font-light">
              After spending 5+ years at the Institute of Field Research Center managing field logistics for international university students and independent travelers, Collins and his wife Patricia co-founded Pearl Roots & Expeditions to make educational travel reciprocal, rigorous, and dignified.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/about-and-safety"
                className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs hover:bg-forest-light"
              >
                <span>Read Full Founder Story & Safety Protocol</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
            <p className="text-[11px] text-charcoal-muted italic">
              [CONFIRM: Collins and Patricia approval of the biographical copy wording]
            </p>
          </div>
        </div>
      </section>

      {/* 5. POST-PLACEMENT SAFARI TEASER ("THE EARNED REWARD") */}
      <section className="container-shell">
        <div className="rounded-3xl bg-parchment border border-forest/15 p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ochre/10 text-ochre text-caption font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>The Earned Reward</span>
            </div>
            <h2 className="text-h2 text-forest-dark">5-Day Post-Placement Safari Add-On</h2>
            <p className="text-body text-charcoal-muted">
              Complete your hospital elective or community placement, then transition directly into Queen Elizabeth National Park, the Kazinga Channel, and Lake Bunyonyi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
              <h4 className="font-serif font-bold text-forest-dark">Queen Elizabeth NP</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Dawn game drives across Kasenyi plains tracking lions, elephants, and cape buffalo herds.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
              <h4 className="font-serif font-bold text-forest-dark">Kazinga Channel Boat Cruise</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Cruise alongside hundreds of hippos, bathing elephants, and magnificent Nile water birds.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-forest/10 space-y-2">
              <h4 className="font-serif font-bold text-forest-dark">Lake Bunyonyi Relaxation</h4>
              <p className="text-caption text-charcoal-muted leading-relaxed">
                Dugout canoeing and swimming in the bilharzia-free waters of Uganda's deepest highland lake.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-forest/10">
            <p className="text-body-sm text-charcoal-muted font-medium">
              Easily added at application time or near the conclusion of your placement.
            </p>
            <Link
              href="/tours/5-day-post-placement-safari"
              className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20"
            >
              <span>Explore 5-Day Safari Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ETHICAL SAFEGUARDING CALLOUT */}
      <section className="container-shell">
        <div className="p-8 sm:p-10 rounded-2xl bg-forest-dark text-parchment border border-forest flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-caption font-mono uppercase tracking-widest text-gold">Zero Tolerance</span>
            <h3 className="font-serif text-2xl font-bold text-parchment">
              Our Child Safeguarding & Ethical Policy
            </h3>
            <p className="text-body-sm text-parchment/80 font-light">
              No unsupervised contact with children. No unconsented social media photos. Observation-only medical practice. Transparent fee breakdown.
            </p>
          </div>

          <Link
            href="/safeguarding"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs shrink-0"
          >
            <span>Read Safeguarding Charter</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
