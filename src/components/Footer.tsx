import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, Phone, Mail, MapPin, ExternalLink, Award, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-parchment/80 border-t border-forest-surface pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="pb-12 border-b border-forest/40">
          <p className="text-caption font-semibold uppercase tracking-widest text-gold text-center mb-6">
            Field Safety & Ethics Governance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">AMREF Flying Doctors</span>
              <span className="text-caption text-parchment/70">Aero-Medical Protocol</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <Lock className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">Zero Child Harm</span>
              <span className="text-caption text-parchment/70">Strict Safeguarding</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">Local Leadership</span>
              <span className="text-caption text-parchment/70">No Voluntourism</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <Award className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">24h SLA Guarantee</span>
              <span className="text-caption text-parchment/70">Inquiry Intake SLA</span>
            </div>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-forest/40">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Pearl Roots Home">
              <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-gold">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-serif text-xl font-bold text-parchment">Pearl Roots</span>
            </Link>
            <p className="text-body-sm text-parchment/80 leading-relaxed font-light">
              Educational tourism, supervised student electives, and ethical wildlife safaris in Uganda. Founded by Collins and Patricia Ssegawa.
            </p>
            <div className="pt-1 text-caption text-gold font-mono">
              <span>GROW • SERVE • DISCOVER</span>
            </div>
          </div>

          {/* Academic Placements */}
          <div>
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Placements & Sectors</h4>
            <ul className="space-y-2.5 text-body-sm text-parchment/80 font-light">
              <li>
                <Link href="/programs/student-placements" className="hover:text-gold transition-colors">
                  Student Placements Hub
                </Link>
              </li>
              <li>
                <Link href="/programs/medical-healthcare-placements" className="hover:text-gold transition-colors">
                  Medical & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/programs/social-work-and-education" className="hover:text-gold transition-colors">
                  Social Work & Education
                </Link>
              </li>
              <li>
                <Link href="/programs/community-development-ngo" className="hover:text-gold transition-colors">
                  Community Development NGO
                </Link>
              </li>
              <li>
                <Link href="/volunteer-uganda" className="hover:text-gold transition-colors text-gold">
                  Independent Volunteers →
                </Link>
              </li>
            </ul>
          </div>

          {/* Expeditions & Institutional */}
          <div>
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Tours & Governance</h4>
            <ul className="space-y-2.5 text-body-sm text-parchment/80 font-light">
              <li>
                <Link href="/tours/5-day-post-placement-safari" className="hover:text-gold transition-colors">
                  5-Day Post-Placement Safari
                </Link>
              </li>
              <li>
                <Link href="/tours/leisure-safaris" className="hover:text-gold transition-colors">
                  Leisure Safaris & Gorillas
                </Link>
              </li>
              <li>
                <Link href="/about-and-safety" className="hover:text-gold transition-colors">
                  About Us & Safety Framework
                </Link>
              </li>
              <li>
                <Link href="/safeguarding" className="hover:text-gold transition-colors">
                  Child Safeguarding Charter
                </Link>
              </li>
              <li>
                <Link href="/for-universities" className="hover:text-gold transition-colors">
                  For University Coordinators
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-gold transition-colors">
                  Field Journal & Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Operations & WhatsApp Liaison */}
          <div className="space-y-3">
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Direct Operations Desk</h4>
            <div className="flex items-start gap-2.5 text-body-sm text-parchment/80 font-light">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <span>Plot 14, Lugard Avenue, Entebbe Gateway & Mpigi Field Office, Uganda</span>
            </div>
            <div className="flex items-center gap-2.5 text-body-sm text-parchment/80 font-light">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:collins@pearlroots.com" className="hover:text-gold transition-colors">
                collins@pearlroots.com
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-body-sm text-parchment/80 font-light">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+256700892410" className="hover:text-gold transition-colors">
                +256 700 892 410 (Direct WhatsApp)
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20inquiry%20from%20the%20website."
                target="_blank"
                rel="noreferrer"
                className="btn-press min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-parchment text-body-sm font-semibold border border-forest-light/40"
              >
                <span>WhatsApp Collins Ssegawa</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-parchment/60 font-light">
          <p>© {new Date().getFullYear()} Pearl Roots & Expeditions. Registered in the Republic of Uganda (URSB).</p>
          <div className="flex items-center gap-6">
            <Link href="/safeguarding" className="hover:text-gold">
              Safeguarding Policy
            </Link>
            <Link href="/for-universities" className="hover:text-gold">
              RAMS Protocol
            </Link>
            <Link href="/admin" className="hover:text-gold font-mono">
              Operations Portal
            </Link>
          </div>
        </div>

        <p className="text-caption text-parchment/45 font-light text-center sm:text-left mt-3">
          Notice: Institutional Memorandums of Understanding, hospital partner names, and quantitative fee allocations represent audited operational targets pending annual formal re-certification. [VERIFY BEFORE PUBLISHING: Hospital, School & NGO partner MOUs; UTB licenses].
        </p>
      </div>
    </footer>
  );
}
