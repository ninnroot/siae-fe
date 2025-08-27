import React from "react";
import Image from "next/image";

const SeminarSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Top Section: Environmentally Sustainable Aerospace */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Speaker Grid */}
            <Image
              src="/semina-1.jpg"
              alt="Environmentally Sustainable Aerospace"
              width={600}
              height={600}
              className="rounded-lg"
            />

            {/* Right Side - What We Offer Text Block */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">
                What We Offer
              </h3>
              <p className="text-gray-700 font-semibold">SIAEi provides:</p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Access to the region's best technical conferences, industry
                    forums, and professional workshops
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Top opportunities for certification, training, and
                    upskilling through partners and global regulators
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Global platform for regional aerospace societies, academic
                    institutions, and MROs to collaborate on talent development
                    and best practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Expert Engagement in joint research, innovation projects,
                    and regional youth programs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Air Dominance Tomorrow */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Join the Movement Text Block */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Join the Movement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The aerospace industry knows no borders—and neither should
                professional collaboration. With SIAEi, we invite you to join a
                growing network of dedicated aerospace professionals working
                together to drive progress, enhance safety, and inspire the next
                generation.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-900 font-semibold">
                  For inquiries on corporate memberships, institutional
                  partnerships, or collaboration opportunities:
                </p>
                <p className="text-blue-700">
                  <a href="mailto:nicholas.tan@siae.org.sg">
                    nicholas.tan@siae.org.sg
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side - Speaker Grid */}
            <Image
              src="/semina-2.jpg"
              alt="Environmentally Sustainable Aerospace"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarSection;
