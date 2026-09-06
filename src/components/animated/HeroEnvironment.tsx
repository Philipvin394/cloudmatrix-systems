"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { floatAnimation, pulseGlow } from "@/lib/animations";

export const HeroEnvironment = () => {
  return (
    <div className="relative w-full h-[520px] sm:h-[620px] flex items-center justify-center overflow-visible">
      {/* Layer 3: Network Circuit Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 150 300 L 450 150 M 200 400 L 500 250 M 100 200 L 400 350"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0072FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Layer 4: Large Radial Cyan Glow */}
      <motion.div
        variants={pulseGlow}
        initial="initial"
        animate="animate"
        className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-[#00F2FE]/25 to-[#0072FF]/20 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Layer 5: Futuristic Circular Platform Base */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[380px] h-[120px] pointer-events-none">
        {/* Outer Glow Ellipse */}
        <div className="absolute inset-0 rounded-[100%] border border-cyan-400/40 bg-cyan-500/10 blur-sm transform rotate-X-[60deg] shadow-[0_0_50px_rgba(0,242,254,0.3)]" />
        {/* Inner Ring Axis */}
        <div className="absolute inset-4 rounded-[100%] border border-blue-500/60 transform rotate-X-[60deg]" />
        {/* Center Light Core Spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-cyan-400/30 blur-md rounded-full" />
      </div>

      {/* Layer 6: Floating Hero Emblem (cm.png) */}
      <motion.div
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        className="relative z-20 w-full max-w-[520px] aspect-square flex items-center justify-center"
      >
        <Image
          src="/cm.png"
          alt="CloudMatrix Systems Platform Emblem"
          width={580}
          height={580}
          priority
          className="object-contain drop-shadow-[0_10px_35px_rgba(0,242,254,0.4)] transition-all duration-300"
        />
      </motion.div>

      {/* Layer 7: Soft Atmospheric Lighting Accent */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-300/10 blur-2xl rounded-full pointer-events-none" />
    </div>
  );
};