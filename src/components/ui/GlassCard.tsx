"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "cyan",
  hoverEffect = true,
  ...props
}) => {
  const glowStyles = {
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(0,242,254,0.2)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_30px_-5px_rgba(121,40,202,0.2)]",
    blue: "hover:border-blue-500/40 hover:shadow-[0_0_30px_-5px_rgba(0,114,255,0.2)]",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn(
        "relative rounded-2xl bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 p-6 overflow-hidden transition-all duration-300",
        hoverEffect && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};