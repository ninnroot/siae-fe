"use client";
import { PhotoCarousel } from "@/components/photo-carousel";

export function WelcomeSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Welcome To The Singapore Institute Of{" "}
          <span className="text-[#FFAD33]">Aerospace</span> Engineers
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-6 sm:mt-8 md:mt-10 leading-relaxed px-4 sm:px-8 md:px-16 max-w-3xl mx-auto">
          Since 1975, the Singapore Institute of Aerospace Engineers (SIAE) –
          Singapore's oldest aviation organization – has been the cornerstone
          non-profit for aerospace excellence. We champion aviation safety and
          technology advancement while serving as the premier forum for
          knowledge exchange. As a strategic partner in Singapore's aerospace
          growth, we provide unparalleled opportunities for professionals to
          expand expertise and drive our industry's vibrant development.
        </p>
        <PhotoCarousel
          images={[
            {
              src: "/carousel-photo.jpg",
              alt: "First Airbus A-380 in Singapore",
              caption: "First Airbus A-380 in Singapore",
            },
            {
              src: "/carousel-photo-2.jpg",
              alt: "Founding President Mr. Poon Chia Wee with the late Gordon Dupont",
              caption:
                "Founding President Mr. Poon Chia Wee with the late Gordon Dupont",
            },
            {
              src: "/carousel-photo-3.jpg",
              alt: "Industry Visit to Singapore Airlines Engineering Company",
              caption:
                "Industry Visit to Singapore Airlines Engineering Company",
            },
          ]}
        />
      </div>
    </section>
  );
}
