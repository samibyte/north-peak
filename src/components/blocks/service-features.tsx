import type { LucideIcon } from "lucide-react";
import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceFeaturesProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  features: FeatureItem[];
  processTitle?: string;
  processSteps?: { step: string; title: string; desc: string }[];
}

export function ServiceFeatures({
  sectionTitle = "Core Deliverables & Capabilities",
  sectionSubtitle = "Built from the ground up for predictable scalability.",
  features,
  processTitle = "Our Strategic Process",
  processSteps,
}: ServiceFeaturesProps) {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container">
        <DashedLine orientation="horizontal" className="mb-16" />

        <div className="space-y-4 max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border bg-card transition-all hover:shadow-md"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-base text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {processSteps && processSteps.length > 0 && (
          <div className="mt-20 border-t pt-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10 text-center">
              {processTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border bg-muted/30 p-6 relative"
                >
                  <span className="font-mono text-2xl font-bold text-primary/40 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="font-semibold text-base text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
