import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface LearningPathProps {
  onSelectArticle: (slug: string) => void;
  onOpenToolkit: () => void;
}

interface Step {
  number: string;
  title: string;
  description: string;
  slug?: string;
  isTool?: boolean;
}

export const LearningPath: React.FC<LearningPathProps> = ({
  onSelectArticle,
  onOpenToolkit,
}) => {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Find Your Niche & Audience',
      description: 'Pinpoint the intersection of your personal experience, audience utility, and sustainable production capacity.',
      slug: 'how-to-start-content-creation-2026-beginners-guide',
    },
    {
      number: '02',
      title: 'Develop a Content Strategy',
      description: 'Establish 3–4 repeatable content pillars and a weekly batching calendar that protects your time and mental health.',
      slug: 'how-to-build-content-calendar-prevent-burnout',
    },
    {
      number: '03',
      title: 'Create a High-Impact Media Kit',
      description: 'Build a clean 1-page media kit showcasing verified demographics and honest engagement rather than vanity follower counts.',
      slug: 'creator-media-kit-brands-actually-understand',
    },
    {
      number: '04',
      title: 'Understand Analytics & Retention',
      description: 'Learn how to read watch time retention curves, 3-second drop-offs, and why DM shares drive distribution.',
      slug: 'instagram-reels-analytics-explained',
    },
    {
      number: '05',
      title: 'Pitch Brands Professionally',
      description: 'Craft targeted cold pitch emails proposing creative concepts, and negotiate commercial deliverables with clear agreements.',
      slug: 'how-to-get-first-brand-collaboration-small-creator',
    },
    {
      number: '06',
      title: 'Negotiate Fairly & Disclose Legally',
      description: 'Price production and usage rights objectively in INR, calculate taxes, and comply strictly with ASCI disclosure rules.',
      slug: 'influencer-marketing-disclosures-india-asci',
    },
  ];

  const handleStepClick = (step: Step) => {
    if (step.isTool) {
      onOpenToolkit();
    } else if (step.slug) {
      onSelectArticle(step.slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#FFF9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-[#F8D5E2]/80 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#650D25] mb-2">
              Structured Curriculum
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30212A] tracking-tight">
              The Beginner\'s Learning Path
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#796873] max-w-md">
            Follow this step-by-step sequence from zero uploads to your first compliant, paid commercial collaboration.
          </p>
        </div>

        {/* 6-Step Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              onClick={() => handleStepClick(step)}
              className="group relative bg-[#FFF9FB] border border-[#F8D5E2] rounded-xl p-7 hover:border-[#650D25]/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Step Editorial Numbering */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-bold text-[#650D25]/30 group-hover:text-[#650D25] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FCE7EF] flex items-center justify-center text-[#650D25] group-hover:bg-[#650D25] group-hover:text-[#FFF9FB] transition-colors">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#30212A] group-hover:text-[#650D25] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#796873] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#650D25] group-hover:translate-x-1 transition-transform">
                <span>Read Step Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
