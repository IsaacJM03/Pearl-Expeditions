import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, Phone, Mail, MapPin, ExternalLink, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-parchment/80 border-t border-forest-surface pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 border-b border-forest/40">
          <p className="text-caption font-semibold uppercase tracking-widest text-gold text-center mb-6">
            Planned Institutional Linkages & Safety Protocols
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <Award className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">UNCST Permitting</span>
              <span className="text-caption text-parchment/70">Ethics Protocols (REC)</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">Makerere Univ MUBFS</span>
              <span className="text-caption text-parchment/70">Planned Station Labs</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">Gulu Univ IPSS</span>
              <span className="text-caption text-parchment/70">Planned Academic Hub</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">AMREF Flying Docs</span>
              <span className="text-caption text-parchment/70">Aero-Medical Protocol</span>
            </div>
            <div className="p-4 rounded-2xl bg-forest/40 border border-forest/50 flex flex-col items-center justify-center col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-gold mb-1.5" />
              <span className="text-body-sm font-bold text-parchment">UWA Research Sites</span>
              <span className="text-caption text-parchment/70">Field Access Protocol</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-forest/40">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Pearl Roots Home">
              <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-gold">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-serif text-xl font-bold text-parchment">Pearl Roots</span>
            </Link>
            <p className="text-body-sm text-parchment/80 leading-relaxed font-light">
              Transforming Uganda into an accredited, open-air living laboratory. Built by former UNDP officer Collins Ssegawa for university study abroad deans, biology faculties, and IB CAS coordinators.
            </p>
            <div className="pt-2 text-caption text-gold font-mono">
              <span>UN SDG ALIGNMENT: 4 • 13 • 15 • 17</span>
            </div>
          </div>

          <div>
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Turnkey Field Syllabi</h4>
            <ul className="space-y-3 text-body-sm text-parchment/80 font-light">
              <li>
                <Link href="/programs/primate-ecology-kibale" className="hover:text-gold transition-colors">
                  Primate Behavioral Ecology (12 Days)
                </Link>
              </li>
              <li>
                <Link href="/programs/peace-studies-gulu" className="hover:text-gold transition-colors">
                  Transitional Justice & Acholiland (10 Days)
                </Link>
              </li>
              <li>
                <Link href="/programs/agro-ecology-elgon" className="hover:text-gold transition-colors">
                  Agro-Ecology & Coffee Co-ops (9 Days)
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold transition-colors text-gold font-medium">
                  Browse All Academic Syllabi →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Institutional Hub</h4>
            <ul className="space-y-3 text-body-sm text-parchment/80 font-light">
              <li>
                <Link href="/educators#builder" className="hover:text-gold transition-colors">
                  Interactive Course Proposal Wizard
                </Link>
              </li>
              <li>
                <Link href="/educators" className="hover:text-gold transition-colors">
                  Duty of Care & RAMS Protocols
                </Link>
              </li>
              <li>
                <Link href="/educators" className="hover:text-gold transition-colors">
                  14-Month University Pipeline
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Founder Governance Pedigree (UNDP)
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-gold transition-colors">
                  Expedition Spend Equity Ledger
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-body-sm font-bold uppercase tracking-wider text-parchment mb-4">Field Command Inquiries</h4>
            <div className="flex items-start gap-2.5 text-body-sm text-parchment/80 font-light">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <span>Planned Operations Liaison: Plot 14, Lugard Avenue, Entebbe Gateway & Makerere Liaison Desk, Kampala, Uganda</span>
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
                +256 (0) 700 892 410 (Direct Field / WhatsApp Liaison)
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20inquiry%20from%20a%20university%20department%20regarding%20a%20field%20school."
                target="_blank"
                rel="noreferrer"
                className="btn-press min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-parchment text-body-sm font-semibold border border-forest-light/40"
              >
                <span>WhatsApp Expedition Lead</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-parchment/60 font-light">
          <p>© {new Date().getFullYear()} Pearl Roots & Expeditions Ltd. Registered in the Republic of Uganda (URSB).</p>
          <div className="flex items-center gap-6">
            <span>Target RAMS Protocols</span>
            <span>AMREF Evacuation Protocol</span>
            <span>Child Safeguarding Standards</span>
          </div>
        </div>
        <p className="text-caption text-parchment/45 font-light text-center sm:text-left mt-3">
          Notice: Research station partnerships, regulatory accreditations, and quantitative impact figures represent planned operational frameworks and illustrative benchmarks pending final formal clearance.
        </p>
      </div>
    </footer>
  );
}
