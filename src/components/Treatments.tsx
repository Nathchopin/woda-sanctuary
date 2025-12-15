import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, AlertCircle, Sparkles } from "lucide-react";
import BookingModal from "./BookingModal";

const treatments = [
  {
    name: "Rituel Spa Woda",
    description: "Le déroulé complet du Head Spa : accueil & diagnostic, soin du cuir chevelu, massage bien-être, soin du visage, rituel capillaire et finitions beauté.",
    duration: "2h",
    price: "145€",
    originalPrice: "180€",
    discount: "-20%",
    highlight: true,
    isPromo: true,
  },
  {
    name: "Massage Signature Spa Woda",
    description: "L'Essence du Bien-Être sur Mesure. Un soin entièrement personnalisé qui allie douceur et précision, inspiré de techniques japonaises.",
    duration: "1h30",
    price: "120€",
  },
  {
    name: "Massage Crânien & Californien",
    description: "Offrez à votre esprit une pause profonde grâce à notre massage crânien inspiré du Head Spa Japonais, combiné au massage californien enveloppant.",
    duration: "1h30",
    price: "100€",
    highlight: true,
    badge: "15€ de réduction",
  },
  {
    name: "Massage Crânien",
    description: "En stimulant doucement le cuir chevelu, ce massage aide à relâcher les muscles et à apaiser l'esprit.",
    duration: "30min",
    price: "30€",
  },
  {
    name: "Massage Californien",
    description: "Un modelage doux et enveloppant pour favoriser la relaxation et la reconnexion à soi.",
    duration: "1h",
    price: "85€",
  },
  {
    name: "Massage Ayurvédique",
    description: "Inspiré de la tradition indienne, ce massage rééquilibre les énergies et revitalise le corps.",
    duration: "1h",
    price: "90€",
  },
  {
    name: "Massage Suédois",
    description: "Idéal pour dénouer les tensions musculaires et activer la circulation grâce à des manœuvres toniques.",
    duration: "1h",
    price: "100€",
  },
  {
    name: "Massage Polynésien",
    description: "Inspiré des traditions ancestrales de Tahiti, ce massage utilise de longs mouvements fluides rappelant le va-et-vient des vagues.",
    duration: "1h",
    price: "90€",
  },
];

const Treatments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>();

  const handleBooking = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    setIsModalOpen(true);
  };

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`treatment-card flex flex-col h-full relative ${
                treatment.highlight ? "border-primary/40" : ""
              } ${treatment.isPromo ? "ring-2 ring-primary/50" : ""}`}
            >
              {/* Promo Badge */}
              {treatment.isPromo && (
                <div className="absolute -top-3 -right-3 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {treatment.discount} OFFRE LIMITÉE
                </div>
              )}

              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl md:text-2xl text-foreground pr-2">
                  {treatment.name}
                </h3>
                {treatment.highlight && !treatment.isPromo && (
                  <span className="text-xs tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                    Populaire
                  </span>
                )}
                {treatment.badge && (
                  <span className="text-xs tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                    {treatment.badge}
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
                <div className="flex items-center gap-2">
                  {treatment.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      {treatment.originalPrice}
                    </span>
                  )}
                  <span className={`font-heading text-2xl ${treatment.isPromo ? "text-primary" : "text-primary"}`}>
                    {treatment.price}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleBooking(treatment.name)}
                className="w-full text-center py-3 border border-primary/30 rounded-full text-sm tracking-wider uppercase text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
              >
                Réserver
              </button>
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
            <span className="text-foreground font-medium">Important :</span>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Pas de coloration, Botox ou décoloration une semaine avant et après une séance</li>
              <li>Hommes & Femmes bienvenus</li>
              <li>Enfants avec des poux non acceptés</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        treatmentName={selectedTreatment}
      />
    </section>
  );
};

export default Treatments;
