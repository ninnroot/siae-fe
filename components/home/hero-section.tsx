"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[100vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="/hero.jpg"
        alt="Singapore Airlines A380"
        fill
        priority
        className="object-cover w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-sm md:text-base mb-2 font-medium tracking-wide">
          Empowering the next generation of aerospace leaders
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
          Singapore Institute Of <br className="hidden md:block" />
          Aerospace Engineers
        </h1>
        <a
          href="#about"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Join Our Legacy
        </a>
      </div>
    </section>
  );
}
