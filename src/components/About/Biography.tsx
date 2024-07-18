import Image from "next/image";
import React from "react";

export default function Biography() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <Image
        src={"/assets/About/bg.png"}
        alt="Biography bg"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full z-[-1] object-cover brightness-[0.3]"
      />

      <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
        <h5 className="text-[2rem] text-white">Biography</h5>
        <h1 className="text-white">Narendra Bhojraj Bhondekar</h1>
      </div>
      <div className="md:pt-10">
        <Image
          src={"/assets/About/narendra2.png"}
          alt="Narendra Bhojraj Bhondekar"
          width={1000}
          height={1000}
          className="max-w-[300px] md:max-w-[600px] mx-auto"
        />
      </div>
    </section>
  );
}
