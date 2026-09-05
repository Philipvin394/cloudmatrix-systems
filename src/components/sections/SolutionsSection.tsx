"use client";

import React from "react";
import Link from "next/link";
import { 
  Rocket, 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  HeartPulse, 
  Landmark, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const solutions = [
  {
    icon: Rocket,
    title: "Startup Solutions",
    description: "Affordable cloud infrastructure and automated CI/CD pipelines to help early-stage teams launch faster.",
    color: "cyan",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Secure, highly reliable, and compliant multi-region cloud setups engineered for complex enterprise workloads.",
    color: "blue",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-performance cloud architectures designed to deliver seamless online shopping experiences during traffic spikes.",
    color: "purple",
  },
  {
    icon: GraduationCap,
    title: "Education Solutions",
    description: "Empower learning institutions with scalable, resilient, and secure educational software infrastructure.",
    color: "cyan",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Solutions",
    description: "Secure healthcare data pipelines and compliant storage systems designed to maximize operational efficiency.",
    color: "purple",
  },
  {
    icon: Landmark,
    title: "Government Solutions",
    description: "Strictly audited, resilient, and compliant cloud architectures for public sector organizations.",
    color: "blue",
  },
];

export const SolutionsSection = () => {
  return (
    <AnimatedSection id="solutions" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="OUR SOLUTIONS"
          title="Smart Solutions for"
          gradientTitle="Modern Businesses."
          description="Industry-focused cloud and security architectures tailored to solve real technical challenges with real impact."
        />

        {/* 6-Card Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <GlassCard
                key={index}
                glowColor={solution.color as "cyan" | "purple" | "blue"}
                className="flex flex-col justify-between group cursor-pointer space-y-4 p-7"
              >
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:underline">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Challenge Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0B0F17] to-slate-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Have a unique infrastructure challenge?</h4>
            <p className="text-sm text-slate-400">We design custom solutions tailored specifically to your company’s technical needs.</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold px-6 py-5 rounded-xl cursor-pointer"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Talk with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};
