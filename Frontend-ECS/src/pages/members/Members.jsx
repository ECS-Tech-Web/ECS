import React from "react";
import Card from "../cards/Card";
import "./members.css";
import cardsData from "./membersData"; 

export default function Members() {
  const fourthYearMembers = cardsData.filter((member) => member.year === 4);
  const thirdYearMembers = cardsData.filter((member) => member.year === 3);
  const secondYearMembers = cardsData.filter((member) => member.year === 2);

  const MemberSection = ({ label, membersList, theme }) => {
    if (membersList.length === 0) return null;

    // Headings color dynamic styling based on section theme
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
        {/* Section Divider Title */}
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <div className={`h-[1px] flex-grow bg-gradient-to-r from-transparent ${lineGradients[theme]}`} />
          <h2 className={`mx-6 text-xl sm:text-2xl font-black tracking-[0.25em] uppercase ${headingColors[theme]}`}>
            {label}
          </h2>
          <div className={`h-[1px] flex-grow bg-gradient-to-l from-transparent ${lineGradients[theme]}`} />
        </div>

        {/* Responsive Grid Layer */}
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
              theme={theme} // 🚀 Pass theme option into card down below
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-[#01080b] bg-[radial-gradient(#06b6d4_0.7px,transparent_0.7px)] [background-size:32px_32px] overflow-hidden pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[5%] w-[40rem] h-[40rem] bg-rose-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-16">
        <div className="membersTitle flex justify-center items-center pt-14 px-4">
          <img 
            src="https://i.postimg.cc/nzSYcp3Z/members.png" 
            alt="Members Header" 
            className="h-12 sm:h-16 md:h-20 object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]"
          />
        </div>

        <div className="space-y-20">
          {/* Inject dynamic themes here */}
          <MemberSection label="Final Year (4th Year)" membersList={fourthYearMembers} theme="red" />
          <MemberSection label="Pre-Final Year (3rd Year)" membersList={thirdYearMembers} theme="purple" />
          <MemberSection label="Sophomores (2nd Year)" membersList={secondYearMembers} theme="cyan" />
        </div>
      </div>
    </div>
  );
}