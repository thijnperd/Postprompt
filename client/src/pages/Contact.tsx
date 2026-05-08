import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Voer een geldig emailadres in';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Bericht moet minstens 10 karakters zijn';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormState('error');
      return;
    }

    setFormState('submitting');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');
      setFormData({ name: '', email: '', company: '', message: '' });

      // Reset to idle after 4 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 4000);
    }, 1500);
  };

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
    <div className="min-h-screen bg-background pb-20">
      {/* Back Button */}
      <motion.button
        onClick={() => setLocation('/')}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-lg liquid-glass hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Terug</span>
      </motion.button>

      <div className="pt-24 md:pt-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base text-accent font-mono mb-4 uppercase tracking-wider">
            Neem contact op
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Laten we samen werken
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Heb je vragen over AI prompting of wil je meer weten over onze trainingen? Neem contact op en we helpen je graag verder.
          </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Contact Form */}
            <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-500/50 focus:ring-red-500/50'
                      : 'border-border focus:ring-accent'
                  }`}
                  placeholder="Jouw naam"
                  disabled={formState === 'submitting'}
                />
                {errors.name && (
                  <motion.p
                    className="text-sm text-red-500 mt-2 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-500/50 focus:ring-red-500/50'
                      : 'border-border focus:ring-accent'
                  }`}
                  placeholder="jouw@email.com"
                  disabled={formState === 'submitting'}
                />
                {errors.email && (
                  <motion.p
                    className="text-sm text-red-500 mt-2 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bedrijf
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Jouw bedrijf (optioneel)"
                  disabled={formState === 'submitting'}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/50'
                      : 'border-border focus:ring-accent'
                  }`}
                  placeholder="Vertel ons wat je nodig hebt..."
                  disabled={formState === 'submitting'}
                />
                {errors.message && (
                  <motion.p
                    className="text-sm text-red-500 mt-2 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formState === 'submitting' || formState === 'success'}
                className="w-full liquid-glass-strong rounded-lg px-6 py-4 text-foreground font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                whileHover={{ scale: formState === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: formState === 'idle' ? 0.98 : 1 }}
              >
                {formState === 'submitting' && (
                  <>
                    <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    Verzenden...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Bericht verzonden!
                  </>
                )}
                {formState === 'idle' && (
                  <>
                    Verzend bericht
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Error Message */}
              {formState === 'error' && Object.keys(errors).length > 0 && (
                <motion.div
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-500 mb-1">
                      Controleer de volgende velden:
                    </p>
                    <ul className="text-sm text-red-500/80 space-y-1">
                      {Object.values(errors).map((error, i) => (
                        <li key={i}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Email */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg liquid-glass">
                    <Mail className="h-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:contact@postprompt.nl"
                      className="hover:text-accent transition-colors"
                    >
                      contact@postprompt.nl
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg liquid-glass">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                    Telefoon
                  </h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+31612345678"
                      className="hover:text-accent transition-colors"
                    >
                      +31 (0)6 1234 5678
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg liquid-glass">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                    Locatie
                  </h3>
                  <p className="text-muted-foreground">Nederland</p>
                </div>
              </motion.div>

              {/* Weekly Prompts Signup */}
              <motion.div
              variants={itemVariants}
              className="mt-12 p-6 rounded-lg liquid-glass border border-white/10"
            >
              <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                Wekelijkse prompts
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ontvang elke week een high-detail prompt voor specifieke AI use cases.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Weekly prompt signup');
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  placeholder="jouw@email.com"
                  className="w-full px-3 py-2 bg-background border border-border rounded text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded text-sm font-medium transition-colors"
                >
                  Aanmelden
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}
