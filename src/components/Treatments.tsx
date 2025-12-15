import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertCircle, Phone } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";

const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const treatments = [
    {
      nameKey: "treatment.rituel.name",
      descKey: "treatment.rituel.desc",
      duration: "2h",
      price: "145€",
      highlight: true,
      badgeKey: "treatments.mostPopular",
    },
    {
      nameKey: "treatment.cranienCalif.name",
      descKey: "treatment.cranienCalif.desc",
      duration: "1h30",
      price: "100€",
      highlight: true,
      badge: "-15€",
    },
    {
      nameKey: "treatment.cranien.name",
      descKey: "treatment.cranien.desc",
      duration: "30min",
      price: "30€",
    },
    {
      nameKey: "treatment.californien.name",
      descKey: "treatment.californien.desc",
      duration: "1h",
      price: "85€",
    },
    {
      nameKey: "treatment.signature.name",
      descKey: "treatment.signature.desc",
      duration: "1h30",
      price: "120€",
    },
    {
      nameKey: "treatment.ayurvedique.name",
      descKey: "treatment.ayurvedique.desc",
      duration: "1h",
      price: "90€",
    },
    {
      nameKey: "treatment.suedois.name",
      descKey: "treatment.suedois.desc",
      duration: "1h",
      price: "100€",
    },
    {
      nameKey: "treatment.polynesien.name",
      descKey: "treatment.polynesien.desc",
      duration: "1h",
      price: "90€",
    },
  ];

  return (
    <section id="soins" className="py-24 md:py-32 bg-volcanic-light" ref={ref}>
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
            {t("treatments.label")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            {t("treatments.title")} <span className="italic text-primary">{t("treatments.titleHighlight")}</span> {t("treatments.titleEnd")}
          </h2>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.nameKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`treatment-card flex flex-col h-full relative ${
                treatment.highlight ? "border-primary/40" : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl md:text-2xl text-foreground pr-2">
                  {t(treatment.nameKey)}
                </h3>
                {(treatment.badgeKey || treatment.badge) && (
                  <span className="text-xs tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    {treatment.badgeKey ? t(treatment.badgeKey) : treatment.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-grow">
                {t(treatment.descKey)}
              </p>

              {/* Duration & Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{treatment.duration}</span>
                </div>
                <span className="font-heading text-2xl text-primary">
                  {treatment.price}
                </span>
              </div>

              {/* CTA */}
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="w-full text-center py-3 border border-primary/30 rounded-full text-sm tracking-wider uppercase text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                  >
                    {t("treatments.book")}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 bg-card border-border/50 p-6" sideOffset={8}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-heading text-lg text-foreground mb-1">
                      {t("treatments.bookByPhone")}
                    </h4>
                    <p className="text-muted-foreground text-xs mb-4">
                      {t(treatment.nameKey)}
                    </p>
                    <a
                      href="tel:+33612345678"
                      className="btn-solid-gold rounded-full text-sm flex items-center justify-center gap-2 w-full py-2"
                    >
                      <Phone className="w-4 h-4" />
                      06 12 34 56 78
                    </a>
                    <p className="text-xs text-muted-foreground mt-3">
                      {t("treatments.openingHours")}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </motion.div>
          ))}
        </div>

        {/* Warning Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-4 max-w-2xl mx-auto flex items-start gap-4"
        >
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{t("treatments.important")}</span>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>{t("treatments.warning1")}</li>
              <li>{t("treatments.warning2")}</li>
              <li>{t("treatments.warning3")}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
