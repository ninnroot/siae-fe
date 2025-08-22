import React from "react";
import Image from "next/image";

const AboutSiae = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Image */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                <span className="text-5xl lg:text-6xl">SIAE's</span>
                <span className="text-3xl lg:text-4xl ml-4">History</span>
              </h1>

              <div className="relative">
                <Image
                  src="/attc-2000.jpg"
                  alt="Modern buildings including Guthrie Building and adjacent structure"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Singapore Institute of Aerospace Engineers (SIAE) was
                  founded by a group of licensed aircraft engineers led by the
                  late Mr Poon Chia Wee in 1975. SIAE was formed during a
                  pivotal period of national development, coinciding with the
                  growth of Singapore Airlines and the emergence of Singapore as
                  a regional aviation hub.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Since its inception, SIAE has played a significant role in
                  uniting aerospace professionals, promoting technical
                  excellence, and fostering collaboration between industry,
                  academia, and government agencies. Over the decades, the
                  Institute has organized numerous seminars, technical
                  conferences, and international forums to promote knowledge
                  exchange, safety awareness, and innovation in aerospace
                  engineering.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  In addition to its advocacy and networking efforts, SIAE has
                  been a strong supporter of workforce development and youth
                  engagement. It has worked closely with local educational
                  institutions to nurture future generations of aerospace
                  engineers and technicians through scholarships, competitions,
                  and mentorship programs.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Today, after 50 years, SIAE continues to uphold its core
                  values of professionalism, integrity, and innovation. It
                  remains actively engaged in supporting regulatory advancement,
                  sustainability initiatives, and emerging aerospace domains
                  such as unmanned systems, advanced air mobility, and smart
                  maintenance technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATTC Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Air Transport Training College (ATTC) was established in
                  1999 as a premier aviation training institution, meeting
                  Singapore's growing demand for skilled aircraft maintenance
                  personnel. As a Civil Aviation Authority of Singapore (CAAS)
                  Approved Maintenance Training Organisation, ATTC offered
                  SAR-66 programs to both local and international students,
                  training hundreds of licensed aircraft engineers and playing a
                  vital role in developing Singapore's MRO (Maintenance, Repair
                  and Overhaul) talent pool.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The COVID-19 pandemic in 2020 brought unprecedented challenges
                  to the aviation sector, halting global aviation training
                  activities. ATTC faced insurmountable operational and
                  financial challenges, ultimately leading to the cessation of
                  its operations. This marked a significant turning point in
                  Singapore's aviation training landscape.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Despite its closure, ATTC's legacy continues to shape
                  aerospace training in Singapore. In 2025, SIAE appointed MW as
                  a new training facilitator to continue this mission. MW,
                  building on ATTC's foundation, represents a new chapter in
                  advancing aviation education through industry-relevant,
                  globally aligned programs for future professionals.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image
                src="/siae-air-safety.jpg"
                alt="Students and trainees in an aircraft hangar with a private jet in the background"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSiae;
