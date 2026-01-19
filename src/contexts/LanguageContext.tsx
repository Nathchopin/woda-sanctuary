import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    "nav.treatments": "Soins",
    "nav.institute": "L'Institut",
    "nav.experience": "L'Expérience",
    "nav.training": "Formation Head Spa",
    "nav.contact": "Contact",
    "nav.academy": "Académie",
    "nav.book": "Réserver",
    "nav.becomePractitioner": "Devenir Praticien",

    // Hero
    "hero.subtitle": "L'Institut Spa Woda",
    "hero.title": "L'Art du Head Spa Japonais à Lyon.",
    "hero.tagline": "Un voyage sensoriel par Yohaqîne Chopin.",
    "hero.cta": "Réserver un Soin",
    "hero.discover": "Découvrir",

    // Philosophy
    "philosophy.label": "L'Institut",
    "philosophy.title": "Un",
    "philosophy.titleHighlight": "Sanctuaire",
    "philosophy.titleEnd": "de Sérénité",
    "philosophy.p1": "Bienvenue chez Spa Woda, où l'art ancestral du Head Spa Japonais rencontre l'excellence française. Fondé par Yohaqîne Chopin, professionnelle passionnée issue du monde du spa hôtelier, notre institut est un havre de paix au cœur de Lyon.",
    "philosophy.p2": "Chaque soin est une expérience sur-mesure, utilisant des produits nobles et biologiques : lait d'ânesse, huiles précieuses, et rituels traditionnels japonais. Ici, nous ne proposons pas simplement des soins — nous offrons un voyage sensoriel vers la",
    "philosophy.p2Highlight": "détente absolue",
    "philosophy.p3": "Notre philosophie Wabi-Sabi célèbre la beauté de l'imperfection et l'harmonie entre le corps et l'esprit. Laissez-vous porter par la douceur de nos rituels.",
    "philosophy.cta": "Découvrir nos Soins",

    // Treatments
    "treatments.label": "Nos Soins",
    "treatments.title": "Les",
    "treatments.titleHighlight": "Rituels",
    "treatments.titleEnd": "Spa Woda",
    "treatments.book": "Réserver",
    "treatments.bookByPhone": "Réserver par téléphone",
    "treatments.openingHours": "Du mardi au samedi, 9h - 19h",
    "treatments.important": "Important :",
    "treatments.warning1": "Pas de coloration, Botox ou décoloration une semaine avant et après une séance",
    "treatments.warning2": "Hommes & Femmes bienvenus",
    "treatments.warning3": "Enfants avec des poux non acceptés",
    "treatments.mostPopular": "Le plus populaire",
    "treatments.comboSavings": "Combo -15€",

    // Treatment names & descriptions
    "treatment.rituel.name": "Rituel Spa Woda",
    "treatment.rituel.desc": "Le déroulé complet du Head Spa : accueil & diagnostic, soin du cuir chevelu, massage bien-être, soin du visage, rituel capillaire et finitions beauté.",
    "treatment.cranienCalif.name": "Massage Crânien & Californien",
    "treatment.cranienCalif.desc": "Offrez à votre esprit une pause profonde grâce à notre massage crânien inspiré du Head Spa Japonais, combiné au massage californien enveloppant.",
    "treatment.cranien.name": "Massage Crânien",
    "treatment.cranien.desc": "En stimulant doucement le cuir chevelu, ce massage aide à relâcher les muscles et à apaiser l'esprit.",
    "treatment.californien.name": "Massage Californien",
    "treatment.californien.desc": "Un modelage doux et enveloppant pour favoriser la relaxation et la reconnexion à soi.",
    "treatment.signature.name": "Massage Signature Spa Woda",
    "treatment.signature.desc": "L'Essence du Bien-Être sur Mesure. Un soin entièrement personnalisé qui allie douceur et précision, inspiré de techniques japonaises.",
    "treatment.ayurvedique.name": "Massage Ayurvédique",
    "treatment.ayurvedique.desc": "Inspiré de la tradition indienne, ce massage rééquilibre les énergies et revitalise le corps.",
    "treatment.suedois.name": "Massage Suédois",
    "treatment.suedois.desc": "Idéal pour dénouer les tensions musculaires et activer la circulation grâce à des manœuvres toniques.",
    "treatment.polynesien.name": "Massage Polynésien",
    "treatment.polynesien.desc": "Inspiré des traditions ancestrales de Tahiti, ce massage utilise de longs mouvements fluides rappelant le va-et-vient des vagues.",

    // Atmosphere
    "atmosphere.label": "L'Expérience",
    "atmosphere.title": "Une",
    "atmosphere.titleHighlight": "Atmosphère",
    "atmosphere.titleEnd": "Unique",
    "atmosphere.videoCaption": "Immersion",
    "atmosphere.videoCaptionHighlight": "sensorielle",
    "atmosphere.videoSubCaption": "Lumières tamisées, sons apaisants, parfums envoûtants.",
    "atmosphere.rightTitle": "Un",
    "atmosphere.rightTitleHighlight": "voyage sensoriel",
    "atmosphere.rightTitleEnd": "d'exception",
    "atmosphere.rightP1": "Plongez dans une expérience unique où chaque détail a été pensé pour votre bien-être. Lumières tamisées, sons apaisants et parfums envoûtants créent une bulle de sérénité propice à la détente profonde.",
    "atmosphere.rightP2": "Nous utilisons exclusivement des produits d'exception, sélectionnés avec soin auprès de nos partenaires",
    "atmosphere.rightP2End": ". Ces marques partagent nos valeurs de qualité et de respect, pour une expérience authentique et bienfaisante.",
    "atmosphere.partnersTitle": "Nos",
    "atmosphere.partnersTitleHighlight": "Partenaires",
    "atmosphere.partnersSubtitle": "Des produits d'exception sélectionnés avec soin",
    "atmosphere.promoCode": "Code Promo -10%",
    "atmosphere.partnerLabel": "Partenaire Spa Woda",
    "atmosphere.visitSite": "Visiter le site",
    "atmosphere.promoCodeLabel": "Code Promo",
    "atmosphere.discount": "-10% sur votre commande",

    // Reviews
    "reviews.label": "Avis Google",
    "reviews.title": "Ce que les clients",
    "reviews.titleHighlight": "disent",

    // Formation
    "formation.label": "Formation Professionnelle",
    "formation.title": "Devenir",
    "formation.titleHighlight": "Praticien",
    "formation.titleEnd": "Head Spa",
    "formation.description": "Vous souhaitez maîtriser l'art du Head Spa Japonais et en faire votre métier ? Rejoignez notre formation certifiante et apprenez les techniques ancestrales auprès de professionnels expérimentés.",
    "formation.cta": "Découvrir la Formation",

    // Footer
    "footer.tagline": "L'art du Head Spa Japonais à Lyon.",
    "footer.tagline2": "Un sanctuaire de sérénité.",
    "footer.contact": "Contact",
    "footer.links": "Liens",
    "footer.becomePractitioner": "Devenir Praticien",
    "footer.legalNotice": "Mentions Légales",
    "footer.terms": "CGV",
    "footer.copyright": "Tous droits réservés.",
    "footer.madeWith": "Conçu avec",
    "footer.inLyon": "à Lyon",

    // Legal Modal
    "legal.mentions.title": "Mentions Légales",
    "legal.cgv.title": "Conditions Générales de Vente",
    "legal.editor": "Éditeur du site",
    "legal.headquarters": "Siège social : Lyon 69009, France",
    "legal.email": "Email : contact@spawoda.fr",
    "legal.hosting": "Hébergement",
    "legal.hostingText": "Ce site est hébergé par Lovable.",
    "legal.ip": "Propriété intellectuelle",
    "legal.ipText": "L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
    "legal.data": "Protection des données personnelles",
    "legal.dataText": "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à contact@spawoda.fr.",
    "legal.cookies": "Cookies",
    "legal.cookiesText": "Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.",
    "legal.article1": "Article 1 - Objet",
    "legal.article1Text": "Les présentes conditions générales de vente régissent les relations contractuelles entre Spa Woda et ses clients pour toute prestation de service.",
    "legal.article2": "Article 2 - Réservation",
    "legal.article2Text": "Les réservations peuvent être effectuées par téléphone ou via notre système de réservation en ligne. Toute réservation est considérée comme ferme et définitive.",
    "legal.article3": "Article 3 - Prix",
    "legal.article3Text": "Les prix des prestations sont indiqués en euros TTC. Spa Woda se réserve le droit de modifier ses tarifs à tout moment, les prestations étant facturées au tarif en vigueur au moment de la réservation.",
    "legal.article4": "Article 4 - Annulation",
    "legal.article4Text": "Toute annulation doit être effectuée au moins 24 heures avant le rendez-vous. En cas d'annulation tardive ou de non-présentation, la prestation pourra être facturée.",
    "legal.article5": "Article 5 - Responsabilité",
    "legal.article5Text": "Spa Woda met tout en œuvre pour assurer la qualité de ses prestations. En cas de réclamation, veuillez nous contacter dans un délai de 48 heures suivant la prestation.",
    "legal.article6": "Article 6 - Droit applicable",
    "legal.article6Text": "Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux de Lyon seront seuls compétents.",

    // Reviews content
    "review.1.text": "Yohaqîne est une femme en or. Ambiance cocooning, massage parfait, un professionnalisme et une gentillesse rare. Accueillie comme une reine !",
    "review.1.date": "il y a 3 mois",
    "review.2.text": "Un très grand merci pour le soin. Au travers du rituel Osaka, j'ai vécu un instant précieux coupé du temps. Confiante et apaisée.",
    "review.2.date": "il y a 2 mois",
    "review.3.text": "Prix abordable, c'est mon 2e passage pour un massage crânien. Résultats : repousse, plus de démangeaisons, cheveux sains et brillants !",
    "review.3.date": "il y a 6 mois",
    "review.4.text": "Un moment incroyable grâce à Yohaqîne. Du diagnostic à la séance, elle a toujours été pleine de douceur et à l'écoute.",
    "review.4.date": "il y a 6 mois",
    "review.5.text": "Époustouflant ! La cabine de head spa est très jolie, le soin merveilleux et très relaxant. Pure douceur et brillance extrême.",
    "review.5.date": "il y a 6 mois",
    "review.6.text": "Professionnalisme, douceur et extrêmement empathie. Elle saura répondre à vos besoins et apaiser votre esprit. Moment de détente absolu.",
    "review.6.date": "il y a 1 an",
    "review.7.text": "Moment incroyable, l'accueil est chaleureux. Les odeurs des produits sont divines. Mes cheveux n'ont jamais été aussi beaux !",
    "review.7.date": "il y a 9 mois",
    "review.8.text": "Superbe expérience ! Prestation de qualité, ambiance cocooning et produits naturels. Je recommande vivement pour une parenthèse bien-être.",
    "review.8.date": "il y a 8 mois",
  },
  en: {
    // Navbar
    "nav.treatments": "Treatments",
    "nav.institute": "The Institute",
    "nav.experience": "The Experience",
    "nav.training": "Head Spa Training",
    "nav.contact": "Contact",
    "nav.academy": "Academy",
    "nav.book": "Book Now",
    "nav.becomePractitioner": "Become a Practitioner",

    // Hero
    "hero.subtitle": "Spa Woda Institute",
    "hero.title": "The Art of Japanese Head Spa in Lyon.",
    "hero.tagline": "A sensory journey by Yohaqîne Chopin.",
    "hero.cta": "Book a Treatment",
    "hero.discover": "Discover",

    // Philosophy
    "philosophy.label": "The Institute",
    "philosophy.title": "A",
    "philosophy.titleHighlight": "Sanctuary",
    "philosophy.titleEnd": "of Serenity",
    "philosophy.p1": "Welcome to Spa Woda, where the ancient art of Japanese Head Spa meets French excellence. Founded by Yohaqîne Chopin, a passionate professional from the world of hotel spas, our institute is a haven of peace in the heart of Lyon.",
    "philosophy.p2": "Each treatment is a bespoke experience, using noble and organic products: donkey milk, precious oils, and traditional Japanese rituals. Here, we don't simply offer treatments — we provide a sensory journey towards",
    "philosophy.p2Highlight": "absolute relaxation",
    "philosophy.p3": "Our Wabi-Sabi philosophy celebrates the beauty of imperfection and the harmony between body and mind. Let yourself be carried away by the gentleness of our rituals.",
    "philosophy.cta": "Discover Our Treatments",

    // Treatments
    "treatments.label": "Our Treatments",
    "treatments.title": "The",
    "treatments.titleHighlight": "Rituals",
    "treatments.titleEnd": "of Spa Woda",
    "treatments.book": "Book",
    "treatments.bookByPhone": "Book by Phone",
    "treatments.openingHours": "Tuesday to Saturday, 9am - 7pm",
    "treatments.important": "Important:",
    "treatments.warning1": "No coloring, Botox, or bleaching one week before and after a session",
    "treatments.warning2": "Men & Women welcome",
    "treatments.warning3": "Children with lice not accepted",
    "treatments.mostPopular": "Most Popular",
    "treatments.comboSavings": "Combo -€15",

    // Treatment names & descriptions
    "treatment.rituel.name": "Spa Woda Ritual",
    "treatment.rituel.desc": "The complete Head Spa experience: welcome & diagnosis, scalp treatment, wellness massage, facial care, hair ritual, and beauty finishing touches.",
    "treatment.cranienCalif.name": "Cranial & Californian Massage",
    "treatment.cranienCalif.desc": "Give your mind a deep break with our cranial massage inspired by Japanese Head Spa, combined with an enveloping Californian massage.",
    "treatment.cranien.name": "Cranial Massage",
    "treatment.cranien.desc": "By gently stimulating the scalp, this massage helps release muscle tension and soothe the mind.",
    "treatment.californien.name": "Californian Massage",
    "treatment.californien.desc": "A soft and enveloping treatment to promote relaxation and reconnection with oneself.",
    "treatment.signature.name": "Spa Woda Signature Massage",
    "treatment.signature.desc": "The Essence of Bespoke Wellness. A fully personalized treatment that combines gentleness and precision, inspired by Japanese techniques.",
    "treatment.ayurvedique.name": "Ayurvedic Massage",
    "treatment.ayurvedique.desc": "Inspired by Indian tradition, this massage rebalances energies and revitalizes the body.",
    "treatment.suedois.name": "Swedish Massage",
    "treatment.suedois.desc": "Ideal for releasing muscle tension and boosting circulation through tonic movements.",
    "treatment.polynesien.name": "Polynesian Massage",
    "treatment.polynesien.desc": "Inspired by ancestral Tahitian traditions, this massage uses long flowing movements reminiscent of ocean waves.",

    // Atmosphere
    "atmosphere.label": "The Experience",
    "atmosphere.title": "A",
    "atmosphere.titleHighlight": "Unique",
    "atmosphere.titleEnd": "Atmosphere",
    "atmosphere.videoCaption": "Sensory",
    "atmosphere.videoCaptionHighlight": "Immersion",
    "atmosphere.videoSubCaption": "Soft lighting, soothing sounds, enchanting fragrances.",
    "atmosphere.rightTitle": "An exceptional",
    "atmosphere.rightTitleHighlight": "sensory journey",
    "atmosphere.rightTitleEnd": "",
    "atmosphere.rightP1": "Immerse yourself in a unique experience where every detail has been designed for your well-being. Soft lighting, soothing sounds, and enchanting fragrances create a bubble of serenity conducive to deep relaxation.",
    "atmosphere.rightP2": "We exclusively use exceptional products, carefully selected from our partners",
    "atmosphere.rightP2End": ". These brands share our values of quality and respect, for an authentic and beneficial experience.",
    "atmosphere.partnersTitle": "Our",
    "atmosphere.partnersTitleHighlight": "Partners",
    "atmosphere.partnersSubtitle": "Exceptional products carefully selected",
    "atmosphere.promoCode": "Promo Code -10%",
    "atmosphere.partnerLabel": "Spa Woda Partner",
    "atmosphere.visitSite": "Visit Website",
    "atmosphere.promoCodeLabel": "Promo Code",
    "atmosphere.discount": "-10% on your order",

    // Reviews
    "reviews.label": "Google Reviews",
    "reviews.title": "What they",
    "reviews.titleHighlight": "say",

    // Formation
    "formation.label": "Professional Training",
    "formation.title": "Become a",
    "formation.titleHighlight": "Head Spa",
    "formation.titleEnd": "Practitioner",
    "formation.description": "Would you like to master the art of Japanese Head Spa and make it your profession? Join our certified training and learn ancestral techniques from experienced professionals.",
    "formation.cta": "Discover the Training",

    // Footer
    "footer.tagline": "The art of Japanese Head Spa in Lyon.",
    "footer.tagline2": "A sanctuary of serenity.",
    "footer.contact": "Contact",
    "footer.links": "Links",
    "footer.becomePractitioner": "Become a Practitioner",
    "footer.legalNotice": "Legal Notice",
    "footer.terms": "Terms & Conditions",
    "footer.copyright": "All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.inLyon": "in Lyon",

    // Legal Modal
    "legal.mentions.title": "Legal Notice",
    "legal.cgv.title": "Terms and Conditions",
    "legal.editor": "Site Publisher",
    "legal.headquarters": "Headquarters: Lyon 69009, France",
    "legal.email": "Email: contact@spawoda.fr",
    "legal.hosting": "Hosting",
    "legal.hostingText": "This site is hosted by Lovable.",
    "legal.ip": "Intellectual Property",
    "legal.ipText": "All content on this site (texts, images, videos, logos) is protected by copyright. Any reproduction, even partial, is prohibited without prior authorization.",
    "legal.data": "Personal Data Protection",
    "legal.dataText": "In accordance with GDPR, you have the right to access, rectify, and delete your personal data. To exercise these rights, contact us at contact@spawoda.fr.",
    "legal.cookies": "Cookies",
    "legal.cookiesText": "This site uses cookies to improve your browsing experience. By continuing to browse this site, you accept the use of cookies.",
    "legal.article1": "Article 1 - Purpose",
    "legal.article1Text": "These general terms and conditions govern the contractual relationships between Spa Woda and its clients for any service provision.",
    "legal.article2": "Article 2 - Booking",
    "legal.article2Text": "Bookings can be made by phone or via our online booking system. Any booking is considered firm and final.",
    "legal.article3": "Article 3 - Prices",
    "legal.article3Text": "Service prices are indicated in euros including VAT. Spa Woda reserves the right to modify its rates at any time, services being billed at the rate in effect at the time of booking.",
    "legal.article4": "Article 4 - Cancellation",
    "legal.article4Text": "Any cancellation must be made at least 24 hours before the appointment. In case of late cancellation or no-show, the service may be charged.",
    "legal.article5": "Article 5 - Liability",
    "legal.article5Text": "Spa Woda makes every effort to ensure the quality of its services. In case of complaint, please contact us within 48 hours following the service.",
    "legal.article6": "Article 6 - Applicable Law",
    "legal.article6Text": "These general terms and conditions are subject to French law. In case of dispute, the courts of Lyon shall have sole jurisdiction.",

    // Reviews content - keeping original French names, translating text
    "review.1.text": "Yohaqîne is a gem. Cozy atmosphere, perfect massage, rare professionalism and kindness. Welcomed like a queen!",
    "review.1.date": "3 months ago",
    "review.2.text": "A huge thank you for the treatment. Through the Osaka ritual, I experienced a precious moment cut off from time. Confident and soothed.",
    "review.2.date": "2 months ago",
    "review.3.text": "Affordable price, this is my 2nd visit for a cranial massage. Results: regrowth, no more itching, healthy and shiny hair!",
    "review.3.date": "6 months ago",
    "review.4.text": "An incredible moment thanks to Yohaqîne. From diagnosis to session, she was always gentle and attentive.",
    "review.4.date": "6 months ago",
    "review.5.text": "Breathtaking! The head spa cabin is beautiful, the treatment wonderful and very relaxing. Pure gentleness and extreme shine.",
    "review.5.date": "6 months ago",
    "review.6.text": "Professionalism, gentleness and extreme empathy. She will meet your needs and soothe your mind. Moment of absolute relaxation.",
    "review.6.date": "1 year ago",
    "review.7.text": "Incredible moment, the welcome is warm. The product scents are divine. My hair has never looked so beautiful!",
    "review.7.date": "9 months ago",
    "review.8.text": "Superb experience! Quality service, cozy atmosphere and natural products. Highly recommend for a wellness break.",
    "review.8.date": "8 months ago",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
