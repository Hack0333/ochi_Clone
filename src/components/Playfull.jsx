import React, { useEffect, useRef, useState } from "react";
import video from '/assets/Main-HQ-1.mp4'


const Playfull = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [rotate , setRotate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  // Update mouse position on mouse move
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

  // Update eye pupil position based on mouse position
  useEffect(() => {
    const updateEyePosition = () => {
      // Get the center of the eye
      let eyeCenterX = window.innerWidth / 2;
      let eyeCenterY = window.innerHeight / 2;

      // Calculate the direction vector
      let deltaX = mousePosition.x - eyeCenterX;
      let deltaY = mousePosition.y - eyeCenterY;
      let angle = Math.atan2(deltaY, deltaX);
      // Convert radians to degrees
      const rotateAngle = angle * (180 / Math.PI);

      // Adjust rotation by 90 degrees if needed (depends on the initial rotation of the line)
      const adjustedRotateAngle = rotateAngle - 180;
      setRotate(adjustedRotateAngle)
      // Update the pupil position
      const distance = Math.min(Math.hypot(deltaX, deltaY), 10); // Limit pupil movement
      setEyePosition({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };
    
    updateEyePosition();
  }, [mousePosition]);

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
      <div className="relative w-full h-full  bg-center bg-cover bg-ochibg">
        <div className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-9">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full"
               style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase font-thin">Play</h1>
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 "
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
              >
                
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
          <div className="relative w-2/3 h-2/3 bg-black rounded-full"
               style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase font-thin">Play</h1>
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
                 style={{
                  transform:`translate(-50%,-50%) rotate(${rotate}deg)`
                }}
              >
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playfull;
