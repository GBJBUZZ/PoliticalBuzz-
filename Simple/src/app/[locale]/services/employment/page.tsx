import Header from "../_Header/Header";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-8">
      <Header
        title={"Employment & Skill Development"}
        image1="https://picsum.photos/1200/600?random=90"
        image2="https://picsum.photos/400/600?random=91"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg">
            Vallabh Jagtap is a visionary leader dedicated to addressing unemployment and creating sustainable livelihood opportunities. He has implemented innovative programs focused on job creation, with special emphasis on skill development and vocational training to equip youth with market-relevant capabilities.
          </p>

          <p className="text-lg">
            Through various skill enhancement programs, workshops, and career counseling sessions, Vallabh has helped numerous young individuals develop their talents and acquire valuable knowledge. His guidance has been instrumental in shaping many careers, empowering youth to recognize and achieve their full potential in the professional world.
          </p>

          <p className="text-lg">
            His compassionate approach and genuine commitment to youth welfare have made him a trusted mentor in employment initiatives. Vallabh advocates for inclusive employment opportunities, working to eliminate barriers and create more equitable job markets where talent and hard work are the primary criteria for success.
          </p>

          <p className="text-lg">
            Vallabh's efforts extend to creating employment infrastructure, facilitating industry partnerships, and promoting entrepreneurship. He believes in collaborative approaches and regularly works with businesses, educational institutions, and community organizations to create comprehensive employment solutions and sustainable economic growth.
          </p>

          <p className="text-lg">
            His employment initiatives continue to inspire both job seekers and employers, reflecting his deep commitment to economic empowerment through meaningful employment. Vallabh's vision focuses on creating supportive, dynamic, and opportunity-rich employment ecosystems that enable individuals to build prosperous careers and contribute to community development.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src="https://picsum.photos/500/300?random=92"
            alt="Vallabh Jagtap Employment Initiative 1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=93"
            alt="Vallabh Jagtap Employment Initiative 2"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}