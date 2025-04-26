import Link from "next/link"
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
      <Link href="/" className="flex items-center">
              <Image src={"/home/logo.png"} height={100} width={100} alt="logo" priority className=" w-auto" />
            </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Bar - Privacy and Terms */}
        <div className="flex justify-end mb-8 text-sm"> 
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-3 text-gray-600">|</span>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Column - Logo and Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <Image src={"/home/logo.png"} height={100} width={100} alt="logo" priority className=" w-auto" />
            </Link>
              </div>
            </Link>

            <h2 className="text-2xl font-bold leading-tight">Innovate, Build, Scale – Your Vision, Our Code</h2>

            <Button className="bg-[#00B6E3] hover:bg-[#00A0C8] text-white rounded-md px-6 py-2 font-medium">
              Contact Us
            </Button>

            <p className="text-sm text-gray-400">
              Copyright © 2025 Devop - App Development Software House Agency Elementor Template Kit
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Home Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Home</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center py-4 text-[12px]">Developed by <Link href="https://rakib.dev/" className="text-[#00B6E3]">Rakib </Link> & <Link href="https://sharif.dev/" className="text-[#00B6E3]">Sharif</Link></div> */}
    </footer>
  )
}
