export interface NavItem {
  name: string;
  path: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    primaryColor: string;
    quote: string;
  };
  contact: {
    phone: string;
    mobile: string;
    fax: string;
    email: string;
    address: string;
    openingHours: string;
    city: string;
    serviceArea: string;
  };
  navigation: Record<string, NavItem>;
  header: {
    logoSrc: string;
    logoAlt: string;
    logoAriaLabel: string;
    brandLine1: string;
    brandLine2: string;
    navAriaLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    mobileCallCta: string;
  };
  footer: {
    tagline: string;
    description: string;
    contactHeading: string;
    serviceAreaLabel: string;
    faxLabel: string;
    legalHeading: string;
    impressumLabel: string;
    datenschutzLabel: string;
    kontaktLabel: string;
    copyrightSuffix: string;
  };
  cookieBanner: {
    title: string;
    textPreLink: string;
    privacyLinkLabel: string;
    textPostLink: string;
    acceptLabel: string;
    declineLabel: string;
  };
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogUrl: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  jsonLd: {
    name: string;
    description: string;
    url: string;
    telephone: string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
    areaServed: string;
    priceRange: string;
  };
}

export interface CmsImage {
  src: string;
  alt: string;
}

export interface HomeContent {
  meta: { title: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: CmsImage;
  };
  philosophy: {
    label: string;
    image: CmsImage;
  };
  services: {
    eyebrow: string;
    title: string;
    linkLabel: string;
    items: Record<string, { title: string; desc: string; img: string }>;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    features: Record<string, { title: string; desc: string }>;
    cta: string;
    image: CmsImage;
    badgeValue: string;
    badgeLabel: string;
  };
  cta: {
    titleLine1: string;
    titleLine2: string;
    text: string;
  };
}

export interface KontaktContent {
  intro: { title: string; subtitle: string };
  details: {
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    officeHoursHeading: string;
    serviceAreaHeading: string;
    note: string;
  };
  form: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    dsgvoPreLink: string;
    dsgvoLinkLabel: string;
    dsgvoPostLink: string;
    submitLabel: string;
  };
  success: {
    title: string;
    text: string;
    backLabel: string;
  };
}

export interface LeistungenContent {
  meta: { title: string; description: string };
  intro: { accent: string; title: string; description: string };
  services: Record<string, { title: string; description: string; features: Record<string, string> }>;
  usp: {
    title: string;
    subline: string;
    items: Record<string, { title: string; desc: string }>;
  };
  steps: {
    title: string;
    items: Record<string, { step: number; title: string; desc: string }>;
  };
  cta: { title: string; text: string };
}

export interface UeberUnsContent {
  meta: { title: string; description: string };
  intro: { title: string; text: string };
  philosophy: {
    title: string;
    text: string;
    values: Record<string, string>;
    image: CmsImage;
    overlayQuote: string;
  };
  security: {
    title: string;
    boxes: Record<string, { label: string; text: string }>;
  };
}

export interface ImpressumContent {
  meta: { title: string; description: string };
  title: string;
  tmg: { heading: string };
  representedBy: { heading: string; name: string };
  contact: { heading: string; phoneLabel: string; emailLabel: string };
  register: {
    heading: string;
    line1: string;
    courtLabel: string;
    court: string;
    numberLabel: string;
    number: string;
  };
  tax: { heading: string; label: string; number: string };
  editorial: { heading: string; name: string };
  dispute: { heading: string; text: string };
}

export interface DatenschutzContent {
  meta: { title: string; description: string };
  title: string;
  overview: {
    heading: string;
    generalHeading: string;
    generalText: string;
    collectionHeading: string;
    collectionText: string;
  };
  hosting: { heading: string; text: string };
  web3forms: { heading: string; text: string };
  rights: { heading: string; text: string };
  note: string;
}

export interface NotFoundContent {
  meta: { title: string };
  code: string;
  title: string;
  text: string;
  ctaLabel: string;
}
