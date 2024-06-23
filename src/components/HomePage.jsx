// src/components/HomePage.js

import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans antialiased bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Brandify</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        <section className="bg-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-4xl font-bold text-gray-800">Grow Your Business Online with Brandify</h2>
            <p className="mt-4 text-gray-600">We create personalized modern websites to help you succeed.</p>
            <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700">
              Get Started
            </a>
          </div>
        </section>
        
        <section id="services" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Our Services</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Web Design</h3>
              <p className="mt-4 text-gray-600">Beautiful and functional designs tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">SEO Optimization</h3>
              <p className="mt-4 text-gray-600">Improve your website’s visibility on search engines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">E-Commerce Solutions</h3>
              <p className="mt-4 text-gray-600">Custom online stores to boost your sales.</p>
            </div>
          </div>
        </section>
        
        <section id="portfolio" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Our Portfolio</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full rounded-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project 1</h3>
                <p className="mt-2 text-gray-600">Description of project 1.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full rounded-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project 2</h3>
                <p className="mt-2 text-gray-600">Description of project 2.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full rounded-lg" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Project 3</h3>
                <p className="mt-2 text-gray-600">Description of project 3.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center">About Us</h2>
          <p className="mt-4 text-gray-600 text-center">Brandify is dedicated to helping businesses and individuals grow online by providing modern, personalized websites. Our team of experts is here to help you achieve your goals.</p>
        </section>
        
        <section id="contact" className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600">We'd love to hear from you! Get in touch with us to discuss your project.</p>
            <form className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="py-3 px-4 rounded-lg border border-gray-300" />
                <input type="email" placeholder="Email" className="py-3 px-4 rounded-lg border border-gray-300" />
              </div>
              <textarea placeholder="Message" className="mt-6 py-3 px-4 rounded-lg border border-gray-300 w-full"></textarea>
              <button type="submit" className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brandify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
