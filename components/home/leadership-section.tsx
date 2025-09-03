"use client";
import { Target, Lightbulb } from "lucide-react";

export function LeadershipSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col px-4 sm:px-6 xl:px-40 lg:mx-20 py-16">
      <h1 className="text-4xl font-bold text-left mb-16 text-blue-900">
        50+ Years of Leadership
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Images */}
        <div className="space-y-6">
          {/* Top Image - Horizontal */}
          <div className="relative">
            <div
              className="h-[400px] w-full lg:w-[400px] rounded-lg"
              style={{
                backgroundImage: "url(mission.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <div className="relative lg:hidden md:hidden sm:block">
            <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              The Singapore Institute of Aerospace Engineers is committed to
              foster a culture of passion, professionalism, and learning in the
              field of aviation and aerospace engineering. Our goal is to be the
              leading centre for recognising respectable aviation specialists
              and aerospace engineers, promoting high standards of integrity and
              responsibility for the Next Generation of Aviation Professionals
              (NGAP) to follow.
            </p>
          </div>
          {/* Vision Section */}
          <div className="relative lg:mt-26 lg:block md:block hidden">
            <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We aim to amplify the voice of licensed aircraft engineers and
              aerospace professionals in addressing good aircraft maintenance
              practices, training and aviation safety concerns.
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-8">
          {/* Mission Section */}
          <div className="relative hidden lg:block md:block">
            <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              The Singapore Institute of Aerospace Engineers is committed to
              foster a culture of passion, professionalism, and learning in the
              field of aviation and aerospace engineering. Our goal is to be the
              leading centre for recognising respectable aviation specialists
              and aerospace engineers, promoting high standards of integrity and
              responsibility for the Next Generation of Aviation Professionals
              (NGAP) to follow.
            </p>
          </div>

          {/* Bottom Image - Vertical, positioned more to the right */}
          <div className="relative lg:ml-16">
            <div className=" rounded-lg overflow-hidden relative">
              <div
                className="h-[400px] w-full lg:w-[400px] rounded-lg"
                style={{
                  backgroundImage: "url(vision.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          {/* Vision Section */}
          <div className="relative lg:mt-26 lg:hidden md:hidden">
            <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              We aim to amplify the voice of licensed aircraft engineers and
              aerospace professionals in addressing good aircraft maintenance
              practices, training and aviation safety concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
