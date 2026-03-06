"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { BLOG_ARTICLES } from "../data/data-blog";

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const preview = BLOG_ARTICLES.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 md:py-32 px-6 sm:px-8 bg-white border-y-3 border-[#000] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto bg-[#000] text-white py-2 px-6 mb-12 flex justify-between items-center text-xs font-black tracking-widest uppercase">
        <span>📰 LATEST NEWS</span>
        <span className="hidden sm:block">AAA CLAN PRESS</span>
      </div>

      <div ref={ref} className="max-w-[1200px] mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-10">
          <h2
            className="text-4xl sm:text-6xl font-black text-[#000] uppercase leading-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            BLOG & <span className="text-[#e63946]">BERITA</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="hidden sm:block flex-shrink-0 ml-6"
          >
            <Link
              href="/blog"
              className="manga-btn px-5 py-2.5 bg-[#000] text-white text-xs font-black uppercase tracking-widest hover:bg-[#e63946] transition-colors whitespace-nowrap"
            >
              SEMUA BERITA →
            </Link>
          </motion.div>
        </div>

        {/* 3 article cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((article, i) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="manga-panel bg-white group flex flex-col comic-shadow-sm comic-shadow-hover relative no-underline"
            >
              {/* Category badge */}
              <div className="absolute -top-2.5 -right-2.5 bg-white border-2 border-[#000] px-2 py-0.5 text-[0.6rem] font-black z-20 uppercase shadow-[2px_2px_0_0_#000] transform rotate-3">
                {article.category}
              </div>

              {/* Thumbnail */}
              <div className="aspect-[16/8] border-b-3 border-[#000] relative overflow-hidden bg-[#000]">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#000]/80 text-white px-4 py-1.5 flex justify-between items-center text-[0.6rem] font-black uppercase tracking-wider z-10">
                  <span>{article.date}</span>
                  <span className="text-[#e9c46a]">{article.source}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                <h3
                  className="text-lg sm:text-xl font-black text-[#000] uppercase leading-tight mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {article.title}
                </h3>
                <p className="text-[#000]/70 font-bold text-sm leading-snug border-l-3 border-[#000]/20 pl-3 flex-grow">
                  {article.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-black text-[#e63946] uppercase tracking-wider group-hover:gap-3 transition-all">
                  <span>BACA SELENGKAPNYA</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-3 border-[#000] pt-8"
        >
          <p className="text-sm font-bold text-[#000]/50 uppercase tracking-widest">
            Menampilkan 3 dari{" "}
            <span className="text-[#000] font-black">{BLOG_ARTICLES.length} artikel</span>
          </p>
          <Link
            href="/blog"
            className="manga-btn px-8 py-3 bg-[#e63946] text-white text-sm font-black uppercase tracking-widest hover:bg-[#000] transition-colors"
          >
            LIHAT SEMUA BERITA →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
