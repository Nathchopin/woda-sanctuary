import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "mentions" | "cgv";
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl text-foreground">
            {type === "mentions" ? "Mentions Légales" : "Conditions Générales de Vente"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          {type === "mentions" ? (
            <div className="space-y-6 text-muted-foreground text-sm font-light">
              <section>
                <h3 className="font-body text-foreground text-base mb-2">Éditeur du site</h3>
                <p>Spa Woda</p>
                <p>Siège social : Lyon 69009, France</p>
                <p>Email : contact@spawoda.fr</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Hébergement</h3>
                <p>Ce site est hébergé par Lovable.</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Propriété intellectuelle</h3>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. 
                  Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Protection des données personnelles</h3>
                <p>
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression 
                  de vos données personnelles. Pour exercer ces droits, contactez-nous à contact@spawoda.fr.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Cookies</h3>
                <p>
                  Ce site utilise des cookies pour améliorer votre expérience de navigation. 
                  En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-muted-foreground text-sm font-light">
              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 1 - Objet</h3>
                <p>
                  Les présentes conditions générales de vente régissent les relations contractuelles entre 
                  Spa Woda et ses clients pour toute prestation de service.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 2 - Réservation</h3>
                <p>
                  Les réservations peuvent être effectuées par téléphone ou via notre système de réservation en ligne. 
                  Toute réservation est considérée comme ferme et définitive.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 3 - Prix</h3>
                <p>
                  Les prix des prestations sont indiqués en euros TTC. Spa Woda se réserve le droit de modifier 
                  ses tarifs à tout moment, les prestations étant facturées au tarif en vigueur au moment de la réservation.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 4 - Annulation</h3>
                <p>
                  Toute annulation doit être effectuée au moins 24 heures avant le rendez-vous. 
                  En cas d'annulation tardive ou de non-présentation, la prestation pourra être facturée.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 5 - Responsabilité</h3>
                <p>
                  Spa Woda met tout en œuvre pour assurer la qualité de ses prestations. 
                  En cas de réclamation, veuillez nous contacter dans un délai de 48 heures suivant la prestation.
                </p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">Article 6 - Droit applicable</h3>
                <p>
                  Les présentes conditions générales de vente sont soumises au droit français. 
                  En cas de litige, les tribunaux de Lyon seront seuls compétents.
                </p>
              </section>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
