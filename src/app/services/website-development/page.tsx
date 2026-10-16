import {
  Code2,
  FormInput,
  LayoutTemplate,
  Lock,
  Smartphone,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ServiceFeatures } from "@/components/blocks/service-features";
import { ServiceHero } from "@/components/blocks/service-hero";

export const metadata: Metadata = {
  title: "Website Development & CRO | Northpeak Growth Partners",
  description:
    "High-speed, conversion-engineered modern websites built on Next.js and Tailwind, seamlessly integrated with GoHighLevel and marketing stacks.",
};

const stats = [
  { value: "< 0.8s", label: "Average First Contentful Paint Time" },
  { value: "100%", label: "Google PageSpeed Core Web Vitals Score" },
  { value: "+138%", label: "Average Form Conversion Rate Increase" },
  { value: "0", label: "Legacy CMS Bloat or Unused Plugins" },
];

const features = [
  {
    title: "Next.js & Modern Frontend Architecture",
    description:
      "Built with server-side rendering, static generation, and edge delivery for lightning-fast speeds that search engines and users love.",
    icon: Code2,
  },
  {
    title: "Conversion-Focused UX/UI Design",
    description:
      "Every pixel is engineered with clear visual hierarchy, trust signals, and frictionless conversion paths to maximize visitor action.",
    icon: LayoutTemplate,
  },
  {
    title: "GoHighLevel & CRM Webhook Integration",
    description:
      "Native integration with GoHighLevel forms, calendars, chat widgets, and webhook pipelines for real-time lead sync without third-party lag.",
    icon: FormInput,
  },
  {
    title: "Mobile-First Responsive Engineering",
    description:
      "Flawless display and touch interactions across iPhone, Android, tablet, and ultra-wide displays with zero layout shift.",
    icon: Smartphone,
  },
  {
    title: "Core Web Vitals & Speed Optimization",
    description:
      "Asset minification, image compression, font subsetting, and lazy-loading engineered to achieve green scores across all Google metrics.",
    icon: Zap,
  },
  {
    title: "Enterprise Security & Headless CMS",
    description:
      "Bank-grade HTTPS security, DDoS protection via Cloudflare, and simple content editing with headless CMS options (Sanity, Strapi, MDX).",
    icon: Lock,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Conversion Architecture",
    desc: "Mapping sitemaps, user journeys, wireframes, and key conversion funnels based on real customer data.",
  },
  {
    step: "02",
    title: "High-Fidelity UI Design",
    desc: "Creating polished, brand-aligned interfaces with interactive states, dark mode support, and micro-interactions.",
  },
  {
    step: "03",
    title: "Modern Web Engineering",
    desc: "Coding semantic TypeScript, Next.js components, Tailwind CSS styling, and seamless CRM integrations.",
  },
  {
    step: "04",
    title: "Speed QA & Deployment",
    desc: "Exhaustive device testing, cross-browser audits, form validation testing, and zero-downtime global launch.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <Background>
      <div>
        <ServiceHero
          badge="Web Engineering & Conversion Design"
          title="Websites engineered to turn high-intent traffic into qualified clients"
          description="We build fast, secure, and modern digital flagships that position your brand as an industry leader and maximize every ad dollar spent."
          icon={Code2}
          stats={stats}
          ctaText="Start Your Website Project"
        />

        <ServiceFeatures
          sectionTitle="Modern Web Engineering Capabilities"
          sectionSubtitle="Say goodbye to sluggish WordPress templates. We build modern, bespoke web applications that perform under pressure."
          features={features}
          processTitle="Our Web Development Sprint"
          processSteps={processSteps}
        />
      </div>
    </Background>
  );
}
