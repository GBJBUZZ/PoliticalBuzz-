"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Journey() {
  const t = useTranslations("main.political journey");
  const [hidden, setHidden] = React.useState(true);
  const [active, setActive] = React.useState(0);
  const videos = [
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      src="https://www.youtube.com/embed/DeUDMBO9uKM?si=J4sYjm4sXkUbqxy5"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
  ];

  return (
    <section className="px-8 xl:px-40 py-20 relative mb-24">
      <div className="text-center">
        <p
          className="montserrat font-[500] text-xs text-[var(--primary-clr)] uppercase"
          data-aos="fade-down"
        >
          {t("sub-title")}
        </p>
        <h2 className="w-fit m-auto" data-aos="fade-down" data-aos-delay="100">
          {t("title")}
        </h2>
      </div>

      <div className="relative z-20">
        <div className="bg-white relative z-10 md:px-2 px-8 py-8 xl:pt-0 mt-8 rounded-xl space-y-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 journey">
            <div className="space-y-2 journey-card">
              <div className="relative w-full aspect-square p-4 rounded-xl overflow-clip text-center shadow-primary grid grid-row-2">
                <Image
                  src={"/assets/Banner/banner1.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <Image
                      src={"/assets/LandingPage/Journey/calci.svg"}
                      width={30}
                      height={30}
                      alt="Calculator"
                      className="h-full w-full max-w-[35px] object-contain object-center"
                    />
                  </div>
                  <div className="w-full text-left">
                    <h4
                      className="uppercase text-3xl font-[700] text-[var(--primary-clr)] khand tracking-widest"
                      data-aos="fade-in"
                    >
                      2009
                    </h4>
                    <p
                      className="montserrat font-[600] text-white mt-2"
                      data-aos="fade-in"
                    >
                      {t("2009.title")}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white" data-aos="fade-in">
                  {t("2009.para")}
                </p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-clip relative">
                <Image
                  src={"/assets/Banner/banner5.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
                />
                <button
                  className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                  onClick={() => {
                    setHidden(false);
                    setActive(0);
                  }}
                >
                  <FaYoutube size={40} className="text-[#ff0000]" />
                </button>
              </div>
            </div>
            <div className="space-y-2 journey-card">
              <div className="relative w-full aspect-square p-4 rounded-xl overflow-clip text-center shadow-primary grid grid-row-2">
                <Image
                  src={"/assets/Banner/banner2.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />{" "}
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <Image
                      src={"/assets/LandingPage/Journey/calendar.svg"}
                      width={30}
                      height={30}
                      alt="Calculator"
                      className="h-full w-full max-w-[35px] object-contain object-center"
                    />
                  </div>
                  <div className="w-full text-left">
                    <h4
                      className="uppercase text-3xl font-[700] text-[var(--primary-clr)] khand tracking-widest"
                      data-aos="fade-in"
                    >
                      2014
                    </h4>
                    <p
                      className="montserrat font-[600] text-white mt-2"
                      data-aos="fade-in"
                    >
                      {t("2014.title")}
                    </p>
                  </div>
                </div>
                <p className=" mt-4 text-sm  text-white" data-aos="fade-in">
                  {t("2014.para")}
                </p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-clip relative">
                <Image
                  src={"/assets/Banner/banner5.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
                />
                <button
                  className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                  onClick={() => {
                    setHidden(false);
                    setActive(1);
                  }}
                >
                  <FaYoutube size={40} className="text-[#ff0000]" />
                </button>
              </div>
            </div>
            <div className="space-y-2 journey-card">
              <div className="relative w-full aspect-square p-4 rounded-xl overflow-clip text-center shadow-primary grid grid-row-2">
                <Image
                  src={"/assets/Banner/banner3.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />{" "}
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <Image
                      src={"/assets/LandingPage/Journey/checklist.svg"}
                      width={30}
                      height={30}
                      alt="Calculator"
                      className="h-full w-full max-w-[35px] object-contain object-center"
                    />
                  </div>
                  <div className="w-full text-left">
                    <h4
                      className="uppercase text-3xl font-[700] text-[var(--primary-clr)] khand tracking-widest"
                      data-aos="fade-in"
                    >
                      2019
                    </h4>
                    <p
                      className="montserrat font-[600] text-white mt-2"
                      data-aos="fade-in"
                    >
                      {t("2019.title")}
                    </p>
                  </div>
                </div>
                <p className=" mt-4 text-sm text-white" data-aos="fade-in">
                  {t("2019.para")}
                </p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-clip relative">
                <Image
                  src={"/assets/Banner/banner5.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
                />
                <button
                  className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                  onClick={() => {
                    setHidden(false);
                    setActive(2);
                  }}
                >
                  <FaYoutube size={40} className="text-[#ff0000]" />
                </button>
              </div>
            </div>
            <div className="space-y-2 journey-card">
              <div className="relative w-full aspect-square p-4 rounded-xl overflow-clip text-center shadow-primary grid grid-row-2">
                <Image
                  src={"/assets/Banner/banner3.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <Image
                      src={"/assets/LandingPage/Journey/calendar.svg"}
                      width={30}
                      height={30}
                      alt="Calculator"
                      className="h-full w-full max-w-[35px] object-contain object-center"
                    />
                  </div>
                  <div className="w-full text-left">
                    <h4
                      className="uppercase text-3xl font-[700] text-[var(--primary-clr)] khand tracking-widest"
                      data-aos="fade-in"
                    >
                      2024
                    </h4>
                    <p
                      className="montserrat font-[600] text-white mt-2"
                      data-aos="fade-in"
                    >
                      {t("2024.title")}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white" data-aos="fade-in">
                  {t("2024.para")}
                </p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-clip relative">
                <Image
                  src={"/assets/Banner/banner5.jpg"}
                  alt="background"
                  width={1080}
                  height={1000}
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.7]"
                />
                <button
                  className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto"
                  onClick={() => {
                    setHidden(false);
                    setActive(3);
                  }}
                >
                  <FaYoutube size={40} className="text-[#ff0000]" />
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-in"
            className="shadow-primary contact text-center py-4 px-8 rounded-xl xl:rounded-full w-fit mx-auto flex flex-wrap items-center justify-center gap-8"
          >
            <IoMdChatbubbles size={28} className="text-[var(--primary-clr)]" />
            <h4 className="montserrat font-[500] text-[var(--primary-txt)] font-[700]">
              {t("contact.text")}
            </h4>
            <h4 className="montserrat font-[500] text-[var(--primary-clr)] font-[700]">
              {t("contact.number")}
            </h4>
          </div>
        </div>

        {/* <div className="w-[90%] xl:h-1/2 bg-white absolute top-3/4 left-0 right-0 mx-auto rounded-xl z-[-1]"></div> */}
      </div>

      <Image
        src={"/assets/LandingPage/dotted-circle.png"}
        width={200}
        height={200}
        alt="Dotted Circle"
        className="absolute top-2 left-0 transform -translate-x-1/2 -z-1"
      />
      <Image
        src={"/assets/LandingPage/dotted-circle.png"}
        width={200}
        height={200}
        alt="Dotted Circle"
        className="absolute  bottom-1/4 right-0 transform translate-y-1/2 -z-1"
      />
      <div className="absolute top-3/4 left-0 bg-[var(--primary-clr)] p-4 w-full h-1/4 lg:h-1/3"></div>

      {!hidden && (
        <div className="fixed top-0 bottom-0 left-0 right-0 p-8 m-auto bg-black bg-opacity-40 backdrop-blur z-50 flex items-center justify-center">
          <div className=" max-w-[500px] bg-white aspect-video w-full rounded-xl overflow-hidden">
            {videos[active]}
          </div>
          <button
            className="p-2 rounded-xl bg-[var(--primary-clr)] absolute top-0 right-0 m-4"
            onClick={() => setHidden(true)}
          >
            <IoClose className="text-white" size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
