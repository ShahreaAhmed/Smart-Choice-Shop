"use client";

import { motion } from "framer-motion";
import React from "react";

export default function contactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7ff] via-white to-[#e9edff] text-gray-800">

      {/* Page Title */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight"
        >
          Get in <span className="text-[#010966]">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-xl mx-auto mt-4"
        >
          We're here to help with anything — Orders, Support, Partnership, or General Questions.
        </motion.p>
      </section>

      {/* Content Wrapper */}
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-20">

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/40 border border-white/60 p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-3xl font-semibold mb-6">Smart Choice Support</h2>

          <p className="text-gray-700 mb-8">
            Contact us using the form or reach out through email or social platforms.
          </p>

          <div className="space-y-6">

            <div>
              <h4 className="font-semibold text-[#010966] text-lg">📍 Our Location</h4>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#010966] text-lg">📧 Email Us</h4>
              <p className="text-gray-600">smartchoice.support@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#010966] text-lg">📞 Call Us</h4>
              <p className="text-gray-600">+880 1890-000000</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#010966] text-lg">🌐 Social Media</h4>
              <div className="flex gap-5 mt-2 text-gray-700">
                <a href="#" className="hover:text-[#010966]">Facebook</a>
                <a href="#" className="hover:text-[#010966]">Instagram</a>
                <a href="#" className="hover:text-[#010966]">X</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Glass Contact Form */}
        <motion.form
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="backdrop-blur-xl bg-[#010966]/90 p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] grid gap-6"
>
  <h2 className="text-3xl font-semibold text-white mb-2">Send Us a Message</h2>

  <input
    type="text"
    placeholder="Your Name"
    className="p-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
  />

  <input
    type="email"
    placeholder="Email Address"
    className="p-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
  />

  <input
    type="text"
    placeholder="Subject"
    className="p-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
  />

  <textarea
    placeholder="Write your message here..."
    className="p-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 h-32"
  ></textarea>

  <button
    type="submit"
    className="bg-white text-[#010966] py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
  >
    Submit Message
  </button>
</motion.form>
      </section>
    </div>
  );
}
