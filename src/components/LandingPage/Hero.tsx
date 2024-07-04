import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen hero-pattern-bg grid grid-cols-1 lg:grid-cols-2 px-8 md:px-20 py-10 place-items-center gap-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-white font-[600]">Development at any Cost</h2>
          <h1>
            The Future of
            <br />
            Bhandara - Pouni
          </h1>
          <h4 className="text-[#fff]">
            In a world of constant change, our professional discretion security
            services ensure your peace of mind. We prioritize excellence,
            providing nothing less than the best protection tailored to your
            unique needs. Trust in our unwavering commitment to safety and
            confidentiality.
          </h4>
        </div>

        <Link href="/contact" className="btn px-6 py-3 bg-[#fff] block w-fit text-[var(--primary-clr)]">Read More</Link>
      </div>
    </section>
  );
}
