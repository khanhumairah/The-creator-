import { Article, CategorySlug } from '../../types/blog';
import { article1 } from './article1';
import { article2 } from './article2';
import { article3 } from './article3';
import { article4 } from './article4';
import { article5 } from './article5';
import { article6 } from './article6';
import { article7 } from './article7';
import { article8 } from './article8';
import { article9 } from './article9';
import { article10 } from './article10';

export const allArticles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
];

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  description: string;
  articleCount: number;
}

export const categoryList: CategoryInfo[] = [
  {
    slug: 'instagram-growth',
    name: 'Instagram Growth',
    description: 'Evidence-based breakdown of Meta algorithms, Reels watch time mechanics, and genuine retention strategy.',
    articleCount: allArticles.filter(a => a.category === 'instagram-growth').length
  },
  {
    slug: 'brand-collaborations',
    name: 'Brand Collaborations',
    description: 'Professional outreach pitching, creator-brand fit, usage rights, contracts, and ASCI legal disclosures.',
    articleCount: allArticles.filter(a => a.category === 'brand-collaborations').length
  },
  {
    slug: 'ugc-creation',
    name: 'UGC & Content Creation',
    description: 'User-Generated Content asset production, commercial paid ad licensing, and brand portfolio building.',
    articleCount: allArticles.filter(a => a.category === 'ugc-creation').length
  },
  {
    slug: 'creator-monetization',
    name: 'Creator Monetization',
    description: 'Realistic INR pricing frameworks, media kits, Indian TDS/GST tax hygiene, and scam defense.',
    articleCount: allArticles.filter(a => a.category === 'creator-monetization').length
  },
  {
    slug: 'content-strategy',
    name: 'Content Strategy',
    description: 'Niche selection, repeatable content pillars, weekly batch workflows, and sustainable consistency.',
    articleCount: allArticles.filter(a => a.category === 'content-strategy').length
  },
  {
    slug: 'creator-tools',
    name: 'Creator Tools',
    description: 'Interactive rate calculators, media kit builder templates, pitch scripts, and compliance checklists.',
    articleCount: 1 // Link to the Toolkit
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return allArticles.filter(article => article.featured);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return allArticles.filter(article => article.category === category);
}

export function getRelatedArticles(currentSlug: string): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return allArticles.slice(0, 3);
  
  // Prefer explicitly listed related slugs
  const matched = current.relatedSlugs
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);

  if (matched.length >= 3) {
    return matched.slice(0, 3);
  }

  // Fallback to same category or other articles
  const others = allArticles.filter(a => a.slug !== currentSlug && !matched.some(m => m.slug === a.slug));
  return [...matched, ...others].slice(0, 3);
}

export function searchArticles(query: string, categoryFilter?: CategorySlug | 'all'): Article[] {
  const cleanQuery = query.toLowerCase().trim();
  
  return allArticles.filter(article => {
    const matchesCategory = !categoryFilter || categoryFilter === 'all' || article.category === categoryFilter;
    if (!matchesCategory) return false;
    
    if (!cleanQuery) return true;

    const inTitle = article.title.toLowerCase().includes(cleanQuery);
    const inSubtitle = article.subtitle.toLowerCase().includes(cleanQuery);
    const inSummary = article.summary.toLowerCase().includes(cleanQuery);
    const inTags = article.tags.some(tag => tag.toLowerCase().includes(cleanQuery));
    const inSections = article.sections.some(s => 
      s.heading.toLowerCase().includes(cleanQuery) || s.content.toLowerCase().includes(cleanQuery)
    );

    return inTitle || inSubtitle || inSummary || inTags || inSections;
  });
}
