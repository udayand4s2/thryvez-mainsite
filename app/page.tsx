import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { HowItWorks } from '@/components/how-it-works';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Instructors } from '@/components/instructors';
import { Newsletter } from '@/components/newsletter';
import { ModernLearner } from '@/components/modern-learner';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Statistics />
        <ModernLearner />
        <FeaturedCourses />
        <HowItWorks />
        <Instructors />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
