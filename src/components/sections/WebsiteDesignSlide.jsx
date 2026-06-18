import { useState, useEffect, useRef } from "react";

export default function WebsiteDesignSlide() {
  const topics = [
    {
      title: "Landing Pages",
      desc: "High-converting landing pages designed to capture attention and drive action. Clean layouts, sharp messaging, and fast load times that turn visitors into leads.",
      img: "https://picsum.photos/id/180/800/500",
    },
    {
      title: "Business Websites",
      desc: "Professional corporate websites that build trust and represent your brand. Responsive, scalable, and engineered to support your business objectives.",
      img: "https://picsum.photos/id/0/800/500",
    },
    {
      title: "NGO Websites",
      desc: "Purpose-driven websites for non-profits that tell your story, attract donors, and grow community impact through clear, emotional design.",
      img: "https://picsum.photos/id/1059/800/500",
    },
    {
      title: "Portfolio Websites",
      desc: "Stunning portfolio sites that showcase your work beautifully. Minimal, elegant, and focused on making your projects the hero.",
      img: "https://picsum.photos/id/119/800/500",
    },
    {
      title: "Conversion Focused Design",
      desc: "Data-driven design built to convert. Every element — from CTA placement to color psychology — is optimized to maximize results.",
      img: "https://picsum.photos/id/48/800/500",
    },
  ];

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      const index = Math.min(
        topics.length - 1,
        Math.floor(progress * topics.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topics.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${topics.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <h1
          className="text-center text-white font-extrabold mb-8 tracking-wide"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          WEBSITE <span className="text-purple-500">DESIGN</span>
        </h1>

        <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            {topics.map((t, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  display: i === activeIndex ? "block" : "none",
                }}
              >
                <h2
                  className="font-bold transition-all duration-500"
                  style={{
                    fontSize: "2rem",
                    color: "#a855f7",
                  }}
                >
                  {t.title}
                </h2>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: "200px",
                    opacity: 1,
                  }}
                >
                  <p className="text-gray-300 mt-2 text-base leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[350px] rounded-2xl border-2 border-purple-500 overflow-hidden bg-black/40">
            {topics.map((t, i) => (
              <img
                key={i}
                src={t.img}
                alt={t.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  transform:
                    i === activeIndex ? "translateX(0)" : "translateX(100%)",
                  zIndex: i === activeIndex ? 2 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
