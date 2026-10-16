import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="text-8xl font-bold text-muted-foreground/30">404</div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have moved or been removed.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/">
            <Button>
              <ArrowLeft className="size-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
