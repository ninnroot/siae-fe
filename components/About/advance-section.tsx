import Image from "next/image";

export default function AdvanceSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col py-8 md:py-16 bg-[#FFFAF2]">
      <div className="container mx-auto px-4 relative">
        {/* Background Image Layer */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full lg:w-[700px]  rounded-lg"
            style={{
              backgroundImage: "url(advanced-mission.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Text Content Overlay Layer */}
          <div
            className="absolute inset-0 hidden items-end justify-center md:items-start md:justify-end p-4 md:p-0 lg:flex"
            style={{ zIndex: 2 }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl shadow-xl mb-4 md:mt-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center mb-4 md:mb-6">
                <span className="text-[#1e3a8a]">
                  Advancing Aerospace Excellence
                </span>{" "}
                <span className="text-[#ea580c]">Since 1975</span>
              </h2>

              <div className="space-y-3 md:space-y-4 text-gray-700">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  Established in 1975, the Singapore Institute of Aerospace
                  Engineers (SIAE) is Singapore's oldest non-profit institution
                  dedicated to advancing aviation safety and aerospace
                  technology. For nearly five decades, we have fostered a
                  vibrant aerospace ecosystem by enabling knowledge exchange,
                  professional development, and industry collaboration.
                </p>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  As the steward of Singapore's aerospace legacy, SIAE
                  cultivates tomorrow's aviation culture and talent through:
                </p>

                <ul className="space-y-1 md:space-y-2 pl-2 md:pl-4">
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Championing safety and innovation across MRO and
                      manufacturing sectors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Maintaining the highest standards of integrity, values and
                      technical excellence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Grooming the next-generation engineering talent for global
                      careers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Connecting professionals through annual networking forums
                      and conferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Sharing best practices with regional partners and
                      associations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 md:pt-4 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors group text-sm md:text-base"
                >
                  Contact Us
                  <svg
                    className="ml-2 w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex items-end justify-center md:items-start md:justify-end p-4 md:p-0 lg:hidden"
            style={{ zIndex: 2 }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl shadow-xl mb-4 md:mt-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center mb-4 md:mb-6">
                <span className="text-[#1e3a8a]">
                  Advancing Aerospace Excellence
                </span>{" "}
                <span className="text-[#ea580c]">Since 1975</span>
              </h2>

              <div className="space-y-3 md:space-y-4 text-gray-700">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  Established in 1975, the Singapore Institute of Aerospace
                  Engineers (SIAE) is Singapore's oldest non-profit institution
                  dedicated to advancing aviation safety and aerospace
                  technology. For nearly five decades, we have fostered a
                  vibrant aerospace ecosystem by enabling knowledge exchange,
                  professional development, and industry collaboration.
                </p>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  As the steward of Singapore's aerospace legacy, SIAE
                  cultivates tomorrow's aviation culture and talent through:
                </p>

                <ul className="space-y-1 md:space-y-2 pl-2 md:pl-4">
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Championing safety and innovation across MRO and
                      manufacturing sectors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Maintaining the highest standards of integrity, values and
                      technical excellence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Grooming the next-generation engineering talent for global
                      careers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Connecting professionals through annual networking forums
                      and conferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ea580c] mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      Sharing best practices with regional partners and
                      associations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 md:pt-4 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors group text-sm md:text-base"
                >
                  Contact Us
                  <svg
                    className="ml-2 w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
