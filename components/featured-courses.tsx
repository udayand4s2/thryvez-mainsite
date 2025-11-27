'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Advanced Growth Strategy',
    description: 'Master the A-Z of growth with frameworks used at top startups',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    companies: ['CRED', 'Swiggy', 'Canva'],
  },
  {
    id: 2,
    title: 'Product Management Masterclass',
    description: 'Build products users love with proven PM methodologies',
    instructor: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1556157382-97eded2f9b72?w=400&h=400&fit=crop&crop=face',
    companies: ['Google', 'Meta', 'Stripe'],
  },
  {
    id: 3,
    title: 'Data-Driven Marketing',
    description: 'Scale your marketing with data and experimentation',
    instructor: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    companies: ['Netflix', 'Spotify', 'Airbnb'],
  },
];

export function FeaturedCourses() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="text-xs text-white/60 uppercase tracking-wider">Featured Courses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Brand focused courses
            </h2>
            <p className="text-white/60 mt-3 max-w-xl">
              Great brands aren't built on clicks. They're built on trust. Craft narratives that resonate, campaigns that stand out.
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 group">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.instructor}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Course</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg text-white group-hover:text-white/90 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span>Case studies from:</span>
                  {course.companies.map((company, i) => (
                    <span key={i} className="text-white/60">{company}{i < course.companies.length - 1 ? ',' : ''}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
