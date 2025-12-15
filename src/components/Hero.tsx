import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Decorative gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[2px] bg-primary mb-10"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-8"
        >
          L'Institut Spa Woda
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-2 max-w-4xl"
        >
          L'Art du Head Spa Japonais.
        </motion.h1>

        {/* Italic Gold Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl italic text-primary mb-6"
        >
          Un voyage sensoriel.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-body text-sm md:text-base text-foreground/60 mb-10 max-w-lg"
        >
          Découvrez l'excellence du Head Spa à Lyon par Yohaqîne Chopin.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#soins"
            className="px-8 py-4 bg-primary text-background font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Réserver un Soin
          </a>
          <a
            href="#institut"
            className="px-8 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Découvrir l'Institut
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#institut"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="font-body text-xs tracking-[0.3em] uppercase text-foreground/50">
          Découvrir
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
