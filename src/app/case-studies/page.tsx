import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | Northpeak Growth Partners",
  description:
    "Explore how Northpeak Growth Partners scaled revenue across B2B, healthcare, SaaS, and e-commerce through SEO, paid ads, and GoHighLevel CRM systems.",
};

const caseStudies = [
  {
    client: "Apex Freight Logistics",
    category: "SEO & Web Development",
    icon: Target,
    headline: "+412% Organic Pipeline & $3.4M in Closed Contracts",
    challenge:
      "Apex was reliant entirely on outbound cold calling with an outdated, unindexed website that generated zero inbound commercial freight requests.",
    strategy:
      "Engineered a high-performance Next.js site, built 45 localized route landing pages, and established topical authority for commercial shipping terms.",
    metrics: [
      { label: "Organic Traffic Lift", value: "412%" },
      { label: "Commercial Inbound Calls", value: "380 /mo" },
      { label: "Added Pipeline Value", value: "$3.4M" },
    ],
  },
  {
    client: "Nova Care Clinics",
    category: "CRM & Pipeline Automation",
    icon: Bot,
    headline: "Automated 1,450 Bookings & Boosted Show-Up Rate to 84%",
    challenge:
      "Front-desk staff across 8 regional clinics were losing 40% of inbound website leads due to slow manual callbacks and lack of reminder systems.",
    strategy:
      "Deployed custom GoHighLevel CRM architecture with instant 2-minute SMS qualification, automated calendar scheduling, and two-way confirmation sequences.",
    metrics: [
      { label: "Avg. Lead Response Time", value: "< 2 min" },
      { label: "Appointment Show-Up Rate", value: "84%" },
      { label: "New Patient Bookings", value: "1,450 /qtr" },
    ],
  },
  {
    client: "SaaSFlow Platform",
    category: "Paid Advertising & CRO",
    icon: BarChart3,
    headline: "5.2x Blended ROAS & 44% Reduction in Customer Acquisition Cost",
    challenge:
      "SaaSFlow was burning budget on broad Google Ads keywords with high bounce rates on generic homepage traffic and poor free-trial retention.",
    strategy:
      "Restructured paid search into high-intent competitor and problem-aware ad groups, designed bespoke interactive demo landing pages, and added server-side CAPI.",
    metrics: [
      { label: "Target Account ROAS", value: "5.2x" },
      { label: "CAC Reduction", value: "-44%" },
      { label: "Demo Conversion Rate", value: "6.8%" },
    ],
  },
  {
    client: "Lumina Home Goods",
    category: "Growth Optimization & Paid Social",
    icon: TrendingUp,
    headline: "Scaled from $80k to $450k Monthly Revenue with 3.9x ROAS",
    challenge:
      "Suffering from post-iOS 14 tracking loss and severe ad creative fatigue, preventing the brand from scaling past $100k/mo spend profitably.",
    strategy:
      "Implemented a 10-hook weekly creative testing protocol on Meta, added first-party server tracking, and deployed an optimized one-click upsell funnel.",
    metrics: [
      { label: "Monthly Gross Revenue", value: "$450k+" },
      { label: "Blended Meta ROAS", value: "3.9x" },
      { label: "Average Order Value (AOV)", value: "+38%" },
    ],
  },
  {
    client: "Vanguard Wealth Advisors",
    category: "SEO & High-Intent Search",
    icon: Target,
    headline: "#1 Google Rankings for 34 High-Net-Worth Advisory Terms",
    challenge:
      "Vanguard needed to attract private wealth clients managing $2M+ in liquid assets without cheapening their brand with loud, generic banner advertising.",
    strategy:
      "Produced institutional-grade whitepapers, comprehensive tax-advantaged retirement guides, and earned editorial links in top financial journals.",
    metrics: [
      { label: "Top 3 Search Rankings", value: "34 Keywords" },
      { label: "HNW Inquiries / Month", value: "48 Qualified" },
      { label: "New AUM Attributed", value: "$42M" },
    ],
  },
  {
    client: "Metro Commercial Group",
    category: "CRM & Website Engineering",
    icon: Code2,
    headline: "Unified 4 Portals into 1 Next.js Flagship with Instant GHL Sync",
    challenge:
      "Managing disparate WordPress sites that frequently crashed during major tenant listing releases, causing lost lease applications and broken lead logs.",
    strategy:
      "Rebuilt the entire digital presence on Next.js, integrating direct GoHighLevel lead capture forms, property tour calendars, and automated broker routing.",
    metrics: [
      { label: "Page Load Time", value: "0.6s" },
      { label: "Listing Inquiries", value: "+188%" },
      { label: "Closed Lease Volume", value: "$14.2M" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        {/* Header */}
        <div className="container max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            Measurable Proof & Case Studies
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Real systems. Compounding revenue.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
            We don&apos;t celebrate vanity metrics like impressions or clicks.
            Here is how our integrated SEO, paid ads, web development, and
            GoHighLevel automation drove real pipeline.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="container max-w-5xl mt-16 grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <Card
                key={study.client}
                className="flex flex-col justify-between border bg-card transition-all hover:border-primary/40 hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg">
                          <Icon className="size-4" />
                        </div>
                        <span className="font-semibold text-sm text-foreground">
                          {study.client}
                        </span>
                      </div>
                      <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {study.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-foreground leading-snug">
                      {study.headline}
                    </h2>

                    <div className="space-y-2 text-xs leading-relaxed border-t pt-3">
                      <p>
                        <strong className="text-foreground">Challenge: </strong>
                        <span className="text-muted-foreground">
                          {study.challenge}
                        </span>
                      </p>
                      <p>
                        <strong className="text-foreground">Solution: </strong>
                        <span className="text-muted-foreground">
                          {study.strategy}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center bg-muted/40 rounded-xl p-3">
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-bold text-foreground text-sm lg:text-base">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full text-xs"
                      asChild
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-1.5"
                      >
                        Inquire About Similar Results
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="container max-w-3xl mt-20 text-center space-y-6">
          <DashedLine className="mb-12" />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Ready to be our next success story?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Let&apos;s build an integrated acquisition and CRM machine
            specifically calibrated for your market and unit economics.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Growth Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}
