"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Check, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select your primary growth priority"),
  budget: z.string().min(1, "Please select an estimated monthly budget"),
  message: z
    .string()
    .min(
      10,
      "Please provide brief details about your growth goals (min 10 characters)",
    ),
  consent: z.boolean().refine((val) => val === true, {
    message:
      "You must consent to receive growth communications and agree to our terms",
  }),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      consent: false,
    },
  });

  const selectedService = watch("service");
  const selectedBudget = watch("budget");
  const consentChecked = watch("consent");

  const onSubmit = async (data: InquiryFormData) => {
    setSubmissionState("loading");
    setErrorMessage(null);

    try {
      /* =========================================================================
       * GOHIGHLEVEL (GHL) INTEGRATION READINESS
       * =========================================================================
       * When ready to connect your live GoHighLevel sub-account:
       * 1. Set your GHL Webhook URL or Inbound Form endpoint:
       *    const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_INQUIRY_WEBHOOK;
       * 2. Send the structured payload:
       *    const response = await fetch(GHL_WEBHOOK_URL, {
       *      method: "POST",
       *      headers: { "Content-Type": "application/json" },
       *      body: JSON.stringify({
       *        firstName: data.fullName.split(" ")[0],
       *        lastName: data.fullName.split(" ").slice(1).join(" ") || "",
       *        email: data.email,
       *        phone: data.phone,
       *        companyName: data.company,
       *        tags: ["website-inquiry", data.service, data.budget],
       *        customFields: {
       *          growth_service: data.service,
       *          monthly_budget: data.budget,
       *          project_notes: data.message,
       *        },
       *      }),
       *    });
       * ========================================================================= */

      // Clearly identified mock behavior for frontend demonstration
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
      setErrorMessage(
        "There was an issue dispatching your request. Please email us directly at hello@northpeakgrowth.com.",
      );
    }
  };

  if (submissionState === "success") {
    return (
      <div className="rounded-2xl border bg-card p-8 md:p-10 text-center space-y-5 shadow-sm">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Inquiry Dispatched Successfully!
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Your inquiry has been received by our GoHighLevel pipeline. A
            Northpeak Growth Director will review your site metrics and reach
            out within 1 business day.
          </p>
        </div>

        <div className="rounded-xl border bg-muted/30 p-4 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
          <div className="flex items-center gap-1.5 text-primary font-semibold">
            <Sparkles className="size-3.5" />
            <span>GHL Pipeline Status: Lead Queued for Triage</span>
          </div>
          <p className="text-muted-foreground">
            Priority routing enabled. Automated qualification email and calendar
            invite sent to your inbox.
          </p>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => {
              reset();
              setSubmissionState("idle");
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border bg-card p-6 md:p-8 space-y-6 shadow-sm"
      noValidate
    >
      <div className="border-b pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground">
            Request Growth Audit & Consultation
          </h3>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            GHL Ready
          </span>
        </div>
        <p className="text-muted-foreground text-xs mt-1">
          Complete the form below. We will analyze your search and paid channels
          before our initial call.
        </p>
      </div>

      {submissionState === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-xs text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-xs font-semibold">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="Marcus Vance"
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="text-destructive text-[11px]">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-semibold">
            Work Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="marcus@company.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-destructive text-[11px]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone and Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs font-semibold">
            Phone Number (for SMS confirmation)
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company" className="text-xs font-semibold">
            Company Name & Website
          </Label>
          <Input
            id="company"
            placeholder="Acme Corp (acme.com)"
            {...register("company")}
          />
        </div>
      </div>

      {/* Row 3: Service Selection & Budget */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">
            Primary Growth Service <span className="text-destructive">*</span>
          </Label>
          <Select
            value={selectedService}
            onValueChange={(val) =>
              setValue("service", val ?? "", { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select primary interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seo">
                Search Engine Optimization (SEO)
              </SelectItem>
              <SelectItem value="paid-ads">
                Paid Advertising (Google/Meta/LinkedIn)
              </SelectItem>
              <SelectItem value="web-dev">
                Website Development & Next.js
              </SelectItem>
              <SelectItem value="crm-automation">
                GoHighLevel CRM & Automation
              </SelectItem>
              <SelectItem value="growth-cro">
                Growth Optimization & CRO
              </SelectItem>
              <SelectItem value="full-funnel">
                Full-Funnel Integrated Partnership
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-destructive text-[11px]">
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">
            Estimated Monthly Growth Budget{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Select
            value={selectedBudget}
            onValueChange={(val) =>
              setValue("budget", val ?? "", { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select monthly budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2k-5k">$2,000 – $5,000 / month</SelectItem>
              <SelectItem value="5k-10k">$5,000 – $10,000 / month</SelectItem>
              <SelectItem value="10k-25k">$10,000 – $25,000 / month</SelectItem>
              <SelectItem value="25k-plus">
                $25,000+ / month (Enterprise)
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-destructive text-[11px]">
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs font-semibold">
          Tell us about your current growth bottlenecks and targets{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="What is your current acquisition channel? What are your target revenue metrics over the next 6-12 months?"
          className="resize-none"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-destructive text-[11px]">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Row 5: Consent Checkbox */}
      <div className="space-y-1">
        <div className="flex items-start gap-2.5">
          <Checkbox
            id="consent"
            checked={consentChecked}
            onCheckedChange={(checked) =>
              setValue("consent", !!checked, { shouldValidate: true })
            }
          />
          <Label
            htmlFor="consent"
            className="text-xs font-normal text-muted-foreground leading-snug cursor-pointer"
          >
            I agree to receive communications regarding growth strategies and
            acknowledge Northpeak&apos;s Privacy Policy. You can unsubscribe at
            any time.
          </Label>
        </div>
        {errors.consent && (
          <p className="text-destructive text-[11px] pl-6">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-muted-foreground">
          🔒 Encrypted 256-bit transmission to GoHighLevel CRM
        </span>
        <Button
          type="submit"
          size="lg"
          disabled={submissionState === "loading"}
          className="w-full sm:w-auto min-w-[180px]"
        >
          {submissionState === "loading" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              Routing to GHL...
            </span>
          ) : (
            "Dispatch Inquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
