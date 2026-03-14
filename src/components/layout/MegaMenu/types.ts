export interface MegaMenuLink {
  label: {
    pl: string;
    de: string;
    en: string;
  };
  href: string;
  external?: boolean;
  icon?: string;
  highlight?: boolean;
}

export interface MegaMenuSection {
  id: string;
  title: {
    pl: string;
    de: string;
    en: string;
  };
  links: MegaMenuLink[];
}

export interface FeaturedNewsItem {
  id: string;
  title: string;
  date: string;
  image?: string;
  href: string;
  category?: string;
}

export interface QuickAction {
  id: string;
  label: {
    pl: string;
    de: string;
    en: string;
  };
  href: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}
