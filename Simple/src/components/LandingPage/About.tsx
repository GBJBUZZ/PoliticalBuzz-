import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function About() {
  const t = useTranslations("main.about");
  return (
    <section className="md:px-8 xl:px-40 pt-10 py-20 space-y-8 text-justify">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div data-aos="fade-in">
          <div className="pt-6 md:pb-20 md:px-8 relative">
            <Image
              src={"/assets/About/Amadar.jpg"}
              alt="Vallabh Jagtap Profile"
              width={500}
              height={500}
              className="md:max-w-[500px] md:max-h-[600px] object-cover object-top md:rounded-xl"
            />
            <div className="p-4 bg-[var(--primary-clr)]  w-fit md:max-w-[60%] md:absolute bottom-0 left-0  rounded-t-0 md:rounded-t-xl md:rounded-b-xl">
              <ImQuotesLeft size={28} className="text-black" />
              <div className="pl-8">
                <p className="font-[600] text-white italic">"My mission is to serve the people with dedication and bring positive change to our community through transparent governance and sustainable development."</p>
                <p className="font-[700] montserrat text-right text-black">
                  Vallabh Jagtap
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 md:px-0 space-y-8"  data-aos="fade-left">
          <h2>About Vallabh Jagtap</h2>
          <div className="space-y-4">
            <p>Vallabh Jagtap is a dedicated public servant and community leader with a proven track record of working for the welfare of the people. With deep roots in the community and a clear vision for development, he has been instrumental in bringing numerous initiatives that have positively impacted countless lives.</p>
            <p>
              <span className="font-[600] text-black">Vision for Development</span>
              <br />
              His commitment to transparent governance, sustainable development, and inclusive growth has earned him the trust and respect of constituents across the region. Vallabh Jagtap believes in empowering communities through education, healthcare access, and economic opportunities that create lasting positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}