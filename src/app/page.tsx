import Navbar from "@/Components/Home/Navbar";
import HeroSection from "@/Components/Home/HeroSection";
import FeaturesSection from "@/Components/Home/FeaturesSection";
import CallToActionSection from "@/Components/Home/CallToActionSection";
import Footer from "@/Components/Home/Footer";
import Ourteam from "@/Components/Home/MeetOurTeam";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center bg-gradient-to-b  text-black dark:bg-black dark:text-white">
        <HeroSection />
        <FeaturesSection />
        <CallToActionSection />
        <Ourteam />
        <Footer />
      </main>
    </>
  );
}
