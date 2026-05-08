import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-40 px-6 md:px-8 lg:px-12 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Over PostPrompt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            We helpen professionals, ondernemers en nieuwsgierige geesten AI slim in te zetten. Niet als vervanger van menselijk denken, maar als versterker ervan.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="p-8 rounded-xl liquid-glass">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Het probleem
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                AI-tools groeien sneller dan we ze kunnen begrijpen. ChatGPT, Claude, Midjourney — elk heeft sterke punten en blinde vlekken. De meeste mensen gebruiken ze verkeerd, of helemaal niet.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-xl liquid-glass">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Onze aanpak
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We geven je geen hype, maar <span className="font-serif italic text-accent">praktische kennis</span>. Welke AI voor welke taak. Hoe je prompts schrijft die werken. En hoe je resultaten controleert voordat je ze verstuurt.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="liquid-glass rounded-xl p-8"
            >
              <h4 className="text-lg md:text-xl font-serif font-bold text-foreground mb-6">
                Voor wie?
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span className="text-sm md:text-base text-muted-foreground">Professionals die AI willen gebruiken zonder fouten</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span className="text-sm md:text-base text-muted-foreground">Ondernemers die efficiënter willen werken</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span className="text-sm md:text-base text-muted-foreground">Teams die AI-workflows willen opzetten</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="liquid-glass rounded-xl p-8"
            >
              <h4 className="text-lg md:text-xl font-serif font-bold text-foreground mb-6">
                Wat je leert
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base text-muted-foreground">Welke AI voor welke taak</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base text-muted-foreground">Effectieve prompts schrijven</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-sm md:text-base text-muted-foreground">Resultaten controleren en verbeteren</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 md:mt-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Klaar om AI slim in te zetten?
          </p>
          <button className="liquid-glass-strong rounded-full px-8 md:px-12 py-3 md:py-4 text-base md:text-lg text-foreground font-medium hover:scale-105 transition-transform inline-flex items-center gap-2">
            Neem contact op
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
