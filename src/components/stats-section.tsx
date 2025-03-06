import { ArrowRight, Star, Zap, Trophy } from "lucide-react";
import Link from "next/link";
import Button3d from "@/components/button";
export default function StatsSection() {
  return (
    <section className="w-full py-24 border-t border-deepGreen/20 bg-paleGreen/10">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-[2fr,1fr]">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex bg-lightGreen font-semibold items-center rounded-full px-3 py-1 text-sm text-deepGreen">
                <Trophy className="mr-2 h-3 w-3" />
                Top 1% Performance
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-deepGreen sm:text-5xl">
                Results That Speak <br />
                For Themselves
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="intro-panel">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <Star className="h-8 w-8 text-deepGreen" />
                    <span className="text-lg font-bold text-deepGreen">
                      Before / After
                    </span>
                  </div>
                  <div className="mt-6 grid gap-2">
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-dark">Load Time</p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-deepGreen">
                            3.2s
                          </p>
                          <ArrowRight className="h-4 w-4 text-deepGreen" />
                          <p className="text-2xl font-bold text-deepGreen">
                            0.4s
                          </p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-[87%] rounded-full bg-lightGreen" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-dark">Page Size</p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-deepGreen">
                            2.8MB
                          </p>
                          <ArrowRight className="h-4 w-4 text-deepGreen" />
                          <p className="text-2xl font-bold text-deepGreen">
                            0.3MB
                          </p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-[89%] rounded-full bg-lightGreen" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-dark">Requests</p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-bold text-deepGreen">
                            82
                          </p>
                          <ArrowRight className="h-4 w-4 text-deepGreen" />
                          <p className="text-2xl font-bold text-deepGreen">
                            12
                          </p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-[85%] rounded-full bg-lightGreen" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-panel">
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <Zap className="h-8 w-8 text-deepGreen" />
                    <span className="text-lg font-bold text-deepGreen">
                      Performance Score
                    </span>
                  </div>
                  <div className="mt-6 space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-dark">Mobile</p>
                        <p className="text-sm font-bold text-deepGreen">
                          98/100
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-[98%] rounded-full bg-lightGreen" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-dark">Desktop</p>
                        <p className="text-sm font-bold text-deepGreen">
                          100/100
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-full rounded-full bg-lightGreen" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-dark">Core Web Vitals</p>
                        <p className="text-sm font-bold text-deepGreen">
                          Passed
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-deepGreen/20">
                        <div className="h-full w-full rounded-full bg-lightGreen" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:mt-12">
            <div className="intro-panel p-8">
              <blockquote className="space-y-6">
                <p className="text-lg text-dark font-geist-sans">
                  "They rebuilt our WordPress site as a static site. Load time
                  went from 3.2s to 0.4s. Our conversion rate increased by 42%.
                  No more security updates or maintenance fees."
                </p>
                <footer className="space-y-2">
                  <cite className="font-semibold text-deepGreen not-italic">
                    Sarah Johnson
                  </cite>
                  <p className="text-sm text-dark">CEO, TechStart Inc.</p>
                </footer>
              </blockquote>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-lightGreen" />
                <p className="text-sm text-dark font-geist-sans">
                  Average 89% reduction in load time
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-lightGreen" />
                <p className="text-sm text-dark font-geist-sans">
                  42% increase in conversion rates
                </p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-1 rounded-full bg-lightGreen" />
                <p className="text-sm text-dark font-geist-sans">
                  100% elimination of maintenance costs
                </p>
              </div>
            </div>

            <Button3d text="See all case studies" href="#examples" />
          </div>
        </div>
      </div>
    </section>
  );
}
