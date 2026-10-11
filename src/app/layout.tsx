import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TelemetryTicker from "@/components/TelemetryTicker";
import WhatsAppFounderBridge from "@/components/WhatsAppFounderBridge";
import LionLoader from "@/components/LionLoader";

export const metadata: Metadata = {
  title: "Pearl Roots & Expeditions | Uganda Living Laboratory",
  description: "Academic field schools, university study abroad curricula, and institutional edutourism logistics in Uganda founded by Collins Ssegawa (ex-UNDP).",
  keywords: [
    "Uganda field school",
    "edutourism Uganda",
    "Makerere Biological Field Station",
    "Kibale primate behavioral ecology",
    "Gulu transitional justice study abroad",
    "IB CAS expedition Uganda",
    "Collins Ssegawa",
    "educational tourism East Africa"
  ],
  openGraph: {
    title: "Pearl Roots & Expeditions | Uganda Living Laboratory",
    description: "Curriculum-first university field schools in Uganda backed by UNDP governance, Makerere research station labs, and AMREF aero-medical safety.",
    url: "https://pearlroots.com",
    siteName: "Pearl Roots & Expeditions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
