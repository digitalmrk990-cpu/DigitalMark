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
const img = (name) => `/images/${name}.svg`
export const portfolioItems = [
  { id: 1, title: 'New Balance Drop', category: 'Branding Assets', imageUrl: img('branding') },
  { id: 2, title: 'Haerin — Vogue Korea', category: 'Instagram Posts', imageUrl: img('instagram') },
  { id: 3, title: 'John Summit Asia Tour', category: 'Event Posters', imageUrl: img('posters') },
  { id: 4, title: 'Editorial Eye', category: 'Story Designs', imageUrl: img('stories') },
  { id: 5, title: 'Porsche Feature', category: 'Ad Creatives', imageUrl: img('ads') },
  { id: 6, title: 'History of Cinema', category: 'Infographics', imageUrl: img('infographics') },
  { id: 7, title: 'Minimal Figure', category: 'Carousels', imageUrl: img('carousels') },
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

export const stats = [
  { num: 50, suffix: '+', label: 'Projects Delivered' },
  { num: 30, suffix: '+', label: 'Happy Clients' },
  { num: 4, suffix: '+', label: 'Years Experience' },
  { num: 500, suffix: 'K+', label: 'Reach Generated' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    detail: 'We dive deep into your brand, audience, and competitors to find your unique edge.',
  },
  {
    step: '02',
    title: 'Strategy',
    detail: 'A custom content roadmap is built around measurable KPIs and business goals.',
  },
  {
    step: '03',
    title: 'Creation',
    detail: 'Design, copy, and video come together in a high-velocity production pipeline.',
  },
  {
    step: '04',
    title: 'Publishing',
    detail: 'Content is scheduled, posted, and optimized across every relevant channel.',
  },
  {
    step: '05',
    title: 'Analysis',
    detail: 'We track what works, iterate fast, and double down on what drives results.',
  },
]

export const brandNames = [
  'Nike', 'Spotify', 'Figma', 'Stripe', 'Notion',
  'Adobe', 'Linear', 'Vercel', 'Supabase', 'Railway',
  'Cal.com', 'Arc', 'Miro', 'Loom', 'Raycast',
]
