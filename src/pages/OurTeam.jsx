import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [headingWidth, setHeadingWidth] = useState(600);

  useEffect(() => {
    const measure = () => {
      if (headingRef.current) setHeadingWidth(headingRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startWidth = headingWidth;
  const startHeight = Math.max(220, headingWidth * 0.5);
  const fullWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
  const fullHeight = typeof window !== "undefined" ? window.innerHeight : 720;

  const videoWidth = startWidth + (fullWidth - startWidth) * progress;
  const videoHeight = startHeight + (fullHeight - startHeight) * progress;
  const borderRadius = 16 - progress * 16;
  const headingOpacity = Math.max(1 - progress * 2, 0);
  const headingTranslateY = progress * 120;

  return (
    <div className="bg-orange text-white">
      <section ref={sectionRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* VIDEO - centered, expands on scroll */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="overflow-hidden shadow-2xl"
              style={{
                width: `${videoWidth}px`,
                height: `${videoHeight}px`,
                borderRadius: `${borderRadius}px`,
              }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/images/new.mp4"
              />
            </div>
          </div>

          {/* HEADING - centered, fades and moves up */}
          <h1
            ref={headingRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10 text-center px-6 text-4xl md:text-6xl font-bold max-w-4xl leading-tight pointer-events-none"
            style={{
              opacity: headingOpacity,
              transform: `translate(-50%, calc(-50% - ${headingTranslateY}px))`,
            }}
          >
            Your Creative, Media &amp; Technology Transformation Partner
          </h1>
        </div>
      </section>
    </div>
  );
}