import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

interface StatItem {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats: StatItem[];
  ctaText?: string;
  ctaHref?: string;
}

export function ServiceHero({
  badge,
  title,
  description,
  icon: Icon,
  stats,
  ctaText = "Get Free Proposal",
  ctaHref = "/contact",
}: ServiceHeroProps) {
  return (
    <section className="py-28 lg:py-32 lg:pt-40">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:items-center lg:gap-20">
        {/* Left side */}
        <div className="flex-[1.4]">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <div className="bg-primary/20 text-primary p-0.5 rounded">
              <Icon className="size-3.5" />
            </div>
            <span>{badge}</span>
          </div>

          <h1 className="text-foreground max-w-xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-5 text-lg md:text-xl leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href={ctaHref} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        {/* Right side stats */}
        <div className="relative flex flex-1 flex-col justify-center gap-6 pt-8 lg:pt-0 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 border-b pb-4 last:border-b-0"
            >
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
