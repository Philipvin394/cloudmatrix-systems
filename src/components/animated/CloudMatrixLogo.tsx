"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CloudMatrixLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const CloudMatrixLogo: React.FC<CloudMatrixLogoProps> = ({
  size = 36,
  showText = true,
  className = "",
}) => {
  return (
    <div className={cn("inline-flex items-center gap-3 group cursor-pointer", className)}>
      {/* Glow Backlight Effect */}
      <div className="relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cyan-400/30 blur-md rounded-full group-hover:bg-cyan-400/50 transition-all duration-300 pointer-events-none" 
        />
        <Image
          src="/cm.png"
          alt="CloudMatrix Systems Icon"
          width={size}
          height={size}
          priority
          className="relative z-10 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-base font-extrabold tracking-tight text-white leading-none">
            CLOUDMATRIX
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-400 uppercase leading-tight mt-0.5">
            SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
};