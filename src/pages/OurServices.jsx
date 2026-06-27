import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Instagram Posts",
    img: "/images/instagram-posts.jpg",
    hoverImg: "/images/instagram-posts-hover.jpg",
    tag: "Creative Design",
  },
  {
    name: "Carousels",
    img: "/images/carousels.jpg",
    hoverImg: "/images/carousels-hover.jpg",
    tag: "Engaging Content",
  },
  {
    name: "Story Designs",
    img: "/images/story-designs.jpg",
    hoverImg: "/images/story-designs-hover.jpg",
    tag: "Social Media",
  },
  {
    name: "Ad Creatives",
    img: "/images/ad-creatives.jpg",
    hoverImg: "/images/ad-creatives-hover.jpg",
    tag: "Performance Marketing",
  },
  {
    name: "Event Posters",
    img: "/images/event-posters.jpg",
    hoverImg: "/images/event-posters-hover.jpg",
    tag: "Promotional Design",
  },
  {
    name: "Branding Assets",
    img: "/images/branding-assets.jpg",
    hoverImg: "/images/branding-assets-hover.jpg",
    tag: "Brand Identity",
  },
  {
    name: "Infographics",
    img: "/images/infographics.jpg",
    hoverImg: "/images/infographics-hover.jpg",
    tag: "Visual Communication",
  },
  {
    name: "Reels & Motion Graphics",
    img: "/images/reels-motion.jpg",
    hoverImg: "/images/reels-motion-hover.jpg",
    tag: "Video Content",
  },
];

const instagramPosts = [
  {
    id: 1,
    image: "https://picsum.photos/id/64/600/600",
    caption: "Minimal aesthetics that speak volumes. Your brand deserves visuals that stop the scroll.",
    likes: "2,847",
    handle: "@sheeshscribes",
    location: "Mumbai, India",
    color: "#E8723C",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/20/600/600",
    caption: "Bold colours, bolder impact. Turning everyday content into brand statements.",
    likes: "3,621",
    handle: "@sheeshscribes",
    location: "Design Studio",
    color: "#D45E2A",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/57/600/600",
    caption: "From concept to creation \u2014 every pixel tells your unique story.",
    likes: "1,934",
    handle: "@sheeshscribes",
    location: "Content Lab",
    color: "#B0481E",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/44/600/600",
    caption: "Typography meets creativity. Words that move, designs that stick forever.",
    likes: "4,102",
    handle: "@sheeshscribes",
    location: "Brand Studio",
    color: "#E8723C",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/49/600/600",
    caption: "Scroll-stopping content is just a post away. Let us craft your next hit.",
    likes: "2,556",
    handle: "@sheeshscribes",
    location: "Social Media",
    color: "#D45E2A",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/100/600/600",
    caption: "Your brand story deserves to be told in frames that captivate and convert.",
    likes: "5,239",
    handle: "@sheeshscribes",
    location: "Creative Agency",
    color: "#B0481E",
  },
];

const carouselSlides = [
  {
    slide: 1, total: 5,
    image: "https://picsum.photos/id/10/600/600",
    caption: "Swipe through our lookbook \u2014 where every slide tells a new chapter of your brand story.",
    likes: "3,452",
    handle: "@sheeshscribes",
    location: "Lookbook Series",
    color: "#8C3614",
  },
  {
    slide: 2, total: 5,
    image: "https://picsum.photos/id/15/600/600",
    caption: "From mood boards to final renders \u2014 see how we bring ideas to life slide by slide.",
    likes: "3,452",
    handle: "@sheeshscribes",
    location: "Lookbook Series",
    color: "#8C3614",
  },
  {
    slide: 3, total: 5,
    image: "https://picsum.photos/id/28/600/600",
    caption: "Each frame is crafted to keep your audience swiping till the very end.",
    likes: "3,452",
    handle: "@sheeshscribes",
    location: "Lookbook Series",
    color: "#8C3614",
  },
  {
    slide: 4, total: 5,
    image: "https://picsum.photos/id/36/600/600",
    caption: "Consistent visual language across every slide builds trust and recognition.",
    likes: "3,452",
    handle: "@sheeshscribes",
    location: "Lookbook Series",
    color: "#8C3614",
  },
  {
    slide: 5, total: 5,
    image: "https://picsum.photos/id/42/600/600",
    caption: "The final slide \u2014 a strong CTA that turns viewers into leads.",
    likes: "3,452",
    handle: "@sheeshscribes",
    location: "Lookbook Series",
    color: "#8C3614",
  },
  {
    slide: 1, total: 4,
    image: "https://picsum.photos/id/45/600/600",
    caption: "Educational carousels that teach while they sell \u2014 value-driven content that performs.",
    likes: "5,871",
    handle: "@sheeshscribes",
    location: "Educational Series",
    color: "#D45E2A",
  },
  {
    slide: 2, total: 4,
    image: "https://picsum.photos/id/60/600/600",
    caption: "Break down complex ideas into bite-sized visuals your audience will love.",
    likes: "5,871",
    handle: "@sheeshscribes",
    location: "Educational Series",
    color: "#D45E2A",
  },
  {
    slide: 3, total: 4,
    image: "https://picsum.photos/id/75/600/600",
    caption: "Data meets design \u2014 turning statistics into scroll-stopping visuals.",
    likes: "5,871",
    handle: "@sheeshscribes",
    location: "Educational Series",
    color: "#D45E2A",
  },
  {
    slide: 4, total: 4,
    image: "https://picsum.photos/id/82/600/600",
    caption: "End with a question that sparks comments and boosts engagement.",
    likes: "5,871",
    handle: "@sheeshscribes",
    location: "Educational Series",
    color: "#D45E2A",
  },
  {
    slide: 1, total: 3,
    image: "https://picsum.photos/id/89/600/600",
    caption: "Product showcase carousels that highlight features from every angle.",
    likes: "2,134",
    handle: "@sheeshscribes",
    location: "Product Launch",
    color: "#B0481E",
  },
  {
    slide: 2, total: 3,
    image: "https://picsum.photos/id/93/600/600",
    caption: "Benefits over features \u2014 show them why they need it, not just what it does.",
    likes: "2,134",
    handle: "@sheeshscribes",
    location: "Product Launch",
    color: "#B0481E",
  },
  {
    slide: 3, total: 3,
    image: "https://picsum.photos/id/96/600/600",
    caption: "A seamless visual flow that guides the viewer from problem to solution.",
    likes: "2,134",
    handle: "@sheeshscribes",
    location: "Product Launch",
    color: "#B0481E",
  },
];

const storyPosts = [
  {
    id: 1,
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3f1804236279965.68ec11e277dd2.jpg",
    accent: "#E94560",
    title: "",
    hidePage: true,
    caption: "Every brand starts as a blank page. It\u2019s not the ink that matters first \u2014 it\u2019s the courage to write the first sentence. A single word turned an empty page into a story that changed everything.",
    likes: "4,812",
    handle: "@sheeshscribes",
    location: "Acts of Imagination",
    link: "https://www.behance.net/gallery/236279965/Acts-of-Imagination",
  },
  {
    id: 2,
    cover: "https://static01.nyt.com/images/2021/06/29/books/review/28BOOKTARANTINO1/28BOOKTARANTINO1-mediumSquareAt3X.png",
    accent: "#FBDD5C",
    title: "",
    hidePage:true,
    caption: "She opened the book and read aloud. The words painted forests, built cities, and named stars. That\u2019s what your first chapter does \u2014 it tells the world who you are before they even meet you.",
    likes: "6,237",
    handle: "@sheeshscribes",
    location: "The Brand Book",
    color: "#2D1B69",
    link: "https://www.nytimes.com/2021/06/28/books/quentin-tarantino-once-upon-time-hollywood-novel.html",
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1558025623-2aafbebe8daf?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    accent: "#FFA500",
    title: "",
    hidePage: true,
    caption: "Just when the story seemed predictable, the hero changed direction. Every great brand has a plot twist \u2014 a moment that redefines everything. Your story is still being written.",
    likes: "5,904",
    handle: "@sheeshscribes",
    location: "The Brand Book",
    color: "#801336",
    link: "https://vocal.media/geeks/tag/movie",
  },
  {
    id: 4,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    accent: "#FFD700",
    title: "",
    hidePage: true,
    caption: "A book without a message is just paper. A brand without a message is just noise. Find the one thing only you can say \u2014 and say it until the world listens.",
    likes: "7,441",
    handle: "@sheeshscribes",
    location: "The Brand Book",
    color: "#1B6B1B",
  },
];

const adPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649771543751-051019fb0093?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #1E8449 0%, #27AE60 50%, #82E0AA 100%)",
    accent: "#F1C40F",
    hidePage: true,
    title: "Sports",
    caption: "Ronaldo on the pitch \u2014 moments that define greatness in football history.",
    likes: "8,234",
    handle: "@sheeshscribes",
    location: "Football Ad",
    color: "#1E8449",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1761751237641-188e24e244b8?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #922B21 0%, #E74C3C 50%, #F1948A 100%)",
    accent: "#F39C12",
    hidePage: true,
    title: "F1",
    caption: "Max Verstappen pushing limits on the track \u2014 speed engineered to perfection.",
    likes: "9,671",
    handle: "@sheeshscribes",
    location: "F1 Ad",
    color: "#E74C3C",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #1F3A5F 0%, #2C3E50 50%, #7F8C8D 100%)",
    accent: "#E67E22",
    hidePage: true,
    title: "Shopping",
    caption: "Curated collections for every style \u2014 shop the look that defines you.",
    likes: "5,402",
    handle: "@sheeshscribes",
    location: "Shopping Ad",
    color: "#2C3E50",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #7D6608 0%, #B7950B 50%, #F4D03F 100%)",
    accent: "#D4AC0D",
    hidePage: true,
    title: "Jewellery",
    caption: "Exquisite craftsmanship in every piece \u2014 jewellery that tells your story.",
    likes: "6,789",
    handle: "@sheeshscribes",
    location: "Jewellery Ad",
    color: "#B7950B",
  },
];

const eventPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    caption: "Volunteers distributing meals in underserved communities \u2014 every plate tells a story of hope.",
    likes: "9,112",
    handle: "@sheeshscribes",
    location: "Food Drive",
    color: "#E67E22",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    caption: "Children in rural classrooms receiving books \u2014 education is the bridge to a better future.",
    likes: "8,437",
    handle: "@sheeshscribes",
    location: "Education Initiative",
    color: "#2980B9",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    caption: "Tree plantation drives restoring green cover \u2014 small actions, massive impact.",
    likes: "7,803",
    handle: "@sheeshscribes",
    location: "Environment Campaign",
    color: "#27AE60",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    caption: "Community clean-up drives bringing people together \u2014 unity for a cleaner tomorrow.",
    likes: "6,524",
    handle: "@sheeshscribes",
    location: "Community Outreach",
    color: "#8E44AD",
  },
];

const brandingPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    accent: "#E94560",
    title: "Brand Studio",
    caption: "A dedicated space where your brand identity comes to life \u2014 from concepts to final assets.",
    likes: "6,891",
    handle: "@sheeshscribes",
    location: "Brand Studio",
    color: "#16213E",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #4A1942 0%, #893168 50%, #E2A76F 100%)",
    accent: "#F4D03F",
    title: "Brand Essentials",
    caption: "The core building blocks of your brand \u2014 logos, colours, and typography that define you.",
    likes: "5,432",
    handle: "@sheeshscribes",
    location: "Brand Essentials",
    color: "#893168",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #0B3D0B 0%, #1B6B1B 50%, #2E8B57 100%)",
    accent: "#F1C40F",
    title: "Brand Kit",
    caption: "A complete brand kit with all the tools you need \u2014 consistent, scalable, ready to use.",
    likes: "4,768",
    handle: "@sheeshscribes",
    location: "Brand Kit",
    color: "#1B6B1B",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #2D1B69 0%, #512E8F 50%, #7F56D9 100%)",
    accent: "#FFA500",
    title: "Identity & Branding",
    caption: "Crafting a unique visual identity and voice \u2014 branding that stands out in any crowd.",
    likes: "5,914",
    handle: "@sheeshscribes",
    location: "Identity & Branding",
    color: "#512E8F",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #7D3C08 0%, #B8651A 50%, #F39C12 100%)",
    accent: "#FFFFFF",
    title: "Launch Your Brand",
    caption: "Take your brand from idea to launch \u2014 strategy, design, and rollout all in one place.",
    likes: "7,203",
    handle: "@sheeshscribes",
    location: "Launch Your Brand",
    color: "#B8651A",
  },
];

const infographicsPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #0C2340 0%, #1B4F72 50%, #2E86C1 100%)",
    accent: "#F39C12",
    title: "Statistical",
    caption: "Transform raw data into powerful visual stories \u2014 trends, patterns, and insights at a glance.",
    likes: "7,432",
    handle: "@sheeshscribes",
    location: "Statistical",
    color: "#1B4F72",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1774196383765-2aeb1e6d7617?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #4A235A 0%, #7D3C98 50%, #AF7AC5 100%)",
    accent: "#F1C40F",
    title: "Timeline",
    caption: "Map out milestones and journeys with clean, chronological timeline infographics.",
    likes: "5,876",
    handle: "@sheeshscribes",
    location: "Timeline",
    color: "#7D3C98",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1769971361788-ceda92ad2263?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #52B788 100%)",
    accent: "#FFA500",
    title: "Process",
    caption: "Simplify complex workflows with step-by-step process infographics that guide and inform.",
    likes: "4,921",
    handle: "@sheeshscribes",
    location: "Process",
    color: "#2D6A4F",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1679210208117-d60a2e36d6bb?w=800&q=80&auto=format&fit=crop",
    cover: "linear-gradient(135deg, #7B241C 0%, #C0392B 50%, #F1948A 100%)",
    accent: "#FFFFFF",
    title: "Comparison",
    caption: "Side-by-side contrasts made clear \u2014 highlight differences and similarities with impact.",
    likes: "6,304",
    handle: "@sheeshscribes",
    location: "Comparison",
    color: "#C0392B",
  },
];

const reelsPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1774813958359-5bf922706448?w=800&q=80&auto=format&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    cover: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#e94560",
    title: "Cinematic Reel",
    caption: "Professional-grade cinematography that captures every emotion in motion.",
    likes: "12.4k",
    handle: "@sheeshscribes",
    location: "Cinematic Reel",
    color: "#16213e",
    anim: "fadeScale",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1758947651495-24e194e47c3a?w=800&q=80&auto=format&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    cover: "linear-gradient(135deg, #2d1b69 0%, #512e8f 50%, #7f56d9 100%)",
    accent: "#f1c40f",
    title: "Gimbal Motion",
    caption: "Silky-smooth gimbal shots that elevate your brand\u2019s visual storytelling.",
    likes: "9.8k",
    handle: "@sheeshscribes",
    location: "Gimbal Motion",
    color: "#512e8f",
    anim: "slideUp",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1764162051479-234a045fcb16?w=800&q=80&auto=format&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    cover: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #52b788 100%)",
    accent: "#ffa500",
    title: "Studio Production",
    caption: "Behind-the-scenes studio setups for broadcast-quality video content.",
    likes: "7.6k",
    handle: "@sheeshscribes",
    location: "Studio Production",
    color: "#2d6a4f",
    anim: "zoomIn",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1762217975790-f919d61f7f92?w=800&q=80&auto=format&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    cover: "linear-gradient(135deg, #7b241c 0%, #c0392b 50%, #f1948a 100%)",
    accent: "#ffffff",
    title: "Motion Graphics",
    caption: "Dynamic motion graphics and visual effects that bring ideas to life.",
    likes: "11.2k",
    handle: "@sheeshscribes",
    location: "Motion Graphics",
    color: "#c0392b",
    anim: "slideLeft",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1776801475781-b0797398b145?w=800&q=80&auto=format&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    cover: "linear-gradient(135deg, #0c2340 0%, #1b4f72 50%, #2e86c1 100%)",
    accent: "#f39c12",
    title: "Light Trails",
    caption: "Mesmerizing light trails and abstract motion for stunning visual impact.",
    likes: "8.9k",
    handle: "@sheeshscribes",
    location: "Light Trails",
    color: "#1b4f72",
    anim: "rotateIn",
  },
];

const VISIBLE = 4;

