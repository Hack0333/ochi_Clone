import React, { useEffect, useRef, useState } from "react";
import video from '/assets/Main-HQ-1.mp4'


const Playfull = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const playVideo=()=>{
    if(videoRef.current){
      if(isPlaying){
        videoRef.current.pause();
      }else{
        videoRef.current.play()
      }
      setIsPlaying(prev => !prev)
    }
  }

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.left = `${mousePosition.x - 2}px`;
      textRef.current.style.top = `${mousePosition.y -2}px`;
    }
  }, [mousePosition]);

  useEffect(()=>{
    eyesRef.current.forEach((eye) => {
      if(eye){
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height /2;

        const deltaX = mousePosition.x - eyeCenterX;
        const deltaY = mousePosition.y - eyeCenterY;
        const angle = Math.atan2(deltaY,deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY), 10);

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        eye.querySelector(
          ".eye-pupil"
        ).style.transform = `translate(${pupilX}px , ${pupilY}px)`

        eye.querySelector(
          ".line"
        ).style.transform = `rotate(${angle}rad)`

      }
    });
  },[mousePosition])


  return (
    <div className="w-full relative h-screen cursor-pointer overflow-hidden" onClick={playVideo}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
        src={video}
        type="video/mp4"
        muted
      />
      {isPlaying && (
        <h1
          ref={textRef}
          className="pauseVideo absolute z-50 text-white uppercase font-thin bg-zinc-950 rounded-xl p-2 text-xs"
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        >
          Paused
        </h1>
      )}
      <div 
      className="relative w-full h-screen  bg-center bg-cover bg-ochibg">
      <div className=" eyecontainer w-[27vw] h-[12vw] flex gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 is-inview">
          {[...Array(2)].map((_,index) => (
            <div
              key={index}
              className="eye w-[12vw] h-[12vw] rounded-full bg-white flex justify-center items-center"
              ref={(el) => (eyesRef.current[index] = el)}
            >
              <div className="eye-pupil relative w-2/3 h-2/3 bg-black rounded-full flex justify-center items-center">
                <div
                  className="line absolute w-full"
                  style={{
                    transformOrigin: "center center",
                    position: "relative",
                  }}
                >
                  <div
                    className="dot absolute w-4 h-4 bg-white rounded-full"
                    style={{ top: "-15px", right: "0" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playfull;
