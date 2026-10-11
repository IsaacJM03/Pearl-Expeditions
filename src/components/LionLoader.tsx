"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface LionLoaderProps {
  forceVisible?: boolean;
}

export default function LionLoader({ forceVisible = false }: LionLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(forceVisible);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const dismiss = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsVisible(false);
      return;
    }

    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    if (typeof document !== "undefined") {
      if (document.readyState === "complete") {
        setIsVisible(false);
        return;
      }

      const delayTimer = setTimeout(() => {
        if (document.readyState !== "complete") {
          setIsVisible(true);
        }
      }, 180);

      const handlePageLoad = () => {
        clearTimeout(delayTimer);
        dismiss();
      };

      window.addEventListener("load", handlePageLoad);

      const maxTimer = setTimeout(() => {
        dismiss();
      }, 2500);

      return () => {
        clearTimeout(delayTimer);
        clearTimeout(maxTimer);
        window.removeEventListener("load", handlePageLoad);
      };
    }
  }, [shouldReduceMotion, forceVisible, dismiss]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };

    const handleReplay = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setIsVisible(true);
      timerRef.current = setTimeout(() => dismiss(), 1450);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("replay-lion-loader", handleReplay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("replay-lion-loader", handleReplay);
    };
  }, [dismiss]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="lion-page-loader"
          initial={{ opacity: 1, transform: "scale(1)" }}
          exit={{
            opacity: 0,
            transform: "scale(1.015)",
            transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest-dark text-parchment select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Pearl Roots & Expeditions"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,159,36,0.12)_0%,_transparent_70%)] pointer-events-none" />

          <button
            onClick={dismiss}
            className="btn-press absolute top-6 right-6 px-4 py-2 min-h-[44px] rounded-full text-body-sm font-mono tracking-wider uppercase text-parchment/70 hover:text-gold hover:bg-forest/60 border border-forest-light/30 transition-colors z-20 cursor-pointer"
          >
            Skip →
          </button>

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                className="w-full h-full text-gold drop-shadow-[0_4px_16px_rgba(230,159,36,0.25)]"
              >
                {/* 1. Outer Mane Silhouette - Symmetric Geometric Polyline */}
                <motion.path
                  d="M 100 22 L 88 32 L 76 26 L 68 40 L 54 36 L 44 54 L 32 54 L 24 74 L 18 96 L 16 118 L 20 138 L 28 156 L 42 172 L 60 184 L 80 192 L 100 196"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 100 22 L 112 32 L 124 26 L 132 40 L 146 36 L 156 54 L 168 54 L 176 74 L 182 96 L 184 118 L 180 138 L 172 156 L 158 172 L 140 184 L 120 192 L 100 196"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 2. Inner Mane Volume & Facets */}
                <motion.path
                  d="M 100 38 L 84 50 L 68 62 L 50 78 L 40 98 L 38 120 L 44 142 L 58 162 L 76 176 L 100 184"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 100 38 L 116 50 L 132 62 L 150 78 L 160 98 L 162 120 L 156 142 L 142 162 L 124 176 L 100 184"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* Mane Radial Struts */}
                <motion.g
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.55 }}
                  transition={{ duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
                >
                  <path d="M 84 50 L 54 36 M 116 50 L 146 36" />
                  <path d="M 68 62 L 32 54 M 132 62 L 168 54" />
                  <path d="M 50 78 L 24 74 M 150 78 L 176 74" />
                  <path d="M 40 98 L 18 96 M 160 98 L 182 96" />
                  <path d="M 38 120 L 16 118 M 162 120 L 184 118" />
                  <path d="M 44 142 L 20 138 M 156 142 L 180 138" />
                  <path d="M 58 162 L 28 156 M 142 162 L 172 156" />
                </motion.g>

                {/* 3. Geometric Ears */}
                <motion.path
                  d="M 66 52 L 52 40 L 44 58 L 60 68 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 134 52 L 148 40 L 156 58 L 140 68 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 4. Forehead & Brow Facets */}
                <motion.path
                  d="M 78 68 L 100 58 L 122 68"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.75, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 100 58 L 88 74 L 100 88 L 112 74 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* Strong Angled Eyebrows */}
                <motion.path
                  d="M 66 84 L 80 82 L 94 86 L 100 88"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 0.7, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 134 84 L 120 82 L 106 86 L 100 88"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 0.7, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 5. Eyes & Pupils */}
                <motion.path
                  d="M 74 96 L 84 92 L 94 96 L 84 100 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.circle
                  cx="84"
                  cy="96"
                  r="1.6"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                />

                <motion.path
                  d="M 126 96 L 116 92 L 106 96 L 116 100 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.circle
                  cx="116"
                  cy="96"
                  r="1.6"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 6. Nose Bridge Facets */}
                <motion.path
                  d="M 94 86 L 92 110 L 86 126"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 106 86 L 108 110 L 114 126"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.line
                  x1="100"
                  y1="88"
                  x2="100"
                  y2="126"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 7. Nose Leather Pad (Triangular Feline Rhinarium) */}
                <motion.path
                  d="M 86 126 L 114 126 L 100 140 Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 90 130 L 96 134 M 110 130 L 104 134"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 0.5, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 8. Philtrum, Muzzle Whisker Pads & Jaw Point */}
                <motion.line
                  x1="100"
                  y1="140"
                  x2="100"
                  y2="148"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.38, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 100 148 L 92 152 L 80 148 L 76 138 L 86 126"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 100 148 L 108 152 L 120 148 L 124 138 L 114 126"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                />
                <motion.path
                  d="M 92 152 L 100 166 L 108 152"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.42, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* 9. Whiskers */}
                <motion.g
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.65 }}
                  transition={{ duration: 0.45, delay: 0.48 }}
                >
                  <path d="M 78 142 L 52 138" />
                  <path d="M 77 146 L 48 147" />
                  <path d="M 79 150 L 52 157" />
                  <path d="M 122 142 L 148 138" />
                  <path d="M 123 146 L 152 147" />
                  <path d="M 121 150 L 148 157" />
                </motion.g>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, transform: "translateY(6px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.3, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-1.5"
            >
              <h1 className="font-serif text-lg sm:text-xl font-bold tracking-wider text-parchment uppercase">
                Pearl Roots <span className="text-gold font-sans font-light">&</span> Expeditions
              </h1>
              <p className="text-caption font-mono tracking-widest uppercase text-gold/90">
                Uganda Living Laboratory
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-28 h-[1.5px] bg-forest-light/40 rounded-full mt-5 overflow-hidden relative"
            >
              <div className="absolute inset-y-0 w-1/2 bg-gold rounded-full animate-loader-progress" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
