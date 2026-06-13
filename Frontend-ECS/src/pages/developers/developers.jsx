import React from "react";
import Card from "../cards/Card";
import "./developers.css";
import cardsData from "./developerData"; 

export default function Developers() {
  // Destructure cleanly: first member is the Lead, remaining are Core Devs
  const [seniorDeveloper, ...juniorDevelopers] = cardsData;

  return (
    /* 🌌 CRISP CYBERNETIC DOT BACKGROUND (No Edge Blur) */
    <div className="relative min-h-screen w-full bg-[#01080b] bg-[radial-gradient(#059669_0.7px,transparent_0.7px)] [background-size:32px_32px] overflow-hidden pb-20">
      
      {/* Background Ambience Spotlights */}
      <div className="absolute top-[20%] left-[15%] w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[15%] right-[10%] w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      
      {/* CORE WRAPPER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-16">
        
        {/* MAIN PAGE HEADER GRAPHIC */}
        <div className="Title flex justify-center items-center pt-14 px-4">
          <img
            src="https://i.postimg.cc/N08H4tBS/Group-15-1.png"
            alt="Developers Header Graphic"
            className="h-12 sm:h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]"
          />
        </div>

        {/* 1. SENIOR / LEAD DEVELOPER SECTION */}
        {seniorDeveloper && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-emerald-500/30" />
              <h2 className="mx-6 text-xl sm:text-2xl font-black tracking-[0.25em] text-emerald-400 uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                Lead Architect
              </h2>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-emerald-500/30" />
            </div>

            <div className="flex items-center justify-center p-4">
              <Card
                title={seniorDeveloper.title}
                description={seniorDeveloper.description}
                imageUrl={seniorDeveloper.imageUrl}
                instagram={seniorDeveloper.instagram}  
                facebook={seniorDeveloper.facebook}   
                linkedin={seniorDeveloper.linkedin}
                theme="emerald" // 🚀 Unique dynamic theme variant
              />
            </div>
          </div>
        )}

        {/* 2. JUNIOR / CORE DEVELOPERS SECTION */}
        {juniorDevelopers.length > 0 && (
          <div className="space-y-8 pt-6">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-amber-500/30" />
              <h2 className="mx-6 text-xl sm:text-2xl font-black tracking-[0.25em] text-amber-400 uppercase drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                Development Team
              </h2>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-amber-500/30" />
            </div>

            {/* Seamless Auto-wrapping Layout Engine */}
            <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 py-4">
              {juniorDevelopers.map((card, index) => (
                <Card
                  key={card.id || index}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  instagram={card.instagram}  
                  facebook={card.facebook}   
                  linkedin={card.linkedin}
                  theme="amber" // 🚀 Unique dynamic theme variant
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}