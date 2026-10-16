import { Eye, Gauge, PieChart, Sliders, Split, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ServiceFeatures } from "@/components/blocks/service-features";
import { ServiceHero } from "@/components/blocks/service-hero";

export const metadata: Metadata = {
  title: "Growth Optimization & CRO | Northpeak Growth Partners",
  description:
    "Systematic full-funnel CRO, A/B testing, and data analysis engineered to extract maximum revenue from your existing traffic.",
};

const stats = [
  { value: "+46%", label: "Average Top-Of-Funnel Conversion Lift" },
  { value: "2.4x", label: "Increase in Customer Lifetime Value (LTV)" },
  { value: "30+", label: "Validated Hypotheses Tested Per Quarter" },
  { value: "100%", label: "Statistical Significance Standards" },
];

const features = [
  {
    title: "Full-Funnel Friction Diagnostics",
    description:
      "Deep analysis of heatmap recordings, drop-off analytics, and checkout step abandonment to identify exactly where revenue is leaking.",
    icon: Eye,
  },
  {
    title: "Rigorous A/B & Multivariate Testing",
    description:
      "Controlled experiments testing hero propositions, pricing packaging, form structures, and CTA copy backed by statistical confidence.",
    icon: Split,
  },
  {
    title: "Offer & Value Proposition Engineering",
    description:
      "Restructuring risk-reversal guarantees, bonuses, and positioning to make your core offering an irresistible no-brainer to target buyers.",
    icon: Sliders,
  },
  {
    title: "LTV:CAC & Unit Economics Modeling",
    description:
      "Unlocking backend ascension funnels, upsells, cross-sells, and retention loops that allow you to afford higher acquisition bids than competitors.",
    icon: TrendingUp,
  },
  {
    title: "Executive Looker Studio Dashboards",
    description:
      "Custom unified business intelligence dashboards aggregating Google Ads, Meta, SEO, and GoHighLevel pipeline figures into a single view.",
    icon: PieChart,
  },
  {
    title: "Agile Growth Sprint Cycles",
    description:
      "Bi-weekly sprint retrospectives and planning sessions where new hypotheses are prioritized by potential impact and engineering effort.",
    icon: Gauge,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Quantitative & Qualitative Audit",
    desc: "Analyzing user session recordings, scroll depth, form field drop-offs, and analytics funnels.",
  },
  {
    step: "02",
    title: "Hypothesis Backlog",
    desc: "Formulating testable hypotheses scored by ICE (Impact, Confidence, Ease) framework.",
  },
  {
    step: "03",
    title: "Experiment Deployment",
    desc: "Coding test variants cleanly in Next.js or experiment software with zero site speed degradation.",
  },
  {
    step: "04",
    title: "Analysis & Permanent Rollout",
    desc: "Promoting winning variations to production code and documenting learnings for the next sprint.",
  },
];

export default function GrowthOptimizationPage() {
  return (
    <Background>
      <div>
        <ServiceHero
          badge="Conversion Rate & Funnel Optimization"
          title="Extract maximum enterprise value from every visitor you attract"
          description="Traffic without conversion is vanity. We systematically diagnose funnel bottlenecks, deploy scientific experiments, and scale your conversion rates."
          icon={Gauge}
          stats={stats}
          ctaText="Audit My Conversion Funnel"
        />

        <ServiceFeatures
          sectionTitle="Full-Funnel Optimization Capabilities"
          sectionSubtitle="Stop guessing what makes your buyers convert. We deploy data-backed CRO frameworks tested across hundreds of millions in transaction volume."
          features={features}
          processTitle="Our Scientific Experimentation Cycle"
          processSteps={processSteps}
        />
      </div>
    </Background>
  );
}
