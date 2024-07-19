import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="space-y-8">
      {" "}
      <Header title={"Sports"} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 md:px-20 py-20 text-justify">
        <div className="lg:col-span-2 space-y-4">
          <p>
            He was a passionate advocate for student involvement in sports,
            believing in its power to instill discipline, teamwork, and
            resilience. He actively supported various sports programs at
            schools, ensuring that every student had the opportunity to
            participate regardless of their background.
          </p>
          <p>
            Narendra worked tirelessly to secure funding for sports equipment
            and facilities, understanding that proper resources were crucial for
            success. He organized regular sports events and competitions,
            encouraging students to showcase their talents and learn from one
            another. His efforts extended to mentoring young athletes, offering
            guidance and inspiration to help them reach their full potential.
          </p>
          <p>
            Narendra also emphasized the importance of balancing academics and
            athletics, promoting a holistic approach to education. His
            commitment to inclusivity meant that he supported not just
            mainstream sports but also niche and emerging ones, broadening
            students&apos; horizons. Under his leadership, the participation
            rate in school sports significantly increased, fostering a vibrant
            and active student community. Narendra&apos;s legacy lives on in the
            numerous students who have pursued their passion for sports,
            achieving excellence both on and off the field. His dedication to
            student sports development has left an indelible mark, creating a
            culture of support and encouragement that continues to thrive.
          </p>
          <p>
            Narendra&apos;s efforts went beyond just providing resources; he
            actively engaged with students, understanding their needs and
            aspirations. He established partnerships with local sports clubs and
            organizations to offer students additional training opportunities.
            Narendra believed in recognizing and celebrating achievements,
            organizing award ceremonies and appreciation events for young
            athletes. His approach was holistic, focusing on physical fitness,
            mental well-being, and character building through sports.
          </p>
          <p>
            He also initiated programs to educate parents and the community
            about the benefits of sports participation, creating a supportive
            environment for students. Narendra&apos;s vision included developing
            leadership skills among students, encouraging them to take on roles
            such as team captains and event organizers. This empowerment helped
            students build confidence and develop a sense of responsibility. His
            inclusive approach ensured that students of all abilities and
            interests felt valued and had opportunities to excel.
          </p>
          <p>
            Narendra&apos;s influence extended to curriculum development, where
            he advocated for integrating sports and physical education into the
            academic framework. He collaborated with educators to design
            programs that complemented classroom learning with physical
            activities. This integration aimed to create a balanced and
            enriching educational experience for students.
          </p>
        </div>
        <div className="space-y-2">
          <Image
            src={"/assets/Sports/sport1.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Sports/sport2.png"}
            alt="sports"
            width={500}
            height={500}
            className=""
          />
          <Image
            src={"/assets/Sports/sport3.png"}
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
