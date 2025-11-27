import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Newsletter } from '@/components/newsletter';
import { ModernLearner } from '@/components/modern-learner';
import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Statistics />
        <ModernLearner />
        <FeaturedCourses />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
