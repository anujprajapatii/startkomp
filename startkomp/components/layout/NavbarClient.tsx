"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="lg:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-[#111f35] transition-colors"
      >
        <span
          className={`block w-5 h-[2px] bg-[#f0f4f8] transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-[#f0f4f8] transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-[#f0f4f8] transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <nav className="bg-[#0b1829] border-b border-[#1a2d4a] px-4 py-6 flex flex-col gap-1 shadow-2xl">
          {(["FAQ", "Advertise", "Support"] as const).map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[#7a8fa8] hover:text-[#f0f4f8] px-3 py-3 rounded-md hover:bg-[#111f35] transition-colors text-sm font-medium"
            >
              {link}
            </Link>
          ))}
          <div className="border-t border-[#1a2d4a] mt-3 pt-4 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-center text-[#f0f4f8] px-4 py-2.5 rounded-lg border border-[#1a2d4a] hover:border-[#7a8fa8] transition-colors text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              href="/submit"
              onClick={() => setIsOpen(false)}
              className="text-center bg-[#19AB4F] hover:bg-[#19AB4F]/90 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-semibold"
            >
              Submit startup
            </Link>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[65px] z-30 bg-[#060F1E]/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
