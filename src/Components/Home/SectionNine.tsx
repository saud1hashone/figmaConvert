import Image from "next/image";
import React from "react";

const SectionNine = () => {
  return (
    <>
      <div className="main bg-[#f9fafb]">
        <div className="px-[10%] py-[5%] flex flex-col justify-center text-center items-center w-[100%] md:w-[60%] mx-auto">
          <h1 className="text-center text-2xl text-[#2d3958] font-bold  capitalize">
            We've helped brands of all kinds and businesses of every size grow
            their online presense
          </h1>
          <p className="py-2 capitalize text-[#6e7ca0] font-medium">
            Are you ready to start your project? Contact us today and get
            started!
          </p>
          <span className="bg-[#0083ff] rounded-md px-4 py-2 mt-4 font-bold">
            <button className="text-white cursor-pointer flex items-center gap-2">
              Lets Talk
              <Image src="/play.png" alt="play" width={8} height={8} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionNine;
