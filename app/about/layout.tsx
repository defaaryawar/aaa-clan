import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "AAA Clan adalah komunitas kreator konten, streamer, DJ, dan mantan atlet esports asal Indonesia yang dipimpin oleh Reza Arap. Bukan Konten. Ini Hidup.",
  openGraph: {
    title: "Tentang Kami | AAA CLAN",
    description:
      "AAA Clan adalah komunitas kreator konten, streamer, DJ, dan mantan atlet esports asal Indonesia yang dipimpin oleh Reza Arap.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
