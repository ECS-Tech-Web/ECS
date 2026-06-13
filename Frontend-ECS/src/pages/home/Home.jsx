import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";
import "./home.css";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#030712] relative block selection:bg-cyan-500/30">
      
      {/* ================= HERO SECTION ================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden">
        <div className="pointer-events-auto w-full h-full absolute inset-0">
          <ParticlesComponent id='particlejs' />
        </div>

        <div className='flex flex-col items-center justify-center relative z-10 w-full pointer-events-auto'>
          <h2 className="glitch text-center">
            Electronics and Communication Society
          </h2>

          <div
            id="hero"
            className="text-emerald-400 flex justify-center items-center text-4xl font-extrabold sm:text-5xl drop-shadow-[0_0_15px_#10b981]"
          >
            <span className="typingText">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("NIT SILCHAR")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span>
          </div>

          <div className="light-ray1"></div>
          <div className="light-ray2"></div>
        </div>
      </div>

      {/* ================= SECTION 1: MESSAGE (ROSE CYBER THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#11010a] to-[#040008] z-10 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-rose-500/20 shadow-[0_-20px_40px_rgba(244,63,94,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        {/* Neon Laser Rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-40" />
        {/* Background Aurora Orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <Message />
        </div>
      </div>

      {/* ================= SECTION 2: ABOUT US (PURPLE NEBULA THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#0a021a] to-[#02000d] z-20 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-purple-500/20 shadow-[0_-20px_40px_rgba(168,85,247,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        {/* Neon Laser Rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />
        {/* Background Aurora Orbs */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <AboutUs />
        </div>
      </div>

      {/* ================= SECTION 3: ANNUAL (CYAN MATRIX THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#01141a] to-[#00060d] z-30 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-cyan-500/20 shadow-[0_-20px_40px_rgba(6,182,212,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        {/* Neon Laser Rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        {/* Background Aurora Orbs */}
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <Annual />
        </div>
      </div>

      {/* ================= SECTION 4: GALLERY (EMERALD MATRIX THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#01120a] to-[#000502] z-40 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-emerald-500/20 shadow-[0_-20px_40px_rgba(16,185,129,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        {/* Neon Laser Rule */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
        {/* Background Aurora Orbs */}
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <Gallery />
        </div>
      </div>

      {/* ================= MODAL REGISTER POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-[#020c2f]/90 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/40 w-[90%] max-w-sm shadow-[0_0_50px_rgba(6,182,212,0.25)] animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white text-lg transition duration-150"
            >
              ✕
            </button>
            <img
              src="https://i.postimg.cc/y6tpYNNx/outdoors-(5).png"
              alt="Spectrum FIT"
              className="w-full h-auto rounded-xl"
            />
            <a href="/annual-attraction">
              <button className="mt-4 w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 active:scale-[0.98] transition-all duration-150">
                Register Now
              </button>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}