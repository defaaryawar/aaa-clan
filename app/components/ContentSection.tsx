"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const episodes = [
  {
    title: "24-HOUR MARATHON",
    arc: "SEASON PREMIERE",
    desc: "Epic non-stop streaming session with all AAA Clan members.",
    color: "bg-[#e63946]",
  },
  {
    title: "BATTLE FOR GLORY",
    arc: "TOURNAMENT ARC",
    desc: "Competitive gaming tournament with the community's top players.",
    color: "bg-[#457b9d]",
  },
  {
    title: "RESONANCE FREQ",
    arc: "MUSIC ARC",
    desc: "Live DJ sets blending gaming culture with electronic beats.",
    color: "bg-[#e9c46a]",
  },
  {
    title: "ALLIANCE FORMED",
    arc: "COMMUNITY ARC",
    desc: "Weekly gaming sessions joining forces with fans.",
    color: "bg-[#f4a261]",
  },
  {
    title: "BEHIND THE SCENES",
    arc: "VLOG ARCHIVES",
    desc: "An exclusive look into the daily grind of AAA Clan.",
    color: "bg-[#fafaf8]",
  },
  {
    title: "HERO'S SACRIFICE",
    arc: "CHARITY ARC",
    desc: "Giving back through monumental fundraising streams.",
    color: "bg-[#457b9d]",
  },
];

export default function ContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="content"
      className="py-24 md:py-32 px-6 sm:px-8 bg-white border-y-3 border-[#000] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto bg-[#000] text-white py-2 px-6 mb-12 flex justify-between items-center text-xs font-black tracking-widest uppercase">
        <span>▶ NEXT EPISODES</span>
        <span className="hidden sm:block">AAA BROADCASTING</span>
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto">
        <h2
          className="text-4xl sm:text-6xl font-black text-[#000] uppercase mb-10 text-center"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          EPISODE <span className="text-[#e63946]">HIGHLIGHTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="manga-panel bg-white group flex flex-col comic-shadow-sm comic-shadow-hover relative"
            >
              <div className="absolute -top-2.5 -right-2.5 bg-white border-2 border-[#000] px-2 py-0.5 text-[0.6rem] font-black z-20 uppercase shadow-[2px_2px_0_0_#000] transform rotate-3">
                {ep.arc}
              </div>

              <div
                className={`aspect-video border-b-3 border-[#000] relative overflow-hidden flex items-center justify-center ${ep.color}`}
              >
                <div className="absolute inset-0 speed-lines opacity-10" />
                <span className="text-4xl font-black text-[#000]/15 uppercase">EP. 0{i + 1}</span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-14 h-14 bg-white border-3 border-[#000] rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#000]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="black" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow bg-white">
                <h3
                  className="text-lg sm:text-xl font-black text-[#000] uppercase leading-tight mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {ep.title}
                </h3>
                <p className="text-[#000]/70 font-bold text-sm leading-snug border-l-3 border-[#000]/20 pl-3">
                  {ep.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
