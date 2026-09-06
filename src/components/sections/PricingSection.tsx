"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects.",
    monthlyPrice: 350,
    yearlyPrice: 280,
    popular: false,
    cta: "Get Started",
    ctaVariant: "outline" as const,
    features: [
      "1 AWS Account",
      "Basic Support",
      "Up to 2 Projects",
      "Community Access",
    ],
  },
  {
    name: "Pro",
    description: "Great for growing businesses.",
    monthlyPrice: 850,
    yearlyPrice: 680,
    popular: true,
    cta: "Get Started",
    ctaVariant: "cyan" as const,
    features: [
      "3 AWS Accounts",
      "Priority Support",
      "Up to 10 Projects",
      "Monitoring & Alerts",
    ],
  },
  {
    name: "Business",
    description: "Advanced for scaling businesses.",
    monthlyPrice: 1800,
    yearlyPrice: 1440,
    popular: false,
    cta: "Get Started",
    ctaVariant: "outline" as const,
    features: [
      "10 AWS Accounts",
      "24/7 Support",
      "Unlimited Projects",
      "Advanced Security",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    popular: false,
    cta: "Contact Us",
    ctaVariant: "outline" as const,
    features: [
      "Custom AWS Accounts",
      "Dedicated Support",
      "SLA & Compliance",
      "Custom Integrations",
    ],
  },
];

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <AnimatedSection id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="PRICING PLANS"
          title="Simple, Transparent"
          gradientTitle="Pricing for Everyone."
          description="Choose a plan that fits your needs. Upgrade or downgrade anytime."
        />

        {/* Monthly / Yearly Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!isYearly ? "text-white" : "text-slate-400"}`}>
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-slate-800/80 border border-white/10 p-1 transition-colors duration-300 focus:outline-none cursor-pointer"
            aria-label="Toggle Billing Frequency"
          >
            <div
              className={`w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.9)] transition-transform duration-300 ${
                isYearly ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? "text-white" : "text-slate-400"}`}>
            Yearly <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => {
            const price = typeof plan.monthlyPrice === "number"
              ? `GH₵ ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
              : plan.monthlyPrice;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#030d1e]/90 border-2 border-cyan-500/80 shadow-[0_0_35px_-5px_rgba(0,242,254,0.3)] scale-[1.02]"
                    : "bg-[#070c18]/80 border border-white/10 hover:border-cyan-500/30"
                }`}
              >
                {/* Most Popular Centered Header */}
                <div className="min-h-[24px] flex items-center justify-center mb-2">
                  {plan.popular && (
                    <span className="text-xs font-semibold text-cyan-400 tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Plan Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 font-normal leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {price}
                    </span>
                    {typeof plan.monthlyPrice === "number" && (
                      <span className="text-xs text-slate-400 font-medium">/month</span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button CTA */}
                <div className="pt-8">
                  {plan.ctaVariant === "cyan" ? (
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold rounded-xl py-5 text-sm hover:opacity-95 shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                    >
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl py-5 text-sm font-semibold cursor-pointer"
                    >
                      <Link href="#contact">{plan.cta}</Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span>
            Not sure which plan is right for you?{" "}
            <Link href="#contact" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
              Contact us for a free consultation.
            </Link>
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
};