import React from "react";
import { CarouselSize } from "../Carousel";

const SectionSeven = () => {
  const image = [
    { image: "/carouselimage1.png" },
    { image: "/carouselimage2.png" },
    { image: "/carouselimage3.png" },
    { image: "/carouselimag4.png" },
    { image: "/carouselimage5.png" },
  ];
  return (
    <>
      <div className="bg-[#ffc700]">
        <div className="px-[10%] py-[4%]">
          <div className="flex flex-col items-center">
            <div>
              <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 text-white font-semibold bg-[#0083ff] py-1.5 text-sm px-3">
                  <hr className="bg-[#0083ff] w-2 h-1" />
                  <span>Case Studies</span>
                  <hr className="bg-[#0083ff] w-2 h-1" />
                </span>

                <h1 className="text-3xl mt-3 mb-3 text-[#2D3958] font-bold leading-[45px]">
                  Best Work Showcase
                </h1>
              </div>
              <div className="w-[90vw] md:w-[41vw] text-[#393939] text-sm text-center capitalize mb-4 font-semibold">
                <p className="text-center w-full">
                  Driven by our passion for the industry, and our team's, Arabia
                  Talents have created some of the most engaging influencer
                  campaigns in gaming, sports, technology and more.
                </p>
              </div>
            </div>
            <CarouselSize image={image} />
            <div className="flex justify-center mt-5">
              <img src="/carouseldot.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
