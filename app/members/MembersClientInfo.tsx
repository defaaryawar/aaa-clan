"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Member, getMemberImage } from "../data/data-biodata";

interface Props {
  members: Member[];
}

const KANJI = ["戦", "夢", "力", "絆", "仲", "音", "炎", "風", "雷", "龍"];

const ACCENTS = [
  { hex: "#e63946", cls: "bg-[#e63946]", text: "text-[#e63946]", border: "border-[#e63946]" },
  { hex: "#457b9d", cls: "bg-[#457b9d]", text: "text-[#457b9d]", border: "border-[#457b9d]" },
  { hex: "#f4a261", cls: "bg-[#f4a261]", text: "text-[#f4a261]", border: "border-[#f4a261]" },
  { hex: "#2a9d8f", cls: "bg-[#2a9d8f]", text: "text-[#2a9d8f]", border: "border-[#2a9d8f]" },
  { hex: "#e9c46a", cls: "bg-[#e9c46a]", text: "text-[#e9c46a]", border: "border-[#e9c46a]" },
];

export default function MembersClientInfo({ members }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Global background marquee — two rows in opposite directions
  const marqueeL = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const marqueeR = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#fafaf8]">
      {/* ── Fixed global background marquee ── */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed inset-0 z-0 pointer-events-none select-none flex flex-col justify-center gap-6 overflow-hidden"
        aria-hidden="true"
      >
        {/* Row 1 — left */}
        <motion.div style={{ x: marqueeL }} className="whitespace-nowrap leading-none">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[14vw] font-black uppercase tracking-tighter text-[#000]/[0.03]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              AAA CLAN MEMBERS&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
        {/* Row 2 — right */}
        <motion.div style={{ x: marqueeR }} className="whitespace-nowrap leading-none">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[14vw] font-black uppercase tracking-tighter text-[#e63946]/[0.04]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              仲間 · THE ROSTER · 仲間&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
        {/* Row 3 — left again */}
        <motion.div style={{ x: marqueeL }} className="whitespace-nowrap leading-none">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[14vw] font-black uppercase tracking-tighter text-[#000]/[0.02]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              AAA CLAN MEMBERS&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Hero header ── */}
      <div className="relative z-10 pt-24 md:pb-36 pb-16 px-6 sm:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-[#e63946]" />
            <span className="text-[0.65rem] font-black tracking-[0.35em] uppercase text-[#000]/40">
              AAA CLAN — THE ROSTER
            </span>
          </div>

          {/* Big heading */}
          <h1
            className="text-[clamp(3.5rem,11vw,9rem)] font-black uppercase leading-[0.82] text-[#000] tracking-tighter mb-12"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            MEET
            <br />
            THE <span className="text-[#e63946]">CLAN.</span>
          </h1>

          {/* Stats strip */}
          <div className="flex gap-10 border-t-[3px] border-[#000] pt-8 w-fit">
            {[
              { n: members.length, l: "Members" },
              { n: "3", l: "Seasons" },
              { n: "10M+", l: "Reach" },
              { n: "#1", l: "YouTube" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-[2rem] font-black text-[#000] leading-none"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {s.n}
                </div>
                <div className="text-[0.58rem] font-bold text-[#000]/40 uppercase tracking-widest mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Cards ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 pb-48">
        {members.map((member, i) => (
          <ParallaxMemberCard
            key={member.id}
            member={member}
            isEven={i % 2 === 0}
            index={i}
            total={members.length}
            accent={ACCENTS[i % ACCENTS.length]}
            kanji={KANJI[i % KANJI.length]}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Individual card — 6 independent parallax layers            */
/* ─────────────────────────────────────────────────────────── */
function ParallaxMemberCard({
  member,
  isEven,
  index,
  total,
  accent,
  kanji,
}: {
  member: Member;
  isEven: boolean;
  index: number;
  total: number;
  accent: (typeof ACCENTS)[number];
  kanji: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 6 layers — each at a different speed
  // Layer 1: photo — slow drift up (feels like it floats behind)
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]), {
    stiffness: 60,
    damping: 25,
  });
  // Layer 2: text block — slight counter-drift
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]), {
    stiffness: 50,
    damping: 22,
  });
  // Layer 3: big kanji watermark — fast drift
  const kanjiY = useSpring(useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]), {
    stiffness: 35,
    damping: 18,
  });
  // Layer 4: accent color block — fastest, opposite direction
  const blockY = useSpring(useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]), {
    stiffness: 30,
    damping: 16,
  });
  // Layer 5: small decorative square
  const squareY = useSpring(useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]), {
    stiffness: 25,
    damping: 14,
  });
  // Layer 6: index number
  const numY = useSpring(useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]), {
    stiffness: 45,
    damping: 20,
  });

  // Fade + scale as card enters/leaves viewport
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.93, 1, 1, 0.96]);

  const imageUrl = `/images/member/${getMemberImage(member.slug)}`;

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale: cardScale }}
      className={`
        relative w-full min-h-[90vh]
        flex flex-col
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
        items-stretch
        border-b-[3px] border-[#000]
        overflow-hidden
        mb-0
      `}
    >
      {/* TOP accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] ${accent.cls} z-40`} />

      {/* ── Layer 3: Kanji watermark ── */}
      <motion.div
        style={{ y: kanjiY }}
        className={`
          absolute z-0 pointer-events-none select-none
          ${isEven ? "left-[35%] md:left-[45%]" : "right-[35%] md:right-[45%]"}
          -top-10
        `}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: "clamp(14rem, 30vw, 36rem)",
            color: "#000",
            opacity: 0.025,
            lineHeight: 1,
          }}
        >
          {kanji}
        </span>
      </motion.div>

      {/* ── Layer 4: Big accent color block ── */}
      <motion.div
        style={{ y: blockY }}
        className={`
          absolute z-0 pointer-events-none
          ${isEven ? "-left-8 md:-left-12" : "-right-8 md:-right-12"}
          ${accent.cls} opacity-[0.12]
          w-28 md:w-44 h-[70%]
          top-[15%]
        `}
      />

      {/* ── Layer 5: Small decorative square ── */}
      <motion.div
        style={{ y: squareY }}
        className={`
          absolute z-0 pointer-events-none bg-[#000] opacity-[0.05]
          ${isEven ? "right-10 md:right-16" : "left-10 md:left-16"}
          bottom-20 w-14 h-28
        `}
      />

      {/* ── Layer 6: Index number ── */}
      <motion.div
        style={{ y: numY }}
        className={`
          absolute z-0 pointer-events-none select-none
          ${isEven ? "right-6 md:right-10" : "left-6 md:left-10"}
          top-1/2 -translate-y-1/2
        `}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(8rem, 22vw, 26rem)",
            color: accent.hex,
            opacity: 0.06,
            lineHeight: 1,
            fontWeight: 900,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ── Vertical counter strip ── */}
      <div
        className={`
          absolute hidden md:flex flex-col items-center justify-center gap-1 z-20
          ${isEven ? "left-3" : "right-3"}
          top-1/2 -translate-y-1/2
        `}
      >
        <span
          className="text-[0.5rem] font-black text-[#000]/20 uppercase tracking-[0.4em]"
          style={{ writingMode: "vertical-rl" }}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* ── Layer 1: IMAGE ── */}
      <div className="relative w-full md:w-1/2 overflow-hidden bg-[#000] min-h-[55vw] md:min-h-0">
        <Link href={`/members/${member.slug}`} className="absolute inset-0 z-10 block">
          {/* Parallax photo */}
          <motion.img
            style={{ y: imageY }}
            src={imageUrl}
            alt={member.namaLengkap}
            className="absolute inset-0 w-full h-[120%] object-cover object-top will-change-transform"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://placehold.co/600x800/000000/ffffff?text=${encodeURIComponent(member.namaPanggung)}`;
            }}
          />

          {/* Scanline texture */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px)",
            }}
          />

          {/* Bottom gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 h-2/5"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
          />

          {/* Hover tint */}
          <div className="absolute inset-0 z-20 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
        </Link>

        {/* Full name subtle overlay */}
        <div
          className={`absolute bottom-5 ${isEven ? "left-5" : "right-5"} z-30 pointer-events-none`}
        >
          <span
            className="text-white/25 text-[0.55rem] font-black uppercase tracking-[0.35em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {member.namaLengkap}
          </span>
        </div>
      </div>

      {/* ── Layer 2: TEXT ── */}
      <motion.div
        style={{ y: textY }}
        className={`
          relative w-full md:w-1/2 z-10
          flex flex-col justify-center
          px-8 md:px-14 lg:px-20
          py-16 md:py-20
          ${isEven ? "items-start text-left" : "items-end text-right"}
        `}
      >
        {/* Group tag */}
        <span
          className={`text-[0.65rem] font-black tracking-[0.3em] uppercase ${accent.text} mb-3`}
        >
          {member.grup ?? "AAA CLAN"}
        </span>

        {/* Name */}
        <h3
          className="text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase text-[#000] leading-[0.83] mb-5 tracking-tighter"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {member.namaPanggung}
        </h3>

        {/* Accent bar */}
        <div className={`w-16 h-[3px] ${accent.cls} mb-6`} />

        {/* Role tags */}
        <div className={`flex flex-wrap gap-2 mb-7 ${isEven ? "justify-start" : "justify-end"}`}>
          {member.pekerjaan.map((role) => (
            <span
              key={role}
              className={`px-3 py-1 text-[0.58rem] font-black uppercase tracking-widest border-2 ${accent.border} ${accent.text}`}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p
          className={`
            text-sm font-bold text-[#000]/55 max-w-[28rem] leading-relaxed mb-10
            ${
              isEven
                ? "border-l-[3px] border-[#000]/15 pl-4"
                : "border-r-[3px] border-[#000]/15 pr-4"
            }
          `}
        >
          {member.bio.substring(0, 190)}…
        </p>

        {/* CTA */}
        <Link
          href={`/members/${member.slug}`}
          className={`
            manga-btn inline-flex items-center gap-3
            px-7 py-3.5
            border-[3px] border-[#000] bg-transparent
            text-[#000] text-[0.7rem] font-black uppercase tracking-widest
            transition-all duration-200
            hover:text-white hover:border-transparent hover:bg-[#000]
            ${accent.cls.replace("bg-", "hover:bg-")}
          `}
        >
          VIEW PROFILE
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </motion.section>
  );
}
