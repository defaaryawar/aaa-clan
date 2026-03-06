"use client";

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(contentRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 120,
    mass: 0.4,
  });

  // Marquee bergerak kiri saat scroll
  const xTransform = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 sm:px-8 bg-white border-b-4 border-[#000] relative overflow-hidden"
    >
      {/* Scroll-Linked Parallax Watermark */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[6%] left-0 whitespace-nowrap select-none pointer-events-none font-black leading-none z-0"
      >
        <span
          className="text-[10rem] md:text-[16rem] lg:text-[20rem] text-[#000] opacity-[0.04]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          AAA CLAN — 仲間 — ANTEK ARAP — 仲間 — AAA CLAN — 仲間 — MARAPTHON — 仲間 — AAA CLAN — 仲間
          —
        </span>
      </motion.div>

      <div ref={contentRef} className="max-w-[1400px] mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-1 bg-[#e63946]" />
          <span className="text-xs font-black tracking-[0.25em] uppercase text-[#000]/50">
            ABOUT US — 物語
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#000] mb-12"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          BUKAN SEKADAR
          <br />
          <span className="text-[#e63946]">KONTEN KREATOR.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — copy + marapthon card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="manga-panel bg-white p-6 sm:p-8 comic-shadow-sm border-4 border-[#000]"
            >
              <p className="text-sm sm:text-base md:text-lg font-bold leading-relaxed text-[#000]">
                Digawangi oleh <span className="text-[#e63946] font-black">Reza Arap Oktovian</span>
                , AAA Clan adalah kumpulan kreator, streamer, DJ, dan mantan pro player yang akrab
                disebut <span className="text-[#e63946] font-black">"Antek-Antek Arap"</span>.
              </p>
              <p className="text-[#000]/50 text-xs sm:text-sm font-bold leading-relaxed mt-4">
                Lahir dari obrolan santai di parkiran restoran pada 2024, mereka menciptakan
                MARAPTHON — live streaming nonstop terpanjang Indonesia. Season 3 mereka menembus
                peringkat <span className="text-[#000]/80">#1 YouTube Global</span> hanya dalam 6
                hari, melampaui IShowSpeed dan Kai Cenat.
              </p>
            </motion.div>

            {/* Marapthon + kanji card */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="manga-panel bg-[#e63946] flex-1 p-5 comic-shadow-sm relative overflow-hidden border-4 border-[#000]"
              >
                <div className="absolute inset-0 speed-lines opacity-15 pointer-events-none" />
                <h3
                  className="text-2xl sm:text-3xl font-black text-white uppercase leading-none relative z-10"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  MARAPTHON
                </h3>
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mt-2 relative z-10">
                  Flagship Show · 3 Seasons · Est. Des 2024
                </p>
                <div className="flex gap-3 mt-4 relative z-10">
                  {["S1 · 34 Hari", "S2 · 69 Hari", "S3 · 100 Hari"].map((s) => (
                    <span
                      key={s}
                      className="text-[0.6rem] font-black uppercase tracking-wider bg-white/20 text-white px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className="manga-panel bg-[#e9c46a] w-full sm:w-28 md:w-36 p-4 comic-shadow-sm flex items-center justify-center border-4 border-[#000]"
              >
                <div className="vertical-text text-2xl sm:text-3xl font-black text-[#000] leading-none">
                  仲間
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="manga-btn inline-block px-8 py-4 bg-[#000] text-white font-black uppercase tracking-widest text-sm hover:bg-[#e63946] transition-colors border-4 border-[#000]"
                style={{ boxShadow: "4px 4px 0 #e63946" }}
              >
                Selengkapnya →
              </Link>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "9", label: "Member", color: "bg-[#000]", text: "text-white" },
                { value: "47K", label: "Peak Viewers", color: "bg-[#457b9d]", text: "text-white" },
                {
                  value: "#1",
                  label: "YouTube Global",
                  color: "bg-[#e9c46a]",
                  text: "text-[#000]",
                },
                { value: "24/7", label: "Nonstop", color: "bg-[#e63946]", text: "text-white" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + 0.08 * i, type: "spring" }}
                  className={`manga-panel comic-shadow-sm p-5 sm:p-8 flex flex-col items-center justify-center text-center ${stat.color} border-4 border-[#000]`}
                >
                  <div
                    className={`text-3xl sm:text-4xl font-black ${stat.text}`}
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="bg-white border-2 border-[#000] px-2 py-0.5 mt-3">
                    <span className="text-[0.6rem] font-black text-[#000] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 9 member mini list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="mt-4 border-4 border-[#000] bg-white p-4"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              <span className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#000]/40 block mb-3">
                The Crew
              </span>
              <div className="flex flex-wrap gap-1">
                {["Reza Arap", "Jot", "Garry", "Yuka", "Aloy", "Tepe", "Niko", "Bravy", "Ibot"].map(
                  (name, i) => (
                    <span
                      key={name}
                      className="text-[0.65rem] font-black uppercase px-2 py-1 bg-[#000]/5 text-[#000]/70 border border-[#000]/10"
                    >
                      {name}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
