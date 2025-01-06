"use client";
import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const onClick = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="flex items-center justify-center px-[5%] py-[4%] ">
        <div
          className={`flex items-center bg-white gap-2 w-10 py-1 px-1 rounded-3xl`}
        >
          <div
            onClick={onClick}
            className={`${
              isOn
                ? "bg-blue-600 transition-colors duration-400"
                : "bg-transparent"
            } w-3 h-3 rounded-full`}
          ></div>
          <div
            onClick={onClick}
            className={`${
              isOn
                ? "bg-transparent "
                : "bg-blue-600  transition-colors duration-400"
            } w-3 h-3 rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
