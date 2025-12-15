import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Souad E.",
    text: "Yohaqîne est une femme en or. Ambiance cocooning, massage parfait, un professionnalisme et une gentillesse rare. Accueillie comme une reine !",
    date: "il y a 3 mois",
  },
  {
    name: "Diane G.",
    text: "Un très grand merci pour le soin. Au travers du rituel Osaka, j'ai vécu un instant précieux coupé du temps. Confiante et apaisée.",
    date: "il y a 2 mois",
  },
  {
    name: "Linda R.",
    text: "Prix abordable, c'est mon 2e passage pour un massage crânien. Résultats : repousse, plus de démangeaisons, cheveux sains et brillants !",
    date: "il y a 6 mois",
  },
  {
    name: "Gael G.",
    text: "Un moment incroyable grâce à Yohaqîne. Du diagnostic à la séance, elle a toujours été pleine de douceur et à l'écoute.",
    date: "il y a 6 mois",
  },
  {
    name: "Léane S.",
    text: "Époustouflant ! La cabine de head spa est très jolie, le soin merveilleux et très relaxant. Pure douceur et brillance extrême.",
    date: "il y a 6 mois",
  },
  {
    name: "Chlo C.",
    text: "Professionnalisme, douceur et extrêmement empathie. Elle saura répondre à vos besoins et apaiser votre esprit. Moment de détente absolu.",
    date: "il y a 1 an",
  },
  {
    name: "Sophie H.",
    text: "Moment incroyable, l'accueil est chaleureux. Les odeurs des produits sont divines. Mes cheveux n'ont jamais été aussi beaux !",
    date: "il y a 9 mois",
  },
  {
    name: "Léa A.",
    text: "Superbe expérience ! Prestation de qualité, ambiance cocooning et produits naturels. Je recommande vivement pour une parenthèse bien-être.",
    date: "il y a 8 mois",
  },
];

// Duplicate reviews for seamless loop
const duplicatedReviews = [...reviews, ...reviews];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-volcanic-light overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mb-8" />
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Google Logo */}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Avis Google
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Ce qu'elles <span className="italic text-primary">disent</span>
          </h2>
        </motion.div>

        {/* Auto-scrolling Reviews */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : [0, -50 * reviews.length + "%"],
            }}
            transition={{
              x: {
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) }}
                className="glass-card rounded-xl p-6 w-[320px] md:w-[380px] flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground font-light leading-relaxed mb-6 line-clamp-4">
                  "{review.text}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-heading text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-foreground">
                      {review.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
