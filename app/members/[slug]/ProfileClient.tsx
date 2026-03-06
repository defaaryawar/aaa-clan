"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Member, getAge, getMemberImage } from "../../data/data-biodata";

interface Props {
  member: Member;
}

export default function ProfileClient({ member }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stiff spring = follows scroll closely, no bounce/wobble
  const springConfig = { stiffness: 200, damping: 40, mass: 0.3 };

  // Image parallax — subtle 15% drift, very calm
  const rawImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageY = useSpring(rawImageY, springConfig);

  // Very subtle scale — barely noticeable, just adds depth
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.05, 1]);

  // White panel slides up — tighter spring, no bounce
  const rawPanelY = useTransform(scrollYProgress, [0, 0.45], ["38%", "0%"]);
  const whitePanelY = useSpring(rawPanelY, { stiffness: 220, damping: 45 });

  // Name drifts up gently
  const rawTextY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-8%"]);
  const textY = useSpring(rawTextY, springConfig);

  // Name opacity fades as panel covers it
  const nameOpacity = useTransform(scrollYProgress, [0.25, 0.42], [1, 0]);

  // Overlay darkens slightly
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.2]);

  const imageUrl = `/images/member/${getMemberImage(member.slug)}`;

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafaf8]" style={{ minHeight: "160vh" }}>
      {/* ── 1. Parallax Background Image ─────────────────────────────────
          Uses motion.div with fixed positioning + translateY for true parallax.
          Image is oversized vertically to allow room for the parallax movement.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#000]">
        <motion.div
          className="absolute w-full origin-center"
          style={{
            y: imageY,
            scale: imageScale,
            top: "-15%",
            bottom: "-15%",
            left: 0,
            right: 0,
          }}
        >
          <img
            src={imageUrl}
            alt={member.namaPanggung}
            className="w-full h-full object-cover"
            style={{
              objectPosition: member.imagePosition ?? "center top",
              // Ensure image covers even with parallax offset
              minHeight: "130%",
              position: "absolute",
              inset: 0,
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/1200x800?text=No+Image";
            }}
          />
        </motion.div>

        {/* Dynamic scroll-driven darkening overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-[#000] pointer-events-none"
        />

        {/* Strong bottom fade — seamless blend into page bg */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "55%",
            background:
              "linear-gradient(to top, #fafaf8 0%, #fafaf8 10%, rgba(250,250,248,0.85) 30%, transparent 100%)",
          }}
        />

        {/* Subtle top vignette — nav area */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "30%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)",
          }}
        />

        {/* Halftone texture */}
        <div className="absolute inset-0 halftone-bg opacity-15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* ── 2. Fixed Top Navigation ──────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 md:p-8 pointer-events-none">
        <Link
          href="/members"
          className="pointer-events-auto manga-btn px-4 sm:px-6 py-2 bg-white text-[#000] text-xs font-black uppercase tracking-widest hover:bg-[#e63946] hover:text-white transition-colors inline-block"
        >
          ← Back
        </Link>
      </div>

      {/* ── 3. Scrollable Content ────────────────────────────────────────── */}
      <div className="relative w-full z-20 pb-32" style={{ paddingTop: "clamp(44vh, 52vh, 60vh)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Giant floating name — drifts up and fades as panel rises */}
          <motion.div
            className="w-full text-left relative z-20 pointer-events-none select-none"
            style={{
              y: textY,
              opacity: nameOpacity,
              marginBottom: "clamp(-3rem, -7vw, -6rem)",
            }}
          >
            <h1
              className="font-black uppercase text-white leading-[0.82]"
              style={{
                fontFamily: "Outfit, sans-serif",
                // Fluid font size: 5rem on mobile → 14rem on desktop
                fontSize: "clamp(4rem, 14vw, 14rem)",
                textShadow: "0 4px 0 rgba(0,0,0,0.9), 0 2px 30px rgba(0,0,0,0.5)",
                wordBreak: "break-word",
              }}
            >
              {member.namaPanggung.split(" ")[0]}
            </h1>
          </motion.div>

          {/* ── Main Brutalist Panel ── */}
          <motion.div
            className="w-full bg-white border-4 border-[#000] comic-shadow relative z-30"
            style={{
              y: whitePanelY,
              padding: "clamp(1.5rem, 4vw, 4rem)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">
              {/* Left: Stats */}
              <div className="w-full lg:w-[35%] flex flex-col gap-6 sm:gap-8">
                <div>
                  <span className="text-xs font-black tracking-[0.2em] text-[#e63946] mb-1 block">
                    FULL NAME
                  </span>
                  <span className="text-lg sm:text-xl font-bold uppercase text-[#000] leading-tight">
                    {member.namaLengkap}
                  </span>
                </div>

                <div className="flex gap-1 flex-wrap">
                  {member.pekerjaan.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 bg-[#000] text-white text-[0.6rem] font-black uppercase tracking-widest"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <div className="w-full h-[3px] bg-[#000]" />

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {member.tanggalLahir && (
                    <div>
                      <span className="text-[0.6rem] font-black tracking-[0.2em] text-[#000]/50 mb-1 block">
                        AGE
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#000]">
                        {getAge(member.tanggalLahir)} YRS
                      </span>
                    </div>
                  )}
                  {member.tempatLahir && (
                    <div>
                      <span className="text-[0.6rem] font-black tracking-[0.2em] text-[#000]/50 mb-1 block">
                        ORIGIN
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#000] leading-tight">
                        {member.tempatLahir}
                      </span>
                    </div>
                  )}
                  {member.grup && (
                    <div className="col-span-2">
                      <span className="text-[0.6rem] font-black tracking-[0.2em] text-[#000]/50 mb-1 block">
                        AFFILIATION
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#e63946] uppercase tracking-wider">
                        {member.grup}
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-btn w-full py-3 sm:py-4 bg-[#e63946] text-white text-center font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#000] transition-colors block"
                >
                  FOLLOW @{member.instagram}
                </a>
              </div>

              {/* Right: Bio */}
              <div className="w-full lg:w-[65%] flex flex-col justify-center">
                <span
                  className="font-black text-[#000]/10 leading-none"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 5rem)",
                    marginBottom: "-0.5rem",
                  }}
                >
                  0{member.id}
                </span>
                <h2
                  className="font-black uppercase text-[#000] mb-6 sm:mb-8 leading-tight"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  }}
                >
                  {member.namaPanggung}
                </h2>
                <div className="text-sm sm:text-base md:text-lg font-bold text-[#000]/80 leading-relaxed space-y-4 sm:space-y-6">
                  {member.bio.split(". ").map((sentence, idx, arr) => (
                    <p key={idx}>
                      {sentence}
                      {idx !== arr.length - 1 && "."}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative tape */}
            <div className="absolute -top-4 -right-3 sm:-right-4 w-24 sm:w-32 h-7 sm:h-8 bg-yellow-400 opacity-80 transform rotate-[10deg] border-2 border-[#000] -z-10 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
