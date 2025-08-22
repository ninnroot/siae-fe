import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Reusable Event Card Component
interface EventCardProps {
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  author: string;
  actionText?: string;
  actionLink?: string;
  overlayButton?: {
    text: string;
    variant: "primary" | "secondary";
    onClick?: () => void;
  };
  onCardClick?: () => void;
}

export function EventCard({
  image,
  imageAlt,
  date,
  title,
  author,
  actionText = "Read More →",
  actionLink,
  overlayButton,
  onCardClick,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer w-[70vw] max-w-4xl">
      {/* Image Container */}
      <div className="relative h-[400px] w-full">
        <Image src={image} alt={imageAlt} fill className="object-cover" />

        {/* Overlay Button (if provided) - Only visible on hover */}
        {overlayButton && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              overlayButton.onClick?.();
            }}
            className={`absolute inset-0 m-auto w-fit h-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              overlayButton.variant === "primary"
                ? "bg-blue-900 text-white hover:bg-blue-800"
                : "bg-white text-gray-900 hover:bg-gray-50"
            } px-6 py-3 rounded-md font-medium text-base shadow-lg`}
          >
            {overlayButton.text}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <p className="text-sm text-gray-500 mb-2">{date}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-4">by {author}</p>

        {/* Action Link */}
        <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
          <span className="text-sm font-medium">{actionText}</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
