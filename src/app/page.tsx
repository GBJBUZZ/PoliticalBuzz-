import About from "@/components/LandingPage/About";
import FeaturedInfo from "@/components/LandingPage/FeaturedInfo/FeaturedInfo";
import Hero from "@/components/LandingPage/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <FeaturedInfo />
    </main>
  );
}
