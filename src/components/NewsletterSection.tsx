import React, { useState } from 'react';
import { Mail, CheckCircle2, Info } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 bg-[#FFF9FB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#420817] text-[#FFF9FB] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#650D25]/60 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#650D25] text-[11px] font-semibold text-[#F8D5E2] tracking-wider uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Weekly Editorial Dispatch</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FFF9FB]">
              Creator Strategy in Your Inbox
            </h3>

            <p className="text-xs sm:text-sm text-[#FCE7EF]/80 leading-relaxed">
              Every fortnight, we summarize verified platform policy changes, breakdown real campaign contract clauses, and share practical workflow systems for creators.
            </p>

            {/* Newsletter Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 text-xs bg-[#FFF9FB] text-[#30212A] rounded-lg border border-[#F8D5E2] focus:outline-none focus:ring-2 focus:ring-[#F8D5E2] placeholder:text-[#796873]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#30212A] bg-[#F8D5E2] hover:bg-[#FCE7EF] rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="pt-4 p-4 rounded-xl bg-[#650D25]/70 border border-[#F8D5E2]/30 max-w-md mx-auto text-center animate-in fade-in">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#F8D5E2] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Interactive Demo Mode</span>
                </div>
                <p className="text-xs text-[#FCE7EF]/80">
                  Thank you for testing the interface! As an open static demo, no backend email provider is connected and your address (<strong>{email}</strong>) has not been saved or transmitted.
                </p>
              </div>
            )}

            {/* Explicit Demo Transparency Notice */}
            <div className="pt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#FCE7EF]/60">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>
                Demonstration feature: No personal data is collected or tracked.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
