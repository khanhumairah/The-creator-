import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, BookOpen, Clock, Frown, Sparkles } from 'lucide-react';
import { Article, CategorySlug } from '../types/blog';
import { allArticles, categoryList } from '../data/articles';
import { ArticleCard } from './ArticleCard';

interface AllArticlesViewProps {
  initialCategory?: CategorySlug | 'all';
  onSelectArticle: (slug: string) => void;
  onSelectCategoryFilter: (cat: CategorySlug | 'all') => void;
}

export const AllArticlesView: React.FC<AllArticlesViewProps> = ({
  initialCategory = 'all',
  onSelectArticle,
  onSelectCategoryFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>(initialCategory);
  const [sortBy, setSortBy] = useState<'newest' | 'readTime'>('newest');

  // Keep state synced with props if initialCategory changes
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (cat: CategorySlug | 'all') => {
    setSelectedCategory(cat);
    onSelectCategoryFilter(cat);
  };

  const filteredArticles = useMemo(() => {
    let result = allArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q))
      );
    });

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
    } else if (sortBy === 'readTime') {
      result.sort((a, b) => a.readingTimeMinutes - b.readingTimeMinutes);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const categoryTitle = useMemo(() => {
    if (selectedCategory === 'all') return 'All Editorial Guides';
    const match = categoryList.find((c) => c.slug === selectedCategory);
    return match ? match.name : 'Articles';
  }, [selectedCategory]);

  const categoryDescription = useMemo(() => {
    if (selectedCategory === 'all') {
      return 'Explore all 10 complete, evidence-based articles on content strategy, platform algorithms, commercial pitching, UGC, and creator finance.';
    }
    const match = categoryList.find((c) => c.slug === selectedCategory);
    return match ? match.description : '';
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      
      {/* Header Banner */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Publication Index</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            {categoryTitle}
          </h1>
          <p className="text-sm sm:text-base text-[#796873] leading-relaxed">
            {categoryDescription}
          </p>
        </div>
      </section>

      {/* Filter and Search Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Controls Container */}
        <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#796873] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword or tag..."
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#FFF9FB] border border-[#F8D5E2] rounded-lg text-[#30212A] placeholder:text-[#796873] focus:outline-none focus:ring-2 focus:ring-[#650D25]/40"
              />
            </div>

            {/* Sort & Counter */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs text-[#796873]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#650D25]" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'readTime')}
                  className="bg-transparent border border-[#F8D5E2] rounded-md px-2 py-1 text-xs text-[#30212A] focus:outline-none cursor-pointer"
                >
                  <option value="newest">Newest Guides</option>
                  <option value="readTime">Shortest Read Time</option>
                </select>
              </div>

              <span className="font-medium text-[#30212A] text-xs">
                Showing {filteredArticles.length} of 10 articles
              </span>
            </div>

          </div>

          {/* Category Tabs (Segmented Buttons) */}
          <div className="pt-2 border-t border-[#F8D5E2]/60 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              All Topics (10)
            </button>
            <button
              onClick={() => handleCategoryChange('instagram-growth')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'instagram-growth'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              Instagram Growth
            </button>
            <button
              onClick={() => handleCategoryChange('brand-collaborations')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'brand-collaborations'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              Brand Deals & Law
            </button>
            <button
              onClick={() => handleCategoryChange('ugc-creation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'ugc-creation'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              UGC & Production
            </button>
            <button
              onClick={() => handleCategoryChange('creator-monetization')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'creator-monetization'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              Monetization & Taxes
            </button>
            <button
              onClick={() => handleCategoryChange('content-strategy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'content-strategy'
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'bg-[#FCE7EF]/50 text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              Content Strategy
            </button>
          </div>

        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
            <Frown className="w-12 h-12 text-[#650D25]/40 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#30212A]">
              No articles found
            </h3>
            <p className="text-xs text-[#796873] max-w-sm mx-auto">
              We couldn&rsquo;t find any articles matching your search criteria. Try clearing your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-md transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
