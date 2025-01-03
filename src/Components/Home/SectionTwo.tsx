import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-auto px-[5%] md:pl-[10%] md:pr-[9%] pt-[7%] pb-[5%]">
        <img src="/allpeople.png" alt="" className="w-full h-auto" />
      </div>

      <div className="flex flex-1 flex-col px-[5%] md:px-0">
        <div className="flex items-center gap-1 text-red-400 font-semibold bg-red-100 text-sm py-1 w-40">
          <hr className="bg-red-400 w-2 h-1" />
          <span>About our Company</span>
          <hr className="bg-red-400 w-2 h-1" />
        </div>

        <h1 className="text-2xl md:text-4xl mt-6 mb-6 text-[#2D3958] font-bold leading-[35px] md:leading-[45px] w-full md:w-[40vw]">
          MENA's Leading ROI-focused Influencer Marketing Agency.
        </h1>

        <p className="text-[#6e7Ca0] w-full md:w-[35vw] leading-[26px] text-sm md:text-base">
          Our group of marketing experts will guide your company with clear
          direction and actionable steps to achieve its goals and boost your
          business's growth in the region.
          <br />
          This is made possible by identifying KPIs, goals, and other
          requirements that might have slipped under your radar. We follow by
          building you a custom marketing campaign meant to improve brand
          reputation, increase brand presence and optimize brand positioning
          thanks to our growing network of influencers.
          <br />
          All these campaigns are tracked and reported in an honest and
          transparent way that answers all of your burning inquiries.
        </p>

        <div className="flex items-center py-5 gap-2">
          <button className="font-semibold text-sm md:text-base text-[#383a3e]">
            View our Services
          </button>
          <Image width={8} height={8} src="/playblack.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
