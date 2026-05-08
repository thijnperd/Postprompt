import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="relative min-h-screen py-24 md:py-40 px-6 md:px-8 lg:px-12 bg-background flex items-center justify-center overflow-hidden">
      {/* Background Envelope SVG */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0.03 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      >
        <g stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="50" y="75" width="300" height="150" rx="10" />
          <path d="M 50 75 L 200 150 L 350 75" />
          <path d="M 50 75 L 200 150 L 350 75 L 350 225 L 50 225 Z" />
        </g>
      </motion.svg>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Vers uit de <span className="text-accent">brievenbus.</span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elke week: welke AI, waarvoor, met welke prompt — en wat je daarna doet. Bezorgd. Geen hype.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <input
            type="email"
            placeholder="jouw@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 bg-background border-b-2 border-accent/30 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
            required
          />
          <button
            type="submit"
            className="liquid-glass-strong rounded-full px-8 py-3 text-foreground font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {submitted ? 'Ingeschreven!' : 'Inschrijven'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        {/* Disclaimer */}
        <motion.p
          className="text-xs md:text-sm text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI schrijft de brief. Jij tekent hem. Controleer alles voordat je het verstuurt.
        </motion.p>
      </motion.div>
    </section>
  );
}
