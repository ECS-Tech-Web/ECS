import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./gallery.css";

const ImageCarousel = () => {
  const [buttonImage, setButtonImage] = useState(
    "https://i.postimg.cc/mgjNYYv7/Component-2.png"
  );
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const stickyContentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !wrapperRef.current || !stickyContentRef.current) return;

      const section = sectionRef.current;
      const stickyContent = stickyContentRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollDistance = rect.height - windowHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // INSIDE PIN ZONE: Hide Navbar
        window.dispatchEvent(
          new CustomEvent("gallery-scroll-state", { detail: { isPinned: true } })
        );

        stickyContent.style.position = "fixed";
        stickyContent.style.top = "0px";
        stickyContent.style.bottom = "auto";

        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
        wrapperRef.current.style.setProperty("--rotate", progress);
      } else {
        // OUTSIDE PIN ZONE: Show Navbar
        window.dispatchEvent(
          new CustomEvent("gallery-scroll-state", { detail: { isPinned: false } })
        );

        if (rect.bottom < windowHeight) {
          stickyContent.style.position = "absolute";
          stickyContent.style.top = "auto";
          stickyContent.style.bottom = "0px";
          wrapperRef.current.style.setProperty("--rotate", 1);
        } else {
          stickyContent.style.position = "absolute";
          stickyContent.style.top = "0px";
          stickyContent.style.bottom = "auto";
          wrapperRef.current.style.setProperty("--rotate", 0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Ensure Navbar reappears if user unmounts component mid-scroll
      window.dispatchEvent(
        new CustomEvent("gallery-scroll-state", { detail: { isPinned: false } })
      );
    };
  }, []);

  const handleMouseEnter = () => {
    setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
  };

  const handleMouseLeave = () => {
    setButtonImage("https://i.postimg.cc/mgjNYYv7/Component-2.png");
  };

  const handleClickButton = () => {
    window.scrollTo(0, 0);
    navigate("/photogallery");
  };

  const galleryItems = [
    { title: "A misty Morning", src: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg" },
    { title: "Harvest", src: "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg" },
    { title: "Waiting", src: "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg" },
    { title: "Time for Everything", src: "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg" },
    { title: "Cross over", src: "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg" },
    { title: "In The City", src: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg" },
    { id: "img-7", title: "A Boat Trip", src: "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg" },
    { title: "Waiting", src: "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg" },
    { title: "Stories to tell", src: "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg" },
    { title: "A Perfect Day", src: "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg" },
    { title: "Riding the Curve", src: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg" },
    { title: "Raindrops", src: "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg" },
    { title: "Gone Sailing", src: "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg" },
    { title: "The Watch Tower", src: "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg" },
    { title: "Leaving", src: "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg" },
    { title: "Above the Clouds", src: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg" },
    { title: "This is the title", src: "https://i.postimg.cc/HWy6tXBK/IMG-0417.jpg" },
    { title: "This is the title", src: "https://i.postimg.cc/sx7KDCMy/IMG-20240426-WA0012.jpg" },
    { title: "This is the title", src: "https://i.postimg.cc/mZv5x8PB/ARY-0100.jpg" },
    { title: "Contemplation!", src: "https://i.postimg.cc/wB2BK4Qk/MJ-9364.jpg" },
  ];

  return (
    <section ref={sectionRef} className="gallery-section relative h-[250vh] w-full bg-slate-950">
      <div
        ref={stickyContentRef}
        className="sticky-viewport absolute top-0 left-0 w-full h-screen flex flex-col justify-between items-center py-6 overflow-hidden pointer-events-auto bg-slate-950"
      >
        {/* Modern Background Accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* HEADER */}
        <div className="galImg relative w-full max-w-5xl mx-auto flex justify-center items-center z-10 pt-2">
          <img
            src="https://i.postimg.cc/Y9sWX8Rm/Group-48096102.png"
            alt="Gallery"
            className="h-10 sm:h-12 md:h-16 object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          />
        </div>

        {/* ROTATING WHEEL */}
        <div className="wheel-container relative z-10">
          <div ref={wrapperRef} className="wrapper">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                id={item.id}
                data-title={item.title}
                style={{ "--i": index + 1 }}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* MOUSE ICON */}
        <div className="flex justify-center text-cyan-400 z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mouse"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
            <path d="M12 7l0 4" />
            <path d="M8 26l4 4l4 -4">
              <animateTransform
                attributeType="XML"
                attributeName="transform"
                type="translate"
                values="0 0; 0 4; 0 0"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center z-10 pb-2">
          <button
            className="flex justify-center items-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer max-w-[240px] sm:max-w-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClickButton}
          >
            <img
              src={buttonImage}
              alt="Navigate to Full Gallery"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;