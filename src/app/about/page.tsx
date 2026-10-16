import type { Metadata } from "next";
import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Leadership } from "@/components/blocks/leadership";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "About Us | Northpeak Growth Partners",
  description:
    "Learn about Northpeak Growth Partners, our data-driven growth philosophy, leadership squad, and track record scaling ambitious companies.",
};

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        <AboutHero />
        <About />
        <div className="pt-20 lg:pt-28">
          <DashedLine className="container max-w-5xl scale-x-105" />
          <Leadership />
        </div>
      </div>
    </Background>
  );
}
