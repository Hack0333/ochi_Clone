import React from "react";
import logo1 from "/assets/ochipng.svg";
import logo2 from "/assets/logo002.svg";
import logo3 from "/assets/logo003.png";
const Card = () => {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-14">
      <div className="w-1/2 h-[27vw]">
        <div className="card w-full h-full relative bg-[#004D43] rounded-lg flex justify-center items-center">
          <img src={logo1} alt="logo1" />
          <button className="absolute py-1 px-3 left-5 bottom-5 rounded-full border-[1px] border-[#CDEA67] text-[#CDEA67]">&copy;2019-2022</button>
        </div>
      </div>
      <div className="w-1/2 h-[27vw] flex gap-5">
        <div className="card w-1/2 h-full rounded-lg relative bg-[#77eadc] flex justify-center items-center">
          <img src={logo2} alt="logo2" />
          <button className="absolute py-1 px-3 left-5 bottom-5 rounded-full border-[1px] border-[#303228] text-[#303228]">2019-2022</button>
        </div>
        <div className="card w-1/2 h-full rounded-lg relative bg-[#77eadc] flex justify-center items-center">
          <img src={logo3} alt="logo3" />
          <button className="absolute py-1 px-3 left-5 bottom-5 rounded-full border-[1px] border-[#303228] text-[#303228]">2019-2022</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
