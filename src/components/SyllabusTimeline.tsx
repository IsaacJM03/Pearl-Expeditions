"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Clock, MapPin, Wrench, ChevronLeft, ChevronRight, Sparkles, Award } from "lucide-react";

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  schedule: ScheduleItem[];
  fieldKit: string[];
  sdgFocus: string;
}

interface SyllabusTimelineProps {
  itinerary: ItineraryDay[];
  programTitle: string;
}

export default function SyllabusTimeline({ itinerary }: SyllabusTimelineProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = itinerary[activeDayIndex] || itinerary[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between gap-3 pb-2 border-b border-forest/10 overflow-x-auto">
        <div className="flex items-center gap-1.5 shrink-0">
          {itinerary.map((item, index) => {
            const isActive = activeDayIndex === index;
            return (
              <button
                key={item.day}
                onClick={() => setActiveDayIndex(index)}
                className={`btn-press min-h-[44px] relative px-4 py-2.5 rounded-xl text-body-sm font-semibold cursor-pointer shrink-0 ${
                  isActive ? "text-forest-dark" : "text-charcoal-muted hover:text-forest hover:bg-forest/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDayPill"
                    className="absolute inset-0 bg-forest/10 border border-forest/30 rounded-xl shadow-subtle"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">Day {item.day}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <button
            onClick={() => setActiveDayIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeDayIndex === 0}
            className="btn-press min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-forest/15 text-charcoal hover:bg-forest/5 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Previous day"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-caption font-mono text-charcoal-muted px-2">
            {activeDayIndex + 1} / {itinerary.length}
          </span>
          <button
            onClick={() => setActiveDayIndex((prev) => Math.min(itinerary.length - 1, prev + 1))}
            disabled={activeDayIndex === itinerary.length - 1}
            className="btn-press min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-forest/15 text-charcoal hover:bg-forest/5 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Next day"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay.day}
          initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          exit={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(-8px)" }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-2xl bg-parchment-card p-6 sm:p-8 border border-forest/15 shadow-xs space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-forest/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-forest text-gold font-bold flex items-center justify-center text-body-sm shadow-xs">
                D{activeDay.day}
              </span>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark">
                  {activeDay.title}
                </h4>
                <p className="text-body-sm font-medium text-ochre flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeDay.location}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-forest/10 text-forest-dark text-caption font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-ochre" />
                <span>{activeDay.sdgFocus}</span>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted">
              Field Schedule & Academic Modules:
            </h5>
            <div className="space-y-2.5">
              {activeDay.schedule.map((slot, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-parchment-muted/40 border border-forest/5 hover:border-forest/15 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-caption font-mono font-bold text-forest bg-forest/10 px-2.5 py-1 rounded-lg shrink-0">
                    <Clock className="w-3.5 h-3.5 text-ochre" />
                    <span>{slot.time}</span>
                  </div>
                  <p className="text-body text-charcoal leading-relaxed pt-0.5">
                    {slot.activity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap text-body-sm text-charcoal">
              <span className="font-bold text-forest-dark flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-ochre" />
                <span>Field Kit Deployed:</span>
              </span>
              {activeDay.fieldKit.map((kit, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-parchment border border-forest/10 text-caption font-medium text-charcoal-muted"
                >
                  {kit}
                </span>
              ))}
            </div>

            {activeDay.day >= 8 && (
              <span className="inline-flex items-center gap-1.5 text-caption font-semibold text-ochre">
                <Award className="w-4 h-4" />
                <span>Research Symposium Data Integration</span>
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
