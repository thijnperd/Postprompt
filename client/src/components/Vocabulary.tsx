import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const vocabularyData = {
  use: [
    { word: 'bezorgen / afleveren', reason: 'Consistent met de postmetafoor' },
    { word: 'prompt', reason: 'Ons kernwoord — uitleggen, niet vermijden' },
    { word: 'nakijken / controleren', reason: 'Herinnert aan menselijke rol' },
    { word: 'passend / geschikt', reason: 'In plaats van "best" of "perfect"' },
    { word: 'helder / concreet', reason: 'In plaats van "duidelijk" of "simpel"' },
    { word: 'jij / je', reason: 'Persoonlijk, direct aanspreken' },
    { word: 'wij / we', reason: 'Samenwerking, niet corporate afstand' },
    { word: 'tool / instrument', reason: 'Neutraal en eerlijk' },
  ],
  avoid: [
    { word: 'revolutionair / baanbrekend', reason: 'Te hypy — ondermijnt geloofwaardigheid' },
    { word: 'gamechanger', reason: 'Verleten buzzwoord' },
    { word: 'de toekomst is nu', reason: 'Cliché zonder inhoud' },
    { word: 'AI doet alles voor je', reason: 'Onjuist en gevaarlijk misleidend' },
    { word: 'perfect / foutloos', reason: 'AI maakt fouten — dit niet beweren' },
    { word: 'gewoon even...', reason: 'Minimaliseert de inspanning van de gebruiker' },
    { word: 'state-of-the-art', reason: 'Leeg jargon' },
    { word: 'leverage / synergy', reason: 'Corporate wollheid' },
  ],
};

export default function Vocabulary() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Our Vocabulary
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Words we use — and words we avoid.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Use Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Check className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                We Use
              </h3>
            </div>

            <div className="space-y-4">
              {vocabularyData.use.map((item, index) => (
                <motion.div
                  key={`use-${index}`}
                  variants={rowVariants}
                  className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors"
                >
                  <p className="font-mono text-sm md:text-base font-semibold text-foreground mb-1">
                    {item.word}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {item.reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Avoid Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <X className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                We Avoid
              </h3>
            </div>

            <div className="space-y-4">
              {vocabularyData.avoid.map((item, index) => (
                <motion.div
                  key={`avoid-${index}`}
                  variants={rowVariants}
                  className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                  <p className="font-mono text-sm md:text-base font-semibold text-foreground mb-1">
                    {item.word}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {item.reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
