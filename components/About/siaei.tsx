import React from "react";
import Image from "next/image";

export default function SIAEIPage() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Top Section - Text Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-8">
              SIAEi – Expanding Singapore
              <br />
              Quality Across Asia
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed text-md md:text-lg text-center">
                The Singapore Institute of Aerospace Engineers (SIAE) is proud
                to establish SIAEInternational (SIAEi) – a strategic initiative
                to extend our reach and better serve the growing community of
                aerospace professionals across the Asia-Pacific region. For over
                five decades, SIAE has been a trusted voice in Singapore's
                aerospace ecosystem, upholding the highest standards of
                professionalism, technical excellence, safety, and innovation.
                As the industry continues to evolve and regional collaboration
                becomes more critical than ever, SIAE International is our
                commitment to supporting the global aspirations of aerospace
                engineers and technologists beyond Singapore.
              </p>
            </div>
          </div>

          {/* Bottom Section - Group Photo */}
          <div className="flex justify-center">
            <div className="relative max-w-4xl">
              <Image
                src="/siae-website.jpg"
                alt="Group of Asian aerospace professionals in business attire with thumbs up gestures, standing in front of a metallic silver aircraft in an indoor setting"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card - Mission and Purpose */}
            <div className="bg-amber-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Mission and Purpose
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-semibold">
                  SIAEi was founded to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Foster regional partnerships in aerospace engineering,
                      training, certification, and regulatory development.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Provide professional membership and support to engineers,
                      technicians, and educators in the wider Asia-Pacific
                      community.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Extend SIAE programs, events, and educational initiatives
                      to international members with a shared commitment to
                      quality and advancement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Promote cross-border collaboration in aerospace
                      innovation, sustainability, and maintenance safety.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card - Our Values, Our Promise */}
            <div className="bg-[#F79E1B] rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Our Values, Our Promise
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-white font-semibold">
                  SIAEi upholds the same core values that define the Institute:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">
                      Integrity in engineering standards and professional
                      conduct
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">
                      Excellence in knowledge, training, and continuous
                      development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">
                      Community through strong partnerships, mentorship, and
                      peer support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">
                      Responsibility in advancing safety, sustainability, and
                      public trust in aviation
                    </span>
                  </li>
                </ul>

                <p className="text-white mt-6 leading-relaxed">
                  Whether in Singapore or abroad, every member of SIAEi joins a
                  network built on mutual respect, lifelong learning, and a
                  commitment to shaping the future of aerospace in Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
