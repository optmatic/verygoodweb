import { ArrowRight, Star, Zap, Trophy } from "lucide-react";
import Link from "next/link";

export default function StatsSection() {
  return (
    <section className="w-full py-24 border-t border-white/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-[2fr,1fr] lg:gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-gray-900">
                <Trophy className="mr-2 h-3 w-3" />
                Top 1% Performance
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                Results That Speak <br />
                For Themselves
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-lg border border-white/20 bg-white/5">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <Star className="h-8 w-8 text-gray-900" />
                    <span className="text-lg font-bold text-gray-900">
                      Before / After
                    </span>
                  </div>
                  <div className="mt-6 grid gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Load Time
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-gray-900">
                            3.2s
                          </p>
                          <ArrowRight className="h-4 w-4 text-gray-900" />
                          <p className="text-2xl font-bold text-gray-900">
                            0.4s
                          </p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-[87%] rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Page Size
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-gray-900">
                            2.8MB
                          </p>
                          <ArrowRight className="h-4 w-4 text-gray-900" />
                          <p className="text-2xl font-bold text-gray-900">
                            0.3MB
                          </p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-[89%] rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Requests
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-gray-900">82</p>
                          <ArrowRight className="h-4 w-4 text-gray-900" />
                          <p className="text-2xl font-bold text-gray-900">12</p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-[85%] rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-white/20 bg-white/5">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <Zap className="h-8 w-8 text-gray-900" />
                    <span className="text-lg font-bold text-gray-900">
                      Performance Score
                    </span>
                  </div>
                  <div className="mt-6 space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Mobile</p>
                        <p className="text-sm font-bold text-gray-900">
                          98/100
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-[98%] rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Desktop</p>
                        <p className="text-sm font-bold text-gray-900">
                          100/100
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Core Web Vitals
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          Passed
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-white/20">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:mt-12">
            <div className="rounded-lg border border-white/20 bg-white/5 p-8">
              <blockquote className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  "They rebuilt our WordPress site as a static site. Load time
                  went from 3.2s to 0.4s. Our conversion rate increased by 42%.
                  No more security updates or maintenance fees."
                </p>
                <footer className="space-y-2">
                  <cite className="font-semibold text-gray-900 not-italic">
                    Sarah Johnson
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart Inc.
                  </p>
                </footer>
              </blockquote>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-green-500" />
                <p className="text-sm text-muted-foreground">
                  Average 89% reduction in load time
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-white" />
                <p className="text-sm text-muted-foreground">
                  42% increase in conversion rates
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-purple-500" />
                <p className="text-sm text-muted-foreground">
                  100% elimination of maintenance costs
                </p>
              </div>
            </div>

            <Link
              href="#case-studies"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
            >
              View all case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
