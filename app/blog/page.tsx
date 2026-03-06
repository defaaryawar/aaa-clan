"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_ARTICLES } from "../data/data-blog";

const CATEGORIES = ["SEMUA", ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category)))];

import { useState } from "react";

export default function BlogPage() {
  const [active, setActive] = useState("SEMUA");

  const filtered =
    active === "SEMUA" ? BLOG_ARTICLES : BLOG_ARTICLES.filter((a) => a.category === active);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Top bar */}
      <div className="bg-[#000] text-white py-2 px-6 flex justify-between items-center text-xs font-black tracking-widest uppercase">
        <Link href="/" className="hover:text-[#e63946] transition-colors">
          ← BACK TO HOME
        </Link>
        <span className="hidden sm:block">AAA CLAN PRESS</span>
        <span>📰 BLOG</span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#e63946]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#000]/50">
              AAA CLAN — PRESS ROOM
            </span>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase leading-none text-[#000] mb-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            BLOG & <span className="text-[#e63946]">BERITA</span>
          </h1>
          <p className="text-[#000]/50 font-bold text-sm">
            {BLOG_ARTICLES.length} artikel · Semua berita seputar AAA Clan
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`manga-btn px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-widest transition-colors border-2 border-[#000]
                ${
                  active === cat
                    ? "bg-[#000] text-white"
                    : "bg-white text-[#000] hover:bg-[#e63946] hover:text-white hover:border-[#e63946]"
                }`}
            >
              {cat}
              {cat !== "SEMUA" && (
                <span className="ml-1.5 opacity-50">
                  ({BLOG_ARTICLES.filter((a) => a.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <motion.a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
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

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📭</p>
            <p className="font-black uppercase text-[#000]/30 tracking-widest">
              Belum ada artikel di kategori ini
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
