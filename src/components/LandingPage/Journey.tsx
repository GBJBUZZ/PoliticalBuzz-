import Image from "next/image";
import React from "react";
import { IoMdChatbubbles } from "react-icons/io";

export default function Journey() {
  return (
    <section className="px-8 md:px-20 py-20 relative">
      <div className="text-center">
        <p className="rufina text-xs text-[var(--primary-clr)] uppercase">
          Short Biography
        </p>
        <h2 className="w-fit m-auto">Political Journey</h2>
      </div>

      <div className="relative z-20">
        <div className="shadow-custom bg-white relative z-10 md:px-2 px-8 py-8 lg:pt-0 mt-8 lg:mt-24 rounded-xl space-y-8 lg:space-y-0 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
            <div className="md:px-4 lg:-translate-y-[20%] text-center">
              <div className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white">
                <Image
                  src={"/assets/LandingPage/Journey/calci.svg"}
                  width={30}
                  height={30}
                  alt="Calculator"
                  className="h-full w-full max-w-[35px] object-contain object-center"
                />
              </div>
              <p className="text-xs uppercase font-[700]">2009</p>
              <h4 className="rufina text-[var(--primary-txt)] mt-2">
                First Election
              </h4>
              <p className="md:border-r-2 border-[#E7E9EE] mt-4">
                He contested the Maharashtra Legislative Assembly elections as
                an independent candidate from the Bhandara constituency.
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
              <div className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white">
                <Image
                  src={"/assets/LandingPage/Journey/calendar.svg"}
                  width={30}
                  height={30}
                  alt="Calculator"
                  className="h-full w-full max-w-[35px] object-contain object-center"
                />
              </div>
              <p className="text-xs uppercase font-[700]">2014</p>
              <h4 className="rufina text-[var(--primary-txt)] mt-2">
                Development Initiatives
              </h4>
              <p className="md:border-r-2 border-[#E7E9EE] mt-4">
                Bhondekar focused on infrastructural development, including road
                construction, electrification of villages, and improving water
                supply systems.
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
              <div className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white">
                <Image
                  src={"/assets/LandingPage/Journey/checklist.svg"}
                  width={30}
                  height={30}
                  alt="Calculator"
                  className="h-full w-full max-w-[35px] object-contain object-center"
                />
              </div>
              <p className="text-xs uppercase font-[700]">2019</p>
              <h4 className="rufina text-[var(--primary-txt)] mt-2">
                Re-election
              </h4>
              <p className="md:border-r-2 border-[#E7E9EE] mt-4">
                Bhondekar was re-elected in 2019, reflecting the continued trust
                and support of the people of Bhandara.
              </p>
            </div>
            <div className="md:px-4 md:-translate-y-[20%] text-center">
              <div className="w-fit aspect-square rounded-full p-4 border-[0.8rem] border-[#F4F1F1] hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white">
                <Image
                  src={"/assets/LandingPage/Journey/calendar.svg"}
                  width={30}
                  height={30}
                  alt="Calculator"
                  className="h-full w-full max-w-[35px] object-contain object-center"
                />
              </div>
              <p className="text-xs uppercase font-[700]">2024</p>
              <h4 className="rufina text-[var(--primary-txt)] mt-2">
                Ongoing Efforts
              </h4>
              <p className="mt-4">
                His ongoing projects include setting up skill development
                centres, enhancing healthcare facilities, and promoting digital
                literacy.
              </p>
            </div>
          </div>
          <div className="shadow-custom contact text-center py-4 px-8 rounded-xl md:rounded-full w-fit mx-auto flex flex-wrap items-center justify-center gap-8">
            <IoMdChatbubbles size={28} className="text-[var(--primary-clr)]" />
            <h4 className="rufina text-[var(--primary-txt)] font-[700]">
              Contact us? Consult with us for any Help.
            </h4>
            <h4 className="rufina text-[var(--primary-clr)] font-[700]">
              +91 99230 54245
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
