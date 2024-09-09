import { mirrorEasing, motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div 
    data-scroll 
    data-scroll-section 
    // data-scroll-section-id="section1"
    data-scroll-position="end,end"
    // data-scroll-offset="-150%, 0%" 
    // data-scroll-repeat  // Repeat detection when in view
    data-scroll-speed=".5" 
    // data-scroll-section-inview
    className='w-full  bg-[#004d43] py-20 font-["Founders_Grotesk"] font-medium rounded-t-2xl'>
      <div className="border-t-[1px] border-b-[1px] border-zinc-500 w-full uppercase flex whitespace-nowrap pr-10 ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeatType: mirrorEasing, duration: 15 }}
          className="text-[26vw] leading-[17rem] -tracking-[1rem] -mt-6 mb-2 align-top"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeatType: mirrorEasing, duration: 15 }}
          className="text-[26vw] leading-[17rem] -tracking-[1rem] -mt-6 mb-2"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
