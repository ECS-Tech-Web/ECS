import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules"; 
import { useNavigate } from "react-router-dom";

const ImageCarousel = () => {
  const [buttonImage, setButtonImage] = useState(
    "https://i.postimg.cc/mgjNYYv7/Component-2.png"
  );
  
  const handleMouseEnter = () => {
    setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
  };
  
  const handleMouseLeave = () => {
    setButtonImage("https://i.postimg.cc/mgjNYYv7/Component-2.png");
  };

  const navigate = useNavigate();
  
  const handleClickButton = () => {
    window.scrollTo(0, 0);
    navigate('/photogallery');
  };

  const images = [
    "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg",
    "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg",
    "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg",
    "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg",
  ];

  // 🚀 Dynamically calculate the middle index (Index 2)
  const middleIndex = Math.floor(images.length / 2);

  return (
    <div className="w-full py-6 overflow-hidden bg-transparent">
      
      {/* HEADER TITLE GRAPHIC */}
      <div className="galImg relative w-full max-w-5xl mx-auto px-4 flex justify-center items-center mb-12">
        <img 
          src="https://i.postimg.cc/Y9sWX8Rm/Group-48096102.png" 
          alt="Gallery Title Header" 
          className="h-10 sm:h-12 md:h-16 object-contain filter drop-shadow-[0_0_12px_rgba(16,185,129,0.3)]"
        />
      </div>

      {/* RECONSTRUCTED RELATIVE VIEWPORT WRAPPER */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-12 relative flex flex-col items-center">
        
        {/* SWIPER CONTAINER */}
        <div className="w-full relative z-10 flex items-center justify-center">
          <Swiper
            initialSlide={middleIndex} // 🚀 CENTER INITIALIZATION: Starts on the middle photo instantly
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.3}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.2 },
            }}
            loop={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80, 
              modifier: 1,
              slideShadows: false, 
            }}
            modules={[EffectCoverflow, Navigation]} 
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            className="w-full !pb-8"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center will-change-transform">
                <div className="p-2 bg-[#020d07]/80 backdrop-blur-sm rounded-[32px] sm:rounded-[40px] md:rounded-[50px] border border-emerald-500/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] group">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-[72vw] h-[48vw] sm:w-[50vw] sm:h-[33vw] lg:w-[32vw] lg:h-[22vw] rounded-[26px] sm:rounded-[34px] md:rounded-[42px] object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ABSOLUTE POSITIONED ARROWS */}
          <button className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 active:scale-95 transition-transform hidden sm:block">
            <img src="https://i.postimg.cc/zvKhPnyz/Group-48096101.png" alt="Previous" className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
          </button>
          <button className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 active:scale-95 transition-transform hidden sm:block">
            <img src="https://i.postimg.cc/gcXHZhkB/Group-48096103.png" alt="Next" className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
          </button>
        </div>

        {/* GALLERY LINK ACTION BUTTON */}
        <div className="mt-6 mb-4 relative z-20">
          <button
            className="flex justify-center items-center transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer max-w-[240px] sm:max-w-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickButton}
          >
            <img 
              src={buttonImage} 
              alt="Navigate to Full Gallery" 
              className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]" 
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImageCarousel;