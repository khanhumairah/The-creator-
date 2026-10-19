import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onExploreArticles: () => void;
  onStartHere: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreArticles, onStartHere }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9FB] via-[#FCE7EF]/30 to-[#FFF9FB] border-b border-[#F8D5E2]/60 pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Promise */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quiet 1-line kicker (No pill box) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#650D25]">
              <span>Independent Editorial Platform</span>
              <span aria-hidden="true" className="text-[#F8D5E2]">·</span>
              <span className="text-[#796873]">No Fluff or Fake Hacks</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#30212A] leading-[1.15] text-balance">
              Your honest guide to the <span className="text-[#650D25] italic font-normal">creator economy</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#796873] leading-relaxed max-w-2xl font-normal">
              Practical guides to content creation, brand partnerships, UGC, and building a creator career—without the hype. Transparent sourcing, realistic expectations, and zero viral fairy tales.
            </p>

            {/* Value Checkpoints */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#30212A]/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#650D25] shrink-0" />
                <span>Verified Meta & Instagram algorithm insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#650D25] shrink-0" />
                <span>Indian creator pricing & tax standards (TDS/GST)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#650D25] shrink-0" />
                <span>Official ASCI disclosure guidelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#650D25] shrink-0" />
                <span>Scam protection & contract red flags</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreArticles}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Articles</span>
              </button>

              <button
                onClick={onStartHere}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#650D25] bg-[#FCE7EF] hover:bg-[#F8D5E2] border border-[#F8D5E2] rounded-lg transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Start Here: Beginner Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Imagery */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#F8D5E2] to-[#FCE7EF] rounded-2xl -rotate-1 -z-10" />

              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#F8D5E2] bg-[#FFF9FB] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hero_creator_workspace_1791864556523.jpg"
                    alt="Content creator desk workspace with mirrorless camera, smartphone tripod, notebook, and natural light"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#FCE7EF]/60 text-center">
                    <ImageIcon className="w-12 h-12 text-[#650D25]/40 mb-3" />
                    <p className="font-serif text-sm font-semibold text-[#650D25]">
                      The Creator Edit Workspace
                    </p>
                    <p className="text-xs text-[#796873] mt-1">
                      Editorial Still Life & Workflow
                    </p>
                  </div>
                )}

                {/* Subtle caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#420817]/90 via-[#420817]/40 to-transparent p-4 text-[#FFF9FB]">
                  <p className="font-serif text-xs italic tracking-wide">
                    Focus on the craft, the audience, and the honesty of the message.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
