import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
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
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 font-body tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300 text-xs"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>
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
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  {language === "fr" ? "English" : "Français"}
                </button>
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
