const SectionEight = () => {
  return (
    <div className="px-[5%] md:px-[10%] pt-[4%]">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="part1 flex flex-col justify-center items-center">
          <div className="subpart w-full md:w-[65%] flex gap-3 flex-col text-center md:text-left">
            <h1 className="text-2xl md:text-3xl capitalize text-[#2d3958] font-bold">
              We generated 3x more engagement in 2022
            </h1>
            <p className="text-[#6e7ca0] capitalize text-sm md:text-base">
              Through strategy, planning, and marketing we built strong
              relationships and cooperation between brands and talents which
              led to increasing brand awareness, and social media engagement
              for both sides.
            </p>
          </div>
        </div>
        <div className="part2">
          <div className="w-full md:w-[600px] h-[200px] md:h-[290px]">
            <img src="/mixboxes.png" className="w-full h-full object-contain" alt="Engagement statistics" />
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="flex flex-col justify-center items-center py-[5%]">
          <span className="flex items-center gap-1 text-[#ff7342] bg-[#fff1ed] text-sm px-2 py-2">
            -Clients and Partners-
          </span>
          <h1 className="text-xl md:text-2xl py-4 text-[#2d3958] font-bold capitalize text-center">
            Thank you for supporting our talents
          </h1>
          <div className="images grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  md:gap-2 py-5">
            <div className="w-[120px] md:w-[150px] h-[50px] md:h-[60px]">
              <img src="/img81.png" className="w-full h-full object-contain" alt="Client logo 1" />
            </div>
            <div className="w-[120px] md:w-[160px] h-[50px] md:h-[60px]">
              <img src="/img82.png" className="w-full h-full object-contain" alt="Client logo 2" />
            </div>
            <div className="w-[120px] md:w-[160px] h-[50px] md:h-[60px]">
              <img src="/img83.png" className="w-full h-full object-contain" alt="Client logo 3" />
            </div>
            <div className="w-[120px] md:w-[160px] h-[50px] md:h-[60px]">
              <img src="/img84.png" className="w-full h-full object-contain" alt="Client logo 4" />
            </div>
            <div className="w-[120px] md:w-[160px] h-[50px] md:h-[60px]">
              <img src="/img85.png" className="w-full h-full object-contain" alt="Client logo 5" />
            </div>
            <div className="w-[120px] md:w-[160px] h-[50px] md:h-[60px]">
              <img src="/img86.png" className="w-full h-full object-contain" alt="Client logo 6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
