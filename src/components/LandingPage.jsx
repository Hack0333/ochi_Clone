import React from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import img from '/assets/ochi.jpg'

const LandingPage = () => {
  return (
    <section className="w-full h-screen pt-1 font-['Founders_Grotesk'] bg-zinc-900">
      <div className="heroText mt-40 px-14">
        {["we create", "eye-opening", "presentation"].map((text, i) => (
          <div className="masker " key={i}>
            <div className="w-fit flex justify-center items-center">
              {i === 1 && (
                <div className="w-[8vw] h-[6vw] mr-3 mt-1">
                  <img src={img} alt=""  className="object-cover mt-3 rounded-[0.7vw] "/>
                </div>
              )}
              <h1
                className=" uppercase text-[7rem] font-[450] leading-[6vw] tracking-tighter"
              >
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-zinc-700 border-t-[0.9px] mt-[14rem] px-14  flex justify-between items-center">
        {[
          "For public and private compaines",
          "From the first pitch to IPO",
        ].map((t, i) => (
          <p className="text-lg font-thin pt-4 tracking-tight " key={i}>{t}</p>
        ))}
        <div className="start flex justify-center items-center gap-2 ">
          <div className="py-1 px-4 mt-3 border-[1.5px] border-zinc-600 text-sm rounded-full uppercase font-thin cursor-pointer">
            start the project
          </div>
          <div className="w-8 h-8 rounded-full border-[1.5px] border-zinc-600 flex justify-center items-center mt-3 cursor-pointer ">
            <HiArrowLongUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
