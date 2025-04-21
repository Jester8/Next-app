import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import HomeCard from "@/components/HomeCard";
import AboutHero from "@/components/AboutHero";
import Ai from "@/components/Ai";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import ImgCard from "@/components/ImgCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <ImgCard/>
      <AboutHero />
     
      <Events/>
      <Footer/>
    </main>
  );
}
