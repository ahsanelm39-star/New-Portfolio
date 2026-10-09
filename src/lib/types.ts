export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface LocalizedArray {
  en: string[];
  ar: string[];
}

export type ProjectCategory = 
  | 'all'
  | 'commercial'
  | 'automotive'
  | 'hospitality'
  | 'services'
  | 'fintech'
  | 'saas';

export interface ProjectStat {
  label: LocalizedString;
  value: string;
}

export interface Project {
  slug: string;
  projectType: 'client' | 'concept';
  featured: boolean;
  order: number;
  title: LocalizedString;
  tagline: LocalizedString;
  industry: LocalizedString;
  category: ProjectCategory;
  location: LocalizedString;
  platform: 'Webflow' | 'Webflow + Custom CSS' | 'Webflow + Custom Code' | 'Custom Code' | 'GoHighLevel + Custom CSS';
  platformContextNote?: LocalizedString;
  deliveryScope?: LocalizedString;
  role: LocalizedString;
  languages: LocalizedString;
  image: string;
  liveUrl: string;
  overview: LocalizedString;
  challenge: LocalizedString;
  approach: LocalizedString;
  designDecisions: LocalizedArray;
  keyFeatures: LocalizedArray;
  keyTakeaways: LocalizedArray;
  techTags: string[];
  metrics: ProjectStat[];
}

export interface ServiceItem {
  id: string;
  order: number;
  icon: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedArray;
  idealFor: LocalizedString;
  badge: LocalizedString;
  isPrimaryWebflow: boolean;
  isBackgroundExperience?: boolean;
}

export interface NavItem {
  key: string;
  href: string;
  label: LocalizedString;
}
