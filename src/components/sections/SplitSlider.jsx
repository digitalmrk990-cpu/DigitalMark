import { useState, useEffect } from "react"

export default function SplitSlider() {
  const images = [
    "https://picsum.photos/id/1015/1600/900",
    "https://picsum.photos/id/1018/1600/900",
    "https://picsum.photos/id/1024/1600/900",
    "https://picsum.photos/id/1039/1600/900",
  ]

  const [current, setCurrent] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setAnimate(true)
      }, 700)
    }, 2500)
    const interval = setInterval(() => {
      setTimeout(() => {
        setAnimate(false)
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % images.length)
          setAnimate(true)
        }, 700)
      }, 2500)
    }, 3900)
    setAnimate(true)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [images.length])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: animate ? "translateY(0)" : "translateY(100%)",
            }}
          >
            <img
              src={images[current]}
              alt=""
              className="w-[200%] max-w-none h-full object-cover"
              style={{ objectPosition: "left center" }}
            />
          </div>
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: animate ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <img
              src={images[current]}
              alt=""
              className="w-[200%] max-w-none h-full object-cover"
              style={{ objectPosition: "right center", marginLeft: "-100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}



