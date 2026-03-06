"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const members = [
  {
    name: "YB",
    realName: "Reza Oktovian",
    role: "Founder / Streamer / Musician / DJ",
    img: "/images/member/yb.jpg",
    ig: "@ybrap",
    yt: "https://www.youtube.com/@ybrap",
    tiktok: "https://www.tiktok.com/@ybontiktok",
    color: "bg-[#e63946]",
    slug: "reza-arap",
  },
  {
    name: "Garry",
    realName: "Garry Andriawan Ang",
    role: "DJ / Content Creator",
    img: "/images/member/garry.png",
    ig: "@grryang",
    yt: "https://www.youtube.com/@grryang",
    tiktok: "https://www.tiktok.com/@grryang_",
    color: "bg-[#457b9d]",
    slug: "garry-ang",
  },
  {
    name: "Jot",
    realName: "George Andika Tierison",
    role: "Streamer / Esports Athlete",
    img: "/images/member/jot.webp",
    ig: "@tierison",
    yt: "https://youtube.com/@Tierison",
    tiktok: "https://www.tiktok.com/@tierisonn",
    color: "bg-[#e9c46a]",
    slug: "tierison",
  },
  {
    name: "Aloy",
    realName: "Aldy Renaldi",
    role: "Content Creator / DJ / Actor",
    img: "/images/member/aloy.png",
    ig: "@mister.aloy",
    yt: "https://www.youtube.com/@mister.aloyyy",
    tiktok: "https://www.tiktok.com/@mister.aloy",
    color: "bg-[#f4a261]",
    slug: "aloy",
  },
  {
    name: "Yuka",
    realName: "Yukatheo Glen Widjaja",
    role: "Esports Pro / Content Creator",
    img: "/images/member/yuka.png",
    ig: "@yukatheo",
    yt: "https://www.youtube.com/@youktheoo",
    tiktok: "https://www.tiktok.com/@youktheo",
    color: "bg-[#e63946]",
    slug: "yukatheo",
  },
  {
    name: "Tepe",
    realName: "Teguh Prakoso",
    role: "Content Creator / Musician/ Gamer",
    img: "/images/member/tepe.png",
    ig: "@_tepe46",
    yt: "https://www.youtube.com/@TeguhPrakoso27",
    tiktok: "https://www.tiktok.com/@_tepe46",
    color: "bg-[#457b9d]",
    slug: "tepe46",
  },
  {
    name: "Vconk",
    realName: "Bravyson",
    role: "DJ / Designer",
    img: "/images/member/bravy.png",
    ig: "@bravyson.vconk",
    yt: "https://youtube.com/@Vconk",
    tiktok: "https://www.tiktok.com/@bravyson_vconk",
    color: "bg-[#e9c46a]",
    slug: "dj-bravy",
  },
  {
    name: "Niko",
    realName: "Niko Junius",
    role: "Content Creator / Gamer",
    img: "/images/member/niko.png",
    ig: "@nikojuniuss",
    yt: "https://youtube.com/@NikoJunius",
    tiktok: "https://www.tiktok.com/@nikojuniuss",
    color: "bg-[#f4a261]",
    slug: "niko-junius",
  },
  {
    name: "Ibot",
    realName: "Ade Ariyanto",
    role: "Esports VP / Streamer / Content Creator",
    img: "/images/member/ibot.png",
    ig: "@ibotttt",
    yt: "https://www.youtube.com/@ibot_13",
    tiktok: "https://www.tiktok.com/@ibot_13",
    color: "bg-[#e63946]",
    slug: "ibot",
  },
];

export default function MembersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <section id="members" className="py-24 md:py-32 px-6 sm:px-8 bg-[#fafaf8] relative z-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16 relative">
          <div className="bg-white border-3 border-[#000] px-6 py-3 comic-shadow z-10 inline-block transform rotate-[-1deg]">
            <h2
              className="text-3xl sm:text-5xl font-black uppercase text-[#000]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              THE MEMBERS — 仲間
            </h2>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#000] -z-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              onClick={() => router.push(`/members/${member.slug}`)}
              className="manga-panel bg-white group flex flex-col comic-shadow-sm comic-shadow-hover overflow-hidden h-full cursor-pointer block"
            >
              <div className="border-b-3 border-[#000] px-4 py-1.5 bg-[#000] flex justify-between items-center text-[0.65rem] font-black uppercase tracking-wider">
                <span className="text-white">No. 0{i + 1}</span>
                <span className="text-[#e9c46a]">{member.role}</span>
              </div>

              <div
                className={`aspect-[4/5] border-b-3 border-[#000] relative overflow-hidden ${member.color}`}
              >
                <div className="absolute inset-0 speed-lines opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none z-10" />
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[20%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 relative z-0"
                />
                <div className="absolute left-3 top-3 text-white vertical-text text-3xl font-black outline-text-light opacity-60 mix-blend-difference z-20 pointer-events-none">
                  {member.name.split(" ")[0].toUpperCase()}
                </div>
              </div>

              <div className="p-4 bg-white">
                <h3
                  className="text-xl sm:text-2xl font-black text-[#000] uppercase leading-none"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#000]/50 mt-1 uppercase tracking-wider">
                  {member.realName}
                </p>
                <p className="text-xs font-bold text-[#e63946] mt-0.5">IG: {member.ig}</p>

                <div className="mt-3 flex gap-2">
                  {[
                    { name: "YT", url: member.yt },
                    { name: "IG", url: `https://instagram.com/${member.ig.replace("@", "")}` },
                    { name: "TikTok", url: member.tiktok },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation(); // Mencegah klik terhubung ke card
                      }}
                      className="flex-1 bg-[#000] text-white border-2 border-[#000] py-1.5 flex items-center justify-center font-black text-[0.65rem] hover:bg-[#e63946] transition-colors uppercase"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Lihat Selengkapnya Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link
            href="/members"
            className="manga-btn px-10 py-4 bg-[#000] text-white font-black uppercase tracking-[0.2em] text-sm border-3 border-[#000] comic-shadow hover:bg-[#e63946] hover:comic-shadow-hover transition-all duration-300 inline-flex items-center gap-3 group"
          >
            LIHAT SELENGKAPNYA
            <span className="inline-block transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
