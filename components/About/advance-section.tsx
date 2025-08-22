import Image from "next/image";

export default function AdvanceSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col py-16 bg-[#FFFAF2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Group Photo */}
          <div className="relative">
            <Image
              src="/advanced-mission.png"
              alt="SIAE professionals and partners at Republic Polytechnic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Right Section - Text Content */}
          <div className="space-y-6 bg-gray-300 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-[#1e3a8a]">
                Advancing Aerospace Excellence
              </span>
              <br />
              <span className="text-[#ea580c]">Since 1975</span>
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Established in 1975, the Singapore Institute of Aerospace
                Engineers (SIAE) is Singapore's oldest non-profit institution
                dedicated to advancing aviation safety and aerospace technology.
                For nearly five decades, we have fostered a vibrant aerospace
                ecosystem by enabling knowledge exchange, professional
                development, and industry collaboration.
              </p>

              <p className="text-lg leading-relaxed">
                As the steward of Singapore's aerospace legacy, SIAE cultivates
                tomorrow's aviation culture and talent through:
              </p>

              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="text-[#ea580c] mr-3 mt-1">•</span>
                  <span>
                    Championing safety and innovation across MRO and
                    manufacturing sectors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea580c] mr-3 mt-1">•</span>
                  <span>
                    Maintaining the highest standards of integrity, values and
                    technical excellence
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea580c] mr-3 mt-1">•</span>
                  <span>
                    Grooming the next-generation engineering talent for global
                    careers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea580c] mr-3 mt-1">•</span>
                  <span>
                    Connecting professionals through annual networking forums
                    and conferences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea580c] mr-3 mt-1">•</span>
                  <span>
                    Sharing best practices with regional partners and
                    associations
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center text-[#1e3a8a] font-semibold hover:text-[#ea580c] transition-colors group"
              >
                Contact Us
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
    </section>
  );
}
