import React, { useState } from "react";
import "./view.css";
function View({ bgi }) {
  const imgg = `images/viewers-${bgi}.png`;
  const video = `videos/${bgi}.mp4`;
  console.log(video);
  const [hover, setIsHover] = useState(false);

  return (
    <div
      className="mt-2 sm:mt-0 ml-4 flex-wrap  relative fit-cover bg-[#2A2C37] overflow-hidden border-2  border-[#3E404C] shadow-lg shadow-[#08080D] h-[fit] w-[85%] sm:w-[220px] cursor-pointer hover:scale-110 rounded-lg"
      style={{ backgroundImage: `uri(${bgi})` }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={imgg} className="z-50" />
      <div
        className={`rounded-md    border-gray-800  ${
          hover ? "opacity-100 duration-[6000ms]" : "opacity-0"
        } `}
      >
        <video
          className="absolute  top-0 -z-10 w-[100%] sm:h-[120px] sm:w-[300px] rounded-lg"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default View;
