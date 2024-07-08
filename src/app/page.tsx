import About from "@/components/LandingPage/About";
import Facts from "@/components/LandingPage/Facts/Facts";
import FeaturedInfo from "@/components/LandingPage/FeaturedInfo/FeaturedInfo";
import Hero from "@/components/LandingPage/Hero/Hero";
import Journey from "@/components/LandingPage/Journey";
import Members from "@/components/LandingPage/Members/Members";
import Video from "@/components/LandingPage/Video";
import Vision from "@/components/LandingPage/Vision/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <FeaturedInfo />
      <Video />
      <Facts />
      <Vision />
      <Journey />
      <Members />
    </main>
  );
}