function InstagramCarousel({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = instagramPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % instagramPosts.length);
  const prev = () => goTo((current - 1 + instagramPosts.length) % instagramPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        {/* Phone frame */}
        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={post.id}
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                <div className="flex gap-1">
                  {Array.from({ length: instagramPosts.length }, (_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Nav arrows over image */}
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Bottom section */}
            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              {/* Profile row */}
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  S
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setLiked(!liked)}
                  >
                    <Heart
                      size={22}
                      className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"}
                    />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark
                    size={21}
                    className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"}
                  />
                </motion.button>
              </div>

              {/* Likes */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              {/* Caption */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${post.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {instagramPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CarouselModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = carouselSlides[current];
  const [direction, setDirection] = useState(0);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % carouselSlides.length);
  const prev = () => goTo((current - 1 + carouselSlides.length) % carouselSlides.length);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.img
                  key={post.image}
                  src={post.image}
                  alt={`Carousel slide ${post.slide}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Carousel slide indicator with progress bar */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                <div className="flex gap-1">
                  {Array.from({ length: post.total }, (_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i < post.slide ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Slide number chip */}
              <div className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {post.slide}/{post.total}
              </div>

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Bottom section */}
            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  C
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-bold text-orange-600 sm:text-xs">
                  Carousel
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark size={21} className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${current}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function StoryPreview({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = storyPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % storyPosts.length);
  const prev = () => goTo((current - 1 + storyPosts.length) % storyPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`h-full w-full flex flex-col items-center justify-center p-6 text-center relative bg-cover bg-center ${post.link ? 'cursor-pointer' : ''}`}
                  style={{
                    background: post.cover.startsWith('https://')
                      ? `url(${post.cover}) center/cover no-repeat`
                      : post.cover,
                  }}
                  onClick={() => post.link && window.open(post.link, '_blank', 'noopener,noreferrer')}
                >
                  {post.cover.startsWith('https://') && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                    <div className="flex gap-1">
                      {Array.from({ length: storyPosts.length }, (_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-4 border-2 border-white/10 rounded-lg" />
                  <div className="absolute inset-8 border border-white/5 rounded-md" />
                  {!post.hidePage && (
                    <>
                      <div
                        className="absolute top-8 left-0 right-0 h-0.5 mx-12"
                        style={{ backgroundColor: post.accent }}
                      />
                      <span className="relative font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                        Page {post.id}
                      </span>
                    </>
                  )}
                  <div className={`relative space-y-2 ${post.hidePage ? '' : 'mt-4'}`}>
                    {!post.hidePage && (
                      <div
                        className="mx-auto h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ backgroundColor: post.accent, color: '#fff' }}
                      >
                        {post.id}
                      </div>
                    )}
                    {post.title && (
                      <p className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                        {post.title.replace(`Page ${post.id}: `, '')}
                      </p>
                    )}
                  </div>
                  <div
                    className="absolute bottom-8 left-0 right-0 h-0.5 mx-12"
                    style={{ backgroundColor: post.accent }}
                  />
                  <span className="absolute bottom-4 font-heading text-[9px] uppercase tracking-[0.2em] text-white/30">
                    The Brand Book
                  </span>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  S
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-indigo-100 px-2.5 py-1 text-[10px] font-bold text-indigo-600 sm:text-xs">
                  Story Design
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark size={21} className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${post.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {storyPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AdModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = adPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % adPosts.length);
  const prev = () => goTo((current - 1 + adPosts.length) % adPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full flex flex-col items-center justify-center p-6 text-center relative bg-cover bg-center"
                  style={{
                    background: post.image
                      ? `url(${post.image}) center/cover no-repeat`
                      : post.cover,
                  }}
                >
                  {post.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                    <div className="flex gap-1">
                      {Array.from({ length: adPosts.length }, (_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-4 border-2 border-white/10 rounded-lg" />
                  <div className="absolute inset-8 border border-white/5 rounded-md" />
                  <div
                    className="absolute top-8 left-0 right-0 h-0.5 mx-12"
                    style={{ backgroundColor: post.accent }}
                  />
                  <p className="relative font-display text-4xl font-bold leading-tight text-white sm:text-5xl uppercase tracking-wider">
                    {post.title}
                  </p>
                  <div
                    className="absolute bottom-8 left-0 right-0 h-0.5 mx-12"
                    style={{ backgroundColor: post.accent }}
                  />
                  <span className="absolute bottom-4 font-heading text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Ad Creative
                  </span>
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  A
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-rose-100 px-2.5 py-1 text-[10px] font-bold text-rose-600 sm:text-xs">
                  Ad
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark size={21} className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${post.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {adPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function EventModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = eventPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % eventPosts.length);
  const prev = () => goTo((current - 1 + eventPosts.length) % eventPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={post.id}
                  src={post.image}
                  alt={`Event poster ${post.id}`}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                <div className="flex gap-1">
                  {Array.from({ length: eventPosts.length }, (_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  E
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-600 sm:text-xs">
                  Event
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark size={21} className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${post.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {eventPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function BrandingModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = brandingPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % brandingPosts.length);
  const prev = () => goTo((current - 1 + brandingPosts.length) % brandingPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full flex flex-col items-center justify-center p-8 text-center relative bg-cover bg-center"
                  style={{
                    background: post.image
                      ? `url(${post.image}) center/cover no-repeat`
                      : post.cover,
                  }}
                >
                  {post.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                    <div className="flex gap-1">
                      {Array.from({ length: brandingPosts.length }, (_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3
                    className="relative text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
                    style={{ color: post.accent || "#fff" }}
                  >
                    {post.title}
                  </h3>
                  <p className="relative mt-3 max-w-xs text-xs leading-relaxed text-white/80 sm:text-sm">
                    {post.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  B
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-teal-100 px-2.5 py-1 text-[10px] font-bold text-teal-600 sm:text-xs">
                  Branding
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                </div>
                <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                  <Bookmark size={21} className={saved ? "fill-orange text-orange" : "text-ink transition-colors hover:text-orange"} />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`likes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`caption-${post.id}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-0.5 text-xs leading-relaxed text-ink sm:text-sm"
                >
                  <span className="font-bold">{post.handle}</span> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {brandingPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfographicsModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = infographicsPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % infographicsPosts.length);
  const prev = () => goTo((current - 1 + infographicsPosts.length) % infographicsPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full flex flex-col items-center justify-center p-8 text-center relative bg-cover bg-center"
                  style={{
                    background: post.image
                      ? `url(${post.image}) center/cover no-repeat`
                      : post.cover,
                  }}
                >
                  {post.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                    <div className="flex gap-1">
                      {Array.from({ length: infographicsPosts.length }, (_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3
                    className="relative text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
                    style={{ color: post.accent || "#fff" }}
                  >
                    {post.title}
                  </h3>
                  <p className="relative mt-3 max-w-xs text-xs leading-relaxed text-white/80 sm:text-sm">
                    {post.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  I
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-bold text-orange-600 sm:text-xs">
                  Infographics
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                    <Bookmark size={20} className={saved ? "fill-ink text-ink" : "text-ink hover:text-orange"} />
                  </motion.button>
                </div>
                <div className="flex items-center gap-1 text-ink-muted">
                  <Heart size={14} className="fill-ink-muted" />
                  <span className="text-xs font-semibold">{post.likes}</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`ilikes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`icaption-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm"
                >
                  <strong className="font-bold text-ink">{post.handle}</strong> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {infographicsPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const reelAnims = {
  fadeScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  slideUp: {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  },
  rotateIn: {
    initial: { opacity: 0, scale: 0.5, rotate: -15 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: 15 },
  },
};

function ReelsModal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const post = reelsPosts[current];

  const goTo = (index) => {
    setCurrent(index);
    setLiked(false);
  };

  const next = () => goTo((current + 1) % reelsPosts.length);
  const prev = () => goTo((current - 1 + reelsPosts.length) % reelsPosts.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-all hover:bg-white/40"
        >
          <X size={18} />
        </button>

        <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-white p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.8rem] bg-white">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.id}
                  {...reelAnims[post.anim] || reelAnims.fadeScale}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full flex flex-col items-center justify-center p-8 text-center relative bg-cover bg-center"
                  style={{
                    background: post.image
                      ? `url(${post.image}) center/cover no-repeat`
                      : post.cover,
                  }}
                >
                  {post.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-3">
                    <div className="flex gap-1">
                      {Array.from({ length: reelsPosts.length }, (_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3
                    className="relative text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
                    style={{ color: post.accent || "#fff" }}
                  >
                    {post.title}
                  </h3>
                  <p className="relative mt-3 max-w-xs text-xs leading-relaxed text-white/80 sm:text-sm">
                    {post.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-ink shadow transition-all hover:bg-white" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="px-3 pb-2 pt-2.5 sm:px-4 sm:pb-3 sm:pt-3">
              <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
                  style={{ backgroundColor: post.color }}
                >
                  R
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-ink sm:text-sm">{post.handle}</p>
                  <p className="text-[10px] text-ink-muted sm:text-xs">{post.location}</p>
                </div>
                <div className="rounded-full bg-pink-100 px-2.5 py-1 text-[10px] font-bold text-pink-600 sm:text-xs">
                  Reels
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)}>
                    <Heart size={22} className={liked ? "fill-red-500 text-red-500" : "text-ink hover:text-red-400"} />
                  </motion.button>
                  <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                  <Send size={20} className="text-ink transition-colors hover:text-orange" />
                  <motion.button whileTap={{ scale: 0.8 }} onClick={() => setSaved(!saved)}>
                    <Bookmark size={20} className={saved ? "fill-ink text-ink" : "text-ink hover:text-orange"} />
                  </motion.button>
                </div>
                <div className="flex items-center gap-1 text-ink-muted">
                  <Heart size={14} className="fill-ink-muted" />
                  <span className="text-xs font-semibold">{post.likes}</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`rlikes-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1.5 text-xs font-bold text-ink sm:text-sm"
                >
                  {post.likes} likes
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`rcaption-${post.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm"
                >
                  <strong className="font-bold text-ink">{post.handle}</strong> {post.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {reelsPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "h-2.5 w-9 bg-white shadow-sm" : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OlipopCollection() {
  const [start, setStart] = useState(0);
  const [showInstagram, setShowInstagram] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showBranding, setShowBranding] = useState(false);
  const [showInfographics, setShowInfographics] = useState(false);
  const [showReels, setShowReels] = useState(false);

  const next = () => {
    setStart((prev) => (prev + VISIBLE >= products.length ? 0 : prev + VISIBLE));
  };

  const prev = () => {
    setStart((prev) =>
      prev - VISIBLE < 0
        ? Math.max(products.length - VISIBLE, 0)
        : prev - VISIBLE
    );
  };

  const visibleProducts = products.slice(start, start + VISIBLE);

  return (
    <section className="bg-[#faf3e3] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c4631] mb-3">
          OUR SERVICES
        </h2>
        <p className="text-[#1c4631] text-sm font-medium mb-10">
        Design â€¢ Content â€¢ Branding â€¢ Growth âœ¨
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[#1c4631] text-[#1c4631] bg-white/70 hover:bg-[#1c4631] hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            â€¹
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-12">
            {visibleProducts.map((p, i) => (
              <div
                key={i}
                onClick={() => {
                  if (p.name === "Instagram Posts") setShowInstagram(true);
                  if (p.name === "Carousels") setShowCarousel(true);
                  if (p.name === "Story Designs") setShowStory(true);
                  if (p.name === "Ad Creatives") setShowAd(true);
                  if (p.name === "Event Posters") setShowEvent(true);
                  if (p.name === "Branding Assets") setShowBranding(true);
                  if (p.name === "Infographics") setShowInfographics(true);
                  if (p.name === "Reels & Motion Graphics") setShowReels(true);
                }}
                className="group relative flex flex-col items-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3"
              >
                <div className="relative overflow-hidden rounded-2xl w-full h-80">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-out group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <img
                      src={p.hoverImg}
                      alt={p.name + " preview"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                      <button className="bg-white text-[#1c4631] font-semibold text-sm px-6 py-2 rounded-full shadow-lg hover:bg-[#f0e6cf] transition-colors duration-300">
                        {p.name === "Instagram Posts" ? "View Posts" : p.name === "Carousels" ? "View Carousels" : p.name === "Story Designs" ? "View Stories" : p.name === "Ad Creatives" ? "View Ads" : p.name === "Event Posters" ? "View Events" : p.name === "Branding Assets" ? "View Branding" : p.name === "Infographics" ? "View Infographics" : p.name === "Reels & Motion Graphics" ? "View Reels" : "Visit Now"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-[#1c4631]">{p.tag}</p>
                  <h3 className="text-lg font-bold text-[#1c4631]">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[#1c4631] text-[#1c4631] bg-white/70 hover:bg-[#1c4631] hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            â€º
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showInstagram && <InstagramCarousel onClose={() => setShowInstagram(false)} />}
        {showCarousel && <CarouselModal onClose={() => setShowCarousel(false)} />}
        {showStory && <StoryPreview onClose={() => setShowStory(false)} />}
        {showAd && <AdModal onClose={() => setShowAd(false)} />}
        {showEvent && <EventModal onClose={() => setShowEvent(false)} />}
        {showBranding && <BrandingModal onClose={() => setShowBranding(false)} />}
        {showInfographics && <InfographicsModal onClose={() => setShowInfographics(false)} />}
        {showReels && <ReelsModal onClose={() => setShowReels(false)} />}
      </AnimatePresence>
    </section>
  );
}