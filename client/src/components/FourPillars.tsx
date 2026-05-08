import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Welke AI',
    description:
      'Welk gereedschap past bij jouw doel? Elke AI heeft een specialiteit — gebruik je de verkeerde en je pakketje komt nooit aan.',
    icon: '→',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    number: '02',
    title: 'Wanneer',
    description:
      'In welk stadium breng je AI erin? Timing is net zo belangrijk als de keuze van het gereedschap.',
    icon: '→',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    number: '03',
    title: 'Hoe',
    description:
      'Hoe schrijf je een effectieve prompt? De kwaliteit van je instructie bepaalt de kwaliteit van het resultaat.',
    icon: '→',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    number: '04',
    title: 'Wat nu',
    description:
      'Wat doe je met het resultaat? AI schrijft de brief. Jij tekent hem.',
    icon: '→',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

interface FourPillarsProps {
  onFrameworkClick?: () => void;
  onContactClick?: () => void;
}

export default function FourPillars({ onFrameworkClick, onContactClick }: FourPillarsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="how-it-works" className="relative py-24 md:py-40 px-6 md:px-8 lg:px-12 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base text-accent font-mono mb-4 uppercase tracking-wider">
            Vier pijlers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Hoe het werkt
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Een duidelijk framework om AI met vertrouwen in te zetten.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Container */}
              <motion.div
                className={`relative h-full p-8 rounded-2xl liquid-glass border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:liquid-glass-strong`}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="text-4xl md:text-5xl font-serif font-bold text-accent/40 group-hover:text-accent/60 transition-colors"
                      whileHover={{ scale: 1.15 }}
                    >
                      {pillar.number}
                    </motion.div>
                    <motion.div
                      className="text-3xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {pillar.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 uppercase tracking-wider">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                    {pillar.description}
                  </p>

                  {/* Arrow Indicator - Clickable */}
                  <motion.button
                    onClick={onFrameworkClick}
                    className="flex items-center gap-2 text-accent text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity hover:text-accent/80"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Ontdek meer</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  }}
                />
              </motion.div>

              {/* Connection Line (only on desktop, between items) */}
              {index < pillars.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 md:mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-base md:text-lg text-muted-foreground mb-8 italic">
            "Het framework dat ervoor zorgt dat jij, niet de AI, de regie voert."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onFrameworkClick}
              className="liquid-glass-strong rounded-lg px-8 py-3 text-sm md:text-base text-foreground font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lees het volledige framework
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={onContactClick}
              className="liquid-glass-strong rounded-lg px-8 py-3 text-sm md:text-base text-foreground font-medium hover:scale-105 transition-transform inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Neem contact op
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
