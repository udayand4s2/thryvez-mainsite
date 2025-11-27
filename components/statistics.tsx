'use client';

import { Users, BookOpen, GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Students',
    description: 'Learning every day',
  },
  {
    icon: BookOpen,
    value: '10K+',
    label: 'Online Courses',
    description: 'Across all categories',
  },
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Expert Instructors',
    description: 'Industry professionals',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    description: 'Course completion',
  },
];

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of learners achieving their goals
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-background border shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all">
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{stat.label}</div>
              <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
