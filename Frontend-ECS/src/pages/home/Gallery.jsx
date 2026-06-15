import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageCarousel = () => {
  const [buttonImage, setButtonImage] = useState(
    "https://i.postimg.cc/mgjNYYv7/Component-2.png"
  );

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setButtonImage(
      "https://i.postimg.cc/Px3Qjwss/Group-48096106.png"
    );
  };

  const handleMouseLeave = () => {
    setButtonImage(
      "https://i.postimg.cc/mgjNYYv7/Component-2.png"
    );
  };

  const handleClickButton = () => {
    window.scrollTo(0, 0);
    navigate("/photogallery");
  };

  const images = [
    "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg",
    "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg",
    "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg",
    "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg",
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-transparent">

      {/* HEADER */}
      <div className="galImg relative w-full max-w-5xl mx-auto px-4 flex justify-center items-center mb-14">
        <img
          src="https://i.postimg.cc/Y9sWX8Rm/Group-48096102.png"
          alt="Gallery"
          className="h-10 sm:h-12 md:h-16 object-contain sm:drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        />
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {/* BIG IMAGE */}
          <div className="col-span-2 row-span-2 h-[260px] md:h-[520px] overflow-hidden rounded-[35px] border border-emerald-500/20 bg-[#02120a] group relative hover:-translate-y-2 transition-all duration-500 shadow-[0_0_35px_rgba(16,185,129,0.08)] hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]">

            <img
              src={images[0]}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          </div>

          {/* IMAGE 2 */}
          <div className="h-[125px] md:h-[250px] overflow-hidden rounded-[28px] border border-cyan-500/20 bg-[#02120a] group relative hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]">

            <img
              src={images[1]}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

          </div>

          {/* IMAGE 3 */}
          <div className="h-[125px] md:h-[250px] overflow-hidden rounded-[28px] border border-cyan-500/20 bg-[#02120a] group relative hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]">

            <img
              src={images[2]}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

          </div>

          {/* IMAGE 4 */}
          <div className="h-[125px] md:h-[250px] overflow-hidden rounded-[28px] border border-purple-500/20 bg-[#02120a] group relative hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(168,85,247,0.08)] hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]">

            <img
              src={images[3]}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

          </div>

          {/* IMAGE 5 */}
          <div className="col-span-1 md:col-span-2 h-[125px] md:h-[250px] overflow-hidden rounded-[28px] border border-emerald-500/20 bg-[#02120a] group relative hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(16,185,129,0.08)] hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]">

            <img
              src={images[4]}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />

          </div>

        </div>

        {/* KEEPING YOUR BUTTON */}
        <div className="mt-10 mb-4 flex justify-center">

          <button
            className="flex justify-center items-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer max-w-[240px] sm:max-w-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickButton}
          >
            <img
              src={buttonImage}
              alt="Navigate to Full Gallery"
              className="w-full h-auto object-contain sm:drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ImageCarousel;