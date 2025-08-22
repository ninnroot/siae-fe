"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <Image src="/siae-logo.png" alt="Logo" width={300} height={100} />
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Home
            </a>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Mission
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Leadership
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    History
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Membership
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Events
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Merchandise
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Professional Services
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 font-medium transition-colors">
              Blogs
            </a>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md">
              Contact Us
            </Button>
            <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-blue-900 hover:text-blue-700 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Home
              </a>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={toggleAboutDropdown}
                  className="flex items-center justify-between w-full text-blue-900 hover:text-blue-700 font-medium py-2"
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAboutDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-sm text-gray-700 hover:text-blue-700 py-1">
                      Our Mission
                    </a>
                    <a href="#" className="block text-sm text-gray-700 hover:text-blue-700 py-1">
                      Leadership
                    </a>
                    <a href="#" className="block text-sm text-gray-700 hover:text-blue-700 py-1">
                      History
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Membership
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Events
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Merchandise
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Professional Services
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700 font-medium py-2">
                Blogs
              </a>

              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md">
                  Contact Us
                </Button>
              </div>

              <button className="flex items-center justify-center p-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
