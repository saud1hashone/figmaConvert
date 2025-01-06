import Card from "../card/Card";

const SectionThree = () => {
  const cardData = [
    {
      number: "01",
      title: "Influencer Marketing",
      description:
        "We have the right knowledge, tools, and expertise to help your company succeed in influencer search techniques and also marketing campaigns.",
    },
    {
      number: "02",
      title: "Talent Management",
      description:
        "We can help turn your dreams into a long-term, full-time career, filled with endless opportunities that will provide you with a lucrative income and stability.",
    },
    {
      number: "03",
      title: "Celebrity Collaboration",
      description:
        "We are an authentic Celebrity Influencer Marketing agency specialise in matching brands with the Arab world's top influencers and celebrities.",
    },
  ];

  return (
    <div className="bg-hbgblue py-6 md:py-10">
      <div className="flex">
        <div className="hidden md:block">
          <img src="/Dots.png" alt="Decorative dots" />
        </div>

        <div className="content px-[5%] md:px-[22%] items-center justify-center flex flex-col">
          <div className="flex items-center gap-1 text-blue-400 font-semibold bg-blue-200 py-1.5 text-sm px-3 w-25">
            <hr className="bg-blue-400 w-2 h-1" />
            <span>What we do</span>
            <hr className="bg-blue-400 w-2 h-1" />
          </div>

          <h1 className="text-2xl md:text-3xl mt-3 mb-3 text-[#2D3958] font-bold leading-[35px] md:leading-[45px] w-full md:w-[40vw] text-center">
            We're Offering Diverse Influencer Services
          </h1>

          <p className="text-[#6e7Ca0] w-full md:w-[40vw] text-center leading-[20px] px-4 md:px-0">
            Arabia Talents is an agency that offers 360° marketing and operation
            services to brands seeking to increase their presence in the Arab
            world.
          </p>
        </div>
      </div>

      <div className="px-[5%] md:px-[10%]">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 mt-7 mb-12">
          {cardData.map((card, index) => (
            <Card
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
