import React, { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import "./Message.css";

const Message = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const stickyContentRef = useRef(null);

  const slides = [
    {
      image: "https://i.postimg.cc/QNTSqLNf/IMG-20250902-WA0034.jpg",
      name: "Dr. Wasim Arif",
      content:
        "In the spirit of continuous learning, we extend a warm welcome to all the students in our beloved institution. The alumni of this esteemed establishment have already made us proud of their achievements since graduation. I have every confidence that, just like our accomplished graduates, our present batches will have a memorable and successful journey here at NIT Silchar. So, prepare yourself to be a valuable asset, the future eagerly anticipates Three things you should acquire as a student: Self-Motivation, Self-Regulation and Self-Confidence. Maintain a sense of joy and keep radiating your brilliance! Life is beautiful, so embrace it.",
      designation: "FACULTY ADVISOR, ECS",
    },
    {
      image: "https://i.postimg.cc/nc14dpyG/IMG-20250902-WA0035.jpg",
      name: "Dr. Koushik Guha",
      content:
        "Dear aspiring engineers, It is with great pleasure that I extend a warm welcome to you as the HOD of the Electronics and Communication Engineering Department. Our department is a thriving hub of innovation and exploration dedicated to nurturing the talents of tomorrow's technological leaders. I have full confidence that together we will push our boundaries, create solutions and excel in all respects inspiring a change among all. The future of Electronics and Communication Engineering rests in your capable hands, and I am excited to see the innovations and breakthroughs you will bring to the world. Your future begins here!",
      designation: "HOD, ECE DEPARTMENT",
    },
    {
      image: "https://i.postimg.cc/GtCpwt7p/Background-Eraser-20250903-025029873.png",
      name: "Chetan Singh Verma",
      content:
        "ECS has always stood at the heart of our branch’s progress, and as its President, I see it as our duty to push these boundaries even further. We are here to build more than just engineers — we are here to create leaders, innovators, and team players. Every event, every initiative, and every effort at ECS is aimed at preparing our students to excel beyond the classroom. I urge each of you to step forward, make your mark, and help us carry this society to greater heights.",
      designation: "PRESIDENT, ECS",
    },
    {
      image: "https://i.postimg.cc/rFJ4QNDP/IMG-20241026-WA0003-1.jpg",
      name: "Jagatjyoti Deb",
      content:
        "ECS is more than a society — it’s a platform where ideas turn into action and students grow together as a community. As Vice President, I have seen firsthand how every event, workshop, and initiative creates opportunities to learn, lead, and collaborate. This is your space to explore, innovate, and make memories while building real skills. Let’s continue to raise the bar and ensure ECS remains a place where every student finds their spark.",
      designation: "VICE PRESIDENT, ECS",
    },
    {
      image: "https://i.postimg.cc/1Xnp4S8L/IMG-20241026-WA0003-1.jpg",
      name: "Koustubh Mishra",
      content:
        "As the General Secretary of ECS, I feel privileged to represent a society that thrives on innovation, teamwork, and excellence in the domain of electronics and communication. Our aim is to nurture a dynamic community where creativity is encouraged, knowledge is exchanged, and every member gets the opportunity to grow to their fullest potential. Together, we aspire to uplift our society by welcoming fresh challenges, driving forward with technological progress, and leaving a meaningful impact both on campus and beyond. ECE forever!!!",
      designation: "GENERAL SECRETARY, ECS",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyContentRef.current) return;

      const section = sectionRef.current;
      const stickyContent = stickyContentRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollDistance = rect.height - windowHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        stickyContent.style.position = "fixed";
        stickyContent.style.top = "0px";
        stickyContent.style.bottom = "auto";

        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      } else {
        if (rect.bottom < windowHeight) {
          stickyContent.style.position = "absolute";
          stickyContent.style.top = "auto";
          stickyContent.style.bottom = "0px";
          setScrollProgress(1);
        } else {
          stickyContent.style.position = "absolute";
          stickyContent.style.top = "0px";
          stickyContent.style.bottom = "auto";
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    Math.floor(scrollProgress * slides.length),
    slides.length - 1
  );

  const getCardStyle = (index) => {
    const totalCards = slides.length;
    const currentStep = scrollProgress * (totalCards - 1);
    const diff = index - currentStep;

    let translateY = 0;
    let scale = 1;
    let opacity = 1;
    let rotateX = 0;
    let zIndex = totalCards - index;

    if (diff < 0) {
      // CARD PASSED: Slide up and fade out completely so no overlapping happens
      translateY = diff * 180;
      scale = 1 + diff * 0.04;
      opacity = Math.max(1 + diff * 2, 0); // Fades quickly out of view
      rotateX = diff * -12;
      zIndex = 30 + Math.round(diff);
    } else {
      // UPCOMING STACK CARDS
      translateY = diff * 14; 
      scale = Math.max(1 - diff * 0.04, 0.88);
      // Background cards have zero opacity if deeper down to prevent bleed-through
      opacity = diff > 1.2 ? 0 : Math.max(1 - diff * 0.4, 0.2); 
      rotateX = 0;
    }

    return {
      transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg)`,
      opacity: opacity,
      zIndex: zIndex,
      pointerEvents: diff <= 0.2 && diff >= -0.2 ? "auto" : "none",
      transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.15s ease-out",
    };
  };

  return (
    <section ref={sectionRef} className="message-section relative h-[300vh] w-full">
      <div
        ref={stickyContentRef}
        className="sticky-viewport absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden [perspective:1000px]"
      >
        {/* HEADER */}
        <div className="flex justify-center mb-4 sm:mb-6 w-full max-w-5xl z-30">
          <img
            src="https://i.postimg.cc/hGJ1bPRD/Group-15.png"
            alt="Messages Header"
            className="h-10 sm:h-12 md:h-14 object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
          />
        </div>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative w-full max-w-5xl h-[520px] sm:h-[450px] md:h-[400px] flex justify-center items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={getCardStyle(index)}
              className="absolute top-0 left-0 w-full h-full bg-[#07020d] bg-gradient-to-br from-[#0e051a] via-[#07020d] to-[#030008] rounded-2xl p-4 sm:p-7 md:p-8 border border-rose-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden origin-bottom flex flex-col justify-between"
            >
              {/* Ambient Glows */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none" />

              {/* CARD BODY GRID */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 items-center h-full overflow-y-auto custom-scrollbar">
                
                {/* Profile Avatar */}
                <div className="w-full md:col-span-4 flex flex-col items-center justify-center flex-shrink-0 pt-2 md:pt-0">
                  <div className="relative p-1 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 aspect-square rounded-full bg-gradient-to-b from-rose-500 via-purple-500 to-transparent shadow-[0_0_25px_rgba(244,63,94,0.2)]">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full aspect-square object-cover rounded-full grayscale-[15%]"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:col-span-8 flex flex-col justify-between h-full space-y-3 relative px-1 sm:px-2 text-center md:text-left">
                  <Quote className="absolute -top-2 left-0 md:-left-2 w-8 h-8 text-rose-500/15 stroke-[1.5] pointer-events-none hidden sm:block" />

                  <div className="flex items-center my-auto pt-1">
                    <p className="text-slate-200 text-xs sm:text-sm md:text-[15px] leading-relaxed tracking-wide text-justify font-normal pl-0 md:pl-4 border-l-0 md:border-l-2 border-rose-500/40 max-h-[180px] sm:max-h-none overflow-y-auto">
                      {slide.content}
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="pt-2 mt-auto text-center md:text-right border-t border-slate-800/80 w-full flex-shrink-0">
                    <h3 className="text-sm sm:text-lg font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
                      {slide.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 mt-0.5 uppercase block">
                      {slide.designation}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CONTROLS */}
        <div className="relative w-full max-w-5xl flex items-center justify-between mt-4 sm:mt-6 pt-3 border-t border-slate-900 z-30">
          <span className="text-xs font-mono text-slate-500">
            0{activeIndex + 1} / 0{slides.length}
          </span>

          <div className="flex flex-row gap-2 items-center">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-6 bg-rose-500"
                    : "w-3 bg-slate-800"
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] uppercase tracking-widest text-rose-400/80 font-semibold">
            Scroll Down ↓
          </span>
        </div>
      </div>

      {/* Embedded CSS for smooth internal scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 63, 94, 0.3);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Message;