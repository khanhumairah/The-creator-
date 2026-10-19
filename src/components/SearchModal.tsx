import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Calendar, ArrowRight, Frown } from 'lucide-react';
import { Article, CategorySlug } from '../types/blog';
import { searchArticles } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | 'all'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results: Article[] = searchArticles(query, selectedCategory);

  const categories: { label: string; value: CategorySlug | 'all' }[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Instagram Growth', value: 'instagram-growth' },
    { label: 'Brand Collaborations', value: 'brand-collaborations' },
    { label: 'UGC Creation', value: 'ugc-creation' },
    { label: 'Creator Monetization', value: 'creator-monetization' },
    { label: 'Content Strategy', value: 'content-strategy' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#30212A]/60 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FFF9FB] rounded-2xl shadow-2xl border border-[#F8D5E2] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#F8D5E2] flex items-center gap-3 bg-[#FFF9FB]">
          <Search className="w-5 h-5 text-[#650D25] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by keyword (e.g. Reels, TDS, ASCI, pitch, pricing)..."
            className="flex-1 text-sm bg-transparent border-none text-[#30212A] placeholder:text-[#796873] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#796873] hover:text-[#30212A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-semibold text-[#796873] hover:text-[#650D25] px-2 py-1 rounded cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Filter Category Tabs (Buttons) */}
        <div className="px-4 py-2.5 bg-[#FCE7EF]/40 border-b border-[#F8D5E2] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#650D25] text-[#FFF9FB]'
                  : 'text-[#796873] hover:text-[#30212A] hover:bg-[#F8D5E2]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {results.length > 0 ? (
            results.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article.slug);
                  onClose();
                }}
                className="group p-3.5 rounded-xl border border-[#F8D5E2]/60 hover:border-[#650D25]/40 hover:bg-[#FCE7EF]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 text-[11px] text-[#796873] mb-1">
                  <span className="font-semibold text-[#650D25]">{article.categoryName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTimeMinutes} min read</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.publishedDate}</span>
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-[#30212A] group-hover:text-[#650D25] transition-colors leading-snug mb-1">
                  {article.title}
                </h4>

                <p className="text-xs text-[#796873] line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>

                <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#650D25]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          ) : (
            /* Clear Empty State */
            <div className="py-12 text-center text-[#796873] space-y-3">
              <Frown className="w-10 h-10 mx-auto text-[#650D25]/40" />
              <p className="font-serif text-base font-semibold text-[#30212A]">
                No matching articles found
              </p>
              <p className="text-xs max-w-sm mx-auto text-[#796873]">
                We couldn&rsquo;t find any articles matching &ldquo;{query}&rdquo;. Try searching for &ldquo;Reels&rdquo;, &ldquo;Pitching&rdquo;, &ldquo;UGC&rdquo;, &ldquo;Pricing&rdquo;, or &ldquo;ASCI&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FCE7EF]/20 border-t border-[#F8D5E2] text-center text-[11px] text-[#796873]">
          Displaying {results.length} of 10 fully verified editorial guides
        </div>

      </div>
    </div>
  );
};
