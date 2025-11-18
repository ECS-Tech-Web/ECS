import React from 'react';
import Gallery from './Gallery';
import Message from './Message';
import AboutUs from './AboutUs';
import Annual from './Annual';
import Chat from './chat.jsx';
import ParticlesComponent from '../Particle/Particle';
import Typewriter from "typewriter-effect";
import "./home.css";
import { color } from 'framer-motion';

export default function Home() {
  return (
    <div className="mx-auto w-full space-y-10 overflow-x-hidden">
      <ParticlesComponent id='particlejs' />
      <div className='absolute w-full top-1/3 flex flex-col'>


        <h2 className="glitch text-center">Electronics and Communication Society</h2>


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
        <div class="light-ray1"></div>
        <div class="light-ray2"></div>
        


      </div>
      <div className="pc:h-[90vh] mobile:h-[90vh]" ></div>
       <Chat/>
      <Message />
      <AboutUs />
      <Annual />
      <Gallery />
    </div>

  );

}