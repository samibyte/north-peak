"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const Logos = () => {
  const topRowCompanies: Company[] = [
    {
      name: "Mercury",
      logo: "/logos/mercury.svg",
      width: 130,
      height: 24,
    },
    {
      name: "Watershed",
      logo: "/logos/watershed.svg",
      width: 140,
      height: 28,
    },
    {
      name: "Retool",
      logo: "/logos/retool.svg",
      width: 110,
      height: 22,
    },
    {
      name: "Descript",
      logo: "/logos/descript.svg",
      width: 110,
      height: 26,
    },
  ];

  const bottomRowCompanies: Company[] = [
    {
      name: "Perplexity",
      logo: "/logos/perplexity.svg",
      width: 135,
      height: 30,
    },
    {
      name: "Monzo",
      logo: "/logos/monzo.svg",
      width: 100,
      height: 18,
    },
    {
      name: "Ramp",
      logo: "/logos/ramp.svg",
      width: 100,
      height: 26,
    },
    {
      name: "Raycast",
      logo: "/logos/raycast.svg",
      width: 120,
      height: 30,
    },
    {
      name: "Arc",
      logo: "/logos/arc.svg",
      width: 85,
      height: 26,
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-14">
        <div className="text-center">
          <h2 className="mb-3 text-xl text-balance md:text-2xl lg:text-3xl font-semibold">
            Trusted by modern founders, operators, and high-growth brands.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground font-normal">
              {" "}
              From seed-stage disruptors to 8-figure market leaders.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block w-full max-w-4xl mx-auto">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-16 lg:gap-x-20",
            gridClassName,
          )}
        >
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center h-12">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain opacity-50 transition-opacity hover:opacity-80 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden w-full">
        <Marquee direction={direction} pauseOnHover speed={35}>
          {companies.map((company) => (
            <div
              key={company.name}
              className="mx-6 inline-flex items-center h-10 transition-opacity hover:opacity-80 dark:invert"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain opacity-60"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
