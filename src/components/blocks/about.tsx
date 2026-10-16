import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-12 flex max-w-5xl flex-col-reverse gap-8 md:mt-16 md:gap-14 lg:mt-24 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Northpeak growth strategy session" },
            { src: "/about/2.webp", alt: "Analytics and performance sprint" },
          ]}
          className="xl:-translate-x-6"
        />

        <TextSection
          title="The Growth Squad"
          paragraphs={[
            "Northpeak operates with a high-density talent model. You don't get passed off to junior account coordinators — our clients work directly with senior media buyers, SEO directors, conversion engineers, and CRM architects.",
            "We intentionally limit our active client roster so that each partner receives the deep technical attention and strategic responsiveness required to scale aggressively.",
            "Whether you need an embedded growth partner or an autonomous execution squad, we integrate seamlessly with your internal leadership.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Meet Your Growth Team",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="Our Operating Philosophy"
          paragraphs={[
            "At Northpeak Growth Partners, we believe that real growth is structural, not accidental. We focus on durable assets: high-ranking search content, calibrated advertising algorithms, bulletproof lead automation, and conversion-optimized web properties.",
            "We are customer-obsessed and outcome-driven. We don't report on vanity impressions or empty clicks — our weekly dashboards track cost-per-acquisition, pipeline velocity, closed-won deals, and customer lifetime value.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Collaborative growth architecture" },
            { src: "/about/4.webp", alt: "Multi-channel dashboard review" },
          ]}
          className="hidden lg:flex xl:translate-x-6"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl border shadow-sm"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-base md:space-y-6">
      {title && (
        <h2 className="text-foreground text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      )}
      <div className="text-muted-foreground max-w-xl space-y-4 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="pt-2">
          <Button size="lg" asChild>
            <Link href={ctaButton.href}>{ctaButton.text}</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
