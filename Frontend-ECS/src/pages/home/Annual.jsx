import React from "react";

const Annual = () => {
  const baseData = [
    {
      title: "ECE Orientation",
      description:
        "ECS proudly conducts an Orientation for freshers, where professors and seniors welcome them into electronics and communication with project insights.",
      image:
        "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg",
    },
    {
      title: "EC:ArQ",
      description:
        "Inaugural module at Tecnoesis inspired by Interstellar. ARDUINO-QUEST challenged teams to solve space problems using Arduino.",
      image:
        "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg",
    },
    {
      title: "Utkrishta",
      description:
        "Vibrant fresher’s celebration filled with fun activities, introductions, and talent showcases to crown Mr. and Miss Utkrishta.",
      image: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg",
    },
    {
      title: "Spectre Magazine",
      description:
        "Official ECS magazine celebrating innovation and knowledge, showcasing insightful articles and student-faculty achievements.",
      image:
        "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg",
    },
    {
      title: "Dehleez",
      description:
        "Heartfelt farewell ceremony honoring the graduating batch, cherishing memories before they step into a new chapter.",
      image: "https://i.postimg.cc/z3YLhX8R/IMG-20250903-WA0011.jpg",
    },
  ];

  // Repeat the 5 base items 4 times to total 20 distinct data items
  const uniqueData = Array.from({ length: 20 }, (_, i) => baseData[i % baseData.length]);

  const LandscapeCard = ({ item }) => (
    <div className="w-[300px] sm:w-[420px] h-[160px] sm:h-[180px] flex flex-row items-center p-3 bg-[#010c12]/95 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-lg group hover:border-cyan-400/60 gap-3 sm:gap-4 flex-shrink-0">
      <div
        className="w-[40%] h-full bg-cover bg-center rounded-lg relative flex-shrink-0 overflow-hidden"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 border border-cyan-400/20 rounded-lg pointer-events-none group-hover:border-cyan-400/40 transition-colors" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010c12]/60 via-transparent to-transparent" />
      </div>

      <div className="w-[60%] h-full flex flex-col justify-between py-1 pr-1">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-wide truncate">
            {item.title}
          </h3>
          <p className="text-slate-300 text-[10px] sm:text-[11px] leading-relaxed font-light opacity-90 line-clamp-3 sm:line-clamp-4 mt-1">
            {item.description}
          </p>
        </div>

        <div className="w-full pt-1 flex items-center justify-between opacity-40">
          <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-[9px] tracking-widest text-cyan-400 font-mono uppercase">
            ECS
          </span>
          <div className="h-[1px] w-1/3 bg-gradient-to-l from-transparent to-cyan-500" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-6 bg-transparent space-y-6 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes scrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .marquee-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 40s linear infinite;
          will-change: transform;
        }

        .marquee-right {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-left,
        .marquee-wrapper:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* HEADER */}
      <div className="relative w-full max-w-5xl mx-auto px-4 flex justify-center items-center mb-6">
        <div className="text-center relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-6xl font-black text-cyan-500/5 tracking-[0.2em] uppercase select-none whitespace-nowrap">
            ANNUAL ATTRACTIONS
          </span>
          <h2 className="relative z-10 text-xl sm:text-4xl font-extrabold tracking-widest text-white uppercase drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            Annual Attractions
          </h2>
        </div>
      </div>

      {/* TOP ROW: MARQUEE DRIFT LEFT */}
      <div className="w-full overflow-hidden marquee-wrapper">
        <div className="marquee-left gap-4 sm:gap-6">
          {uniqueData.map((item, index) => (
            <LandscapeCard key={`top-1-${index}`} item={item} />
          ))}
          {uniqueData.map((item, index) => (
            <LandscapeCard key={`top-2-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW: MARQUEE DRIFT RIGHT */}
      <div className="w-full overflow-hidden marquee-wrapper">
        <div className="marquee-right gap-4 sm:gap-6">
          {[...uniqueData].reverse().map((item, index) => (
            <LandscapeCard key={`bottom-1-${index}`} item={item} />
          ))}
          {[...uniqueData].reverse().map((item, index) => (
            <LandscapeCard key={`bottom-2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Annual;