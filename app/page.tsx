import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MembersSection from "./components/MembersSection";
import BlogSection from "./components/BlogSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#000]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <BlogSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
