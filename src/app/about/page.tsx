import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Compass, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  BookOpen, 
  Trees, 
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & UN Governance Pedigree | Pearl Roots & Expeditions",
  description: "Founded by Collins Ssegawa (ex-UNDP), Pearl Roots & Expeditions transforms Uganda into an accredited, open-air living laboratory through ethical reciprocity and academic rigor.",
};

export default function AboutPage() {
  return (
    <div className="container-shell py-12 sm:py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest-dark text-caption font-semibold">
          <Compass className="w-4 h-4 text-ochre" />
          <span className="text-eyebrow">Roots, Governance & Academic Alliances</span>
        </div>
        <h1 className="text-h1 text-forest-dark">
          Decolonizing Academic Travel Through Ethical Reciprocity
        </h1>
        <p className="text-body-lg">
          Transforming the visitor dynamic from extractive consumption to intellectual collaboration. Founded by former United Nations Development Programme officer Collins Ssegawa.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hover-lift p-8 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
            <Trees className="w-5 h-5" />
          </div>
          <span className="text-caption font-mono font-bold text-forest-dark tracking-wider block">
            01. &ldquo;PEARL&rdquo;
          </span>
          <h3 className="text-h3 text-forest-dark">
            The Living Laboratory
          </h3>
          <p className="text-body">
            Uganda sits at the biogeographic confluence of Central African rainforests and East African savannas. The Albertine Rift harbors unmatched evolutionary biodiversity, prehistoric bird lineages, and the highest primate densities on Earth.
          </p>
        </div>

        <div className="hover-lift p-8 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-ochre/10 flex items-center justify-center text-ochre">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <span className="text-caption font-mono font-bold text-ochre tracking-wider block">
            02. &ldquo;ROOTS&rdquo;
          </span>
          <h3 className="text-h3 text-forest-dark">
            Ancestral Reciprocity
          </h3>
          <p className="text-body">
            We reject the spectacle of &ldquo;poverty tourism.&rdquo; Our students enter communities as humble scholars. Elders, cooperative farmers, and local researchers receive equitable professional remuneration, advancing UN Sustainable Development Goals.
          </p>
        </div>

        <div className="hover-lift p-8 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-forest-dark">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-caption font-mono font-bold text-forest-dark tracking-wider block">
            03. &ldquo;EXPEDITIONS&rdquo;
          </span>
          <h3 className="text-h3 text-forest-dark">
            Methodological Rigor
          </h3>
          <p className="text-body">
            Field journeys of structured hypothesis testing, wet lab assays, and continuous data collection. Each participant fulfills accredited university credit hours and delivers empirical datasets to national conservation archives.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-forest-dark text-parchment p-8 sm:p-12 border border-forest-surface shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-gold shadow-md">
              <Image
                src="/images/collins-founder.jpg"
                alt="Collins Ssegawa, Founder and Director"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-parchment">Collins Ssegawa</h3>
              <p className="text-body-sm text-gold font-medium mt-0.5">Founder & Expedition Director</p>
              <p className="text-caption text-parchment/70 font-mono mt-1">
                Former United Nations Development Programme (UNDP) Officer
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-body-sm font-bold text-gold flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>Institutional Pedigree</span>
            </span>

            <h2 className="text-h2 text-parchment leading-tight">
              From UNDP Governance to the Living Laboratory
            </h2>

            <div className="space-y-3.5 text-body-lg text-parchment/85 leading-relaxed font-light">
              <p>
                During my tenure with the United Nations Development Programme (UNDP) in Kampala, I managed complex multi-stakeholder projects spanning governance, institutional capacity building, and environmental sustainability.
              </p>
              <p>
                When international university delegations arrived in Uganda, I repeatedly observed an unfortunate divide: academic departments were forced to choose between generic leisure safari operators who lacked intellectual understanding, or ad-hoc local contacts who could not satisfy institutional risk management criteria.
              </p>
              <p>
                I founded <strong>Pearl Roots & Expeditions</strong> to resolve this impasse permanently. We combine the administrative rigor, ethical compliance, and safeguarding demanded by global higher education with deep, authentic access to Uganda&apos;s premier research stations.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-body-sm font-semibold text-gold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Police & Safeguarding Vetted Staff</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>AMREF Flying Doctors Air Rescue Protocol</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-eyebrow block">
            Institutional Network
          </span>
          <h2 className="text-h2 text-forest-dark">
            Proposed Academic Station Network
          </h2>
          <p className="text-body">
            Collaborative frameworks and proposed station access supporting accredited laboratory bench research, guest lectures, and ethical permitting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Makerere University Biological Field Station (MUBFS)
            </h3>
            <p className="text-body-sm">
              Located in Kibale National Park. Full laboratory access, stereomicroscopes, meteorological canopy observation towers, and long-term chimpanzee habituation grids.
            </p>
            <span className="text-caption font-semibold text-forest block">
              Planned Station Partner: Primatology & Botany
            </span>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Gulu University Institute of Peace & Strategic Studies (IPSS)
            </h3>
            <p className="text-body-sm">
              Northern Uganda transitional justice academic partner. Joint seminars on ICC jurisprudence, customary reconciliation, and psychosocial rehabilitation.
            </p>
            <span className="text-caption font-semibold text-forest block">
              Planned Academic Partner: Peace, Law & Human Rights
            </span>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Uganda National Council for Science and Technology (UNCST)
            </h3>
            <p className="text-body-sm">
              Official national regulatory council. Facilitating student research protocol registration, Research Ethics Committee (REC) reviews, and scientific visas.
            </p>
            <span className="text-caption font-semibold text-forest block">
              Regulatory Permitting Facilitation: National Permits
            </span>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Uganda Wildlife Authority (UWA) Research Directorate
            </h3>
            <p className="text-body-sm">
              Statutory body managing Uganda&apos;s National Parks. Scientific research permits distinct from commercial tourist quotas, enabling daily research transects.
            </p>
            <span className="text-caption font-semibold text-forest block">
              Regulatory Permitting Liaison: Protected Area Research
            </span>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Ker Kwaro Acholi (Acholi Council of Elders)
            </h3>
            <p className="text-body-sm">
              Customary institution upholding Acholi traditional law. In-person dialogues with cultural elders on indigenous restorative justice (*Mato Oput*).
            </p>
            <span className="text-caption font-semibold text-forest block">
              Community Dialogue Partner: Customary Reconciliation
            </span>
          </div>

          <div className="hover-lift p-6 rounded-2xl bg-parchment-card border border-forest/10 shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-base text-forest-dark">
              Mbarara University of Science & Technology (MUST)
            </h3>
            <p className="text-body-sm">
              Leading medical and technological faculty in Western Uganda. Rural epidemiology, tropical public health, and community water sanitation fieldwork.
            </p>
            <span className="text-caption font-semibold text-forest block">
              Planned Academic Partner: Public Health & Epidemiology
            </span>
          </div>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4">
        <h2 className="text-h2 text-forest-dark">
          Partner with Collins Ssegawa for 2026/27
        </h2>
        <p className="text-body-lg max-w-xl mx-auto">
          Connect directly with Collins to discuss departmental learning objectives, station availability, and institutional risk clearance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/educators#builder"
            className="btn-press min-h-[44px] px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs border border-gold-dark/20"
          >
            Launch Course Proposal Wizard
          </Link>
          <a
            href="https://wa.me/256700892410?text=Hello%20Collins,%20I%20would%20like%20to%20discuss%20our%20university%20field%20school%20partnership."
            target="_blank"
            rel="noreferrer"
            className="btn-press min-h-[44px] px-6 py-3.5 rounded-xl border border-forest/20 text-forest font-semibold text-body-sm hover:bg-forest/5 flex items-center gap-2 shadow-xs"
          >
            <span>WhatsApp Collins Ssegawa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
