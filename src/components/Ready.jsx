import React, { useEffect, useState, useRef } from "react";

const Ready = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef([]);

  useEffect(() => {
    const handleMouse = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  useEffect(() => {
    eyesRef.current.forEach((eye) => {
      if (eye) {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = mousePosition.x - eyeCenterX;
        const deltaY = mousePosition.y - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        const distance = Math.min(Math.hypot(deltaX, deltaY), 10);
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;
        eye.querySelector(
          ".eye-pupil"
        ).style.transform = `translate(${pupilX}px, ${pupilY}px)`;

        // Rotate the line without affecting the dot
        eye.querySelector(".line").style.transform = `rotate(${angle}rad)`;
      }
    });
  }, [mousePosition]);

  return (
    <section className="w-full h-screen bg-[#CDEA67] overflow-hidden relative">
      <div className="uppercase w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-[10rem] tracking-tighter leading-none font-bold text-black">
          Ready
        </h1>
        <h1 className="text-[10rem] tracking-tighter leading-none font-bold text-black">
          to start
        </h1>
        <h1 className="text-[10rem] tracking-tighter leading-none font-bold text-black">
          the project?
        </h1>
        <div className=" eyecontainer w-[27vw] h-[12vw] flex gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="eye w-[12vw] h-[12vw] rounded-full bg-white flex justify-center items-center"
              ref={(el) => (eyesRef.current[i] = el)}
            >
              <div className="eye-pupil relative w-2/3 h-2/3 bg-black rounded-full flex justify-center items-center">
                {/* Rotating Line */}
                <div
                  className="line absolute w-full"
                  style={{
                    transformOrigin: "center center",
                    position: "relative",
                  }}
                >
                  {/* Fixed Dot */}
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
    </section>
  );
};

export default Ready;
