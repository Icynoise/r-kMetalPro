export type Lang = 'de' | 'en' | 'sr';

export type ProjectCategory =
  | 'glass'
  | 'balcony'
  | 'stairs'
  | 'fencing'
  | 'doors'
  | 'cnc';

export interface LocalizedText {
  de: string;
  en: string;
  sr: string;
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  title: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  tags: { de: string[]; en: string[]; sr: string[] };
  images: ProjectImage[];
}
