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
  MapPin, 
  ExternalLink,
  Award,
  BookOpen,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { programs } from "@/data/programs";
import UgandaInteractiveMap from "@/components/UgandaInteractiveMap";

export default function HomePage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredPrograms = selectedDiscipline === "All"
    ? programs
    : programs.filter((p) => p.discipline === selectedDiscipline);

  const categories = ["All", "Biological Sciences", "Peace & Conflict", "Agro-Ecology & CAS"];

  return (
    <div className="w-full space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-18 pb-10 overflow-hidden bg-topo">
        <div className="container-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-eyebrow">
                Uganda Living Laboratory • Ex-UNDP Governance
              </p>

              <h1 className="text-display text-forest-dark">
                Uganda as an <span className="italic font-normal text-ochre">Open-Air</span> Academic Laboratory
              </h1>

              <p className="text-body-lg max-w-2xl">
                Turnkey, accredited field schools for university faculties and IB schools. Anchored by resident Makerere University research stations, ex-UNDP governance, and 24/7 AMREF aero-medical safety.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/educators#builder"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20 text-center"
                >
                  <span>Build Course Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-forest/20 hover:border-forest/40 bg-parchment-card text-forest font-semibold text-body-sm text-center shadow-xs"
                >
                  <span>Explore Field Syllabi</span>
                </Link>
              </div>

              {/* Restrained Trust Row - Distinct Semantic Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-body-sm text-charcoal-muted border-t border-forest/10">
                <span className="inline-flex items-center gap-2 font-medium text-forest-dark">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span>UNCST Ethics Permitting Framework</span>
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-forest-dark">
                  <Plane className="w-4 h-4 text-ochre shrink-0" />
                  <span>AMREF Aero-Evacuation Protocol</span>
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-forest-dark">
                  <Users className="w-4 h-4 text-forest shrink-0" />
                  <span>1:6 Target Chaperone Ratio</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, transform: shouldReduceMotion ? "scale(1)" : "scale(0.98)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden shadow-card border border-forest/15">
                <Image
                  src="/images/hero-rainforest.jpg"
                  alt="Kibale National Park Albertine Rift Rainforest Canopy"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-forest-dark/90 backdrop-blur-md px-4 py-3 rounded-xl border border-forest-light/20 text-parchment flex items-center justify-between text-caption">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium text-parchment">MUBFS Kanyawara Station</span>
                  </div>
                  <span className="text-caption text-gold font-mono">Albertine Rift (0°34&apos;N)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ALLIANCES STRIP */}
      <section className="border-y border-forest/10 bg-parchment-muted/60 py-8">
        <div className="container-shell">
          <p className="text-caption font-bold text-charcoal-muted text-center mb-6">
            Planned Academic Field Alliances & Governance Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 items-center text-center">
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">UNCST</span>
              <span className="text-caption text-charcoal-muted">Science & Tech Council</span>
            </div>
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">Makerere MUBFS</span>
              <span className="text-caption text-charcoal-muted">Biological Field Station</span>
            </div>
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">Gulu Univ IPSS</span>
              <span className="text-caption text-charcoal-muted">Peace & Conflict Hub</span>
            </div>
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">AMREF Flying Docs</span>
              <span className="text-caption text-charcoal-muted">Aero-Medical Protocol</span>
            </div>
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">UWA Research</span>
              <span className="text-caption text-charcoal-muted">Wildlife Permitting</span>
            </div>
            <div className="p-4 rounded-2xl bg-parchment border border-forest/10 shadow-subtle">
              <span className="font-serif font-bold text-base text-forest-dark block">Ker Kwaro Acholi</span>
              <span className="text-caption text-charcoal-muted">Customary Justice Forum</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP TURNKEY SYLLABI (STANDARDIZED CARD ANATOMY) */}
      <section className="container-shell space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-eyebrow">
              Turnkey Field Syllabi
            </span>
            <h2 className="text-h2 text-forest-dark">
              Curricula Ready for Department Approval
            </h2>
            <p className="text-body">
              Select a discipline below to inspect daily schedules, competencies, and research station setups.
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap p-1 bg-parchment-muted rounded-xl border border-forest/10 self-start md:self-auto">
            {categories.map((cat) => {
              const isSelected = selectedDiscipline === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedDiscipline(cat)}
                  className={`btn-press min-h-[44px] relative px-4 py-2 rounded-lg text-body-sm font-semibold cursor-pointer ${
                    isSelected ? "text-forest-dark" : "text-charcoal-muted hover:text-forest"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="homepageCategoryPill"
                      className="absolute inset-0 bg-parchment-card rounded-lg shadow-subtle border border-forest/15"
                      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((prog, index) => (
            <motion.div
              key={prog.slug}
              initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(12px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.24, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
              className="hover-lift group rounded-2xl bg-parchment-card border border-forest/15 overflow-hidden shadow-subtle flex flex-col justify-between"
            >
              {/* Card Anatomy: 1. Image with Clean Badges */}
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={prog.heroImage}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md text-gold font-bold text-caption border border-gold/30">
                    {prog.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-parchment/95 backdrop-blur-md text-forest-dark font-semibold text-caption shadow-xs">
                    {prog.credits}
                  </span>
                </div>
              </div>

              {/* Card Anatomy: 2. Eyebrow, 3. Title, 4. Meta Row, 5. Summary, 6. Outcomes, 7. CTA */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-eyebrow block">
                    {prog.discipline}
                  </span>

                  <h3 className="text-h3 text-forest-dark">
                    {prog.title}
                  </h3>

                  <p className="text-body-sm text-charcoal-muted leading-relaxed line-clamp-2">
                    {prog.shortDescription}
                  </p>

                  <div className="p-3 rounded-xl bg-forest/5 border border-forest/10 text-body-sm text-forest-dark flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ochre shrink-0" />
                    <span className="font-medium truncate">{prog.fieldStation}</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p className="text-body-sm font-bold text-charcoal-muted">
                      Core Field Competencies:
                    </p>
                    <ul className="space-y-1.5 text-body-sm text-charcoal">
                      {prog.learningOutcomes.slice(0, 3).map((out, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-forest/10 flex items-center justify-between gap-3">
                  <span className="text-body-sm font-mono text-charcoal-muted">
                    Est. <strong className="text-forest-dark text-base font-serif">${prog.priceEstimateUSD.toLocaleString()}</strong> / student
                  </span>

                  <Link
                    href={`/programs/${prog.slug}`}
                    className="btn-press min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm shadow-xs"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. GEOGRAPHIC LIVING LAB MAP */}
      <section className="container-shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow">
            Geographic Living Laboratory
          </span>
          <h2 className="text-h2 text-forest-dark">
            Research Stations Across Uganda
          </h2>
          <p className="text-body">
            Inspect our research hubs, long-term ecology stations, and staged AMREF aero-medical airfields in real time.
          </p>
        </div>

        <UgandaInteractiveMap />
      </section>

      {/* 5. INTEGRATED FOUNDER GOVERNANCE & DUTY-OF-CARE */}
      <section className="container-shell">
        <div className="rounded-2xl bg-forest-dark text-parchment p-8 sm:p-12 border border-forest-surface shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-gold/80 shadow-card">
                <Image
                  src="/images/collins-founder.jpg"
                  alt="Collins Ssegawa, Founder of Pearl Roots & Expeditions"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-parchment">Collins Ssegawa</h3>
                <p className="text-body-sm text-gold font-medium mt-0.5">Founder & Expedition Director</p>
                <p className="text-body-sm text-parchment/80 mt-1 font-light">
                  Former United Nations Development Programme (UNDP) Officer
                </p>
              </div>

              <div className="pt-2 flex flex-col w-full gap-2.5">
                <Link
                  href="/about"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-parchment font-semibold text-body-sm border border-forest-light/40 text-center"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20would%20like%20to%20discuss%20a%20university%20field%20school%20partnership."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-parchment/20 hover:bg-parchment/10 text-parchment font-semibold text-body-sm text-center"
                >
                  <span>WhatsApp Collins</span>
                  <ExternalLink className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-body-sm font-bold text-gold flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" />
                  <span>The UN Governance Standard</span>
                </span>

                <h3 className="text-h2 text-parchment leading-snug">
                  &ldquo;University Risk Committees Do Not Book Safaris; They Approve Duty-of-Care Frameworks.&rdquo;
                </h3>

                <p className="text-body-lg text-parchment/85 font-light leading-relaxed">
                  Having served with the United Nations Development Programme in Kampala, I designed Pearl Roots to eliminate the divide between academic departments and field logistics:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-forest/50 border border-forest-light/30 space-y-2.5">
                  <BookOpen className="w-5 h-5 text-gold" />
                  <h4 className="font-serif font-bold text-base text-parchment">Accredited Syllabi</h4>
                  <p className="text-body-sm text-parchment/85 font-light leading-relaxed">
                    Curricula structured for 3–6 US semester credit hours with access to partner academic research facilities.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-forest/50 border border-forest-light/30 space-y-2.5">
                  <HeartHandshake className="w-5 h-5 text-ochre-light" />
                  <h4 className="font-serif font-bold text-base text-parchment">Ethical Reciprocity</h4>
                  <p className="text-body-sm text-parchment/85 font-light leading-relaxed">
                    Direct collaboration with Acholi community elders and coffee co-ops, advancing UN SDGs 4, 13, 15, and 17.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-forest/50 border border-forest-light/30 space-y-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-serif font-bold text-base text-parchment">Duty of Care</h4>
                  <p className="text-body-sm text-parchment/85 font-light leading-relaxed">
                    AMREF aero-medical evacuation protocol, Level-4 ICU trauma liaison, and 1:6 target chaperone ratio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-eyebrow">
          Ready to Deploy Your Department?
        </span>
        <h2 className="text-h2 text-forest-dark">
          Stage an Accredited Field Course for 2026/27
        </h2>
        <p className="text-body-lg max-w-xl mx-auto leading-relaxed">
          Use our interactive proposal wizard to select your curriculum, customize cohort sizing, and export an institutional proposal dossier in minutes.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/educators#builder"
            className="btn-press min-h-[44px] w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs flex items-center justify-center gap-2 border border-gold-dark/20"
          >
            <span>Launch Course Proposal Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="btn-press min-h-[44px] w-full sm:w-auto px-8 py-3.5 rounded-xl border border-forest/20 hover:border-forest/40 bg-parchment-card text-forest font-semibold text-body-sm shadow-xs flex items-center justify-center"
          >
            Request Institutional Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
