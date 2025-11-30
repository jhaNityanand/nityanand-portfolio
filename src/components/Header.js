"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg py-3" : "bg-white/80 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex-shrink-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:via-accent-600 group-hover:to-primary-700 transition-all">
              Nityanand Jha
            </div>
            <div className="text-xs sm:text-sm text-gray-700 mt-0.5 font-medium">Senior PHP & Automation Developer</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-semibold">
            <Link 
              href="/#projects" 
              className="text-gray-800 hover:text-primary-600 transition-colors px-2 py-1 rounded-md hover:bg-primary-50"
            >
              Projects
            </Link>
            <Link 
              href="/resume" 
              className="text-gray-800 hover:text-primary-600 transition-colors px-2 py-1 rounded-md hover:bg-primary-50"
            >
              Resume
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-primary-600 transition-colors px-2 py-1 rounded-md hover:bg-primary-50"
            >
              Contact
            </Link>
            <a 
              href="/resume/resume-nityanand.pdf" 
              download
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all hover:scale-105 font-semibold"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/#projects" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-3 py-2 rounded-md hover:bg-primary-50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/resume" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-3 py-2 rounded-md hover:bg-primary-50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 hover:text-primary-600 transition-colors px-3 py-2 rounded-md hover:bg-primary-50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="/resume/resume-nityanand.pdf" 
                download
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:shadow-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
