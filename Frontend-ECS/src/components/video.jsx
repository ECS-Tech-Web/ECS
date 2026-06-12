import React, { useEffect, useState, useRef } from "react";
import desktopVideo from "./ECS.mp4"; 
import mobileVideo from "./ECS2.mp4"; 

const VideoLoader = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleVideoEndTransition = () => {
    setIsFadingOut(true);
    
    setTimeout(() => {
      onVideoEnd();
    }, 700);
  };

  useEffect(() => {
    if (videoRef.current) {
      // CRITICAL: Tells the browser to process and select the matching <source> tag
      videoRef.current.load(); 
      
      videoRef.current.play().catch((error) => {
        console.log("Autoplay blocked:", error);
      });
    }

    // Safety fallback
    const fallbackTimeout = setTimeout(() => {
      handleVideoEndTransition();
    }, 7000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#090310] flex items-center justify-center overflow-hidden w-screen h-screen transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleVideoEndTransition} 
        autoPlay={true}
        preload="auto"
        className="absolute w-full h-full object-cover brightness-[0.6] animate-fadeIn scale-100"
      >
        {/* Mobile source: Matches Tailwind's default mobile sizing (< 768px) */}
        <source src={mobileVideo} type="video/mp4" media="(max-width: 767px)" />
        
        {/* Desktop source: Matches Tailwind's md: breakpoint and up (>= 768px) */}
        <source src={desktopVideo} type="video/mp4" media="(min-width: 768px)" />
        
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoLoader;