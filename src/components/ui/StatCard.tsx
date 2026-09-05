import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/20 transition-all">
      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{value}</div>
        <div className="text-xs sm:text-sm font-medium text-slate-400">{label}</div>
      </div>
    </div>
  );
};