"use client";
import Image from "next/image";

export function CorporateMembersSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col px-4 sm:px-6 lg:px-40 lg:mx-20 py-16 bg-[#FFFAF2]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-900">Meet Our</span>{" "}
          <span className="text-[#FFAD33]">Corporate Members</span>
        </h2>
      </div>

      {/* Corporate Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Row 1 */}
        {/* ATC */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/atc.png"
              alt="ATC Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* ST Engineering */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/st.png"
              alt="ST Engineering Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* SIA Engineering Company */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/sia.png"
              alt="SIA Engineering Company Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* SUSS */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/suss.png"
              alt="SUSS Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Row 2 */}
        {/* GMI AERO */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/gmi.png"
              alt="GMI AERO Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* MELCHERS */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/melchers.png"
              alt="MELCHERS Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* EVIDENT */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/evident.png"
              alt="EVIDENT Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* AEROSPEC */}
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 p-4">
            <Image
              src="/companies/aerospec.png"
              alt="AEROSPEC Logo"
              height={100}
              width={100}
              quality={100}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
