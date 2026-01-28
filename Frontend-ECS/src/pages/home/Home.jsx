import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";
import "./home.css";
import { color } from 'framer-motion';

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto w-full space-y-10 overflow-x-hidden">
      <ParticlesComponent id='particlejs' />

      <div className='absolute w-full top-1/3 flex flex-col'>
        <h2 className="glitch text-center">
          Electronics and Communication Society
        </h2>

        <div
          id="hero"
          className="text-emerald-400 flex justify-center items-center text-4xl font-extrabold sm:text-5xl pl-6 drop-shadow-[0_0_15px_#10b981]"
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

      <div className="pc:h-[90vh] mobile:h-[90vh]"></div>

      <Message />
      <AboutUs />
      <Annual />
      <Gallery />

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70">
          <div className="relative bg-[#020c2f] p-4 rounded-2xl border border-cyan-500 w-[90%] max-w-sm">

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>

            {/* Poster */}
            <img
              src="https://i.postimg.cc/y6tpYNNx/outdoors-(5).png"   // change if needed
              alt="Spectrum FIT"
              className="w-full h-auto rounded-xl"
            />

            {/* Button */}
            <a href="/annual-attraction">
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white">
                Register Now
              </button>
            </a>

          </div>
        </div>
      )}
      {/* ========================================= */}

    </div>
  );
}
