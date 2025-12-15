import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Tag } from "lucide-react";
import seoniProduct from "@/assets/seoni-product.jpg";
import justeParisProduct from "@/assets/juste-paris-product.jpg";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    website: string;
    promoCode: string;
    discount: string;
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-card rounded-2xl p-8 max-w-sm w-full relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl text-foreground mb-2">{product.name}</h3>
            <p className="text-muted-foreground text-sm mb-6">Partenaire Spa Woda</p>

            <div className="space-y-4">
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Visiter le site
                </span>
              </a>

              <div className="p-4 rounded-xl bg-volcanic border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-primary">Code Promo</span>
                </div>
                <p className="font-heading text-xl text-foreground">{product.promoCode}</p>
                <p className="text-sm text-muted-foreground mt-1">{product.discount}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Atmosphere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<null | {
    name: string;
    website: string;
    promoCode: string;
    discount: string;
  }>(null);

  const products = [
    {
      name: "Seoni",
      image: seoniProduct,
      website: "https://getseoni.com/pages/pommeau-de-douche-page",
      promoCode: "SPAWODA10",
      discount: "-10% sur votre commande",
    },
    {
      name: "Juste Paris",
      image: justeParisProduct,
      website: "https://juste.paris",
      promoCode: "SPAWODA",
      discount: "-10% sur votre commande",
    },
  ];

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

        {/* Layout: Text + Partners left, Video right */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-border relative aspect-[4/5]"
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
                <p className="mt-2 text-muted-foreground text-sm font-light">
                  Lumières tamisées, sons apaisants, parfums envoûtants.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Text + Partners */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Un <span className="italic text-primary">voyage sensoriel</span> d'exception
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Plongez dans une expérience unique où chaque détail a été pensé pour votre bien-être. 
                Lumières tamisées, sons apaisants et parfums envoûtants créent une bulle de sérénité 
                propice à la détente profonde.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Nous utilisons exclusivement des produits d'exception, sélectionnés avec soin auprès 
                de nos partenaires <span className="text-primary">Seoni</span> et <span className="text-primary">Juste Paris</span>. 
                Ces marques partagent nos valeurs de qualité et de respect, pour une expérience 
                authentique et bienfaisante.
              </p>

              {/* Partners Section */}
              <div className="flex flex-col gap-4">
                <div className="text-left">
                  <p className="font-heading text-xl md:text-2xl text-foreground mb-2">
                    Nos <span className="italic text-primary">Partenaires</span>
                  </p>
                  <p className="text-muted-foreground text-sm font-light">
                    Des produits d'exception sélectionnés avec soin
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {products.map((product, index) => (
                    <motion.button
                      key={product.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(product)}
                      className="rounded-2xl overflow-hidden border border-border relative aspect-square group cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                        <p className="font-heading text-lg md:text-xl text-foreground mb-1">
                          {product.name}
                        </p>
                        <p className="text-xs text-primary tracking-wider uppercase">
                          Code Promo -10%
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || { name: "", website: "", promoCode: "", discount: "" }}
      />
    </section>
  );
};

export default Atmosphere;
