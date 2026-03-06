import { Metadata } from "next";
import { AAA_CLAN_MEMBERS } from "../data/data-biodata";
import MembersClientInfo from "./MembersClientInfo";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Members",
  description: "Meet the streamers, musicians, and creators of AAA Clan. Antek-Antek Arap members.",
  openGraph: {
    title: "Members | AAA CLAN",
    description: "Meet the streamers, musicians, dan creators of AAA Clan.",
    url: "/members",
  },
};

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] overflow-hidden pt-16 md:pt-20">
      <Navbar />
      {/* 
        We use a Client Component for the heavy Framer Motion parallax 
        to keep the tree clean and optimize server-side rendering for the metadata.
      */}
      <MembersClientInfo members={AAA_CLAN_MEMBERS} />
    </main>
  );
}
