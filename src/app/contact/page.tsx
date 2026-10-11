"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "Prof.",
    fullName: "",
    institution: "",
    department: "",
    email: "",
    cohortSize: 12,
    targetTerm: "Summer 2027",
    disciplineInterest: "Primate Behavioral Ecology (Kibale)",
    requestedDocs: {
      syllabus: true,
      rams: true,
      uncst: true,
      vendor: false,
    },
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = `Hello Collins, I am ${formData.title} ${formData.fullName || "Faculty"} from ${formData.institution || "our university"}. We are planning a ${formData.disciplineInterest} cohort of ${formData.cohortSize} students for ${formData.targetTerm}.`;
    window.open(`https://wa.me/256700892410?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="container-shell py-12 sm:py-16 space-y-14">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest-dark text-caption font-semibold">
          <Mail className="w-4 h-4 text-ochre" />
          <span className="text-eyebrow">Institutional Inquiry & Faculty Consultation</span>
        </div>
        <h1 className="text-h1 text-forest-dark">
          Initiate a University Field School Partnership
        </h1>
        <p className="text-body-lg">
          Whether you need a sample 3-credit syllabus for your department curriculum committee, full RAMS risk assessments for global education deans, or field station availability for 2026/27.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 bg-parchment-card p-6 sm:p-10 rounded-2xl border border-forest/15 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-forest-dark">
                  Consultation Request Received
                </h3>
                <p className="text-body-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.title} {formData.fullName}. Founder Collins Ssegawa will review your departmental requirements and reply within 12 hours with your requested dossiers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-forest/5 border border-forest/10 max-w-md mx-auto text-body-sm text-forest-dark space-y-2">
                <p className="font-bold">Need faster scheduling?</p>
                <button
                  onClick={handleLaunchWhatsApp}
                  className="btn-press min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-forest text-parchment font-semibold hover:bg-forest-dark flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Connect with Collins directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-forest/10 pb-4">
                <h3 className="font-serif text-xl font-bold text-forest-dark">
                  Faculty Consultation & Dossier Request
                </h3>
                <p className="text-body-sm text-charcoal-muted mt-1">
                  Fill out your preliminary department details below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Title:
                  </label>
                  <select
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full h-11 px-3 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  >
                    <option>Prof.</option>
                    <option>Dr.</option>
                    <option>Dean</option>
                    <option>Coordinator</option>
                    <option>Director</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Academic Institution:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. University of Toronto"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Department:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ecology & Evolutionary Biology"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                  Institutional Email:
                </label>
                <input
                  type="email"
                  required
                  placeholder="evance@utoronto.ca"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3.5 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Field Discipline:
                  </label>
                  <select
                    value={formData.disciplineInterest}
                    onChange={(e) => setFormData({ ...formData, disciplineInterest: e.target.value })}
                    className="w-full h-11 px-3 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  >
                    <option>Primate Behavioral Ecology (Kibale)</option>
                    <option>Transitional Justice & Acholiland (Gulu)</option>
                    <option>Agro-Ecology & Coffee Co-ops (Mt. Elgon)</option>
                    <option>Custom Multi-Disciplinary Cohort</option>
                  </select>
                </div>
                <div>
                  <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                    Target Academic Term:
                  </label>
                  <select
                    value={formData.targetTerm}
                    onChange={(e) => setFormData({ ...formData, targetTerm: e.target.value })}
                    className="w-full h-11 px-3 py-2 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                  >
                    <option>Fall 2026</option>
                    <option>Spring 2027</option>
                    <option>Summer 2027</option>
                    <option>Fall 2027</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-body-sm font-bold uppercase tracking-wider text-charcoal-muted block">
                  Documentation to Include in Packet:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-body-sm">
                  <label className="flex items-center gap-2 p-3 min-h-[44px] rounded-xl bg-parchment border border-forest/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestedDocs.syllabus}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requestedDocs: { ...formData.requestedDocs, syllabus: e.target.checked },
                        })
                      }
                      className="accent-forest w-4 h-4"
                    />
                    <span>Sample 3-Credit Syllabus Draft</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 min-h-[44px] rounded-xl bg-parchment border border-forest/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestedDocs.rams}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requestedDocs: { ...formData.requestedDocs, rams: e.target.checked },
                        })
                      }
                      className="accent-forest w-4 h-4"
                    />
                    <span>RAMS Risk & AMREF Protocols</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 min-h-[44px] rounded-xl bg-parchment border border-forest/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestedDocs.uncst}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requestedDocs: { ...formData.requestedDocs, uncst: e.target.checked },
                        })
                      }
                      className="accent-forest w-4 h-4"
                    />
                    <span>UNCST Permitting Guidelines</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 min-h-[44px] rounded-xl bg-parchment border border-forest/10 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestedDocs.vendor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requestedDocs: { ...formData.requestedDocs, vendor: e.target.checked },
                        })
                      }
                      className="accent-forest w-4 h-4"
                    />
                    <span>Vendor Registration & Banking Profile</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-body-sm font-bold text-charcoal-muted block mb-1">
                  Department Notes or Custom Requests:
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline any specific prerequisites, dates, or laboratory requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-forest/15 bg-white text-body-sm focus:ring-2 focus:ring-forest focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-press min-h-[44px] w-full py-3.5 px-6 rounded-xl bg-gold hover:bg-gold-light text-forest-dark font-bold text-body-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-gold-dark/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Institutional Consultation Request</span>
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-forest-dark text-parchment p-6 sm:p-8 border border-forest-surface shadow-md space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-gold shrink-0">
                <Image
                  src="/images/collins-founder.jpg"
                  alt="Collins Ssegawa"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-parchment">Collins Ssegawa</h3>
                <p className="text-body-sm text-gold font-medium">Founder & Lead Expedition Coordinator</p>
                <p className="text-caption text-parchment/70 font-mono flex items-center gap-1 mt-0.5 font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>Ex-UNDP Kampala • Uganda GMT+3</span>
                </p>
              </div>
            </div>

            <p className="text-body-sm text-parchment/80 leading-relaxed font-light">
              &ldquo;I personally liaise with university department chairs and risk committees to ensure all protocol questions, Makerere lab bench allocations, and emergency pathways are clear before any formal commitment.&rdquo;
            </p>

            <div className="pt-2">
              <button
                onClick={handleLaunchWhatsApp}
                className="btn-press min-h-[44px] w-full py-3 px-4 rounded-xl bg-forest-light hover:bg-forest text-parchment font-semibold text-body-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-forest-light/40"
              >
                <span>Direct WhatsApp Line to Collins</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-parchment-card p-6 sm:p-8 border border-forest/15 shadow-xs space-y-4 text-body-sm">
            <h4 className="font-serif font-bold text-base text-forest-dark">
              Planned Field Operations & Liaison Directory
            </h4>

            <div className="space-y-3.5 text-charcoal">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-forest-dark">Entebbe Gateway Office:</strong>
                  <span className="text-charcoal-muted">Plot 14, Lugard Avenue, Entebbe Gateway (Planned Field Operations Liaison, Uganda)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-forest-dark">Kampala Academic Liaison:</strong>
                  <span className="text-charcoal-muted">Makerere University Main Gate Corridor (Planned Liaison Desk), Nakasero Hill, Kampala</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-forest shrink-0" />
                <a href="tel:+256700892410" className="hover:text-ochre transition-colors">
                  +256 (0) 700 892 410 (Direct Field / WhatsApp Liaison)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-forest shrink-0" />
                <a href="mailto:collins@pearlroots.com" className="hover:text-ochre transition-colors">
                  collins@pearlroots.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
