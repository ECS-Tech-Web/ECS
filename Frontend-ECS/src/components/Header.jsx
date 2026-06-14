import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { FaUser } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);
    const location = useLocation();

    const [coords, setCoords] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef(null);

    const navLinks = [
        { path: "/annual-attraction", label: "Annual Attraction" },
        { path: "/members", label: "Members" },
        { path: "/developers", label: "Developers" },
        { path: "/Resource+Hub", label: "Resource Hub" },
        { path: "/merch", label: "Merch" },
    ];

    // Automatically snap the dropdown shut on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleMouseEnter = (e) => {
        const element = e.currentTarget;
        const navContainer = navRef.current;
        if (element && navContainer) {
            const elementRect = element.getBoundingClientRect();
            const containerRect = navContainer.getBoundingClientRect();
            setCoords({
                left: elementRect.left - containerRect.left,
                width: elementRect.width,
                opacity: 1
            });
        }
    };

    const handleMouseLeave = () => {
        setCoords((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
        <header className="sticky top-0 z-[100] w-full bg-zinc-950/20 text-white backdrop-blur-md transition-all duration-300 border-b border-white/[0.05]">
            
            <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6">
                
                {/* LOGO */}
                <div className="flex-shrink-0">
                    <Link 
                        to="/" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group relative block transition-transform duration-500 hover:scale-105"
                    >
                        <img
                            src="https://i.postimg.cc/RZrxm2s0/ecs-new-logo-1-black-bg-2.png"
                            className="relative h-11 w-auto object-contain"
                            alt="ECS Logo"
                        />
                    </Link>
                </div>

                {/* DESKTOP NAV */}
                <nav 
                    ref={navRef}
                    className="relative hidden md:flex items-center rounded-full bg-white/[0.01] border border-white/[0.05] p-1.5"
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className="absolute top-1.5 bottom-1.5 rounded-full bg-white/[0.08] transition-all duration-300 ease-out pointer-events-none"
                        style={{
                            left: `${coords.left}px`,
                            width: `${coords.width}px`,
                            opacity: coords.opacity,
                        }}
                    />

                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                onMouseEnter={handleMouseEnter}
                                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                                    isActive ? 'text-cyan-400 bg-white/[0.03]' : 'text-zinc-300 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* DESKTOP PROFILE BUTTON */}
                <div className="hidden md:flex items-center">
                    <Link 
                        to={isLoggedIn ? "/profile" : "/sign-up"} 
                        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.02] border border-white/10 text-zinc-300 transition-all duration-300 hover:border-cyan-500/30 hover:text-cyan-400"
                    >
                        <FaUser size={14} />
                    </Link>
                </div>

                {/* SIMPLE MOBILE HAMBURGER BUTTON */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="relative h-10 w-10 flex flex-col justify-center items-center text-zinc-300 hover:text-white focus:outline-none"
                    >
                        <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
                        <span className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
                    </button>
                </div>
            </div>

            {/* SIMPLE IN-FLOW DROPDOWN MENU */}
            <div className={`md:hidden w-full transition-all duration-300 ease-in-out border-t border-white/[0.05] bg-zinc-950/95 backdrop-blur-xl ${
                isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
            }`}>
                <div className="px-6 py-4 flex flex-col space-y-4">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base font-medium py-1 transition-colors duration-200 ${
                                    isActive ? 'text-cyan-400' : 'text-zinc-300 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <div className="h-px w-full bg-white/10 my-2" />

                    {isLoggedIn ? (
                        <Link
                            to="/profile"
                            className="text-base font-medium text-zinc-300 hover:text-white py-1"
                        >
                            Your Profile
                        </Link>
                    ) : (
                        <div className="flex flex-col gap-3 pt-1">
                            <Link
                                to="/sign-in"
                                className="w-full text-center rounded-lg border border-white/10 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/sign-up"
                                className="w-full text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}