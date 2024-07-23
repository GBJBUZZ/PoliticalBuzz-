import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { IoMdChatbubbles } from "react-icons/io";

export default function Journey() {
  const t = useTranslations("main.political journey");

  return (
    <section className="px-8 md:px-40 py-20 relative mb-24">
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
        <div className="shadow-custom bg-white relative z-10 md:px-2 px-8 py-8 lg:pt-0 mt-8 lg:mt-24 rounded-xl space-y-8 lg:space-y-0 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
            <div className="md:px-4 lg:-translate-y-[20%] text-center">
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
              <p className="text-xs uppercase font-[700]" data-aos="fade-in">
                2009
              </p>
              <h4
                className="montserrat font-[500] text-[var(--primary-txt)] mt-2"
                data-aos="fade-in"
              >
                {t("2009.title")}
              </h4>
              <p
                className="md:border-r-2 border-[#E7E9EE] mt-4"
                data-aos="fade-in"
              >
                {t("2009.para")}
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
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
              <p className="text-xs uppercase font-[700]" data-aos="fade-in">
                2014
              </p>
              <h4
                className="montserrat font-[500] text-[var(--primary-txt)] mt-2"
                data-aos="fade-in"
              >
                {t("2014.title")}
              </h4>
              <p
                className="md:border-r-2 border-[#E7E9EE] mt-4"
                data-aos="fade-in"
              >
                {t("2014.para")}
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
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
              <p className="text-xs uppercase font-[700]" data-aos="fade-in">
                2019
              </p>
              <h4
                className="montserrat font-[500] text-[var(--primary-txt)] mt-2"
                data-aos="fade-in"
              >
                {t("2019.title")}
              </h4>
              <p
                className="md:border-r-2 border-[#E7E9EE] mt-4"
                data-aos="fade-in"
              >
                {t("2019.para")}
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
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
              <p className="text-xs uppercase font-[700]" data-aos="fade-in">
                2024
              </p>
              <h4
                className="montserrat font-[500] text-[var(--primary-txt)] mt-2"
                data-aos="fade-in"
              >
                {t("2024.title")}
              </h4>
              <p className="mt-4" data-aos="fade-in">
                {t("2024.para")}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-in"
            className="shadow-custom contact text-center py-4 px-8 rounded-xl md:rounded-full w-fit mx-auto flex flex-wrap items-center justify-center gap-8"
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

        <div className="w-[90%] lg:h-1/2 bg-white absolute top-3/4 left-0 right-0 mx-auto rounded-xl z-[-1]"></div>
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
    </section>
  );
}
