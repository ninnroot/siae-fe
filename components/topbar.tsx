"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getNavLinkClass = (path: string) => {
    const baseClass = "font-medium transition-colors";
    if (isActive(path)) {
      return `${baseClass} text-blue-600 font-semibold`;
    }
    return `${baseClass} text-blue-900 hover:text-blue-700`;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image src="/siae-logo.png" alt="Logo" width={300} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={toggleAboutDropdown}
                className={`flex items-center font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-semibold"
                    : "text-blue-900 hover:text-blue-700"
                }`}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Leadership
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                </div>
              )}
            </div>

            <Link href="/membership" className={getNavLinkClass("/membership")}>
              Membership
            </Link>
            <Link href="/events" className={getNavLinkClass("/events")}>
              Events
            </Link>
            <Link
              href="/merchandise"
              className={getNavLinkClass("/merchandise")}
            >
              Merchandise
            </Link>
            <Link
              href="/professional-services"
              className={getNavLinkClass("/professional-services")}
            >
              Professional Services
            </Link>
            <Link href="/blogs" className={getNavLinkClass("/blogs")}>
              Blogs
            </Link>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md">
              Contact Us
            </Button>
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
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
              <Link href="/" className={getNavLinkClass("/")}>
                Home
              </Link>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={toggleAboutDropdown}
                  className={`flex items-center justify-between w-full font-medium py-2 ${
                    isActive("/about")
                      ? "text-blue-600 font-semibold"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isAboutDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about"
                      className="block text-sm text-gray-700 hover:text-blue-700 py-1"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="/about"
                      className="block text-sm text-gray-700 hover:text-blue-700 py-1"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about"
                      className="block text-sm text-gray-700 hover:text-blue-700 py-1"
                    >
                      History
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/membership"
                className={getNavLinkClass("/membership")}
              >
                Membership
              </Link>
              <Link href="/events" className={getNavLinkClass("/events")}>
                Events
              </Link>
              <Link
                href="/merchandise"
                className={getNavLinkClass("/merchandise")}
              >
                Merchandise
              </Link>
              <Link
                href="/professional-services"
                className={getNavLinkClass("/professional-services")}
              >
                Professional Services
              </Link>
              <Link href="/blogs" className={getNavLinkClass("/blogs")}>
                Blogs
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md">
                  Contact Us
                </Button>
              </div>

              <button
                type="button"
                className="flex items-center justify-center p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
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
