import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const DEFAULT_IMAGE = '/hero-default.jpg'

const wordData = [
  { text: 'Impact', color: 'text-yellow-400', image: '/mafias.jpg' },
  { text: 'Stories', color: 'text-cyan-400', image: '/better.jpg' },
  { text: 'Growth!', color: 'text-pink-400', image: '/bigger.jpg' },
]

export default function ServicesHero() {
  const [bgImage, setBgImage] = useState(DEFAULT_IMAGE)
  const [activeWord, setActiveWord] = useState(null)
  const rocketWrapRef = useRef(null)
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let mounted = true

    function flyRocket() {
      if (!mounted || !rocketWrapRef.current) return

      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight
      const { x, y } = mousePos.current

      const cp1x = startX + (Math.random() * 500 - 250)
      const cp1y = startY + (Math.random() * 500 - 250)
      const cp2x = x + (Math.random() * 300 - 150)
      const cp2y = y + (Math.random() * 300 - 150)
      const endX = x + (Math.random() * 300 - 150)
      const endY = y + (Math.random() * 300 - 150)

      gsap.to(rocketWrapRef.current, {
        duration: 8,
        ease: 'power1.inOut',
        motionPath: {
          path: [
            { x: startX, y: startY },
            { x: cp1x, y: cp1y },
            { x: cp2x, y: cp2y },
            { x: endX, y: endY },
          ],
          curviness: 2,
          autoRotate: true,
        },
        onComplete: flyRocket,
      })
    }

    flyRocket()
    return () => {
      mounted = false
      gsap.killTweensOf(rocketWrapRef.current)
    }
  }, [])

  const handleEnter = (w) => {
    setBgImage(w.image)
    setActiveWord(w.text)
  }

  const handleLeave = () => {
    setBgImage(DEFAULT_IMAGE)
    setActiveWord(null)
  }

  const isHidden = (text) => activeWord !== null && activeWord !== text

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        .hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:all .6s ease}
        .overlay{position:absolute;inset:0;background:rgba(0,0,0,.55)}
        .word,.text-item{transition:.35s ease}
        .word{cursor:pointer}
        .hide{opacity:0;visibility:hidden}
        .glow{text-shadow:0 0 20px rgba(255,255,255,.25),0 0 40px rgba(255,255,255,.15)}
        #rocketWrap{position:fixed;left:0;top:0;z-index:9999;pointer-events:none}
        #rocket{width:90px;height:auto;display:block;filter:drop-shadow(0 0 15px rgba(255,255,255,.8)) drop-shadow(0 0 40px rgba(255,255,255,.3))}
        .rocket-flame{position:absolute;width:35px;height:35px;left:-15px;top:28px;border-radius:50%;background:radial-gradient(circle,#fff,#ffd000,#ff6a00,transparent);filter:blur(8px);animation:flame .15s infinite alternate}
        @keyframes flame{from{transform:scale(.8);opacity:.6}to{transform:scale(1.3);opacity:1}}
      `}</style>

      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      <div className="overlay" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <h1 className="glow font-sans text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            <span className={`text-item ${activeWord ? 'hide' : ''}`}>
              Turning Ideas Into
            </span>{' '}
            <span
              className={`word text-yellow-400 ${isHidden('Impact') ? 'hide' : ''}`}
              style={{ color: activeWord === 'Impact' ? '#ffffff' : undefined }}
              onMouseEnter={() => handleEnter(wordData[0])}
              onMouseLeave={handleLeave}
            >
              Impact
            </span>
            <br />
            <span className={`text-item ${activeWord ? 'hide' : ''}`}>
              Creative enough to tell
            </span>{' '}
            <span
              className={`word text-cyan-400 ${isHidden('Stories') ? 'hide' : ''}`}
              style={{ color: activeWord === 'Stories' ? '#ffffff' : undefined }}
              onMouseEnter={() => handleEnter(wordData[1])}
              onMouseLeave={handleLeave}
            >
              Stories
            </span>
            <br />
            <span className={`text-item ${activeWord ? 'hide' : ''}`}>
              Driven enough to deliver
            </span>{' '}
            <span
              className={`word text-pink-400 ${isHidden('Growth!') ? 'hide' : ''}`}
              style={{ color: activeWord === 'Growth!' ? '#ffffff' : undefined }}
              onMouseEnter={() => handleEnter(wordData[2])}
              onMouseLeave={handleLeave}
            >
              Growth!
            </span>
          </h1>
        </div>
      </div>

      <div id="rocketWrap" ref={rocketWrapRef}>
        <div className="rocket-flame" />
        <img src="/rocket.png" id="rocket" alt="Rocket" />
      </div>
    </section>
  )
}
