"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedLogoReveal = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 8 ? prev + 1 : 1));
    }, 2500); // Transitions through phases every 2.5s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative w-full max-w-2xl py-10">
      {/* Ambient Radial Lighting Ring */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Main SVG Animated Canvas */}
      <div className="relative z-10 w-80 h-80 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(0,242,254,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phase 02: Cloud Outline */}
          <motion.path
            d="M 40 120 A 25 25 0 0 1 60 80 A 35 35 0 0 1 130 70 A 30 30 0 0 1 160 120 Z"
            stroke="url(#cloudGlow)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: step >= 2 ? 1 : 0,
              opacity: step >= 2 ? 1 : 0,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Phase 03: Shield Center */}
          <motion.path
            d="M 100 70 L 125 85 V 110 C 125 125 100 138 100 138 C 100 138 75 125 75 110 V 85 Z"
            stroke="#00F2FE"
            strokeWidth="3.5"
            fill={step >= 7 ? "rgba(0, 242, 254, 0.15)" : "transparent"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: step >= 3 ? 1 : 0,
              opacity: step >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "backOut" }}
          />

          {/* Phase 04: Circuit Lines */}
          <motion.path
            d="M 125 90 L 155 70 M 125 105 L 160 90 M 125 120 L 155 110"
            stroke="#0072FF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: step >= 4 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Phase 05: Network Nodes */}
          {step >= 5 && (
            <>
              <motion.circle cx="155" cy="70" r="4" fill="#00F2FE" initial={{ scale: 0 }} animate={{ scale: 1 }} />
              <motion.circle cx="160" cy="90" r="4" fill="#00F2FE" initial={{ scale: 0 }} animate={{ scale: 1 }} />
              <motion.circle cx="155" cy="110" r="4" fill="#00F2FE" initial={{ scale: 0 }} animate={{ scale: 1 }} />
            </>
          )}

          {/* Phase 06: Data Flow Energy Packets */}
          {step >= 6 && (
            <motion.circle
              cx="125"
              cy="90"
              r="3"
              fill="#FFFFFF"
              animate={{
                cx: [125, 155],
                cy: [90, 70],
                opacity: [1, 0],
              }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          )}

          {/* Color Gradients */}
          <defs>
            <linearGradient id="cloudGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="50%" stopColor="#0072FF" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Phase 08: Brand Reveal Text */}
      <AnimatePresence>
        {step >= 8 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-2 mt-4"
          >
            <h2 className="text-3xl font-extrabold text-white tracking-wider uppercase">
              CloudMatrix <span className="text-cyan-400">Systems</span>
            </h2>
            <p className="text-xs font-semibold text-slate-400 tracking-[0.3em] uppercase">
              BUILD • SECURE • SCALE
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step Indicator Progress Bar */}
      <div className="flex items-center gap-2 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              step === i ? "w-8 bg-cyan-400 shadow-[0_0_10px_#00F2FE]" : "w-3 bg-slate-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};