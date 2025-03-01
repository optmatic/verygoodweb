import { ArrowRight, Zap, Shield, Timer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <section className="container max-w-7xl mx-auto py-24 border-t border-white/20">
      <div className="px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr,1fr] lg:gap-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                <Zap className="mr-2 h-3 w-3" />
                96% Faster Than WordPress
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Static Sites. <br />
                Built Right. <br />
                No Exceptions.
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We build lightning-fast static websites that just work. No
                WordPress. No page builders. No monthly fees. Just clean,
                efficient code that loads in milliseconds.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="#pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="#examples">See Examples</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">0.4s</p>
                <p className="text-sm text-muted-foreground">
                  Average Load Time
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">A+</p>
                <p className="text-sm text-muted-foreground">Security Rating</p>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 lg:ml-auto">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative group overflow-hidden rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="space-y-2">
                  <Shield className="h-6 w-6 text-white" />
                  <h3 className="font-bold text-white">Rock-Solid Security</h3>
                  <p className="text-sm text-muted-foreground">
                    No database means no vulnerabilities. Static sites are
                    inherently secure.
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors rounded-lg" />
              </div>
              <div className="relative group overflow-hidden rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="space-y-2">
                  <Zap className="h-6 w-6 text-white" />
                  <h3 className="font-bold text-white">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-rendered pages load instantly. No server delays. No
                    database queries.
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors rounded-lg" />
              </div>
              <div className="relative group overflow-hidden rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="space-y-2">
                  <Timer className="h-6 w-6 text-white" />
                  <h3 className="font-bold text-white">Quick Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    From concept to launch in days, not weeks. Simple, efficient
                    process.
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors rounded-lg" />
              </div>
              <div className="relative group overflow-hidden rounded-lg border border-white/20 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="space-y-2">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                    <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                    <path d="M4 12H2" />
                    <path d="M10 12H8" />
                    <path d="M16 12h-2" />
                    <path d="M22 12h-2" />
                  </svg>
                  <h3 className="font-bold text-white">Zero Maintenance</h3>
                  <p className="text-sm text-muted-foreground">
                    No updates needed. No plugins to manage. No security
                    patches.
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/20 transition-colors rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
