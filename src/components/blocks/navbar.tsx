"use client";

import {
  Bot,
  ChevronDown,
  ChevronRight,
  Code2,
  Gauge,
  Moon,
  MousePointerClick,
  Search,
  Sun,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "SEO Services",
    href: "/services/seo",
    description: "Drive organic traffic with data-driven search strategies.",
    icon: Search,
  },
  {
    title: "Paid Advertising",
    href: "/services/paid-advertising",
    description: "Maximize ROI with targeted PPC and social campaigns.",
    icon: MousePointerClick,
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    description: "High-performance websites built to convert.",
    icon: Code2,
  },
  {
    title: "CRM & Automation",
    href: "/services/crm-automation",
    description: "Automate your pipeline and nurture leads at scale.",
    icon: Bot,
  },
  {
    title: "Growth Optimization",
    href: "/services/growth-optimization",
    description: "Unlock sustainable growth with a full-funnel approach.",
    icon: Gauge,
  },
];

const ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdownItems: services,
  },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header
      className={cn(
        "bg-background/80 fixed left-1/2 z-50 w-[min(92%,900px)] -translate-x-1/2 rounded-full border backdrop-blur-md transition-all duration-300",
        "top-4 lg:top-6",
      )}
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary flex h-7 w-7 items-center justify-center rounded-lg">
              <TrendingUp className="text-primary-foreground size-4" />
            </div>
            <span className="text-foreground font-semibold tracking-tight">
              Northpeak
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-2 text-sm font-medium">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[480px] p-3">
                      <li className="mb-2 px-2 py-1">
                        <span className="text-muted-foreground font-mono text-xs font-medium tracking-wide uppercase">
                          Our Services
                        </span>
                      </li>
                      <div className="grid grid-cols-2 gap-1">
                        {link.dropdownItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <NavigationMenuLink
                                render={
                                  <Link
                                    href={item.href}
                                    className="hover:bg-accent group flex items-start gap-3 rounded-lg p-3 transition-colors"
                                  >
                                    <div className="bg-primary/10 text-primary mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
                                      <Icon className="size-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium transition-transform duration-200 group-hover:translate-x-0.5">
                                        {item.title}
                                      </div>
                                      <p className="text-muted-foreground mt-0.5 text-xs leading-snug">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                }
                              ></NavigationMenuLink>
                            </li>
                          );
                        })}
                      </div>
                      <li className="mt-2 border-t pt-2">
                        <NavigationMenuLink
                          render={
                            <Link
                              href="/services"
                              className="text-primary hover:bg-accent flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                            >
                              View all services{" "}
                              <ChevronRight className="size-4" />
                            </Link>
                          }
                        ></NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-2 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="max-lg:hidden">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm" className="hidden lg:flex">
              Get Started
            </Button>
          </Link>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun className="size-4 dark:hidden" aria-hidden="true" />
            <Moon className="hidden size-4 dark:block" aria-hidden="true" />
          </Button>

          {/* Hamburger (Mobile) */}
          <button
            type="button"
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "bg-background fixed inset-x-4 top-[calc(100%+0.75rem)] flex flex-col rounded-2xl border p-5 shadow-lg transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="py-3 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-foreground flex w-full items-center justify-between text-sm font-medium"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label ? "rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-3 max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="bg-muted/50 space-y-1 rounded-xl p-2">
                    {link.dropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="hover:bg-accent flex items-center gap-3 rounded-lg p-2.5 transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-md">
                            <Icon className="size-3.5" />
                          </div>
                          <div className="text-foreground text-sm font-medium">
                            {item.title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-foreground hover:text-primary py-3 text-sm font-medium transition-colors first:pt-0 last:pb-0",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="mt-4 flex gap-2 border-t pt-4">
          <Link
            href="/contact"
            className="flex-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button variant="outline" size="sm" className="w-full">
              Contact Us
            </Button>
          </Link>
          <Link
            href="/contact"
            className="flex-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
