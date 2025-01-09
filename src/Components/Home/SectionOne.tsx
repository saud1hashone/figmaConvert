import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="main flex flex-col md:flex-row items-center justify-between py-2 px-[3%] md:px-[5%] bg-hbgblue">
      <img src="/left.png" alt="" className="hidden md:block w-[200px] lg:w-[300px] h-auto" />

      <div className="flex flex-col items-center gap-4 md:gap-6 py-2 md:py-8">
        <div className="flex items-center gap-1">
          <hr className="bg-red-500 w-4 h-1 rounded-md" />
          <span className="text-[#6e7ca0]  md:text-center">
            Connecting Brands with Arabic Milinneals
          </span>
          <hr className="bg-red-500 w-4 h-1" />
        </div>
        <h1 className="capitalize font-extrabold text-center leading-[40px] md:leading-[50px] text-3xl md:text-5xl text-[#2D3958]">
          Middle East <br /> influencers & on-air <br /> Talent Agency
        </h1>
        <p className="text-center px-4 max-w-[600px] mt-1 text-sm md:text-base text-[#6e7ca0]">
          Brands can reach their targeted audiences thanks to our managed
          roster team of content creators, Esports talents, and social media
          influencers.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2">
          <div className="flex items-center bg-[#0083ff] rounded px-4 py-2 gap-2 w-full sm:w-auto">
            <button className="text-white rounded text-sm md:text-base">Content Creators</button>
            <Image src="/play.png" alt="play" width={8} height={8} />
          </div>

          <div className="flex items-center bg-white border border-[#2d3958] py-2 px-4 gap-4 rounded-md w-full sm:w-auto">
            <button className="text-[#2d3958] text-sm md:text-base">On Air Talent</button>
            <Image width={8} height={8} src="/playblack.png" alt="" />
          </div>
        </div>
        <Image
          src="/mouse.png"
          width={40}
          alt="mouse"
          height={40}
          className="mt-[2rem] cursor-pointer"
        />
      </div>

      <img src="/right.png" alt="" className="hidden md:block w-[200px] lg:w-[300px] h-auto" />
    </div>
  );
};

export default SectionOne;
