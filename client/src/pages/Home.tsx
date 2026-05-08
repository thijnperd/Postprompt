import { useState } from 'react';
import { useLocation } from 'wouter';
import Hero from '@/components/HeroEnhanced';
import FourPillars from '@/components/FourPillars';
import AIStamps from '@/components/AIStamps';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import FrameworkModal from '@/components/FrameworkModal';

export default function Home() {
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation('/contact');
  };

  const handleFrameworkClick = () => {
    setIsFrameworkOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <section id="hero">
        <Hero onContactClick={handleContactClick} />
      </section>
      <section id="how-it-works">
        <FourPillars onFrameworkClick={handleFrameworkClick} onContactClick={handleContactClick} />
      </section>
      <section id="ai-stamps">
        <AIStamps />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <Footer onContactClick={handleContactClick} />

      {/* Framework Modal */}
      <FrameworkModal isOpen={isFrameworkOpen} onClose={() => setIsFrameworkOpen(false)} />
    </div>
  );
}
