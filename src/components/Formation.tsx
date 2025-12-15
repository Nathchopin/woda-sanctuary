import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Formation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="formation" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="gold-line mb-8" />
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              {t("formation.label")}
            </p>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            {t("formation.title")} <span className="italic text-primary">{t("formation.titleHighlight")}</span> {t("formation.titleEnd")}
          </h2>

          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("formation.description")}
          </p>

          <motion.a
            href="https://formationheadspapro.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 btn-solid-gold rounded-full"
          >
            {t("formation.cta")}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;
