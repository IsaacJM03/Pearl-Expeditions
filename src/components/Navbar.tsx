"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Compass, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

const mainNavLinks = [
  { name: "Student Placements", href: "/programs/student-placements" },
  { name: "Volunteer Uganda", href: "/volunteer-uganda" },
  { name: "Safaris & Tours", href: "/tours/5-day-post-placement-safari" },
  { name: "About & Safety", href: "/about-and-safety" },
  { name: "Safeguarding", href: "/safeguarding" },
  { name: "For Universities", href: "/for-universities" }
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
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Pearl Roots & Expeditions Homepage">
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold shadow-xs group-hover:scale-[1.02] transition-transform duration-200">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-dark leading-none">
              Pearl Roots <span className="text-ochre font-sans text-lg font-light">&</span> Expeditions
            </span>
            <span className="text-[10px] sm:text-caption font-semibold uppercase tracking-wider text-charcoal-muted mt-1 flex items-center gap-1.5">
              <span>Uganda Social Enterprise</span>
              <span className="w-1 h-1 rounded-full bg-ochre" />
              <span className="text-forest font-medium">Founded by Collins & Patricia Ssegawa</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 rounded-xl text-body-sm font-medium transition-colors ${
                  isActive
                    ? "text-forest-dark font-semibold"
                    : "text-charcoal-muted hover:text-forest-dark hover:bg-forest/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-forest rounded-full"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href="/admin"
            className="btn-press min-h-[44px] inline-flex items-center px-3 py-2 text-body-sm font-medium text-charcoal-muted hover:text-forest-dark rounded-xl"
            title="Coordinator & Admin Operations Pipeline"
          >
            Admin Ops
          </Link>

          <Link
            href="/contact"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20"
          >
            <span>Inquire (24h SLA)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-press min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-xl bg-gold text-forest-dark font-bold text-body-sm shadow-xs"
          >
            Inquire
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-forest/15 bg-parchment overflow-hidden px-4 pt-3 pb-6 space-y-3"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2.5 rounded-xl text-body font-medium text-forest-dark hover:bg-forest/5"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/journal"
                className="px-3 py-2.5 rounded-xl text-body font-medium text-forest-dark hover:bg-forest/5"
              >
                Field Journal
              </Link>
              <Link
                href="/admin"
                className="px-3 py-2.5 rounded-xl text-body font-medium text-ochre hover:bg-forest/5"
              >
                Admin Pipeline Dashboard
              </Link>
            </nav>

            <div className="pt-3 border-t border-forest/10">
              <Link
                href="/contact"
                className="btn-press min-h-[44px] w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest text-parchment font-semibold text-body-sm shadow-xs"
              >
                <span>Submit Inquiry (24h Response)</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
