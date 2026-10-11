"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Compass
} from "lucide-react";
import { programs } from "@/data/programs";

export default function ProgramsDirectoryPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = selectedDiscipline === "All"
    ? programs
    : programs.filter((p) => p.discipline === selectedDiscipline);

  const categories = ["All", "Biological Sciences", "Peace & Conflict", "Agro-Ecology & CAS"];

  return (
    <div className="container-shell py-12 sm:py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest-dark text-caption font-semibold">
          <Compass className="w-4 h-4 text-ochre" />
          <span>Curricula Directory & Field Schools</span>
        </div>
        <h1 className="text-h1 text-forest-dark">
          Accredited University & IB Field Schools
        </h1>
        <p className="text-body-lg">
          Pre-cleared syllabi designed for 3–6 semester credit hours and IB CAS service learning. Every curriculum is staged at a partner field research station with AMREF aero-medical evacuation protocol coverage.
        </p>

        <div className="pt-2 flex items-center justify-center gap-1.5 flex-wrap p-1 bg-parchment-muted rounded-xl border border-forest/10 w-fit mx-auto">
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
                    layoutId="programsDirectoryPill"
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

      <div className="space-y-8">
        {filtered.map((prog, index) => (
          <motion.div
            key={prog.slug}
            initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(12px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.22, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="hover-lift group rounded-2xl bg-parchment-card border border-forest/15 shadow-subtle overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Card Anatomy: 1. Clean Image with Meta Badges */}
            <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[260px] lg:min-h-[320px] overflow-hidden">
              <Image
                src={prog.heroImage}
                alt={prog.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md text-gold font-bold text-caption border border-gold/30">
                  {prog.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-parchment/95 backdrop-blur-md text-forest-dark font-semibold text-caption shadow-xs">
                  {prog.credits}
                </span>
              </div>
            </div>

            {/* Card Anatomy: 2. Eyebrow, 3. Title, 4. Overview, 5. Meta, 6. Outcomes, 7. CTAs */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5">
                <div>
                  <span className="text-eyebrow block">
                    {prog.discipline} • {prog.level}
                  </span>
                  <h3 className="text-h2 text-forest-dark mt-1">
                    {prog.title}
                  </h3>
                </div>

                <p className="text-body-sm text-charcoal-muted leading-relaxed">
                  {prog.overview}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm">
                  <div className="p-3 rounded-xl bg-forest/5 border border-forest/10 flex items-center gap-2 text-forest-dark">
                    <MapPin className="w-4 h-4 text-ochre shrink-0" />
                    <span className="font-medium truncate">{prog.fieldStation}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-forest/5 border border-forest/10 flex items-center gap-2 text-forest-dark">
                    <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                    <span className="font-medium">Target Ratio: {prog.chaperoneRatio}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <h4 className="text-body-sm font-bold text-charcoal-muted">
                    Accredited Learning Milestones:
                  </h4>
                  <div className="space-y-1.5">
                    {prog.learningOutcomes.slice(0, 3).map((out, i) => (
                      <div key={i} className="flex items-start gap-2 text-body-sm text-charcoal">
                        <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-body-sm text-charcoal-muted">Tuition Estimate:</span>
                  <div className="font-serif text-2xl font-bold text-forest-dark">
                    ${prog.priceEstimateUSD.toLocaleString()}
                    <span className="text-body-sm text-charcoal-muted font-sans font-normal ml-1">/ student</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm shadow-xs"
                  >
                    <span>View Day-by-Day Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/educators#builder"
                    className="btn-press min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-xl border border-forest/20 text-forest text-body-sm font-semibold hover:bg-forest/5 shadow-xs"
                  >
                    Build Proposal
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
