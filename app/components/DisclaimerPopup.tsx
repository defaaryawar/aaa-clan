"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DisclaimerPopup() {
  const [hasChecked, setHasChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ONE_HOUR = 60 * 60 * 1000;
    const lastShownTimeStr = localStorage.getItem("disclaimerLastShown");

    if (!lastShownTimeStr) {
      setIsVisible(true);
      localStorage.setItem("disclaimerLastShown", Date.now().toString());
    } else {
      const lastShownTime = parseInt(lastShownTimeStr, 10);
      if (Date.now() - lastShownTime >= ONE_HOUR) {
        setIsVisible(true);
        localStorage.setItem("disclaimerLastShown", Date.now().toString());
      }
    }
    setHasChecked(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#000]/70">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full sm:max-w-sm bg-[#fafaf8] border-t-4 sm:border-4 border-[#000] overflow-hidden font-['Outfit',sans-serif]"
            style={{ boxShadow: "0 0 0 0 #000, 6px 6px 0 #000" }}
          >
            {/* Red top accent bar */}
            <div className="bg-[#e63946] border-b-4 border-[#000] px-5 py-3 flex items-center justify-between">
              <span className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white">
                📌 Unofficial Website
              </span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:bg-white/20 p-1 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 pt-6 pb-5">
              {/* Watermark number */}
              <span
                className="block font-black text-[#000]/[0.04] leading-none select-none mb-[-1.5rem]"
                style={{ fontSize: "6rem" }}
              >
                !
              </span>

              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#000] leading-tight mb-3">
                Izin ya,
                <br />
                <span className="text-[#e63946]">Bang YB & AAA Member 🙏</span>
              </h2>

              <p className="text-sm font-bold text-[#000]/70 leading-relaxed border-l-4 border-[#e63946] pl-4">
                Ini cuma iseng aja bang, semoga suka ya hehe. Web ini{" "}
                <span className="text-[#000] font-black">unofficial</span> — bukan bagian dari resmi
                Clan, murni dibuat fans buat latihan. ✌️
              </p>
            </div>

            {/* Footer */}
            <div className="border-t-4 border-[#000] bg-[#000] px-6 py-4 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <a
                  href="https://instagram.com/defaaryawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] font-black uppercase tracking-wider text-white/60 hover:text-[#e63946] transition-colors"
                >
                  @defaaryawar
                </a>
                <a
                  href="https://defanolabs.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] font-black uppercase tracking-wider text-white/60 hover:text-[#e63946] transition-colors"
                >
                  defanolabs.site ↗
                </a>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="bg-white text-[#000] border-2 border-white px-5 py-2 text-[0.65rem] font-black uppercase tracking-widest hover:bg-[#e63946] hover:text-white hover:border-[#e63946] transition-colors"
              >
                MENGERTI
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
