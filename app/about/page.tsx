"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const timeline = [
  {
    year: "2013",
    label: "Awal Mula",
    desc: 'Reza Arap Oktovian mulai berkarier sebagai YouTuber dengan konten gaming. Ia membangun basis fans "Rapstronaut" dan menjadi salah satu kreator digital paling berpengaruh di Indonesia.',
  },
  {
    year: "2018",
    label: "Hiatus & Kembali",
    desc: "Reza memutuskan menutup channel YouTube lamanya yang telah mencapai 2 juta subscriber, menyerahkannya untuk yayasan kanker anak. Comeback dengan channel baru dan visi lebih matang.",
  },
  {
    year: "2024",
    label: "Lahirnya AAA Clan",
    desc: "Dari obrolan santai di parkiran restoran, Tierison (Jot) mengusulkan konsep live streaming marathon. Reza, Jot, Yuka, dan Garry menjadi inti awal AAA Clan.",
  },
  {
    year: "Des 2024",
    label: "MARAPTHON S1",
    desc: "34 hari nonstop. 32 juta views, 4,8 juta jam tonton, dan 47.000 peak concurrent viewers.",
  },
  {
    year: "Jan–Mar 2025",
    label: "MARAPTHON S2",
    desc: '"Road to South Blue" — 69 hari, 9 anggota penuh. Aloy, Niko, Bravy, Ibot, dan Tepe bergabung.',
  },
  {
    year: "Feb 2026",
    label: "MARAPTHON S3",
    desc: "The Last Tale — 100 hari. Hanya 6 hari tayang langsung jadi #1 YouTube Global, melampaui IShowSpeed dan Kai Cenat.",
  },
];

const stats = [
  { value: "9", label: "Member" },
  { value: "34", label: "Hari S1" },
  { value: "69", label: "Hari S2" },
  { value: "100", label: "Hari S3" },
  { value: "47K", label: "Peak Viewers" },
  { value: "#1", label: "YouTube Global" },
];

