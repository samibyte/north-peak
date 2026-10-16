import type { Metadata } from "next";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export const metadata: Metadata = {
  title: "Northpeak Growth Partners | Full-Funnel Digital Growth & CRM Systems",
  description:
    "Scale organic search, paid advertising, web performance, and GoHighLevel pipeline automation with Northpeak Growth Partners.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <ResourceAllocation />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
}
