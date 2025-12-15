import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertCircle } from "lucide-react";

const treatments = [
  {
    name: "Head Spa + Soin Visage",
    description: "Une expérience complète alliant le rituel Head Spa japonais et un soin visage régénérant.",
    duration: "2h",
    price: "145€",
    highlight: true,
  },
  {
    name: "Massage Signature",
    description: "Notre massage signature aux huiles biologiques pour une détente profonde du corps.",
    duration: "1h30",
    price: "120€",
  },
  {
    name: "Voyage Sensoriel",
    description: "Un parcours sensoriel unique mêlant aromathérapie, sons et toucher expert.",
    duration: "2h",
    price: "160€",
  },
  {
    name: "Détente Absolue",
    description: "Notre rituel le plus complet pour une parenthèse hors du temps.",
    duration: "3h30",
    price: "225€",
    highlight: true,
  },
  {
    name: "Massage Crânien",
    description: "Un soin express pour libérer les tensions et apaiser l'esprit.",
    duration: "30min",
    price: "30€",
  },
];

const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Nos Soins
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Les <span className="italic text-primary">Rituels</span> Spa Woda
          </h2>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`treatment-card flex flex-col h-full ${
                treatment.highlight ? "border-primary/40" : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl md:text-2xl text-foreground">
                  {treatment.name}
                </h3>
                {treatment.highlight && (
                  <span className="text-xs tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Populaire
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-grow">
                {treatment.description}
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
              <a
                href="https://www.planity.com/spa-woda-head-spa-lyon-69009"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-primary/30 rounded-full text-sm tracking-wider uppercase text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
              >
                Réserver
              </a>
            </motion.div>
          ))}
        </div>

        {/* Warning Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-xl p-4 max-w-lg mx-auto flex items-center gap-4"
        >
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground">Important :</span> Pas de coloration 
            1 semaine avant/après le soin Head Spa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;
