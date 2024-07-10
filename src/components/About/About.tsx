import Image from "next/image";
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
            <Image
              src={"/assets/LandingPage/narendra-profile.png"}
              alt="Narendra Profile"
              width={500}
              height={500}
              className="rounded-t-xl rounded-b-0 md:rounded-b-xl border-8 border-[var(--primary-clr)]"
            />
            <div className="p-4 bg-[var(--primary-clr)] w-fit md:max-w-[60%] md:absolute bottom-0 left-0  rounded-t-0 md:rounded-t-xl rounded-b-xl">
              <ImQuotesLeft size={28} className="text-black" />
              <div className="pl-8">
                <p className="font-[600] text-white italic">
                  Our mission is to provide executive leadership, as well as set
                  priorities and goals for the City and its neighbourhoods.
                </p>
                <p className="font-[700] rufina text-right text-black">
                  Narendra Bhojraj Bhondekar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2>A Strong Politician with great Vision</h2>
          <div className="space-y-4">
            <p>
              Narendra Bhojraj Bhondekar is a prominent politician and dedicated
              public servant from Bhandara district, Maharashtra. Born on June
              28, 1979, in Bhandara, he has risen to become a significant figure
              in Maharashtra&apos;s political landscape, known for his
              unwavering commitment to solving the problems of the common man.
            </p>
            <p>
              <span className="font-[600] text-black">
                Early Life and Education
              </span>
              <br />
              Narendra Bhondekar was born into a family with a farming
              background. His early life was marked by the values of hard work
              and dedication, which he carried forward into his professional
              life. He pursued his education in Bhandara, where he developed a
              keen interest in social activism and public service. His
              educational background laid a strong foundation for his future
              endeavors in politics and community service.
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
