const SectionFour = () => {
  return (
    <div className="px-[5%] md:px-[20%] mb-10 md:mb-20">
      <div className="flex flex-col pt-10 md:pt-20">
        <div className="content px-[5%] md:px-[22%] items-center justify-center flex flex-col pb-5">
          <span className="flex items-center gap-1 text-[#29ccb1] font-semibold bg-[#eafaf8] py-1.5 text-sm px-3">
            <hr className="bg-[#29ccb1] w-2 h-1" />
            <span>Our Rosters</span>
            <hr className="bg-[#29ccb1] w-2 h-1" />
          </span>

          <h1 className="text-2xl md:text-3xl mt-3 mb-3 text-[#2D3958] font-bold leading-[35px] md:leading-[45px] text-center">
            Discover Our Talents
          </h1>

          <p className="text-[#6e7Ca0] capitalize text-[.8rem] font-medium w-full md:w-[40vw] text-center leading-[20px] px-4 md:px-0">
            We do manage an exclusive roster of talent, from content creadtors
            and social media influencers to Esports commentators, and even
            hosts. We work with a plethora of great talents.
          </p>
        </div>

        <div className="container flex flex-col md:flex-row gap-5 md:gap-3 px-4 md:px-0">
          <div className="box w-full md:w-[35vw] h-auto md:h-[25vh] flex flex-col md:flex-row border border-gray-300 rounded-lg p-5 items-center relative">
            <div>
              <img
                src="/left2.png"
                className="static md:absolute md:-top-4 md:-left-1 w-32 h-32 md:w-[150px] md:h-[190px]"
                alt="Left broadcaster"
              />
            </div>
            <div className="pl-0 md:pl-32 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="text-xl text-[#2d3958] mb-4 font-bold">
                Arab Esports Broadcasters
              </h1>
              <p className="w-full md:w-[20vw] text-[#6e7ca0] pl-1">
                Experienced play-by-play casters of Arabia Talents will level
                up your sports events.
              </p>
              <div className="flex items-center justify-center md:justify-start pl-1 py-2 gap-2">
                <button className="text-sm text-[#0083ff]">
                  Meet the Faces
                </button>
                <img width={8} height={8} src="/playblack.png" alt="Play icon" />
              </div>
            </div>
          </div>

          <div className="box w-full md:w-[35vw] h-auto md:h-[25vh] border flex flex-col md:flex-row relative border-gray-300 rounded-lg p-5">
            <div className="order-1 md:order-2">
              <img
                src="/right2.png"
                className="static md:absolute md:-top-6 md:-right-1 w-42 h-32 md:w-[150px] md:h-[190px] mx-auto md:mx-0"
                alt="Right broadcaster"
              />
            </div>
            <div className="order-2 md:order-1 pr-0 md:pr-24 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="text-xl text-[#2d3958] mb-4 font-bold">
                Arab Esports Broadcasters
              </h1>
              <p className="w-full md:w-[20vw] text-[#6e7ca0] pl-1">
                Experienced play-by-play casters of Arabia Talents will now
                level up your sports events level.
              </p>
              <div className="flex items-center justify-center md:justify-start pl-1 py-2 gap-2">
                <button className="text-sm text-[#2d3958]">
                 Discover the List
                </button>
                <img width={8} height={8} src="/playblack.png" alt="Play icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;