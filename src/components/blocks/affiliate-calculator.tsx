"use client";

import { CheckCircle2, DollarSign, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function AffiliateCalculator() {
  const [referrals, setReferrals] = useState(3);
  const avgMonthlyFee = 4950;
  const commissionRate = 0.2; // 20%
  const monthlyPerClient = avgMonthlyFee * commissionRate; // $990
  const monthlyEarnings = referrals * monthlyPerClient;
  const annualEarnings = monthlyEarnings * 12;

  return (
    <Card className="border bg-card shadow-sm overflow-hidden">
      <div className="bg-primary/5 border-b p-6 md:p-8">
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <TrendingUp className="size-4" />
          <span>Interactive Referral Earnings Calculator</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Calculate Your Passive Recurring Commissions
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm mt-1 max-w-xl">
          Based on our standard $4,950/month Growth Accelerator retainer at 20%
          recurring commission for 12 months.
        </p>
      </div>

      <CardContent className="p-6 md:p-8 space-y-8">
        {/* Slider Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Users className="size-4 text-primary" />
              Active Clients Referred:
            </label>
            <span className="text-2xl font-bold font-mono text-primary bg-primary/10 px-3 py-0.5 rounded-lg">
              {referrals} {referrals === 1 ? "Client" : "Clients"}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={15}
            step={1}
            value={referrals}
            onChange={(e) => setReferrals(Number(e.target.value))}
            className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
            <span>1 client</span>
            <span>5 clients</span>
            <span>10 clients</span>
            <span>15 clients</span>
          </div>
        </div>

        {/* Output Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-muted/40 p-5 space-y-1">
            <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
              <DollarSign className="size-3.5 text-primary" /> Monthly Recurring
              Payout
            </span>
            <p className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              ${monthlyEarnings.toLocaleString()}
              <span className="text-xs font-normal text-muted-foreground ml-1">
                /mo
              </span>
            </p>
            <p className="text-[11px] text-muted-foreground pt-1">
              Direct deposit on the 1st of every month via ACH or PayPal.
            </p>
          </div>

          <div className="rounded-xl border bg-primary/10 p-5 space-y-1">
            <span className="text-xs text-primary font-semibold flex items-center gap-1">
              <TrendingUp className="size-3.5" /> 12-Month Contract Total
            </span>
            <p className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              ${annualEarnings.toLocaleString()}
              <span className="text-xs font-normal text-primary/80 ml-1">
                /yr
              </span>
            </p>
            <p className="text-[11px] text-muted-foreground pt-1">
              Guaranteed 12-month attribution window per active retainer.
            </p>
          </div>
        </div>

        {/* Benefits checklist */}
        <div className="grid sm:grid-cols-3 gap-3 border-t pt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary shrink-0" />
            <span>90-Day Cookie Tracking Window</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary shrink-0" />
            <span>Dedicated Partner Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary shrink-0" />
            <span>Co-Branded Sales Decks & Audits</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
