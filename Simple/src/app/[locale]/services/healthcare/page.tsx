import Header from "../_Header/Header";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-8">
      <Header
        title={"Healthcare Initiatives"}
        image1="https://picsum.photos/1200/600?random=100"
        image2="https://picsum.photos/400/600?random=101"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Medical Facility Upgrades
              </h3>
              <p>
                Vallabh Jagtap has worked tirelessly to upgrade healthcare infrastructure, including the construction and renovation of hospitals, clinics, and primary health centers. His initiatives ensure that quality medical services are accessible to all, especially in rural and underserved areas, equipped with modern technology and essential medical supplies.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Health Camps and Free Medical Services
              </h3>
              <p>
                To address immediate healthcare needs, Vallabh organizes regular health camps providing free medical checkups and treatment for common ailments. These camps are strategically held in remote and economically disadvantaged areas, ensuring that even the most vulnerable populations receive necessary medical attention and minor surgical procedures when needed.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Preventive Healthcare Programs
              </h3>
              <p>
                Understanding the importance of prevention, Vallabh's health camps include awareness programs about hygiene, sanitation, and early disease detection. These educational sessions empower communities to adopt healthier lifestyles and recognize warning signs, helping reduce the incidence of preventable diseases across the region.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Compassionate Healthcare Legacy
              </h3>
              <p>
                Vallabh Jagtap's healthcare contributions have created an enduring legacy of compassion and service. His multi-faceted approach combining infrastructure development, free medical services, preventive healthcare, and awareness campaigns has significantly improved healthcare outcomes throughout his constituency.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Vaccination Drives
              </h3>
              <p>
                Vallabh has launched comprehensive vaccination awareness campaigns, emphasizing their crucial role in preventing infectious diseases. Through door-to-door outreach and community sessions, he has educated parents about the importance of immunizing children against diseases like polio, measles, and hepatitis.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <img
            src="https://picsum.photos/500/300?random=102"
            alt="Vallabh Jagtap Healthcare Initiative 1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=103"
            alt="Vallabh Jagtap Healthcare Initiative 2"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=104"
            alt="Vallabh Jagtap Healthcare Initiative 3"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}