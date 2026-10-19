export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageSEOMetadata {
  id: string;
  pageName: string;
  urlPath: string; // e.g. "/blog/how-to-start-content-creation-2026-beginners-guide"
  canonicalUrl: string;
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  seoTitle: string; // 50-60 chars target
  metaDescription: string; // 140-160 chars target
  h1: string;
  featuredImage: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  indexingPreference: 'index, follow' | 'noindex, follow';
  breadcrumbs: BreadcrumbItem[];
  faqs?: FAQItem[];
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  wordCount?: number;
}
