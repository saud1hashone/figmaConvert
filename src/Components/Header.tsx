"use client";
import React, { useState } from "react";
import Toggle from "./card/Toggle";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <div className="bg-gray-200 py-2 pl-3 pr-2 md:px-[10%]">
        <div className="flex justify-between text-gray-500 text-sm p-1 md:p-0">
          <div className="flex items-center gap-1 md:gap-3">
            <img src="/world.png" alt="world_logo" width={14} height={14} />
            <select className="bg-transparent focus:text-[#0083ff] sm:p-0 text-xs md:text-sm">
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
              <option value="German">German</option>
            </select>
          </div>

          <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
            <span>Light</span>
            <Toggle />
            <span>Dark</span>
          </div>

          {/* Right Column - Social Icons */}
          <div className="flex items-center gap-1 md:gap-3">
            {[
              {
                href: "https://facebook.com",
                icon: "/facebook.png",
                name: "facebook",
              },
              {
                href: "https://twitter.com",
                icon: "/twitter.png",
                name: "twitter",
              },
              {
                href: "https://instagram.com",
                icon: "/instagram.png",
                name: "instagram",
              },
              {
                href: "https://linkedin.com",
                icon: "/linkedin.png",
                name: "linkedin",
              },
              {
                href: "https://tiktok.com",
                icon: "/tiktok.png",
                name: "tiktok",
              },
              {
                href: "https://youtube.com",
                icon: "/youtube.png",
                name: "youtube",
              },
            ].map((social) => (
              <a key={social.name} href={social.href} target="_blank">
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 px-4 md:px-[10%] bg-hbgblue">
        <div className="flex items-center justify-between">
          <img
            src="/logo.png"
            alt="logo"
            width={120}
            className="w-24 md:w-32"
          />

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer relative mr-4"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>

          {isOpen && (
            <div className="fixed flex flex-col inset-0 bg-white">
              <div className="flex  justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center gap-6 pt-10 text-xl text-gray-600">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link href="/services" className="hover:text-blue-600">
                  Services
                </Link>
                <Link href="/case-studies" className="hover:text-blue-600">
                  Talents
                </Link>
                <Link href="/case-studies" className="hover:text-blue-600">
                  Case Studies
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  About us
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  Branches
                </Link>
              </div>
            </div>
          )}

          <nav className="hidden md:flex gap-2 md:gap-10 text-xs md:text-sm text-customText">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link
              href="/services"
              className="cursor-pointer w-full md:w-auto text-center"
            >
              Services
            </Link>
            <select className="cursor-pointer bg-transparent w-full md:w-auto text-center">
              <option value="Talents">Talents</option>
            </select>
            <Link
              href="/case-studies"
              className="text-[#0083ff] cursor-pointer w-full md:w-auto text-center"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="cursor-pointer w-full md:w-auto text-center"
            >
              About us
            </Link>
            <select className="cursor-pointer bg-transparent w-full md:w-auto text-center">
              <option value="Branches">Branches</option>
            </select>
          </nav>

          <div className="hidden md:flex bg-[#0083ff] items-center px-3 rounded-md">
            <Link
              href="/lets-talk"
              className="font-semibold pr-2 py-1.5 text-white"
            >
              Let's Talk
            </Link>
            <img src="/play.png" width={8} height={4} alt="play" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
