import { useState } from "react";

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

const VISIBLE = 4; // ek baar me kitne cards dikhenge

export default function OlipopCollection() {
  const [start, setStart] = useState(0);

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
        Design • Content • Branding • Growth ✨
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[#1c4631] text-[#1c4631] bg-white/70 hover:bg-[#1c4631] hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-12">
            {visibleProducts.map((p, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3"
              >
                {/* Image area - fixed portrait height */}
                <div className="relative overflow-hidden rounded-2xl w-full h-80">
                  {/* Main PNG image - hover pe hide ho jata hai */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-out group-hover:opacity-0"
                  />

                  {/* JPG image - neeche se upar slide hoke poora card cover karta hai */}
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <img
                      src={p.hoverImg}
                      alt={p.name + " preview"}
                      className="w-full h-full object-cover"
                    />

                  {/* Visit Now button - JPG image ke neeche (bottom) */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6">
                    <button className="bg-white text-[#1c4631] font-semibold text-sm px-6 py-2 rounded-full shadow-lg hover:bg-[#f0e6cf] transition-colors duration-300">
                      Visit Now
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

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-[#1c4631] text-[#1c4631] bg-white/70 hover:bg-[#1c4631] hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}