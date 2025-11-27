'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const featuredCourse = {
  title: 'Advanced Growth Strategy',
  description: "ThryvezX's flagship 4-week growth strategy designed to teach you the A - Z of Growth",
  companies: ['CRED', 'Swiggy', 'Canva', 'Zerodha', 'Google', 'Paytm', 'Flipkart'],
};

const courseCategories = [
  {
    tag: 'BRAND FOCUSED COURSES',
    title: 'Brand focused courses',
    description: "Great brands aren't built on clicks. They're built on trust. Craft narratives that resonate, campaigns that stand out, and brands that last.",
    courses: [
      {
        id: 1,
        title: 'Brand Strategy Fundamentals',
        instructor: 'Priya Sharma',
        role: 'Brand Director',
        company: 'Swiggy',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 2,
        title: 'Performance Marketing',
        instructor: 'Rahul Verma',
        role: 'Growth Lead',
        company: 'CRED',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 3,
        title: 'Content That Converts',
        instructor: 'Ananya Gupta',
        role: 'Content Head',
        company: 'Razorpay',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
      },
    ],
  },
  {
    tag: 'PRODUCT COURSES',
    title: 'Product management courses',
    description: 'Build products users love. Learn from PMs who have shipped features to millions of users at top companies.',
    courses: [
      {
        id: 4,
        title: 'Product Strategy 101',
        instructor: 'Vikram Singh',
        role: 'Product Lead',
        company: 'Google',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 5,
        title: 'User Research Mastery',
        instructor: 'Meera Nair',
        role: 'UX Research',
        company: 'Microsoft',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 6,
        title: 'Data-Driven PM',
        instructor: 'Arjun Patel',
        role: 'Senior PM',
        company: 'Meta',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
      },
    ],
  },
  {
    tag: 'GROWTH COURSES',
    title: 'Growth & strategy courses',
    description: 'Scale from 0 to 1 and beyond. Learn growth frameworks that have helped startups become unicorns.',
    courses: [
      {
        id: 7,
        title: 'Growth Hacking 101',
        instructor: 'Kiran Rao',
        role: 'Growth Head',
        company: 'Zerodha',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 8,
        title: 'Startup Scaling',
        instructor: 'Neha Kulkarni',
        role: 'COO',
        company: 'Meesho',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=face',
      },
      {
        id: 9,
        title: 'GTM Strategy',
        instructor: 'Amit Joshi',
        role: 'VP Strategy',
        company: 'Flipkart',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face',
      },
    ],
  },
];

export function CoursesContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white italic">
                {featuredCourse.title}
              </h1>
              <p className="text-white/60 text-lg">
                {featuredCourse.description}
              </p>
              <Button className="bg-white text-black hover:bg-white/90 font-semibold group">
                Explore Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="pt-4">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-3">50+ Case Studies Covered</p>
                <div className="flex flex-wrap items-center gap-4">
                  {featuredCourse.companies.map((company) => (
                    <span key={company} className="text-white/50 text-sm font-medium hover:text-white/70 transition-colors">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="text-[200px] font-bold text-white/5 select-none">X</div>
            </div>
          </div>
        </div>

        {courseCategories.map((category, categoryIndex) => (
          <div key={category.tag} className="mb-20 lg:mb-28">
            <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 + categoryIndex * 100}ms` }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs text-white/60 uppercase tracking-wider">{category.tag}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {category.title}
              </h2>
              <p className="text-white/60 max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + categoryIndex * 100 + index * 50}ms` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.instructor}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-white/50 uppercase tracking-wider mb-2 block">Course</span>
                      <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-white/90 transition-colors">
                        {course.title}
                      </h3>
                      <div className="text-white/60 text-sm">
                        <p className="font-medium text-white/80">{course.instructor}</p>
                        <p>{course.role}, {course.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
