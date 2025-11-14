"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Journey() {
  const t = useTranslations("main.political journey");
  const [hidden, setHidden] = React.useState(true);
  const [active, setActive] = React.useState(0);
  const videos = [
    <iframe
      key={1}
      src="https://www.youtube.com/embed/example1"
      title="Vallabh Jagtap Political Journey"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={2}
      src="https://www.youtube.com/embed/example2"
      title="Vallabh Jagtap Development Work"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={3}
      src="https://www.youtube.com/embed/example3"
      title="Vallabh Jagtap Public Service"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-full"
    ></iframe>,
    <iframe
      key={4}
      src="https://www.youtube.com/embed/example4"
      title="Vallabh Jagtap Community Development"
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
                <img
                  src="https://picsum.photos/400/400?random=10"
                  alt="Vallabh Jagtap 2009 Political Journey"
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135678.png"
                      alt="Election Icon"
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
                <img
                  src="https://picsum.photos/400/300?random=11"
                  alt="Vallabh Jagtap Video Thumbnail"
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
                <img
                  src="https://picsum.photos/400/400?random=12"
                  alt="Vallabh Jagtap 2014 Development Work"
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="Development Icon"
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
                <img
                  src="https://picsum.photos/400/300?random=13"
                  alt="Vallabh Jagtap Video Thumbnail"
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
                <img
                  src="https://picsum.photos/400/400?random=14"
                  alt="Vallabh Jagtap 2019 Achievements"
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                      alt="Achievement Icon"
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
                <img
                  src="https://picsum.photos/400/300?random=15"
                  alt="Vallabh Jagtap Video Thumbnail"
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
                <img
                  src="https://picsum.photos/400/400?random=16"
                  alt="Vallabh Jagtap 2024 Vision"
                  className="absolute top-0 left-0 -z-1 w-full h-full object-cover brightness-[0.3]"
                />
                <div className="flex items-center gap-4">
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                      alt="Vision Icon"
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
                <img
                  src="https://picsum.photos/400/300?random=17"
                  alt="Vallabh Jagtap Video Thumbnail"
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
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/1165/1165800.png"
        alt="Decoration Pattern"
        className="absolute top-2 left-0 transform -translate-x-1/2 -z-1 w-20 opacity-50"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1165/1165800.png"
        alt="Decoration Pattern"
        className="absolute bottom-1/4 right-0 transform translate-y-1/2 -z-1 w-20 opacity-50"
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