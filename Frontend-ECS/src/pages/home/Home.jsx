import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
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

  // Reusable animation variants for the sections
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  const words = ["Society", "Branch"];
const [wordIndex, setWordIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setWordIndex((prev) => (prev + 1) % words.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-full min-h-screen bg-[#030712] relative block selection:bg-cyan-500/30">
      
      {/* ================= HERO SECTION ================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden">
        <div className="pointer-events-auto w-full h-full absolute inset-0">
          <ParticlesComponent id='particlejs' />
        </div>

        {/* Smooth entry animation for the Main Hero titles on page load */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className='flex flex-col items-center justify-center relative z-10 w-full pointer-events-auto'
        >
          <div className="flex justify-center items-center">
  <h2 className="glitch text-center text-3xl md:text-5xl font-bold flex flex-wrap justify-center items-center">
    <span>Electronics and Communication&nbsp;</span>

    <span
      className="relative inline-block overflow-hidden"
      style={{
        height: "1.0em",
        width: "240px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={wordIndex}
          initial={{
            y: -80,
            opacity: 0,
            filter: "blur(8px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: 80,
            opacity: 0,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 w-full text-cyan-600"
        >
          {words[wordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  </h2>
</div>

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
        </motion.div>
      </div>

      {/* ================= SECTION 1: MESSAGE (ROSE CYBER THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#11010a] to-[#040008] z-10 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-rose-500/20 shadow-[0_-20px_40px_rgba(244,63,94,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-40" />
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Triggers fade-in-up smoothly only when scrolled into view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="w-full max-w-6xl mx-auto relative z-10"
        >
          <Message />
        </motion.div>
      </div>

      {/* ================= SECTION 2: ABOUT US (PURPLE NEBULA THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#0a021a] to-[#02000d] z-20 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-purple-500/20 shadow-[0_-20px_40px_rgba(168,85,247,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="w-full max-w-6xl mx-auto relative z-10"
        >
          <AboutUs />
        </motion.div>
      </div>

      {/* ================= SECTION 3: ANNUAL (CYAN MATRIX THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#01141a] to-[#00060d] z-30 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-cyan-500/20 shadow-[0_-20px_40px_rgba(6,182,212,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="w-full max-w-6xl mx-auto relative z-10"
        >
          <Annual />
        </motion.div>
      </div>

      {/* ================= SECTION 4: GALLERY (EMERALD MATRIX THEME) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#01120a] to-[#000502] z-40 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-emerald-500/20 shadow-[0_-20px_40px_rgba(16,185,129,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40" />
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="w-full max-w-6xl mx-auto relative z-10"
        >
          <Gallery />
        </motion.div>
      </div>

      {/* ================= MODAL REGISTER POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Added a custom Framer Motion spring pop effect for the modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-[#020c2f]/90 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/40 w-[90%] max-w-sm shadow-[0_0_50px_rgba(6,182,212,0.25)]"
          >
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
          </motion.div>
        </div>
      )}

    </div>
  );
}