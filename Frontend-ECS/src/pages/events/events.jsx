import React, { useState } from "react";
import { Link } from "react-router-dom";

// 🌌 HERO CONTAINER
const HeroSection = () => {
  return (
    <div
      className="relative w-full overflow-hidden min-h-[65vh] sm:min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh] rounded-bl-[40px] sm:rounded-bl-[60px] rounded-br-[40px] sm:rounded-br-[60px] flex flex-col justify-center items-center text-center bg-cover bg-center border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-[#01080b]/75 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_0.7px,transparent_0.7px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative z-10 text-white px-4 sm:px-8 max-w-5xl">
        <div className="flex justify-center items-center mb-6 pt-8">
          <img
            src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736692146/Group_15_cphybt.png"
            alt="Events Header Title"
            className="h-14 sm:h-20 md:h-24 object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          />
        </div>
        <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-4 pb-8 text-slate-300 font-light tracking-wide">
          With the vast array of events going on under it, ECS truly proves to be a versatile society. 
          Throughout the calendar year, a number of exciting events are organized by this thriving society. 
          The events can be both technical, as well as non-technical. These events are meant for the goodwill 
          of the students of the branch. Let us find out more about the events below.
        </p>
      </div>
    </div>
  );
};

// 🌌 CYBERPUNK CARD COMPONENT
function EventCard({ image, title, description, link, categoryTitle }) {
  const getInitialButtonImage = () => {
    if (categoryTitle === "SPECTRUM- LIT" || categoryTitle === "SPECTRUM-TECH") {
      return "https://i.postimg.cc/1506Lky2/Whats-App-Image-2025-01-15-at-21-04-35-dd05225e-removebg-preview.png";
    }
    if (categoryTitle === "SPECTRUM-FIT") {
      return "https://i.postimg.cc/cCnQ2P6k/Whats-App-Image-2025-01-15-at-20-26-14-1efc9130-removebg-preview.png";
    }
    return "https://i.postimg.cc/mgjNYYv7/Component-2.png";
  };

  const [buttonImage, setButtonImage] = useState(getInitialButtonImage());

  const handleMouseEnter = () => {
    if (categoryTitle === "SPECTRUM-FIT") {
      setButtonImage("https://i.postimg.cc/05CC71DZ/Whats-App-Image-2025-01-15-at-20-40-12-d54596a0-removebg-preview.png");
    } else if (categoryTitle === "SPECTRUM- LIT" || categoryTitle === "SPECTRUM-TECH") {
      setButtonImage("https://i.postimg.cc/MKJV36J1/Whats-App-Image-2025-01-15-at-21-05-01-cc2300b5-removebg-preview.png");
    } else {
      setButtonImage("https://i.postimg.cc/Px3Qjwss/Group-48096106.png");
    }
  };

  const handleMouseLeave = () => {
    setButtonImage(getInitialButtonImage());
  };

  const themeGradients = {
    "SPECTRUM-FIT": "from-emerald-500 via-teal-500 to-cyan-500 shadow-emerald-500/10 hover:shadow-emerald-500/20",
    "SPECTRUM-TECH": "from-cyan-500 via-indigo-500 to-purple-500 shadow-cyan-500/10 hover:shadow-cyan-500/20",
    "SPECTRUM- LIT": "from-purple-500 via-pink-500 to-rose-500 shadow-pink-500/10 hover:shadow-pink-500/20",
    " ": "from-blue-600 via-cyan-500 to-sky-400 shadow-blue-500/10 hover:shadow-blue-500/20"
  };

  const selectedGradient = themeGradients[categoryTitle] || themeGradients[" "];

  return (
    <div className="relative w-full flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 group">
      
      {/* Outer Asymmetric Gradient Wrapper */}
      <div 
        className={`relative w-full p-[2px] bg-gradient-to-br ${selectedGradient} transition-all duration-500`}
        style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)" }}
      >
        {/* Inner Card Frame */}
        <div 
          className="bg-[#020912]/95 p-5 w-full h-full flex flex-col justify-between min-h-[480px]"
          style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)" }}
        >
          {/* 🖼️ FIXED CONTAINER WITH FILLING IMAGE (No White Gaps) */}
          <div 
            className="relative w-full h-[220px] overflow-hidden border border-slate-800/80 bg-black/40"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)" }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
            />
          </div>

          {/* Typography Text Info Blocks */}
          <div className="mt-5 text-left px-1 flex-grow">
            <h3 className="text-lg font-black text-[#00d1ff] uppercase tracking-wider group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,209,255,0.2)]">
              {title}
            </h3>
            <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed tracking-wide line-clamp-4">
              {description}
            </p>
          </div>

          {/* 🔘 CENTERED AND ENLARGED BUTTON ROW */}
          <div className="mt-6 flex items-center justify-center w-full border-t border-slate-900/80 pt-4">
            {link ? (
              link.startsWith("http") ? (
                <a href={link} target="_blank" rel="noreferrer" className="w-full flex justify-center">
                  <button className="focus:outline-none transform transition-all duration-300 hover:scale-105 active:scale-95" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={buttonImage} alt="External Link" className="h-11 md:h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,209,255,0.3)]" />
                  </button>
                </a>
              ) : (
                <Link to={link} className="w-full flex justify-center">
                  <button className="focus:outline-none transform transition-all duration-300 hover:scale-105 active:scale-95" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={buttonImage} alt="View Internal Route" className="h-11 md:h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(0,209,255,0.3)]" />
                  </button>
                </Link>
              )
            ) : (
              <div className="h-11 text-xs text-slate-600 font-mono italic flex items-center justify-center">Registration closed</div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// 🌌 MAIN VIEW COMPROLLER
const Events = () => {
  // ... Keep your complete untouched categories array data set directly from your previous snippet here
  const categories = [
    {
      title: "SPECTRUM-FIT",
      cards: [
        { title: "Cricket", description: "Cricket under Spectrum fosters teamwork, strategy, and skillful play in both batting and bowling. The competition provides a dynamic environment for participants to showcase their abilities.", image: "https://i.postimg.cc/8Pg5d1Y7/cricket.png", link: "/register/cricket" },
        { title: "Futsal", description: "Futsal, as a football competition, comes under Spectrum FIT, promoting teamwork, agility, and tactical skills in a dynamic, fast-paced environment.", image: "https://i.postimg.cc/nrZyzw3Y/futsal.png", link: "/register/futsal" },
        { title: "Relay", description: "Relay, as a competition under Spectrum FIT, focuses on teamwork, speed, and coordination. It challenges participants to work together efficiently, passing the baton.", image: "https://i.postimg.cc/zXqNX3MJ/relay.png", link: "/register/relay-race" },
        { title: "Tug of War", description: "Tug of War is a classic team sport that tests strength, coordination, and unity. In this game, two teams stand on opposite sides of a rope and pull with all their might.", image: "https://i.postimg.cc/zf8Xs0Nr/tug-of-war.png", link: "/register/tug-of-war" },
        { title: "Chess", description: "The chess competition under the Spectrum FIT domain fosters critical thinking, strategy, and mental agility. It serves as a platform for participants to showcase their intellectual prowess.", image: "https://i.postimg.cc/RhBG4w47/4-20260121-163528-0001.png", link: "/registerchess" },
        { title: "Table Tennis", description: "Table tennis under Spectrum FIT highlights agility, reflexes, and quick decision-making. The competition fosters both individual and team skills, requiring intense focus.", image: "https://i.postimg.cc/RV31yPc8/indoors-20260121-165948-0000.png", link: "/registertable-tennis" },
        { title: "Badminton", description: "Badminton promotes agility, endurance, & control over rapid movements. The competition encourages both individual excellence & team collaboration.", image: "https://i.postimg.cc/bvVKyCBN/2-20260121-163528-0000.png", link: "/registerbadminton" },
      ],
    },
    {
      title: "SPECTRUM-TECH",
      cards: [
        { title: "Fastweb", description: "Fast Web under Spectrum is an exciting web development hackathon where participants race against time to build innovative and functional websites with creativity.", image: "https://i.postimg.cc/C1DkthT9/Whats-App-Image-2025-01-14-at-14-09-17-62f6c946.jpg", link: "/register/fastweb" },
        { title: "Byte the Code", description: "Byte the Code under Spectrum is a thrilling competition for coding enthusiasts. It’s a platform where programmers can showcase their skills by solving complex problems.", image: "https://i.postimg.cc/N0ZRpyV1/Whats-App-Image-2025-01-14-at-14-09-19-6d448a8c.jpg", link: "/register/bythecode" },
        { title: "Eniac", description: "Eniac under Spectrum is a competitive programming contest that brings together the brightest minds in coding. Participants tackle complex algorithmic challenges.", image: "https://i.postimg.cc/mksCWvTk/Whats-App-Image-2025-01-14-at-14-09-20-3a322487.jpg", link: "/register/eniac" },
        { title: "Smartdroid", description: "Smartdroid under Spectrum is an exciting Android development hackathon where participants innovate and build cutting-edge mobile applications.", image: "https://i.postimg.cc/pdmDfQ0W/Whats-App-Image-2025-01-14-at-14-09-21-a703fd53.jpg", link: "/register/smartdroid" },
      ],
    },
    {
      title: "SPECTRUM- LIT",
      cards: [
        { title: "Poesis", description: "Poetry holds the extraordinary power to touch hearts profoundly. It gives voice to emotions and feelings through words. Spectrum proudly presents POESIS.", image: "https://i.postimg.cc/13Lnwkbt/Whats-App-Image-2025-01-15-at-18-09-07-8295c63e.jpg", link: "/register/poesis" },
        { title: "Moments", description: "Photographers are silent storytellers, capturing emotions and tales too intricate for words. Spectrum proudly presents Moments, a segment for timeless snapshots.", image: "https://i.postimg.cc/Zqp9cfhL/Whats-App-Image-2025-01-15-at-18-09-06-5c1f0a83.jpg", link: "/register/moments" },
        { title: "Minimalist", description: "Spectrum proudly presents Minimalist, a creative doodling contest where simplicity meets imagination. Let your ideas flow through minimal strokes and shapes.", image: "https://i.postimg.cc/g05tP2wD/Whats-App-Image-2025-01-14-at-14-09-18-cc315aa1.jpg", link: "/register/minimalist" },
        { title: "Knock Your Heads", description: "Knock Your Heads is an exciting quiz competition under Spectrum, designed to challenge your intellect and test your knowledge across diverse domains.", image: "https://i.postimg.cc/6QTbSvQq/Whats-App-Image-2025-01-14-at-14-09-18-5d2cbd4e.jpg", link: "/register/knockyourheads" },
        { title: "Memecraft", description: "Get ready to tickle funny bones with Memecraft, the ultimate meme competition! Unleash your creativity, and humor to craft memes that speak louder than words.", image: "https://i.postimg.cc/13mjGThp/Whats-App-Image-2025-01-14-at-14-09-18-a7a58cbe.jpg", link: "/register/memecraft" },
        { title: "Electrohunt", description: "Gear up for Electrohunt, the thrilling treasure hunt competition! Put your problem-solving skills to the test as you decode clues and chase hidden treasures.", image: "https://i.postimg.cc/1XDjB13K/Whats-App-Image-2025-01-14-at-14-09-22-4be01527.jpg", link: "/register/electrohunt" },
        { title: "IPL Auction", description: "IPL Auction is an exciting event under Spectrum, where strategy and sportsmanship collide! Teams bid, talents are discovered, and the thrill of cricket takes center stage.", image: "https://i.postimg.cc/rwfYQJM7/Whats-App-Image-2025-01-14-at-14-09-19-9decc442.jpg", link: "/register/iplauction" },
        { title: "Open Mic", description: "Open Mic under Spectrum is the perfect platform to express your creativity in your own unique way. Whether through poetry, storytelling, or music.", image: "https://i.postimg.cc/sDycJdCH/open.jpg", link: "/register/openmic" },
        { title: "Chamber of Secrets", description: "Chamber of Secrets under Spectrum is an exhilarating puzzle competition where participants must decode a website-crashing mystery. Dive into cryptic clues.", image: "https://i.postimg.cc/ry43MxNt/Whats-App-Image-2025-01-14-at-14-09-21-f249a60f.jpg", link: "/register/chamberofsecrets" },
        { title: "Get Hired", description: "Get Hired under Spectrum is more than just an interview competition. It’s a dynamic challenge that tests your overall professional skills and communication.", image: "https://i.postimg.cc/jdQ1JT9x/Whats-App-Image-2025-01-14-at-14-09-20-6d798c7c.jpg", link: "/register/gethired" },
      ],
    },
    {
      title: " ",
      cards: [
        { title: "ECE Orientation", description: "ECS proudly conducts an Orientation for ECE department freshers, where professors and seniors warmly welcome them into the world of electronics and communication.", image: "https://i.postimg.cc/xdYFR1kp/Whats-App-Image-2025-01-15-at-19-29-40-435b3f50.jpg", link: "/orientation" },
        { title: "Utkrishta", description: "ECS hosts Utkrishta, a vibrant fresher’s event to welcome the new ECE batch. The celebration fills with fun activities, introductions, and opportunities to bond.", image: "https://i.postimg.cc/CLCJ3Yys/MJ-9663.jpg", link: "/utkrishtha" },
        { title: "Speaker Sessions", description: "The Electronics and Communication Society (ECS) hosts an insightful Speaker Session, where industry experts and professionals share their experiences and knowledge.", image: "https://res.cloudinary.com/dsj9gr1o3/image/upload/v1724355786/Speakersess_lmlwvl.jpg", link: "/more" },
        { title: "EC:ArQ", description: "For the first time, ECS presented its inaugural module at Tecnoesis 2024—inspired by the journey of Interstellar. ARDUINO-QUEST was a space-themed challenge.", image: "https://i.postimg.cc/rpBGJhYV/Whats-App-Image-2025-01-15-at-19-48-18-45437702.jpg", link: "/more" },
        { title: "Spectre-Annual Magazine", description: "Spectre, the official magazine of ECS, is a celebration of innovation, creativity, and knowledge in the field of electronics and communication.", image: "https://i.postimg.cc/N0zCw7JS/Whats-App-Image-2025-01-15-at-19-39-43-7a9a294b.jpg", link: "https://drive.google.com/file/d/1dM8ZesvACufTI_GQJ2C8sdzZygvDT3jR/view?usp=drive_link" },
        { title: "Dehleez", description: "Dehleez, the farewell ceremony organized by ECS, is a heartfelt celebration of the graduating ECE batch. The event honors their achievements and cherishes memories.", image: "https://i.postimg.cc/z3YLhX8R/IMG-20250903-WA0011.jpg", link: "/dehleez" },
      ],
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#01080b] bg-[radial-gradient(#06b6d4_0.7px,transparent_0.7px)] [background-size:32px_32px] overflow-hidden pb-20">
      
      <div className="absolute top-[25%] left-[5%] w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[5%] w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <HeroSection />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 mt-12">
        {categories.map((category, index) => (
          <div key={index} className="w-full px-4 sm:px-8">
            
            {category.title.trim() && (
              <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-cyan-500/30" />
                <h2 className="mx-6 text-xl sm:text-2xl font-black tracking-[0.25em] text-[#00d1ff] uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  {category.title}
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-cyan-500/30" />
              </div>
            )}

            {/* 🖥️ RESPONSIVE CARDS GRID SYSTEM: 1 card on mobile, 2 on tablets, and exactly 3 on laptop screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
              {category.cards.map((card, idx) => (
                <EventCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  categoryTitle={category.title}
                />
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;