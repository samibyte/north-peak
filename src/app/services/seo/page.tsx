import {
  FileText,
  LineChart,
  Link2,
  MapPin,
  Search,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ServiceFeatures } from "@/components/blocks/service-features";
import { ServiceHero } from "@/components/blocks/service-hero";

export const metadata: Metadata = {
  title:
    "Search Engine Optimization (SEO) Services | Northpeak Growth Partners",
  description:
    "Data-driven technical SEO, topical authority building, and high-intent keyword strategies engineered to drive compounding qualified pipeline.",
};

const stats = [
  { value: "340%", label: "Average 12-Month Traffic Lift" },
  { value: "Top 3", label: "Rankings for Commercial Search Terms" },
  { value: "100%", label: "White-Hat Compliance & Safe Growth" },
  { value: "$18.4M", label: "Pipeline Attributed to Organic Search" },
];

const features = [
  {
    title: "Technical SEO & Site Architecture",
    description:
      "Deep crawl audits, schema markup implementation, Core Web Vitals remediation, and JavaScript rendering optimization to ensure search engine indexation.",
    icon: Wrench,
  },
  {
    title: "High-Intent Keyword Clustering",
    description:
      "We identify commercial and transactional queries your actual buyers search when evaluating solutions, ignoring vanity keywords that don't convert.",
    icon: Search,
  },
  {
    title: "Topical Authority & Content Velocity",
    description:
      "Comprehensive topic clusters, pillar guides, and editorial briefs that establish your brand as the undeniable authority in your market.",
    icon: FileText,
  },
  {
    title: "Digital PR & Editorial Backlinks",
    description:
      "Ethical, high-impact outreach securing mentions and authoritative citations from real publications in your industry.",
    icon: Link2,
  },
  {
    title: "Local & Multi-Location SEO",
    description:
      "Google Business Profile optimization, localized landing pages, review automation, and citation consistency for geographic footprint scaling.",
    icon: MapPin,
  },
  {
    title: "Organic Attribution & Revenue Tracking",
    description:
      "Full integration with GoHighLevel and GA4 to map organic search visitors through form submission, booking, and closed revenue.",
    icon: LineChart,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Comprehensive Audit",
    desc: "Exhaustive crawl of technical architecture, backlink profile, and content gaps against top competitors.",
  },
  {
    step: "02",
    title: "Blueprint & Prioritization",
    desc: "Developing a 90-day roadmap targeting quick keyword wins and long-term defensible authority.",
  },
  {
    step: "03",
    title: "Sprint Execution",
    desc: "Bi-weekly implementation of technical fixes, new content publishing, and active link acquisition.",
  },
  {
    step: "04",
    title: "Revenue Attribution",
    desc: "Continuous monitoring of keyword rankings, organic pipeline generation, and GoHighLevel lead closes.",
  },
];

export default function SeoPage() {
  return (
    <Background>
      <div>
        <ServiceHero
          badge="SEO & Organic Authority"
          title="Turn organic search into your most profitable acquisition channel"
          description="We build sustainable, high-intent search visibility that outranks competitors and converts high-value searchers into closed deals."
          icon={Search}
          stats={stats}
          ctaText="Request Free SEO Audit"
        />

        <ServiceFeatures
          sectionTitle="End-to-End Search Engine Capabilities"
          sectionSubtitle="From technical codebases to editorial authority, our SEO squad covers every layer of search dominance."
          features={features}
          processTitle="Our 4-Phase SEO Execution Model"
          processSteps={processSteps}
        />
      </div>
    </Background>
  );
}
