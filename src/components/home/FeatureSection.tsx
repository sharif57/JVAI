"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";

const FeatureCard = ({
  icon,
  title,
  color,
}: {
  icon: string;
  title: string;
  color: string;
}) => {
  return (
    <motion.div
      className='bg-[#E5F9FE] bg-opacity-10 backdrop-blur-md border-2 border-white rounded-3xl p-8 flex flex-col items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <div className='mb-6'>
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={60}
          height={60}
        />
      </div>
      <h3 className='text-2xl font-bold mb-4 text-gray-800'>{title}</h3>
      <p className='text-gray-600 text-center mb-6'>
        Rapidiously incentivize professional e-tailers and interactive
        web-readiness
      </p>
      <motion.button
        className={`px-6 py-2 rounded-lg text-white font-medium ${color} cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        READ MORE
      </motion.button>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: "/home/documentation.png",
      title: "Online Documentation",
      color: "bg-[#40CA8A] hover:bg-emerald-600",
    },
    {
      icon: "/home/video.png",
      title: "Watch Video Tutorial",
      color: "bg-[#166CFB] hover:bg-blue-600",
    },
    {
      icon: "/home/support.png",
      title: "Dedicated Supports",
      color: "bg-[#8D4FF4] hover:bg-purple-600",
    },
  ];

  return (
    <div className='relative overflow-hidden bg-[url("/home/feature-bg.png")] bg-cover bg-no-repeat '>
    {/* //  <div className='relative overflow-hidden bg-gradient-to-br from-[#010971] via-[#0326BB] to-[#001596] py-16 px-4 md:px-8 lg:px-16'>  */}
      <div className='max-w-7xl mx-auto py-20 md:py-24 lg:py-36'>
        <div className='relative flex flex-col md:flex-row items-center justify-center mb-16'>
          <motion.div
            className='mb-8 md:mb-0 absolute left-0 md:left-0'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src='/home/character.png'
                alt='Character'
                width={180}
                height={180}
                className='relative z-10'
              />
            </motion.div>

            <motion.div
              className='absolute top-0 left-0 opacity-70'
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src='/character-shadow.png'
                alt=''
                width={180}
                height={30}
                className='mt-[150px] opacity-30 blur-sm'
              />
            </motion.div>
          </motion.div>

          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className='text-[#166CFB] bg-[#D7F1FF] font-medium mb-2 border border-[#C1E0FB] rounded-full px-4 py-1 inline-block'>
              Elevate your workflow
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
              Our Essential Features
            </h1>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              color={feature.color}
            />
          ))}
        </div>

      </div>
      <Card/>

      {/* Background decorative elements */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200 rounded-full opacity-30 blur-3xl -z-10'></div>
      <div className='absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-200 rounded-full opacity-30 blur-3xl -z-10'></div>
    </div>
  );
}
