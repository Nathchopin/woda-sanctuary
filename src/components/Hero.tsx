import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mov" type="video/quicktime" />
          <source src="/videos/hero-video.mov" type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="gold-line mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4 max-w-4xl"
        >
          {t("hero.title")}
        </motion.h1>

        {/* Italic Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-primary mb-12"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#soins"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="btn-glass-gold rounded-full animate-float"
        >
          {t("hero.cta")}
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#institut"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="font-body text-xs tracking-widest uppercase text-foreground/50">
          {t("hero.discover")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
