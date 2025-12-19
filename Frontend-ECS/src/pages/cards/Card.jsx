import React, { useEffect } from "react";
import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Card({ title, description, imageUrl }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="card group relative h-[40vh] w-[35vh] flex flex-col items-center justify-end p-4 bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url('https://i.postimg.cc/ZnmFTwD6/Card.png')`,
      }}
      data-aos="flip-left"
    >
      {/* Image */}
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Glass Social Icons (Hover) */}
      <div className="glass-social absolute inset-0 flex items-center justify-center">
        
        <a href="#" target="_blank"><FaFacebook /></a>
        <a href="#" target="_blank"><FaInstagram /></a>
        <a href="#" target="_blank"><FaLinkedin /></a>
      </div>

      {/* Text */}
      <div
        className="absolute bottom-2 left-0 w-full h-[25%] bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://i.postimg.cc/G3PxM1HK/Vector.png')`,
        }}
      >
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
