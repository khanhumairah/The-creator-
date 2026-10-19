import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Reader Privacy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            Privacy Policy & Data Notice
          </h1>
          <p className="text-base text-[#796873] max-w-xl mx-auto">
            Last updated: October 2026. Clear, transparent commitments regarding data collection and tracking.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-xs sm:text-sm text-[#796873] leading-relaxed">
        
        <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 font-bold text-[#650D25] text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>1. Zero Invasive Tracking</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-[#30212A]">
            We Do Not Monetize Reader Data
          </h2>
          <p>
            <em>The Creator Edit</em> does not sell, rent, or trade reader personal data, behavioral profiles, or email addresses to third-party data brokers, ad networks, or creator marketing agencies.
          </p>
        </div>

        <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 font-bold text-[#650D25] text-xs uppercase tracking-wider">
            <Eye className="w-4 h-4" />
            <span>2. Cookies & Local Storage</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-[#30212A]">
            Technical Operations Only
          </h2>
          <p>
            This website utilizes minimal client-side state solely for essential user experience features (such as maintaining filter choices in memory or caching calculations in the Creator Toolkit during your active session). We do not deploy cross-site tracking pixels or invasive advertising beacons.
          </p>
        </div>

        <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 font-bold text-[#650D25] text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>3. Demonstration Features</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-[#30212A]">
            Form Submissions in Demo Mode
          </h2>
          <p>
            The newsletter signup and contact dispatch forms provided on this platform function as client-side interactive demonstrations. Unless a verified backend API endpoint is explicitly configured in production, no form data is transmitted to external servers or retained in persistent databases.
          </p>
        </div>

      </div>
    </div>
  );
};
