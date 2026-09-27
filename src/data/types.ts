export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  date?: string;
  source: string;
  image: string;
  tags: string[];
}

export interface Sculpture {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  confidence: "established" | "debated";
  source: string;
  image?: string;
}

export interface OralHistory {
  id: string;
  roleTitle: string;
  language: string;
  description: string;
  transcript: string;
  attribution: string;
  recordedYear: string;
  tags: string[];
  duration?: string;
}

export interface ThreeDExperience {
  title: string;
  provider: string;
  url: string;
  embedUrl?: string;
  description: string;
  documentationMethod: string;
  year: string;
  credit: string;
  license?: string;
}

export interface MediaCredit {
  imageId: string;
  source: string;
  license: string;
  url?: string;
}

export interface SiteMapMarker {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  image?: string;
  archiveRefs: string[];
}

export interface ExploreCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  archiveNumber: string;
  link: string;
}

export interface SecondaryResource {
  title: string;
  provider: string;
  url: string;
  description: string;
  credit: string;
  license?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
