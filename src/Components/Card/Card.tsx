const Card = ({ number, title, description }) => {
  return (
    <div className="p-7 bg-white w-[300px] h-80 border border-gray-200 rounded-md">
      <h1 className="text-3xl font-bold text-[#2D3958] mt-4">{number}</h1>
      <h3 className="text-md font-semibold text-[#2D3958] py-3">{title}</h3>
      <p className="text-[#6e7Ca0] mb-5 text-sm capitalize leading-5 opacity-90">
        {description}
      </p>
      <div className="flex items-center py-2 gap-2">
        <button className="text-sm text-[#2d3958]">Learn More</button>
        <img width={8} height={8} src="/playblack.png" alt="" />
      </div>
    </div>
  );
};

export default Card;
