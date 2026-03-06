"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2, Radio, Music, Zap, Star, Coins, ShoppingCart } from "lucide-react";

const IG_CLAN = "https://instagram.com/weareaaaclan";
const DISCORD_LINK = "https://discord.gg/rapsnonot";
const MEMBER_LINK = "https://shorturl.at/hodCH";
const DONATE_LINK = "https://cebanmatters.com/donation/weareaaaclan";
const MERCH_LINK = "https://shopee.co.id/aaaclan";

const features = [
  {
    icon: <Gamepad2 className="w-9 h-9 text-[#e63946]" strokeWidth={2.5} />,
    title: "GAMING",
    desc: "Pro players dan streamer gaming dari berbagai title — Dota 2, CoD Mobile, hingga casual IRL.",
    accent: "border-[#e63946]",
    accentColor: "#e63946",
    kanji: "戦",
    kanjiColor: "#e63946",
    tag: "PRO LEVEL",
    modalDesc:
      "AAA Clan punya roster gaming yang serius — dari kompetitif Dota 2, CoD Mobile, hingga sesi casual IRL bareng komunitas. Tiap season ada turnamen internal, watch party, dan konten gaming eksklusif yang cuma bisa lo dapetin lewat membership.",
    modalLinks: [
      { label: "Watch VODs", url: "https://www.youtube.com/@ybrap" },
      { label: "Join Discord", url: DISCORD_LINK },
    ],
  },
  {
    icon: <Radio className="w-9 h-9 text-[#457b9d]" strokeWidth={2.5} />,
    title: "STREAMING",
    desc: "Live streaming harian di YouTube. Marapthon — maraton streaming legendaris yang tembus #1 dunia.",
    accent: "border-[#457b9d]",
    accentColor: "#457b9d",
    kanji: "夢",
    kanjiColor: "#457b9d",
    tag: "#1 WORLD",
    modalDesc:
      "Marapthon adalah event streaming maraton legendaris yang pernah tembus trending #1 di seluruh dunia. Live streaming harian di YouTube dengan konten gaming, musik, ngobrol bareng, dan banyak kejutan. Lo bisa dukung lewat YouTube Membership.",
    modalLinks: [
      { label: "Watch Live", url: "https://www.youtube.com/@ybrap" },
      { label: "YT Membership", url: MEMBER_LINK },
    ],
  },
  {
    icon: <Music className="w-9 h-9 text-[#e9c46a]" strokeWidth={2.5} />,
    title: "MUSIC",
    desc: "Dari Weird Genius hingga DNA — AAA Clan punya DNA musik elektronik yang kuat di industri.",
    accent: "border-[#e9c46a]",
    accentColor: "#e9c46a",
    kanji: "音",
    kanjiColor: "#e9c46a",
    tag: "ELECTRONIC",
    modalDesc:
      "Musik adalah bagian inti dari DNA AAA Clan. Reza Arap adalah bagian dari Weird Genius, salah satu grup EDM terbesar di Indonesia. Project musik terbaru termasuk DNA — kolaborasi yang memperkuat identitas suara AAA Clan di industri musik elektronik.",
    modalLinks: [
      { label: "Spotify", url: "https://open.spotify.com" },
      { label: "YouTube Music", url: "https://www.youtube.com/@ybrap" },
    ],
  },
  {
    icon: <Zap className="w-9 h-9 text-[#f4a261]" strokeWidth={2.5} />,
    title: "EVENTS",
    desc: "Watch party, meetup, kolaborasi brand, hingga film layar lebar. Selalu ada yang baru.",
    accent: "border-[#f4a261]",
    accentColor: "#f4a261",
    kanji: "力",
    kanjiColor: "#f4a261",
    tag: "IRL + ONLINE",
    modalDesc:
      "Dari watch party online yang seru sampai meetup IRL, kolaborasi brand besar, dan bahkan film layar lebar — AAA Clan terus bikin event yang ngumpulin komunitas. Follow @weareaaaclan biar lo ga ketinggalan info event terbaru.",
    modalLinks: [
      { label: "Follow IG", url: IG_CLAN },
      { label: "Join Discord", url: DISCORD_LINK },
    ],
  },
];

