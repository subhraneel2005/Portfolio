// components/HomePage.js
"use client"
import React,{useEffect} from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import Lenis from 'lenis';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs';

export default function Home(){

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <div className="font-sans antialiased bg-gray-100">
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
            Brandify
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a></li>
              <li><a href="#about" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <Portfolio />
        <ContactUs />
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/subhraneel-goswami-599931282/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            <a href="https://x.com/Subhraneel55545" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="https://github.com/subhraneel2005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61560144223471" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()} Brandify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
