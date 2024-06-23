// src/components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-sky-900 to-purple-800 py-20 text-white min-h-screen w-full">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Grow Your Business Online with Brandify
        </h1>
        <p className="text-xl mb-8">
          We create personalized modern websites to help you succeed. Our expert team designs and develops solutions tailored to your business needs.
        </p>
        <a href="#contact" className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
          Get Started
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Web Design</h3>
            <p className="mt-4">Beautiful and functional designs tailored to your needs.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">SEO Optimization</h3>
            <p className="mt-4">Improve your websites visibility on search engines.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">E-Commerce Solutions</h3>
            <p className="mt-4">Custom online stores to boost your sales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
