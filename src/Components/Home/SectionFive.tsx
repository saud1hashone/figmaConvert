import Image from "next/image";

const SectionFive = () => {
  const stats = [
    { value: "450+", label: "Awesome Talents" },
    { value: "300+", label: "Project Completed" },
    { value: "40 Million", label: "Monthly Impressions" },
    { value: "100 Million", label: "Global Reach" }
  ];

  return (
    <div className="bg-[#f9fafb] px-[5%] md:px-[10%] flex flex-col gap-24 md:gap-40 pb-8 md:pb-16 mb-8 md:mb-12">
      <div className="flex flex-col pt-10 md:pt-20">
        <div className="content px-[5%] md:px-[22%] items-center justify-center flex flex-col pb-5">
          <div className="flex items-center gap-1 text-[#a044ff] font-medium bg-purple-200 py-1.5 text-sm px-3">
            <hr className="bg-[#a044ff]" />
            -
            <span>Our Video</span>
            -
            <hr className="bg-[#a044ff]" />
          </div>

          <h1 className="text-2xl md:text-3xl mt-3 mb-3 text-[#2D3958] font-bold leading-[35px] md:leading-[45px] text-center">
            We Are Ready To Serve You Differently
          </h1>

          <p className="text-[#6e7Ca0] capitalize text-[.8rem] md:text-[.85rem] w-full md:w-[40vw] text-center leading-[20px] px-4 md:px-0">
            Arabia Talents brings to the table unmatched know-how in the gaming,
            esports, and entertainment industries, all backed by the very best
            in integrated marketing services.
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#18212e] flex flex-col justify-end items-center relative text-center m-auto w-full md:w-[55vw] text-white h-[20vh] md:h-[30vh]">
          <div className="absolute rounded-3xl -top-24 md:-top-32 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-600">
              <img
                src="/Overlay.png"
                alt="overlay"
                className="w-[600px] md:w-[700px] h-auto"
              />
            </div>
            <Image
              src="/playvideo.png"
              width={50}
              height={10}
              className="absolute top-16 md:top-20 left-10 md:left-48 w-8 md:w-12"
              alt="Play video button"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-around text-center items-center gap-5 md:gap-10 pb-5 md:px-[10%]">
            {stats.map((curElem, curIndex) =>(
              <div key={curIndex} className="w-[40%] md:w-auto">
                <h1 className="text-xl md:text-3xl">{curElem.value}</h1>
                <p className="text-[.7rem] md:text-[.8rem]">{curElem.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
