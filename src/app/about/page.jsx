"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const team = [
    {
      id: 1,
      name: "Ruman Ahmed",
      role: "Founder & CEO",
      bio: "Building Smart Choice with the vision of creating a smarter, faster, and more reliable online shopping experience.",
      photo:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sara Karim",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about scalable systems and clean architecture.",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Amin Hasan",
      role: "Product Designer",
      bio: "Focused on delivering delightful user experiences with modern UI/UX principles.",
      photo:
        "https://images.unsplash.com/photo-1545996124-1b2f0c6a6a9c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="w-11/12 mx-auto px-6 pt-20 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-[#010966]"
        >
          About Smart Choice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Smart Choice is a premium eCommerce brand committed to delivering
          quality, trust, and a smart online shopping experience. With curated
          products and a customer-first approach, we help you shop smarter.
        </motion.p>
      </section>

      {/* WHY SMART CHOICE */}
      <section className="w-11/12 mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#010966]">
          Why Choose Smart Choice?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Products",
              desc: "We select high-quality and fully verified products.",
            },
            {
              title: "Secure Shopping",
              desc: "Your payments, data, and orders are fully protected.",
            },
            {
              title: "Fast Support",
              desc: "A dedicated support team always ready to help.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-[#010966]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-11/12 mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#010966]">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border border-gray-100"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow"
              />

              <h3 className="text-lg font-semibold mt-4 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">{member.role}</p>
              <p className="text-gray-600 mt-3 text-center text-sm">
                {member.bio}
              </p>

              <div className="mt-4 flex justify-center gap-4">
                <a
                  href="#"
                  className="hover:text-[#010966] transition text-sm font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-[#010966] transition text-sm font-medium"
                >
                  X
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-11/12 mx-auto pb-28 pt-10">
        <div className="p-8 bg-[#010966] text-white rounded-2xl shadow">
          <h3 className="text-2xl font-semibold">Have any questions?</h3>
          <p className="text-gray-200 mt-2 mb-4">
            Send us a message — we reply within 1–2 business days.
          </p>

          <form className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="p-3 rounded-lg bg-white text-gray-800 border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white text-gray-800 border border-gray-300"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-white text-gray-800 border border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="md:col-span-3 p-3 rounded-lg bg-white text-gray-800 border border-gray-300 h-28"
            />
            <button
              type="submit"
              className="md:col-span-3 bg-white text-[#010966] font-semibold py-3 rounded-lg hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
