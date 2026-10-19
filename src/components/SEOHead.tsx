import React, { useEffect } from 'react';
import { PageSEOMetadata } from '../types/seo';
import { SITE_DOMAIN } from '../data/seoMetadata';

interface SEOHeadProps {
  metadata: PageSEOMetadata;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ metadata }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = metadata.seoTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', metadata.metaDescription);
    setMetaTag(
      'meta[name="keywords"]', 
      'name', 
      'keywords', 
      `${metadata.primaryKeyword}, ${metadata.secondaryKeywords.join(', ')}`
    );
    setMetaTag('meta[name="robots"]', 'name', 'robots', metadata.indexingPreference);

    // 3. Canonical Tag
    setLinkTag('canonical', metadata.canonicalUrl);

    // 4. OpenGraph Tags
    const fullImageUrl = metadata.featuredImage.startsWith('http')
      ? metadata.featuredImage
      : `${SITE_DOMAIN}${metadata.featuredImage}`;

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', metadata.seoTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metadata.metaDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', metadata.canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImageUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', metadata.id.startsWith('article-') ? 'article' : 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'The Creator Edit');

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.seoTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.metaDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImageUrl);

    // 6. JSON-LD Structured Data
    // Remove existing dynamic json-ld scripts
    const existingScripts = document.querySelectorAll('script[data-seo="dynamic-jsonld"]');
    existingScripts.forEach(script => script.remove());

    const schemas: object[] = [];

    // WebSite & Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'The Creator Edit',
      url: SITE_DOMAIN,
      description: 'An honest, evidence-based publication on content creation, Instagram growth, brand partnerships, UGC, and creator monetization.',
      publisher: {
        '@type': 'Organization',
        name: 'The Creator Edit',
        url: SITE_DOMAIN,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_DOMAIN}/src/assets/images/hero_creator_workspace_1791864556523.jpg`
        }
      }
    });

    // BreadcrumbList Schema
    if (metadata.breadcrumbs && metadata.breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: metadata.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      });
    }

    // Article / BlogPosting Schema
    if (metadata.id.startsWith('article-')) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': metadata.canonicalUrl
        },
        headline: metadata.h1,
        description: metadata.metaDescription,
        image: fullImageUrl,
        datePublished: metadata.datePublished || '2026-02-14',
        dateModified: metadata.dateModified || metadata.datePublished || '2026-10-11',
        author: {
          '@type': 'Person',
          name: metadata.authorName || 'Navinya More',
          url: metadata.authorUrl || 'https://www.instagram.com/navinya__more__16'
        },
        publisher: {
          '@type': 'Organization',
          name: 'The Creator Edit',
          url: SITE_DOMAIN
        },
        keywords: `${metadata.primaryKeyword}, ${metadata.secondaryKeywords.join(', ')}`,
        wordCount: metadata.wordCount || 1000
      });
    }

    // FAQPage Schema for AEO (Answer Engine Optimization)
    if (metadata.faqs && metadata.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: metadata.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    // Inject JSON-LD Script
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.setAttribute('data-seo', 'dynamic-jsonld');
    scriptTag.textContent = JSON.stringify(schemas);
    document.head.appendChild(scriptTag);

  }, [metadata]);

  return null; // Side-effect only component
};
