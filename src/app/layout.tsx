import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Northpeak Growth Partners | Digital Growth Agency",
    template: "%s | Northpeak Growth Partners",
  },
  description:
    "Northpeak Growth Partners is a professional digital growth agency offering SEO, paid advertising, website development, CRM automation, and growth optimization.",
  keywords: [
    "digital growth agency",
    "SEO services",
    "paid advertising",
    "website development",
    "CRM automation",
    "growth optimization",
    "digital marketing",
  ],
  authors: [{ name: "Northpeak Growth Partners" }],
  creator: "Northpeak Growth Partners",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Northpeak Growth Partners | Digital Growth Agency",
    description:
      "SEO, paid advertising, website development, CRM automation, and growth optimization for ambitious businesses.",
    siteName: "Northpeak Growth Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northpeak Growth Partners | Digital Growth Agency",
    description:
      "SEO, paid advertising, website development, CRM automation, and growth optimization for ambitious businesses.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-full antialiased", inter.variable, "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
