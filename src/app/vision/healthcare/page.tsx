import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="space-y-8">
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/assets/Healthcare/healthcare-bg.png')] relative overflow-y-hidden min-h-[80dvh]">
        <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
          {/* <h5 className="text-[2rem] ">Political Journey</h5> */}
          <h1 className="text-white">Healthcare</h1>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 md:px-20 py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p className="">
            <span className="font-[600] text-black">
              Medical Facilities Enhancement
            </span>
            <br />
            Narendra Bhojraj Bhondekar has worked tirelessly towards upgrading
            healthcare infrastructure, including the construction and renovation
            of hospitals, clinics, and primary health centers. His initiatives
            aimed to ensure that quality medical services were accessible to
            all, especially in rural and underserved areas. Bhondekar&apos;s
            efforts led to the establishment of new medical facilities equipped
            with modern technology and essential medical supplies, significantly
            improving the healthcare standards in the region.
          </p>
          <p className="">
            <span className="font-[600] text-black">
              Health Camps and Free Medical Services
            </span>
            <br />
            To address immediate healthcare needs, Bhondekar organized regular
            health camps, providing free medical check-ups and treatment for
            common ailments. These camps were strategically conducted in remote
            and economically disadvantaged areas, ensuring that even the most
            vulnerable populations received necessary medical attention. In
            addition to treatment, these camps offered diagnostic services and
            minor surgical procedures, bringing comprehensive healthcare to the
            doorsteps of those in need.
          </p>
          <p className="">
            <span className="font-[600] text-black">
              Preventive Healthcare Programs
            </span>
            <br />
            Understanding the importance of prevention, Bhondekar&apos;s health
            camps also included awareness programs on preventive healthcare
            measures. These programs educated the community on the importance of
            hygiene, sanitation, and early detection of diseases. Bhondekar
            collaborated with healthcare professionals to deliver informative
            sessions, helping individuals adopt healthier lifestyles and reduce
            the incidence of preventable diseases.
          </p>
          <p className="">
            <span className="font-[600] text-black">
              Legacy of Compassionate Healthcare
            </span>
            <br />
            Narendra Bhojraj Bhondekar&apos;s contributions to healthcare have
            left an enduring legacy of compassion and service. His multifaceted
            approach, combining infrastructure development, free medical
            services, preventive healthcare, and awareness campaigns, has
            significantly improved healthcare outcomes in his region.
            Bhondekar&apos;s dedication to creating accessible and equitable
            healthcare continues to inspire efforts towards improving public
            health and well-being.
          </p>
          <p className="">
            <span className="font-[600] text-black">Immunization Drives</span>
            <br />
            Bhondekar launched extensive campaigns to raise awareness about
            immunization, emphasizing its critical role in preventing infectious
            diseases. These campaigns targeted parents, educating them on the
            importance of vaccinating their children against diseases such as
            polio, measles, and hepatitis. Through door-to-door outreach and
            community meetings, Bhondekar&apos;s initiatives ensured high
            vaccination coverage and contributed to the overall health and
            well-being of the community.
          </p>
        </div>
        <div className="space-y-2">
          <Image
            src={"/assets/Healthcare/healthcare1.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Healthcare/healthcare2.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Healthcare/healthcare3.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
        </div>
      </section>
    </main>
  );
}
