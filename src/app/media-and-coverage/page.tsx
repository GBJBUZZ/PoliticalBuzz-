import React from "react";
import NewsCard from "./NewsCard";
import { title } from "process";

export default function page() {
  const news = [
    {
      image: "/assets/Media/news1.png",
      date: "29-06-2024",
      title:
        "The beautification work of the pole lake in Bhandara city is underway. Under beautification, a huge 51 feet statue of Lord Shrirama is being built on the bank of the lake.",
      link: "/",
    },
    {
      image: "/assets/Media/news2.png",
      date: "24-06-2024",
      title:
        "Maharashtra's beloved Chief Minister Hon. No. Mr. Bhumipujan ceremony of the first phase of water tourism worth Rs 102 crore in Bhandara assembly constituency was held today by Eknathji Shinde Saheb.",
      link: "/",
    },
    {
      image: "/assets/Media/news3.png",
      date: "29-06-2024",
      title:
        "Workers from various parties in Bhandara district made public entry in Shiv Sena under the initiative of Bhandara Legislative Assembly constituency",
      link: "/",
    },
    {
      image: "/assets/Media/news4.png",
      date: "29-06-2024",
      title:
        "In today. Narendra Bhau met Union Railway Minister Ashwini Vaishnav and requested Rack Point at Bhandara.",
      link: "/",
    },
    {
      image: "/assets/Media/news5.png",
      date: "30-06-2024",
      title:
        "Reviewing the construction of a 100 bed government sub-district hospital building approved at Pawani and instructed to speed up the work.",
      link: "/",
    },
    {
      image: "/assets/Media/news6.png",
      date: "30-06-2024",
      title:
        "Ad in today's tour of Bhandara city. Visited Shri Swami Samarth temple near Prabhat Mishra's house. This time interacted with the citizens of the area and learned about their problems.",
      link: "/",
    },
  ];

  return (
    <main className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/assets/Media/media-bg.png')] relative overflow-y-hidden min-h-[80dvh]">
        <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
          {/* <h5 className="text-[2rem] ">Political Journey</h5> */}
          <h1 className="text-white">Media Coverage</h1>
        </div>
      </section>
      <section className="px-8 md:px-20 py-20 text-center space-y-20">
        <p>
          Please review the media coverage of{" "}
          <span className="font-[700]">Narendra Bhojraj Bhondekar</span> to gain
          more insights about him.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {news.map((item, index) => {
            return (
              <NewsCard
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                link={item.link}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
