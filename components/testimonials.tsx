'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'Software Engineer',
    company: 'Tech Corp',
    content: 'The web development course completely transformed my career. The instructors are knowledgeable and the content is up-to-date with industry standards.',
    rating: 5,
    avatar: 'ET',
  },
  {
    name: 'Marcus Johnson',
    role: 'UX Designer',
    company: 'Design Studio',
    content: 'Amazing platform with high-quality courses. I learned UI/UX design from scratch and now I am working at my dream company. Highly recommend!',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Sarah Williams',
    role: 'Data Analyst',
    company: 'Analytics Inc',
    content: 'The data science courses are comprehensive and practical. I gained hands-on experience with real-world projects that prepared me for my career.',
    rating: 5,
    avatar: 'SW',
  },
  {
    name: 'David Chen',
    role: 'Marketing Manager',
    company: 'Brand Co',
    content: 'LearnHub helped me transition into digital marketing. The courses are engaging and the community support is exceptional. Worth every penny!',
    rating: 5,
    avatar: 'DC',
  },
  {
    name: 'Lisa Anderson',
    role: 'Product Manager',
    company: 'Startup XYZ',
    content: 'The flexibility to learn at my own pace was crucial. The course quality is outstanding and the instructors truly care about student success.',
    rating: 5,
    avatar: 'LA',
  },
  {
    name: 'James Rodriguez',
    role: 'Mobile Developer',
    company: 'App Studio',
    content: 'I completed the iOS development course and launched my first app within months. The practical approach and mentorship made all the difference.',
    rating: 5,
    avatar: 'JR',
  },
];

export function Testimonials() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What Our Students Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Read success stories from students who transformed their careers
          </p>
        </div>

        <div className={`mb-8 sm:mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted/50 border shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm sm:text-base">Video coming soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20 mb-3 sm:mb-4" />

                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs sm:text-sm">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
