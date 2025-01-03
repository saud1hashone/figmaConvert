import React from "react";
import Toggle from "./Card/Toggle";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-200 py-2 px-[10%]">
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <img src="/world.png" alt="world_logo" width={14} height={14} />
            <select className="bg-transparent focus:text-[#0083ff]">
              <option value="English">English</option>
              <option value="English">Urdu</option>
              <option value="English">German</option>
            </select>
          </div>
          <div className="flex items-center">
            <span>Light</span>
           <Toggle/>
            <span>Dark</span>
          </div>
          <div className="flex items-center gap-3">
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
                <img src={social.icon} alt={`${social.name} icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 px-[10%] bg-hbgblue">
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="logo" width={120} />

          <nav className="flex gap-10 text-sm text-customText">
            <a href="/" className="cursor-pointer">
              Home
            </a>
            <a href="/services" className="cursor-pointer">
              Services
            </a>
            <select className="cursor-pointer bg-transparent">
              <option value="Talents">Talents</option>
            </select>
            <a href="/case-studies" className="text-[#0083ff] cursor-pointer">
              Case Studies
            </a>
            <a href="/about" className="cursor-pointer">
              About us
            </a>
            <select className="cursor-pointer bg-transparent">
              <option value="Branches">Branches</option>
            </select>
          </nav>

          <div className="flex bg-[#0083ff] items-center px-3 rounded-md">
            <button className="font-semibold pr-2 py-1.5 text-white">
              Let's Talk
            </button>
            <img src="/play.png" width={8} height={4} alt="play" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