const SUPPORT_LINKS = [
  {
    icon: <Gamepad2 className="w-5 h-5 mb-0.5" strokeWidth={2.5} />,
    label: "JOIN DISCORD",
    sub: "discord.gg/rapsnonot",
    url: DISCORD_LINK,
    bg: "bg-[#5865F2]",
    hover: "hover:bg-[#4752c4]",
  },
  {
    icon: <Star className="w-5 h-5 mb-0.5" strokeWidth={2.5} />,
    label: "YT MEMBERSHIP",
    sub: "Dukung lewat YouTube",
    url: MEMBER_LINK,
    bg: "bg-[#e63946]",
    hover: "hover:bg-[#c1121f]",
  },
  {
    icon: <Coins className="w-5 h-5 mb-0.5" strokeWidth={2.5} />,
    label: "DONATE",
    sub: "cebanmatters.com",
    url: DONATE_LINK,
    bg: "bg-[#2a9d8f]",
    hover: "hover:bg-[#21867a]",
  },
  {
    icon: <ShoppingCart className="w-5 h-5 mb-0.5" strokeWidth={2.5} />,
    label: "MERCHANDISE",
    sub: "shopee.co.id/aaaclan",
    url: MERCH_LINK,
    bg: "bg-[#e9c46a]",
    hover: "hover:bg-[#d4a017]",
  },
];

const KANJI_LAYERS = [
  {
    char: "仲",
    color: "#e63946",
    opacity: 0.07,
    size: "18rem",
    top: "5%",
    left: "2%",
    speed: 0.15,
  },
  {
    char: "間",
    color: "#457b9d",
    opacity: 0.06,
    size: "22rem",
    top: "30%",
    left: "75%",
    speed: 0.25,
  },
  {
    char: "力",
    color: "#e9c46a",
    opacity: 0.08,
    size: "14rem",
    top: "60%",
    left: "15%",
    speed: 0.2,
  },
  {
    char: "夢",
    color: "#e63946",
    opacity: 0.05,
    size: "26rem",
    top: "10%",
    left: "55%",
    speed: 0.1,
  },
  {
    char: "戦",
    color: "#f4a261",
    opacity: 0.06,
    size: "16rem",
    top: "70%",
    left: "60%",
    speed: 0.3,
  },
  {
    char: "絆",
    color: "#2a9d8f",
    opacity: 0.07,
    size: "20rem",
    top: "45%",
    left: "40%",
    speed: 0.18,
  },
];

