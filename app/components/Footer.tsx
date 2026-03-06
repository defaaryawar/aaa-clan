export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000] text-white overflow-hidden relative">
      <div className="flex h-2">
        <div className="flex-1 bg-[#e63946]" />
        <div className="flex-1 bg-[#457b9d]" />
        <div className="flex-1 bg-[#e9c46a]" />
        <div className="flex-1 bg-[#f4a261]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <a href="#home" className="inline-block mb-6">
              <span
                className="text-3xl sm:text-4xl font-black tracking-tighter text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                AAA <span className="text-[#e63946]">CLAN</span>
              </span>
            </a>
            <p className="text-white/50 font-bold text-sm leading-relaxed max-w-sm mb-6">
              The premier collective of streamers, gamers, and creators shaping the future of
              entertainment in Indonesia and globally.
            </p>
            <a
              href="https://www.instagram.com/weareaaaclan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e63946] text-sm font-black uppercase tracking-wider hover:text-white transition-colors"
            >
              @weareaaaclan
            </a>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-[#e63946] text-xs font-black uppercase tracking-wider pb-2 border-b border-white/10 mb-1">
                Navigate
              </h4>
              {[
                { n: "Home", h: "/#home" },
                { n: "About", h: "/#about" },
                { n: "Members", h: "/members" },
                { n: "Episodes", h: "/#content" },
                { n: "Community", h: "/#community" },
              ].map((l) => (
                <a
                  key={l.n}
                  href={l.h}
                  className="text-white/50 hover:text-white text-sm font-bold transition-colors"
                >
                  {l.n}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#457b9d] text-xs font-black uppercase tracking-wider pb-2 border-b border-white/10 mb-1">
                Social
              </h4>
              {[
                { n: "Instagram", h: "https://www.instagram.com/weareaaaclan/" },
                { n: "TikTok", h: "https://www.tiktok.com/@weareaaaclan_" },
                { n: "YouTube (YB)", h: "https://www.youtube.com/@YBRAP" },
              ].map((s) => (
                <a
                  key={s.n}
                  href={s.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm font-bold transition-colors"
                >
                  {s.n}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#e9c46a] text-xs font-black uppercase tracking-wider pb-2 border-b border-white/10 mb-1">
                Contact
              </h4>
              <div>
                <span className="text-white/30 text-[0.65rem] font-black uppercase tracking-wider block mb-0.5">
                  Marapthon Sponsorship
                </span>
                <a
                  href="https://wa.me/6281366811168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm font-bold transition-colors"
                >
                  +62 813-6681-1168
                </a>
              </div>
              <div>
                <span className="text-white/30 text-[0.65rem] font-black uppercase tracking-wider block mb-0.5">
                  Brands Endorsement
                </span>
                <a
                  href="https://wa.me/628111992205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm font-bold transition-colors"
                >
                  +62 811-1992-205
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/30 text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} AAA Clan. All rights reserved.
          </span>
          <div className="flex items-center gap-3 text-sm font-black">
            <span className="text-[#e63946]">つづく</span>
            <span className="text-white/50 uppercase tracking-wider text-xs">
              To Be Continued...
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
