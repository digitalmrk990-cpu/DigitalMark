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
  { id: 1, title: 'New Balance Drop', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/newbalance/600/600' },
  { id: 13, title: 'Logo Suite', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/logosuite/600/600' },
  { id: 14, title: 'Brand Guidelines', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/brandguide/600/600' },
  { id: 15, title: 'Visual Identity', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/visualid/600/600' },
  { id: 16, title: 'Packaging Set', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/packaging/600/600' },
  { id: 17, title: 'Brand Collateral', category: 'Branding Assets', imageUrl: 'https://picsum.photos/seed/collateral/600/600' },
  { id: 2, title: 'Haerin — Vogue Korea', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/voguekorea/600/600' },
  { id: 18, title: 'Flat Lay Edit', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/flatlay/600/600' },
  { id: 19, title: 'Mood Feed', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/moodfeed/600/600' },
  { id: 20, title: 'Product Spotlight', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/spotlight/600/600' },
  { id: 21, title: 'Lifestyle Grid', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/lifestyle/600/600' },
  { id: 22, title: 'Behind the Scenes', category: 'Instagram Posts', imageUrl: 'https://picsum.photos/seed/behindscene/600/600' },
  { id: 3, title: 'John Summit Asia Tour', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/asiatour/600/600' },
  { id: 23, title: 'Festival Series', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/festival/600/600' },
  { id: 24, title: 'Concert Promo', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/concert/600/600' },
  { id: 25, title: 'Exhibition Print', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/exhibition/600/600' },
  { id: 26, title: 'Workshop Flyer', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/workshop/600/600' },
  { id: 27, title: 'Launch Poster', category: 'Event Posters', imageUrl: 'https://picsum.photos/seed/launch/600/600' },
  { id: 4, title: 'Editorial Eye', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/editorial/600/600' },
  { id: 28, title: 'Poll Template', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/polltemp/600/600' },
  { id: 29, title: 'Q&A Frame', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/qaframe/600/600' },
  { id: 30, title: 'Countdown Story', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/countdown/600/600' },
  { id: 31, title: 'Highlight Cover', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/highlight/600/600' },
  { id: 32, title: 'Promo Story', category: 'Story Designs', imageUrl: 'https://picsum.photos/seed/promostory/600/600' },
  { id: 5, title: 'Porsche Feature', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/porsche/600/600' },
  { id: 33, title: 'Facebook Ad Set', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/fbadset/600/600' },
  { id: 34, title: 'Instagram Ad', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/igad/600/600' },
  { id: 35, title: 'Display Banner', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/displaybanner/600/600' },
  { id: 36, title: 'Video Thumbnail', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/vidthumb/600/600' },
  { id: 37, title: 'Social Ad', category: 'Ad Creatives', imageUrl: 'https://picsum.photos/seed/socialad/600/600' },
  { id: 6, title: 'History of Cinema', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/cinemahistory/600/600' },
  { id: 38, title: 'Data Viz', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/dataviz/600/600' },
  { id: 39, title: 'Timeline Graphic', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/timeline/600/600' },
  { id: 40, title: 'Comparison Chart', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/comparison/600/600' },
  { id: 41, title: 'Process Diagram', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/process/600/600' },
  { id: 42, title: 'Stats Report', category: 'Infographics', imageUrl: 'https://picsum.photos/seed/statsreport/600/600' },
  { id: 7, title: 'Minimal Figure', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/minimalfig/600/600' },
  { id: 8, title: 'Bold Typography', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/boldtype/600/600' },
  { id: 9, title: 'Color Theory', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/colortheory/600/600' },
  { id: 10, title: 'Grid Play', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/gridplay/600/600' },
  { id: 11, title: 'Mood Board', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/moodboard/600/600' },
  { id: 12, title: 'Visual Story', category: 'Carousels', imageUrl: 'https://picsum.photos/seed/visualstory/600/600' },
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
