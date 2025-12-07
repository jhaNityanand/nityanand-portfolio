"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hashChecked, setHashChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section on home page
      if (pathname === "/") {
        const sections = ["projects", "skills", "experience"];
        const scrollPosition = window.scrollY + 150;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection(""); // Clear active section when not on home page
      }
    };
    
    const handleHashChange = () => {
      if (pathname === "/" && typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash === "#projects") {
          setActiveSection("projects");
        }
      }
    };
    
    // Check hash on mount
    if (typeof window !== "undefined") {
      if (pathname === "/" && window.location.hash === "#projects") {
        setActiveSection("projects");
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleScroll(); // Check on mount
    setHashChecked(true); // Mark hash checked after initial setup
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Check if a link is active
  const isActive = (href) => {
    if (href === "/#projects") {
      // Active only if on home page and hash matches (only after hash is checked)
      return pathname === "/" && hashChecked && typeof window !== "undefined" && window.location.hash === "#projects";
    }
    // For other routes, check if pathname matches
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "glass shadow-xl py-3 backdrop-blur-md"
        : "bg-white/90 backdrop-blur-sm py-4 shadow-sm"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="group flex-shrink-0 z-50">
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:via-accent-600 group-hover:to-primary-700 transition-all duration-300">
                Nityanand Jha
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5 font-medium tracking-wide">
                Senior PHP & Automation Developer
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/#projects"
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                isActive("/#projects")
                  ? "text-primary-600 bg-primary-50/80"
                  : "text-gray-700 hover:text-primary-600 hover:bg-primary-50/80"
              }`}
            >
              <span className="relative z-10">Projects</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                isActive("/#projects") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/resume"
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                isActive("/resume")
                  ? "text-primary-600 bg-primary-50/80"
                  : "text-gray-700 hover:text-primary-600 hover:bg-primary-50/80"
              }`}
            >
              <span className="relative z-10">Resume</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                isActive("/resume") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/contact"
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                isActive("/contact")
                  ? "text-primary-600 bg-primary-50/80"
                  : "text-gray-700 hover:text-primary-600 hover:bg-primary-50/80"
              }`}
            >
              <span className="relative z-10">Contact</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <a
              href="/resume/resume-nityanand.pdf"
              download
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 font-semibold text-sm flex items-center gap-2 group"
            >
              <span>Download CV</span>
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative z-50 p-2 text-gray-700 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[73px] bg-white z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
            }`}
        >
          <nav className="container mx-auto px-4 sm:px-6 pt-8 pb-6" style={{ background: "white" }}>
            <div className="flex flex-col space-y-2">
              <Link
                href="/#projects"
                className={`px-4 py-3.5 transition-all duration-300 rounded-xl font-semibold text-base border-l-4 ${
                  isActive("/#projects")
                    ? "text-primary-600 bg-primary-50 border-primary-500"
                    : "text-gray-800 hover:text-primary-600 hover:bg-primary-50 border-transparent hover:border-primary-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/resume"
                className={`px-4 py-3.5 transition-all duration-300 rounded-xl font-semibold text-base border-l-4 ${
                  isActive("/resume")
                    ? "text-primary-600 bg-primary-50 border-primary-500"
                    : "text-gray-800 hover:text-primary-600 hover:bg-primary-50 border-transparent hover:border-primary-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-3.5 transition-all duration-300 rounded-xl font-semibold text-base border-l-4 ${
                  isActive("/contact")
                    ? "text-primary-600 bg-primary-50 border-primary-500"
                    : "text-gray-800 hover:text-primary-600 hover:bg-primary-50 border-transparent hover:border-primary-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="/resume/resume-nityanand.pdf"
                download
                className="mt-4 px-4 py-3.5 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white rounded-xl text-center font-semibold text-base hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header >
  );
}
