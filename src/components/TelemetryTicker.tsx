"use client";

import { ShieldCheck, Plane, Building2, Trees, Award, HeartHandshake, Sparkles } from "lucide-react";

const telemetryItems = [
  { icon: Building2, text: "GROW: Pre-Graduation Clinical Electives", badge: "Academic Rigor" },
  { icon: HeartHandshake, text: "SERVE: Locally Governed Community Placements", badge: "Strict Safeguarding" },
  { icon: Trees, text: "DISCOVER: Queen Elizabeth NP & Bunyonyi", badge: "Earned Safari" },
  { icon: Plane, text: "AMREF Aero-Medical Protocol Active", badge: "24/7 Airlift" },
  { icon: Award, text: "24-Hour Response SLA Intake", badge: "Field Ops Desk" },
  { icon: ShieldCheck, text: "Collins & Patricia Ssegawa", badge: "Ugandan Leadership" },
];

export default function TelemetryTicker() {
  const handleReplayIntro = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("replay-lion-loader"));
    }
  };

  return (
    <div className="w-full bg-forest-dark text-parchment/80 border-b border-forest-surface/80 py-1.5 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-caption font-medium text-gold/90 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">Uganda Living Lab Telemetry</span>
          <span className="sm:hidden font-mono">Live Telemetry</span>
        </div>

        <div className="relative overflow-hidden w-full flex [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="animate-marquee items-center gap-8 whitespace-nowrap text-caption">
            {[...telemetryItems, ...telemetryItems].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="inline-flex items-center gap-2 text-parchment/75">
                  <Icon className="w-3.5 h-3.5 text-gold/85 shrink-0" />
                  <span className="font-normal text-parchment">{item.text}</span>
                  <span className="text-caption bg-forest/80 px-2 py-0.5 rounded text-gold/90 font-mono tracking-tight">
                    {item.badge}
                  </span>
                  <span className="text-forest-light/60 mx-1">•</span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleReplayIntro}
          className="btn-press hidden md:inline-flex items-center gap-1.5 min-h-[44px] text-body-sm font-mono text-gold/85 hover:text-gold px-3 py-1.5 rounded-lg border border-forest-light/30 hover:border-gold/40 hover:bg-forest/40 shrink-0 cursor-pointer transition-colors"
          title="Replay Lion Line Art Animation"
          aria-label="Replay Lion Line Art Animation"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Replay Intro</span>
        </button>
      </div>
    </div>
  );
}
