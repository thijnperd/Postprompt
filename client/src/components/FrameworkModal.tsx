import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

interface FrameworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FrameworkModal({ isOpen, onClose }: FrameworkModalProps) {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    onClose();
    setLocation('/contact');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-background border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-background/80 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Het PostPrompt Framework
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ons framework bestaat uit vier essentiële pijlers die ervoor zorgen dat je AI met vertrouwen en effectiviteit inzet. Dit is niet zomaar een stappenplan — het is een filosofie.
                  </p>
                </motion.div>

                {/* Pillar 1 */}
                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    01. Welke AI
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Niet elke AI is geschikt voor elke taak. ChatGPT is anders dan Claude, en Gemini weer anders dan Perplexity. Het eerste stap is begrijpen welk gereedschap je nodig hebt voor jouw specifieke doel.
                  </p>
                  <p className="text-sm text-accent italic">
                    "Elke bestemming vraagt om een ander gereedschap."
                  </p>
                </motion.div>

                {/* Pillar 2 */}
                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    02. Wanneer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Timing is alles. In welk stadium van je proces breng je AI erin? Brainstormen? Schrijven? Controleren? Elke fase vraagt om een ander moment van inzet.
                  </p>
                </motion.div>

                {/* Pillar 3 */}
                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    03. Hoe
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    De kwaliteit van je prompt bepaalt de kwaliteit van het resultaat. Dit is waar de echte kunst zit. Hoe formuleer je je vraag zodat AI je begrijpt en je het juiste antwoord geeft?
                  </p>
                </motion.div>

                {/* Pillar 4 */}
                <motion.div
                  className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    04. Wat nu
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI schrijft de brief. Jij tekent hem. Dit is het cruciale moment waar menselijke oordeel en verantwoordelijkheid nodig zijn. Je bent altijd de eigenaar van het eindresultaat.
                  </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                />

                {/* CTA */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-sm text-muted-foreground">
                    Dit framework wordt in detail uitgewerkt in onze trainingen en workshops. Wil je meer weten?
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="w-full px-6 py-3 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Neem contact op
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
