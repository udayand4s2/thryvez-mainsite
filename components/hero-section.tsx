'use client';

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Over 50,000+ Students Learning
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Learn New Skills
              <span className="block text-primary mt-2">Anytime, Anywhere</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Join thousands of students learning from industry experts. Master in-demand skills and advance your career with our comprehensive courses.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-3xl opacity-50" />
                  <Button
                    size="lg"
                    className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-current" />
                  </Button>
                </div>
              </div>

              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">1,200+ Video Lessons</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">Learn at your pace</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg border animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-base sm:text-lg">🎓</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">Certificate Ready</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">Boost your career</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
