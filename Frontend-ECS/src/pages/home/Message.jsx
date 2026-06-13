import React, { useState } from "react";
import "./Message.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react"; // Import an elegant decorative icon

const Message = () => {
  const slides = [
    {
      image: "https://i.postimg.cc/QNTSqLNf/IMG-20250902-WA0034.jpg",
      name: "Dr. Wasim Arif",
      content: 'In the spirit of continuous learning, we extend a warm welcome to all the students in our beloved institution. The alumni of this esteemed establishment have already made us proud of their achievements since graduation. I have every confidence that, just like our accomplished graduates, our present batches will have a memorable and successful journey here at NIT Silchar. So, prepare yourself to be a valuable asset, the future eagerly anticipates Three things you should acquire as a student: Self-Motivation, Self-Regulation and Self-Confidence. Maintain a sense of joy and keep radiating your brilliance! Life is beautiful, so embrace it.',
      designation: "FACULTY ADVISOR, ECS",
    },
    {
      image: "https://i.postimg.cc/nc14dpyG/IMG-20250902-WA0035.jpg",
      name: "Dr. Koushik Guha",
      content: "Dear aspiring engineers, It is with great pleasure that I extend a warm welcome to you as the HOD of the Electronics and Communication Engineering Department. Our department is a thriving hub of innovation and exploration dedicated to nurturing the talents of tomorrow's technological leaders. I have full confidence that together we will push our boundaries, create solutions and excel in all respects inspiring a change among all. The future of Electronics and Communication Engineering rests in your capable hands, and I am excited to see the innovations and breakthroughs you will bring to the world. Your future begins here!",
      designation: "HOD, ECE DEPARTMENT",
    },
    {
      image: "https://i.postimg.cc/GtCpwt7p/Background-Eraser-20250903-025029873.png",
      name: "Chetan Singh Verma",
      content: "ECS has always stood at the heart of our branch’s progress, and as its President, I see it as our duty to push these boundaries even further. We are here to build more than just engineers — we are here to create leaders, innovators, and team players. Every event, every initiative, and every effort at ECS is aimed at preparing our students to excel beyond the classroom. I urge each of you to step forward, make your mark, and help us carry this society to greater heights.",
      designation: "PRESIDENT, ECS",
    },
    {
      image: "https://i.postimg.cc/rFJ4QNDP/IMG-20241026-WA0003-1.jpg",
      name: "Jagatjyoti Deb",
      content: "ECS is more than a society — it’s a platform where ideas turn into action and students grow together as a community. As Vice President, I have seen firsthand how every event, workshop, and initiative creates opportunities to learn, lead, and collaborate. This is your space to explore, innovate, and make memories while building real skills. Let’s continue to raise the bar and ensure ECS remains a place where every student finds their spark.",
      designation: "VICE PRESIDENT, ECS",
    },
    {
      image: "https://i.postimg.cc/1Xnp4S8L/IMG-20241026-WA0003-1.jpg",
      name: "Koustubh Mishra",
      content: "As the General Secretary of ECS, I feel privileged to represent a society that thrives on innovation, teamwork, and excellence in the domain of electronics and communication. Our aim is to nurture a dynamic community where creativity is encouraged, knowledge is exchanged, and every member gets the opportunity to grow to their fullest potential. Together, we aspire to uplift our society by welcoming fresh challenges, driving forward with technological progress, and leaving a meaningful impact both on our campus and beyond. ECE forever!!!",
      designation: "GENERAL SECRETARY, ECS",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 md:py-8 flex flex-col justify-center min-h-[85vh]">
      
      {/* SECTION HEADER IMAGE WITH ACCENTUATED GAP */}
      <div className="flex justify-center mb-12 md:mb-16 w-full">
        <img 
          src="https://i.postimg.cc/hGJ1bPRD/Group-15.png" 
          alt="Messages Header" 
          className="h-11 sm:h-14 md:h-16 object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]" 
        />
      </div>

      {/* SWIPER CONTAINER DECORATED AS A PREMIUM DARK CARD */}
      <div className="relative bg-gradient-to-br from-[#0c0414]/70 to-[#030008]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-12 border border-rose-500/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden group w-full">
        
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-1.5 rounded-full transition-all duration-300 bg-slate-700 dynamic-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 6000, // 6 seconds for better user scanning index comfort
            disableOnInteraction: false,
          }}
          loop
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* FIXED HEIGHT SYSTEM BASED ON BREAKPOINTS PREVENTS SHIFT ALIGNMENT FLICKER */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8 items-center min-h-[460px] sm:min-h-[380px] md:min-h-[310px] lg:min-h-[260px] py-2">
                
                {/* 1. PROFILE IMAGE LAYER (Spans 4/12 width) */}
                <div className="w-full md:col-span-4 flex flex-col items-center justify-center relative flex-shrink-0">
                  <div className="relative p-1.5 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 aspect-square rounded-full bg-gradient-to-b from-rose-500 via-purple-500 to-transparent shadow-[0_0_30px_rgba(244,63,94,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full aspect-square object-cover rounded-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* 2. TEXT CONTENT LAYER (Spans 8/12 width) */}
                <div className="w-full md:col-span-8 flex flex-col justify-between h-full space-y-6 relative px-1 sm:px-3 md:px-4 text-center md:text-left">
                  {/* Big Decorative Quotation Mark */}
                  <Quote className="absolute -top-4 left-0 md:-left-2 w-12 h-12 text-rose-500/10 stroke-[1.5] pointer-events-none hidden sm:block" />
                  
                  <div className="space-y-3 flex-grow flex items-center">
                    {/* Message Body */}
                    <p className="text-slate-300 text-sm sm:text-[15px] md:text-base leading-relaxed tracking-wide text-justify font-normal pl-0 md:pl-4 border-l-0 md:border-l-2 border-rose-500/30">
                      {slide.content}
                    </p>
                  </div>

                  {/* Clean Signature Panel */}
                  <div className="pt-4 text-center md:text-right border-t border-slate-800/60 w-full flex-shrink-0">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
                      {slide.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 mt-1 uppercase">
                      {slide.designation}
                    </p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 3. OPTIMIZED SLIDER INTERFACE CONTROLS */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-900">
          {/* Custom Sleek Navigation Buttons */}
          <button className="custom-prev px-3.5 py-1.5 rounded-xl border border-slate-800/80 bg-slate-950/40 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition duration-300 text-xs sm:text-sm font-semibold tracking-wide">
            ← Prev
          </button>
          
          {/* Pagination Pills Layout Container */}
          <div className="custom-pagination flex gap-1.5 items-center justify-center"></div>

          <button className="custom-next px-3.5 py-1.5 rounded-xl border border-slate-800/80 bg-slate-950/40 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition duration-300 text-xs sm:text-sm font-semibold tracking-wide">
            Next →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Message;