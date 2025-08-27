"use client";
import { EventCard } from "@/components/ui/event-card";

export function EventsSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col py-16 gap-10 bg-[#FFFAF2]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Latest <span className="text-[#FFAD33]">Events</span> & Activities
        </h1>
        <span className="text-center">
          Catch up on your latest events and activities
        </span>
      </div>

      {/* Event Cards Grid */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => {
            const container = document.querySelector(".event-cards-container");
            if (container) {
              container.scrollBy({ left: -400, behavior: "smooth" });
            }
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-blue-900 rounded-full p-3 hover:bg-blue-50 transition-colors shadow-lg"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => {
            const container = document.querySelector(".event-cards-container");
            if (container) {
              container.scrollBy({ left: 400, behavior: "smooth" });
            }
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-blue-900 rounded-full p-3 hover:bg-blue-50 transition-colors shadow-lg"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex gap-8 overflow-x-auto scrollbar-hide px-4 py-8 snap-x snap-mandatory event-cards-container">
          <div className="group flex-shrink-0 snap-start">
            <EventCard
              image="/carousel-photo.jpg"
              imageAlt="IEM Anniversary Dinner"
              date="April 2025"
              title="IEM Anniversary Dinner"
              author="Shanmuganathan Sridurga"
              actionText="Read More →"
              overlayButton={{
                text: "Buy Ticket",
                variant: "primary",
                onClick: () => console.log("Buy ticket clicked"),
              }}
              onCardClick={() => console.log("Card clicked")}
            />
          </div>

          <div className="group flex-shrink-0 snap-start">
            <EventCard
              image="/carousel-photo-2.jpg"
              imageAlt="Annual Safety Competition"
              date="Nov 2024"
              title="Annual Safety Competition"
              author="Shanmuganathan Sridurga"
              actionText="Read More →"
              overlayButton={{
                text: "▶",
                variant: "secondary",
                onClick: () => console.log("Play video clicked"),
              }}
              onCardClick={() => console.log("Card clicked")}
            />
          </div>
        </div>
      </div>

      {/* See All Button */}
      <div className="text-center">
        <button
          type="button"
          className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          See All
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${
              index === 0 ? "bg-blue-900" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
