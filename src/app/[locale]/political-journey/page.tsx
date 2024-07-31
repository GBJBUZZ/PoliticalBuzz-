import Header from "@/components/Header/Header";
import Hero from "@/components/PoliticalJourney/Hero";
import Journey from "@/components/PoliticalJourney/Journey";
import React from "react";

export default function Page() {
  
  return (
    <main className="overflow-x-hidden">
      {/* <Hero /> */}
      <Header title={"political journey.title"} image1="/assets/Banner/banner5.jpg" image2="/assets/sticker/sticker1.jpg" />
      <Journey />
    </main>
  );
}
