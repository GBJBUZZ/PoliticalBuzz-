import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";

export default function Video() {
  return (
    <section className="px-8 md:px-20 py-20 space-y-8 relative ">
      <Image
        src={"/assets/LandingPage/image1.png"}
        alt="background"
        width={1080}
        height={1000}
        className="absolute top-0 left-0 -z-1 w-full h-full object-cover"
      />
      <div className="md:px-80 text-center relative z-10">
        <h2 className="text-white">
          The Ever-Present Pillar: Supporting Students in Education and Sports
        </h2>
        <Link target="_blank" href={"https://www.instagram.com/reel/C5Vu7-oxfSv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"} className="p-4 rounded-full bg-white block w-fit mx-auto hover:scale-125 transition-all duration-200 mt-40">
          <FaPlay className="text-[var(--primary-clr)]" size={24} />
        </Link>
      </div>
    </section>
  );
}
