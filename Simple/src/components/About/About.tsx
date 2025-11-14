import Link from "next/link";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function About() {
  return (
    <section className="px-8 md:px-20 py-20 space-y-8">
      <h2 className="text-center m-auto w-fit">
        Biography
        <span className="mt-2 block w-[80%] mx-auto border-2 rounded-full border-[var(--primary-clr)]"></span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <div>
          <div className="pt-6 md:pb-20 md:px-8 relative">
            <img
              src="https://picsum.photos/500/600?random=35"
              alt="Vallabh Jagtap Profile"
              className="rounded-t-xl rounded-b-0 md:rounded-b-xl border-8 border-[var(--primary-clr)] w-full max-w-[500px]"
            />
            <div className="p-4 bg-[var(--primary-clr)] w-fit md:max-w-[60%] md:absolute bottom-0 left-0 rounded-t-0 md:rounded-t-xl rounded-b-xl">
              <ImQuotesLeft size={28} className="text-black" />
              <div className="pl-8">
                <p className="font-[600] text-white italic">
                  "My mission is to serve the people with dedication and bring positive change to our community through transparent governance and sustainable development."
                </p>
                <p className="font-[700] rufina text-right text-black">
                  Vallabh Jagtap
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2>A Visionary Leader with Purpose</h2>
          <div className="space-y-4">
            <p>
              Vallabh Jagtap is a dedicated public servant and community leader with a proven track record of working for the welfare of the people. With deep roots in the community and a clear vision for development, he has been instrumental in bringing numerous initiatives that have positively impacted countless lives.
            </p>
            <p>
              <span className="font-[600] text-black">
                Early Beginnings
              </span>
              <br />
              Born into a family with agricultural background, Vallabh Jagtap's early life was marked by values of hard work and dedication that he carried forward into his professional life. His educational background laid a strong foundation for his future endeavors in politics and social service.
            </p>
            <p>
              <span className="font-[600] text-black">
                Professional Journey
              </span>
              <br />
              Throughout his career, Vallabh Jagtap has demonstrated unwavering commitment to public service. His approach combines grassroots understanding with visionary leadership, ensuring that development initiatives address real community needs while building sustainable futures for all constituents.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn px-6 py-3 bg-[var(--primary-clr)] block w-fit text-[#fff] rounded-xl"
          >
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}