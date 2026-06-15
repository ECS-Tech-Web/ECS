import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react"; 

export default function Card({ title, description, imageUrl, instagram, facebook, linkedin, theme = "cyan" }) {
  
  // 🎨 CONFIGURATION MAP FOR THEME STYLES
  const colorMap = {
    emerald: {
      cardBg: "bg-[#02140d]/70",
      border: "border-emerald-500/20 hover:border-emerald-400",
      shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      glowLine: "via-emerald-400",
      textTitle: "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]",
      textSub: "group-hover:text-emerald-300",
      iconBoxBg: "bg-[#032416]/90",
      iconBorder: "border-emerald-500/20",
      iconHover: "hover:text-emerald-400 hover:border-emerald-400/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.25)]",
      backGlow: "bg-emerald-500/5 group-hover:bg-emerald-500/10"
    },
    amber: {
      cardBg: "bg-[#140f02]/70",
      border: "border-amber-500/20 hover:border-amber-400",
      shadow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
      glowLine: "via-amber-400",
      textTitle: "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.2)]",
      textSub: "group-hover:text-amber-300",
      iconBoxBg: "bg-[#241b03]/90",
      iconBorder: "border-amber-500/20",
      iconHover: "hover:text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_10px_rgba(245,158,11,0.25)]",
      backGlow: "bg-amber-500/5 group-hover:bg-amber-500/10"
    },
    red: {
      cardBg: "bg-[#140406]/70",
      border: "border-rose-500/20 hover:border-rose-500/80",
      shadow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]",
      glowLine: "via-rose-500",
      textTitle: "text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.2)]",
      textSub: "group-hover:text-rose-300",
      iconBoxBg: "bg-[#24080d]/90",
      iconBorder: "border-rose-500/20",
      iconHover: "hover:text-rose-400 hover:border-rose-500/50 hover:shadow-[0_0_10px_rgba(244,63,94,0.3)]",
      backGlow: "bg-rose-500/5 group-hover:bg-rose-500/10"
    },
    purple: {
      cardBg: "bg-[#0f0314]/70",
      border: "border-fuchsia-500/20 hover:border-fuchsia-500/80",
      shadow: "hover:shadow-[0_0_30px_rgba(232,121,249,0.25)]",
      glowLine: "via-fuchsia-500",
      textTitle: "text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.2)]",
      textSub: "group-hover:text-fuchsia-300",
      iconBoxBg: "bg-[#1f0529]/90",
      iconBorder: "border-fuchsia-500/20",
      iconHover: "hover:text-fuchsia-400 hover:border-fuchsia-500/50 hover:shadow-[0_0_10px_rgba(232,121,249,0.3)]",
      backGlow: "bg-fuchsia-500/5 group-hover:bg-fuchsia-500/10"
    },
    cyan: {
      cardBg: "bg-[#03141a]/70",
      border: "border-cyan-500/20 hover:border-cyan-400",
      shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
      glowLine: "via-cyan-400",
      textTitle: "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]",
      textSub: "group-hover:text-cyan-300",
      iconBoxBg: "bg-[#041d24]/90",
      iconBorder: "border-cyan-500/20",
      iconHover: "hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.25)]",
      backGlow: "bg-cyan-500/5 group-hover:bg-cyan-500/10"
    }
  };

  const style = colorMap[theme] || colorMap.cyan;

  return (
    <div className={`group relative h-[420px] sm:h-[42vh] w-full max-w-[300px] sm:w-[32vh] flex flex-col justify-between p-5 backdrop-blur-md rounded-[24px] border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${style.cardBg} ${style.border} ${style.shadow}`}>
      
      {/* 1. TOP GLOW LINE EFFECT */}
      <div className={`absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${style.glowLine}`} />
      
      {/* 2. IMAGE CONTAINER */}
      <div className="relative w-full h-[55%] shrink-0 flex justify-center items-center overflow-hidden rounded-xl bg-black/30 border border-slate-800/60 group-hover:border-slate-700 transition-colors duration-500">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105" 
        />
      </div>

      {/* 3. INFO PANEL */}
      <div className="relative z-10 flex flex-col justify-between flex-grow mt-3 text-center min-h-0">
        
        {/* Text Block */}
        <div className="space-y-1 overflow-hidden">
          <h2 className={`text-lg sm:text-xl font-bold tracking-wide font-sans truncate group-hover:text-white transition-colors duration-300 ${style.textTitle}`}>
            {title}
          </h2>
          <p className={`text-xs sm:text-sm text-slate-300 font-medium tracking-wide line-clamp-2 transition-colors duration-300 ${style.textSub}`}>
            {description}
          </p>
        </div>

        {/* 4. PERFECTED HOVER SOCIAL TRAYS */}
        <div className="flex items-center justify-center gap-3.5 pt-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shrink-0">
          {instagram && (
            <a 
              href={instagram} 
              target="_blank" 
              rel="noreferrer" 
              className={`p-2 rounded-xl text-slate-400 border transition-all duration-300 ${style.iconBoxBg} ${style.iconBorder} ${style.iconHover}`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
          {facebook && (
            <a 
              href={facebook} 
              target="_blank" 
              rel="noreferrer" 
              className={`p-2 rounded-xl text-slate-400 border transition-all duration-300 ${style.iconBoxBg} ${style.iconBorder} ${style.iconHover}`}
            >
              <Facebook className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className={`p-2 rounded-xl text-slate-400 border transition-all duration-300 ${style.iconBoxBg} ${style.iconBorder} ${style.iconHover}`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>

      {/* 5. BACKGROUND GLOW MATRIX EFFECT */}
      <div className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150 ${style.backGlow}`} />

    </div>
  );
}