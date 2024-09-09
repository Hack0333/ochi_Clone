import React from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import img from "/assets/ochi.jpg";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="w-full h-screen pt-1 font-['Founders_Grotesk'] bg-zinc-900">
      <div className="heroText mt-40 px-14">
        {["we create", "eye-opening", "presentation"].map((text, i) => (
          <div className="masker " key={i}>
            <div className="w-fit flex justify-center items-center  overflow-hidden">
              {i === 1 && (
                <motion.div
                  initial={{ width:0}}
                  animate={{width:"8vw"}}
                  transition={{ease:[0.76, 0, 0.24, 1],duration: 1}}
                  className="w-[8vw] h-[5vw] mr-2 mt-4 bg-white bg-[url('/assets/ochi.jpg')] bg-cover rounded-md"
                >
                </motion.div>
              )}
              <h1 className=" uppercase text-[7rem] font-[450] leading-[6vw] tracking-tighter">
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
          <p className="text-lg font-thin pt-4 tracking-tight " key={i}>
            {t}
          </p>
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
