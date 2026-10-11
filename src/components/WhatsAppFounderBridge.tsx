"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageSquare, X, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

const quickPrompts = [
  { label: "Kibale Field Dates 2026/27", text: "Hello Collins, I'd like to check field station availability for our Biology department in Kibale for 2026/27." },
  { label: "Gulu Peace Studies Syllabus", text: "Hello Collins, I am reviewing the Transitional Justice curriculum for an upcoming university field course." },
  { label: "RAMS Risk & AMREF Protocols", text: "Hello Collins, our Study Abroad Risk Committee needs the AMREF and emergency evacuation protocols." },
  { label: "Custom Department Proposal", text: "Hello Collins, we want to design a custom 10-14 day hybrid field school in Uganda." },
];

export default function WhatsAppFounderBridge() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLaunchWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text || "Hello Collins, I would like to inquire about university field schools with Pearl Roots & Expeditions.");
    window.open(`https://wa.me/256700892410?text=${encoded}`, "_blank");
  };

  return (
    <aside
      ref={containerRef}
      aria-label="Direct founder consultation bridge"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, transform: shouldReduceMotion ? "scale(1)" : "translateY(8px) scale(0.96)" }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            exit={{ opacity: 0, transform: shouldReduceMotion ? "scale(1)" : "translateY(8px) scale(0.96)" }}
            style={{ transformOrigin: "bottom right" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Consultation window with Collins Ssegawa"
            className="mb-3 w-[calc(100vw-3rem)] max-w-sm rounded-2xl bg-parchment-card shadow-xl border border-forest/15 overflow-hidden text-charcoal"
          >
            <div className="bg-forest p-4 text-parchment relative">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-press w-11 h-11 absolute top-2 right-2 flex items-center justify-center rounded-xl text-parchment/70 hover:text-parchment hover:bg-forest-light/40 cursor-pointer"
                aria-label="Close message window"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 pr-8">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold shrink-0">
                  <Image
                    src="/images/collins-founder.jpg"
                    alt="Collins Ssegawa"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-forest" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-parchment leading-tight">Collins Ssegawa</h4>
                  <p className="text-body-sm text-gold font-medium">Founder & Expedition Director</p>
                  <p className="text-body-sm text-parchment/80 flex items-center gap-1 mt-0.5 font-light">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Ex-UNDP Officer • Entebbe/Kampala (GMT+3)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3.5 bg-parchment-muted/30">
              <div className="bg-parchment p-3.5 rounded-2xl border border-forest/10 shadow-xs text-body-sm text-charcoal leading-relaxed">
                <p className="font-semibold text-forest-dark mb-1">Warm greetings from Uganda.</p>
                <p className="text-body-sm text-charcoal-muted leading-relaxed">
                  I personally coordinate university risk committee documentation, UNCST permitting processes, and AMREF emergency evacuation protocols. How can I help your department today?
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-caption text-charcoal-muted font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Usually responds within 15 minutes</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted">
                  Quick Inquiries:
                </p>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleLaunchWhatsApp(prompt.text)}
                      className="btn-press min-h-[44px] text-left px-3.5 py-2.5 rounded-xl bg-parchment hover:bg-forest/5 text-body-sm text-forest-dark font-medium border border-forest/10 hover:border-forest/20 flex items-center justify-between group cursor-pointer transition-colors"
                    >
                      <span className="truncate">{prompt.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-muted group-hover:text-forest transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a custom query..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLaunchWhatsApp(customMsg)}
                  className="flex-1 h-11 px-3.5 rounded-xl border border-forest/15 bg-parchment text-body-sm focus:outline-none focus:ring-2 focus:ring-forest"
                />
                <button
                  onClick={() => handleLaunchWhatsApp(customMsg)}
                  className="btn-press h-11 px-4 rounded-xl bg-forest hover:bg-forest-dark text-parchment text-body-sm font-bold shadow-xs cursor-pointer shrink-0 flex items-center justify-center border border-forest-light/30"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-press group relative min-h-[48px] flex items-center gap-3 px-4 py-2.5 rounded-full bg-forest hover:bg-forest-dark text-parchment shadow-lg border border-gold/40 cursor-pointer select-none"
        aria-label="Direct line to Collins Ssegawa on WhatsApp"
        aria-expanded={isOpen}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold shrink-0">
          <Image
            src="/images/collins-founder.jpg"
            alt="Collins Ssegawa"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-body-sm font-bold text-parchment leading-tight">Chat with Collins</span>
          </div>
          <span className="text-caption text-gold font-mono leading-none mt-0.5">
            Founder • Ex-UNDP
          </span>
        </div>

        <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 ml-0.5 shadow-xs">
          <MessageSquare className="w-3 h-3 fill-current" />
        </div>
      </button>
    </aside>
  );
}
