"use client";

import React from "react";
import Link from "next/link";
import { 
  Cloud, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  Server, 
  Activity, 
  Database,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Design, build, and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud.",
    color: "cyan",
  },
  {
    icon: Server,
    title: "Cloud Migration",
    description: "Migrate your legacy infrastructure to the cloud with zero downtime and optimized cost structure.",
    color: "blue",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description: "Automate your CI/CD deployment pipelines for rapid, reliable, and secure software delivery.",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Protect your workloads with advanced threat defense, monitoring, and SOC compliance.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Leverage custom AI models and intelligent automation to streamline operations.",
    color: "purple",
  },
  {
    icon: Server,
    title: "Managed Services",
    description: "24/7 cloud management and proactive infrastructure maintenance so you can focus on scale.",
    color: "blue",
  },
  {
    icon: Activity,
    title: "Cloud Monitoring",
    description: "Real-time telemetry, log analytics, and intelligent alerts to guarantee high availability.",
    color: "cyan",
  },
  {
    icon: Database,
    title: "Backup & Disaster Recovery",
    description: "Ensure operational resilience with automated snapshot backups and failover solutions.",
    color: "blue",
  },
];

export const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="OUR SERVICES"
          title="Powerful Services."
          gradientTitle="Endless Possibilities."
          description="We deliver end-to-end cloud, security, and AI solutions engineered to help your startup scale reliably."
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard
                key={index}
                glowColor={service.color as "cyan" | "purple" | "blue"}
                className="flex flex-col justify-between group cursor-pointer space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
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

        {/* Callout Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0B0F17] to-slate-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Need a custom enterprise solution?</h4>
            <p className="text-sm text-slate-400">Let’s discuss how we can architect an infrastructure tailored to your exact needs.</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold px-6 py-5 rounded-xl cursor-pointer"
          >
            <Link href="#contact" className="flex items-center gap-2">
              Talk to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};