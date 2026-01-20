import { useState } from "react";
import { Instagram, Youtube } from "lucide-react";
import LegalModal from "./LegalModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"mentions" | "cgv">("mentions");
  const { t } = useLanguage();

  const openLegalModal = (type: "mentions" | "cgv") => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">
              Spa <span className="italic text-primary">Woda</span>
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              {t("footer.tagline")}
              <br />
              {t("footer.tagline2")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/spawodaheadspalyon?igsh=MXZ3YnZpbTZ0MzBkcw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@YohaqineChopin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@spawoda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-primary mb-6">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3 text-muted-foreground text-sm font-light">
              <p>Spa Woda</p>
              <p>Lyon 69009</p>
              <p>France</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-primary mb-6">
              {t("footer.links")}
            </h4>
            <div className="space-y-3">
              <a
                href="https://formationheadspapro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground text-sm font-light hover:text-primary transition-colors"
              >
                {t("footer.becomePractitioner")}
              </a>
              <button
                onClick={() => openLegalModal("mentions")}
                className="block text-muted-foreground text-sm font-light hover:text-primary transition-colors text-left"
              >
                {t("footer.legalNotice")}
              </button>
              <button
                onClick={() => openLegalModal("cgv")}
                className="block text-muted-foreground text-sm font-light hover:text-primary transition-colors text-left"
              >
                {t("footer.terms")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Spa Woda. {t("footer.copyright")}
          </p>
          <p className="text-muted-foreground text-xs">
            {t("footer.madeWith")} <span className="text-primary">♥</span> {t("footer.inLyon")}
          </p>
        </div>
      </div>

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalModalType}
      />
    </footer>
  );
};

export default Footer;
