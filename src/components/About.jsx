import React from "react";
import aboutImg from "/assets/ochiabout.jpg";

const About = () => {
  return (
    <div
    // data-scroll 
    // data-scroll-section 
    // data-scroll-section-id="section2"
    // data-scroll-position="start,start"
    // data-scroll-offset="-180%, 10%" 
    // data-scroll-repeat 
    // data-scroll-speed="2" 
    // data-scroll-section-inview // Set scroll speed for parallax effect
      className="w-full min-h-screen bg-[#CDEA67] rounded-t-2xl text-zinc-800 py-1 border top-0"
    >
      <div className="aboutText text-[3.4rem] mt-10 font-light leading-[3rem] px-14 pt-20">
        <h1>Ochi is a strategic presentation agency for forward-</h1>
        <h1>thinking businesses that need to raise funds, sell</h1>
        <h1>products, explain complex ideas, and hire great peo</h1>
        <h1>ple.</h1>
      </div>
      <div className="w-full border-[0.5px] border-zinc-600 mt-14 flex justify-between py-6 pb-28">
        <div className="aboutleft w-1/2 font-light px-14">
          <p>What you can expect:</p>
        </div>
        <div className="aboutright w-1/2 flex justify-between font-light">
          <div className="w-[40%]">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <br />
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-[40%] flex flex-col-reverse">
            <div>
              <p>S:</p>
              <p>Instagram</p>
              <p>Behance</p>
              <p>Facebook</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-14 mt-5 mb-10">
        <div className="ableft">
          <h1 className="font-light text-6xl mb-5">Our approach:</h1>
          <div className="w-[45%] h-14 bg-zinc-800 rounded-full flex justify-center items-center p-5">
            <button className="text-white text-lg font-thin flex items-center gap-5">
              Read More
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
        </div>
        <div className="abright w-[50%] bg-white rounded-xl h-[57vh] overflow-hidden ">
          <img src={aboutImg} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
