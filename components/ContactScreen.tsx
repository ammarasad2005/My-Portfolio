'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactScreen() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* HERO TITLE & STICKY NOTE */}
      <div className="flex items-start justify-between pt-1">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1F1F] leading-tight max-w-[380px]">
            Let&apos;s build something great together.
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-[380px] leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Taped Sticky Note */}
        <div className="relative bg-[#EAE1BD] border border-[#D8CEAA] shadow-xs rotate-[3deg] px-4 py-2 rounded-2xs select-none hover:rotate-[1.5deg] transition-transform duration-300">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-9 h-3.5 bg-[#E2D4B9]/80 backdrop-blur-[0.5px] border border-[#D4C5A9] rotate-[-1deg] shadow-2xs"></div>
          <span className="font-script text-2xl sm:text-3xl text-[#333333] block leading-none pt-0.5 whitespace-nowrap">
            Get in touch
          </span>
        </div>
      </div>

      {/* CONTACT METADATA STACK */}
      <div className="flex flex-col gap-4 py-3 border-y border-[#E0D8CE]/60">
        {/* Email */}
        <div className="flex items-start gap-3">
          <svg className="w-4 h-4 text-[#1F1F1F] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1F1F1F]">Email</span>
            <a href="mailto:ammar.asad.dev@gmail.com" className="text-xs text-[#555555] hover:text-[#D6702C] transition-colors">
              ammar.asad.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <svg className="w-4 h-4 text-[#1F1F1F] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1F1F1F]">Location</span>
            <span className="text-xs text-[#555555]">Islamabad, Pakistan</span>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-3">
          <svg className="w-4 h-4 text-[#1F1F1F] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1F1F1F]">Availability</span>
            <span className="text-xs text-[#D6702C] font-medium">Open for opportunities</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CONTACT FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 pt-1">
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-[#E2EBD8] border border-[#B8D1A3] text-[#2C521A] text-xs sm:text-sm p-3 rounded-md font-medium flex items-center justify-between shadow-2xs"
            >
              <span>✓ Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[#F0ECE4] border border-[#D8CEBA] rounded-md px-4 py-3 text-xs sm:text-sm text-[#1F1F1F] placeholder:text-[#888888] hover:border-[#B8AB96] focus:border-[#1F1F1F] focus:bg-[#F7F4EE] outline-none transition-all duration-200"
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[#F0ECE4] border border-[#D8CEBA] rounded-md px-4 py-3 text-xs sm:text-sm text-[#1F1F1F] placeholder:text-[#888888] hover:border-[#B8AB96] focus:border-[#1F1F1F] focus:bg-[#F7F4EE] outline-none transition-all duration-200"
        />

        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#F0ECE4] border border-[#D8CEBA] rounded-md px-4 py-3 text-xs sm:text-sm text-[#1F1F1F] placeholder:text-[#888888] hover:border-[#B8AB96] focus:border-[#1F1F1F] focus:bg-[#F7F4EE] outline-none transition-all duration-200 resize-none"
        ></textarea>

        {/* Submit CTA Button */}
        <button
          type="submit"
          className="group w-full bg-[#1F1F1F] text-white py-3.5 rounded-md font-medium text-xs sm:text-sm hover:bg-[#333333] active:scale-[0.995] transition-all duration-200 flex items-center justify-center gap-2 shadow-xs hover:shadow-md cursor-pointer mt-1"
        >
          <span>Send Message</span>
          <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
        </button>
      </form>
    </div>
  );
}
