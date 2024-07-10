import Image from "next/image";
import React from "react";

export default function More() {
  return (
    <section className="px-8 md:px-20 py-20 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">Political Career</p>
          <p>
            Narendra Bhondekar&apos;s political journey began with his election
            to the Maharashtra Legislative Assembly in 2009, representing the
            Bhandara Vidhan Sabha constituency. His tenure was marked by a focus
            on grassroots development, addressing local issues, and implementing
            policies that benefited his constituents. Recognizing his dedication
            and effectiveness, the people of Bhandara re-elected him in 2019,
            reaffirming their trust in his leadership.
          </p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <Image
            src={"/assets/About/more1.png"}
            alt="Narendra Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-full -translate-y-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2">
          <p className="font-[600] text-black">Commitment to Public Service</p>
          <p>
            Throughout his political career, Bhondekar has been a relentless
            advocate for the common man. He has championed various initiatives
            aimed at improving the quality of life in his constituency,
            including infrastructure development, healthcare, education, and
            agricultural support. His background in farming gives him a unique
            perspective on the challenges faced by the agrarian community, and
            he has worked tirelessly to implement sustainable farming practices
            and support local farmers.
          </p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 relative">
          <Image
            src={"/assets/About/more2.png"}
            alt="Narendra Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-0 -translate-y-1/2 -translate-x-1/2 z-[-1]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
        <div className="lg:col-span-2 order-2 md:order-1">
          <p className="font-[600] text-black">Legacy and Impact</p>
          <p>
            Narendra Bhojraj Bhondekar&apos;s legacy is one of dedication, hard
            work, and an unrelenting commitment to the betterment of his
            community. His efforts have brought significant positive changes to
            Bhandara, improving the lives of its residents and setting a
            benchmark for other politicians. As he continues to serve his
            constituency, his impact is felt not only in Bhandara but also
            across Maharashtra, inspiring future generations of leaders.
          </p>
        </div>
        <div className="aspect-video bg-gray-200 rounded-xl order-1 md:order-2 relative">
          <Image
            src={"/assets/About/more3.png"}
            alt="Narendra Video"
            width={500}
            height={500}
            className="rounded-xl object-cover object-center h-full w-full"
          />{" "}
          <Image
            src={"/assets/LandingPage/dotted-circle.png"}
            width={200}
            height={200}
            alt="Dotted Circle"
            className="absolute top-full left-full -translate-y-2/3 -translate-x-2/3"
          />
        </div>
      </div>
    </section>
  );
}
