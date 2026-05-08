import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Welke AI-tools zijn het meest geschikt voor mijn bedrijf?',
    answer: 'Dat hangt af van je specifieke behoeften. ChatGPT is veelzijdig voor tekst, Claude voor complexe analyse, Gemini voor onderzoek, en Midjourney voor visuele content. Wij helpen je de juiste tools voor jouw workflow te kiezen.',
  },
  {
    id: 2,
    question: 'Hoe schrijf ik effectieve prompts?',
    answer: 'Effectieve prompts zijn specifiek, duidelijk en contextrijk. Geef de AI context, definieer je doel, en wees precies over het gewenste format. Onze trainingen gaan diep in op prompt-engineering technieken.',
  },
  {
    id: 3,
    question: 'Kan ik AI gebruiken zonder mijn privacy in gevaar te brengen?',
    answer: 'Ja, als je voorzichtig bent. Deel geen gevoelige bedrijfsgegevens, persoonlijke informatie, of vertrouwelijke documenten met openbare AI-tools. Wij leren je hoe je veilig met AI omgaat.',
  },
  {
    id: 4,
    question: 'Hoeveel tijd bespaar ik echt met AI?',
    answer: 'Dit varieert per taak, maar veel gebruikers besparen 30-50% tijd op repetitieve werk. De echte winst zit in kwaliteit: beter geformuleerde output, minder herschrijven, en betere resultaten.',
  },
  {
    id: 5,
    question: 'Is AI training nodig als ik al met AI werk?',
    answer: 'Waarschijnlijk wel. Veel mensen gebruiken AI, maar niet optimaal. Onze training leert je strategisch denken over AI, hoe je het integreert in je workflow, en hoe je betere resultaten krijgt.',
  },
  {
    id: 6,
    question: 'Hoe lang duurt het voordat ik resultaten zie?',
    answer: 'Je kunt direct na de training beter prompts schrijven en meer uit AI halen. Echte workflow-verbetering zien de meeste mensen binnen 1-2 weken van consistent toepassen.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

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
    <section className="relative py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base text-accent font-mono mb-4 uppercase tracking-wider">
            Veelgestelde vragen
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Antwoorden op je vragen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Meer weten over AI-implementatie en prompting? Hier vind je antwoorden op veel gestelde vragen.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 md:p-8 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Answer */}
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/5"
                  >
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Nog meer vragen? We helpen je graag verder.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg liquid-glass border border-accent/30 text-accent font-medium hover:border-accent/60 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Neem contact op
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
