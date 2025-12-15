import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "mentions" | "cgv";
}

const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl text-foreground">
            {type === "mentions" ? t("legal.mentions.title") : t("legal.cgv.title")}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          {type === "mentions" ? (
            <div className="space-y-6 text-muted-foreground text-sm font-light">
              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.editor")}</h3>
                <p>Spa Woda</p>
                <p>{t("legal.headquarters")}</p>
                <p>{t("legal.email")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.hosting")}</h3>
                <p>{t("legal.hostingText")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.ip")}</h3>
                <p>{t("legal.ipText")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.data")}</h3>
                <p>{t("legal.dataText")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.cookies")}</h3>
                <p>{t("legal.cookiesText")}</p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-muted-foreground text-sm font-light">
              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article1")}</h3>
                <p>{t("legal.article1Text")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article2")}</h3>
                <p>{t("legal.article2Text")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article3")}</h3>
                <p>{t("legal.article3Text")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article4")}</h3>
                <p>{t("legal.article4Text")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article5")}</h3>
                <p>{t("legal.article5Text")}</p>
              </section>

              <section>
                <h3 className="font-body text-foreground text-base mb-2">{t("legal.article6")}</h3>
                <p>{t("legal.article6Text")}</p>
              </section>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
