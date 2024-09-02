import React from "react";
import featured01 from '/assets/featured01.png';
import featured02 from '/assets/featured02.png';

const Featured = () => {
  return (
    <section className="w-full py-20">
      <div className="w-full border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-6xl px-14">Featured projects</h1>
      </div>
      <div className="cardsWrapper px-14 mt-10 ">
        <div className="cards w-full flex gap-10">
          <div className="card w-1/2 h-[70vh]">
            <div className="flex items-center gap-2 py-5">
              <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
              <h1 className="whitespace-nowrap uppercase font-thin text-sm">Cardboard spaceship</h1>
            </div>
            <div className=" w-full h-[90%] rounded-xl overflow-hidden ">
              <img src={featured01} alt="featured-01"/>
            </div>
          </div>
          <div className="card w-1/2 h-[70vh]">
            <div className="flex items-center gap-2  py-5">
              <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
              <h1 className="whitespace-nowrap uppercase font-thin text-sm">ah2 and matt2 horn</h1>
            </div>
            <div className=" w-full h-[90%] rounded-xl overflow-hidden">
            <img src={featured02} alt="featured-01" className="object-contain"/>
            </div>
          </div>
        </div>
      </div>

      <div className="cardsWrapper px-14 mt-10 ">
        <div className="cards w-full flex gap-10">
          <div className="card w-1/2 h-[70vh]">
            <div className="flex items-center gap-2 py-5">
              <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
              <h1 className="whitespace-nowrap uppercase font-thin text-sm">Cardboard spaceship</h1>
            </div>
            <div className=" w-full h-[90%] rounded-xl overflow-hidden ">
              <img src={featured01} alt="featured-01"/>
            </div>
          </div>
          <div className="card w-1/2 h-[70vh]">
            <div className="flex items-center gap-2  py-5">
              <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
              <h1 className="whitespace-nowrap uppercase font-thin text-sm">ah2 and matt2 horn</h1>
            </div>
            <div className=" w-full h-[90%] rounded-xl overflow-hidden">
            <img src={featured02} alt="featured-01" className="object-contain"/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-10 mt-12">
        <h1 className="bg-white rounded-full text-black uppercase font-thin text-lg py-2 px-5 flex justify-center items-center gap-5">View all studies
        <div className="w-3 h-3 rounded-full bg-black"></div>
        </h1>
      </div>

      

    </section>
  );
};

export default Featured;
