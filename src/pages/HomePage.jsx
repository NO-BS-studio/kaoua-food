import { div } from "framer-motion/client";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/homePage/HeroSection";
import HistorySection from "../sections/homePage/HistorySection";
import MissionSection from "../sections/homePage/MissionSection";
import MetierSection from "../sections/homePage/MetierSection";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/ProductsPage/Footer";
export default function HomePage() {
  return (
    <>
      <div
        className="bg-[#FAF7F2]"
        style={{ backgroundImage: `url("/backgrounds/transparent_bg.png")` }}
      >
        <MobileNav />
        <HeroSection />
        <HistorySection />
        <MissionSection />
        <MetierSection />
        <Footer />
      </div>
    </>
  );
}
