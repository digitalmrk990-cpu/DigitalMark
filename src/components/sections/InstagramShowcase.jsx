import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/igpost1/600/600',
    caption: 'Minimal aesthetics that speak volumes. Your brand deserves visuals that stop the scroll.',
    likes: '2,847',
    handle: '@sheeshscribes',
    location: 'Mumbai, India',
    color: '#E8723C',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/igpost2/600/600',
    caption: 'Bold colours, bolder impact. Turning everyday content into brand statements.',
    likes: '3,621',
    handle: '@sheeshscribes',
    location: 'Design Studio',
    color: '#D45E2A',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/igpost3/600/600',
    caption: 'From concept to creation — every pixel tells your unique story.',
    likes: '1,934',
    handle: '@sheeshscribes',
    location: 'Content Lab',
    color: '#B0481E',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/igpost4/600/600',
    caption: 'Typography meets creativity. Words that move, designs that stick forever.',
    likes: '4,102',
    handle: '@sheeshscribes',
    location: 'Brand Studio',
    color: '#E8723C',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/igpost5/600/600',
    caption: 'Scroll-stopping content is just a post away. Let us craft your next hit.',
    likes: '2,556',
    handle: '@sheeshscribes',
    location: 'Social Media',
    color: '#D45E2A',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/igpost6/600/600',
    caption: 'Your brand story deserves to be told in frames that captivate and convert.',
    likes: '5,239',
    handle: '@sheeshscribes',
    location: 'Creative Agency',
    color: '#B0481E',
  },
]

export default function InstagramShowcase() {
  const [current, setCurrent] = useState(0)
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const intervalRef = useRef(null)
  const post = posts[current]

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length)
      setLiked(false)
    }, 4000)
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [startAutoPlay])

  const goTo = (index) => {
    setCurrent(index)
    setLiked(false)
    startAutoPlay()
  }

  const next = () => goTo((current + 1) % posts.length)
  const prev = () => goTo((current - 1 + posts.length) % posts.length)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 sm:py-28">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
          className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"
        />
      </div>

      <div className="container-x relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow">Instagram Excellence</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl lg:text-6xl">
            Posts That <span className="text-orange">Perform</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">
            Every design is crafted to stop the scroll, spark engagement, and grow your brand's presence.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="relative flex items-center gap-4 sm:gap-8">
            {/* Prev button */}
            <button
              onClick={prev}
              className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink/10 bg-white text-ink shadow-lg transition-all hover:border-orange hover:text-orange hover:shadow-orange-200/50"
              aria-label="Previous post"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Phone frame */}
            <div className="relative rounded-[2.5rem] border-[3px] border-ink/10 bg-white p-3 shadow-2xl shadow-orange-200/30 transition-all duration-500 hover:shadow-orange-300/40">
              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-ink/10">
                <div className="mx-auto h-2.5 w-2.5 translate-y-1.5 rounded-full bg-ink/20" />
              </div>

              <div className="w-[85vw] max-w-[360px] overflow-hidden rounded-[1.8rem] bg-white">
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
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient overlay at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
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
                        className="transition-colors"
                      >
                        <Heart
                          size={22}
                          className={
                            liked
                              ? 'fill-red-500 text-red-500'
                              : 'text-ink hover:text-red-400'
                          }
                        />
                      </motion.button>
                      <MessageCircle size={21} className="text-ink transition-colors hover:text-orange" />
                      <Send size={20} className="text-ink transition-colors hover:text-orange" />
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => setSaved(!saved)}
                    >
                      <Bookmark
                        size={21}
                        className={
                          saved
                            ? 'fill-orange text-orange'
                            : 'text-ink transition-colors hover:text-orange'
                        }
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
                      <span className="font-bold">{post.handle}</span>{' '}
                      {post.caption}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink/10 bg-white text-ink shadow-lg transition-all hover:border-orange hover:text-orange hover:shadow-orange-200/50"
              aria-label="Next post"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex items-center gap-2.5 sm:mt-8">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === current
                    ? 'h-2.5 w-9 bg-orange shadow-sm shadow-orange-300'
                    : 'h-2.5 w-2.5 bg-gray-300 hover:bg-orange-200'
                }`}
                aria-label={`Go to post ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
