import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="institut" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Gold border frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-br from-volcanic-light to-volcanic rounded-2xl overflow-hidden border border-primary/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero-spa.mov" type="video/mp4" />
                </video>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            {/* Decorative line */}
            <div className="gold-line mb-8 lg:mx-0" />

            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              L'Institut
            </p>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Un <span className="italic text-primary">Sanctuaire</span> de Sérénité
            </h2>

            <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
              <p>
                Bienvenue chez Spa Woda, où l'art ancestral du Head Spa Japonais 
                rencontre l'excellence française. Fondé par Yohaqîne Chopin, 
                professionnelle passionnée issue du monde du spa hôtelier, 
                notre institut est un havre de paix au cœur de Lyon.
              </p>
              <p>
                Chaque soin est une expérience sur-mesure, utilisant des produits 
                nobles et biologiques : lait d'ânesse, huiles précieuses, et 
                rituels traditionnels japonais. Ici, nous ne proposons pas 
                simplement des soins — nous offrons un voyage sensoriel vers 
                la <span className="italic-gold">détente absolue</span>.
              </p>
              <p>
                Notre philosophie Wabi-Sabi célèbre la beauté de l'imperfection 
                et l'harmonie entre le corps et l'esprit. Laissez-vous porter 
                par la douceur de nos rituels.
              </p>
            </div>

            <motion.a
              href="#soins"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-10 btn-glass-gold rounded-full"
            >
              Découvrir nos Soins
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
