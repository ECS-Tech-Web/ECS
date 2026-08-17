import React, { useState, useMemo } from "react";
import Card from "../cards/Card";
import "./members.css";
import teamMembers from "./membersData"; 

export default function Members() {
  // Add or edit manual state options here:
  const availableBatchYears = [ "2026", "2025"];

  // Active dropdown state
  const [selectedBatchYear, setSelectedBatchYear] = useState("2025");

  // Filter team members based on selected year
  const filteredMembers = useMemo(() => {
    if (!Array.isArray(teamMembers)) return [];
    return teamMembers.filter((member) => String(member.batchYear) === String(selectedBatchYear));
  }, [selectedBatchYear]);

  // Group members into years
  const fourthYearMembers = filteredMembers.filter((member) => Number(member.year) === 4);
  const thirdYearMembers = filteredMembers.filter((member) => Number(member.year) === 3);
  const secondYearMembers = filteredMembers.filter((member) => Number(member.year) === 2);

  const MemberSection = ({ label, membersList, theme }) => {
    if (!membersList || membersList.length === 0) return null;

    const headingColors = {
      red: "text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]",
      purple: "text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.3)]",
      cyan: "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]"
    };

    const lineGradients = {
      red: "to-rose-500/30",
      purple: "to-fuchsia-500/30",
      cyan: "to-cyan-500/30"
    };

    return (
      <div className="space-y-8 pt-6 relative z-10">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <div className={`h-[1px] flex-grow bg-gradient-to-r from-transparent ${lineGradients[theme]}`} />
          <h2 className={`mx-6 text-xl sm:text-2xl font-black tracking-[0.25em] uppercase ${headingColors[theme]}`}>
            {label}
          </h2>
          <div className={`h-[1px] flex-grow bg-gradient-to-l from-transparent ${lineGradients[theme]}`} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 max-w-7xl mx-auto px-4 py-6">
          {membersList.map((card, index) => (
            <Card
              key={card.id || index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              instagram={card.instagram}  
              facebook={card.facebook}   
              linkedin={card.linkedin}    
              theme={theme}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-[#01080b] bg-[radial-gradient(#06b6d4_0.7px,transparent_0.7px)] [background-size:32px_32px] overflow-hidden pb-20">
      <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[5%] w-[40rem] h-[40rem] bg-rose-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12">
        <div className="membersTitle flex justify-center items-center pt-14 px-4">
          <img 
            src="https://i.postimg.cc/nzSYcp3Z/members.png" 
            alt="Members Header" 
            className="h-12 sm:h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]"
          />
        </div>

        {/* --- Dropdown Selector --- */}
        <div className="flex flex-col items-center justify-center gap-2 px-4 relative z-20">
          <label className="text-cyan-400/80 text-xs tracking-widest uppercase font-semibold">
            Select Batch / Year
          </label>
          <div className="relative min-w-[220px]">
            <select
              value={selectedBatchYear}
              onChange={(e) => setSelectedBatchYear(e.target.value)}
              className="w-full appearance-none bg-[#03151e] border border-cyan-500/40 text-cyan-300 font-bold tracking-wider py-3 px-5 pr-10 rounded-xl focus:outline-none focus:border-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-pointer text-center"
            >
              {availableBatchYears.map((batchYear) => (
                <option key={batchYear} value={batchYear} className="bg-[#01080b] text-cyan-300">
                  Team {batchYear}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cyan-400">
              ▼
            </div>
          </div>
        </div>

        {/* Content Render Area */}
        {filteredMembers.length > 0 ? (
          <div className="space-y-20">
            <MemberSection label="Final Year (4th Year)" membersList={fourthYearMembers} theme="red" />
            <MemberSection label="Pre-Final Year (3rd Year)" membersList={thirdYearMembers} theme="purple" />
            <MemberSection label="Sophomores (2nd Year)" membersList={secondYearMembers} theme="cyan" />
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cyan-400/60 text-lg font-medium tracking-wide">
              No team member records found for Team {selectedBatchYear}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}