"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPagesOpen(false)
      }
    }  

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const togglePages = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent closing the sidebar when toggling pages
    setIsPagesOpen(!isPagesOpen)
  }

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setIsMenuOpen(false)
  }

  // Handle click on overlay to close menu
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking the overlay itself, not its children
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-r from-[#010971] via-[#000F82] to-[#02076F] ">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={"/home/logo.png"} height={100} width={100} alt="logo" priority className="h-[90px] w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={cn(
                "text-white hover:text-cyan-300 font-medium relative py-2 transition-colors duration-300",
                activeLink === "home" &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400",
              )}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-white hover:text-cyan-300 font-medium relative py-2 transition-colors duration-300",
                activeLink === "about" &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400",
              )}
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-white hover:text-cyan-300 font-medium relative py-2 transition-colors duration-300",
                activeLink === "services" &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400",
              )}
              onClick={() => handleLinkClick("services")}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className={cn(
                "text-cyan-400 hover:text-cyan-300 font-medium relative py-2 transition-colors duration-300",
                activeLink === "case-studies" &&
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400",
              )}
              onClick={() => handleLinkClick("case-studies")}
            >
              Case Studies
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={togglePages}
                className="flex items-center text-white hover:text-cyan-300 font-medium py-2 transition-colors duration-300"
              >
                Pages{" "}
                <ChevronDown
                  className={cn("ml-1 h-4 w-4 transition-transform duration-300", isPagesOpen && "rotate-180")}
                />
              </button>
              {isPagesOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-gradient-to-b from-[#010971] to-[#000842] py-2 shadow-xl border border-blue-900 animate-in fade-in slide-in-from-top-5 duration-300 z-50">
                  <Link
                    href="/pages/team"
                    className="block px-4 py-3 text-sm text-white hover:bg-blue-800 transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                    onClick={() => handleLinkClick("team")}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/pages/pricing"
                    className="block px-4 py-3 text-sm text-white hover:bg-blue-800 transition-colors duration-200"
                    onClick={() => handleLinkClick("pricing")}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/pages/faq"
                    className="block px-4 py-3 text-sm text-white hover:bg-blue-800 transition-colors duration-200"
                    onClick={() => handleLinkClick("faq")}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-gray-500 bg- text-white px-8 py-5 hover:text-white hover:bg-[#166CFB] rounded-full transform duration-500 cursor-pointer shadow-md hover:shadow-blue-500/30"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 hover:text-white transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Clickable to close */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={handleOverlayClick}
      >
        {/* Close button - Positioned at the top right */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800 transition-colors z-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Menu Content - Prevent clicks from closing the overlay */}
        <div
          className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto max-w-sm mx-auto"
          ref={sidebarRef}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="space-y-2">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
              onClick={() => handleLinkClick("about")}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
              onClick={() => handleLinkClick("services")}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="block rounded-lg px-4 py-3 text-base font-medium text-cyan-400 hover:bg-blue-800 transition-colors duration-200"
              onClick={() => handleLinkClick("case-studies")}
            >
              Case Studies
            </Link>
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={togglePages}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-blue-800 transition-colors duration-200"
              >
                Pages
                <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isPagesOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out bg-blue-900/50",
                  isPagesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <Link
                  href="/pages/team"
                  className="block px-6 py-3 text-base font-medium text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200"
                  onClick={() => handleLinkClick("team")}
                >
                  Our Team
                </Link>
                <Link
                  href="/pages/pricing"
                  className="block px-6 py-3 text-base font-medium text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200"
                  onClick={() => handleLinkClick("pricing")}
                >
                  Pricing
                </Link>
                <Link
                  href="/pages/faq"
                  className="block px-6 py-3 text-base font-medium text-gray-200 hover:bg-blue-800 hover:text-white transition-colors duration-200"
                  onClick={() => handleLinkClick("faq")}
                >
                  FAQ
                </Link>
              </div>
            </div>
          </nav>

          <div className="mt-auto pt-6">
            <Button
              variant="outline"
              className="w-full border-gray-600 bg-[#312B2D] text-white py-6 hover:text-white hover:bg-[#166CFB] rounded-full transform duration-500 cursor-pointer shadow-md hover:shadow-blue-500/30 text-base"
              onClick={() => handleLinkClick("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
