import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="institut" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video - Made wider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
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
              {t("philosophy.label")}
            </p>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              {t("philosophy.title")} <span className="italic text-primary">{t("philosophy.titleHighlight")}</span> {t("philosophy.titleEnd")}
            </h2>

            <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
              <p>{t("philosophy.p1")}</p>
              <p>
                {t("philosophy.p2")} <span className="italic-gold">{t("philosophy.p2Highlight")}</span>.
              </p>
              <p>{t("philosophy.p3")}</p>
            </div>

            <motion.a
              href="#soins"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-10 btn-glass-gold rounded-full"
            >
              {t("philosophy.cta")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
