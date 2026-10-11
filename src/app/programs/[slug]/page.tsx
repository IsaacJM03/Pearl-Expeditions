import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/programs";
import SyllabusTimeline from "@/components/SyllabusTimeline";
import { 
  ArrowLeft, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="container-shell py-8 sm:py-12 space-y-10">
      <div className="flex items-center gap-2 text-body-sm text-charcoal-muted">
        <Link href="/programs" className="hover:text-forest flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Programs</span>
        </Link>
        <span>/</span>
        <span className="text-ochre font-medium">{program.discipline}</span>
        <span>/</span>
        <span className="text-forest-dark font-semibold truncate">{program.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6">
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden shadow-md border border-forest/15">
              <Image
                src={program.heroImage}
                alt={program.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-forest-dark/85 backdrop-blur-md text-gold font-bold text-caption border border-gold/30">
                  {program.duration} Field Course
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-parchment/95 backdrop-blur-md text-forest-dark font-semibold text-caption shadow-xs">
                  {program.credits}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-parchment space-y-2">
                <span className="text-eyebrow font-mono text-gold">
                  {program.discipline} • {program.level}
                </span>
                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-parchment leading-tight">
                  {program.title}
                </h1>
                <p className="text-body-lg text-parchment/85 font-light max-w-2xl leading-relaxed">
                  {program.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-parchment-card border border-forest/10 shadow-subtle text-body-sm">
                <span className="text-caption font-semibold text-charcoal-muted block">STATION</span>
                <span className="font-bold text-forest-dark text-body-sm truncate block mt-0.5">{program.stationDetails.name.split("(")[0]}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-parchment-card border border-forest/10 shadow-subtle text-body-sm">
                <span className="text-caption font-semibold text-charcoal-muted block">ELEVATION</span>
                <span className="font-bold text-forest-dark text-body-sm block mt-0.5">{program.stationDetails.elevation}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-parchment-card border border-forest/10 shadow-subtle text-body-sm">
                <span className="text-caption font-semibold text-charcoal-muted block">CHAPERONE RATIO</span>
                <span className="font-bold text-forest-dark text-body-sm block mt-0.5">{program.chaperoneRatio}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-parchment-card border border-forest/10 shadow-subtle text-body-sm">
                <span className="text-caption font-semibold text-charcoal-muted block">AIR EVACUATION</span>
                <span className="font-bold text-emerald-700 text-body-sm block mt-0.5">AMREF Protocol</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-forest-dark">
              Academic Thesis & Field Context
            </h2>
            <div className="text-body text-charcoal-muted leading-relaxed space-y-3 font-normal">
              <p>{program.overview}</p>
            </div>
          </div>

          <div className="space-y-4 bg-parchment-card p-6 sm:p-8 rounded-2xl border border-forest/15 shadow-xs">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-ochre" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark">
                Accredited Syllabus Learning Outcomes
              </h2>
            </div>
            <p className="text-body-sm text-charcoal-muted">
              Designed to meet rigorous US University Curriculum Committee and European Credit Transfer (ECTS) requirements.
            </p>
            <div className="space-y-2.5 pt-1">
              {program.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 text-body-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-1" />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-eyebrow">
                Interactive Schedule
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark">
                Day-by-Day Field Syllabus
              </h2>
              <p className="text-body-sm text-charcoal-muted">
                Step through each day below to inspect field transects, lab slots, guest seminars, and required equipment slates.
              </p>
            </div>

            <SyllabusTimeline itinerary={program.itinerary} programTitle={program.title} />
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-forest-dark text-parchment border border-forest-surface space-y-4 shadow-md">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-serif text-xl font-bold text-parchment">
                Capstone Milestone: Student Research Symposium
              </h3>
            </div>
            <p className="text-body text-parchment/80 leading-relaxed font-light">
              Unlike passive observational tours, each student pair completes empirical field sampling and presents research posters at the station seminar hall before visiting researchers and conservation specialists.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-caption text-gold font-mono">
              <span>● EMPIRICAL FIELD OBSERVATION PROTOCOLS</span>
              <span>● CERTIFICATE OF FIELD COMPLETION</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="rounded-2xl bg-parchment-card border border-forest/15 shadow-md p-6 sm:p-7 space-y-6 text-charcoal">
            <div className="border-b border-forest/10 pb-4">
              <span className="text-eyebrow block">
                FACULTY ACTION DOSSIER
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-dark mt-0.5">
                Institutional Deployment
              </h3>
              <p className="text-body-sm text-charcoal-muted mt-1">
                Estimated Tuition: <strong className="text-forest-dark text-base font-serif">${program.priceEstimateUSD.toLocaleString()}</strong> / student
              </p>
            </div>

            <div className="space-y-3 text-body-sm">
              <div className="flex justify-between py-1 border-b border-forest/10">
                <span className="text-charcoal-muted">Duration:</span>
                <span className="font-semibold text-forest-dark">{program.duration}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-forest/10">
                <span className="text-charcoal-muted">Academic Credit:</span>
                <span className="font-semibold text-forest-dark">{program.credits}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-forest/10">
                <span className="text-charcoal-muted">Chaperone Ratio:</span>
                <span className="font-semibold text-forest-dark">1:6 (Comped)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-forest/10">
                <span className="text-charcoal-muted">Evac Airstrip:</span>
                <span className="font-semibold text-forest-dark">{program.stationDetails.evacStrip}</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted">
                Institutional Inclusions:
              </h4>
              <div className="space-y-2 text-body-sm text-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>Target research station lab & bench access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>Uganda Wildlife Authority scientific permit facilitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>4x4 safari Land Cruiser fleet + satellite SOS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>AMREF Flying Doctors aero-evacuation protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>LifeStraw community UV water filtration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>WFR-certified lead expedition chaperones</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/educators#builder"
                className="btn-press min-h-[44px] w-full py-3.5 px-4 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs flex items-center justify-center gap-2 text-center border border-gold-dark/20"
              >
                <span>Build Cohort Proposal for this Course</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/256700892410?text=Hello%20Collins,%20I%20am%20interested%20in%20dates%20for%20the%20${encodeURIComponent(program.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="btn-press min-h-[44px] w-full py-2.5 px-4 rounded-xl border border-forest/20 hover:bg-forest/5 text-forest font-semibold text-body-sm flex items-center justify-center gap-2 text-center"
              >
                <span>Inquire with Collins on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 border-t border-forest/10 flex items-center gap-2 text-body-sm text-charcoal-muted">
              <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
              <span>Full RAMS risk dossier & vendor profiles provided upon request.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
