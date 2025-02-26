export interface Philosophy {
  name: string;
  type: 'ethics' | 'metaPhysics' | 'epistemology';
  description: string;
  key_figures: string[];
  quote: string;
}

export type Philosophies = Philosophy[];
