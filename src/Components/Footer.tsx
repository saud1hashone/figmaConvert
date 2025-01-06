import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#292f3a] px-[5%] md:px-[10%] pt-[4%] md:pt-[2%] pb-[2%] md:pb-[1%]">
        <div className="center flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div className="box1 w-full md:w-[50%]">
            <div className="text-white flex flex-col gap-4 md:gap-2">
              <div className="flex justify-evenly items-center text-xs md:text-sm">
                <a href="">Find Talent</a>
                <a href="">Case Studies</a>
              </div>
              <hr className="w-full" />
              <p className="text-center text-xs md:text-sm">
                Copyright 2022 Arabia Talents, All rights reserved.
              </p>
            </div>
          </div>
          <div className="box2 order-first md:order-none">
            <img src="/lastlogo.png" alt="Arabia Talents Logo" className="w-32 md:w-auto cursor-pointer" />
          </div>
          <div className="box1 w-full md:w-[50%]">
            <div className="text-white flex flex-col gap-4 md:gap-2">
              <div className="flex justify-center gap-4 md:gap-6 items-center cursor-pointer">
                <img src="/ffacebook.png" alt="Facebook" className="w-5 md:w-auto" />
                <img src="/tweet.png" alt="Twitter" className="w-5 md:w-auto" />
                <img src="/finsta.png" alt="Instagram" className="w-5 md:w-auto" />
                <img src="/flinkedin.png" alt="LinkedIn" className="w-5 md:w-auto" />
                <img src="/ftiktok.png" alt="TikTok" className="w-5 md:w-auto" />
                <img src="/fyoutube.png" alt="YouTube" className="w-5 md:w-auto" />
              </div>
              <hr className="w-full" />{" "}
              <div className="flex justify-evenly items-center text-xs md:text-sm">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
