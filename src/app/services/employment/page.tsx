import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="space-y-8">
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[url('/assets/Employment/employment-bg.png')] relative overflow-y-hidden min-h-[80dvh]">
        <div className="px-8 md:px-20 py-10 md:py-20 space-y-8 place-content-center">
          {/* <h5 className="text-[2rem] ">Political Journey</h5> */}
          <h1 className="text-white">Employment</h1>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 md:px-20 py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p>
            Narendra Bhojraj Bhondekar was a dedicated individual who made
            significant contributions to education, particularly in helping
            students achieve their academic goals. He was known for his
            unwavering commitment to providing support and guidance to students
            from various backgrounds. Bhondekar believed in the transformative
            power of education and worked tirelessly to ensure that every
            student had access to quality learning opportunities. His approach
            was holistic, focusing not just on academic excellence but also on
            personal development and well-being.
          </p>
          <p>
            He organized numerous educational programs, workshops, and seminars
            aimed at enhancing students&apos; skills and knowledge. These initiatives
            covered a wide range of subjects, from academic tutoring to life
            skills and career counseling. Bhondekar&apos;s mentorship was
            instrumental in shaping the careers of many young individuals,
            helping them realize their full potential. He took a personal
            interest in each student&apos;s journey, offering tailored advice and
            encouragement.
          </p>
          <p>
            His compassionate nature and genuine interest in student welfare
            made him a beloved figure in the educational community. Bhondekar
            was also an advocate for inclusive education, striving to bridge
            gaps and create a more equitable learning environment. He championed
            initiatives to support underprivileged and marginalized students,
            ensuring they had the resources and opportunities needed to succeed.
          </p>
          <p>
            Bhondekar&apos;s efforts extended to improving educational
            infrastructure, securing funding for libraries, laboratories, and
            technology in schools. He believed in the power of community
            involvement and often collaborated with parents, teachers, and local
            organizations to enhance educational outcomes. His dedication to
            continuous improvement in education inspired many educators to adopt
            innovative teaching methods and student-centric approaches.
          </p>
          <p>
            Bhondekar&apos;s legacy continues to inspire educators and students
            alike, reflecting his lifelong dedication to the betterment of
            society through education. His work has left an indelible mark on
            the community, fostering a culture of learning and personal growth.
            His vision for an inclusive, supportive, and empowering educational
            environment continues to influence educational policies and
            practices.
          </p>
        </div>
        <div className="space-y-2">
          <Image
            src={"/assets/Employment/employment1.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Employment/employment2.png"}
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
