"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    <section className="py-10 md:py-16 bg-black" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Blocks */}
          <div className="space-y-4">
            <h2
              className="text-white nanito font-[700] text-3xl md:text-4xl text-center lg:text-left mb-6 md:mb-8"
              data-aos="fade-in"
            >
              {t("title")}
            </h2>
            
            <div className="space-y-4" data-aos="fade-in">
              {blocks.map((block, index) => (
                <Link
                  href={block.link}
                  key={index}
                  className={`px-6 py-3 md:px-6 md:py-4 flex justify-between items-center gap-3 text-lg font-[700] uppercase w-full hover:scale-[1.02] transition-all duration-300 ease-out rounded-lg shadow-lg hover:shadow-xl ${
                    index % 2 === 0
                      ? "bg-[var(--primary-clr)] text-white"
                      : "bg-[#c0581a] text-white"
                  }`}
                >
                  <span className="truncate">{t(block.title)}</span>
                  <FaArrowRight className="flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Image - Made smaller and aligned */}
          <div 
            className="flex justify-center lg:justify-center items-center h-full mt-4 lg:mt-0"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/5 bg-gradient-to-br from-gray-900 to-black p-3 md:p-4">
                <div className="relative aspect-[3/4] md:aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/assets/madhuritai/madhurataiimg126.jpg"
                    alt="Madhuratai Vision"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 35vw"
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Decorative elements - smaller */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-[var(--primary-clr)] rounded-full opacity-20 blur-md"></div>
                <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-[#c0581a] rounded-full opacity-20 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}