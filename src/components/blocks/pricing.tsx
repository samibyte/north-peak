"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Growth",
    monthlyPrice: "$2,450",
    yearlyPrice: "$1,960",
    description:
      "Ideal for growing businesses establishing their digital footprint",
    features: [
      "Core SEO strategy & on-page optimization",
      "Single channel paid ads (Google or Meta)",
      "Essential GoHighLevel lead capture setup",
      "Bi-weekly performance sprint reports",
      "Conversion tracking & GA4 setup",
      "Standard email support",
    ],
  },
  {
    name: "Growth Accelerator",
    monthlyPrice: "$4,950",
    yearlyPrice: "$3,960",
    description: "Full-service growth engine for companies ready to dominate",
    popular: true,
    features: [
      "All Starter Growth features, plus...",
      "Omnichannel paid advertising (Google, Meta, LinkedIn)",
      "Technical SEO & aggressive content velocity",
      "Full GoHighLevel CRM & pipeline automation",
      "Landing page design & continuous CRO experiments",
      "Weekly strategic calls & dedicated Slack channel",
      "Attribution modeling & revenue dashboard",
    ],
  },
  {
    name: "Enterprise Scale",
    monthlyPrice: "$8,950",
    yearlyPrice: "$7,160",
    description:
      "Custom growth squad for market leaders with aggressive targets",
    features: [
      "All Accelerator features, plus...",
      "Custom full-stack web engineering & headless CMS",
      "Multi-brand or multi-location SEO & PPC scaling",
      "Enterprise GoHighLevel architecture & custom webhooks",
      "Executive quarterly business reviews (QBRs)",
      "Dedicated growth director & media buyer",
      "Priority same-day SLA support",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            Predictable ROI & Clear Deliverables
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Transparent growth partnerships
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-relaxed text-balance">
            No hidden retainers or confusing hourly rates. Choose the tier that
            matches your current growth stage and scale seamlessly as revenue
            expands.
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <span
              className={cn(
                "text-sm font-medium",
                !isAnnual && "text-foreground",
              )}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span
              className={cn(
                "text-sm font-medium flex items-center gap-1.5",
                isAnnual && "text-foreground",
              )}
            >
              Annual{" "}
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-8 grid items-stretch gap-6 text-start md:mt-12 md:grid-cols-3 lg:mt-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col justify-between border bg-card transition-all",
                plan.popular &&
                  "border-primary shadow-lg ring-2 ring-primary/20",
              )}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide">
                  Most Popular
                </div>
              )}
              <CardContent className="flex flex-col justify-between h-full p-6 lg:p-7">
                <div>
                  <div className="space-y-2">
                    <h3 className="text-foreground font-semibold text-lg">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-normal">
                      {plan.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                        {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-xs font-medium ml-1">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 border-t pt-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-muted-foreground flex items-start gap-2.5 text-xs leading-relaxed"
                      >
                        <Check className="size-4 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-foreground">
            Need a bespoke enterprise or custom scope?
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            We partner with large portfolio companies and multi-location
            businesses on tailored performance structures.
          </p>
          <Link
            href="/contact"
            className="text-primary text-xs font-semibold underline underline-offset-4 inline-block mt-2"
          >
            Schedule a Discovery Call &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
