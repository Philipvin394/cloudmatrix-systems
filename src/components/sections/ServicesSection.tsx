"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  Server, 
  Activity, 
  Database,
  ArrowRight,
  X,
  CheckCircle2,
  Terminal,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    id: "cloud-engineering",
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Design, build, and manage scalable cloud infrastructure on AWS, Azure, and Google Cloud.",
    color: "cyan",
    badgeText: "AWS & Multi-Cloud",
    details: {
      overview: "We architect resilient, cost-effective cloud foundations using Infrastructure as Code (IaC) to guarantee high availability, zero manual drift, and automatic load scaling.",
      features: [
        "AWS VPC, Transit Gateway, and multi-region network design",
        "Terraform & AWS CloudFormation IaC automation",
        "EC2 Auto Scaling Groups with Application Load Balancers",
        "Cost optimization, Spot Instance policies, and Savings Plans"
      ],
      techStack: ["AWS", "Azure", "Terraform", "CloudFormation", "Docker"],
      deliverable: "Production-ready automated multi-region cloud landing zone."
    }
  },
  {
    id: "cloud-migration",
    icon: Server,
    title: "Cloud Migration",
    description: "Migrate your legacy infrastructure to the cloud with zero downtime and optimized cost structure.",
    color: "blue",
    badgeText: "Zero Downtime",
    details: {
      overview: "Seamlessly transition physical servers, legacy VMs, or monolithic applications to modern cloud instances with zero data loss and uninterrupted live traffic.",
      features: [
        "Re-hosting (Lift-and-Shift) and Re-platforming strategies",
        "Live database replication with zero downtime cutover",
        "Legacy application containerization",
        "Post-migration security and cost benchmarking"
      ],
      techStack: ["AWS MGN", "DMS", "PostgreSQL", "Docker", "VMware"],
      deliverable: "Complete cloud migration with verified fallback & uptime guarantees."
    }
  },
  {
    id: "devops-automation",
    icon: GitBranch,
    title: "DevOps & Automation",
    description: "Automate your CI/CD deployment pipelines for rapid, reliable, and secure software delivery.",
    color: "purple",
    badgeText: "CI/CD Pipelines",
    details: {
      overview: "Accelerate your product release cycle with enterprise CI/CD automation, container orchestration, and automated code analysis before production deployments.",
      features: [
        "GitHub Actions, GitLab CI, and AWS CodePipeline setup",
        "Kubernetes (EKS / GKE) & Docker container orchestration",
        "Automated SAST / DAST vulnerability scans in pipelines",
        "Zero-downtime Blue/Green and Canary deployment strategies"
      ],
      techStack: ["GitHub Actions", "Kubernetes", "Helm", "Argocd", "Docker"],
      deliverable: "Automated pipeline pushing code to production in minutes."
    }
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Protect your workloads with advanced threat defense, monitoring, and SOC compliance.",
    color: "cyan",
    badgeText: "SOC2 & ISO Ready",
    details: {
      overview: "Harden your cloud environment against zero-day vulnerabilities, unauthorized access, and data leaks with continuous automated compliance auditing.",
      features: [
        "IAM role hardening & least-privilege policy enforcement",
        "AWS WAF, GuardDuty, and Security Hub integration",
        "Automated penetration testing and CVE management",
        "SOC2, ISO27001, and GDPR compliance audit readiness"
      ],
      techStack: ["AWS WAF", "GuardDuty", "Wireshark", "Vault", "Kali Linux"],
      deliverable: "Hardened perimeter with automated threat mitigation."
    }
  },
  {
    id: "ai-machine-learning",
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Leverage custom AI models and intelligent automation to streamline operations.",
    color: "purple",
    badgeText: "Custom AI & RAG",
    details: {
      overview: "Embed custom language models, intelligent document processing, and automated predictive decision engines directly into your Next.js and cloud applications.",
      features: [
        "Retrieval-Augmented Generation (RAG) vector search",
        "AWS Bedrock, Claude API, and SageMaker model tuning",
        "Automated document processing & data pipelines",
        "Real-time AI bot & assistant orchestration"
      ],
      techStack: ["Python", "AWS Bedrock", "LangChain", "Pinecone", "Next.js"],
      deliverable: "Custom enterprise AI agent deployed with secure data isolation."
    }
  },
  {
    id: "managed-services",
    icon: Server,
    title: "Managed Services",
    description: "24/7 cloud management and proactive infrastructure maintenance so you can focus on scale.",
    color: "blue",
    badgeText: "24/7 Monitoring",
    details: {
      overview: "Outsource continuous infrastructure health, security patches, OS upgrades, and cost reduction checks to dedicated certified cloud architects.",
      features: [
        "24/7 Incident response and 99.99% uptime SLAs",
        "Routine OS patching and dependency vulnerability updates",
        "Monthly executive cloud performance & cost audit reports",
        "Dedicated cloud architecture Slack/Teams support channel"
      ],
      techStack: ["AWS Amplify", "Datadog", "PagerDuty", "Terraform"],
      deliverable: "Fully managed infrastructure with SLA guarantees."
    }
  },
  {
    id: "cloud-monitoring",
    icon: Activity,
    title: "Cloud Monitoring",
    description: "Real-time telemetry, log analytics, and intelligent alerts to guarantee high availability.",
    color: "cyan",
    badgeText: "Real-time Telemetry",
    details: {
      overview: "Transform unstructured logs into visual performance dashboards, real-time alert triggers, and bottleneck diagnosis before users notice latency.",
      features: [
        "Custom CloudWatch, Grafana, and Prometheus dashboards",
        "Instant alerts routed via PagerDuty, Slack, or Email",
        "Centralized log ingestion with S3/OpenSearch archival",
        "Full APM (Application Performance Monitoring) tracking"
      ],
      techStack: ["CloudWatch", "Grafana", "Prometheus", "OpenSearch"],
      deliverable: "Live operational telemetry dashboard with alert rules."
    }
  },
  {
    id: "disaster-recovery",
    icon: Database,
    title: "Backup & Disaster Recovery",
    description: "Ensure operational resilience with automated snapshot backups and failover solutions.",
    color: "blue",
    badgeText: "Instant Recovery",
    details: {
      overview: "Mitigate catastrophic region outages, ransomware attacks, or human errors with automated, cross-region multi-cloud backup replicas.",
      features: [
        "Automated cross-region database snapshot replication",
        "Custom RPO (Recovery Point) & RTO (Recovery Time) SLAs",
        "Immutable, air-gapped backup storage configurations",
        "Automated failover chaos engineering simulation tests"
      ],
      techStack: ["AWS Backup", "S3 Glacier", "RDS Multi-AZ", "Route 53"],
      deliverable: "Automated failover setup verified with simulated recovery drills."
    }
  },
];