type Feature = (typeof features)[number];

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#000]/70 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-md manga-panel bg-white comic-shadow overflow-hidden"
        style={{ borderLeft: `6px solid ${feature.accentColor}` }}
      >
        <div className="h-1 flex">
          <div className="flex-1" style={{ backgroundColor: feature.accentColor }} />
          <div className="flex-1 bg-[#000]" />
          <div className="flex-1" style={{ backgroundColor: feature.accentColor, opacity: 0.4 }} />
        </div>

        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-1rem",
            fontSize: "14rem",
            fontFamily: "serif",
            fontWeight: 900,
            color: feature.kanjiColor,
            opacity: 0.06,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {feature.kanji}
        </span>

        <div className="p-7 relative z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#000]/40 hover:text-[#000] font-black text-lg transition-colors"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">{feature.icon}</span>
            <div>
              <span
                className="text-[0.55rem] font-black uppercase tracking-widest px-2 py-0.5 border inline-block mb-1"
                style={{ color: feature.accentColor, borderColor: feature.accentColor }}
              >
                {feature.tag}
              </span>
              <h3
                className="text-2xl font-black uppercase text-[#000] leading-none"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {feature.title}
              </h3>
            </div>
          </div>

          <div className="h-px bg-[#000]/10 mb-5" />

          <p className="text-[#000]/70 font-bold text-sm leading-relaxed mb-6">
            {feature.modalDesc}
          </p>

          <div className="flex gap-2">
            {feature.modalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="manga-btn flex-1 py-2.5 text-xs font-black text-center text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: feature.accentColor }}
              >
                {link.label} →
              </a>
            ))}
            <button
              onClick={onClose}
              className="manga-btn px-4 py-2.5 text-xs font-black text-[#000]/50 border border-[#000]/20 hover:border-[#000]/50 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CommunitySection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-80px" });
  const [activeModal, setActiveModal] = useState<Feature | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <section
        ref={sectionRef}
        id="community"
        className="py-24 md:py-32 px-6 sm:px-8 bg-[#fafaf8] border-b-3 border-[#000] relative overflow-hidden"
      >
        {KANJI_LAYERS.map((k, i) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [`0%`, `${k.speed * 100 * (i % 2 === 0 ? -1 : 1)}%`],
          );
          return (
            <motion.div
              key={i}
              style={{
                y,
                position: "absolute",
                top: k.top,
                left: k.left,
                fontSize: k.size,
                color: k.color,
                opacity: k.opacity,
                fontWeight: 900,
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
                zIndex: 0,
                fontFamily: "serif",
              }}
              aria-hidden="true"
            >
              {k.char}
            </motion.div>
          );
        })}

        <div ref={contentRef} className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-1 bg-[#e63946]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#000]/50">
              COMMUNITY — 仲間
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-[#000] mb-12"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            JOIN THE
            <br />
            <span className="text-[#e63946]">CLAN.</span>
          </motion.h2>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* ── Left: CTA Panel ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 manga-panel bg-[#000] comic-shadow p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 speed-lines opacity-5 pointer-events-none" />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-2rem",
                  right: "-1rem",
                  fontSize: "16rem",
                  fontFamily: "serif",
                  fontWeight: 900,
                  color: "#fff",
                  opacity: 0.04,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                仲
              </span>
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[#e63946]" />
                <div className="flex-1 bg-[#e9c46a]" />
                <div className="flex-1 bg-[#457b9d]" />
                <div className="flex-1 bg-[#f4a261]" />
              </div>

              <div className="relative z-10 mt-2">
                <h3
                  className="text-2xl sm:text-3xl font-black text-white uppercase leading-[0.9] mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  YOUR
                  <br />
                  JOURNEY
                  <br />
                  <span className="text-[#e63946]">STARTS HERE.</span>
                </h3>
                <p className="text-white/50 font-bold text-sm mb-5">
                  Creator, gamer, atau fans — semua punya tempat di AAA Clan.
                </p>

                <div className="flex gap-0 mb-5 border-t border-white/10 pt-4">
                  {[
                    { n: "10M+", l: "Total Reach" },
                    { n: "9", l: "Members" },
                    { n: "3", l: "Seasons" },
                  ].map((s, i, arr) => (
                    <div
                      key={s.l}
                      className="flex-1 pr-4"
                      style={
                        i < arr.length - 1
                          ? { borderRight: "1px solid rgba(255,255,255,0.1)", marginRight: "1rem" }
                          : {}
                      }
                    >
                      <div
                        className="text-2xl font-black text-white"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {s.n}
                      </div>
                      <div className="text-[0.65rem] font-bold text-white/40 uppercase tracking-wider">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {SUPPORT_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`manga-btn ${link.bg} ${link.hover} text-white px-3 py-2 flex flex-col gap-0.5 transition-colors`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-base">{link.icon}</span>
                        <span className="text-[0.6rem] font-black uppercase tracking-wider leading-none">
                          {link.label}
                        </span>
                        <span className="text-[0.55rem] font-bold text-white/60 leading-none truncate">
                          {link.sub}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href={IG_CLAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-btn mt-2 w-full py-3 bg-white text-[#000] text-xs font-black text-center hover:bg-[#e9c46a] transition-colors block"
                >
                  FOLLOW @WEAREAAACLAN →
                </a>
              </div>
            </motion.div>

            {/* ── Right: Feature Cards ── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  onClick={() => setActiveModal(feature)}
                  className={`manga-panel bg-white comic-shadow-sm comic-shadow-hover group border-l-4 ${feature.accent} relative overflow-hidden cursor-pointer select-none`}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "-1.5rem",
                      right: "-0.5rem",
                      fontSize: "7rem",
                      fontFamily: "serif",
                      fontWeight: 900,
                      color: feature.kanjiColor,
                      opacity: 0.07,
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {feature.kanji}
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(0,0,0,0.015) 20px, rgba(0,0,0,0.015) 21px)",
                      pointerEvents: "none",
                    }}
                  />

                  <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl group-hover:scale-110 transition-transform origin-left">
                        {feature.icon}
                      </div>
                      <span
                        className="text-[0.55rem] font-black uppercase tracking-widest px-2 py-1 border"
                        style={{
                          color: feature.accentColor,
                          borderColor: feature.accentColor,
                          opacity: 0.8,
                        }}
                      >
                        {feature.tag}
                      </span>
                    </div>

                    <h4
                      className="text-lg font-black uppercase text-[#000] mb-1.5"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-[#000]/60 font-bold text-sm leading-snug flex-1">
                      {feature.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div
                        className="h-[2px] w-8 group-hover:w-24 transition-all duration-500"
                        style={{ backgroundColor: feature.accentColor }}
                      />
                      <span
                        className="text-[0.6rem] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: feature.accentColor }}
                      >
                        SELENGKAPNYA →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeModal && <FeatureModal feature={activeModal} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </>
  );
}
