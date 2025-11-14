import Header from "../_Header/Header";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-8">
      <Header
        title={"Agriculture Development"}
        image1="https://picsum.photos/1200/600?random=70"
        image2="https://picsum.photos/400/600?random=71"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-8 xl:px-40 py-10 md:py-20 text-justify">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg">
            Vallabh Jagtap has made significant contributions to the agricultural sector, particularly in aiding farmers with modern techniques and sustainable practices. His efforts have focused on transforming traditional farming methods into profitable and environmentally friendly practices.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Innovative Farming Techniques
              </h3>
              <p>
                Introduced modern agricultural techniques including precision farming, drip irrigation systems, and organic farming methods. These innovations have helped farmers increase crop yields while reducing water consumption and chemical usage.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Sustainable Practices
              </h3>
              <p>
                Promoted crop rotation, organic fertilizers, and integrated pest management systems. These sustainable practices have improved soil health and reduced environmental impact while maintaining high productivity levels.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Water Management
              </h3>
              <p>
                Implemented effective water management systems including rainwater harvesting, check dams, and efficient irrigation methods. These initiatives have helped farmers combat water scarcity and ensure consistent water supply for crops.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Education and Training
              </h3>
              <p>
                Organized workshops and training programs to educate farmers about best practices, new technologies, and market trends. Regular knowledge-sharing sessions have empowered farmers with the latest agricultural information.
              </p>
            </div>

            <div>
              <h3 className="font-[600] text-black text-xl mb-2">
                Financial Support
              </h3>
              <p>
                Facilitated access to low-interest loans, government subsidies, and financial assistance programs. Helped farmers invest in modern equipment, quality seeds, and infrastructure improvements.
              </p>
            </div>
          </div>

          <p className="text-lg mt-6">
            Through these comprehensive initiatives, Vallabh Jagtap has helped create a resilient and prosperous agricultural community. His vision for agricultural development focuses on sustainability, profitability, and the well-being of farming families across the region.
          </p>
        </div>
        
        <div className="space-y-4">
          <img
            src="https://picsum.photos/500/300?random=72"
            alt="Vallabh Jagtap Agriculture Initiative 1"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=73"
            alt="Vallabh Jagtap Agriculture Initiative 2"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/500/300?random=74"
            alt="Vallabh Jagtap Agriculture Initiative 3"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
}