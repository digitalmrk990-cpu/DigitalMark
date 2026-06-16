// Content extracted from the agency pitch deck.
// In production these are fetched from the backend; kept here as fallback/seed.

export const designServices = [
  'Carousels',
  'Instagram Posts',
  'Story Designs',
  'Ad Creatives',
  'Event Posters',
  'Branding Assets',
  'Infographics',
]

export const websiteTypes = [
  { title: 'Business Websites', blurb: 'Credibility-first sites for established brands.' },
  { title: 'Landing Pages', blurb: 'Single-goal pages tuned for one conversion.' },
  { title: 'Conversion-Focused Design', blurb: 'Layouts engineered around the click.' },
  { title: 'NGO Websites', blurb: 'Mission-driven sites that move people to act.' },
  { title: 'Portfolio Websites', blurb: 'Showcase work the way it deserves.' },
]

export const ideationServices = [
  'Monthly Content Planning',
  'Reel Concepts',
  'Campaign Ideas',
  'Storytelling Frameworks',
  'Video Scripts',
  'Trend Research',
]

export const campaignTypes = [
  'Lead Generation Campaigns',
  'Brand Awareness Campaigns',
  'Product Launch Campaigns',
  'Event Promotions',
  'Fundraising Campaigns',
  'Social Media Advertising',
]

export const whyChooseUs = [
  'Focus on Results',
  'Creative Approach',
  'Dedicated Team',
  'Fast Turnaround Time',
  'Customized Solutions',
  'Data-Driven Decisions',
  'Transparent Communication',
]

// Top-level service pillars for the services grid / nav
export const servicePillars = [
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    summary: 'Carousels, posts, posters and branding assets that stop the scroll.',
    items: designServices,
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    summary: 'Reels, ads, and brand films cut for retention and reach.',
    items: ['Reels & Shorts', 'Ad Cuts', 'Brand Films', 'Motion Graphics'],
  },
  {
    slug: 'website-design',
    title: 'Website Design',
    summary: 'Professional websites that build trust and generate inquiries.',
    items: websiteTypes.map((w) => w.title),
  },
  {
    slug: 'content-ideation',
    title: 'Content Ideation & Scripting',
    summary: 'Every piece of content built around a clear objective.',
    items: ideationServices,
  },
  {
    slug: 'creative-campaigns',
    title: 'Creative Campaigns',
    summary: 'Campaigns designed to generate awareness, inquiries, and sales.',
    items: campaignTypes,
  },
]

// Portfolio sample items — replace imageUrl with real work.
export const portfolioItems = [
  { id: 1, title: 'New Balance Drop', category: 'Branding Assets' },
  { id: 2, title: 'Haerin — Vogue Korea', category: 'Instagram Posts' },
  { id: 3, title: 'John Summit Asia Tour', category: 'Event Posters' },
  { id: 4, title: 'Editorial Eye', category: 'Story Designs' },
  { id: 5, title: 'Porsche Feature', category: 'Ad Creatives' },
  { id: 6, title: 'History of Cinema', category: 'Infographics' },
  { id: 7, title: 'Minimal Figure', category: 'Carousels' },
]

export const portfolioCategories = [
  'All',
  'Carousels',
  'Instagram Posts',
  'Story Designs',
  'Ad Creatives',
  'Event Posters',
  'Branding Assets',
  'Infographics',
]
