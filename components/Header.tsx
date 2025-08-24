"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import logo from '../public/logo-tech.png'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="Techboosters Logo"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-none">
                            Techboosters
                        </h2>
                        <p className="text-gray-600 text-sm">Multiservices</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link href="/">Home</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#about">About</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#contact">Contact</Link>
                    <Link href="#blogs">Blogs</Link>
                </nav>

                <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Get in Touch
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-gray-700"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg px-6 py-5 animate-slideDown z-40">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#services"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        Contact
                    </Link>
                    <Link
                        href="#blogs"
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-gray-700 font-medium hover:text-orange-500 transition-colors"
                    >
                        Blogs
                    </Link>

                    {/* CTA button */}
                    <button className="mt-5 w-full bg-orange-500 text-white px-5 py-3 rounded-xl 
             font-semibold text-center shadow-md hover:bg-orange-600 transition-colors">
                        Go to Contact
                    </button>
                </div>
            )}
        </header>
    )
}
