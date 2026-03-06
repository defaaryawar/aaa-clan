"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  { name: "Members", href: "/members" },
  { name: "Blog & Berita", href: "/blog" },
  { name: "Community", href: "/#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollUpAccumulator = useRef(0);

  useEffect(() => {
    const SHOW_THRESHOLD = 60; // need 60px of upward scroll to reveal
    const HIDE_THRESHOLD = 10; // hide quickly when scrolling down
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 50);

      if (delta > HIDE_THRESHOLD && currentY > 100) {
        // Scrolling down → hide & reset accumulator
        setHidden(true);
        scrollUpAccumulator.current = 0;
      } else if (delta < 0) {
        // Scrolling up → accumulate distance before showing
        scrollUpAccumulator.current += Math.abs(delta);
        if (scrollUpAccumulator.current > SHOW_THRESHOLD || currentY <= 50) {
          setHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#fafaf8] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled ? "border-b-3 border-[#000] shadow-[0_4px_0_0_#000]" : "border-b-0"
      }`}
      style={{
        transform: hidden && !mobileOpen ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <span
              className="text-2xl md:text-3xl font-black text-[#000] uppercase tracking-tighter"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              AAA CLAN
            </span>
            <span className="text-[0.55rem] font-bold tracking-[0.15em] text-[#e63946] uppercase hidden sm:block">
              アアア・クラン
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold text-[#000] hover:text-[#e63946] uppercase tracking-wide group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#e63946] transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#community"
              className="manga-btn px-5 py-2 bg-[#e63946] text-white text-sm hover:bg-[#000]"
            >
              Join Clan
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden manga-btn px-3 py-1.5 bg-white text-[#000] text-sm"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full h-[100dvh] bg-[#fafaf8] md:hidden z-40 border-t-3 border-[#000] overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-black text-[#000] uppercase border-b-2 border-[#000]/20 pb-3 hover:text-[#e63946] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#community"
                onClick={() => setMobileOpen(false)}
                className="manga-btn mt-4 text-center py-4 bg-[#e63946] text-white text-xl"
              >
                JOIN THE CLAN
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
