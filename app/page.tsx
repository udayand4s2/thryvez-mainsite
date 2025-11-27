import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedCourses } from '@/components/featured-courses';
import { Statistics } from '@/components/statistics';
import { Testimonials } from '@/components/testimonials';
import { Newsletter } from '@/components/newsletter';
import { ModernLearner } from '@/components/modern-learner';
import { SectionDivider } from '@/components/section-divider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <Statistics />
        <SectionDivider />
        <ModernLearner />
        <SectionDivider />
        <FeaturedCourses />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
