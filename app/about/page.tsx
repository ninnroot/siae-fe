"use client";
import AboutSIAE from "@/components/About/about-siae";
import AdvanceSection from "@/components/About/advance-section";
import SeminarSection from "@/components/About/seminar";
import SIAEIPage from "@/components/About/siaei";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/attc.jpg"
          alt="About The Singapore Institute Of Aerospace Engineers"
          fill
          priority
          className="object-cover w-full h-full"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col text-left px-4 ml-10 mb-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
            About The Singapore Institute <br className="hidden md:block" />
            Of Aerospace Engineers
          </h1>
        </div>
      </section>

      <AdvanceSection />
      <AboutSIAE />
      <SIAEIPage />
      <SeminarSection />
    </div>
  );
}
