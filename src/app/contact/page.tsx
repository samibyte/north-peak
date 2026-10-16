import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ContactForm } from "@/components/blocks/contact-form";
import { ContactInfo } from "@/components/blocks/contact-info";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "Contact Us & Request Growth Audit | Northpeak Growth Partners",
  description:
    "Get in touch with Northpeak Growth Partners. Claim your free comprehensive SEO, paid ads, and CRM pipeline audit.",
};

export default function ContactPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-40">
        {/* Header */}
        <div className="container max-w-4xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            Zero-Obligation Consultation
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Let&apos;s build your revenue engine
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
            Whether you want to scale search authority, maximize ad ROAS, or
            deploy turnkey GoHighLevel pipeline automation, we are ready to dive
            in.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* FAQ below */}
        <div className="mt-20">
          <FAQ className="pt-0 lg:pt-10" />
        </div>
      </div>
    </Background>
  );
}
