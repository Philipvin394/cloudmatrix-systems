"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Thank you! Your message has been sent to CloudMatrix Systems.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="CONTACT US"
          title="Let’s Build Something"
          gradientTitle="Amazing Together."
          description="Have a project in mind or need expert advice? We’d love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out to our engineering and advisory team. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Email Us</h4>
                  <a 
                    href="mailto:chainguardintelligence@gmail.com" 
                    className="text-xs text-cyan-400 hover:underline"
                  >
                    chainguardintelligence@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Call Us</h4>
                  <a href="tel:+233558024125" className="text-xs text-cyan-400 hover:underline">
                    055 8024125
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Office</h4>
                  <p className="text-xs text-slate-400">Accra, Ghana</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Business Hours</h4>
                  <p className="text-xs text-slate-400">Mon – Fri: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B0F17]/90 border border-white/10 p-8 backdrop-blur-xl space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Cloud Infrastructure Consultation"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Your Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your infrastructure goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00F2FE] to-[#0072FF] text-slate-950 font-bold py-6 rounded-xl text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};