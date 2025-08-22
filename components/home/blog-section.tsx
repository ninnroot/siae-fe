"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col px-4 sm:px-6 lg:px-40 lg:mx-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Static Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              Our Recent
            </h2>
            <h2 className="text-5xl font-bold text-[#FFAD33] mb-6">
              Blog Posts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Catch up on our latest events and activities.
            </p>
          </div>

          <button
            type="button"
            className="bg-blue-900 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            See All
          </button>
        </div>

        {/* Right Column - Blog Post Carousel */}
        <div className="relative">
          {/* Navigation Arrow */}
          <button
            type="button"
            aria-label="Scroll to next posts"
            onClick={() => {
              const container = document.querySelector(".blog-posts-container");
              if (container) {
                container.scrollBy({ left: 400, behavior: "smooth" });
              }
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-gray-300 rounded-full p-3 hover:bg-gray-50 transition-colors shadow-lg"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Blog Posts Container */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-8 snap-x snap-mandatory blog-posts-container">
            {/* Blog Post Card 1 */}
            <div className="w-80 flex-shrink-0 snap-start">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src="/carousel-photo.jpg"
                    alt="Composite Repair Seminar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Apr 6, 2025</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    250405 Message from the President, SIAE
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    by Shanmuganathan Sridurga
                  </p>
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post Card 2 */}
            <div className="w-80 flex-shrink-0 snap-start">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src="/carousel-photo-2.jpg"
                    alt="SATEC 2024 Awards"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Jan 4, 2025</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    240809 Message from the President
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    by Shanmuganathan Sridurga
                  </p>
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post Card 3 - Additional card for scrolling */}
            <div className="w-80 flex-shrink-0 snap-start">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src="/carousel-photo-3.jpg"
                    alt="Industry Visit"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Dec 15, 2024</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Industry Visit to Singapore Airlines Engineering
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    by Shanmuganathan Sridurga
                  </p>
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
