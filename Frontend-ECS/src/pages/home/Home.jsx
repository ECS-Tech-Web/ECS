import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import GradientWaves from './gradient';
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

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#030712] relative block selection:bg-cyan-500/30 overflow-x-hidden">

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden">

        <div className="pointer-events-auto w-full h-full absolute inset-0 z-0">
          <GradientWaves
            horizonColor="#000000"
            waveColor="#a1c30a"
            crestColor="#0af72d"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1}
            opacity={1}
            mouseInteraction
            parallaxStrength={0.5}
            grain
            grainIntensity={0.05}
          />
        </div>

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
                style={{ height: "1.0em", width: "240px" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: -80, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 80, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

          
        </motion.div>
      </div>

      {/* ================= 2. STICKY MESSAGE (ROSE) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#11010a] to-[#040008] z-10 rounded-t-[40px] py-20 px-6 md:p-16 flex items-center justify-center overflow-hidden border-t-2 border-rose-500/20 shadow-[0_-20px_40px_rgba(244,63,94,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-40" />
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[110px] pointer-events-none" />

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

      {/* ================= 3. STICKY ABOUT US + PURPLE SECTION (z-20) ================= */}
      <div className="sticky top-0 min-h-screen w-full bg-gradient-to-b from-[#0a021a] via-[#04000d] to-[#010008] z-20 rounded-t-[40px] border-t-2 border-purple-500/20 shadow-[0_-20px_40px_rgba(168,85,247,0.12),0_-40px_80px_rgba(0,0,0,0.9)]">
        
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* --- ABOUT US --- */}
        <div className="min-h-screen py-20 px-6 md:p-16 flex items-center justify-center relative">
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

        {/* --- ANNUAL --- */}
        <div className="min-h-screen py-20 px-6 md:p-16 flex items-center justify-center relative border-t border-purple-900/30">
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

        {/* --- GALLERY --- */}
        <div className="min-h-screen py-20 px-6 md:p-16 flex items-center justify-center relative border-t border-purple-900/30">
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

      </div>

    </div>
  );
}