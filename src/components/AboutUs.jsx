// src/components/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-800 to-black py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              At Brandify, our mission is to empower businesses and individuals to grow online by creating personalized and modern websites. We believe in the power of the internet to transform lives and businesses, and we are dedicated to helping our clients achieve their online goals.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              Our vision is to be the leading provider of digital solutions that drive success for our clients. We aim to set the standard for excellence in web design, SEO optimization, and e-commerce solutions, helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
          <p className="text-gray-300 mb-8">
            Our team of experts is dedicated to delivering exceptional results. We are passionate about what we do and are committed to helping you succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <img src="/p1.jpeg" alt="Subhraneel Goswami" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-xl font-semibold">Subhraneel Goswami</h4>
              <p className="text-gray-300">Founder & Lead Developer</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <img src="/p2.jpeg" alt="Subhamay Dey" className="w-24 h-24 mx-auto rounded-full mb-4"/>
              <h4 className="text-xl font-semibold">Subhamay Dey</h4>
              <p className="text-gray-300">Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
