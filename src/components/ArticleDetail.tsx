import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Share2, 
  Check, 
  ExternalLink, 
  ArrowLeft, 
  ChevronRight, 
  ArrowUp, 
  BookOpen, 
  BookmarkCheck,
  AlertCircle,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Home
} from 'lucide-react';
import { Article, CategorySlug } from '../types/blog';
import { getRelatedArticles } from '../data/articles';
import { siteMetadata } from '../data/seoMetadata';
import { ArticleCard } from './ArticleCard';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectCategory?: (category: CategorySlug) => void;
  onNavigateHome?: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  onBack,
  onSelectArticle,
  onSelectCategory,
  onNavigateHome,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(article.sections[0]?.id || '');
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);

  const relatedArticles = getRelatedArticles(article.slug);
  const articleFaqs = siteMetadata[article.id]?.faqs ?? [];

  // Scroll to top on article switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (article.sections[0]) {
      setActiveSection(article.sections[0].id);
    }
  }, [article.slug]);

  // Track scroll position to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const section of article.sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.sections]);

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.summary,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copy link
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedPublished = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const formattedVerified = new Date(article.lastVerifiedDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="min-h-screen bg-[#FFF9FB] pb-24">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#FFF9FB] border-b border-[#F8D5E2]/80 sticky top-20 z-20 backdrop-blur-md bg-[#FFF9FB]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#796873] truncate">
            {onNavigateHome ? (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1 text-[#796873] hover:text-[#650D25] font-medium transition-colors cursor-pointer"
                title="Return to Home"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </button>
            ) : (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1 text-[#650D25] font-semibold hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}
            <ChevronRight className="w-3 h-3 text-[#F8D5E2]" />
            {onSelectCategory ? (
              <button
                onClick={() => onSelectCategory(article.category)}
                className="text-[#650D25] font-semibold hover:underline cursor-pointer"
              >
                {article.categoryName}
              </button>
            ) : (
              <span className="text-[#650D25] font-semibold">{article.categoryName}</span>
            )}
            <ChevronRight className="w-3 h-3 text-[#F8D5E2] hidden sm:inline" />
            <span className="truncate max-w-xs text-[#30212A] font-medium hidden sm:inline" aria-current="page">
              {article.title}
            </span>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FCE7EF] hover:bg-[#F8D5E2] text-[#650D25] font-semibold transition-colors cursor-pointer"
              title="Share or copy article link"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Area */}
      <header className="pt-10 pb-12 bg-gradient-to-b from-[#FCE7EF]/30 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Metadata Bar (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#796873] mb-4">
            <span className="font-bold text-[#650D25] tracking-wider uppercase text-[11px]">
              {article.categoryName}
            </span>
            <span aria-hidden="true" className="text-[#F8D5E2]">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#796873]/80" />
              <span>{article.readingTimeMinutes} min read</span>
            </span>
            <span aria-hidden="true" className="text-[#F8D5E2]">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#796873]/80" />
              <span>Published {formattedPublished}</span>
            </span>
            <span aria-hidden="true" className="text-[#F8D5E2]">·</span>
            <span className="flex items-center gap-1 text-[#650D25] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified {formattedVerified}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight leading-[1.2] mb-4 text-balance">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#796873] leading-relaxed mb-6 font-normal">
            {article.subtitle}
          </p>

          {/* Author Transparency Bar */}
          <div className="pt-4 border-t border-[#F8D5E2]/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#796873] gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#650D25] text-[#FFF9FB] flex items-center justify-center font-serif text-xs font-bold">
                TCE
              </div>
              <div>
                <span className="font-semibold text-[#30212A]">{article.author.name}</span>
                <span className="text-[#796873] ml-1.5">({article.author.role})</span>
              </div>
            </div>
            <div className="text-[11px] text-[#796873]/80 italic">
              {article.author.note}
            </div>
          </div>

        </div>
      </header>

      {/* Main Reading Container: Grid with Sticky Table of Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Sticky Table of Contents on Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-36 space-y-6">
              
              <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-xl p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1.5 text-xs">
                  {article.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block py-1.5 px-2 rounded-md transition-colors leading-snug ${
                        activeSection === section.id
                          ? 'bg-[#FCE7EF] text-[#650D25] font-semibold'
                          : 'text-[#796873] hover:text-[#30212A] hover:bg-[#FCE7EF]/30'
                      }`}
                    >
                      {section.heading}
                    </a>
                  ))}
                  {articleFaqs.length > 0 && (
                    <a
                      href="#faqs"
                      className="block py-1.5 px-2 rounded-md text-[#796873] hover:text-[#30212A] hover:bg-[#FCE7EF]/30 transition-colors"
                    >
                      Quick Answers & FAQs
                    </a>
                  )}
                  <a
                    href="#sources"
                    className="block py-1.5 px-2 rounded-md text-[#796873] hover:text-[#30212A] hover:bg-[#FCE7EF]/30 transition-colors"
                  >
                    Verified Sources
                  </a>
                </nav>
              </div>

              {/* Sourcing Summary Box */}
              <div className="bg-[#FCE7EF]/50 border border-[#F8D5E2] rounded-xl p-4 text-xs text-[#796873] space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-[#650D25]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Citations Status</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  This article contains {article.sources.length} direct authoritative citations checked against primary documentation.
                </p>
              </div>

            </div>
          </aside>

          {/* Center Column: Long-Form Editorial Prose */}
          <div className="lg:col-span-8 max-w-prose">
            
            {/* Editorial Article Hero Visual (Image SEO Optimized) */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-[#F8D5E2] bg-[#FCE7EF]/30 shadow-xs">
              <img
                src={article.heroImage}
                alt={article.imageAlt || `${article.title} - The Creator Edit`}
                width={1200}
                height={675}
                className="w-full h-auto aspect-video object-cover"
                loading="eager"
              />
              <div className="px-4 py-2.5 bg-[#FFF9FB] border-t border-[#F8D5E2]/80 text-[11px] text-[#796873] flex items-center justify-between">
                <span className="italic">{article.imageAlt || article.title}</span>
                <span className="font-semibold text-[#650D25]">Photo & Research · The Creator Edit</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-gradient-to-br from-[#FCE7EF]/70 via-[#FFF9FB] to-[#F8D5E2]/40 border border-[#F8D5E2] rounded-xl p-6 sm:p-7 mb-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
                <BookmarkCheck className="w-4 h-4 text-[#650D25]" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#30212A] leading-relaxed">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#650D25] mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-12 text-[#30212A]">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-36">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#650D25] tracking-tight mb-4 pb-2 border-b border-[#F8D5E2]/60">
                    {section.heading}
                  </h2>
                  
                  {/* Clean Markdown/Paragraph Renderer */}
                  <div className="text-sm sm:text-base leading-relaxed space-y-4 text-[#30212A]">
                    {section.content.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={pIdx} className="font-serif text-lg sm:text-xl font-bold text-[#420817] mt-6 mb-2">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('---')) {
                        return (
                          <hr key={pIdx} className="my-6 border-t border-[#F8D5E2]" />
                        );
                      }
                      if (paragraph.startsWith('```') || paragraph.includes('| :--- |')) {
                        // Formatted block / table / code
                        return (
                          <div key={pIdx} className="my-4 p-4 rounded-lg bg-[#FCE7EF]/50 border border-[#F8D5E2] overflow-x-auto text-xs font-mono leading-relaxed text-[#30212A]">
                            <pre className="whitespace-pre-wrap">{paragraph.replace(/```/g, '')}</pre>
                          </div>
                        );
                      }
                      return (
                        <p key={pIdx} className="leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Answer Engine Optimization (AEO) & Quick Answers Section */}
            {articleFaqs.length > 0 && (
              <section id="faqs" className="mt-14 pt-8 border-t-2 border-[#F8D5E2] scroll-mt-36">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-2">
                  <HelpCircle className="w-4 h-4 text-[#650D25]" />
                  <span>Quick Answers & FAQs (AEO Featured Snippets)</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#30212A] mb-3">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-[#796873] mb-6">
                  Direct, concise answers to core questions about {article.title.toLowerCase()}.
                </p>

                <div className="space-y-4">
                  {articleFaqs.map((faq, idx) => {
                    const isOpen = openFaqIndices.includes(idx);
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#F8D5E2] bg-[#FFF9FB] overflow-hidden transition-all shadow-xs"
                      >
                        <button
                          onClick={() => {
                            setOpenFaqIndices(prev => 
                              prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                            );
                          }}
                          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif text-base font-semibold text-[#650D25] hover:bg-[#FCE7EF]/40 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#650D25] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#796873] shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-[#30212A] leading-relaxed border-t border-[#F8D5E2]/40 bg-[#FCE7EF]/20">
                            <p className="font-normal">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Authoritative Sources Section */}
            <section id="sources" className="mt-16 pt-8 border-t-2 border-[#F8D5E2] scroll-mt-36">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#650D25]" />
                <span>Primary Sources & Authoritative Citations</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#30212A] mb-4">
                Verified References
              </h3>
              <p className="text-xs text-[#796873] mb-6">
                All claims in this article have been referenced against public platform documentation and verified regulatory publications. We do not invent sources or cite unverified rumors.
              </p>

              <div className="space-y-4">
                {article.sources.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FCE7EF]/30 border border-[#F8D5E2] flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-sm font-bold text-[#650D25] hover:text-[#420817] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{src.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                      <div className="text-[11px] text-[#796873]">
                        <span>Publisher: {src.publisher}</span>
                        <span className="mx-2">·</span>
                        <span>Accessed: {src.accessDate}</span>
                      </div>
                      {src.notes && (
                        <p className="text-xs text-[#30212A]/80 italic pt-1">
                          {src.notes}
                        </p>
                      )}
                    </div>

                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-[#650D25] bg-[#FFF9FB] border border-[#F8D5E2] rounded-md hover:bg-[#FCE7EF] transition-colors shrink-0 cursor-pointer self-start"
                    >
                      <span>View Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Author & Instagram Connect Card */}
            <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-[#FCE7EF] to-[#FFF9FB] border border-[#F8D5E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-[#650D25]">The Creator Edit</span>
                  <span className="text-[11px] font-semibold text-[#796873]">· Editorial Desk</span>
                </div>
                <p className="text-xs text-[#796873]">
                  Have feedback, questions, or a topic request? Connect directly on Instagram.
                </p>
              </div>
              <a
                href="https://www.instagram.com/navinya__more__16"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#650D25] text-[#FFF9FB] hover:bg-[#420817] text-xs font-semibold transition-colors shrink-0 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@navinya__more__16</span>
              </a>
            </div>

            {/* Legal Educational Disclaimer */}
            <div className="mt-6 p-5 rounded-xl bg-[#FFF9FB] border border-[#F8D5E2] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#650D25] shrink-0 mt-0.5" />
              <div className="text-xs text-[#796873] leading-relaxed">
                <span className="font-semibold text-[#30212A]">Editorial Disclaimer: </span>
                {article.disclaimer || 'Content is provided for educational purposes. Platform features, advertising guidelines, laws, and industry practices can change. Always consult the relevant official source for the latest requirements.'}
              </div>
            </div>

            {/* Floating / Sticky Back To Top Control */}
            <div className="mt-12 pt-6 border-t border-[#F8D5E2] flex items-center justify-between">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650D25] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to All Guides</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#796873] hover:text-[#650D25] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Related Articles Section */}
      <section className="mt-20 pt-16 bg-[#FCE7EF]/30 border-t border-[#F8D5E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#F8D5E2]/80">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-1">
                Continue Reading
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#30212A]">
                Related Editorial Guides
              </h3>
            </div>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#650D25] hover:underline"
            >
              All Articles →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard
                key={rel.id}
                article={rel}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        </div>
      </section>

    </article>
  );
};
