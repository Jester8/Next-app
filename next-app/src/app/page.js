import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import HomeCard from "@/components/HomeCard";
import AboutHero from "@/components/AboutHero";
import Ai from "@/components/Ai";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <HomeCard />
      <AboutHero />
      <Ai />
    </main>
  );
}
