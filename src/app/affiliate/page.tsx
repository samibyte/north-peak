import {
  ArrowRight,
  Award,
  Bot,
  DollarSign,
  Layers,
  Link as LinkIcon,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { AffiliateCalculator } from "@/components/blocks/affiliate-calculator";
import { AffiliateForm } from "@/components/blocks/affiliate-form";
import { DashedLine } from "@/components/dashed-line";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Affiliate & Referral Partner Program | Northpeak Growth Partners",
  description:
    "Earn 20% recurring commissions for 12 months referring ambitious brands to Northpeak Growth Partners. Automated tracking, monthly payouts, and partner support.",
};

const partnerSteps = [
  {
    step: "01",
    title: "Apply & Receive Partner Link",
    desc: "Complete the brief application below. Once approved, you gain access to your partner dashboard, custom tracking link, and marketing resources.",
    icon: LinkIcon,
  },
  {
    step: "02",
    title: "Introduce Ambitious Brands",
    desc: "Share your referral link or make a warm email introduction to companies looking to scale their search rankings, paid ads, or GoHighLevel CRM.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Collect Recurring Revenue",
    desc: "Earn 20% monthly recurring commissions on all collected client fees for the first 12 months of every retained agreement.",
    icon: DollarSign,
  },
];

const affiliateFaqs = [
  {
    q: "How are referrals tracked and attributed?",
    a: "Every partner receives a unique 90-day tracking link powered by our GoHighLevel backend. We also support direct warm email introductions — simply loop in partners@northpeakgrowth.com, and we will manually tie the deal to your partner record.",
  },
  {
    q: "What is the commission rate and payout schedule?",
    a: "We pay a flat 20% commission on all collected retainer fees for the client's first 12 months. Payouts are distributed on the 1st of every month via direct bank ACH transfer, PayPal, or Stripe Connect for the prior month's collected billings.",
  },
  {
    q: "How much do affiliates typically earn?",
    a: "Our core client retainers range from $2,450/mo to $8,950/mo. At an average retainer of $4,950/mo, a single referral generates $990 every month ($11,880 annually). Referring just 3 active clients creates nearly $3,000/month in passive recurring income.",
  },
  {
    q: "Do I need to manage or service the client?",
    a: "Zero client management is required on your part. Once the introduction is made, our senior growth directors handle the discovery audit, proposal, contract closing, and ongoing strategic execution.",
  },
  {
    q: "What collateral and sales support do you provide?",
    a: "Approved partners receive co-branded presentation decks, case study one-pagers, email introduction templates, and access to a dedicated Northpeak Partner Director to assist on high-value calls.",
  },
  {
    q: "How does the backend integration work?",
    a: "Attribution, commission calculations, and contract status tracking are managed automatically through our GoHighLevel CRM and partner ledger. You have 24/7 visibility into your referral pipeline.",
  },
];

export default function AffiliatePage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        {/* Header */}
        <div className="container max-w-4xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Award className="size-3.5 text-primary" />
            <span>Northpeak Partner Network</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Monetize your network with 20% recurring commissions
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
            Partner with a premier digital growth agency. Introduce founders and
            operators to our growth systems and earn generous recurring revenue
            for 12 months.
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="container max-w-5xl mb-20">
          <div className="grid gap-6 md:grid-cols-3">
            {partnerSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className="border bg-card">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-xl">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-sm font-bold text-muted-foreground/60">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-foreground pt-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Interactive Earnings Calculator */}
        <div className="container max-w-4xl mb-20">
          <AffiliateCalculator />
        </div>

        {/* Backend Transparency Banner */}
        <div className="container max-w-4xl mb-12">
          <div className="rounded-2xl border border-dashed bg-muted/30 p-6 flex flex-col sm:flex-row items-center gap-4 text-xs">
            <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0">
              <Bot className="size-6" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-foreground text-sm">
                GoHighLevel Partner Attribution & Infrastructure Note
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Referral attribution, multi-touch cookie tracking, and payout
                ledger generation are configured through our GoHighLevel
                backend. Upon application approval, you will receive direct
                dashboard access to monitor clicks, inquiries, booked
                consultations, and verified commission balances in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="container max-w-4xl mb-24">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Apply to the Partner Network
            </h2>
            <p className="text-muted-foreground text-sm">
              Takes less than 2 minutes. Applications reviewed within 24 hours.
            </p>
          </div>
          <AffiliateForm />
        </div>

        {/* Affiliate FAQ */}
        <div className="container max-w-4xl">
          <DashedLine className="mb-16" />
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Partner Program FAQ
            </h2>
            <p className="text-muted-foreground text-sm">
              Common questions regarding tracking, commissions, and partnership
              terms.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {affiliateFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border rounded-xl px-4 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Background>
  );
}
