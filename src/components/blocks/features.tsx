import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Organic Authority & High-Intent SEO",
    description:
      "Rank for competitive terms that drive real sales, not vanity clicks.",
    image: "/features/triage-card.svg",
    href: "/services/seo",
  },
  {
    title: "Targeted Paid Traffic & Conversion Funnels",
    description:
      "Precision media buying across Google & Meta aligned with buyer psychology.",
    image: "/features/cycle-card.svg",
    href: "/services/paid-advertising",
  },
  {
    title: "GoHighLevel CRM & Pipeline Automation",
    description:
      "End-to-end lead tracking, automated nurturing, and closed-loop reporting.",
    image: "/features/overview-card.svg",
    href: "/services/crm-automation",
  },
];

export const Features = () => {
  return (
    <section id="services-preview" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text badge */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-xs font-medium tracking-wider uppercase max-md:hidden">
            SCALABLE GROWTH ARCHITECTURE
          </span>
        </div>

        {/* Content Heading */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-4 md:gap-8 lg:mt-20 lg:grid-cols-2">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Built for ambitious brands ready to scale
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Northpeak engineers compound growth systems. We don&apos;t just run
            isolated campaigns — we integrate SEO, paid acquisition, modern web
            experience, and GoHighLevel automation into a singular revenue
            machine.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-16 overflow-hidden border">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col justify-between">
                  <div className="relative aspect-[1.3/1] overflow-hidden rounded-xl bg-muted/40 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-left-top p-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent opacity-60" />
                  </div>

                  <div>
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 pt-2"
                    >
                      <div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="rounded-full border p-2 shrink-0 group-hover:bg-accent transition-colors">
                        <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>

                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