const colorStyles = {
  cyan: {
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    textHover: "group-hover:text-cyan-300",
    arrowHover: "group-hover:text-cyan-400",
    linkText: "text-cyan-400",
    glowBorder: "border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    pill: "bg-cyan-950/60 text-cyan-300 border-cyan-800/50",
  },
  blue: {
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    textHover: "group-hover:text-blue-300",
    arrowHover: "group-hover:text-blue-400",
    linkText: "text-blue-400",
    glowBorder: "border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    pill: "bg-blue-950/60 text-blue-300 border-blue-800/50",
  },
  purple: {
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    textHover: "group-hover:text-purple-300",
    arrowHover: "group-hover:text-purple-400",
    linkText: "text-purple-400",
    glowBorder: "border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    pill: "bg-purple-950/60 text-purple-300 border-purple-800/50",
  },
};

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <AnimatedSection id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="OUR SERVICES"
          title="Powerful Services."
          gradientTitle="Endless Possibilities."
          description="We deliver end-to-end cloud, security, and AI solutions engineered to help your business scale reliably."
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => {
            const Icon = service.icon;
            const theme = colorStyles[service.color as keyof typeof colorStyles];

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedService(service)}
                className="block group cursor-pointer"
              >
                <GlassCard
                  glowColor={service.color as "cyan" | "purple" | "blue"}
                  className="h-full flex flex-col justify-between space-y-4 p-6 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${theme.badgeBg} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className={`w-5 h-5 text-slate-600 ${theme.arrowHover} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                    </div>

                    <h3 className={`text-xl font-bold text-white ${theme.textHover} transition-colors`}>
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                    <span className={`text-xs font-semibold ${theme.linkText} flex items-center gap-1.5 group-hover:translate-x-1 transition-transform`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {service.badgeText}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Pop-up GlassModal Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`relative w-full max-w-2xl rounded-3xl bg-[#090D16]/90 border p-6 sm:p-8 backdrop-blur-2xl text-slate-100 ${colorStyles[selectedService.color as keyof typeof colorStyles].glowBorder}`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl border ${colorStyles[selectedService.color as keyof typeof colorStyles].badgeBg}`}>
                    {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase tracking-widest rounded-full border mb-1 ${colorStyles[selectedService.color as keyof typeof colorStyles].pill}`}>
                      {selectedService.badgeText}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Overview Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                  {selectedService.details.overview}
                </p>

                {/* Features Grid */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-400" /> Key Engineering Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Primary Deliverable */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.details.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Deliverable
                    </span>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/30 border border-emerald-800/40 p-2.5 rounded-lg">
                      <Terminal className="w-4 h-4 shrink-0" />
                      <span>{selectedService.details.deliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 text-center sm:text-left">
                    Ready to deploy this capability for CloudMatrix Systems?
                  </span>
                  <Button
                    asChild
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Link href="#contact" className="flex items-center justify-center gap-2">
                      Request Solution Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Callout Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0B0F17] to-slate-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Need a custom enterprise solution?</h4>
            <p className="text-sm text-slate-400">Let’s discuss how we can architect an infrastructure tailored to your exact needs.</p>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold px-6 py-5 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
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