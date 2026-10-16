import {
  Bot,
  Calendar,
  Database,
  Layers,
  MessageSquare,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import { Background } from "@/components/background";
import { ServiceFeatures } from "@/components/blocks/service-features";
import { ServiceHero } from "@/components/blocks/service-hero";

export const metadata: Metadata = {
  title: "CRM & Automation Services (GoHighLevel) | Northpeak Growth Partners",
  description:
    "End-to-end GoHighLevel CRM setup, automated SMS/email lead nurturing, pipeline management, and closed-loop revenue tracking.",
};

const stats = [
  { value: "< 2 min", label: "Average Automated Lead Response Time" },
  { value: "+64%", label: "Appointment Show-Up Rate Increase" },
  { value: "100%", label: "Lead Attribution Through Pipeline Stages" },
  { value: "24/7", label: "Automated SMS & Email Nurture Coverage" },
];

const features = [
  {
    title: "Turnkey GoHighLevel (GHL) Architecture",
    description:
      "Custom GHL snapshot architecture tailored to your business model with customized stages, custom fields, tags, and user role management.",
    icon: Database,
  },
  {
    title: "Multi-Channel Automated Nurture Sequences",
    description:
      "Automated SMS, email, and voicemail drop workflows triggered dynamically by lead behavior, stage changes, or form submissions.",
    icon: MessageSquare,
  },
  {
    title: "Calendar Booking & Show-Up Automation",
    description:
      "Two-way Google/Outlook calendar synchronization with automated appointment confirmation, SMS reminders, and reschedule workflows.",
    icon: Calendar,
  },
  {
    title: "Intelligent Lead Scoring & Routing",
    description:
      "Score leads based on website interactions and form answers, instantly notifying your sales reps when a high-value prospect qualifies.",
    icon: Workflow,
  },
  {
    title: "Cross-Platform Webhook & API Integrations",
    description:
      "Connect your frontend website, Stripe, payment processors, Zapier/Make, and custom databases seamlessly into GoHighLevel.",
    icon: Layers,
  },
  {
    title: "Reputation & Review Generation",
    description:
      "Automated post-purchase and post-service review request campaigns across Google, Trustpilot, and Facebook to build public proof.",
    icon: Bot,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pipeline Audit & Mapping",
    desc: "Diagramming your entire customer journey from initial inquiry to closed deal and retention.",
  },
  {
    step: "02",
    title: "GHL Snapshot Engineering",
    desc: "Configuring pipelines, custom triggers, email/SMS copy templates, and notification routes.",
  },
  {
    step: "03",
    title: "Frontend & Webhook Wiring",
    desc: "Connecting website forms, calendars, and tracking pixels directly to your GoHighLevel backend.",
  },
  {
    step: "04",
    title: "Live Testing & Optimization",
    desc: "Running end-to-end sandbox tests, refining sequence timing, and training your internal sales team.",
  },
];

export default function CrmAutomationPage() {
  return (
    <Background>
      <div>
        <ServiceHero
          badge="GoHighLevel & Pipeline Automation"
          title="Turn every lead into booked revenue with automated CRM systems"
          description="Never lose a qualified lead again. We build robust GoHighLevel automation infrastructure that nurtures prospects 24/7 and closes deals on autopilot."
          icon={Bot}
          stats={stats}
          ctaText="Automate Your Pipeline"
        />

        <ServiceFeatures
          sectionTitle="Enterprise CRM & Workflow Automation"
          sectionSubtitle="GoHighLevel is the operational backbone of modern digital agencies. We build and maintain custom snapshots tailored to your sales process."
          features={features}
          processTitle="Our 4-Step Automation Implementation"
          processSteps={processSteps}
        />
      </div>
    </Background>
  );
}
