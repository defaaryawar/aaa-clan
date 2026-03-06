"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const YT_LINK = "https://www.youtube.com/@ybrap";

const cards = [
  {
    id: 1,
    label: "AAA CLAN",
    title: "AAA CLAN",
    subtitle: "Where Creators Unite",
    tag: "@weareaaaclan",
    badge: "Vol. 01",
    img: "/images/herosection/aaaclan.jpeg",
    alt: "AAA CLAN",
    isLive: false,
  },
  {
    id: 2,
    label: "MARAPTHON",
    title: "MARAPTHON",
    subtitle: "NOW STREAMING · Click to Watch",
    tag: "LIVE",
    badge: "Season 3",
    img: "/images/herosection/marapthon-thumbnail.webp",
    alt: "Marapthon Season 3",
    isLive: true,
  },
];

function getFrontVariant() {
  return {
    x: ["12%", "70%", "0%"],
    y: ["-5%", "-30%", "0%"],
    scale: [0.88, 1.08, 1],
    rotateZ: [7, 28, 0],
    rotateY: [0, 15, 0],
    zIndex: [10, 50, 30],
    opacity: [0.92, 1, 1],
  };
}

function getBackVariant() {
  return {
    x: ["0%", "-25%", "12%"],
    y: ["0%", "8%", "-5%"],
    scale: [1, 0.82, 0.88],
    rotateZ: [0, -18, 7],
    rotateY: [0, -10, 0],
    zIndex: [30, 5, 10],
    opacity: [1, 0.9, 0.92],
  };
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSwapRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerSwap = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    setTimeout(() => setIsAnimating(false), 850);
  };

  useEffect(() => {
    if (isHovered) {
      if (autoSwapRef.current) clearInterval(autoSwapRef.current);
      return;
    }
    autoSwapRef.current = setInterval(triggerSwap, 5000);
    return () => {
      if (autoSwapRef.current) clearInterval(autoSwapRef.current);
    };
  }, [isHovered, isAnimating]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col overflow-hidden pt-20 bg-[#fafaf8]"
    >
      <div className="absolute inset-0 halftone-bg pointer-events-none" />

      <div className="absolute right-4 lg:right-8 top-28 select-none pointer-events-none vertical-text text-[6vh] lg:text-[8vh] font-black z-0 hidden md:block">
        <span className="text-[#e63946] opacity-60 drop-shadow-sm">ア</span>
        <span className="text-[#000] opacity-10">アアク</span>
        <span className="text-[#e63946] opacity-60 drop-shadow-sm">ラン</span>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 z-10 relative flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center py-8 md:py-16">
          {/* ── Left ── */}
          <div className="relative z-20">
            <motion.a
              href={YT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8 group cursor-pointer w-max"
            >
              <div className="w-3 h-3 bg-[#e63946] border-2 border-[#000] animate-pulse" />
              <span className="text-[0.65rem] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#000]/60 group-hover:text-[#e63946] transition-colors">
                🔴 LIVE — MARAPTHON SEASON 3 · WATCH ON YT →
              </span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 style={{ fontFamily: "Outfit, sans-serif" }}>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.85] text-[#000] uppercase tracking-tight">
                  AAA
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.85] uppercase tracking-tight mt-1">
                  <span className="text-[#e63946]">CLAN</span>
                </span>
                <span className="block text-base sm:text-lg lg:text-xl font-black leading-tight text-[#000]/40 uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-4">
                  Where Creators Unite
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-20 h-1 bg-[#000] origin-left my-6 sm:my-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg font-bold leading-relaxed text-[#000]/70 max-w-md"
            >
              A collective of streamers, gamers, and digital creators led by{" "}
              <span className="text-[#e63946] font-black">Reza Arap</span>. Pushing the bounds of
              live entertainment, gaming culture, and internet creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#community"
                className="manga-btn px-6 py-3 sm:px-7 sm:py-3.5 bg-[#000] text-white text-sm font-black text-center tracking-wide"
              >
                JOIN THE CLAN →
              </a>
              <a
                href={YT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="manga-btn px-6 py-3 sm:px-7 sm:py-3.5 bg-[#e63946] text-white text-sm font-black text-center tracking-wide hover:bg-[#000]"
              >
                ▶ WATCH MARAPTHON
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 sm:mt-10 flex gap-6 sm:gap-8"
            >
              {[
                { n: "10M+", l: "Followers" },
                { n: "9", l: "Members" },
                { n: "3", l: "Seasons" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span
                    className="text-xl sm:text-2xl font-black text-[#000]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[0.6rem] font-bold text-[#000]/40 uppercase tracking-wider">
                    {s.l}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Card Deck ── */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div
              className="relative z-20"
              style={{ width: "350px", height: "550px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const isBackCard = !isActive;

                return (
                  <motion.div
                    key={card.id}
                    style={{ transformPerspective: 1000 }}
                    animate={isActive ? getFrontVariant() : getBackVariant()}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      times: [0, 0.45, 1],
                    }}
                    onClick={() => isBackCard && !isAnimating && triggerSwap()}
                    className={`absolute inset-0 manga-panel bg-[#000] comic-shadow overflow-visible
                      ${isBackCard && !isAnimating ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {/* ── Badges OUTSIDE the card ── */}
                    {/* Top-left: card name sticker */}
                    <div
                      className="absolute bg-[#e63946] text-white font-black text-[0.6rem] uppercase tracking-widest px-3 py-1.5 border-4 border-[#000] pointer-events-none"
                      style={{
                        top: "-14px",
                        left: "12px",
                        boxShadow: "3px 3px 0 #000",
                        zIndex: 50,
                        transform: "rotate(-2deg)",
                      }}
                    >
                      {card.label}
                    </div>
                    {/* Top-right: badge/season sticker */}
                    <div
                      className="absolute bg-white text-[#000] font-black text-[0.6rem] uppercase tracking-widest px-3 py-1.5 border-4 border-[#000] pointer-events-none"
                      style={{
                        top: "10px",
                        right: "-50px",
                        boxShadow: "3px 3px 0 #000",
                        zIndex: 50,
                        transform: "rotate(2deg)",
                      }}
                    >
                      {card.badge}
                    </div>
                    {card.isLive ? (
                      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
                        <img
                          src={card.img}
                          alt={card.alt}
                          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 transition-transform duration-700"
                          style={{ transform: isActive && isHovered ? "scale(1.05)" : "scale(1)" }}
                        />
                        <div className="absolute inset-0 speed-lines opacity-15 pointer-events-none z-10" />

                        <div className="relative z-20 flex flex-col items-center gap-4 text-center px-6">
                          <a
                            href={YT_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-14 h-14 bg-[#e63946] border-4 border-white rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#fff] transition-all
                              ${isActive ? "hover:scale-110 cursor-pointer pointer-events-auto" : "pointer-events-none"}`}
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="ml-1"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </a>
                          <h3
                            className="text-2xl font-black uppercase text-white leading-none"
                            style={{
                              fontFamily: "Outfit, sans-serif",
                              textShadow: "0 4px 10px rgba(0,0,0,0.8)",
                            }}
                          >
                            {card.title}
                          </h3>
                          <p className="text-white text-[0.65rem] font-bold uppercase tracking-wider drop-shadow-md">
                            {card.subtitle}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-[#000] border-t-4 border-white/20 px-3 py-2.5 z-30 flex items-center justify-between">
                          <span
                            className="text-sm font-black uppercase text-white"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            Watch Now
                          </span>
                          <span className="text-[0.65rem] font-black text-[#e63946] tracking-widest animate-pulse">
                            🔴 {card.tag}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full relative overflow-hidden bg-white">
                        <img
                          src={card.img}
                          alt={card.alt}
                          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700"
                          style={{ transform: isActive && isHovered ? "scale(1.05)" : "scale(1)" }}
                        />
                        <div className="absolute inset-0 speed-lines opacity-10 pointer-events-none z-10" />

                        <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-[#000] px-3 py-2.5 z-30 flex items-center justify-between">
                          <div>
                            <h3
                              className="text-sm font-black uppercase text-[#000] leading-none"
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              {card.title}
                            </h3>
                            <p className="text-[0.6rem] font-bold text-[#000]/50 uppercase tracking-wider mt-0.5">
                              {card.subtitle}
                            </p>
                          </div>
                          <span className="text-[0.65rem] font-black text-[#e63946] tracking-widest">
                            {card.tag}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Click hint */}
              {!isAnimating && (
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                  <span className="text-[0.6rem] font-black uppercase tracking-widest text-[#000]/25">
                    klik kartu belakang untuk ganti
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t-3 border-[#000] bg-[#000] text-white py-2 z-40 relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between text-[0.55rem] sm:text-[0.6rem] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase">
          <span>JAKARTA, ID</span>
          <span className="hidden sm:inline">STREAMERS · GAMERS · CREATORS · DJS</span>
          <span>© AAA CLAN</span>
        </div>
      </div>
    </section>
  );
}
