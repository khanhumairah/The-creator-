import React from 'react';
import { 
  Instagram, 
  Briefcase, 
  Video, 
  Coins, 
  LayoutTemplate, 
  Wrench, 
  ArrowRight 
} from 'lucide-react';
import { CategorySlug, ViewMode } from '../types/blog';
import { categoryList } from '../data/articles';

interface CategoryExploreProps {
  onSelectCategory: (category: CategorySlug) => void;
  onOpenToolkit: () => void;
}

export const CategoryExplore: React.FC<CategoryExploreProps> = ({
  onSelectCategory,
  onOpenToolkit,
}) => {
  const getCategoryIcon = (slug: CategorySlug) => {
    switch (slug) {
      case 'instagram-growth':
        return <Instagram className="w-5 h-5 text-[#650D25]" />;
      case 'brand-collaborations':
        return <Briefcase className="w-5 h-5 text-[#650D25]" />;
      case 'ugc-creation':
        return <Video className="w-5 h-5 text-[#650D25]" />;
      case 'creator-monetization':
        return <Coins className="w-5 h-5 text-[#650D25]" />;
      case 'content-strategy':
        return <LayoutTemplate className="w-5 h-5 text-[#650D25]" />;
      case 'creator-tools':
        return <Wrench className="w-5 h-5 text-[#650D25]" />;
    }
  };

  const handleCardClick = (slug: CategorySlug) => {
    if (slug === 'creator-tools') {
      onOpenToolkit();
    } else {
      onSelectCategory(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-[#FCE7EF]/40 border-y border-[#F8D5E2]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-2">
            Thematic Focus Areas
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30212A] tracking-tight mb-3">
            Explore by Category
          </h2>
          <p className="text-sm text-[#796873]">
            Deep-dive into verified guides organized around the real stages of building an independent creator career.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryList.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => handleCardClick(cat.slug)}
              className="group bg-[#FFF9FB] border border-[#F8D5E2] rounded-xl p-6 hover:border-[#650D25]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FCE7EF] flex items-center justify-center group-hover:bg-[#F8D5E2] transition-colors">
                    {getCategoryIcon(cat.slug)}
                  </div>
                  <span className="text-[11px] font-medium text-[#796873]">
                    {cat.slug === 'creator-tools' ? 'Interactive' : `${cat.articleCount} Guides`}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#30212A] group-hover:text-[#650D25] transition-colors mb-2">
                  {cat.name}
                </h3>

                <p className="text-xs text-[#796873] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-[#650D25] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Browse {cat.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
