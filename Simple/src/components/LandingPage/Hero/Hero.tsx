"use client";

import { Link } from "@/navigation";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import SubscribeCard from "@/components/SubscribeCard/SubscribeCard";

export default function Hero() {
  const t = useTranslations("main.hero");

  return (
    <section className="xl:min-h-[90dvh] grid grid-cols-1 md:grid-cols-2 px-8 xl:px-40 py-10 pb-40 md:pb-20 mb-16 md:mb-0 gap-8 relative bg-gradient-to-r from-green-800 to-green-600">
      {/* Removed background image */}
      
      <div className="md:py-20 space-y-12">
        <h1
          className="text-white text-[1.5rem] md:text-[2.5rem]"
          data-aos="fade-right"
        >
          "Dedicated to serving the people with integrity and commitment"
        </h1>
        <p
          className="text-white relative z-10"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Vallabh Jagtap is a visionary leader working tirelessly for the development and prosperity of our community. With a strong commitment to public service and sustainable development, he has been instrumental in bringing positive changes that benefit every citizen.
        </p>
        <br />
        <Link
          data-aos="fade-right"
          data-aos-delay="200"
          href={"/biography"}
          className="px-6 py-4 rounded-xl bg-white text-green-800 text-xl font-[700] group block w-fit relative"
        >
          Learn More About Vallabh Jagtap{" "}
          <span className="">
            <FaArrowRight className="inline" size={24} />
          </span>
          <img
            src="https://picsum.photos/400/600?random=1"
            alt="Vallabh Jagtap"
            className="h-[350px] object-cover absolute top-0 bottom-0 my-auto right-[-70%] z-[-1] block md:hidden"
          />
        </Link>
      </div>
      <div data-aos="fade-up" className="hidden md:block">
        <img
          src="https://picsum.photos/600/800?random=2"
          alt="Vallabh Jagtap"
          className="max-h-[800px] w-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-fit mx-auto md:mx-0 md:ml-40 translate-y-1/2 md:translate-y-[10%]">
        <SubscribeCard />
      </div>
    </section>
  );
}