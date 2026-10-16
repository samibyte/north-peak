import type { Metadata } from "next";
import { Background } from "@/components/background";

export const metadata: Metadata = {
  title: "Terms of Service | Northpeak Growth Partners",
  description:
    "Terms of Service and client engagement agreements for Northpeak Growth Partners.",
};

export default function TermsPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40 container max-w-4xl space-y-8">
        <div className="space-y-3 border-b pb-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: October 16, 2026
          </p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to Northpeak Growth Partners. By accessing our website or
            retaining our digital growth, SEO, paid media, website development,
            or CRM automation services, you agree to be bound by these Terms of
            Service.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Agency Services & Retainers
          </h2>
          <p>
            Northpeak provides bespoke digital growth consulting, media
            management, search optimization, and GoHighLevel CRM implementation.
            Specific deliverables, KPI targets, and payment schedules are
            governed by individual client statements of work (SOWs).
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. Client Ad Accounts & Spend
          </h2>
          <p>
            All direct advertising costs incurred on third-party platforms
            (Google Ads, Meta Ads, LinkedIn Ads, etc.) are billed directly by
            those platforms to the client&apos;s payment methods. Northpeak
            maintains administrative access to execute campaigns on the
            client&apos;s behalf.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            3. Intellectual Property
          </h2>
          <p>
            Upon full settlement of retainer invoices, all bespoke landing page
            designs, ad creatives, copy assets, and custom GoHighLevel
            automations produced specifically for the client become the sole
            property of the client.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Inquiries</h2>
          <p>
            For questions regarding our service agreements, contact us at{" "}
            <a
              href="mailto:legal@northpeakgrowth.com"
              className="text-primary underline"
            >
              legal@northpeakgrowth.com
            </a>
            .
          </p>
        </div>
      </div>
    </Background>
  );
}
