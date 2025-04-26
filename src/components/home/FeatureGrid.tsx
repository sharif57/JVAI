"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  color: string
}

const FeatureCard = ({ icon, title, color }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-[#E5F9FE] bg-opacity-10 backdrop-blur-md border-2 border-white rounded-3xl p-8 flex flex-col items-center h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.2 },
      }}
    >
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${color}`}>{icon} bbbb</div>
      <h3 className="text-center text-gray-800 font-medium text-sm sm:text-base">{title}</h3>
    </motion.div>
  )
}
 
export default function FeaturesGrid() {

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <path d="M9 3v18M3 9h18" strokeWidth="2" />
        </svg>
      ),
      title: "Customizable with Elementor",
      color: "bg-pink-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Well Documentations",
      color: "bg-blue-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" />
        </svg>
      ),
      title: "Responsive Ready",
      color: "bg-purple-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Header & Footer Builder",
      color: "bg-cyan-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" />
        </svg>
      ),
      title: "Free Google Fonts",
      color: "bg-red-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-teal-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Advance Theme Options",
      color: "bg-teal-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Fast & Friendly Supports",
      color: "bg-indigo-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" />
        </svg>
      ),
      title: "SEO Friendly Theme",
      color: "bg-green-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Contact Form 7",
      color: "bg-blue-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Easy Lifetime Update",
      color: "bg-emerald-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-sky-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "One Click Demo Import",
      color: "bg-sky-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-rose-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M7.38 12l5.74 9.94" strokeWidth="2" />
        </svg>
      ),
      title: "Unlimited Colour Options",
      color: "bg-rose-100",
    },
  ]
  

  return (
    <div className={`relative overflow-hidden bg-[url("/home/feature-bg.png")] bg-cover bg-no-repeat `}>
    {/* <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-16 px-4 md:px-8 lg:px-16"> */}
      <div className="max-w-7xl mx-auto pt-16 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <motion.p 
              className="text-blue-600 font-medium mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Elevate your workflow
            </motion.p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Our Impressive Features
            </motion.h1>
          </div>

          <div className="flex gap-3">
            <motion.div
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-bold mr-1">90+</span> LIVE DEMO
            </motion.div>
            <motion.div
              className="flex items-center bg-white border border-blue-200 text-blue-500 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="font-bold mr-1">900+</span> PAGES
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} color={feature.color} />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-100 rounded-full opacity-30 blur-3xl -z-10"></div> */}
    </div>
  )
}
