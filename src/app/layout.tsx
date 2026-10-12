import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TelemetryTicker from "@/components/TelemetryTicker";
import WhatsAppFounderBridge from "@/components/WhatsAppFounderBridge";
import LionLoader from "@/components/LionLoader";

export const metadata: Metadata = {
  title: "Pearl Roots & Expeditions | Educational Tourism & Ethical Volunteering in Uganda",
  description: "Accredited university student electives, ethical volunteer placements, and purposeful wildlife safaris in Uganda founded by Collins and Patricia Ssegawa. 24/7 AMREF aero-medical safety.",
  keywords: [
    "Uganda student placements",
    "medical elective Uganda",
    "ethical volunteering Uganda",
    "Queen Elizabeth safari add-on",
    "Collins Ssegawa",
    "Patricia Ssegawa",
    "Watoto Mpigi",
    "educational tourism East Africa",
    "Bwindi gorilla safari"
  ],
  openGraph: {
    title: "Pearl Roots & Expeditions | Educational Tourism & Ethical Volunteering in Uganda",
    description: "Gain global experience. Empower communities. Explore the Pearl of Africa. Clinical electives, community placements, and earned safaris under local Ugandan leadership.",
    url: "https://pearlroots.com",
    siteName: "Pearl Roots & Expeditions",
    locale: "en_US",
    type: "website",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Pearl Roots & Expeditions",
  "alternateName": "Pearl Expeditions Uganda",
  "url": "https://pearlroots.com",
  "logo": "https://pearlroots.com/images/collins-founder.jpg",
  "founders": [
    {
      "@type": "Person",
      "name": "Collins Ssegawa"
    },
    {
      "@type": "Person",
      "name": "Patricia Ssegawa"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 14, Lugard Avenue, Entebbe Gateway",
    "addressLocality": "Entebbe",
    "addressCountry": "Uganda"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+256700892410",
    "contactType": "customer service",
    "availableLanguage": ["English", "Luganda"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-parchment text-charcoal selection:bg-gold/30 selection:text-forest-dark">
        <LionLoader />
        <TelemetryTicker />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppFounderBridge />
      </body>
    </html>
  );
}
