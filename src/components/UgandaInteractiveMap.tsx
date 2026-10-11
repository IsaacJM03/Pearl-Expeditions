"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { researchStations } from "@/data/stations";
import { ResearchStation } from "@/types";
import { MapPin, Plane, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";

const stationShortLabels: Record<string, string> = {
  "mubfs-kibale": "Kibale (MUBFS)",
  "gulu-ipss": "Gulu (IPSS)",
  "mabamba-wetland": "Mabamba Wetland",
  "sipi-elgon": "Mt. Elgon (Sipi)",
  "nakasero-hq": "Kampala HQ (Nakasero)",
};

export default function UgandaInteractiveMap() {
  const [selectedStation, setSelectedStation] = useState<ResearchStation>(researchStations[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 bg-forest-dark rounded-2xl p-6 sm:p-8 border border-forest-surface shadow-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-topo pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-10 border-b border-forest/50 pb-4">
          <div>
            <span className="text-eyebrow flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Proposed Field Station Laboratory Map</span>
            </span>
            <h3 className="font-serif text-2xl font-bold text-parchment">Proposed Research Stations & Evacuation Airstrips</h3>
          </div>
          <div className="flex items-center gap-2 text-caption text-parchment/80 bg-forest/80 px-3.5 py-1.5 rounded-full border border-forest-light/40">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>Click any node to inspect telemetry</span>
          </div>
        </div>

        <div className="relative w-full aspect-4/3 max-h-[500px] flex items-center justify-center">
          <svg
            viewBox="0 0 600 500"
            className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ugandaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B4D36" />
                <stop offset="100%" stopColor="#133E2B" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E4860" />
                <stop offset="100%" stopColor="#153648" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              d="M 90,140 Q 120,250 110,380 L 140,400 Q 150,260 120,130 Z"
              fill="#0B2419"
              opacity="0.35"
            />

            <path
              d="M 170,50 
                 Q 260,35 340,45 
                 Q 420,60 480,90 
                 Q 510,130 520,190 
                 Q 505,240 525,290 
                 Q 470,310 440,360 
                 Q 410,400 370,430 
                 Q 330,440 260,435 
                 Q 190,440 140,410 
                 Q 100,380 90,320 
                 Q 85,250 120,190 
                 Q 140,140 170,50 Z"
              fill="url(#ugandaGrad)"
              stroke="#2A5C43"
              strokeWidth="2.5"
            />

            <path
              d="M 280,415 Q 360,370 430,390 Q 420,445 320,445 Z"
              fill="url(#waterGrad)"
              stroke="#265B77"
              strokeWidth="1.5"
            />
            <path
              d="M 120,180 Q 155,220 180,260 Q 160,270 135,230 Q 110,200 120,180 Z"
              fill="url(#waterGrad)"
              opacity="0.8"
            />
            <path
              d="M 300,210 Q 350,195 385,215 Q 350,235 315,225 Z"
              fill="url(#waterGrad)"
              opacity="0.7"
            />
            <path
              d="M 370,390 Q 360,300 330,225 Q 260,190 200,165"
              fill="none"
              stroke="#265B77"
              strokeWidth="2"
              strokeDasharray="4 3"
              opacity="0.6"
            />

            {researchStations.map((station) => {
              const isSelected = selectedStation.id === station.id;
              const cx = (station.mapX / 100) * 600;
              const cy = (station.mapY / 100) * 500;

              return (
                <g
                  key={station.id}
                  onClick={() => setSelectedStation(station)}
                  className="cursor-pointer group"
                >
                  {isSelected && !shouldReduceMotion && (
                    <>
                      <circle
                        cx={cx}
                        cy={cy}
                        r="24"
                        fill="none"
                        stroke="#E69F24"
                        strokeWidth="1.5"
                        opacity="0.3"
                        className="animate-pulse-ring"
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r="16"
                        fill="none"
                        stroke="#E69F24"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                    </>
                  )}

                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? "9" : "6.5"}
                    fill={isSelected ? "#E69F24" : "#C26732"}
                    stroke="#FBFBF9"
                    strokeWidth="2"
                    filter={isSelected ? "url(#glow)" : undefined}
                    className="transition-transform duration-200"
                  />

                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? "3.5" : "2.5"}
                    fill="#133E2B"
                  />

                  <text
                    x={cx + (cx > 400 ? -12 : 12)}
                    y={cy + 4}
                    textAnchor={cx > 400 ? "end" : "start"}
                    fill={isSelected ? "#FBFBF9" : "#C4CEBE"}
                    fontSize={isSelected ? "12" : "10"}
                    fontWeight={isSelected ? "bold" : "600"}
                    className="select-none pointer-events-none drop-shadow-md"
                  >
                    {stationShortLabels[station.id] || station.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 pt-4 border-t border-forest/40 flex flex-wrap gap-2">
          {researchStations.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStation(st)}
              className={`btn-press min-h-[44px] px-3.5 py-2 rounded-xl text-body-sm font-medium cursor-pointer border ${
                selectedStation.id === st.id
                  ? "bg-forest text-parchment font-bold border-forest-light/60 shadow-xs"
                  : "bg-forest/60 text-parchment/80 border-transparent hover:bg-forest hover:text-parchment"
              }`}
            >
              {stationShortLabels[st.id] || st.name}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 bg-parchment-card rounded-2xl p-6 sm:p-8 border border-forest/15 shadow-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStation.id}
            initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(8px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0)" : "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between gap-2 border-b border-forest/10 pb-4">
              <span className="px-3 py-1 rounded-full bg-forest/10 text-forest-dark font-semibold text-caption">
                {selectedStation.discipline}
              </span>
              <span className="text-caption font-mono text-charcoal-light flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-ochre" />
                <span>{selectedStation.coordinates}</span>
              </span>
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-forest-dark leading-snug">
                {selectedStation.name}
              </h4>
              <p className="text-body-sm font-medium text-ochre mt-1">
                {selectedStation.location} • Elevation: {selectedStation.elevation}
              </p>
            </div>

            <p className="text-body text-charcoal-muted leading-relaxed">
              {selectedStation.description}
            </p>

            <div className="space-y-2.5 bg-parchment-muted/50 p-4 rounded-xl border border-forest/10">
              <h5 className="text-body-sm font-bold uppercase tracking-wider text-forest-dark">
                Academic & Laboratory Facilities:
              </h5>
              <div className="space-y-2">
                {selectedStation.facilities.map((facility, i) => (
                  <div key={i} className="flex items-start gap-2 text-body-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ochre/10 border border-ochre/20 space-y-2">
              <div className="flex items-center gap-2 text-body-sm font-bold text-ochre-dark">
                <ShieldAlert className="w-4 h-4" />
                <span>AMREF Aero-Evacuation Staging Route</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-charcoal">
                <Plane className="w-4 h-4 text-ochre shrink-0" />
                <span><strong>Airstrip:</strong> {selectedStation.evacAirstrip}</span>
              </div>
              <p className="text-body-sm text-charcoal-muted font-medium">
                {selectedStation.emergencyTransitTime}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/programs"
                className="btn-press min-h-[44px] flex-1 py-3 px-4 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-semibold text-body-sm text-center shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Curricula at this Station</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/educators#builder"
                className="btn-press min-h-[44px] py-3 px-4 rounded-xl border border-forest/20 text-forest-dark font-semibold text-body-sm text-center hover:bg-forest/5 flex items-center justify-center"
              >
                Build Proposal
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
