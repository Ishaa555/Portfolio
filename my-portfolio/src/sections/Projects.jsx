import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Ordering App",
    description:
      "A full-stack MERN application that allows users to browse restaurants, add food items to cart, place orders, and make secure online payments. It includes user authentication, admin dashboard, order tracking, and Stripe payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A real-time weather forecasting web application that provides current weather data, temperature, humidity, wind speed, and future forecasts using external APIs. Designed with responsive UI and optimized performance.",
    tech: ["React", "Weather API", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern animated personal portfolio website showcasing projects, skills, and contact information. Built with smooth animations and responsive layouts for premium user experience.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Mind Care",
    description:
      "Mind Care is a mental wellness platform designed to help users manage stress, anxiety, and emotional well-being. It includes guided meditation resources, mood tracking, daily motivational content, and mental health awareness tools — creating a calm, supportive digital environment.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#050816] text-white py-20 px-6 relative overflow-hidden">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        <span className="text-teal-400"> My Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#0a0f1f] p-8 rounded-2xl border border-teal-500/10 
                       hover:border-teal-400/40 
                       hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
                       transition-all duration-500"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-500/10 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold
                        bg-gradient-to-r from-teal-400 to-emerald-500
                        hover:from-teal-300 hover:to-emerald-400
                        text-black transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}