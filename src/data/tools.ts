export interface PitchTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  subject: string;
  body: string;
}

export const pitchTemplates: PitchTemplate[] = [
  {
    id: 'cold-pitch-dtc',
    title: 'Cold Pitch for Niche DTC / Consumer Brand',
    category: 'Brand Deals',
    description: 'Use when reaching out to an emerging consumer brand whose product naturally fits your audience.',
    subject: 'Collaboration Idea: [Your Name] x [Brand Name] for [Current Month] Campaign',
    body: `Hi [Marketing Manager's First Name],

I hope you're having a productive week! I’ve been following [Brand Name] and really admired your recent launch of the [Specific Product Name], particularly how you highlighted [specific brand campaign detail or feature].

I am a content creator based in [Your City] focusing on [Your Niche] for a community of [Your Follower Count] engaged [describe your audience, e.g. college students and young professionals in India]. 

My followers regularly ask for recommendations regarding [problem the product solves]. I've conceptualized two creative, high-retention video formats that would speak directly to them:

1. [Concept 1]: A 45-second high-energy Reel demonstrating "[Specific relatable hook or solution]" featuring [Product Name].
2. [Concept 2]: An educational breakdown comparing [common mistake] and how [Product Name] provides the fix.

Across my last 10 Reels, my average engagement rate is [Your Engagement %] with over [Average Saves/Shares] saves and shares per post. You can inspect my 1-page media kit and previous deliverables here: [Link to Portfolio/Media Kit].

Are you currently onboarding creator collaborations for [Upcoming Month]? If so, I’d be glad to share an outline and quote.

Best regards,
[Your Name]
[Your Handle] | [Your Portfolio Link]
[Your Phone/WhatsApp]`
  },
  {
    id: 'barter-to-paid',
    title: 'Converting a "Free Product / Barter" Offer into Paid',
    category: 'Negotiation',
    description: 'Polite, firm response when a brand offers free product in exchange for high-effort video deliverables.',
    subject: 'Re: Collaboration with [Brand Name] / Deliverable Scope',
    body: `Hi [Brand Representative's Name],

Thank you so much for reaching out and offering to send over the [Product Name]! I love what [Brand Name] is building in the [Niche] space.

While I appreciate the gifting offer, I currently only take on dedicated video deliverables as compensated partnerships. Creating a high-retention video requires several hours of scripting, filming, audio editing, and post-production to ensure your product is showcased with the highest visual standard.

For reference, my commercial rates are:
- 1 Dedicated Instagram Reel (organic post): ₹[Your Base Rate]
- 1 Commercial UGC Video Asset (for your brand's ads): ₹[Your UGC Rate]

If you have a marketing budget allocated for this campaign, I would be delighted to partner with you. Alternatively, if this is currently a gifting-only initiative, I am happy to receive the product with no guaranteed posting obligations.

Let me know what works best for your team!

Warmly,
[Your Name]
[Your Handle]`
  },
  {
    id: 'ugc-pitch-agency',
    title: 'Direct UGC Pitch to Ad Agencies and Performance Marketers',
    category: 'UGC Creation',
    description: 'Pitching your video production services to brands looking for performance marketing creatives (no follower count needed).',
    subject: 'High-Converting Short-Form Ad Creatives for [Brand Name] [UGC Pitch]',
    body: `Hi [Performance Marketing Lead / Media Buyer],

I came across your current Meta ads for [Brand Name] and love your positioning around [Value Proposition].

I'm a UGC creator specializing in short-form, high-retention video ads (direct response). Rather than influencer placement, I produce commercial video assets formatted specifically for Meta Ads Manager and TikTok ads—engineered with strong 3-second hooks, clear visual problem-solving, and seamless call-to-actions.

Here are 3 video creative concepts I can produce for [Brand Name]:
1. "Problem vs Solution" comparison testing [pain point].
2. Fast-paced unboxing + first impression testimonial.
3. "3 reasons I switched to [Brand Name]" organic review.

You can view my UGC video portfolio with sample hooks here: [Link to UGC Portfolio / Google Drive Folder].

I deliver raw 9:16 vertical video assets with 2 hook variations within 5 business days, including 30 days of paid ad usage rights.

Would you be open to reviewing a creative test package for next month's ad sprint?

Best,
[Your Name]
[Your Portfolio Link]
[Your Email / Phone]`
  }
];
