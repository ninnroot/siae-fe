"use client";
import { CheckCircle } from "lucide-react";

export function ValuesSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col px-4 sm:px-6 xl:px-40 lg:mx-20 py-16 gap-10">
      {/* Original Values Section (Hidden on large screens) */}
      <div className="hidden grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center lg:px-40 xl:px-44 lg:grid md:grid">
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Respect</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We show consideration in our words and deeds to aerospace
            professionals, aviation enthusiasts, occasions and places.
          </p>
        </div>
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Responsibility</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We give our best in all that we do and account for our decisions as
            aviation professionals.
          </p>
        </div>
      </div>
      <div className="hidden grid-cols-1 lg:grid-cols-3 gap-16 items-center justify-center lg:grid md:grid mt-20">
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Integrity</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We do what is right, stand up for what is right and treat all SIAE
            members with the same standards.
          </p>
        </div>
        <div className="w-full h-[250px] flex flex-col pt-16 p-4 rounded-lg">
          <p className="text-7xl font-bold text-blue-900">Our Values</p>
          <p className="text-4xl text-gray-600 leading-relaxed ml-auto">
            in SIAE
          </p>
        </div>
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Teamwork</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We work well with others and believe all tasks should be done in
            cooperation or partnership.
          </p>
        </div>
      </div>
      <div className="hidden grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center lg:px-40 xl:px-44 lg:grid md:grid lg:mt-16">
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Loyalty</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We are committed to SIAE and the aviation community.
          </p>
        </div>
        <div className="w-full h-[250px] text-center bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-900">Resilience</p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg lg:text-sm xl:text-md">
            We persevere in the face of challenges and will aim to complete
            objectives despite difficulties.
          </p>
        </div>
      </div>
      <div className="w-full lg:hidden md:hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Our Values in SIAE
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Scroll Container */}
          <div
            id="values-carousel"
            className="flex gap-8 overflow-x-auto scrollbar-hide px-4 py-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Respect Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Respect</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We show consideration in our words and deeds to aerospace
                professionals, aviation enthusiasts, occasions and places.
              </p>
            </div>

            {/* Responsibility Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Responsibility
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We give our best in all that we do and account for our decisions
                as aviation professionals.
              </p>
            </div>

            {/* Integrity Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We do what is right, stand up for what is right and treat all
                SIAE members with the same standards.
              </p>
            </div>

            {/* Teamwork Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Teamwork
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We work well with others and believe all tasks should be done in
                cooperation or partnership.
              </p>
            </div>

            {/* Loyalty Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Loyalty</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are committed to SIAE and the aviation community.
              </p>
            </div>

            {/* Resilience Card */}
            <div className="w-80 h-80 text-center bg-gray-100 p-6 rounded-lg flex-shrink-0 snap-start shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Resilience
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We persevere in the face of challenges and will aim to complete
                objectives despite difficulties.
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  const carousel = document.getElementById("values-carousel");
                  if (carousel) {
                    carousel.scrollTo({
                      left: index * 320,
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
