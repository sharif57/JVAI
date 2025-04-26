import { ArrowRight, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/heroBg.png"
          alt="Blue background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center text-white">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            BUILT TOTAL TECHNOLOGY &{" "}
            <span className="block text-[#c2f66f] md:mt-2">
              IT SOLUTION <span className="text-white">WEBSITE</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-2xl text-sm sm:text-base md:text-lg">
            You can create your website in minutes with the help of amazing
            powerful features of IT-Tech with 50+ Demo, 500+ Sections
          </p>

          {/* Stats Section */}
          <div className="mb-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                50+
              </span>
              <span className="text-xs sm:text-sm md:text-base text-blue-300">
                LIVE DEMO
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                200+
              </span>
              <span className="text-xs sm:text-sm md:text-base text-blue-300">
                TOTAL SECTIONS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                300+
              </span>
              <span className="text-xs sm:text-sm md:text-base text-blue-300">
                TOTAL SECTIONS
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              className="border-white bg-[#0327B1] py-6 rounded-full text-white hover:bg-[#166CFB] cursor-pointer hover:border-none transform duration-1000 group hover:text-white"
              size="lg"
            >
              EXPLORER IT-TECH
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              className="border-white border bg-[#0327B1] py-6 rounded-full text-white hover:bg-[#166CFB] cursor-pointer hover:border-none transform duration-1000 group hover:text-white"
              size="lg"
            >
              <Zap className="mr-2 h-4 w-4" />
              PURCHASES NOW
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
