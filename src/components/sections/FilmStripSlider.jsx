import { useState } from "react";

export default function FilmStripSlider() {
  // Apni images/videos yahan replace kar dena
  const media = [
    { type: "img", src: "https://picsum.photos/id/1080/400/700" },
    { type: "img", src: "https://picsum.photos/id/1062/400/700" },
    { type: "img", src: "https://picsum.photos/id/1043/400/700" },
    { type: "img", src: "https://picsum.photos/id/1074/400/700" },
    { type: "img", src: "https://picsum.photos/id/1084/400/700" },
    { type: "img", src: "https://picsum.photos/id/1011/400/700" },
    { type: "img", src: "https://picsum.photos/id/1027/400/700" },
    { type: "img", src: "https://picsum.photos/id/1025/400/700" },
    // video bhi laga sakti ho:
    // { type: "video", src: "https://your-video-url.mp4" },
  ];

  // loop seamless ho isliye media ko double kar rahe hain
  const loopMedia = [...media, ...media];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#e8ddc8]">
      {/* Heading */}
      <h2
        className="text-center text-orange-600 font-extrabold tracking-wider mb-8 z-20 relative"
        style={{
          fontSize: "clamp(2rem, 6vw, 5rem)",
          fontFamily: "Impact, 'Arial Black', sans-serif",
          textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
        }}
      >
        VIDEO EDITING
      </h2>

      {/* FILM STRIP */}
      <div className="relative w-full bg-black py-3">
        {/* Upar ki sprocket holes (perforations) */}
        <div className="absolute top-0 left-0 w-full h-4 flex animate-scroll-holes">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`t-${i}`}
              className="bg-[#e8ddc8] rounded-sm mx-2 mt-1 flex-shrink-0"
              style={{ width: "28px", height: "14px" }}
            />
          ))}
        </div>

        {/* Beech me chalti hui images/videos */}
        <div className="overflow-hidden py-6">
          <div className="flex animate-scroll-strip w-max">
            {loopMedia.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 overflow-hidden bg-black"
                style={{ width: "200px", height: "320px" }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`media-${i}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Niche ki sprocket holes (perforations) */}
        <div className="absolute bottom-0 left-0 w-full h-4 flex animate-scroll-holes">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`b-${i}`}
              className="bg-[#e8ddc8] rounded-sm mx-2 mb-1 flex-shrink-0"
              style={{ width: "28px", height: "14px" }}
            />
          ))}
        </div>
      </div>

      {/* Animations - inline style tag */}
      <style>{`
        @keyframes scrollStrip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollHoles {
          0% { transform: translateX(0); }
          100% { transform: translateX(-96px); }
        }
        .animate-scroll-strip {
          animation: scrollStrip 30s linear infinite;
        }
        .animate-scroll-holes {
          animation: scrollHoles 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
