import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Clock, Info } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('correction');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('correction');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] pb-24">
      {/* Header */}
      <section className="pt-12 pb-14 bg-gradient-to-b from-[#FCE7EF]/40 via-[#FFF9FB] to-[#FFF9FB] border-b border-[#F8D5E2]/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EF] text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Editorial Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30212A] tracking-tight mb-4">
            Contact The Editorial Desk
          </h1>
          <p className="text-base sm:text-lg text-[#796873] leading-relaxed max-w-2xl mx-auto">
            Have a question about a guide, want to report a platform policy update, or wish to submit an illustrative case study? We welcome your input.
          </p>
        </div>
      </section>

      {/* Main Form & Desk Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 sm:p-8">
            <h2 className="font-serif text-xl font-bold text-[#30212A] mb-2">
              Send a Dispatch
            </h2>
            <p className="text-xs text-[#796873] mb-6">
              Please provide clear details. For error reports, include the article URL and the specific claim in question.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#30212A] mb-1">
                    Your Name: <span className="text-[#650D25]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 bg-[#FFF9FB] border border-[#F8D5E2] rounded-lg text-sm text-[#30212A] focus:outline-none focus:ring-2 focus:ring-[#650D25]/40"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#30212A] mb-1">
                    Your Email Address: <span className="text-[#650D25]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFF9FB] border border-[#F8D5E2] rounded-lg text-sm text-[#30212A] focus:outline-none focus:ring-2 focus:ring-[#650D25]/40"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#30212A] mb-1">
                    Subject / Category: <span className="text-[#650D25]">*</span>
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FFF9FB] border border-[#F8D5E2] rounded-lg text-sm text-[#30212A] focus:outline-none focus:ring-2 focus:ring-[#650D25]/40 cursor-pointer"
                  >
                    <option value="correction">Report a Factual Error / Policy Update</option>
                    <option value="feedback">General Article Feedback</option>
                    <option value="case-study">Creator Case Study Submission</option>
                    <option value="press">Press / Educational Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#30212A] mb-1">
                    Message / Context: <span className="text-[#650D25]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry, link to the relevant platform announcement, or provide context..."
                    className="w-full px-3.5 py-2.5 bg-[#FFF9FB] border border-[#F8D5E2] rounded-lg text-sm text-[#30212A] focus:outline-none focus:ring-2 focus:ring-[#650D25]/40 resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#796873]">
                    <Info className="w-3.5 h-3.5 text-[#650D25]" />
                    <span>Interactive demo mode</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FFF9FB] bg-[#650D25] hover:bg-[#420817] rounded-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Message</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 rounded-xl bg-[#FCE7EF]/60 border border-[#F8D5E2] text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#650D25] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#30212A]">
                  Message Validated (Interactive Demo)
                </h3>
                <p className="text-xs text-[#796873] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>! Your submission for subject &ldquo;{subject}&rdquo; has been validated. As an educational demo application, no live email server is connected and your message has not been stored or forwarded.
                </p>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-[#650D25] bg-[#FFF9FB] border border-[#F8D5E2] rounded-md hover:bg-[#FCE7EF] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Desk Information & Transparent Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FCE7EF]/40 border border-[#F8D5E2] rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-base font-bold text-[#650D25]">
                Desk Logistics & Contact Placeholders
              </h3>
              <p className="text-xs text-[#796873] leading-relaxed">
                We believe in full transparency: we do not fabricate physical office addresses or unverified corporate phone lines.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#30212A]">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#650D25] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Editorial Inquiries:</span>
                    <span className="font-mono text-[11px] text-[#796873]">editorial@thecreatoredit.placeholder.internal</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#650D25] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Geographical Coverage:</span>
                    <span className="text-[11px] text-[#796873]">Covering Indian & Southeast Asian Creator Markets</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#650D25] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Review Cadence:</span>
                    <span className="text-[11px] text-[#796873]">Policy updates reviewed monthly against official gazettes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF9FB] border border-[#F8D5E2] rounded-2xl p-6 space-y-2 text-xs text-[#796873]">
              <div className="font-semibold text-[#30212A] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#650D25]" />
                <span>Notice on Commercial Pitches</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                <em>The Creator Edit</em> does not sell sponsored product placements or accept paid editorial reviews for creator software tools. Please do not submit pay-for-play PR pitches.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
