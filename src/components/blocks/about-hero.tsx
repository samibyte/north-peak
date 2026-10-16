import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$64M+",
    label: "Client Revenue Generated",
  },
  {
    value: "180+",
    label: "Growth Sprints Delivered",
  },
  {
    value: "4.8x",
    label: "Average Return on Ad Spend",
  },
  {
    value: "94%",
    label: "Annual Client Retention",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <span>Our Story & Mission</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
            Engineering compound digital growth
          </h1>

          <p className="text-muted-foreground mt-5 text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Northpeak was founded on a simple premise: marketing should be a
            measurable profit center, not an unpredictable expense.
          </p>

          <div className="text-muted-foreground mt-8 hidden max-w-lg space-y-4 text-base md:block lg:mt-10 leading-relaxed">
            <p>
              We bridge the gap between creative acquisition and technical
              execution. By uniting technical SEO, high-intent paid advertising,
              conversion-engineered web experiences, and deep GoHighLevel CRM
              workflows, we build sustainable growth machines for modern
              businesses.
            </p>
            <p>
              Every decision we make is backed by data, validated through
              rigorous experimentation, and aligned directly with your
              bottom-line revenue goals.
            </p>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-6 pt-10 lg:pt-0 lg:pl-10">
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
              <div className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
