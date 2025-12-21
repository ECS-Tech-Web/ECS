import React from "react";
import "./card.css";

export default function Card({ title, description, imageUrl, instagram, facebook, linkedin }) {
  return (
    <div
      className="card group relative h-[40vh] w-[35vh] flex flex-col items-center justify-end p-4 bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url('https://i.postimg.cc/ZnmFTwD6/Card.png')`,
      }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* FULL-CARD BLACK GLASS OVERLAY WITH SOCIAL ICONS */}
      <div className="pointer-events-none absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 rounded-lg z-10">
        {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer" className="pointer-events-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noreferrer" className="pointer-events-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer" className="pointer-events-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
        )}
      </div>

      {/* TEXT CONTAINER */}
      <div
        className="absolute bottom-2 left-0 w-full h-[25%] bg-cover bg-center flex flex-col items-center justify-center z-20"
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