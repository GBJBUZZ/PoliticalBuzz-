import Image from "next/image";
import React from "react";

export default function Biography() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 gradient-bg">
      <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
        <h5 className="text-[2rem] text-white">Biography</h5>
        <h1>Narendra Bhojraj Bhondekar</h1>
        <h4 className="text-white">
          To understand the greatness of Narendra Bhojraj Bhondekar, delve into
          his biography to learn about his career beginnings, educational
          background, the challenges he faced, and his significant contributions
          to Society.
        </h4>
      </div>
      <div className="">
        <Image
          src={"/assets/About/narendra.png"}
          alt="Narendra Bhojraj Bhondekar"
          width={1000}
          height={1000}
          className="max-w-[300px] md:max-w-[500px] mx-auto"
        />
      </div>
    </section>
  );
}
