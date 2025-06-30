"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080?random=8"
          alt="Ugandan Landscape with Nutrition Imagery"
          className="absolute min-h-full min-w-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Pure Nutrition from Uganda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-3xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow"
          >
            Discover the unmatched quality of Nutrawell Organics and the vibrant
            flavors of Happy Sips
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/products"
              className="bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white/30 transition-transform transform hover:scale-105 shadow-lg"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
