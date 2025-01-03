import Image from "next/image";

const SectionSix = () => {
  return (
    <div className="px-[5%] md:px-[10%]">
      <div className="my-12 md:my-28">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
          <div>
            <span className="flex items-center gap-1 text-pink-400 font-semibold bg-pink-100 py-1.5 text-sm px-2 w-fit">
              <hr className="bg-pink-400 w-2 h-1" />
              <span>Channels</span>
              <hr className="bg-pink-400 w-2 h-1" />
            </span>

            <h1 className="text-2xl md:text-3xl mt-3 capitalize mb-3 text-[#2D3958] w-full md:w-[25vw] font-bold leading-[35px] md:leading-[45px]">
              We use a multi-channel social media approach.
            </h1>
          </div>
          <div className="w-full md:w-[33vw] text-[#637ca0]">
            <p>
              With a complementarity between mega and macro-influencers, and a
              strategic target on each platform to hit the right target
              population you wish; <br /> <br /> we can fulfill your social
              media goals and establish a community instead of just taking a
              typical UA approach.
            </p>
          </div>
        </div>
        <div className="py-5">
          <img src="/social.png" className="w-full h-auto" alt="Social media channels" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
