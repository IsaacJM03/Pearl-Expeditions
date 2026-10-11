import { Metadata } from "next";
import Link from "next/link";
import { 
  HeartHandshake, 
  PieChart, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impact, UN SDGs & Spend Equity | Pearl Roots & Expeditions",
  description: "Verifiable community dividends, UN Sustainable Development Goals metrics, and our transparent expedition spend equity ledger.",
};

const sdgMetrics = [
  {
    sdg: "SDG 4",
    title: "Quality Education",
    stat: "140+ Hours",
    metricLabel: "Target Co-Taught Faculty Hours",
    desc: "Curricula are structured to fund reciprocal seminar seats and laboratory stipends for resident Makerere and Gulu University postgraduate scholars.",
  },
  {
    sdg: "SDG 13",
    title: "Climate Action",
    stat: "4,200+ Trees",
    metricLabel: "Target Indigenous Saplings",
    desc: "Cohorts partner with local coffee farming groups on Mt. Elgon slopes with a collective planting goal of 4,200+ native saplings to counter climate-driven slope degradation.",
  },
  {
    sdg: "SDG 15",
    title: "Life on Land",
    stat: "1,800+ Ethograms",
    metricLabel: "Field Observation Target",
    desc: "Rigorous behavioral observation records and wetland transect logs designed for submission to national wildlife and conservation databases.",
  },
  {
    sdg: "SDG 17",
    title: "Partnerships for Goals",
    stat: "100% Direct",
    metricLabel: "Local Economy Spend Target",
    desc: "Direct contracting model designed to ensure expedition expenditure circulates within Uganda's domestic scientific and host community economy.",
  }
];

const spendLedger = [
  {
    percentage: 34,
    category: "Direct Field Community Wages & Elders",
    details: "Fair-wage stipends for Acholi customary elders, Sipi coffee cooperative farming guides, community trackers, and homestay hosts."
  },
  {
    percentage: 28,
    category: "Academic Research Stations & National Permitting",
    details: "Target field station lab bench fees, academic seminar facilities, UNCST research ethics clearances, and UWA scientific park fees."
  },
  {
    percentage: 22,
    category: "Medical Safety, AMREF Airlift & Fleet Logistics",
    details: "AMREF aero-medical emergency evacuation protocols, 4x4 expedition vehicles, satellite dispatch, and LifeStraw systems."
  },
  {
    percentage: 16,
    category: "Pearl Roots Operations & Field Leadership",
    details: "Staff background checks, child safeguarding audits, expedition planning, and pre-departure university risk committee briefings."
  }
];

export default function ImpactPage() {
  return (
    <div className="container-shell py-12 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest-dark text-caption font-semibold">
          <HeartHandshake className="w-4 h-4 text-ochre" />
          <span className="text-eyebrow">Verifiable Reciprocity & Impact</span>
        </div>
        <h1 className="text-h1 text-forest-dark">
          Moving Beyond Extractive Tourism
        </h1>
        <p className="text-body-lg">
          Standard tourism extracts wealth from Africa while leaving token tips. Under Collins Ssegawa&apos;s UNDP framework, educational expeditions operate as equitable scientific exchanges that generate enduring domestic value.
        </p>
      </div>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            UN Global Goals Alignment
          </span>
          <h2 className="text-h2 text-forest-dark">
            Sustainable Development Goals in Action
          </h2>
          <p className="text-body">
            Every university field course generates verifiable progress toward international climate and educational targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgMetrics.map((item, idx) => (
            <div
              key={idx}
              className="hover-lift p-6 rounded-2xl border border-forest/15 shadow-xs space-y-4 bg-parchment-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-caption font-bold uppercase tracking-wider text-ochre">
                  {item.sdg}
                </span>
                <Sparkles className="w-4 h-4 text-ochre" />
              </div>
              <div>
                <span className="font-serif text-3xl font-bold block text-forest-dark">
                  {item.stat}
                </span>
                <span className="text-body-sm font-semibold text-charcoal-muted mt-0.5 block">
                  {item.metricLabel}
                </span>
              </div>
              <p className="text-body-sm leading-relaxed pt-2 border-t border-forest/10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-caption text-charcoal-light font-light text-center max-w-2xl mx-auto pt-2">
          Notice: Quantitative metric indicators, sapling targets, and ethogram figures represent planned educational benchmarks and illustrative targets pending final cohort confirmation.
        </p>
      </section>

      <section className="bg-forest-dark text-parchment p-8 sm:p-12 rounded-2xl border border-forest-surface shadow-md space-y-10">
        <div className="max-w-2xl space-y-3">
          <span className="text-caption font-bold text-gold flex items-center gap-1.5 font-mono">
            <PieChart className="w-4 h-4 text-gold" />
            <span>ILLUSTRATIVE EXPENDITURE MODEL</span>
          </span>
          <h2 className="text-h2 text-parchment">
            Target Expedition Spend Allocation
          </h2>
          <p className="text-body-lg text-parchment/85 font-light leading-relaxed">
            University institutional procurement offices require clear financial governance. Below is our illustrative expenditure model for institutional field schools:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {spendLedger.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-forest/60 border border-forest-light/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-parchment">
                  {item.percentage}%
                </span>
                <span className="text-caption font-mono text-parchment/70 uppercase">
                  Target Allocation
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-forest-dark overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-ochre to-ochre-light rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <h3 className="font-serif font-bold text-base text-parchment pt-1">
                {item.category}
              </h3>
              <p className="text-body-sm text-parchment/75 leading-relaxed font-light">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <p className="text-caption text-parchment/50 font-light text-center max-w-2xl mx-auto pt-2 border-t border-forest-light/20">
          Note: Metric indicators, spend allocations, and field milestones reflect operational targets and illustrative modeling pending formal cohort confirmation.
        </p>
      </section>

      <section className="text-center max-w-2xl mx-auto space-y-6 pt-4">
        <h2 className="text-h2 text-forest-dark">
          Incorporate Ethical Reciprocity into Your Syllabus
        </h2>
        <p className="text-body-lg max-w-xl mx-auto">
          Our team can provide formal impact metrics and UN SDG alignment documentation for your university grant applications or study abroad committee review.
        </p>
        <div>
          <Link
            href="/contact"
            className="btn-press min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest hover:bg-forest-dark text-parchment font-bold text-body-sm shadow-xs"
          >
            <span>Request Reciprocity Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
