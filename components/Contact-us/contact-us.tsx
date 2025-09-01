import React from "react";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="sm : py-16 bg-white flex justify-center px-4 sm:px-6">
      <fieldset className="bg-white max-w-6xl w-full px-6 md:px-12 py-12">
        <h3 className="text-2xl sm:text-3xl text-[var(--color-primary)] font-bold mb-6">
          We are currently working virtually
        </h3>

        <p className="text-[var(--color-text-paragraph)] leading-relaxed mb-10 text-base sm:text-lg">
          We’d love to hear from you. Our friendly team is always here to chat.
        </p>

        {/* Chat */}
        <div className="flex gap-3 mb-6">
          <Mail className="text-[var(--color-primary)] shrink-0" />
          <div>
            <p className="text-[var(--color-primary)] font-bold mb-1">
              Chat to us
            </p>
            <Link
              href="#"
              className="text-[var(--color-text-paragraph)] leading-relaxed text-base sm:text-lg"
            >
              aero@siae.sg
            </Link>
          </div>
        </div>

        {/* Office */}
        <div className="flex gap-3">
          <MapPin className="text-[var(--color-primary)] shrink-0" />
          <div>
            <p className="text-[var(--color-primary)] font-bold mb-1">
              Office
            </p>
            <p className="text-[var(--color-text-paragraph)] leading-relaxed text-base sm:text-lg">
              60 Paya Lebar Road #07-54 <br />
              Paya Lebar Square Singapore 409051
            </p>
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default ContactUs;
