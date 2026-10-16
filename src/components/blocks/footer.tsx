import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  const services = [
    { name: "SEO Services", href: "/services/seo" },
    { name: "Paid Advertising", href: "/services/paid-advertising" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "CRM & Automation", href: "/services/crm-automation" },
    { name: "Growth Optimization", href: "/services/growth-optimization" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Affiliate Program", href: "/affiliate" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-24 lg:pt-32">
      {/* CTA Section */}
      <div className="container space-y-4 text-center">
        <div className="bg-primary/10 text-primary mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium">
          <TrendingUp className="size-3.5" />
          Ready to grow?
        </div>
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-muted-foreground">remarkable</span>
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Partner with Northpeak Growth Partners and unlock scalable, measurable
          growth for your business.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button size="lg" asChild>
            <Link href="/contact">Start Growing Today</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="container">
        <div className="grid gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary flex h-7 w-7 items-center justify-center rounded-lg">
                <TrendingUp className="text-primary-foreground size-4" />
              </div>
              <span className="font-semibold tracking-tight">Northpeak</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              A full-service digital growth agency helping ambitious businesses
              scale with precision.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center gap-0.5 text-sm font-medium transition-colors"
              >
                LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center gap-0.5 text-sm font-medium transition-colors"
              >
                Twitter <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="text-muted-foreground">
                hello@northpeakgrowth.com
              </li>
              <li className="text-muted-foreground">+1 (555) 000-0000</li>
              <li className="text-muted-foreground">
                Available Mon–Fri, 9am–6pm EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 pb-8 text-sm sm:flex-row">
          <p>© 2026 Northpeak Growth Partners. All rights reserved.</p>
          <div className="flex gap-4">
            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
