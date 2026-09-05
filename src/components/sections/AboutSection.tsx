"use client";

import React from "react";
import Link from "next/link";
import { Lightbulb, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CloudMatrixLogo } from "@/components/ui/CloudMatrixLogo";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies to keep your cloud infrastructure steps ahead of industry standards.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We build with zero-trust principles, transparent communication, and absolute commitment to security.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every deployment and architecture blueprint is designed to meet strict enterprise standards.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your operational growth, system stability, and engineering success drive every decision we make.",
    color: "cyan",
  },
];

export const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="ABOUT US"
          title="Engineering the Future of"
          gradientTitle="Cloud, Security & AI."
          description="CloudMatrix Systems is committed to helping businesses build, secure, and scale their digital future with confidence."
        />

        {/* Company Overview Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Who We Are</h3>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We are a team of passionate cloud engineers, security specialists, and AI developers focused on building bulletproof digital infrastructure. We bridge the gap between complex enterprise architectures and modern, scalable engineering.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Our mission is to empower organizations with secure, scalable, and intelligent cloud solutions that drive speed, resilience, and sustainable innovation.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <GlassCard glowColor="purple" className="p-8 w-full flex flex-col items-center justify-center text-center space-y-4">
              <CloudMatrixLogo size={120} showText={false} />
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  OUR CORE MISSION
                </span>
                <p className="text-sm text-slate-300 font-medium">
                  Building resilient, AI-powered cloud systems engineered for global scale.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard
                  key={index}
                  glowColor={item.color as "cyan" | "purple" | "blue"}
                  className="space-y-3 p-6"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Partnership Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0B0F17] to-slate-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Let’s Build the Future Together</h4>
            <p className="text-sm text-slate-400">Partner with us and take your business infrastructure to the next level.</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold px-6 py-5 rounded-xl cursor-pointer"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};