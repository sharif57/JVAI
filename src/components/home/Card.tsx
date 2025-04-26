// "use client";

// import type React from "react";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Star,
//   HeadphonesIcon,
//   ShoppingBag,
//   Palette,
//   Search,
//   Layers,
//   Smartphone,
//   Zap,
//   Globe,
//   Settings,
//   Edit,
//   ShoppingCart,
// } from "lucide-react";

// export default function Card() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const features = [
//     {
//       icon: <Star className="h-6 w-6 text-white " />,
//       title: "100% Review and 4.8 Average Ratings",
//       description:
//         "People trust us, and we have the highest ratings. We have earned our reputation through hard work and dedication to our customers.",
//     },
//     {
//       icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
//       title: "Unlimited Support",
//       description:
//         "Access 24/7 live chat and support from our expert team. Our support team is always available to help you with any questions you may have.",
//     },
//     {
//       icon: <ShoppingBag className="h-6 w-6 text-white" />,
//       title: "Best Selling Products From 5 Years",
//       description:
//         "We've specialized in the creation of top-quality products from the best in the industry. Our products come with premium features and are built to perfection.",
//     },
//     {
//       icon: <Palette className="h-6 w-6 text-white" />,
//       title: "24+ Professionally Design website",
//       description:
//         "Perfect design and user experience. Our team of expert UI/UX designers will create a stunning, professional-looking website tailored to your business needs.",
//     },
//     {
//       icon: <Layers className="h-6 w-6 text-white" />,
//       title: "Unlimited Layout & Design",
//       description:
//         "Choose from many layout and design. You can choose any software type or website template. Our team is expert in any kind of web development and customization.",
//     },
//     {
//       icon: <Search className="h-6 w-6 text-white" />,
//       title: "100% SEO Friendly",
//       description:
//         "Our theme is properly SEO friendly. Please check our website for more information about SEO options. All themes will work perfectly with all popular SEO plugins.",
//     },
//     {
//       icon: <Smartphone className="h-6 w-6 text-white" />,
//       title: "100% Responsive Across Device",
//       description:
//         "Please check our website with your mobile phone or tablet. These will adapt to the screen, so your pages will look perfect on any device with 100% responsiveness.",
//     },
//     {
//       icon: <Zap className="h-6 w-6 text-white" />,
//       title: "Optimized for Speed and Performance",
//       description:
//         "Please check our theme on speed optimization websites. You will see it is very fast. We have a team of experts focused on speed optimization and performance.",
//     },
//     {
//       icon: <Globe className="h-6 w-6 text-white" />,
//       title: "100% Translation / RTL Ready",
//       description:
//         "Our product is ready for translation and RTL. You can use any translation plugin, and we have made it easy to translate your website into any language.",
//     },
//     {
//       icon: <Settings className="h-6 w-6 text-white" />,
//       title: "Drag & Drop Builder",
//       description:
//         "This is the most enjoyable thing you will have. Drag and drop functionality makes website building easy. It helps you to build websites without any coding knowledge.",
//     },
//     {
//       icon: <Edit className="h-6 w-6 text-white" />,
//       title: "Very easy to Customization Options",
//       description:
//         "Our theme is very easy to customize. You need not any coding knowledge to customize it. Just drag and drop, and you can easily customize your website.",
//     },
//     {
//       icon: <ShoppingCart className="h-6 w-6 text-white" />,
//       title: "WooCommerce Included",
//       description:
//         "All our themes incorporate WooCommerce functionality for easy e-commerce. You can start your WooCommerce business with our themes immediately.",
//     },
//   ];

//   return (
//     <main className="">
//       <section className="relative overflow-hidden py-16 md:py-40">
//         {/* Background */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/home/choose-us-bg.png"
//             alt="Background"
//             fill
//             className=""
//             priority
//           />
//         </div>

//         <div className="container relative z-20 mx-auto px-4">
//           {/* Heading */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={isLoaded ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.6 }}
//             className="mb-12 text-center"
//           >
//             {/* Left decoration */}
//             <div className="">
//               <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={isLoaded ? { x: 0, opacity: 1 } : {}}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="absolute left-32 -top-[50px]   hidden md:block"
//               >
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 3,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <Image
//                     src="/home/spearker.png"
//                     alt="Decoration"
//                     width={150}
//                     height={150}
//                   />
//                 </motion.div>
//               </motion.div>
//               {/* <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
//                 Why Choose IT-Tech for your
//                 <br />
//                 Business Website
//               </h2> */}
//               <h1 className="mb-4 text-3xl uppercase text-white font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
//             Why Choose IT-Tech for your
//             <span className="block text-[#c2f66f] md:mt-2">
//             Business Website 
//             </span>
//           </h1>
//               {/* Right decoration */}
//               <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={isLoaded ? { x: 0, opacity: 1 } : {}}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="absolute right-0 -top-[50px] z-10 hidden md:block"
//               >
//                 <motion.div
//                   animate={{ rotate: [0, 10, 0] }}
//                   transition={{
//                     repeat: Number.POSITIVE_INFINITY,
//                     duration: 5,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <Image
//                     src="/home/choose-us-shap-2.png"
//                     alt="Decoration"
//                     width={100}
//                     height={100}
//                   />
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Feature cards grid */}
//           <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto xl:grid-cols-2">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//                 index={index}
//                 isLoaded={isLoaded}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   index: number;
//   isLoaded: boolean;
// }

// function FeatureCard({
//   icon,
//   title,
//   description,
//   index,
//   isLoaded,
// }: FeatureCardProps) {
//   return (
//     <motion.div
//       initial={{ y: 50, opacity: 0 }}
//       animate={isLoaded ? { y: 0, opacity: 1 } : {}}
//       transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
//       whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
//       className="rounded-lg border group border-blue-800 bg-blue-900/50 p-6 transition-all duration-300 hover:border-blue-400  hover:shadow-lg hover:shadow-blue-900/30"
//     >
//       <div className="flex items-center gap-3">
//         <motion.div
//           whileHover={{
//             rotate: [0, -360],
//             transition: { duration: 0.5 },
//           }}
//           className=" group-hover:rotate-180 transition-transform duration-700 flex h-10 w-10 items-center justify-center rounded-full bg-[#0909ca]"
//         >
//           {icon}
//         </motion.div>
//         <h3 className=" text-2xl font-semibold text-white">{title}</h3>
//       </div>
//       <p className="text-xl pt-6 text-start text-blue-100/80">{description}</p>
//     </motion.div>
//   );
// }

"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-red-500 " viewBox="0 0 696 316" fill="none">
        {/* <title>Background Paths</title> */}
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
} 

export default function Card({
  title = "",
}: {
  title?: string
}) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">Discover Excellence</span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </Button> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
