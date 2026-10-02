"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let’s Build Something"
          gradientTitle="Scalable & Secure."
          description="Have a project in mind or need expert cloud architecture advice? Send us a message and our team will get back to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Contact Details */}
          <GlassCard glowColor="cyan" className="space-y-6 lg:col-span-1 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fill out the form and our cloud engineering team will review your enquiry and respond within 24 hours.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-semibold text-slate-200">chainguardintelligence@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Call Us</p>
                    <p className="text-sm font-semibold text-slate-200">+233 55 802 4125</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-slate-200">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-xs text-slate-500">24/7 Monitoring & Critical Infrastructure Support</span>
            </div>
          </GlassCard>

          {/* Form */}
          <GlassCard glowColor="blue" className="lg:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Evans"
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="johnevans@gmail.com"
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Cloud Infrastructure & Security Inquiry"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project or infrastructure requirements..."
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#0072FF] px-6 py-4 font-bold text-slate-950 hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Default export fallback so both named and default imports work seamlessly
export default ContactSection;