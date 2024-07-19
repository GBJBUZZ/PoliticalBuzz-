import Header from "@/components/Header/Header";
import Hero from "@/components/PoliticalJourney/Hero";
import Journey from "@/components/PoliticalJourney/Journey";
import React from "react";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* <Hero /> */}
      <Header title={"political journey.title"} />
      <Journey />
    </main>
  );
}
