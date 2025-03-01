export interface Philosophy {
  name: string;
  type: 'ethics' | 'metaPhysics' | 'epistemology';
  description: string;
  key_figures: string[];
  quote: string;
  principles: string[];
  impact: string;
  major_works: string[];
}

export type Philosophies = Philosophy[];
