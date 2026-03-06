import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aaaclan.com"),
  title: {
    default: "AAA Clan — Where Creators Unite",
    template: "%s | AAA Clan",
  },
  description:
    "AAA Clan is a collective of streamers, gamers, and creators who collaborate, stream, and entertain millions through live content, gaming culture, and digital creativity. Led by Reza Arap.",
  keywords: [
    "AAA Clan",
    "Reza Arap",
    "Streamer Indonesia",
    "Gaming",
    "Creator House",
    "Live Streaming",
    "Content Creator",
    "Indonesia",
    "Marapthon",
  ],
  authors: [{ name: "AAA Clan" }],
  creator: "AAA Clan",
  publisher: "AAA Clan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AAA Clan — Where Creators Unite",
    description:
      "A collective of streamers, gamers, and creators collaborating through live content, gaming culture, and digital creativity.",
    url: "/",
    siteName: "AAA Clan",
    images: [
      {
        url: "/images/herosection/aaaclan.jpeg",
        width: 1200,
        height: 630,
        alt: "AAA Clan",
      },
      {
        url: "/images/herosection/marapthon-thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "AAA Clan Marapthon",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAA Clan — Where Creators Unite",
    description:
      "A collective of streamers, gamers, and creators collaborating through live content.",
    creator: "@ybrap",
    images: ["/images/herosection/aaaclan.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
