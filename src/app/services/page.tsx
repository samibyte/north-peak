import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Gauge,
  MousePointerClick,
  Search,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Growth Services | Northpeak Growth Partners",
  description:
    "Explore our full-service digital growth solutions: SEO, Paid Advertising, Website Development, CRM & Automation, and Growth Optimization.",
};

const serviceCards = [
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Organic search authority that drives bottom-line pipeline",
    icon: Search,
    href: "/services/seo",
    highlights: [
      "Technical audits & core web vitals speed optimization",
      "Competitive keyword clustering for high-intent search",
      "Topical authority mapping & content velocity",
      "High-authority PR & white-hat backlink acquisition",
    ],
    metric: "340% Avg. Organic Traffic Growth",
  },
  {
    title: "Paid Advertising & Media Buying",
    subtitle:
      "Profitable, scalable acquisition across Google, Meta, & LinkedIn",
    icon: MousePointerClick,
    href: "/services/paid-advertising",
    highlights: [
      "Full-funnel Google Search, Performance Max & YouTube campaigns",
      "High-converting Meta (Facebook & Instagram) creative frameworks",
      "B2B LinkedIn ABM targeting & decision-maker outreach",
      "Server-side conversion tracking & offline lead attribution",
    ],
    metric: "4.8x Average Return on Ad Spend (ROAS)",
  },
  {
    title: "Website Development & CRO",
    subtitle:
      "Modern, blazing-fast web engines built to convert paid & organic traffic",
    icon: Code2,
    href: "/services/website-development",
    highlights: [
      "Custom Next.js & React engineering for lightning-fast speeds",
      "Conversion-first UI/UX architecture & modular design systems",
      "Integrated form capture & interactive qualification funnels",
      "Headless CMS integration for frictionless content updates",
    ],
    metric: "+138% Average Conversion Rate Lift",
  },
  {
    title: "CRM & Pipeline Automation",
    subtitle:
      "GoHighLevel workflows, automated nurturing, & closed-loop sales sync",
    icon: Bot,
    href: "/services/crm-automation",
    highlights: [
      "Turnkey GoHighLevel (GHL) architecture, pipelines & sub-accounts",
      "Automated multi-channel SMS & email nurture sequences",
      "Real-time calendar booking & two-way lead qualification",
      "Webhook routing to internal sales teams & enterprise CRMs",
    ],
    metric: "98.4% Automated Lead Engagement Rate",
  },
  {
    title: "Growth Optimization & Experimentation",
    subtitle: "Systematic CRO, multi-variant testing, & revenue analytics",
    icon: Gauge,
    href: "/services/growth-optimization",
    highlights: [
      "Full-funnel leakage diagnostics & drop-off heatmaps",
      "Continuous A/B testing on headlines, hooks, & checkout flows",
      "Custom Looker Studio & GA4 revenue attribution dashboards",
      "Weekly growth sprint reviews & strategic iteration cycles",
    ],
    metric: "2.4x Acceleration in LTV:CAC Ratio",
  },
];

export default function ServicesPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        {/* Header */}
        <div className="container max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            End-To-End Growth Architecture
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Five core disciplines. One unified revenue engine.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
            We reject the fragmented agency model. We integrate every touchpoint
            — from first search impression to closed GHL deal — into an
            accountable growth flywheel.
          </p>
        </div>

        {/* Services List */}
        <div className="container max-w-5xl mt-16 space-y-8">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="overflow-hidden border bg-card transition-all hover:border-primary/40 hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start md:items-center">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                        Discipline 0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2 pt-2">
                      {service.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <span className="inline-block rounded-lg bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                        Impact: {service.metric}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-0 shrink-0 w-full md:w-auto">
                    <Button asChild className="w-full md:w-auto">
                      <Link
                        href={service.href}
                        className="flex items-center gap-2"
                      >
                        Explore Capability
                        <ArrowRight className="size-4" />
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
            Not sure which services you need?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Book a complimentary 30-minute growth audit. We will analyze your
            current search presence, paid traffic bottlenecks, and conversion
            funnel with zero obligations.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request Your Free Growth Audit</Link>
          </Button>
        </div>
      </div>
    </Background>
  );
}
