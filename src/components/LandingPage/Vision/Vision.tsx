"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

export default function Vision() {
  const t = useTranslations("main.services");

  const blocks = [
    {
      title: "sports",
      image: "/assets/LandingPage/sports.png",
      text: "He was a passionate advocate for student involvement in sports, believing in its power to instill discipline, teamwork, and resilience. He actively supported various sports programs at schools, ensuring that every student had the opportunity to participate regardless of their background.",
      link: "/services/sports",
    },
    {
      title: "employment",
      image: "/assets/LandingPage/employment.png",
      text: "Narendra Bhojraj Bhondekar was a visionary leader dedicated to addressing unemployment. He implemented innovative programs to create job opportunities for the unemployed, emphasizing skill development and vocational training.",
      link: "/services/employment",
    },
    {
      title: "agriculture",
      image: "/assets/LandingPage/agriculture.png",
      text: "Narendra Bhojraj Bhondekar has made significant contributions to the agricultural sector, particularly in aiding farmers. His efforts have focused on several key areas. Bhondekar introduced modern agricultural techniques, helping farmers increase crop yields and improve soil health",
      link: "/services/agriculture",
    },
    {
      title: "education",
      image: "/assets/LandingPage/education.png",
      text: "He was a dedicated individual who made significant contributions to education, particularly in helping students achieve their academic goals. He was known for his unwavering commitment to providing support and guidance to students from various backgrounds.",
      link: "/services/education",
    },
    {
      title: "healthcare",
      image: "/assets/LandingPage/healthcare.png",
      text: "Narendra Bhojraj Bhondekar has worked tirelessly towards upgrading healthcare infrastructure, including the construction and renovation of hospitals, clinics, and primary health centers. His initiatives aimed to ensure that quality medical services were accessible to all, especially in rural and underserved areas. ",
      link: "/services/healthcare",
    },
  ];

  return (
    <section className=" space-y-8 bg-black mb-20" id="services">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" space-y-4 pt-10">
          <h2
            className="text-white nanito font-[700] text-center"
            data-aos="fade-in"
          >
            {t("title")}
          </h2>
          <br />
          <div data-aos="fade-in">
            {blocks.map((block, index) => (
              <Link
                href={block.link}
                key={index}
                className={`px-6 py-8 block text-center uppercase w-full hover:text-white hover:scale-x-105 hover:scale-y-125 origin-bottom-left transition-all duration-200 shadow-custom ${
                  index % 2 === 0
                    ? "bg-[var(--primary-clr)] text-white"
                    : "bg-[#c0581a] text-white"
                }
                
                `}
              >
                <span>{t(block.title)}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="" data-aos="fade-in">
          <Image
            src={"/assets/LandingPage/narendra-vision.png"}
            alt="Vision"
            height={1000}
            width={1000}
            className="object-cover md:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
