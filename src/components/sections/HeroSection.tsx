"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Activity, 
  Headset, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/StatCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroEnvironment } from "@/components/ui/HeroEnvironment";
import { FadeInUp } from "@/lib/animations";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-6 pb-16 bg-[#030712]">
      {/* Background Lighting and Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/60 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: 45% Width Typographic Lockup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FadeInUp}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Cyber Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071328]/90 border border-cyan-500/30 text-[11px] font-bold text-cyan-400 tracking-[0.08em] uppercase backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLOUD. SECURITY. AI. INNOVATION.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-[-0.03em] text-white leading-[1.06]">
              Build. Secure. <br />
              Scale. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#00A2FF] to-[#0072FF]">
                With CloudMatrix.
              </span>
            </h1>

            {/* Subheading Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed font-normal tracking-tight">
              CloudMatrix Systems helps businesses and startups build, secure, and scale modern digital infrastructure on the cloud with AI-powered solutions and world-class security.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold rounded-xl px-7 py-6 cursor-pointer shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:opacity-95 transition-all"
              >
                <Link href="#contact" className="flex items-center gap-2 text-sm tracking-wide">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl px-7 py-6 cursor-pointer text-sm"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 55% Width Unboxed 3D Environment Layer */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <HeroEnvironment />
          </div>

        </div>

        {/* Feature Highlights Ribbon inside GlassCard */}
        <GlassCard glowColor="cyan" className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            
            <div className="flex items-start gap-4 pr-2 pt-2 sm:pt-0">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-sm tracking-tight">Cloud Engineering</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Design, deploy and manage scalable cloud infrastructure on AWS and beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pl-0 sm:pl-4 pr-2 pt-4 sm:pt-0">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-sm tracking-tight">Cybersecurity</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Protect your systems with advanced security, monitoring and compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pl-0 sm:pl-4 pr-2 pt-4 sm:pt-0">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-sm tracking-tight">AI & Automation</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Leverage AI and automation to optimize workflows and drive innovation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pl-0 sm:pl-4 pt-4 sm:pt-0">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-sm tracking-tight">Scalable Solutions</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Future-ready solutions designed to grow with your business.
                </p>
              </div>
            </div>

          </div>
        </GlassCard>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users} value="50+" label="Happy Clients" />
          <StatCard icon={CheckCircle2} value="120+" label="Projects Delivered" />
          <StatCard icon={Activity} value="99.9%" label="Uptime & Reliability" />
          <StatCard icon={Headset} value="24/7" label="Support" />
        </div>

      </div>
    </section>
  );
};