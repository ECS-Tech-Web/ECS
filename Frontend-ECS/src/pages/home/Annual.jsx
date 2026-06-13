import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Annual = () => {
  const uniqueData = [
    {
      title: "ECE Orientation",
      description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication. The session offer insights into the branch’s vast opportunities, innovative projects, and the guidance available to help students excel in their journey.",
      image: "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    {
      title: "EC:ArQ",
      description: "For the first time, ECS presented its inaugural module at Tecnoesis 2024—inspired by the epic journey of Interstellar. ARDUINO-QUEST was a space-themed challenge in which teams explore, innovate, and conquer interstellar challenges using Arduino.",
      image: "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities for students to bond with peers and seniors. Newcomer batches showcase their talent to crown the title of Mr. Utkrishta and Miss. Utkrishta.",
      image: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre - Annual Magazine",
      description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication. It showcases insightful articles, groundbreaking projects, and achievements of students and faculty.",
      image: "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description: "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements, cherishes memories, and bids them an emotional goodbye as they step into a new phase of life.",
      image: "https://i.postimg.cc/z3YLhX8R/IMG-20250903-WA0011.jpg",
    },
  ];

  // Dynamically calculate the middle index so it stays centered even if you add more events later
  const middleIndex = Math.floor(uniqueData.length / 2);

  return (
    <div className="w-full py-6 overflow-hidden bg-transparent">
      
      {/* HEADER COMPONENT */}
      <div className="relative w-full max-w-5xl mx-auto px-4 flex justify-center items-center mb-12">
        <div className="text-center relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl font-black text-cyan-500/5 tracking-[0.2em] uppercase select-none whitespace-nowrap">
            ANNUAL ATTRACTIONS
          </span>
          <h2 className="relative z-10 text-2xl sm:text-4xl font-extrabold tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Annual Attractions
          </h2>
        </div>
      </div>

      {/* SWIPER CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-2 relative min-h-[520px]">
        
        {/* Custom Matrix Cyan Navigation Elements */}
        <button className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-cyan-500/30 bg-black/60 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 hover:text-white transition-all hidden md:flex">
          ←
        </button>
        <button className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-cyan-500/30 bg-black/60 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 hover:text-white transition-all hidden md:flex">
          →
        </button>

        <Swiper
          initialSlide={middleIndex} // 🚀 CENTER INITIALIZATION FIX: Starts directly on index 2 ("Utkrishta")
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.8 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          loop={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false, 
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="w-full !pb-14"
        >
          {uniqueData.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center will-change-transform">
              
              {/* Card Container */}
              <div className="w-full max-w-[360px] min-h-[490px] flex flex-col justify-between p-5 bg-[#010c12]/95 backdrop-blur-sm rounded-2xl border border-cyan-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 group hover:border-cyan-400/60">
                
                <div>
                  {/* Card Image */}
                  <div
                    className="h-44 w-full bg-cover bg-center rounded-xl relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <div className="absolute inset-0 border border-cyan-400/20 rounded-xl pointer-events-none group-hover:border-cyan-400/40 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010c12] via-transparent to-transparent opacity-40" />
                  </div>
                  
                  {/* Text Panel */}
                  <div className="mt-5 space-y-3">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-[13px] sm:text-[14px] leading-relaxed text-justify font-light opacity-90 line-clamp-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Decor */}
                <div className="w-full pt-4 flex items-center justify-between opacity-40">
                  <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-cyan-500" />
                  <span className="text-[10px] tracking-widest text-cyan-400 font-mono uppercase">ECS</span>
                  <div className="h-[1px] w-1/3 bg-gradient-to-l from-transparent to-cyan-500" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Annual;