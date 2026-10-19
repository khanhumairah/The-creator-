import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Article } from '../types/blog';
import { ArticleCard } from './ArticleCard';

interface FeaturedArticlesProps {
  articles: Article[];
  onSelectArticle: (slug: string) => void;
  onViewAll: () => void;
}

export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  articles,
  onSelectArticle,
  onViewAll,
}) => {
  return (
    <section className="py-16 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#F8D5E2]/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#30212A] tracking-tight">
              Featured Editorial Guides
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650D25] hover:text-[#420817] group transition-colors cursor-pointer"
          >
            <span>View all 10 guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={onSelectArticle}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
