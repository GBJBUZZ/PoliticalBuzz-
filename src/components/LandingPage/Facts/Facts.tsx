import Image from "next/image";
import React from "react";

export default function Facts() {
  return (
    <section className="px-8 md:px-20 py-20 space-y-8 pattern2 bg-[var(--primary-txt)] grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-[var(--primary-clr)]">Facts</h2>
        <h2 className="text-white">Interesting & amazing facts about Him</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:col-span-2 ">
        <div className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl">
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/badge.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-5xl font-[700] text-[var(--primary-txt)]">
            12<sup className="">+</sup>
          </h4>
          <p className="rufina text-lg text-[#919191] font-[700]">
            Years of Experience
          </p>
        </div>
        <div className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl">
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/officer.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-5xl font-[700] text-[var(--primary-txt)]">2</h4>
          <p className="rufina text-lg text-[#919191] font-[700]">
            Constituency
          </p>
        </div>
        <div className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl">
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/daimond.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-5xl font-[700] text-[var(--primary-txt)]">
            50.8<sup className="">k</sup>
          </h4>
          <p className="rufina text-lg text-[#919191] font-[700]">Voters</p>
        </div>
        <div className="w-full py-10 px-6 bg-white text-center relative overflow-hidden rounded-xl">
          <div className="pr-4 pb-2 pl-6 pt-4 bg-[var(--primary-clr)] rounded-full w-fit aspect-square mx-auto absolute top-0 left-0 -translate-x-[30%] -translate-y-[20%]">
            <Image
              src={"/assets/LandingPage/facts/badge.svg"}
              width={100}
              height={100}
              alt="Constituency"
              className="max-w-[20px] object-contain object-center w-full h-full"
            />
          </div>
          <h4 className="text-5xl font-[700] text-[var(--primary-txt)]">
            100<sup className="">+</sup>
          </h4>
          <p className="rufina text-lg text-[#919191] font-[700]">
            Project Done
          </p>
        </div>
      </div>
    </section>
  );
}
