import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= EVENTS ================= */

const events = [
  { name: "Chess", slug: "chess", image: "http://3.bp.blogspot.com/-tej14eh_4Rc/UTru-Kx3IWI/AAAAAAAAB7A/hY0iQ0aLTT4/s1600/Salman-Khan-+(35).jpg", buttonImage: "/images/view-button.png", description: "Challenge your mind with strategic moves and tactical skills." },
  { name: "Cricket", slug: "cricket", image: "http://3.bp.blogspot.com/-tej14eh_4Rc/UTru-Kx3IWI/AAAAAAAAB7A/hY0iQ0aLTT4/s1600/Salman-Khan-+(35).jpg", buttonImage: "/images/view-button.png", description: "Show your sportsmanship on the field and score big!" },
  { name: "Badminton", slug: "badminton", image: "http://3.bp.blogspot.com/-tej14eh_4Rc/UTru-Kx3IWI/AAAAAAAAB7A/hY0iQ0aLTT4/s1600/Salman-Khan-+(35).jpg", buttonImage: "/images/view-button.png", description: "Smash your way to victory in exciting badminton matches." },
  { name: "Table Tennis", slug: "table-tennis", image: "http://3.bp.blogspot.com/-tej14eh_4Rc/UTru-Kx3IWI/AAAAAAAAB7A/hY0iQ0aLTT4/s1600/Salman-Khan-+(35).jpg", buttonImage: "/images/view-button.png", description: "Fast-paced matches that test your reflexes and agility." },
  { name: "Futsal", slug: "futsal", image: "/images/futsal.jpg", buttonImage: "/images/view-button.png", description: "Indoor football action with speed, skill, and teamwork." },
  { name: "Relay Race", slug: "relay-race", image: "/images/relay.jpg", buttonImage: "/images/view-button.png", description: "Team coordination and speed make all the difference." },
  { name: "Tug Of War", slug: "tug-of-war", image: "/images/tug-of-war.jpg", buttonImage: "/images/view-button.png", description: "Strength and strategy come together in this classic game." },
  { name: "Minimalist", slug: "minimalist", image: "/images/minimalist.jpg", buttonImage: "/images/view-button.png", description: "Show your creativity in design with simplicity and elegance." },
  { name: "Poesis", slug: "poesis", image: "/images/poesis.jpg", buttonImage: "/images/view-button.png", description: "Express yourself with words and poetic mastery." },
  { name: "Moments", slug: "moments", image: "/images/moments.jpg", buttonImage: "/images/view-button.png", description: "Capture memories and share them in creative ways." },
  { name: "Memecraft", slug: "memecraft", image: "/images/memecraft.jpg", buttonImage: "/images/view-button.png", description: "Make people laugh with your meme-making skills." },
  { name: "Get Hired", slug: "get-hired", image: "/images/get-hired.jpg", buttonImage: "/images/view-button.png", description: "Test your job skills and land your dream opportunity." },
  { name: "Knock Your Heads", slug: "knock-your-heads", image: "/images/knock.jpg", buttonImage: "/images/view-button.png", description: "Solve puzzles and riddles to challenge your brainpower." },
  { name: "Shabd Showdown", slug: "shabd-showdown", image: "/images/shabd.jpg", buttonImage: "/images/view-button.png", description: "A word game battle for language enthusiasts." },
  { name: "Electrohunt", slug: "electrohunt", image: "/images/electrohunt.jpg", buttonImage: "/images/view-button.png", description: "Find clues and solve mysteries with electronics skills." },
  { name: "IPL Auction", slug: "ipl-auction", image: "/images/ipl.jpg", buttonImage: "/images/view-button.png", description: "Bid wisely and assemble the strongest cricket team." },
  { name: "Chamber of Secrets", slug: "chamber-of-secrets", image: "/images/chamber.jpg", buttonImage: "/images/view-button.png", description: "Solve the mystery hidden deep within the chamber." },
  { name: "Fastweb", slug: "fastweb", image: "/images/fastweb.jpg", buttonImage: "/images/view-button.png", description: "Web development challenge with speed and precision." },
  { name: "Curve Crafters", slug: "curve-crafters", image: "/images/curve.jpg", buttonImage: "/images/view-button.png", description: "Engineering creativity to craft the perfect curves." },
  { name: "Eniac", slug: "eniac", image: "/images/eniac.jpg", buttonImage: "/images/view-button.png", description: "Hackathon-style competition to test your coding skills." },
  { name: "Byte the Code", slug: "byte-the-code", image: "/images/byte.jpg", buttonImage: "/images/view-button.png", description: "Coding challenges for problem-solving enthusiasts." },
  { name: "Smartdroid", slug: "smartdroid", image: "/images/smartdroid.jpg", buttonImage: "/images/view-button.png", description: "Robotics competition to build smart machines." },{},{},{}
];

/* ================= BACKGROUND COLORS (MATCH EVENTS LENGTH) ================= */

const backgroundColors = [
  "#020617",
  "#081a3a",
  "#0b2545",
  "#102c57",
  "#14366d",
  "#183d7d",
  "#1b458a",
  "#1f4d99",
  "#2356a8",
  "#275fb7",
  "#2b68c6",
  "#2f71d5",
  "#337ae4",
  "#2c6fd0",
  "#265fb8",
  "#204fa0",
  "#1a3f88",
  "#153070",
  "#102158",
  "#0b1440",
  "#081030",
  "#050a20",
  "#050a20",
  "#050a20",
  "#050a20"
];

/* ================= CARD ================= */

function DepthCard({ event, index, total }) {
  const { scrollYProgress } = useScroll();
  const isLeft = index % 2 === 0;

  const start = index / total;
  const mid = start + 0.08;
  const end = Math.min(start + 0.16, 1);

  const x = useTransform(
    scrollYProgress,
    [start, mid, end],
    [isLeft ? "-15vw" : "15vw", isLeft ? "-15vw" : "15vw", isLeft ? "-120vw" : "120vw"]
  );

  const scale = useTransform(scrollYProgress, [start, mid, end], [0.3, 1, 1.3]);
  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, scale, opacity }}
      className="absolute w-full flex items-center justify-center"
    >
      <div className="relative w-[380px] p-6 bg-gradient-to-b from-[#0f1347] to-[#103360] shadow-xl rounded-[20px] border-2 border-[#008bff]">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-60 object-cover rounded-[20px] border-2 border-[#008bff]"
        />

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-[#00d1ff]">{event.name}</h2>
          <p className="mt-3 text-gray-300 text-sm">{event.description}</p>
        </div>

        <div className="mt-5 flex justify-center">
          <Link to={`/register/${event.slug}`}>
            <img src={event.buttonImage} alt="View More" className="w-10 h-10 cursor-pointer" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= PAGE ================= */

export default function SpectrumHome() {
  const { scrollYProgress } = useScroll();

  const bgColor = useTransform(
    scrollYProgress,
    events.map((_, i) => i / events.length),
    backgroundColors
  );

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="h-[520vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute top-16 text-center z-20">
          <h1 className="text-6xl font-extrabold text-blue-400">SPECTRUM 2025</h1>
          <p className="text-blue-300 mt-4">Move Through the Experience</p>
        </div>

        {events.map((event, index) => (
          <DepthCard
            key={event.slug}
            event={event}
            index={index}
            total={events.length}
          />
        ))}
      </div>
    </motion.div>
  );
}
