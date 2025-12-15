import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.treatments"), href: "#soins" },
    { label: t("nav.institute"), href: "#institut" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.training"), href: "#formation" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-2xl tracking-wide md:text-2xl">
            Spa <span className="text-primary italic text-2xl">Woda</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="relative flex items-center bg-background/20 backdrop-blur-sm rounded-full p-0.5 border border-border/30">
            <button
              onClick={() => setLanguage("fr")}
              className={`relative px-3 py-1 text-xs font-body tracking-wider uppercase transition-all duration-300 rounded-full ${
                language === "fr"
                  ? "text-background"
                  : "text-foreground/60 hover:text-foreground"
              }`}
              aria-label="Switch to French"
            >
              {language === "fr" && (
                <motion.div
                  layoutId="language-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">FR</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`relative px-3 py-1 text-xs font-body tracking-wider uppercase transition-all duration-300 rounded-full ${
                language === "en"
                  ? "text-background"
                  : "text-foreground/60 hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              {language === "en" && (
                <motion.div
                  layoutId="language-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">EN</span>
            </button>
          </div>
          <a
            href="https://formationheadspapro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300 text-xs"
          >
            {t("nav.academy")}
          </a>
          <a href="#soins" className="btn-solid-gold rounded-full text-xs">
            {t("nav.book")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3">
                {/* Language Toggle Mobile */}
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center bg-background/20 backdrop-blur-sm rounded-full p-0.5 border border-border/30">
                    <button
                      onClick={() => { setLanguage("fr"); }}
                      className={`relative px-3 py-1.5 text-xs font-body tracking-wider uppercase transition-all duration-300 rounded-full ${
                        language === "fr"
                          ? "text-background"
                          : "text-foreground/60"
                      }`}
                    >
                      {language === "fr" && (
                        <motion.div
                          layoutId="language-pill-mobile"
                          className="absolute inset-0 bg-primary rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">FR</span>
                    </button>
                    <button
                      onClick={() => { setLanguage("en"); }}
                      className={`relative px-3 py-1.5 text-xs font-body tracking-wider uppercase transition-all duration-300 rounded-full ${
                        language === "en"
                          ? "text-background"
                          : "text-foreground/60"
                      }`}
                    >
                      {language === "en" && (
                        <motion.div
                          layoutId="language-pill-mobile"
                          className="absolute inset-0 bg-primary rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">EN</span>
                    </button>
                  </div>
                </div>
                <a
                  href="https://formationheadspapro.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase text-primary"
                >
                  {t("nav.becomePractitioner")}
                </a>
                <a
                  href="#soins"
                  className="btn-solid-gold rounded-full text-center"
                >
                  {t("nav.book")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
