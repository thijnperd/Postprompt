import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const navLinks = [
    { label: 'Hoe het werkt', href: '#how-it-works' },
    { label: 'AI Tools', href: '#ai-stamps' },
    { label: 'Over ons', href: '#about' },
    { label: 'Contact', href: '#newsletter' },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        {/* Navigation Bar */}
        <motion.nav
          className="flex justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight"
          >
            PostPrompt
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex gap-6 md:gap-8 items-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.button
            variants={itemVariants}
            className="hidden md:block liquid-glass rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground font-medium hover:scale-105 transition-transform"
          >
            Aan de slag
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden liquid-glass rounded-full p-2 text-foreground hover:scale-105 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-0 right-0 z-40 liquid-glass mx-4 rounded-lg p-4 md:hidden"
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full liquid-glass rounded-full px-4 py-2 text-sm text-foreground font-medium hover:scale-105 transition-transform mt-4">
                Aan de slag
              </button>
            </div>
          </motion.div>
        )}

        {/* Hero Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight mb-4 md:mb-6"
          >
            AI bezorgt.
            <br />
            <span className="text-accent">Jij beslist.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mb-6 md:mb-8 leading-relaxed px-2"
          >
            Navigeer door de wereld van AI met vertrouwen. Wij helpen je het juiste gereedschap kiezen, de juiste vragen stellen, en de antwoorden controleren.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={onContactClick}
            className="liquid-glass-strong rounded-full px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg text-foreground font-medium hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap"
          >
            Ontdek onze aanpak
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          variants={itemVariants}
          className="text-center text-xs sm:text-sm text-muted-foreground"
        >
          Scroll om meer te ontdekken
        </motion.div>
      </div>
    </section>
  );
}
