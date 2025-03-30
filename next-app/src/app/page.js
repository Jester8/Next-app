import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <HomeCard />
    </main>
  );
}
