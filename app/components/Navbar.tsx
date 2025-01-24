"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "../utils/motion";
import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Add scroll event listener to close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]); // Only re-run effect if isMenuOpen changes

  return (
    <header className="fixed w-full top-0 z-50 bg-primary-black/90 backdrop-blur-sm">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="xPaddings py-8 relative"
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="innerWidth mx-auto flex justify-between gap-8 relative">
          <motion.a 
            href="#hero"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/10 backdrop-blur-sm"
          >
            <Image
              src="/home.svg"
              width={24}
              height={24}
              alt="home"
              className="object-contain"
            />
          </motion.a>
          <h2 className="font-extrabold text-[32px] leading-[30.24px] text-white">
            The AI Novel by Brian.L.Merritt
          </h2>
          <div className="relative">
            <Image
              src="/menu.svg"
              width={24}
              height={24}
              alt="menu"
              className="object-contain cursor-pointer"
              onClick={toggleMenu}
            />
            <AnimatePresence>
              {isMenuOpen && Array.isArray(navLinks) && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg py-2"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-white/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
