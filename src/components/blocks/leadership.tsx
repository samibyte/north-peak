import Image from "next/image";

const leaders = [
  {
    name: "Marcus Vance",
    role: "Managing Partner & SEO Director",
    image: "/investors/1.webp",
  },
  {
    name: "Elena Rostova",
    role: "Head of Paid Acquisition",
    image: "/investors/2.webp",
  },
  {
    name: "David Chen",
    role: "Lead Conversion Engineer",
    image: "/investors/3.webp",
  },
  {
    name: "Sarah Jenkins",
    role: "CRM & Automation Architect",
    image: "/investors/4.webp",
  },
  {
    name: "Jordan Brooks",
    role: "Growth Optimization Lead",
    image: "/investors/5.webp",
  },
];

export function Leadership() {
  return (
    <section className="container max-w-5xl py-16">
      <div className="space-y-3 mb-10">
        <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Leadership & Practice Leads
        </h2>
        <p className="text-muted-foreground text-base max-w-xl">
          Experienced practitioners who have managed 8-figure ad spends and
          built organic engines for fast-scaling companies.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {leaders.map((leader) => (
          <div key={leader.name} className="group">
            <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted mb-3 shadow-xs">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-sm text-foreground">
              {leader.name}
            </h3>
            <p className="text-muted-foreground text-xs mt-0.5 leading-snug">
              {leader.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
