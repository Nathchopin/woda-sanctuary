import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import spaProducts from "@/assets/spa-products.jpg";

const Atmosphere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mb-8" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            L'Expérience
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Une <span className="italic text-primary">Atmosphère</span> Unique
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Video Box - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden border border-border relative aspect-video md:aspect-auto"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/environment-spa.mov" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-heading text-2xl md:text-3xl text-foreground">
                Immersion <span className="italic text-primary">sensorielle</span>
              </p>
            </div>
          </motion.div>

          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 flex flex-col justify-center"
          >
            <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
              Une <span className="italic text-primary">bulle</span>
              <br />
              hors du temps.
            </p>
            <p className="mt-4 text-muted-foreground text-sm font-light">
              Lumières tamisées, sons apaisants, parfums envoûtants.
            </p>
          </motion.div>

          {/* Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-border relative"
          >
            <img
              src={spaProducts}
              alt="Produits spa naturels"
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <p className="absolute bottom-4 left-4 font-body text-xs tracking-widest uppercase text-primary">
              Produits Bio
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
