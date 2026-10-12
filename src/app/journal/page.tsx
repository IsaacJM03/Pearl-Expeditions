import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Calendar, User, Compass } from "lucide-react";

export const metadata = {
  title: "Field Journal & Impact Dispatches | Pearl Roots & Expeditions",
  description: "Dispatches on ethical volunteering, public health leadership in Uganda, wildlife conservation, and student clinical reflections."
};

const articles = [
  {
    slug: "beyond-voluntourism-ugandan-perspective",
    title: "Beyond 'Voluntourism': A Ugandan Perspective on Ethical International Service",
    excerpt: "Why the traditional model of foreign volunteers building orphanages or painting clinics fails local communities, and how reciprocal, locally led apprenticeship changes lives.",
    author: "Collins Ssegawa",
    date: "October 2026",
    category: "Ethical Fieldwork",
    readTime: "6 min read",
    image: "/images/hero-rainforest.jpg"
  },
  {
    slug: "uganda-hiv-public-health-lessons",
    title: "What Global Health Electives Learn from Uganda's Historic HIV/AIDS Model",
    excerpt: "How Uganda's decentralized Village Health Teams (VHTs) and stigma-free community health networks pioneered global epidemic response, and why clinical students must study it.",
    author: "Dr. Isaac Kato & Collins Ssegawa",
    date: "September 2026",
    category: "Global Health",
    readTime: "8 min read",
    image: "/images/peace-studies.jpg"
  },
  {
    slug: "earned-reward-conservation-safaris",
    title: "The Earned Reward: How Post-Placement Safaris Fund Bwindi & Queen Elizabeth Conservation",
    excerpt: "Connecting student placements with wildlife preservation: 20% of Uganda Wildlife Authority gorilla permits flow directly into village revenue sharing around national parks.",
    author: "Patricia Ssegawa",
    date: "August 2026",
    category: "Wildlife Conservation",
    readTime: "5 min read",
    image: "/images/chimp-ecology.jpg"
  }
];

export default function JournalPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-forest-dark text-parchment pt-16 pb-20">
        <div className="container-shell space-y-6 max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest border border-forest-surface text-gold text-caption font-bold mx-auto">
            <BookOpen className="w-4 h-4" />
            <span>Field Dispatches & Ethical Research</span>
          </div>

          <h1 className="text-display text-parchment">Field Journal & Impact Stories</h1>

          <p className="text-body-lg text-parchment/80 font-light leading-relaxed max-w-2xl mx-auto">
            Reflections from Ugandan doctors, community organizers, student alumni, and wildlife conservationists on ethical service and responsible exploration.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container-shell -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white rounded-2xl border border-forest/15 shadow-card overflow-hidden flex flex-col justify-between hover:shadow-lift transition-all"
            >
              <div className="relative aspect-16/10">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-forest-dark/85 backdrop-blur-xs text-gold text-caption font-semibold px-2.5 py-1 rounded-md">
                  {art.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-caption text-charcoal-muted">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-forest-dark leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-forest/10 flex items-center justify-between">
                  <span className="text-caption text-forest font-medium">By {art.author}</span>
                  <Link
                    href={`/contact?interest=student_placement`}
                    className="inline-flex items-center gap-1 text-body-sm font-bold text-forest hover:text-ochre transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
