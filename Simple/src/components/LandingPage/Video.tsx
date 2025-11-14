import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

export default function Video() {
  return (
    <section className="px-8 xl:px-40 py-10 md:py-28 xl:py-60 space-y-8 relative">
      <img
        src="https://picsum.photos/1920/1080?random=4"
        alt="Vallabh Jagtap Public Service Background"
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.2]"
      />
      <div className="xl:px-80 text-center relative z-10 space-y-8">
        <h2 className="text-white" data-aos="fade-down">
          Watch Vallabh Jagtap's Vision for Community Development
        </h2>
        <p className="text-white text-lg" data-aos="fade-down" data-aos-delay="100">
          Learn about our mission to create positive change and sustainable development
        </p>
        <Link
          target="_blank"
          href={"https://www.youtube.com/watch?v=example-video-id"}
          className="p-4 rounded-full bg-white block w-fit mx-auto hover:scale-125 transition-all duration-200"
          data-aos="fade-in"
        >
          <FaPlay className="text-green-600" size={24} />
        </Link>
        <p className="text-white text-sm" data-aos="fade-up" data-aos-delay="200">
          Click to watch Vallabh Jagtap's latest address
        </p>
      </div>
    </section>
  );
}