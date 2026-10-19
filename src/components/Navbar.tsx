import React, { useState } from 'react';
import { Sparkles, Search, Menu, X, ArrowRight } from 'lucide-react';
import { ViewMode, CategorySlug } from '../types/blog';

interface NavbarProps {
  currentView: ViewMode;
  selectedCategory?: CategorySlug | 'all';
  onNavigate: (view: ViewMode, categorySlug?: CategorySlug) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, selectedCategory, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewMode, cat?: CategorySlug) => {
    onNavigate(view, cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FB]/95 backdrop-blur-md border-b border-[#F8D5E2]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Wordmark Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#650D25] rounded p-1 shrink-0"
          >
            <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-[#650D25] group-hover:text-[#420817] transition-colors whitespace-nowrap">
              The Creator Edit
            </span>
            <Sparkles className="w-4 h-4 text-[#650D25]/70 group-hover:rotate-12 transition-transform shrink-0" />
          </button>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#796873]">
            <button
              onClick={() => handleNavClick('all-articles')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'all-articles'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => handleNavClick('category', 'instagram-growth')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'category' && selectedCategory === 'instagram-growth'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Instagram Growth
            </button>
            <button
              onClick={() => handleNavClick('category', 'brand-collaborations')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'category' && selectedCategory === 'brand-collaborations'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Brand Deals
            </button>
            <button
              onClick={() => handleNavClick('category', 'ugc-creation')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'category' && selectedCategory === 'ugc-creation'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              UGC & Creation
            </button>
            <button
              onClick={() => handleNavClick('toolkit')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'toolkit'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              Creator Toolkit
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`whitespace-nowrap transition-colors hover:text-[#650D25] cursor-pointer py-1 border-b-2 ${
                currentView === 'about'
                  ? 'text-[#650D25] border-[#650D25] font-semibold'
                  : 'border-transparent'
              }`}
            >
              About
            </button>
          </nav>

          {/* Zone 3: Search affordance + 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              aria-label="Search articles"
              className="p-2.5 text-[#650D25] hover:text-[#420817] hover:bg-[#FCE7EF] rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#650D25]"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('toolkit')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-md transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Pricing & Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#650D25] hover:bg-[#FCE7EF] rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9FB] border-b border-[#F8D5E2] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3 text-base">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 font-medium text-[#30212A] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('all-articles')}
              className="text-left py-2 font-medium text-[#30212A] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              All Articles (10 Guides)
            </button>
            <button
              onClick={() => handleNavClick('category', 'instagram-growth')}
              className="text-left py-2 text-[#796873] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              Instagram Growth & Algorithm
            </button>
            <button
              onClick={() => handleNavClick('category', 'brand-collaborations')}
              className="text-left py-2 text-[#796873] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              Brand Deals & Influencer Marketing
            </button>
            <button
              onClick={() => handleNavClick('category', 'ugc-creation')}
              className="text-left py-2 text-[#796873] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              UGC & Content Creation
            </button>
            <button
              onClick={() => handleNavClick('category', 'creator-monetization')}
              className="text-left py-2 text-[#796873] hover:text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              Creator Business & Monetization
            </button>
            <button
              onClick={() => handleNavClick('toolkit')}
              className="text-left py-2 font-medium text-[#650D25] border-b border-[#FCE7EF]/60"
            >
              Creator Toolkit & Rate Calculator
            </button>
            <div className="pt-2 flex flex-col gap-2 text-sm text-[#796873]">
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-[#650D25]">
                About The Creator Edit
              </button>
              <button onClick={() => handleNavClick('editorial-policy')} className="text-left hover:text-[#650D25]">
                Editorial & Sourcing Policy
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-left hover:text-[#650D25]">
                Contact Editorial Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
