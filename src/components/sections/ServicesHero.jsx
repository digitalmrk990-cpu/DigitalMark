import { useState } from 'react'
import FilmStripSlider from './FilmStripSlider'

const DEFAULT_IMAGE = '/hero-default.jpg'

const wordData = [
  { text: 'Impact', color: 'text-yellow-400', image: '/mafias.jpg' },
  { text: 'Stories', color: 'text-cyan-400', image: '/better.jpg' },
  { text: 'Growth!', color: 'text-pink-400', image: '/bigger.jpg' },
]

export default function ServicesHero() {
  const [bgImage, setBgImage] = useState(DEFAULT_IMAGE)
  const [activeWord, setActiveWord] = useState(null)

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
    <>
      <section className="relative h-screen w-full overflow-hidden bg-black">
      <style>{`
        .hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:all .6s ease}
        .overlay{position:absolute;inset:0;background:#000}
        .word,.text-item{transition:.35s ease}
        .word{cursor:pointer}
        .hide{opacity:0;visibility:hidden}
        .glow{text-shadow:0 0 20px rgba(255,255,255,.25),0 0 40px rgba(255,255,255,.15)}
      `}</style>

      <div
        className="hero-bg"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      <div className="overlay" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <h1 className="glow font-sans text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            <span className={`text-item ${activeWord ? 'hide' : ''}`}>
              Turning Ideas Into
            </span>{' '}
            <span
              className={`word bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ${isHidden('Impact') ? 'hide' : ''}`}
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
              className={`word bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ${isHidden('Stories') ? 'hide' : ''}`}
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
              className={`word bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ${isHidden('Growth!') ? 'hide' : ''}`}
              style={{ color: activeWord === 'Growth!' ? '#ffffff' : undefined }}
              onMouseEnter={() => handleEnter(wordData[2])}
              onMouseLeave={handleLeave}
            >
              Growth!
            </span>
          </h1>
        </div>
      </div>
      </section>
      <FilmStripSlider />
    </>
  )
}




