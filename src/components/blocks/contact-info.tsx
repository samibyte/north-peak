import {
  ArrowUpRight,
  Bot,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Card */}
      <Card className="border bg-card">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-foreground">
              Direct Contact
            </h3>
            <p className="text-muted-foreground text-xs">
              Reach our growth directors and client strategy team directly.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg mt-0.5">
                <Mail className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Inquiries & Audits
                </p>
                <a
                  href="mailto:hello@northpeakgrowth.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@northpeakgrowth.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg mt-0.5">
                <Phone className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Direct Line</p>
                <a
                  href="tel:+15553928174"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 392-8174
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg mt-0.5">
                <Clock className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Response Standard
                </p>
                <p className="text-muted-foreground">
                  Under 2 hours (Mon–Fri, 8am–7pm EST)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-lg mt-0.5">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="font-semibold text-foreground">HQ & Studios</p>
                <p className="text-muted-foreground">
                  New York, NY &bull; San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Direct Booking Card */}
      <Card className="border bg-gradient-to-br from-primary/5 via-card to-card">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Calendar className="size-4" />
            <span>Prefer an Immediate Call?</span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Skip the inbox. Choose a direct 30-minute growth strategy slot on
            our senior director&apos;s live calendar.
          </p>
          <Button variant="outline" className="w-full text-xs" asChild>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5"
            >
              Open Live Booking Calendar
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Backend Integration Note */}
      <div className="rounded-xl border border-dashed p-4 bg-muted/20 space-y-2 text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <Bot className="size-4 text-primary" />
          <span>GoHighLevel Backend Notice</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-[11px]">
          Inquiries routed through this frontend integrate directly with your
          GoHighLevel sub-account, triggering automated pipeline lead cards, SMS
          follow-up, and conversion attribution.
        </p>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground pt-1">
          <ShieldCheck className="size-3 text-primary" />
          <span>SOC2 & HIPAA Compliant Data Handling</span>
        </div>
      </div>
    </div>
  );
}
