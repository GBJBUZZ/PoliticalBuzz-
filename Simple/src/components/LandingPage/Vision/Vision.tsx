"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Vision() {
  const t = useTranslations("main.services");

  const blocks = [
    {
      title: "sports",
      image: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
      text: "Vallabh Jagtap is a passionate advocate for youth sports development, believing in its power to instill discipline, teamwork, and resilience. He actively supports various sports programs in the community, ensuring that every young person has the opportunity to participate regardless of their background.",
      link: "/services/sports",
    },
    {
      title: "employment",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      text: "Vallabh Jagtap is a visionary leader dedicated to addressing unemployment. He implements innovative programs to create job opportunities, emphasizing skill development and vocational training for sustainable employment solutions.",
      link: "/services/employment",
    },
    {
      title: "agriculture",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135678.png",
      text: "Vallabh Jagtap has made significant contributions to the agricultural sector, particularly in aiding farmers. His efforts focus on modern agricultural techniques, helping farmers increase crop yields and improve soil health through sustainable practices.",
      link: "/services/agriculture",
    },
    {
      title: "education",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      text: "Vallabh Jagtap is dedicated to education, helping students achieve their academic goals. He is known for his unwavering commitment to providing support and guidance to students from various backgrounds.",
      link: "/services/education",
    },
    {
      title: "healthcare",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
      text: "Vallabh Jagtap works tirelessly towards upgrading healthcare infrastructure. His initiatives aim to ensure that quality medical services are accessible to all, especially in rural and underserved areas of the constituency.",
      link: "/services/healthcare",
    },
  ];

  return (
    <section className="space-y-8 md:my-8 bg-black" id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="space-y-4 pt-10 h-full">
          <h2
            className="text-white nanito font-[700] text-center"
            data-aos="fade-in"
          >
            {t("title")}
          </h2>
          <br />
          <div className="" data-aos="fade-in">
            {blocks.map((block, index) => (
              <Link
                href={block.link}
                key={index}
                className={`px-6 py-8 flex justify-center items-center gap-2 text-xl font-[700] block text-center uppercase w-full hover:text-white hover:scale-x-105 hover:scale-y-125 origin-bottom-left transition-all duration-200 shadow-custom ${
                  index % 2 === 0
                    ? "bg-[var(--primary-clr)] text-white"
                    : "bg-[#c0581a] text-white"
                }`}
              >
                <span>{t(block.title)}</span>
                <FaArrowRight className="inline" />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-fit mx-auto" data-aos="fade-in">
          <img
            src="https://picsum.photos/400/600?random=20"
            alt="Vallabh Jagtap Vision for Community Development"
            className="object-contain md:max-w-[350px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}