import React from 'react';
import { ShieldCheck, FileCheck, HelpCircle, Eye, AlertCircle } from 'lucide-react';
import { ViewMode } from '../types/blog';

interface TransparencyPromiseProps {
  onReadPolicy: () => void;
}

export const TransparencyPromise: React.FC<TransparencyPromiseProps> = ({ onReadPolicy }) => {
  return (
    <section className="py-16 bg-[#FFF9FB] border-t border-[#F8D5E2]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FCE7EF]/60 via-[#FFF9FB] to-[#F8D5E2]/40 border border-[#F8D5E2] rounded-2xl p-8 sm:p-12">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-2">
              <ShieldCheck className="w-4 h-4 text-[#650D25]" />
              <span>Our Editorial Standard</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#30212A] tracking-tight mb-4 text-balance">
              Real creator advice. Transparent information. No fake promises.
            </h2>

            <p className="text-sm text-[#796873] leading-relaxed mb-8">
              The creator education space is flooded with hyperbole, rented cars, fake dashboard screenshots, and unverifiable &ldquo;growth hacks.&rdquo; The Creator Edit operates under an explicit editorial constitution built on four pillars:
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#FFF9FB] p-5 rounded-xl border border-[#F8D5E2]">
              <div className="w-9 h-9 rounded-lg bg-[#FCE7EF] flex items-center justify-center text-[#650D25] mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#30212A] mb-1.5">
                Primary Documentation
              </h3>
              <p className="text-xs text-[#796873] leading-relaxed">
                Algorithm insights cite official Meta, YouTube, and platform documentation, not speculative viral rumors.
              </p>
            </div>

            <div className="bg-[#FFF9FB] p-5 rounded-xl border border-[#F8D5E2]">
              <div className="w-9 h-9 rounded-lg bg-[#FCE7EF] flex items-center justify-center text-[#650D25] mb-3">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#30212A] mb-1.5">
                Fact vs. Opinion Separation
              </h3>
              <p className="text-xs text-[#796873] leading-relaxed">
                We clearly label what is a statutory legal regulation (ASCI/CCPA) versus an editorial opinion or practical recommendation.
              </p>
            </div>

            <div className="bg-[#FFF9FB] p-5 rounded-xl border border-[#F8D5E2]">
              <div className="w-9 h-9 rounded-lg bg-[#FCE7EF] flex items-center justify-center text-[#650D25] mb-3">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#30212A] mb-1.5">
                Labeled Estimates
              </h3>
              <p className="text-xs text-[#796873] leading-relaxed">
                Commercial rates (INR) are labeled as illustrative freelance scenarios with explicit caveats, never manufactured &ldquo;industry averages.&rdquo;
              </p>
            </div>

            <div className="bg-[#FFF9FB] p-5 rounded-xl border border-[#F8D5E2]">
              <div className="w-9 h-9 rounded-lg bg-[#FCE7EF] flex items-center justify-center text-[#650D25] mb-3">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#30212A] mb-1.5">
                Public Correction Desk
              </h3>
              <p className="text-xs text-[#796873] leading-relaxed">
                Every article documents its last verification date. Readers can report discrepancies for prompt editorial review.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#F8D5E2] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#796873]">
              Read our full methodology, citation standards, and corrections protocol:
            </span>
            <button
              onClick={onReadPolicy}
              className="text-xs font-semibold text-[#650D25] hover:text-[#420817] hover:underline cursor-pointer"
            >
              View Full Editorial & Sourcing Policy →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
