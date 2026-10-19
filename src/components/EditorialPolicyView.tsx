import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, AlertTriangle, RefreshCw, Mail } from 'lucide-react';
import { ViewMode } from '../types/blog';

interface EditorialPolicyViewProps {
  onNavigate: (view: ViewMode) => void;
}

export const EditorialPolicyView: React.FC<EditorialPolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      {/* Header */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity & Standards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            Editorial & Sourcing Policy
          </h1>
          <p className="text-base sm:text-lg text-[#796873] leading-relaxed max-w-2xl mx-auto">
            Our governing standards on fact-checking, primary source selection, pricing estimates, correction protocols, and commercial independence.
          </p>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Section 1: Fact Checking & Source Selection */}
        <section className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650D25]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Section 1</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#30212A]">
            Fact-Checking and Primary Sourcing
          </h2>
          <div className="text-xs sm:text-sm text-[#796873] leading-relaxed space-y-3">
            <p>
              We prioritize primary, verifiable sources above all else. When reporting on social media algorithms, monetization guidelines, or platform rules, we cite:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#30212A]">
              <li>Official Meta Platforms Help Centers, Meta Transparency Center, and Instagram for Creators documentation.</li>
              <li>Official YouTube Creator Academy and Google support portals.</li>
              <li>The Advertising Standards Council of India (ASCI) self-regulatory code and published advisory digests.</li>
              <li>The Ministry of Consumer Affairs, Central Consumer Protection Authority (CCPA), and relevant Indian statutory gazettes.</li>
            </ul>
            <p>
              We do not cite anonymous forum threads, speculative influencer &ldquo;cheat codes,&rdquo; or unverified marketing folklore as established facts. If a claim is an observational trend rather than an official policy, it is explicitly described as an editorial interpretation.
            </p>
          </div>
        </section>

        {/* Section 2: How Sources Are Cited */}
        <section className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650D25]">
            <FileText className="w-4 h-4" />
            <span>Section 2</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#30212A]">
            Direct Citations and Verification Timestamps
          </h2>
          <div className="text-xs sm:text-sm text-[#796873] leading-relaxed space-y-3">
            <p>
              Every article published on <em>The Creator Edit</em> concludes with a dedicated <strong>Verified References</strong> index containing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#30212A]">
              <li>The exact title and organization of the primary source.</li>
              <li>A direct, clickable URL to the public destination.</li>
              <li>The explicit date the source was accessed and reviewed by our desk.</li>
            </ul>
            <p>
              We never fabricate URLs, cite private inaccessible repositories as public citations, or claim to have accessed pages that were not examined.
            </p>
          </div>
        </section>

        {/* Section 3: Commercial Estimates & Pricing Transparency */}
        <section className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650D25]">
            <AlertTriangle className="w-4 h-4" />
            <span>Section 3</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#30212A]">
            How Commercial Estimates Are Labelled
          </h2>
          <div className="text-xs sm:text-sm text-[#796873] leading-relaxed space-y-3">
            <p>
              Creator compensation varies widely across geography, production fidelity, audience trust, and negotiation leverage. <em>The Creator Edit</em> never invents fake &ldquo;national average creator salaries&rdquo; or presents arbitrary freelance figures as universal truths.
            </p>
            <p>
              When numerical rates (such as INR quotes in Article 6 and our Creator Toolkit) are provided, they are explicitly labeled as <strong>illustrative scenarios</strong> intended for scope calibration. We provide the formulaic logic (hours x rate + licensing) so creators can evaluate their own economics independently.
            </p>
          </div>
        </section>

        {/* Section 4: Corrections & Reader Dispute Protocol */}
        <section className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650D25]">
            <RefreshCw className="w-4 h-4" />
            <span>Section 4</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#30212A]">
            Corrections and Reporting Factual Errors
          </h2>
          <div className="text-xs sm:text-sm text-[#796873] leading-relaxed space-y-3">
            <p>
              Platform algorithms, API endpoints, advertising laws, and tax rules evolve continuously. When a platform changes a policy or a factual discrepancy is identified:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-[#30212A]">
              <li>Our editorial desk verifies the change against primary platform releases.</li>
              <li>The article text is updated with the new information.</li>
              <li>The <strong>Last Verified Date</strong> header is updated to reflect the review.</li>
            </ol>
            <p>
              If you identify an outdated link, broken URL, or factual discrepancy, please notify our team via our Contact Desk. We evaluate all reader submissions with genuine gratitude.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-md transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Submit a Correction or Inquiry</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
