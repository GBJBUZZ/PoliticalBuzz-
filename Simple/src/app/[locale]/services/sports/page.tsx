import React from "react";
import Header from "../_Header/Header";

export default function Page() {
  return (
    <main className="space-y-8">
      <Header
        title={"Sports Development"}
        image1="https://picsum.photos/1200/600?random=60"
        image2="https://picsum.photos/400/600?random=61"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg">
            Vallabh Jagtap is a passionate advocate for youth sports development, believing in its power to instill discipline, teamwork, and resilience. He actively supports various sports programs in schools and communities, ensuring that every young person has the opportunity to participate regardless of their background.
          </p>

          <p className="text-lg">
            Understanding that proper resources are crucial for success, Vallabh has worked tirelessly to secure funding for sports equipment and facilities. His efforts include organizing regular sports competitions and tournaments, providing young athletes with platforms to showcase their talents and learn from each other.
          </p>

          <p className="text-lg">
            His commitment extends beyond just providing resources - Vallabh actively engages with young athletes, understanding their needs and aspirations. Through partnerships with local sports clubs and organizations, he has created additional training opportunities and mentorship programs for aspiring sports professionals.
          </p>

          <p className="text-lg">
            Vallabh strongly believes in balancing academics and athletics, promoting a holistic approach to education. His inclusive vision ensures that students of all abilities and interests feel valued, supporting not just mainstream sports but also emerging and specialized athletic disciplines.
          </p>

          <p className="text-lg">
            Through various initiatives, he has educated parents and communities about the benefits of sports participation, creating supportive environments for student athletes. His approach focuses on developing leadership skills, encouraging students to take on roles as team captains and event organizers.
          </p>

          <p className="text-lg">
            Vallabh's vision includes integrating physical activity with classroom learning, collaborating with teachers to design programs that complement academic education. This integrated approach aims to create balanced, enriched educational experiences that develop both mind and body for all students.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src="https://picsum.photos/500/300?random=62"
            alt="Vallabh Jagtap Sports Initiative 1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=63"
            alt="Vallabh Jagtap Sports Initiative 2"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=64"
            alt="Vallabh Jagtap Sports Initiative 3"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}