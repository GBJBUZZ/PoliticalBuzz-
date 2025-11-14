import Header from "../_Header/Header";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-8">
      <Header
        title={"Education Development"}
        image1="https://picsum.photos/1200/600?random=80"
        image2="https://picsum.photos/400/600?random=81"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg">
            Vallabh Jagtap is a dedicated advocate for quality education, committed to helping students achieve their academic goals and empowering them for successful futures. He is known for his unwavering commitment to providing support and guidance to students from various backgrounds, ensuring equal educational opportunities for all.
          </p>

          <p className="text-lg">
            Through numerous educational programs, workshops, and seminars, Vallabh has worked to enhance students' skills and knowledge across various subjects. These initiatives range from academic tutoring to life skills and career counseling, providing comprehensive support for holistic student development and preparing youth for future challenges.
          </p>

          <p className="text-lg">
            His compassionate nature and genuine concern for student welfare have made him a beloved figure in educational communities. Vallabh champions inclusive education, working to bridge gaps and create more equitable learning environments where every student can thrive regardless of their circumstances or background.
          </p>

          <p className="text-lg">
            Vallabh's efforts extend to improving educational infrastructure, securing funding for libraries, laboratories, and technology integration in schools. He believes in the power of community engagement and frequently collaborates with parents, teachers, and local organizations to enhance educational outcomes and create supportive learning ecosystems.
          </p>

          <p className="text-lg">
            His legacy continues to inspire both teachers and students, reflecting his lifelong dedication to societal improvement through education. Vallabh's vision focuses on creating supportive, encouraging, and capable educational environments that nurture young minds and prepare them for leadership roles in tomorrow's world.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src="https://picsum.photos/500/300?random=82"
            alt="Vallabh Jagtap Education Initiative 1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=83"
            alt="Vallabh Jagtap Education Initiative 2"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}