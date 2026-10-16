import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Services & Strategy",
    questions: [
      {
        question: "How does Northpeak approach digital growth differently?",
        answer:
          "Unlike traditional marketing agencies that work in silos, Northpeak operates as an integrated growth partner. We combine search traffic (SEO), paid acquisition (Google/Meta/LinkedIn), high-converting web infrastructure, and automated CRM pipelines (GoHighLevel) to create a connected revenue machine where every dollar spent is tracked to closed revenue.",
      },
      {
        question: "How long before we start seeing measurable results?",
        answer:
          "Paid advertising campaigns and landing page conversion optimizations typically generate initial qualified leads within 7–14 days of launch. Organic SEO and technical authority build sustainably over 60–120 days, delivering compounding ROI and lowering blended acquisition costs month over month.",
      },
      {
        question: "Do you build custom landing pages and websites?",
        answer:
          "Yes. Our in-house engineering team designs and develops high-speed, conversion-optimized websites and landing pages built on modern frameworks (Next.js, Tailwind, headless CMS) designed to maximize ad spend efficiency and search rankings.",
      },
    ],
  },
  {
    title: "GoHighLevel & Automation",
    questions: [
      {
        question: "How does GoHighLevel (GHL) fit into our setup?",
        answer:
          "GoHighLevel acts as the operational engine for your leads. We build custom pipelines, automated SMS/email follow-up sequences, appointment scheduling, call tracking, and webhook integrations that ensure no inbound inquiry ever falls through the cracks.",
      },
      {
        question: "What if we already have our own CRM or GHL sub-account?",
        answer:
          "We can either plug into your existing GHL snapshot, migrate your data seamlessly, or configure clean webhook endpoints between your preferred CRM (HubSpot, Salesforce, Pipedrive) and our growth tracking infrastructure.",
      },
    ],
  },
  {
    title: "Partnership & Billing",
    questions: [
      {
        question: "Are there long-term lock-in contracts?",
        answer:
          "We believe partnerships should be earned every month. Our standard agreements operate on flexible 90-day initial sprints followed by monthly rolling commitments with 30-day notice. We earn retention through consistent pipeline generation.",
      },
      {
        question: "Who manages our ad spend?",
        answer:
          "Ad spend is paid directly by you to the ad platforms (Google, Meta, LinkedIn), ensuring 100% transparency and account ownership. Northpeak's management fee covers strategy, creative development, campaign architecture, A/B testing, and optimization.",
      },
      {
        question: "How does communication and reporting work?",
        answer:
          "You receive a real-time analytics dashboard, bi-weekly or weekly sprint calls with your dedicated growth strategist, and a shared Slack channel for prompt day-to-day coordination.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div
          className={cn(
            "mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16",
            className2,
          )}
        >
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h1>
            ) : (
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Have a question that isn&apos;t covered here? Our growth directors
              are always available to help.{" "}
              <Link
                href="/contact"
                className="text-primary font-medium underline underline-offset-4"
              >
                Get in touch with our team
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="border-b pb-4 last:border-b-0"
              >
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger className="text-left font-medium text-sm md:text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
