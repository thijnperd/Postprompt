import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
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
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Navigation Bar */}
        <motion.nav
          className="flex justify-between items-center max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight"
          >
            PostPrompt<sup className="text-xs ml-1">®</sup>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden md:flex gap-8 items-center"
          >
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              AI Stamps
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </motion.div>

          <motion.button
            variants={itemVariants}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground font-medium hover:scale-105 transition-transform"
          >
            Get Started
          </motion.button>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            AI delivers.
            <br />
            <span className="text-accent">You decide.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Navigate the world of AI with confidence. We help you choose the right tool, ask the right questions, and verify the answers.
          </motion.p>

          <motion.button
            variants={itemVariants}
            className="liquid-glass-strong rounded-full px-8 md:px-12 py-3 md:py-4 text-base md:text-lg text-foreground font-medium hover:scale-105 transition-transform flex items-center gap-2"
          >
            Explore the Guide
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
