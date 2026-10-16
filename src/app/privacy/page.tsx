import type { Metadata } from "next";
import { Background } from "@/components/background";

export const metadata: Metadata = {
  title: "Privacy Policy | Northpeak Growth Partners",
  description:
    "Privacy Policy and data governance for Northpeak Growth Partners.",
};

export default function PrivacyPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40 container max-w-4xl space-y-8">
        <div className="space-y-3 border-b pb-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: October 16, 2026
          </p>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p>
            At Northpeak Growth Partners (&ldquo;Northpeak&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take
            the privacy and confidentiality of your enterprise data with extreme
            seriousness. This Privacy Policy describes how we collect, process,
            and protect your information when you access our website or engage
            our growth advisory and CRM automation services.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when expressing an interest in obtaining information about our
            services, submitting inquiry or audit forms, applying for our
            affiliate network, or otherwise contacting us. This includes your
            name, work email address, telephone number, company name, and
            marketing budget details.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            2. GoHighLevel (GHL) Processing & Backend Storage
          </h2>
          <p>
            Northpeak uses GoHighLevel (GHL) and encrypted enterprise cloud
            databases as our operational back office. When you submit inquiries
            through our forms, your data is securely transmitted via TLS
            encryption to our managed GHL pipeline for automated response
            routing and CRM attribution.
          </p>

          <h2 className="text-xl font-bold text-foreground">
            3. Analytics & First-Party Cookies
          </h2>
          <p>
            We utilize first-party cookies and anonymized tracking tools
            (including Google Analytics 4 and server-side conversion APIs) to
            analyze web traffic trends, prevent spam, and measure the
            effectiveness of our organic and paid acquisition campaigns.
          </p>

          <h2 className="text-xl font-bold text-foreground">4. Contact Us</h2>
          <p>
            If you have questions or comments regarding this policy, please
            email our data protection officer at{" "}
            <a
              href="mailto:privacy@northpeakgrowth.com"
              className="text-primary underline"
            >
              privacy@northpeakgrowth.com
            </a>
            .
          </p>
        </div>
      </div>
    </Background>
  );
}
