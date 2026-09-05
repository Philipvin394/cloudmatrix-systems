
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  gradientTitle,
  description,
  align = "center",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl space-y-4 mb-12", alignmentClasses[align], className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title} {gradientTitle && <span className="text-gradient-cyan">{gradientTitle}</span>}
      </h2>

      {description && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};