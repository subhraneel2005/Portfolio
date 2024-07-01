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
import { Link } from 'react-scroll';
import Navbar from '@/components/Navbar';

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
    <div className="font-sans antialiased bg-gray-100 absolute w-full">
      <Navbar/>
      <main className="mt-20">
        <HeroSection />
        <Portfolio />
        <AboutUs />
        <Services />
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
