export type CategorySlug = 
  | 'instagram-growth'
  | 'brand-collaborations'
  | 'ugc-creation'
  | 'creator-monetization'
  | 'content-strategy'
  | 'creator-tools';

export interface SourceReference {
  title: string;
  url: string;
  publisher: string;
  accessDate: string;
  notes?: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string; // Markdown or rich formatted paragraphs
  subsections?: {
    heading: string;
    content: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  categoryName: string;
  tags: string[];
  publishedDate: string;
  lastVerifiedDate: string;
  readingTimeMinutes: number;
  heroImage: string;
  imageAlt?: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    note: string;
  };
  summary: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  sources: SourceReference[];
  disclaimer?: string;
  relatedSlugs: string[];
  primaryKeyword?: string;
  secondaryKeywords?: [string, string];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export type ViewMode = 
  | 'home'
  | 'all-articles'
  | 'category'
  | 'article-detail'
  | 'toolkit'
  | 'about'
  | 'editorial-policy'
  | 'contact'
  | 'privacy';
