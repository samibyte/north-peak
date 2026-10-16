import { ArrowRight, BarChart3, Cpu, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Precision SEO & Search",
    description:
      "Data-driven organic strategies that capture high-intent buyers.",
    icon: Target,
  },
  {
    title: "High-ROI Paid Advertising",
    description:
      "Profitable customer acquisition across Google, Meta, and LinkedIn.",
    icon: BarChart3,
  },
  {
    title: "High-Converting Websites",
    description:
      "Fast, modern web infrastructure designed to turn traffic into clients.",
    icon: TrendingUp,
  },
  {
    title: "CRM & Pipeline Automation",
    description:
      "Turn lead capture into automated revenue with GoHighLevel setups.",
    icon: Cpu,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-40">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span>GoHighLevel-Powered Growth Agency</span>
          </div>

          <h1 className="text-foreground max-w-160 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
            Scale your business with precision growth systems
          </h1>

          <p className="text-muted-foreground text-lg mt-5 md:text-xl lg:text-2xl leading-relaxed">
            Northpeak Growth Partners builds revenue engines: combining SEO,
            paid acquisition, high-converting web design, and end-to-end CRM
            automation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Claim Growth Audit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-sm"
              asChild
            >
              <Link href="/case-studies">Explore Case Studies</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-3.5 lg:gap-5">
                <div className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg mt-0.5">
                  <Icon className="size-4 lg:size-5" />
                </div>
                <div>
                  <h2 className="font-text text-foreground font-semibold text-base">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-sm text-sm mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:mx-4 max-lg:h-[420px] max-lg:overflow-hidden md:mt-16 lg:container lg:mt-20">
        <div className="relative h-[550px] w-full overflow-hidden rounded-2xl border shadow-xl">
          <Image
            src="/hero.webp"
            alt="Northpeak Growth Engine Dashboard"
            fill
            priority
            className="object-cover object-left-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl bg-background/85 backdrop-blur-md border rounded-xl p-5 shadow-lg">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  340%
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Avg. Organic Traffic Lift
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  4.8x
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Average Client ROAS
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  98.4%
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  CRM Lead Automation
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  $64M+
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Tracked Client Revenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
