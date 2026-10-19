import React from 'react';
import { Sparkles, ShieldCheck, Target, HeartHandshake, BookOpen } from 'lucide-react';
import { ViewMode } from '../types/blog';

interface AboutViewProps {
  onNavigate: (view: ViewMode) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      {/* Header */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial Mission</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            About The Creator Edit
          </h1>
          <p className="text-base sm:text-lg text-[#796873] leading-relaxed max-w-2xl mx-auto">
            An independent educational publication built to demystify the creator economy with evidence, rigor, and radical honesty.
          </p>
        </div>
      </section>

      {/* Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Core Origin & Mission */}
        <section className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#650D25]">
            Why This Publication Exists
          </h2>
          <div className="text-sm sm:text-base leading-relaxed text-[#30212A] space-y-4">
            <p>
              The creator education ecosystem has an integrity problem. Aspiring influencers and student creators are bombarded with get-rich-quick masterclasses, fabricated earnings screenshots, and promises of &ldquo;instant virality.&rdquo; Meanwhile, practical questions go unanswered: <em>How do you write a cold pitch? What is the difference between UGC licensing and influencer posts? How does TDS work under Section 194J in India? What are your legal obligations under ASCI guidelines?</em>
            </p>
            <p>
              <strong>The Creator Edit</strong> was founded on a simple premise: <strong>Real creator advice. Transparent information. No fake promises.</strong> We treat content creation as a disciplined craft and legitimate professional enterprise, requiring real operational systems, financial literacy, and legal awareness.
            </p>
          </div>
        </section>

        {/* Intended Audience */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#FCE7EF]/40 border border-[#F8D5E2] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#650D25] text-white flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#30212A]">
              Indian Students & Beginners
            </h3>
            <p className="text-xs text-[#796873] leading-relaxed">
              Young creators seeking to start on smartphones with minimal budget, balancing college lectures with a sustainable weekly publishing schedule.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FCE7EF]/40 border border-[#F8D5E2] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#650D25] text-white flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#30212A]">
              Micro & Niche Creators
            </h3>
            <p className="text-xs text-[#796873] leading-relaxed">
              Creators with 1,000 to 25,000 followers who want to build high-converting media kits and pitch brands without bought metrics.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#FCE7EF]/40 border border-[#F8D5E2] space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#650D25] text-white flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#30212A]">
              Aspiring UGC Producers
            </h3>
            <p className="text-xs text-[#796873] leading-relaxed">
              Videographers and writers who prefer not to build public personal followings but want to monetize commercial asset production.
            </p>
          </div>
        </section>

        {/* Author Transparency Statement */}
        <section className="bg-[#FCE7EF]/30 border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#650D25]">
            <ShieldCheck className="w-4 h-4" />
            <span>Author & Contributor Transparency</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#30212A]">
            Editorial Desk Notice
          </h2>
          <div className="text-xs sm:text-sm text-[#796873] leading-relaxed space-y-3">
            <p>
              Founded and curated by <strong>Navinya More</strong> (Instagram:{' '}
              <a
                href="https://www.instagram.com/navinya__more__16"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#650D25] underline hover:text-[#420817]"
              >
                @navinya__more__16
              </a>
              ), <em>The Creator Edit</em> is dedicated to transparent, evidence-based education for emerging content creators.
            </p>
            <p>
              In accordance with our anti-fabrication editorial guidelines, <strong>we do not invent fake corporate credentials, purchased awards, or misleading follower metrics</strong>.
            </p>
            <p>
              Articles on this platform are researched and maintained under the oversight of our <strong>Editorial Research Desk</strong>. All platform claims and regulatory guidelines are directly verified against primary documentation published by Meta, the Advertising Standards Council of India (ASCI), and the Ministry of Consumer Affairs.
            </p>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              onClick={() => onNavigate('editorial-policy')}
              className="px-4 py-2 text-xs font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-md transition-colors cursor-pointer"
            >
              Read Editorial Policy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold text-[#650D25] bg-[#FFF9FB] border border-[#F8D5E2] hover:bg-[#FCE7EF] rounded-md transition-colors cursor-pointer"
            >
              Contact Editorial Desk
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
