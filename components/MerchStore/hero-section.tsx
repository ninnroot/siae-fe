import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Explore Our
              <br />
              Official Collection
            </h1>
            <p className="text-xl text-gray-600">of SIAE</p>
          </div>
          <div className="flex justify-center">
            <img
              src="/merchandise-items/item.jpg"
              alt="SIAE T-shirt"
              className="max-w-md w-full h-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
