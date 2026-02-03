import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "spawoda_cookie_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl glass-card rounded-xl p-6 border border-[hsl(var(--gold)/0.3)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center sm:text-left text-[hsl(var(--clay))]">
            Nous utilisons des cookies pour améliorer votre expérience.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleRefuse}
              className="px-6 py-2.5 text-sm tracking-wider uppercase font-body border border-[hsl(var(--clay)/0.3)] rounded-lg text-[hsl(var(--clay))] hover:border-[hsl(var(--clay)/0.6)] hover:bg-[hsl(var(--clay)/0.1)] transition-all duration-300"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 text-sm tracking-wider uppercase font-body bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-[hsl(var(--volcanic))] rounded-lg hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)] transition-all duration-300"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
