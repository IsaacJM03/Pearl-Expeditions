"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Compass, ArrowRight, ShieldCheck } from "lucide-react";

const navLinks = [
  { name: "Field Programs", href: "/programs" },
  { name: "About Us", href: "/about" },
  { name: "Educators Hub", href: "/educators" },
  { name: "Impact & Reciprocity", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-parchment/95 border-b border-forest/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Pearl Roots & Expeditions Homepage">
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold shadow-xs group-hover:scale-[1.02] transition-transform duration-200">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-dark leading-none">
              Pearl Roots <span className="text-ochre font-sans text-lg font-light">&</span> Expeditions
            </span>
            <span className="text-caption font-semibold uppercase tracking-wider text-charcoal-muted mt-1 flex items-center gap-1.5">
              <span>Uganda Living Laboratory</span>
              <span className="w-1 h-1 rounded-full bg-ochre" />
              <span className="text-forest font-medium">Former UNDP Governance</span>
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2.5 rounded-xl text-body-sm font-medium transition-colors ${
                  isActive
                    ? "text-forest-dark font-semibold"
                    : "text-charcoal-muted hover:text-forest-dark hover:bg-forest/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-forest rounded-full"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/programs"
            className="btn-press min-h-[44px] inline-flex items-center px-4 py-2 text-body-sm font-medium text-forest hover:text-forest-dark hover:bg-forest/5 rounded-xl"
          >
            Explore Syllabi
          </Link>
          <Link
            href="/educators#builder"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20"
          >
            <span>Build Course Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/educators#builder"
            className="btn-press min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs"
          >
            Proposal
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-press w-11 h-11 flex items-center justify-center text-forest-dark hover:bg-forest/5 rounded-xl cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: shouldReduceMotion ? "auto" : 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: shouldReduceMotion ? "auto" : 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden border-t border-forest/10 bg-parchment overflow-hidden px-4 py-5 shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-body-sm font-medium transition-colors ${
                      isActive ? "bg-forest/10 text-forest-dark font-semibold" : "text-charcoal hover:bg-forest/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-forest/10 flex flex-col gap-2.5">
                <Link
                  href="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-press min-h-[44px] flex items-center justify-center w-full text-center py-2.5 rounded-xl border border-forest/20 text-forest font-semibold text-body-sm"
                >
                  Explore Syllabi Directory
                </Link>
                <Link
                  href="/educators#builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-press min-h-[44px] flex items-center justify-center w-full text-center py-2.5 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs"
                >
                  Launch Course Proposal Wizard →
                </Link>
              </div>

              <div className="mt-3 pt-3 border-t border-forest/10 flex items-center gap-2 text-caption text-charcoal-muted">
                <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                <span>UNDP Governance Pedigree • AMREF Aero-Medical Protocol</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
