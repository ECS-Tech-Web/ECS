import React, { useState, useMemo } from "react";
import Card from "../cards/Card";
import "./developers.css";
import cardsData from "./developerData"; 

export default function Developers() {
  const availableBatchYears = ["2026", "2025"];
  const [selectedBatchYear, setSelectedBatchYear] = useState("2026");

  // 1. Filter developers by selected batch year
  const filteredDevelopers = useMemo(() => {
    if (!Array.isArray(cardsData)) return [];
    return cardsData.filter(
      (member) => String(member.batchYear) === String(selectedBatchYear)
    );
  }, [selectedBatchYear]);

  // 2. Destructure lead and core developers from filtered dataset
  const [seniorDeveloper, ...juniorDevelopers] = filteredDevelopers;

  return (
    /* 🌌 CRISP CYBERNETIC DOT BACKGROUND */
    <div className="relative min-h-screen w-full bg-[#01080b] bg-[radial-gradient(#059669_0.7px,transparent_0.7px)] [background-size:32px_32px] overflow-hidden pb-20">
      
      {/* Background Ambience Spotlights */}
      <div className="absolute top-[20%] left-[15%] w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[15%] right-[10%] w-[40rem] h-[40rem] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      
      {/* CORE WRAPPER */}
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12">
        
        {/* MAIN PAGE HEADER GRAPHIC */}
        <div className="Title flex justify-center items-center pt-14 px-4">
          <img
            src="https://i.postimg.cc/N08H4tBS/Group-15-1.png"
            alt="Developers Header Graphic"
            className="h-12 sm:h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]"
          />
        </div>

        {/* --- Dropdown Selector --- */}
        <div className="flex flex-col items-center justify-center gap-2 px-4 relative z-20">
          <label className="text-emerald-400/80 text-xs tracking-widest uppercase font-semibold">
            Select Year
          </label>
          <div className="relative min-w-[220px]">
            <select
              value={selectedBatchYear}
              onChange={(e) => setSelectedBatchYear(e.target.value)}
              className="w-full appearance-none bg-[#031e15] border border-emerald-500/40 text-emerald-300 font-bold tracking-wider py-3 px-5 pr-10 rounded-xl focus:outline-none focus:border-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer text-center"
            >
              {availableBatchYears.map((batchYear) => (
                <option key={batchYear} value={batchYear} className="bg-[#01080b] text-emerald-300">
                  Team {batchYear}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-400">
              ▼
            </div>
          </div>
        </div>

        {/* Content Render Area */}
        {filteredDevelopers.length > 0 ? (
          <div className="space-y-16">
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
                    key={seniorDeveloper.id || "lead"}
                    title={seniorDeveloper.title}
                    description={seniorDeveloper.description}
                    imageUrl={seniorDeveloper.imageUrl}
                    instagram={seniorDeveloper.instagram}  
                    facebook={seniorDeveloper.facebook}   
                    linkedin={seniorDeveloper.linkedin}
                    theme="emerald"
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
                      theme="amber"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-emerald-400/60 text-lg font-medium tracking-wide">
              No developer records found for Team {selectedBatchYear}.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}