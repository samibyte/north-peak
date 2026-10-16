import {
  BarChart,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ServiceFeatures } from "@/components/blocks/service-features";
import { ServiceHero } from "@/components/blocks/service-hero";

export const metadata: Metadata = {
  title: "Paid Advertising & Media Buying | Northpeak Growth Partners",
  description:
    "Data-driven PPC, Meta ads, and LinkedIn ABM campaigns designed to acquire customers profitably and predictably at scale.",
};

const stats = [
  { value: "4.8x", label: "Average Client ROAS Across Channels" },
  { value: "-32%", label: "Average Cost-Per-Acquisition Reduction" },
  { value: "$12M+", label: "Annual Ad Spend Under Active Management" },
  { value: "99.2%", label: "Accurate Conversion Attribution" },
];

const features = [
  {
    title: "Google Search & Performance Max",
    description:
      "Precision bidding on high-intent transactional search keywords, competitor terms, and automated Performance Max asset groups.",
    icon: Target,
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Rapid creative testing frameworks, dynamic product ads, and lookalike modeling that turns cold audiences into paying customers.",
    icon: Sparkles,
  },
  {
    title: "B2B LinkedIn ABM Campaigns",
    description:
      "Target verified job titles, company sizes, and industries with thought leadership ads, conversation ads, and lead gen forms.",
    icon: MousePointerClick,
  },
  {
    title: "Server-Side Tracking & Conversions API",
    description:
      "First-party cookie infrastructure, Meta CAPI, and Google Enhanced Conversions to bypass ad blockers and iOS tracking loss.",
    icon: ShieldCheck,
  },
  {
    title: "High-Velocity Creative Testing",
    description:
      "Weekly iterations on video hooks, static image angles, and persuasive copywriting to combat ad fatigue and maintain scale.",
    icon: RefreshCw,
  },
  {
    title: "Full-Funnel Closed-Loop Reporting",
    description:
      "Real-time dashboards connecting your ad clicks directly to GoHighLevel opportunities, closed revenue, and net customer profit.",
    icon: BarChart,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Account & Pixel Audit",
    desc: "Rigorous review of historical ad performance, pixel hygiene, attribution tracking, and budget allocation.",
  },
  {
    step: "02",
    title: "Offer & Creative Strategy",
    desc: "Crafting compelling hooks, angles, and custom landing page experiences to maximize conversion rate.",
  },
  {
    step: "03",
    title: "Launch & Micro-Testing",
    desc: "Deploying multi-variant ad sets with strict bid controls to validate winning creative combinations.",
  },
  {
    step: "04",
    title: "Aggressive Scale",
    desc: "Increasing budget into validated winners while maintaining target customer acquisition cost (CAC).",
  },
];

export default function PaidAdvertisingPage() {
  return (
    <Background>
      <div>
        <ServiceHero
          badge="Paid Acquisition & Media Buying"
          title="Predictable, profitable customer acquisition across every paid channel"
          description="We eliminate wasted ad spend with disciplined bid management, rapid creative experimentation, and airtight conversion tracking."
          icon={MousePointerClick}
          stats={stats}
          ctaText="Audit My Ad Campaigns"
        />

        <ServiceFeatures
          sectionTitle="Full-Spectrum Paid Advertising Services"
          sectionSubtitle="We build multi-channel paid acquisition systems tailored to your unique economics and audience psychology."
          features={features}
          processTitle="Our Data-Backed Media Buying Process"
          processSteps={processSteps}
        />
      </div>
    </Background>
  );
}