const members = [
  {
    name: "Reza Arap",
    alias: "YB / Kepala Suku",
    role: "Founder · Streamer · Weird Genius",
    ig: "ybrap",
    color: "#e63946",
  },
  {
    name: "Tierison",
    alias: "King Jot",
    role: "Inisiator Marapthon · Mantan Pro CoD Mobile",
    ig: "tierisonn",
    color: "#457b9d",
  },
  {
    name: "Garry Ang",
    alias: "Garry",
    role: "DJ · Kreator · Marathon Runner",
    ig: "grryang_",
    color: "#2a9d8f",
  },
  {
    name: "Yuka Theo",
    alias: "Yuka",
    role: "Mantan Pro Dota 2 · Streamer",
    ig: "youktheo",
    color: "#e9c46a",
  },
  {
    name: "King Aloy",
    alias: "Mister Aloy",
    role: "DJ · Kreator · Aktor",
    ig: "mister.aloy",
    color: "#e63946",
  },
  {
    name: "Tepe46",
    alias: "Tepe",
    role: "Veteran Streamer sejak 2007 · YouTuber Gaming",
    ig: "tepe46",
    color: "#457b9d",
  },
  {
    name: "Niko Junius",
    alias: "Niko",
    role: "YouTuber sejak 2015 · Dark Comedy Creator",
    ig: "nikojuniuss",
    color: "#2a9d8f",
  },
  {
    name: "DJ Bravy",
    alias: "Vconk",
    role: "DJ · Fotografer · Desainer Grafis",
    ig: "bravyson.vconk",
    color: "#000",
  },
  {
    name: "Ibot",
    alias: "Ibot13",
    role: "Mantan Pro Dota 2 · IRL Streamer",
    ig: "ibot_13",
    color: "#e9c46a",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), {
    stiffness: 200,
    damping: 40,
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="bg-[#fafaf8] min-h-screen font-['Outfit',sans-serif]">
      {/* ── Nav ── */}
      <div className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 md:p-8 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto manga-btn px-4 sm:px-6 py-2 bg-white text-[#000] text-xs font-black uppercase tracking-widest hover:bg-[#e63946] hover:text-white transition-colors inline-block border-2 border-[#000]"
        >
          ← Home
        </Link>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-[#000] flex items-end">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src="/images/aboutsection/about-section.png"
            alt="AAA Clan"
            style={{
              position: "absolute",
              inset: "-15% 0",
              width: "100%",
              height: "130%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-[#000]/55" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #e63946 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 55%, rgba(230,57,70,0.12) 55%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-30 max-w-[1200px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 md:pb-24 w-full"
        >
          <p
            className="text-[#e63946] text-[0.65rem] sm:text-xs font-black tracking-[0.25em] uppercase mb-3"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            Komunitas Kreator & Streamer Indonesia
          </p>
          <h1
            className="font-black uppercase text-white leading-[0.82] mb-5 sm:mb-8"
            style={{
              fontSize: "clamp(4.5rem, 18vw, 12rem)",
              textShadow: "4px 4px 0 rgba(230,57,70,0.5), 0 2px 30px rgba(0,0,0,0.9)",
            }}
          >
            AAA
            <br />
            CLAN
          </h1>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="hidden sm:block w-16 h-1 bg-[#e63946]" />
            <p
              className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
            >
              Triple A · Est. 2024
            </p>
            {/* Mobile-only quick stats pills */}
            <div className="flex sm:hidden gap-2">
              {["9 Members", "#1 Global", "3 Seasons"].map((s) => (
                <span
                  key={s}
                  className="text-[0.6rem] font-black uppercase tracking-wider bg-white/15 text-white px-2 py-1 border border-white/30"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
          style={{
            height: "22%",
            background:
              "linear-gradient(to top, #fafaf8 0%, rgba(250,250,248,0.85) 30%, rgba(250,250,248,0.40) 60%, rgba(250,250,248,0.08) 85%, transparent 100%)",
          }}
        />
      </section>

      {/* ── Intro Block ── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 sm:py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="border-l-4 border-[#e63946] pl-5 sm:pl-6">
              <span className="text-[#e63946] text-[0.65rem] sm:text-xs font-black tracking-[0.25em] uppercase block mb-2">
                Tentang Kami
              </span>
              <h2
                className="font-black uppercase text-[#000] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
              >
                Bukan
                <br />
                Konten.
                <br />
                Ini Hidup.
              </h2>
            </div>
            {/* Mobile-only accent block */}
            <div
              className="lg:hidden mt-6 bg-[#e63946] border-4 border-[#000] p-4"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              <p className="text-white font-black text-xs uppercase tracking-wider leading-relaxed">
                "Antek-Antek Arap" —<br />9 kreator, 1 tujuan,
                <br />
                tanpa naskah.
              </p>
            </div>
          </div>

          <div
            className="lg:w-2/3 space-y-5 text-[#000]/75 font-bold leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
          >
            <p>
              AAA Clan adalah komunitas kreator konten, streamer, DJ, dan mantan atlet esports asal
              Indonesia yang dipimpin oleh Reza Arap Oktovian — atau yang akrab disebut fans sebagai
              kumpulan <span className="text-[#e63946]">"Antek-Antek Arap"</span>. Nama "AAA" atau
              "Triple A" sendiri berasal dari voting komunitas penonton.
            </p>
            <p>
              Berbeda dari grup konten lainnya, AAA Clan lahir bukan dari perencanaan bisnis,
              melainkan dari sebuah percakapan spontan di parkiran restoran. Tierison (Jot)
              mengusulkan konsep live streaming marathon tanpa naskah — terinspirasi dari format IRL
              streaming IShowSpeed dan kebersamaan ala Sidemen. Dari situ lahirlah{" "}
              <span className="text-[#e63946]">MARAPTHON</span>.
            </p>
            <p>
              Daya tarik utama mereka bukan aksi dramatis atau konten tersusun rapi, melainkan
              interaksi nyata antarteman yang spontan, jujur, dan sering kali absurd — "tongkrongan
              digital" yang berhasil merebut hati generasi Z Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#000] py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center py-5 sm:py-8 border-r border-white/10 last:border-r-0 border-b sm:border-b-0 border-white/10"
              >
                <div
                  className="font-black text-[#e63946] leading-none mb-1"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 3.5rem)" }}
                >
                  {s.value}
                </div>
                <div className="text-white/40 text-[0.55rem] sm:text-[0.65rem] font-black uppercase tracking-[0.15em]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-14 sm:py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <span className="text-[#e63946] text-[0.65rem] sm:text-xs font-black tracking-[0.25em] uppercase block mb-2">
              Perjalanan
            </span>
            <h2
              className="font-black uppercase text-[#000] leading-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Sejarah
            </h2>
          </div>
        </div>

        {/* Mobile: horizontal scroll cards */}
        <div className="sm:hidden px-5">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[78vw] snap-start bg-white border-4 border-[#000] p-5"
                style={{ boxShadow: "4px 4px 0 #000" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-black text-[#e63946]" style={{ fontSize: "1.6rem" }}>
                    {item.year}
                  </span>
                  <span className="text-[0.55rem] font-black bg-[#000] text-white px-2 py-1 uppercase tracking-wider">
                    0{i + 1}
                  </span>
                </div>
                <span className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#000]/40 block mb-2">
                  {item.label}
                </span>
                <p className="text-sm font-bold text-[#000]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-4" />
          </div>
          <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#000]/30 mt-2">
            ← geser untuk lihat semua →
          </p>
        </div>

        {/* Desktop: alternating timeline */}
        <div className="hidden sm:block max-w-[1200px] mx-auto px-8">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#000]/10 -translate-x-1/2" />
            <div className="space-y-0">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className={`relative flex gap-8 items-start ${isEven ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-[calc(50%-2rem)] pb-12 ${isEven ? "text-right" : "text-left"}`}
                    >
                      <div
                        className="bg-white border-4 border-[#000] p-6 sm:p-8 inline-block w-full"
                        style={{ boxShadow: "4px 4px 0 #000" }}
                      >
                        <span
                          className="font-black text-[#e63946] block mb-1"
                          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                        >
                          {item.year}
                        </span>
                        <span className="text-xs font-black tracking-[0.2em] uppercase text-[#000]/40 block mb-3">
                          {item.label}
                        </span>
                        <p className="text-sm sm:text-base font-bold text-[#000]/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 bg-[#e63946] border-4 border-[#000] rounded-full z-10" />
                    <div className="w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Members ── */}
      <section className="bg-[#f0ede8] py-14 sm:py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <span className="text-[#e63946] text-[0.65rem] sm:text-xs font-black tracking-[0.25em] uppercase block mb-2">
              The Crew
            </span>
            <h2
              className="font-black uppercase text-[#000] leading-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              9 Member
            </h2>
          </div>

          {/* Mobile: compact list rows with color badge */}
          <div className="sm:hidden space-y-3">
            {members.map((m, i) => (
              <motion.a
                key={m.name}
                href={`https://instagram.com/${m.ig}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white border-2 border-[#000] p-4 w-full active:scale-[0.98] transition-transform"
                style={{ boxShadow: "3px 3px 0 #000" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-black text-white text-sm border-2 border-[#000]"
                  style={{ backgroundColor: m.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-black uppercase text-[#000] text-sm leading-tight">
                      {m.name}
                    </span>
                    <span className="text-[0.6rem] font-black uppercase tracking-wider text-[#e63946]">
                      {m.alias}
                    </span>
                  </div>
                  <p className="text-[0.65rem] font-bold text-[#000]/50 leading-snug truncate mt-0.5">
                    {m.role}
                  </p>
                </div>
                <span className="flex-shrink-0 text-[0.65rem] font-black text-[#000]/30">↗</span>
              </motion.a>
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {members.map((m, i) => (
              <motion.a
                key={m.name}
                href={`https://instagram.com/${m.ig}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "6px 10px 0 #000" }}
                className="bg-white border-4 border-[#000] p-6 flex flex-col gap-3 cursor-pointer group transition-all"
                style={{ boxShadow: "4px 4px 0 #000" }}
              >
                <span
                  className="font-black text-[#000]/[0.06] leading-none select-none"
                  style={{ fontSize: "3.5rem", lineHeight: 1, marginBottom: "-1rem" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-[#000] leading-tight">
                    {m.name}
                  </h3>
                  <span className="text-[#e63946] text-xs font-black tracking-[0.15em] uppercase">
                    {m.alias}
                  </span>
                </div>
                <p className="text-sm font-bold text-[#000]/60 leading-snug">{m.role}</p>
                <div className="mt-auto pt-3 border-t-2 border-[#000]/10">
                  <span className="text-[0.65rem] font-black tracking-widest text-[#000]/30 uppercase group-hover:text-[#e63946] transition-colors">
                    @{m.ig} ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14 sm:py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#e63946] border-4 border-[#000] p-8 sm:p-12 md:p-16 relative overflow-hidden"
          style={{ boxShadow: "8px 8px 0 #000" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <div>
              <span className="text-white/60 text-[0.65rem] sm:text-xs font-black tracking-[0.3em] uppercase block mb-2">
                Season 3 · The Last Tale
              </span>
              <h3
                className="font-black uppercase text-white leading-tight"
                style={{ fontSize: "clamp(1.8rem, 6vw, 4rem)" }}
              >
                Saksikan
                <br />
                MARAPTHON
              </h3>
              <p className="text-white/80 font-bold mt-3 max-w-md leading-relaxed text-sm sm:text-base">
                Live streaming terpanjang Indonesia. 100 hari nonstop. 9 member. #1 YouTube Global.
              </p>
            </div>
            <a
              href="https://youtube.com/@ybrap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-[#e63946] border-4 border-[#000] px-6 sm:px-8 py-3 sm:py-4 font-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#000] hover:text-white transition-colors w-full sm:w-auto text-center"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Tonton di YouTube ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-4 border-[#000] py-8 sm:py-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <span className="font-black uppercase text-[#000] tracking-widest text-base sm:text-lg">
            AAA CLAN
          </span>
          <span className="text-[#000]/40 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest">
            Triple A · Indonesia · Est. 2024
          </span>
          <a
            href="https://instagram.com/weareaaaclan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] sm:text-xs font-black uppercase tracking-widest text-[#000] hover:text-[#e63946] transition-colors"
          >
            @weareaaaclan ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
