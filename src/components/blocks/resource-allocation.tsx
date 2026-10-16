import Image from "next/image";
import { DashedLine } from "@/components/dashed-line";
import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Turnkey GoHighLevel CRM Integration.",
    description:
      "Automated pipeline stages, SMS/email nurture sequences, and seamless attribution tracking connected to your ad campaigns.",
    images: [
      {
        src: "/resource-allocation/templates.webp",
        alt: "GHL automation templates",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Unified Growth Stack.",
    description:
      "Replace disconnected tools with a streamlined acquisition-to-conversion engine.",
    images: [
      { src: "/logos/jira.svg", alt: "Tool 1", width: 48, height: 48 },
      { src: "/logos/excel.svg", alt: "Tool 2", width: 48, height: 48 },
      { src: "/logos/notion.svg", alt: "Tool 3", width: 48, height: 48 },
      { src: "/logos/word.svg", alt: "Tool 4", width: 48, height: 48 },
      { src: "/logos/monday.svg", alt: "Tool 5", width: 48, height: 48 },
      { src: "/logos/drive.svg", alt: "Tool 6", width: 48, height: 48 },
      { src: "/logos/jira.svg", alt: "Tool 7", width: 48, height: 48 },
      { src: "/logos/asana.svg", alt: "Tool 8", width: 48, height: 48 },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "Prune waste.",
    description:
      "Kill underperforming keywords, ads, and leaky funnel stages with continuous ROAS monitoring.",
    images: [
      {
        src: "/resource-allocation/graveyard.webp",
        alt: "Growth optimization interface",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Real-time performance dialogue.",
    description:
      "Direct Slack/portal access with your dedicated growth squad for rapid iterations and campaign sprints.",
    images: [
      {
        src: "/resource-allocation/discussions.webp",
        alt: "Client communication interface",
        width: 320,
        height: 103,
      },
    ],
    className:
      "justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Automated Lead Notifications.",
    description:
      "Instant alerts to your sales team the moment a qualified prospect books or submits an inquiry.",
    images: [
      {
        src: "/resource-allocation/notifications.webp",
        alt: "Notifications and alerts",
        width: 305,
        height: 280,
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = () => {
  return (
    <section id="growth-stack" className="overflow-hidden pb-28 lg:pb-32">
      <div className="">
        <h2 className="container text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Streamline your entire customer acquisition engine
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={item.title} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={item.title}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold text-lg text-foreground">
          {item.title}{" "}
        </h3>
        <span className="text-muted-foreground text-sm">
          {" "}
          {item.description}
        </span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden mt-6">
          <div className="flex flex-col gap-4">
            {/* First row */}
            <div className="flex translate-x-4 justify-end gap-4">
              {item.images.slice(0, 4).map((image) => (
                <div
                  key={image.alt}
                  className="bg-background border grid aspect-square size-14 place-items-center rounded-2xl p-2 lg:size-16 shadow-xs"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second row */}
            <div className="flex -translate-x-4 gap-4">
              {item.images.slice(4).map((image) => (
                <div
                  key={image.alt}
                  className="bg-background border grid aspect-square size-14 place-items-center rounded-2xl lg:size-16 shadow-xs"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4 mt-6">
          {item.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted/20"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-left-top p-2"
              />
            </div>
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
