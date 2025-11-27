'use client';

import { useEffect, useRef, useState } from 'react';

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className="relative py-8 sm:py-12 overflow-hidden"
    >
      <div 
        className={`
          flex items-center justify-center gap-4
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-border" />
        <div className="flex gap-1.5">
          <div className={`w-2 h-2 rounded-full bg-primary/60 transition-all duration-500 delay-100 ${isVisible ? 'scale-100' : 'scale-0'}`} />
          <div className={`w-2 h-2 rounded-full bg-primary transition-all duration-500 delay-200 ${isVisible ? 'scale-100' : 'scale-0'}`} />
          <div className={`w-2 h-2 rounded-full bg-primary/60 transition-all duration-500 delay-300 ${isVisible ? 'scale-100' : 'scale-0'}`} />
        </div>
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-border" />
      </div>
    </div>
  );
}
