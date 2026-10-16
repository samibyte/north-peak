"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote:
      "Northpeak completely restructured our Google Ads and GHL pipeline. Our qualified leads tripled in 60 days.",
    author: "Amy Chase",
    role: "VP of Growth",
    company: "Mercury Finance",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote:
      "Their SEO strategy unlocked $1.8M in pipeline value from organic search alone within our first 9 months.",
    author: "Jonas Kotara",
    role: "Founder & CEO",
    company: "ScaleTech Solutions",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote:
      "Having GHL automation wired seamlessly into our web funnels gives us complete visibility from first click to closed deal.",
    author: "Kevin Yam",
    role: "Chief Operating Officer",
    company: "Aura Health",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote:
      "Northpeak acts as our entire growth department. Transparent reporting, rapid iteration, and stellar ROAS.",
    author: "Kundo Marta",
    role: "Managing Director",
    company: "Nexus Logistics",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote:
      "The paid social campaigns exceeded our target CAC by 34%. They are without a doubt the most data-driven agency we've partnered with.",
    author: "Amy Chase",
    role: "Head of Marketing",
    company: "VentureWorks",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote:
      "Their team rebuilt our website on modern Next.js and conversion rates jumped from 1.8% to 4.3%.",
    author: "Jonas Kotara",
    role: "CTO",
    company: "OmniRetail",
    image: "/testimonials/jonas-kotara.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Trusted by high-growth operators
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              We measure our success strictly by pipeline value, qualified
              revenue, and sustainable customer lifetime value.
            </p>
            <Button variant="outline" className="shadow-xs" asChild>
              <Link href="/case-studies">
                Read our Case Studies <ArrowRight className="size-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {items.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.company}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted/50 h-full overflow-hidden border">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[260px] lg:h-[300px] bg-muted/80">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-8 p-6">
                          <blockquote className="font-display text-base leading-snug font-medium md:text-lg">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>
                          <div className="space-y-0.5 border-t pt-3">
                            <div className="text-foreground font-semibold text-sm">
                              {testimonial.author}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-11 translate-x-0 translate-y-0 transition-colors" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-11 translate-x-0 translate-y-0 transition-colors" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
