import Header from "@/components/Header/Header";
import Hero from "@/components/PoliticalJourney/Hero";
import Journey from "@/components/PoliticalJourney/Journey";
import React from "react";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      {/* <Hero /> */}
      <Header title={"Political Journey"} />
      <Journey />
    </main>
  );
}
