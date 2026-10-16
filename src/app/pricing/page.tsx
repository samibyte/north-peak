import type { Metadata } from "next";
import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";

export const metadata: Metadata = {
  title: "Pricing & Plans | Northpeak Growth Partners",
  description:
    "Predictable, transparent growth agency pricing. Compare our Starter Growth, Growth Accelerator, and Enterprise Scale tiers.",
};

export default function PricingPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        <Pricing className="py-0 lg:py-4" />
        <PricingTable />
        <FAQ className="pt-0 lg:pt-4" />
      </div>
    </Background>
  );
}
