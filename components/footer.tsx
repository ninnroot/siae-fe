"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Logo, Contact Info, Social Media */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/siae-logo.png" alt="Logo" width={400} height={200} />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="h-5 w-5 text-blue-900" />
                <span className="text-sm">aero@siae.org.sg</span>
              </div>

              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  60 Paya Lebar Road #07-54
                  <br />
                  Paya Lebar Square
                  <br />
                  Singapore 409051
                </span>
              </div>
            </div>

            {/* QR Code and Social Media */}
            <div className="bg-amber-50 p-4 rounded-lg w-full md:w-2/3">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {/* QR Code Placeholder */}
                  <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <Image
                        src="/insta-qr.png"
                        alt="Instagram QR Code"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-700">
                  <p>
                    Follow SIAE on{" "}
                    <a
                      href="/"
                      className="text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                      LinkedIn
                    </a>{" "}
                    or scan QR code with your device
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Mailing List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-900 font-bold text-2xl mb-3">
                Join our mailing list
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Be the first to know about our updates, events and exclusive
                offers.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; 2025 Singapore Institute of Aerospace Engineers. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
