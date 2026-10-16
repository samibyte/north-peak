"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Award, Check, DollarSign, Loader2 } from "lucide-react";
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

const affiliateSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  websiteUrl: z
    .string()
    .min(3, "Please provide your website, LinkedIn, or community URL"),
  partnerType: z.string().min(1, "Please select your primary partner category"),
  monthlyReferrals: z
    .string()
    .min(1, "Please estimate expected monthly referrals"),
  payoutMethod: z.string().min(1, "Please select your preferred payout method"),
  promotionPlan: z
    .string()
    .min(
      10,
      "Please briefly explain how you plan to refer clients (min 10 characters)",
    ),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Northpeak Affiliate Program Terms",
  }),
});

type AffiliateFormData = z.infer<typeof affiliateSchema>;

export function AffiliateForm() {
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
  } = useForm<AffiliateFormData>({
    resolver: zodResolver(affiliateSchema),
    defaultValues: {
      fullName: "",
      email: "",
      websiteUrl: "",
      partnerType: "",
      monthlyReferrals: "",
      payoutMethod: "bank-transfer",
      promotionPlan: "",
      agreeTerms: false,
    },
  });

  const selectedPartnerType = watch("partnerType");
  const selectedMonthlyReferrals = watch("monthlyReferrals");
  const selectedPayoutMethod = watch("payoutMethod");
  const agreeTermsChecked = watch("agreeTerms");

  const onSubmit = async (data: AffiliateFormData) => {
    setSubmissionState("loading");
    setErrorMessage(null);

    try {
      /* =========================================================================
       * GOHIGHLEVEL (GHL) / AFFILIATE ENGINE INTEGRATION READINESS
       * =========================================================================
       * Connect this form to your GoHighLevel Affiliate Manager webhook or
       * third-party affiliate portal (FirstPromoter, Rewardful, PartnerStack):
       *
       * const GHL_AFFILIATE_ENDPOINT = process.env.NEXT_PUBLIC_GHL_AFFILIATE_WEBHOOK;
       * await fetch(GHL_AFFILIATE_ENDPOINT, {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify({
       *     name: data.fullName,
       *     email: data.email,
       *     channel: data.websiteUrl,
       *     partnerType: data.partnerType,
       *     volumeTier: data.monthlyReferrals,
       *     payoutPreference: data.payoutMethod,
       *     strategyNotes: data.promotionPlan,
       *     tags: ["affiliate-applicant", data.partnerType],
       *   }),
       * });
       * ========================================================================= */

      // Clearly identified mock behavior for frontend demonstration
      await new Promise((resolve) => setTimeout(resolve, 1300));

      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
      setErrorMessage(
        "There was a problem submitting your affiliate application. Please reach out to affiliates@northpeakgrowth.com.",
      );
    }
  };

  if (submissionState === "success") {
    return (
      <div className="rounded-2xl border bg-card p-8 md:p-10 text-center space-y-5 shadow-sm">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Award className="size-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Affiliate Application Submitted!
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
            Thank you for applying to the Northpeak Growth Partners Affiliate
            Network. Our partner operations team reviews applications within
            24–48 hours.
          </p>
        </div>

        <div className="rounded-xl border bg-muted/30 p-4 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
          <div className="flex items-center gap-1.5 text-primary font-semibold">
            <DollarSign className="size-3.5" />
            <span>Partner Status: Application Queued for Review</span>
          </div>
          <p className="text-muted-foreground">
            Once approved, your unique GHL tracking link, custom referral
            dashboard login, and marketing collateral will be delivered via
            email.
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
            Submit Another Application
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
            Affiliate & Referral Partner Application
          </h3>
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            20% Recurring
          </span>
        </div>
        <p className="text-muted-foreground text-xs mt-1">
          Join high-performing consultants, agency owners, and digital creators
          who earn recurring monthly commissions.
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
          <Label htmlFor="affiliateName" className="text-xs font-semibold">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="affiliateName"
            placeholder="Alexandra Hayes"
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
          <Label htmlFor="affiliateEmail" className="text-xs font-semibold">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="affiliateEmail"
            type="email"
            placeholder="alexandra@hayesconsulting.com"
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

      {/* Row 2: Website / Social and Partner Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="websiteUrl" className="text-xs font-semibold">
            Website, LinkedIn, or Channel URL{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Input
            id="websiteUrl"
            placeholder="https://linkedin.com/in/alexandrahayes"
            {...register("websiteUrl")}
            aria-invalid={!!errors.websiteUrl}
          />
          {errors.websiteUrl && (
            <p className="text-destructive text-[11px]">
              {errors.websiteUrl.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">
            Partner Profile <span className="text-destructive">*</span>
          </Label>
          <Select
            value={selectedPartnerType}
            onValueChange={(val) =>
              setValue("partnerType", val ?? "", { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select partner type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="marketing-agency">
                Agency Owner / Freelancer
              </SelectItem>
              <SelectItem value="management-consultant">
                Business / Strategy Consultant
              </SelectItem>
              <SelectItem value="content-creator">
                Content Creator / Podcaster
              </SelectItem>
              <SelectItem value="saas-founder">
                SaaS Founder / Tech Partner
              </SelectItem>
              <SelectItem value="vc-angel">
                VC / Angel Investor / Incubator
              </SelectItem>
              <SelectItem value="other">Other Growth Network</SelectItem>
            </SelectContent>
          </Select>
          {errors.partnerType && (
            <p className="text-destructive text-[11px]">
              {errors.partnerType.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Expected Referrals and Payout Method */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">
            Expected Referrals / Quarter{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Select
            value={selectedMonthlyReferrals}
            onValueChange={(val) =>
              setValue("monthlyReferrals", val ?? "", { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select expected volume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1 – 2 qualified clients</SelectItem>
              <SelectItem value="3-5">3 – 5 qualified clients</SelectItem>
              <SelectItem value="6-10">6 – 10 qualified clients</SelectItem>
              <SelectItem value="10+">
                10+ clients (Enterprise Partner Tier)
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.monthlyReferrals && (
            <p className="text-destructive text-[11px]">
              {errors.monthlyReferrals.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold">
            Preferred Payout Method <span className="text-destructive">*</span>
          </Label>
          <Select
            value={selectedPayoutMethod}
            onValueChange={(val) =>
              setValue("payoutMethod", val ?? "", { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select payout method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank-transfer">
                Direct ACH / Bank Wire Transfer
              </SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
              <SelectItem value="stripe">Stripe Connect</SelectItem>
            </SelectContent>
          </Select>
          {errors.payoutMethod && (
            <p className="text-destructive text-[11px]">
              {errors.payoutMethod.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 4: Promotion Strategy */}
      <div className="space-y-1.5">
        <Label htmlFor="promotionPlan" className="text-xs font-semibold">
          How do you plan to introduce clients to Northpeak?{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="promotionPlan"
          rows={3}
          placeholder="e.g., Warm email introductions to our consulting clients, newsletter mentions, or podcast sponsorships."
          className="resize-none"
          {...register("promotionPlan")}
          aria-invalid={!!errors.promotionPlan}
        />
        {errors.promotionPlan && (
          <p className="text-destructive text-[11px]">
            {errors.promotionPlan.message}
          </p>
        )}
      </div>

      {/* Row 5: Agreement Checkbox */}
      <div className="space-y-1">
        <div className="flex items-start gap-2.5">
          <Checkbox
            id="agreeTerms"
            checked={agreeTermsChecked}
            onCheckedChange={(checked) =>
              setValue("agreeTerms", !!checked, { shouldValidate: true })
            }
          />
          <Label
            htmlFor="agreeTerms"
            className="text-xs font-normal text-muted-foreground leading-snug cursor-pointer"
          >
            I agree to the Northpeak Affiliate Program Terms. I understand
            commissions are paid monthly on verified collected client fees for
            12 months per active account.
          </Label>
        </div>
        {errors.agreeTerms && (
          <p className="text-destructive text-[11px] pl-6">
            {errors.agreeTerms.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-muted-foreground">
          GoHighLevel Partner Tracking & Attribution Engine
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
              Submitting Application...
            </span>
          ) : (
            "Submit Affiliate Application"
          )}
        </Button>
      </div>
    </form>
  );
}
