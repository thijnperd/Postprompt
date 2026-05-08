import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="relative bg-background border-t border-accent/10 py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Ghost Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-[18vw] font-serif font-bold text-foreground whitespace-nowrap">
          POSTPROMPT
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Column 1: Logo & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              PostPrompt
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              AI bezorgt. Jij beslist.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground/60 mt-4">
              Je gids voor slim AI-gebruik.
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-mono font-semibold text-accent uppercase tracking-widest mb-6">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {['Hoe het werkt', 'AI Tools', 'Over ons', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-mono font-semibold text-accent uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hallo@postprompt.nl"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="relative">
                  hallo@postprompt.nl
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-accent/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            AI bezorgt. Jij beslist. — © PostPrompt 2025
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Gemaakt met zorg voor slim AI-gebruik.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
