import React from 'react';
import "./about.css";

const AboutUs = () => {
  return (
    <>
      {/* 1. HEADER IMAGE LAYER - Increased Bottom Margin for Consistent Spacing */}
      <div className="aboutImg flex justify-center items-center relative h-full w-full z-10 mb-14 md:mb-24">
        <img 
          src="https://i.postimg.cc/7ZpR078Y/Group-48096073.png"  
          alt="About Us Header" 
          className="h-10 sm:h-12 md:h-16 object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]"
        />
      </div>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="relative text-white py-4 px-4 sm:px-8 max-w-5xl mx-auto">
        
        {/* Responsive Grid/Flex container matching the Message layout balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">

          {/* TEXT BLOCK (Spans 7/12 layout columns) */}
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed font-lexend text-justify text-slate-300 font-normal pl-4 border-l-2 border-purple-500/20">
              The Electronics & Communication Society is the branch society which represents the department of ECE. 
              The prime purpose of this society is to make the students familiar with the branch. Besides that, 
              a number of exciting events take place under ECS. Starting from the branch Orientation, several 
              events take place including Utkrishtha, the Freshers', the Spectrum that is the annual flagship event, 
              Spectrum Fit for different indoor and outdoor activities and lastly, Dehleez, the farewell.
            </p>
          </div>

          {/* ECS LOGO CONTAINER (Spans 5/12 layout columns) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            {/* High-Tech Glow Profile Box Container */}
            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 via-slate-900/40 to-blue-500/10 backdrop-blur-md border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] hover:border-purple-500/30 transition-all duration-500 group">
              
              {/* Internal Accent Ring corner flares */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-purple-400 opacity-60" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-400 opacity-60" />
              
              <img 
                src="https://i.postimg.cc/T31YmFKp/ecs-new-logo-1-black-bg-(1)-(1).png" 
                alt="ECS Logo" 
                className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 aspect-square object-contain rounded-xl mix-blend-screen transition-transform duration-500 group-hover:scale-[1.03]" 
              />
            </div>
          </div>

        </div>

        {/* 3. HARDWARE VECTOR DECORATIVE LINES (Refactored Colors to Purple/Blue Theme) */}
        <div className="absolute -top-[60px] -rotate-[140deg] -left-36 h-[2px] w-[40%] bg-gradient-to-r from-purple-500 to-transparent opacity-40 pointer-events-none hidden md:block"></div>
        <div className="absolute top-[40px] rotate-[40deg] -left-[100px] h-[2px] w-[15%] bg-gradient-to-l from-blue-500 to-transparent opacity-40 pointer-events-none hidden md:block"></div>
      </section>
    </>
  );
};

export default AboutUs;