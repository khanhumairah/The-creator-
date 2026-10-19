import React, { useState } from 'react';
import { Clock, Calendar, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { Article } from '../types/blog';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  layout?: 'grid' | 'featured' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect, layout = 'grid' }) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Formatted date string
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const descriptiveAlt = article.imageAlt || `${article.title} - ${article.categoryName} guide`;

  if (layout === 'compact') {
    return (
      <article 
        onClick={() => onSelect(article.slug)}
        className="group flex gap-4 items-start p-3 -mx-3 rounded-lg hover:bg-[#FCE7EF]/40 transition-colors cursor-pointer"
        aria-label={`Read article: ${article.title}`}
      >
        <div className="w-20 h-20 shrink-0 rounded overflow-hidden bg-[#F8D5E2]/30 relative">
          {!imageFailed ? (
            <img
              src={article.heroImage}
              alt={descriptiveAlt}
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#650D25]/40" aria-hidden="true">
              <ImageIcon className="w-6 h-6" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[11px] text-[#796873] mb-1">
            <span className="font-medium text-[#650D25]">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTimeMinutes} min read</span>
          </div>
          <h4 className="font-serif text-sm font-semibold text-[#30212A] group-hover:text-[#650D25] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
        </div>
      </article>
    );
  }

  return (
    <article 
      onClick={() => onSelect(article.slug)}
      className="group flex flex-col bg-[#FFF9FB] border border-[#F8D5E2] rounded-xl overflow-hidden hover:border-[#650D25]/30 hover:shadow-md transition-all duration-200 cursor-pointer"
      aria-label={`Read article: ${article.title}`}
    >
      {/* Cover Image Container */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#F8D5E2]/40 relative">
        {!imageFailed ? (
          <img
            src={article.heroImage}
            alt={descriptiveAlt}
            width={480}
            height={300}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FCE7EF] to-[#F8D5E2] text-[#650D25]/50 p-6 text-center" aria-hidden="true">
            <ImageIcon className="w-8 h-8 mb-2" />
            <span className="font-serif text-xs font-medium text-[#650D25]">{article.categoryName}</span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Zero-Pill Unboxed Metadata Line */}
          <div className="flex items-center gap-2 text-xs text-[#796873] mb-2.5">
            <span className="font-semibold text-[#650D25] uppercase tracking-wider text-[11px]">
              {article.categoryName}
            </span>
            <span aria-hidden="true" className="text-[#F8D5E2]">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#796873]/80" aria-hidden="true" />
              <span>{article.readingTimeMinutes} min read</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-[#30212A] group-hover:text-[#650D25] transition-colors leading-snug line-clamp-2 mb-2">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-[#796873] leading-relaxed line-clamp-3 mb-4">
            {article.summary}
          </p>
        </div>

        {/* Footer Meta & Action */}
        <div className="pt-3 border-t border-[#FCE7EF] flex items-center justify-between text-xs text-[#796873]">
          <span className="flex items-center gap-1 text-[11px]">
            <Calendar className="w-3 h-3 text-[#796873]/70" aria-hidden="true" />
            <time dateTime={article.publishedDate}>{formattedDate}</time>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#650D25] group-hover:translate-x-0.5 transition-transform text-[12px]">
            <span>Read {article.categoryName} Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
};
