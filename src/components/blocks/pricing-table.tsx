"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FeatureSection {
  category: string;
  features: {
    name: string;
    starter: true | false | null | string;
    accelerator: true | false | null | string;
    enterprise: true | false | null | string;
  }[];
}

const pricingPlans = [
  {
    name: "Starter Growth",
    button: {
      text: "Get started",
      variant: "outline" as const,
    },
  },
  {
    name: "Growth Accelerator",
    button: {
      text: "Get started",
      variant: "default" as const,
    },
  },
  {
    name: "Enterprise Scale",
    button: {
      text: "Contact squad",
      variant: "outline" as const,
    },
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Acquisition & Traffic",
    features: [
      {
        name: "Technical SEO Audits & Fixes",
        starter: "Quarterly",
        accelerator: "Continuous",
        enterprise: "Custom Continuous",
      },
      {
        name: "Content Velocity (Articles / mo)",
        starter: "4 articles",
        accelerator: "12 articles",
        enterprise: "24+ articles",
      },
      {
        name: "Paid Channels Managed",
        starter: "1 channel",
        accelerator: "3 channels",
        enterprise: "Omnichannel",
      },
      {
        name: "Ad Creative Sprints",
        starter: "Bi-weekly",
        accelerator: "Weekly",
        enterprise: "Custom Daily/Weekly",
      },
      {
        name: "High-Authority Editorial Backlinks",
        starter: "3 / mo",
        accelerator: "8 / mo",
        enterprise: "20+ / mo",
      },
    ],
  },
  {
    category: "Conversion & Web",
    features: [
      {
        name: "Landing Page Creation & CRO",
        starter: "1 page / mo",
        accelerator: "3 pages / mo",
        enterprise: "Unlimited Custom",
      },
      {
        name: "Core Web Vitals Speed Monitoring",
        starter: true,
        accelerator: true,
        enterprise: true,
      },
      {
        name: "Heatmaps & Friction Analysis",
        starter: null,
        accelerator: true,
        enterprise: true,
      },
      {
        name: "A/B Testing Experiments",
        starter: null,
        accelerator: "2 per sprint",
        enterprise: "Continuous Multi-Variant",
      },
      {
        name: "Custom Web App / Next.js Engineering",
        starter: null,
        accelerator: null,
        enterprise: true,
      },
    ],
  },
  {
    category: "GoHighLevel CRM & Automation",
    features: [
      {
        name: "GHL Snapshot Setup & Maintenance",
        starter: "Basic Setup",
        accelerator: "Full Architecture",
        enterprise: "Custom Multi-Location",
      },
      {
        name: "Automated SMS & Email Nurture",
        starter: "2 sequences",
        accelerator: "Unlimited",
        enterprise: "Custom AI-Assisted",
      },
      {
        name: "Calendar Booking & Reminder Flows",
        starter: true,
        accelerator: true,
        enterprise: true,
      },
      {
        name: "Pipeline Lead Scoring & Routing",
        starter: null,
        accelerator: true,
        enterprise: true,
      },
      {
        name: "Custom Webhook & API Integrations",
        starter: null,
        accelerator: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Reporting",
    features: [
      {
        name: "Live Analytics Dashboard",
        starter: true,
        accelerator: true,
        enterprise: true,
      },
      {
        name: "Strategic Review Calls",
        starter: "Monthly",
        accelerator: "Bi-Weekly",
        enterprise: "Weekly + QBRs",
      },
      {
        name: "Dedicated Slack Communication",
        starter: null,
        accelerator: true,
        enterprise: "Priority VIP Slack",
      },
      {
        name: "Response Time SLA",
        starter: "24 hours",
        accelerator: "4 hours",
        enterprise: "1 hour dedicated",
      },
    ],
  },
];

const renderFeatureValue = (value: true | false | null | string) => {
  if (value === true) {
    return <Check className="size-4 text-primary" />;
  }
  if (value === false) {
    return <X className="size-4 text-muted-foreground/40" />;
  }
  if (value === null) {
    return <span className="text-muted-foreground/40 text-xs">—</span>;
  }
  return (
    <div className="flex items-center gap-1.5">
      <Check className="size-3.5 text-primary shrink-0" />
      <span className="text-foreground text-xs font-medium">{value}</span>
    </div>
  );
};

export const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Detailed Feature Breakdown
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Compare all deliverables and services across our growth tiers.
          </p>
        </div>

        <PlanHeaders
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <FeatureSections selectedPlan={selectedPlan} />
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-4">
      {/* Mobile View */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between py-2">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-xl font-bold">
                {pricingPlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <Button
              variant={pricingPlans[selectedPlan].button.variant}
              size="sm"
              asChild
            >
              <Link href="/contact">
                {pricingPlans[selectedPlan].button.text}
              </Link>
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-1.5 p-2 bg-muted/40 rounded-xl mt-2">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    size="sm"
                    variant="ghost"
                    key={index}
                    className="justify-start text-xs"
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                  >
                    Switch to {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 gap-4 max-md:hidden items-end">
        <div className="col-span-1 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Plan Features
        </div>

        {pricingPlans.map((plan, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
            <Button
              variant={plan.button.variant}
              size="sm"
              className="w-full text-xs"
              asChild
            >
              <Link href="/contact">{plan.button.text}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => (
  <div className="divide-y">
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="py-4">
        <div className="py-2 mb-2">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
            {section.category}
          </h4>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="grid grid-cols-2 py-2.5 text-xs font-medium max-md:border-b md:grid-cols-4 items-center hover:bg-muted/20 rounded-md px-1"
          >
            <span className="text-foreground">{feature.name}</span>

            {/* Mobile View */}
            <div className="md:hidden flex justify-end">
              {renderFeatureValue(
                [feature.starter, feature.accelerator, feature.enterprise][
                  selectedPlan
                ],
              )}
            </div>

            {/* Desktop View */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              {[feature.starter, feature.accelerator, feature.enterprise].map(
                (value, i) => (
                  <div key={i} className="flex items-center">
                    {renderFeatureValue(value)}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);
