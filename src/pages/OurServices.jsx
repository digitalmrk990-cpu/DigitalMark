import { useState } from "react";

const products = [
  { name: "Orange Squeeze", img: "/images/orange.png", tag: "9g Fiber" },
  { name: "Ginger Ale", img: "/images/ginger.png", tag: "9g Fiber" },
  { name: "Citrus Rush", img: "/images/citrus.png", tag: "9g Fiber" },
  { name: "Doctor Goodwin", img: "/images/doctor.png", tag: "9g Fiber" },
  { name: "Cherry Vanilla", img: "/images/cherry.png", tag: "9g Fiber" },
  { name: "Classic Root Beer", img: "/images/rootbeer.png", tag: "9g Fiber" },
  { name: "Vintage Cola", img: "/images/cola.png", tag: "9g Fiber" },
  { name: "Strawberry Vanilla", img: "/images/strawberry.png", tag: "9g Fiber" },
];

const VISIBLE = 4; // ek baar me kitne cards dikhenge

export default function ourservices() {
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
          Shop our collections
        </h2>
        <p className="text-[#1c4631] text-sm font-medium mb-10">
          9g Fiber • Keep Refrigerated ❄
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
                <div className="relative overflow-hidden rounded-2xl w-full">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-64 object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />

                  {/* Curved bottom overlay with Visit Now button */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="bg-[#1c4631] rounded-t-[50%] pt-6 pb-4 px-2 text-center">
                      <button className="bg-white text-[#1c4631] font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#f0e6cf] transition-colors duration-300">
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