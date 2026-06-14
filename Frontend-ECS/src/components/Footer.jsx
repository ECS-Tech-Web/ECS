import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const leftLinks = [
    { name: "Resource Hub", href: "/Resource+Hub" },
    { name: "Messages", href: "/messages" },
    { name: "Annual Attraction", href: "/annual-attraction" },
  ];

  const rightLinks = [
    { name: "Members", href: "/members" },
    { name: "Gallery", href: "/photogallery" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/groups/245209962205928",
      icon: "https://i.postimg.cc/2jgC8H73/Facebook.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ecs.nits/",
      icon: "https://www.citypng.com/public/uploads/preview/hd-white-instagram-round-logo-icon-png-7017516951188732y4dxbmogd.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/electronics-and-communication-society-nit-silchar?trk=blended-typeahead",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png",
    },
  ];

  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-8 px-4 overflow-hidden">
      {/* Background radial accent glow to give it a modern SaaS dashboard feeling */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 items-start pb-12 border-b border-slate-900">
          
          {/* Left Column: Quick Links 1 */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {leftLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column: Core Branding & Identity Contact */}
          <div className="flex flex-col items-center text-center order-first md:order-none sm:col-span-2 md:col-span-1 bg-slate-900/10 border border-slate-900/40 p-6 rounded-2xl backdrop-blur-sm">
            <a href="/" className="mb-4 block transition-transform hover:scale-105 duration-300">
              <img
                src="https://i.postimg.cc/zGFN7qZR/Mask-group.png"
                alt="ECS Logo"
                className="h-16 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]"
              />
            </a>
            
            <p className="text-xs font-bold tracking-widest text-white uppercase mb-1">
              Electronics & Communication Society
            </p>
            <p className="text-[11px] text-slate-500 mb-4">NIT Silchar</p>

            <a
              href="mailto:ecs.nitsilchar2025@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition"
            >
              <Mail size={12} className="text-indigo-400" />
              <span>ecs.nitsilchar2025@gmail.com</span>
            </a>
          </div>

          {/* Right Column: Quick Links 2 */}
          <div className="space-y-4 sm:text-left md:text-right md:justify-self-end">
            <h3 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Community
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {rightLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex md:flex-row-reverse items-center gap-1 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-600 font-medium">
          <p>© {currentYear} ECS NIT Silchar. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-4 w-4 object-contain filter brightness-90 hover:brightness-100 transition-all"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;