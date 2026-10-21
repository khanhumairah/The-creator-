import { PageSEOMetadata } from '../types/seo';

export const SITE_DOMAIN = 'https://thecreatoredit.com';

export const siteMetadata: Record<string, PageSEOMetadata> = {
  home: {
    id: 'home',
    pageName: 'Home',
    urlPath: '/',
    canonicalUrl: `${SITE_DOMAIN}/`,
    primaryKeyword: 'content creation tips',
    secondaryKeywords: ['creator economy guide', 'how to become a content creator'],
    seoTitle: 'Content Creation Tips & Creator Strategy | The Creator Edit',
    metaDescription: 'Evidence-based content creation tips, Instagram growth systems, UGC pricing frameworks, and honest brand collaboration guides for modern creators.',
    h1: 'Your honest guide to the creator economy.',
    featuredImage: '/images/hero_creator_workspace_1791864556523.jpg',
    imageAlt: 'Content creator desk workspace with mirrorless camera, smartphone tripod, notebook, and natural light',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` }
    ]
  },
  'all-articles': {
    id: 'all-articles',
    pageName: 'All Editorial Guides',
    urlPath: '/blog',
    canonicalUrl: `${SITE_DOMAIN}/blog`,
    primaryKeyword: 'creator guides',
    secondaryKeywords: ['influencer marketing guides', 'content strategy tutorials'],
    seoTitle: 'All Content Creation & Influencer Marketing Guides',
    metaDescription: 'Explore 10 verified editorial guides covering platform algorithms, UGC contracts, Indian creator rates, and content calendars.',
    h1: 'All Editorial Guides & Research Articles',
    featuredImage: '/images/hero_creator_workspace_1791864556523.jpg',
    imageAlt: 'Complete index of content creation tutorials and creator guides',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'All Guides', url: `${SITE_DOMAIN}/blog` }
    ]
  },
  'category-instagram-growth': {
    id: 'category-instagram-growth',
    pageName: 'Instagram Growth',
    urlPath: '/category/instagram-growth',
    canonicalUrl: `${SITE_DOMAIN}/category/instagram-growth`,
    primaryKeyword: 'Instagram growth strategy',
    secondaryKeywords: ['Instagram Reels algorithm', 'social media content tips'],
    seoTitle: 'Instagram Growth Strategy & Reels Algorithm Guides',
    metaDescription: 'Verified insights on Instagram ranking algorithms, Reels retention graphs, and organic reach strategies based on official Meta disclosures.',
    h1: 'Instagram Growth & Algorithm Architecture',
    featuredImage: '/images/editorial_social_analytics_1791864558036.jpg',
    imageAlt: 'Social growth analytics dashboard on tablet illustrating Instagram growth strategies',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Instagram Growth', url: `${SITE_DOMAIN}/category/instagram-growth` }
    ]
  },
  'category-brand-collaborations': {
    id: 'category-brand-collaborations',
    pageName: 'Brand Collaborations',
    urlPath: '/category/brand-collaborations',
    canonicalUrl: `${SITE_DOMAIN}/category/brand-collaborations`,
    primaryKeyword: 'influencer brand collaborations',
    secondaryKeywords: ['brand pitching templates', 'ASCI influencer guidelines'],
    seoTitle: 'Influencer Brand Collaborations & Pitching Guides',
    metaDescription: 'Learn how to pitch brands as a small creator, negotiate commercial contracts, and comply with official ASCI disclosure requirements in India.',
    h1: 'Brand Collaborations, Pitching & Legal Standards',
    featuredImage: '/images/editorial_brand_collab_1791864557555.jpg',
    imageAlt: 'Creator reviewing a brand collaboration agreement and pitch document in a studio',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Brand Collaborations', url: `${SITE_DOMAIN}/category/brand-collaborations` }
    ]
  },
  'category-ugc-creation': {
    id: 'category-ugc-creation',
    pageName: 'UGC & Content Creation',
    urlPath: '/category/ugc-creation',
    canonicalUrl: `${SITE_DOMAIN}/category/ugc-creation`,
    primaryKeyword: 'UGC content creation',
    secondaryKeywords: ['user generated content portfolio', 'UGC vs influencer marketing'],
    seoTitle: 'UGC Content Creation & Video Production Guides',
    metaDescription: 'Master user-generated content production, build high-converting ad creative portfolios, and negotiate paid commercial usage rights.',
    h1: 'UGC Creation & Commercial Video Production',
    featuredImage: '/images/editorial_ugc_filming_1791866018941.jpg',
    imageAlt: 'Content creator filming high converting vertical video product demo for UGC commercial portfolio',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'UGC Creation', url: `${SITE_DOMAIN}/category/ugc-creation` }
    ]
  },
  'category-creator-monetization': {
    id: 'category-creator-monetization',
    pageName: 'Creator Monetization',
    urlPath: '/category/creator-monetization',
    canonicalUrl: `${SITE_DOMAIN}/category/creator-monetization`,
    primaryKeyword: 'creator monetization',
    secondaryKeywords: ['influencer rates India', 'creator pricing calculator'],
    seoTitle: 'Creator Monetization & Pricing Rates in India',
    metaDescription: 'Transparent frameworks for pricing creator deliverables, calculating TDS and GST in India, and identifying creator scams.',
    h1: 'Creator Business, Monetization & Taxes',
    featuredImage: '/images/editorial_creator_pricing_finance_1791866019195.jpg',
    imageAlt: 'Creator working at desk calculating rates and invoice totals for commercial creator monetization',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Monetization', url: `${SITE_DOMAIN}/category/creator-monetization` }
    ]
  },
  'category-content-strategy': {
    id: 'category-content-strategy',
    pageName: 'Content Strategy',
    urlPath: '/category/content-strategy',
    canonicalUrl: `${SITE_DOMAIN}/category/content-strategy`,
    primaryKeyword: 'content planning and strategy',
    secondaryKeywords: ['content calendar workflow', 'batch content creation'],
    seoTitle: 'Content Planning & Strategy: Batching & Calendars',
    metaDescription: 'Sustainable workflows, content pillars, and weekly calendar templates to publish consistently without creative burnout.',
    h1: 'Content Strategy, Workflows & Batch Planning',
    featuredImage: '/images/editorial_content_calendar_planning_1791866021276.jpg',
    imageAlt: 'Flat lay of open weekly content calendar planner with structured scheduling notes',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Content Strategy', url: `${SITE_DOMAIN}/category/content-strategy` }
    ]
  },
  toolkit: {
    id: 'toolkit',
    pageName: 'Creator Toolkit',
    urlPath: '/toolkit',
    canonicalUrl: `${SITE_DOMAIN}/toolkit`,
    primaryKeyword: 'creator pricing calculator',
    secondaryKeywords: ['brand pitch email template', 'engagement rate calculator'],
    seoTitle: 'Creator Pricing Calculator & Brand Pitch Toolkit',
    metaDescription: 'Free interactive tools for creators: calculate Indian commercial rates with TDS deduction, test engagement rates, and generate pitch emails.',
    h1: 'The Creator Toolkit: Rate Calculator & Pitch Generator',
    featuredImage: '/images/editorial_creator_pricing_finance_1791866019195.jpg',
    imageAlt: 'Calculator and notebook illustrating the creator pricing calculator toolkit',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Creator Toolkit', url: `${SITE_DOMAIN}/toolkit` }
    ]
  },
  about: {
    id: 'about',
    pageName: 'About',
    urlPath: '/about',
    canonicalUrl: `${SITE_DOMAIN}/about`,
    primaryKeyword: 'The Creator Edit publication',
    secondaryKeywords: ['creator editorial standards', 'Navinya More'],
    seoTitle: 'About The Creator Edit: Honest Creator Education',
    metaDescription: 'Discover our mission to demystify the creator economy with transparent, evidence-based guides. Founded and curated by Navinya More.',
    h1: 'About The Creator Edit: Mission & Integrity',
    featuredImage: '/images/hero_creator_workspace_1791864556523.jpg',
    imageAlt: 'The Creator Edit editorial desk workspace and creative still life',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'About', url: `${SITE_DOMAIN}/about` }
    ]
  },
  'editorial-policy': {
    id: 'editorial-policy',
    pageName: 'Editorial Policy',
    urlPath: '/editorial-policy',
    canonicalUrl: `${SITE_DOMAIN}/editorial-policy`,
    primaryKeyword: 'creator journalism editorial policy',
    secondaryKeywords: ['fact checking digital media', 'influencer research citations'],
    seoTitle: 'Editorial Policy & Sourcing Standards | The Creator Edit',
    metaDescription: 'Our standards for primary source citations, commercial estimate labeling, corrections protocols, and independent editorial research.',
    h1: 'Editorial & Sourcing Policy: Verification Standards',
    featuredImage: '/images/editorial_legal_asci_compliance_1791866019951.jpg',
    imageAlt: 'Editorial document with fountain pen and reference notes on verification standards',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Editorial Policy', url: `${SITE_DOMAIN}/editorial-policy` }
    ]
  },
  contact: {
    id: 'contact',
    pageName: 'Contact Desk',
    urlPath: '/contact',
    canonicalUrl: `${SITE_DOMAIN}/contact`,
    primaryKeyword: 'contact creator editorial desk',
    secondaryKeywords: ['report policy update', 'creator case study submission'],
    seoTitle: 'Contact the Editorial Desk | The Creator Edit',
    metaDescription: 'Submit article feedback, report platform policy changes, or pitch creator case studies to The Creator Edit editorial research team.',
    h1: 'Contact the Editorial Desk',
    featuredImage: '/images/hero_creator_workspace_1791864556523.jpg',
    imageAlt: 'The Creator Edit contact desk setup with laptop and communications notes',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Contact', url: `${SITE_DOMAIN}/contact` }
    ]
  },
  privacy: {
    id: 'privacy',
    pageName: 'Privacy Policy',
    urlPath: '/privacy',
    canonicalUrl: `${SITE_DOMAIN}/privacy`,
    primaryKeyword: 'creator blog privacy policy',
    secondaryKeywords: ['zero tracking disclosure', 'reader data protection'],
    seoTitle: 'Privacy Policy & Data Notice | The Creator Edit',
    metaDescription: 'Our commitment to reader privacy: zero invasive ad tracking, no data brokering, and transparent demonstration handling.',
    h1: 'Privacy Policy & Reader Data Notice',
    featuredImage: '/images/hero_creator_workspace_1791864556523.jpg',
    imageAlt: 'The Creator Edit security and privacy notice documentation',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Privacy Policy', url: `${SITE_DOMAIN}/privacy` }
    ]
  },

  // 10 Articles
  'article-1': {
    id: 'article-1',
    pageName: "How to Start Content Creation in 2026",
    urlPath: '/blog/how-to-start-content-creation-2026-beginners-guide',
    canonicalUrl: `${SITE_DOMAIN}/blog/how-to-start-content-creation-2026-beginners-guide`,
    primaryKeyword: 'how to start content creation',
    secondaryKeywords: ['content creation for beginners', 'creator equipment checklist'],
    seoTitle: 'How to Start Content Creation in 2026: Beginner\'s Guide',
    metaDescription: 'Learn how to start content creation in 2026 with realistic niche selection, mobile-first audio gear, repeatable pillars, and a sustainable weekly cadence.',
    h1: 'How to Start Content Creation in 2026: A Practical Beginner\'s Guide',
    featuredImage: '/images/editorial_camera_gear_1791864556367.jpg',
    imageAlt: 'Smartphone, clip-on lavalier microphone, and planner on desk for beginner content creation',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Content Strategy', url: `${SITE_DOMAIN}/category/content-strategy` },
      { name: 'Beginner\'s Guide', url: `${SITE_DOMAIN}/blog/how-to-start-content-creation-2026-beginners-guide` }
    ],
    datePublished: '2026-02-14',
    dateModified: '2026-10-10',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1050,
    faqs: [
      {
        question: 'Do you need an expensive camera to start content creation in 2026?',
        answer: 'No. Modern smartphones produced since 2021 offer sufficient 1080p/4K resolution for short-form video. Investing in clear audio via a budget lapel microphone (₹1,200–₹2,500) produces far greater retention than a mirrorless camera.'
      },
      {
        question: 'How do you choose a profitable niche as a beginner creator?',
        answer: 'A viable niche sits at the intersection of your personal experience or active learning journey, identifiable audience demand, and a subject you can sustainably produce 52 weekly videos about without running out of ideas.'
      }
    ]
  },
  'article-2': {
    id: 'article-2',
    pageName: "How the Instagram Algorithm Works in 2026",
    urlPath: '/blog/how-instagram-algorithm-works-2026',
    canonicalUrl: `${SITE_DOMAIN}/blog/how-instagram-algorithm-works-2026`,
    primaryKeyword: 'Instagram algorithm 2026',
    secondaryKeywords: ['how Instagram ranks Reels', 'Meta recommendation guidelines'],
    seoTitle: 'How the Instagram Algorithm Works in 2026: Ranking Guide',
    metaDescription: 'An evidence-based breakdown of the Instagram algorithm in 2026. Learn how Reels, Feed, Stories, and Explore rank content using official Meta documentation.',
    h1: 'How the Instagram Algorithm Works in 2026',
    featuredImage: '/images/editorial_social_analytics_1791864558036.jpg',
    imageAlt: 'Tablet displaying Instagram growth metrics, retention curves, and algorithm ranking indicators',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Instagram Growth', url: `${SITE_DOMAIN}/category/instagram-growth` },
      { name: 'Instagram Algorithm', url: `${SITE_DOMAIN}/blog/how-instagram-algorithm-works-2026` }
    ],
    datePublished: '2026-03-01',
    dateModified: '2026-10-11',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1120,
    faqs: [
      {
        question: 'How does the Instagram Reels algorithm decide what to recommend?',
        answer: 'The Reels algorithm evaluates predicted watch time, completion rate, audio track resonance, and most importantly direct message shares (sends per reach) to distribute videos to non-followers.'
      },
      {
        question: 'Does Instagram prioritize original content over repost accounts?',
        answer: 'Yes. Meta officially identifies duplicate video and audio fingerprints to replace aggregator accounts with original creators in Reels and Explore recommendation feeds.'
      }
    ]
  },
  'article-3': {
    id: 'article-3',
    pageName: "How to Get First Brand Collaboration as Small Creator",
    urlPath: '/blog/how-to-get-first-brand-collaboration-small-creator',
    canonicalUrl: `${SITE_DOMAIN}/blog/how-to-get-first-brand-collaboration-small-creator`,
    primaryKeyword: 'how to get brand collaborations',
    secondaryKeywords: ['brand pitch email template', 'micro-influencer brand deals'],
    seoTitle: 'How to Get Your First Brand Collaboration as a Creator',
    metaDescription: 'Step-by-step guide on how to get brand collaborations as a small creator. Includes cold outreach strategy, contract essentials, and a sample pitch email.',
    h1: 'How to Get Your First Brand Collaboration as a Small Creator',
    featuredImage: '/images/editorial_brand_collab_1791864557555.jpg',
    imageAlt: 'Content creator reviewing brand campaign brief, laptop, and sponsorship agreement on desk',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Brand Collaborations', url: `${SITE_DOMAIN}/category/brand-collaborations` },
      { name: 'First Brand Deal', url: `${SITE_DOMAIN}/blog/how-to-get-first-brand-collaboration-small-creator` }
    ],
    datePublished: '2026-03-12',
    dateModified: '2026-10-10',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1180,
    faqs: [
      {
        question: 'Can micro-creators with under 5,000 followers get paid brand deals?',
        answer: 'Yes. Brands partner with micro-creators for targeted niche audience trust, higher relative engagement rates (often 5%–10%), and affordable commercial UGC video asset production.'
      },
      {
        question: 'What is the most important element of a cold brand pitch email?',
        answer: 'Proposing 1 to 2 specific, creative video concepts tailored to the brand’s current marketing campaign, rather than asking generically for products or money.'
      }
    ]
  },
  'article-4': {
    id: 'article-4',
    pageName: "UGC vs Influencer Marketing: What's the Difference?",
    urlPath: '/blog/ugc-vs-influencer-marketing-difference',
    canonicalUrl: `${SITE_DOMAIN}/blog/ugc-vs-influencer-marketing-difference`,
    primaryKeyword: 'UGC vs influencer marketing',
    secondaryKeywords: ['user generated content creator', 'whitelisting partnership ads'],
    seoTitle: 'UGC vs Influencer Marketing: Key Differences Explained',
    metaDescription: 'Understand the difference between UGC vs influencer marketing. Learn about asset production, paid whitelisting, usage rights, and why UGC is not unpaid.',
    h1: 'UGC vs Influencer Marketing: What\'s the Difference?',
    featuredImage: '/images/editorial_ugc_filming_1791866018941.jpg',
    imageAlt: 'Creator filming vertical product demonstration with soft LED light for UGC commercial ads',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'UGC Creation', url: `${SITE_DOMAIN}/category/ugc-creation` },
      { name: 'UGC vs Influencer Marketing', url: `${SITE_DOMAIN}/blog/ugc-vs-influencer-marketing-difference` }
    ],
    datePublished: '2026-03-22',
    dateModified: '2026-10-09',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1040,
    faqs: [
      {
        question: 'What is the difference between UGC creators and influencers?',
        answer: 'Influencers sell distribution to their existing social followers on their own profile, whereas UGC creators sell commercial video and photo production assets that brands run in their own paid ads and channels.'
      },
      {
        question: 'Does UGC content mean free or unpaid barter work?',
        answer: 'No. Professional creator UGC is a paid video production service where brands pay both creative labor fees and commercial ad usage licensing fees.'
      }
    ]
  },
  'article-5': {
    id: 'article-5',
    pageName: "How to Create a Creator Media Kit Brands Understand",
    urlPath: '/blog/creator-media-kit-brands-actually-understand',
    canonicalUrl: `${SITE_DOMAIN}/blog/creator-media-kit-brands-actually-understand`,
    primaryKeyword: 'creator media kit',
    secondaryKeywords: ['influencer media kit template', 'engagement rate calculation'],
    seoTitle: 'How to Create a Creator Media Kit Brands Understand',
    metaDescription: 'Design a high-converting 1-page creator media kit with verified audience demographics, honest engagement rates, and clear commercial deliverables.',
    h1: 'How to Create a Creator Media Kit That Brands Will Actually Understand',
    featuredImage: '/images/editorial_media_kit_portfolio_1791866019678.jpg',
    imageAlt: 'Laptop displaying clean creator media kit with verified audience demographic graphs and metrics',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Monetization', url: `${SITE_DOMAIN}/category/creator-monetization` },
      { name: 'Media Kit Guide', url: `${SITE_DOMAIN}/blog/creator-media-kit-brands-actually-understand` }
    ],
    datePublished: '2026-04-05',
    dateModified: '2026-10-11',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1100,
    faqs: [
      {
        question: 'What are the essential sections of a 1-page creator media kit?',
        answer: 'The essential sections are: creator bio & niche positioning, verified audience demographics (age, gender, top cities), average Reel views, engagement rate percentage, 3 visual portfolio links, and business contact info.'
      },
      {
        question: 'Why do purchased followers ruin your chances with brand partnerships?',
        answer: 'PR agencies and marketing teams run vetting tools like Modash and HypeAuditor that flag bot percentages and sudden spikes, leading to immediate agency blacklisting and destroyed organic reach.'
      }
    ]
  },
  'article-6': {
    id: 'article-6',
    pageName: "How Much Should Beginner Content Creators Charge in India?",
    urlPath: '/blog/how-much-should-beginner-creators-charge-india',
    canonicalUrl: `${SITE_DOMAIN}/blog/how-much-should-beginner-creators-charge-india`,
    primaryKeyword: 'how much to charge for content creation India',
    secondaryKeywords: ['influencer rates India', 'creator pricing calculator'],
    seoTitle: 'How Much Should Content Creators Charge in India? (INR)',
    metaDescription: 'Objective pricing framework for content creators in India. Calculate labor, audience distribution, ad licensing, and statutory 10% TDS deductions.',
    h1: 'How Much Should Beginner Content Creators Charge in India?',
    featuredImage: '/images/editorial_creator_pricing_finance_1791866019195.jpg',
    imageAlt: 'Creator calculating commercial rates, invoices, and TDS deductions in a notebook with calculator',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Monetization', url: `${SITE_DOMAIN}/category/creator-monetization` },
      { name: 'Pricing Guide India', url: `${SITE_DOMAIN}/blog/how-much-should-beginner-creators-charge-india` }
    ],
    datePublished: '2026-04-18',
    dateModified: '2026-10-10',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1250,
    faqs: [
      {
        question: 'How do you calculate a fair quote for a brand collaboration in India?',
        answer: 'Use the formula: Total Quote = Base Production Labor (Hours × Target Hourly Rate) + Audience Distribution Fee + Paid Ad Usage Licensing (+30% to +60%) + Commercial Add-ons (Exclusivity, Raw Footage).'
      },
      {
        question: 'What is TDS on influencer payments in India?',
        answer: 'Under Section 194J of the Indian Income Tax Act, corporate brands and agencies deduct 10% TDS on professional influencer services and issue Form 16A for income tax filing credit.'
      }
    ]
  },
  'article-7': {
    id: 'article-7',
    pageName: "Instagram Reels Analytics Explained",
    urlPath: '/blog/instagram-reels-analytics-explained',
    canonicalUrl: `${SITE_DOMAIN}/blog/instagram-reels-analytics-explained`,
    primaryKeyword: 'Instagram Reels analytics',
    secondaryKeywords: ['Reels watch time retention', 'Instagram saves and shares'],
    seoTitle: 'Instagram Reels Analytics: Watch Time, Reach & Shares',
    metaDescription: 'Demystify Instagram Reels analytics. Learn how to interpret 3-second drop-offs, retention graphs, saves vs DM shares, and run creative A/B tests.',
    h1: 'Instagram Reels Analytics Explained: Reach, Watch Time, Saves, and Shares',
    featuredImage: '/images/editorial_reels_video_editing_1791866021499.jpg',
    imageAlt: 'Smartphone on mini tripod displaying video editor timeline with audio waves and retention markers',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Instagram Growth', url: `${SITE_DOMAIN}/category/instagram-growth` },
      { name: 'Reels Analytics', url: `${SITE_DOMAIN}/blog/instagram-reels-analytics-explained` }
    ],
    datePublished: '2026-05-02',
    dateModified: '2026-10-11',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1090,
    faqs: [
      {
        question: 'What is the difference between Reach and Plays on Instagram Reels?',
        answer: 'Reach measures the number of unique individual accounts that viewed your Reel at least once, while Plays count the total number of times the video started playing, including repeated loops by the same viewer.'
      },
      {
        question: 'Why are DM shares more important than Likes for algorithmic distribution?',
        answer: 'Direct message shares indicate high contextual value—the viewer considers your video compelling enough to send to a friend, which Meta algorithms weight as a top indicator of high-quality content.'
      }
    ]
  },
  'article-8': {
    id: 'article-8',
    pageName: "How to Build a Content Calendar and Avoid Burnout",
    urlPath: '/blog/how-to-build-content-calendar-prevent-burnout',
    canonicalUrl: `${SITE_DOMAIN}/blog/how-to-build-content-calendar-prevent-burnout`,
    primaryKeyword: 'content calendar workflow',
    secondaryKeywords: ['how to stay consistent creating content', 'batch content creation'],
    seoTitle: 'How to Build a Content Calendar and Avoid Burnout',
    metaDescription: 'A realistic weekly content calendar workflow for students and part-time creators. Master task batching, content repurposing, and sustainable consistency.',
    h1: 'How to Build a Content Calendar and Stay Consistent Without Burning Out',
    featuredImage: '/images/editorial_content_calendar_planning_1791866021276.jpg',
    imageAlt: 'Open planner flat lay with color-coded content creation schedules, sticky notes, and phone',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Content Strategy', url: `${SITE_DOMAIN}/category/content-strategy` },
      { name: 'Content Calendar', url: `${SITE_DOMAIN}/blog/how-to-build-content-calendar-prevent-burnout` }
    ],
    datePublished: '2026-05-19',
    dateModified: '2026-10-08',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1140,
    faqs: [
      {
        question: 'Do creators need to post every day to grow on social media?',
        answer: 'No. Daily posting frequently causes creative exhaustion. Publishing 2 to 3 high-retention, well-researched videos per week on a predictable schedule achieves superior long-term results.'
      },
      {
        question: 'What is batch content creation?',
        answer: 'Batching is grouping similar tasks together—such as outlining 3 scripts on Wednesday, filming all 3 back-to-back on Saturday morning, and editing all 3 on Sunday afternoon—cutting setup friction by up to 75%.'
      }
    ]
  },
  'article-9': {
    id: 'article-9',
    pageName: "Influencer Marketing Disclosures in India: ASCI Guidelines",
    urlPath: '/blog/influencer-marketing-disclosures-india-asci',
    canonicalUrl: `${SITE_DOMAIN}/blog/influencer-marketing-disclosures-india-asci`,
    primaryKeyword: 'ASCI influencer guidelines',
    secondaryKeywords: ['influencer marketing disclosures India', 'CCPA misleading advertisements'],
    seoTitle: 'Influencer Disclosures in India: ASCI & CCPA Guide',
    metaDescription: 'Statutory disclosure requirements for Indian influencers under ASCI and CCPA rules. Learn when #Ad tags, video overlays, and gift disclosures are mandatory.',
    h1: 'Influencer Marketing Disclosures in India: ASCI Guidelines and Legal Considerations',
    featuredImage: '/images/editorial_legal_asci_compliance_1791866019951.jpg',
    imageAlt: 'Legal agreement document with tablet showing ASCI influencer advertising disclosure rules in India',
    imageWidth: 1200,
    imageHeight: 900,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Brand Collaborations', url: `${SITE_DOMAIN}/category/brand-collaborations` },
      { name: 'ASCI Guidelines', url: `${SITE_DOMAIN}/blog/influencer-marketing-disclosures-india-asci` }
    ],
    datePublished: '2026-06-04',
    dateModified: '2026-10-10',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1200,
    faqs: [
      {
        question: 'When is a disclosure legally required for an influencer post in India?',
        answer: 'Whenever a "material connection" exists between the creator and the brand, including paid sponsorship, free gifted products, sponsored travel/hotels, affiliate commission links, or business affiliations.'
      },
      {
        question: 'What are the legal penalties for non-disclosure under Indian consumer law?',
        answer: 'Under Section 21 of the Consumer Protection Act 2019, the Central Consumer Protection Authority (CCPA) can impose fines up to ₹10 Lakhs on a first offence, and up to ₹50 Lakhs for repeat violations.'
      }
    ]
  },
  'article-10': {
    id: 'article-10',
    pageName: "Content Creation Scams: Red Flags for Beginners",
    urlPath: '/blog/content-creation-scams-red-flags-beginners',
    canonicalUrl: `${SITE_DOMAIN}/blog/content-creation-scams-red-flags-beginners`,
    primaryKeyword: 'content creation scams',
    secondaryKeywords: ['influencer red flags', 'fake brand collaboration email'],
    seoTitle: 'Content Creation Scams: 5 Red Flags for Beginners',
    metaDescription: 'Protect your account from content creation scams: fake brand ambassador shipping fees, domain spoofing, session hijacking malware, and predatory contracts.',
    h1: 'Content Creation Scams: Red Flags Every Beginner Creator Should Know',
    featuredImage: '/images/editorial_creator_security_1792050767657.jpg',
    imageAlt: 'Content creator inspecting digital security checklist and cyber protection tools on tablet',
    imageWidth: 1200,
    imageHeight: 675,
    indexingPreference: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: `${SITE_DOMAIN}/` },
      { name: 'Monetization', url: `${SITE_DOMAIN}/category/creator-monetization` },
      { name: 'Scam Defense', url: `${SITE_DOMAIN}/blog/content-creation-scams-red-flags-beginners` }
    ],
    datePublished: '2026-06-25',
    dateModified: '2026-10-11',
    authorName: 'Navinya More',
    authorUrl: 'https://www.instagram.com/navinya__more__16',
    wordCount: 1150,
    faqs: [
      {
        question: 'What is the "Brand Ambassador - Just Pay Shipping" scam?',
        answer: 'A scheme where an account offers "free" items but asks you to pay an inflated ₹699 ($15) shipping fee. In reality, the items cost less than ₹50 wholesale, turning you into a paying customer who also provides free advertising.'
      },
      {
        question: 'How do hackers steal creator accounts through fake collaboration briefs?',
        answer: 'Attackers send fake campaign briefs as .exe or password-protected .zip files that run info-stealer malware, extracting browser session cookies to bypass two-factor authentication without needing your password.'
      }
    ]
  }
};

export function getSEOMetadataForRoute(view: string, slugOrCategory?: string | null): PageSEOMetadata {
  if (view === 'article-detail' && slugOrCategory) {
    // Map article slug to article metadata key
    const match = Object.values(siteMetadata).find(m => m.urlPath.endsWith(slugOrCategory));
    if (match) return match;
    // Fallback: check by id
    const byId = siteMetadata[slugOrCategory];
    if (byId) return byId;
  }

  if (view === 'category' && slugOrCategory) {
    const catKey = `category-${slugOrCategory}`;
    if (siteMetadata[catKey]) return siteMetadata[catKey];
  }

  if (siteMetadata[view]) {
    return siteMetadata[view];
  }

  return siteMetadata.home;
}
