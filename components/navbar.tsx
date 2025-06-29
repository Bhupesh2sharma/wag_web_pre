"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-4 mx-4 z-50 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Waglogy Home"
          >
            <img
              src="/logo.png"
              alt="Waglogy Logo"
              className="h-12 w-auto"
              width={120}
              height={48}
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="/"
              className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
            {/* <Link
              href="/blog"
              className="text-zinc-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              aria-label="Get Started with Waglogy"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-700 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pt-4 pb-6"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col space-y-4"
            >
              <Link
                href="/"
                className="text-zinc-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-zinc-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-zinc-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-zinc-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full text-center mt-2"
                onClick={() => setIsOpen(false)}
                aria-label="Get Started with Waglogy"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

