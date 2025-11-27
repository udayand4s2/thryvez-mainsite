'use client';

import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ModernLearner() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible1(true);
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible2(true);
      },
      { threshold: 0.2 }
    );

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={section1Ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          <div className={`space-y-6 transition-all duration-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Made for the
              <span className="block text-white/60">modern learner</span>
            </h2>
            
            <p className="text-lg text-white/60 max-w-lg">
              You're serious about growth. We're serious about giving you the tools, frameworks, and network to accelerate your career.
            </p>

            <div className="space-y-4 pt-4">
              {['Live sessions with industry experts', 'Peer-to-peer learning community', 'Real-world case studies & projects'].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Interactive Learning</h3>
                  <p className="text-white/50 text-sm">Engage with live cohorts and get hands-on experience</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div ref={section2Ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`order-2 lg:order-1 relative transition-all duration-700 delay-200 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Career Growth</h3>
                  <p className="text-white/50 text-sm">Get mentorship and unlock new opportunities</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
            </div>
          </div>

          <div className={`order-1 lg:order-2 space-y-6 transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              More than just
              <span className="block text-white/60">online courses</span>
            </h2>
            
            <p className="text-lg text-white/60 max-w-lg">
              We're building a community of ambitious professionals who learn together, grow together, and help each other succeed.
            </p>

            <div className="space-y-4 pt-4">
              {['Exclusive networking events', 'Job & opportunity board', '1:1 mentorship matching'].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
