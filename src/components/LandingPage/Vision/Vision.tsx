"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { FaStar } from "react-icons/fa";
import { text } from "stream/consumers";

export default function Vision() {
  const [activeBlock, setActiveBlock] = React.useState(0);

  const blocks = [
    {
      title: "Sports",
      image: "/assets/LandingPage/sports.png",
      text: "He was a passionate advocate for student involvement in sports, believing in its power to instill discipline, teamwork, and resilience. He actively supported various sports programs at schools, ensuring that every student had the opportunity to participate regardless of their background.",
      link: "/services/sports",
    },
    {
      title: "Employment",
      image: "/assets/LandingPage/employment.png",
      text: "Narendra Bhojraj Bhondekar was a visionary leader dedicated to addressing unemployment. He implemented innovative programs to create job opportunities for the unemployed, emphasizing skill development and vocational training.",
      link: "/services/employment",
    },
    {
      title: "AgriCulture",
      image: "/assets/LandingPage/agriculture.png",
      text: "Narendra Bhojraj Bhondekar has made significant contributions to the agricultural sector, particularly in aiding farmers. His efforts have focused on several key areas. Bhondekar introduced modern agricultural techniques, helping farmers increase crop yields and improve soil health",
      link: "/services/agriculture",
    },
    {
      title: "Education",
      image: "/assets/LandingPage/education.png",
      text: "He was a dedicated individual who made significant contributions to education, particularly in helping students achieve their academic goals. He was known for his unwavering commitment to providing support and guidance to students from various backgrounds.",
      link: "/services/education",
    },
    {
      title: "Healthcare",
      image: "/assets/LandingPage/healthcare.png",
      text: "Narendra Bhojraj Bhondekar has worked tirelessly towards upgrading healthcare infrastructure, including the construction and renovation of hospitals, clinics, and primary health centers. His initiatives aimed to ensure that quality medical services were accessible to all, especially in rural and underserved areas. ",
      link: "/services/healthcare",
    },
  ];

  return (
    <section
      className="px-8 md:px-20 py-20 space-y-8 pattern1 bg-[#f3f3f0]"
      id="services"
    >
      {" "}
      <div className="text-center">
        <p className="rufina text-xs">Explore Main Information</p>
        <h2 className="w-fit m-auto">
          Public Services
          <span className="flex w-full mt-2 gap-4 items-center">
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <FaStar size={20} className="text-[var(--primary-clr)]" />
            <FaStar size={16} className="text-[var(--primary-clr)]" />
            <span className="flex-1 border-b-2 border-[var(--primary-clr)]"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="rounded-xl overflow-hidden space-y-2">
          {blocks.map((block, index) => (
            <button
              key={index}
              className={`px-6 py-6  block uppercase w-full ${
                activeBlock === index
                  ? "bg-[var(--primary-clr)] text-white"
                  : "bg-white text-[var(--secondary-txt)]"
              } hover:bg-[var(--primary-clr)] hover:text-white ${
                index === blocks.length - 1 && "rounded-b-xl"
              }`}
              onClick={() => setActiveBlock(index)}
            >
              <span>{block.title}</span>
            </button>
          ))}
        </div>
        <div className="md:col-span-3 w-full h-full bg-white rounded-xl overflow-hidden py-8 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full bg-gray-300 rounded-xl overflow-hidden relative ">
            <Image
              src={blocks[activeBlock].image}
              alt={blocks[activeBlock].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center rounded-xl md:absolute top-0 left-0"
            />
          </div>
          <div className="space-y-8">
            <p className="text-sm font-[700] text-[var(--primary-clr)]">
              Explore my vision on
            </p>
            <p className="text-sm font-[700] uppercase text-[var(--primary-txt)]">
              {blocks[activeBlock].title}
            </p>
            <p>{blocks[activeBlock].text}</p>
            <Link
              href={blocks[activeBlock].link}
              className="btn px-6 py-3 bg-[var(--primary-clr)] block w-fit text-[#fff] rounded-xl"
            >
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
