import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Berita",
  description:
    "Semua berita, update, dan artikel seputar AAA Clan — dari MARAPTHON hingga kehidupan para member. Press room resmi AAA Clan.",
  openGraph: {
    title: "Blog & Berita | AAA CLAN",
    description:
      "Semua berita, update, dan artikel seputar AAA Clan — dari MARAPTHON hingga kehidupan para member.",
    url: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
