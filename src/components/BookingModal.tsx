import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatmentName?: string;
}

const BookingModal = ({ isOpen, onClose, treatmentName }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="glass-card rounded-2xl p-8 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading text-2xl text-foreground mb-2">
                  Réserver par téléphone
                </h3>
                
                {treatmentName && (
                  <p className="text-muted-foreground text-sm mb-4">
                    {treatmentName}
                  </p>
                )}

                <p className="text-muted-foreground mb-6">
                  Appelez-nous pour réserver votre soin
                </p>

                <a
                  href="tel:+33666111726"
                  className="btn-solid-gold rounded-full text-lg flex items-center justify-center gap-3 w-full"
                >
                  <Phone className="w-5 h-5" />
                  06 66 11 17 26
                </a>

                <p className="text-xs text-muted-foreground mt-4">
                  Du lundi au samedi, 9h - 19h
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
