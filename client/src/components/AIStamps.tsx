import { motion } from 'framer-motion';
import { useState } from 'react';

const stamps = [
  {
    id: 1,
    name: 'ChatGPT',
    tagline: 'Schrijven & Redeneren',
    image: '/manus-storage/stamp-chatgpt_476a131d.png',
    description: 'Het meest veelzijdig. Goed voor brainstormen, schrijven, samenvatten.',
    rotation: 2,
  },
  {
    id: 2,
    name: 'Claude',
    tagline: 'Lange Teksten',
    image: '/manus-storage/stamp-claude_d255932e.png',
    description: 'Beter met lange, complexe teksten. Voelt meer "menselijk" aan.',
    rotation: -1.5,
  },
  {
    id: 3,
    name: 'Gemini',
    tagline: 'Zoeken & Verifiëren',
    image: '/manus-storage/stamp-gemini_d2285bef.png',
    description: 'Kan het web doorzoeken. Handig voor actuele informatie.',
    rotation: 1.8,
  },
  {
    id: 4,
    name: 'Perplexity',
    tagline: 'Met Bronnen',
    image: '/manus-storage/stamp-perplexity_30451369.png',
    description: 'Geeft bronnen mee. Perfect voor onderzoek en verificatie.',
    rotation: -2.2,
  },
  {
    id: 5,
    name: 'Copilot',
    tagline: 'Code & Office',
    image: '/manus-storage/stamp-copilot-v2_299e68a4.png',
    description: 'Programmeren, Excel, PowerPoint. Je dagelijkse assistent.',
    rotation: 1.3,
  },
  {
    id: 6,
    name: 'ElevenLabs',
    tagline: 'Stem & Audio',
    image: '/manus-storage/stamp-elevenlab-final_5296272f.png',
    description: 'Natuurlijke voiceovers. Goed voor podcasts en video\'s.',
    rotation: -1.1,
  },
  {
    id: 7,
    name: 'Runway',
    tagline: 'Video & Visueel',
    image: '/manus-storage/stamp-runway-v2_f34e8728.png',
    description: 'Video generatie en bewerking. Voor professionele content.',
    rotation: 2.1,
  },
  {
    id: 8,
    name: 'Nano Banana Pro',
    tagline: 'AI Afbeeldingen',
    image: '/manus-storage/stamp-nanobanana_a2aa80aa.png',
    description: 'Snelle, creatieve afbeeldingen. Perfect voor brainstormen.',
    rotation: -1.9,
  },
];

export default function AIStamps() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="ai-stamps" className="relative py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base text-accent font-mono mb-4 uppercase tracking-wider">
            Acht essentiële tools
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            AI Postzegels
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Elke bestemming vraagt om een ander gereedschap. Hier zijn de acht tools die je moet kennen.
          </p>
        </motion.div>

        {/* Stamps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stamps.map((stamp) => (
            <motion.div
              key={stamp.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(stamp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col items-center h-full"
            >
              {/* Stamp Image - No Container, Just Image */}
              <motion.div
                className="relative w-full aspect-square cursor-pointer"
                animate={{
                  scale: hoveredId === stamp.id ? 1.15 : 1,
                  rotate: hoveredId === stamp.id ? stamp.rotation : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={stamp.image}
                  alt={stamp.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* Title & Tagline */}
              <motion.div
                className="mt-6 text-center"
                animate={{
                  opacity: hoveredId === stamp.id ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">
                  {stamp.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest mt-2">
                  {stamp.tagline}
                </p>
              </motion.div>

              {/* Description (appears on hover) */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === stamp.id ? 1 : 0,
                  y: hoveredId === stamp.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed bg-background/95 backdrop-blur-sm rounded-lg p-4">
                  {stamp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="mt-20 md:mt-28 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-muted-foreground italic">
            "Elke bestemming heeft zijn eigen postzegel. Gebruik je de verkeerde en je pakketje komt nooit aan."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
