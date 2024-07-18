import Image from "next/image";
import React from "react";

export default function Journey() {
  return (
    <section className="px-8 md:px-20 py-20 relative">
      <Image
        src={"/assets/LandingPage/dotted-circle.png"}
        width={200}
        height={200}
        alt="Dotted Circle"
        className="hidden md:block absolute top-0 right-0 -translate-x-1/2"
      />
      <div className="space-y-8">
        <p className="font-[600] text-black">
          Narendra Bhondekar&apos;s political journey is marked by his
          dedication to public service and consistent efforts to address the
          issues faced by his constituency:
        </p>
        <p>
          Bhondekar started his political career with a strong commitment to
          social work, actively participating in community development
          activities in Bhandara. His grassroots involvement and understanding
          of local issues laid the foundation for his political aspirations.
        </p>
      </div>

      <div className="mt-20 space-y-12 relative py-10 z-20">
        <div className="absolute top-0 left-1/2 border-x-2 border-dashed px-1 border-[#696969] h-full translate-x-[-50%] z-[-1]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-4 border-2 border-[var(--primary-clr)] rounded-full"></div>
          </div>
          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:ml-auto md:mr-20 bg-white order-2 md:order-1">
            <div className="overflow-hidden rounded-xl aspect-video">
              <Image
                src={"/assets/Political-Journey/2009.png"}
                alt="Narendra Video"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center h-full w-full group-hover:scale-110 transition-all duration-200 "
              />
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  First Election (2009):
                </span>
                In 2009, Bhondekar contested the Maharashtra Legislative
                Assembly elections as an independent candidate from the Bhandara
                constituency. His victory marked the beginning of his formal
                political career, driven by his promise to bring about
                significant developmental changes in the region.
              </p>
            </div>
          </div>
          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto mx-auto md:ml-20 order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/calci.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2009
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-4 border-2 border-[var(--primary-clr)] rounded-full"></div>
          </div>

          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto ml-auto mx-auto md:mr-20">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/calendar.svg"}
                width={100}
                height={100}
                alt="Calendar"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2014
              </span>
            </div>
          </div>

          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:mr-auto md:ml-20 bg-white">
            <div className="overflow-hidden rounded-xl aspect-video">
              <Image
                src={"/assets/Political-Journey/2014.png"}
                alt="Narendra Video"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center h-full w-full group-hover:scale-110 transition-all duration-200 "
              />
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  Development Initiatives (2009-2014):
                </span>
                During his first term, Bhondekar focused on infrastructural
                development, including road construction, electrification of
                villages, and improving water supply systems. He initiated
                various social welfare programs aimed at improving healthcare
                and education in rural areas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-4 border-2 border-[var(--primary-clr)] rounded-full"></div>
          </div>
          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:ml-auto md:mr-20 bg-white order-2 md:order-1">
            <div className="overflow-hidden rounded-xl aspect-video">
              <Image
                src={"/assets/Political-Journey/2019.png"}
                alt="Narendra Video"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center h-full w-full group-hover:scale-110 transition-all duration-200 "
              />
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">
                  Re-election (2019):
                </span>
                Bhondekar was re-elected in 2019, reflecting the continued trust
                and support of the people of Bhandara. His second term saw an
                intensified focus on sustainable development, digital literacy,
                and employment generation.
              </p>
            </div>
          </div>
          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto mx-auto md:ml-20 order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/checklist.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2019
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className=" absolute top-0 bottom-0 right-0 left-0 m-auto p-2 w-fit h-fit bg-white">
            <div className="p-4 border-2 border-[var(--primary-clr)] rounded-full"></div>
          </div>

          <div className="border-4 border-[var(--primary-clr)] w-[30%] aspect-square rounded-full bg-white my-auto ml-auto mx-auto md:mr-20">
            <div className="relative w-full aspect-square rounded-full p-4 border-8 md:border-[1.2rem] border-[#F4F1F1] group-hover:border-[var(--primary-clr)] transition-all duration-200 mx-auto bg-white flex flex-col items-center justify-center">
              <Image
                src={"/assets/LandingPage/Journey/graph.svg"}
                width={100}
                height={100}
                alt="Calculator"
                className="h-full w-full max-w-[20px] md:max-w-[40px] object-contain object-center"
              />
              <span className="text-xs absolute bottom-[10%] group-hover:scale-110 transition-all duration-200 font-[700]">
                2024
              </span>
            </div>
          </div>

          <div className="md:w-[70%] rounded-xl relative group shadow-xl md:mr-auto md:ml-20 bg-white">
            <div className="overflow-hidden rounded-xl aspect-video">
              <Image
                src={"/assets/Political-Journey/2024.png"}
                alt="Narendra Video"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center h-full w-full group-hover:scale-110 transition-all duration-200 "
              />
            </div>
            <div className="p-4">
              <p className="place-content-center">
                <span className="font-[600] text-black">Ongoing Efforts:</span>
                IBhondekar continues to work towards his vision of a prosperous
                Bhandara-Paoni. His ongoing projects include setting up skill
                development centres, enhancing healthcare facilities, and
                promoting digital literacy. He remains committed to addressing
                the needs of his constituents and ensuring that the benefits of
                development reach every corner of his constituency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
