import React, { useState, useEffect } from 'react';
import { ViewMode, CategorySlug } from './types/blog';
import { allArticles, getFeaturedArticles, getArticleBySlug } from './data/articles';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedArticles } from './components/FeaturedArticles';
import { CategoryExplore } from './components/CategoryExplore';
import { LearningPath } from './components/LearningPath';
import { TransparencyPromise } from './components/TransparencyPromise';
import { NewsletterSection } from './components/NewsletterSection';
import { ArticleDetail } from './components/ArticleDetail';
import { AllArticlesView } from './components/AllArticlesView';
import { ToolkitView } from './components/ToolkitView';
import { AboutView } from './components/AboutView';
import { EditorialPolicyView } from './components/EditorialPolicyView';
import { ContactView } from './components/ContactView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { SearchModal } from './components/SearchModal';
import { ArticleCard } from './components/ArticleCard';
import { SEOHead } from './components/SEOHead';
import { getSEOMetadataForRoute } from './data/seoMetadata';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>('all');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Helper to resolve route from current window.location (pathname and hash)
  const resolveCurrentRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash.replace('#', '').replace(/^\//, '');

    // 1. If hash exists, normalize it into a clean canonical path
    if (hash) {
      if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        window.history.replaceState({}, '', `/blog/${slug}`);
        return { view: 'article-detail' as ViewMode, slug, category: 'all' as CategorySlug | 'all' };
      }
      if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        window.history.replaceState({}, '', `/blog/${slug}`);
        return { view: 'article-detail' as ViewMode, slug, category: 'all' as CategorySlug | 'all' };
      }
      if (hash.startsWith('category/')) {
        const cat = hash.replace('category/', '') as CategorySlug;
        window.history.replaceState({}, '', `/category/${cat}`);
        return { view: 'category' as ViewMode, slug: null, category: cat };
      }
      if (hash === 'all-articles' || hash === 'blog') {
        window.history.replaceState({}, '', '/blog');
        return { view: 'all-articles' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
      }
      if (['toolkit', 'about', 'editorial-policy', 'contact', 'privacy'].includes(hash)) {
        window.history.replaceState({}, '', `/${hash}`);
        return { view: hash as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
      }
    }

    // 2. Parse clean pathname
    const cleanPath = path.replace(/\/$/, '') || '/';
    if (cleanPath === '/' || cleanPath === '') {
      return { view: 'home' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath === '/blog' || cleanPath === '/articles') {
      return { view: 'all-articles' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      return { view: 'article-detail' as ViewMode, slug, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath.startsWith('/category/')) {
      const cat = cleanPath.replace('/category/', '') as CategorySlug;
      return { view: 'category' as ViewMode, slug: null, category: cat };
    }
    if (cleanPath === '/toolkit') {
      return { view: 'toolkit' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath === '/about') {
      return { view: 'about' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath === '/editorial-policy') {
      return { view: 'editorial-policy' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath === '/contact') {
      return { view: 'contact' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }
    if (cleanPath === '/privacy') {
      return { view: 'privacy' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
    }

    return { view: 'home' as ViewMode, slug: null, category: 'all' as CategorySlug | 'all' };
  };

  // Sync route state on mount and browser back/forward (popstate and hashchange)
  useEffect(() => {
    const handleLocationChange = () => {
      const { view, slug, category } = resolveCurrentRoute();
      setCurrentView(view);
      setSelectedArticleSlug(slug);
      setSelectedCategory(category);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: ViewMode, cat?: CategorySlug) => {
    let targetPath = '/';
    if (view === 'home') {
      targetPath = '/';
    } else if (view === 'all-articles') {
      targetPath = '/blog';
    } else if (view === 'category' && cat) {
      targetPath = `/category/${cat}`;
    } else if (view === 'article-detail' && selectedArticleSlug) {
      targetPath = `/blog/${selectedArticleSlug}`;
    } else {
      targetPath = `/${view}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentView(view);
    if (view === 'category' && cat) {
      setSelectedCategory(cat);
    } else if (view === 'all-articles') {
      setSelectedCategory('all');
    }
    if (view !== 'article-detail') {
      setSelectedArticleSlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (slug: string) => {
    const targetPath = `/blog/${slug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setSelectedArticleSlug(slug);
    setCurrentView('article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: CategorySlug) => {
    const targetPath = `/category/${cat}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setSelectedCategory(cat);
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentArticle = selectedArticleSlug ? getArticleBySlug(selectedArticleSlug) : null;
  const featuredArticles = getFeaturedArticles();

  // Active SEO & AEO metadata for current view
  const activeSEOMetadata = getSEOMetadataForRoute(
    currentView,
    currentView === 'article-detail' ? selectedArticleSlug : (currentView === 'category' ? selectedCategory : null)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FB] text-[#30212A]">
      {/* Dynamic SEO & AEO Meta / JSON-LD Injection */}
      <SEOHead metadata={activeSEOMetadata} />
      
      {/* Universal 3-Zone Navigation Header */}
      <Navbar
        currentView={currentView}
        selectedCategory={selectedCategory}
        onNavigate={(view, cat) => navigateTo(view, cat)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <Hero
              onExploreArticles={() => navigateTo('all-articles')}
              onStartHere={() => {
                const el = document.getElementById('learning-path');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 2. Featured Articles */}
            <FeaturedArticles
              articles={featuredArticles}
              onSelectArticle={handleSelectArticle}
              onViewAll={() => navigateTo('all-articles')}
            />

            {/* 3. Explore by Category */}
            <CategoryExplore
              onSelectCategory={handleSelectCategory}
              onOpenToolkit={() => navigateTo('toolkit')}
            />

            {/* 4. Beginner's Learning Path */}
            <div id="learning-path">
              <LearningPath
                onSelectArticle={handleSelectArticle}
                onOpenToolkit={() => navigateTo('toolkit')}
              />
            </div>

            {/* 5. Latest Articles Showcase (All 10 accessible from homepage) */}
            <section className="py-16 bg-[#FFF9FB] border-t border-[#F8D5E2]/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#F8D5E2]/80 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Complete Library</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#30212A] tracking-tight">
                      Latest Published Guides
                    </h2>
                  </div>

                  <button
                    onClick={() => navigateTo('all-articles')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650D25] hover:underline cursor-pointer"
                  >
                    <span>Browse All 10 Guides with Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allArticles.slice(0, 6).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onSelect={handleSelectArticle}
                    />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => navigateTo('all-articles')}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#650D25] bg-[#FCE7EF] hover:bg-[#F8D5E2] rounded-lg border border-[#F8D5E2] transition-colors cursor-pointer"
                  >
                    <span>View Remaining Guides (4 More)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* 6. Transparency Promise */}
            <TransparencyPromise
              onReadPolicy={() => navigateTo('editorial-policy')}
            />

            {/* 7. Newsletter Section (Demo notice included) */}
            <NewsletterSection />
          </div>
        )}

        {/* VIEW 2: ARTICLE DETAIL */}
        {currentView === 'article-detail' && currentArticle && (
          <ArticleDetail
            article={currentArticle}
            onBack={() => navigateTo('all-articles')}
            onSelectArticle={handleSelectArticle}
            onSelectCategory={(cat) => navigateTo('category', cat)}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {/* VIEW 3 & 4: ALL ARTICLES & CATEGORY VIEW */}
        {(currentView === 'all-articles' || currentView === 'category') && (
          <AllArticlesView
            initialCategory={currentView === 'category' ? selectedCategory : 'all'}
            onSelectArticle={handleSelectArticle}
            onSelectCategoryFilter={(cat) => {
              setSelectedCategory(cat);
              if (cat === 'all') {
                window.location.hash = 'all-articles';
              } else {
                window.location.hash = `category/${cat}`;
              }
            }}
          />
        )}

        {/* VIEW 5: CREATOR TOOLKIT */}
        {currentView === 'toolkit' && <ToolkitView />}

        {/* VIEW 6: ABOUT */}
        {currentView === 'about' && (
          <AboutView onNavigate={(view) => navigateTo(view)} />
        )}

        {/* VIEW 7: EDITORIAL POLICY */}
        {currentView === 'editorial-policy' && (
          <EditorialPolicyView onNavigate={(view) => navigateTo(view)} />
        )}

        {/* VIEW 8: CONTACT */}
        {currentView === 'contact' && <ContactView />}

        {/* VIEW 9: PRIVACY POLICY */}
        {currentView === 'privacy' && <PrivacyPolicyView />}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={(view, cat) => navigateTo(view, cat)} />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={handleSelectArticle}
      />

    </div>
  );
}
