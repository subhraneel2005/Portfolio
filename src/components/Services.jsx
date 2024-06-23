// components/Services.js

import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-purple-300 to-blue-300 py-20 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <img src="/webDesign.jpg" alt="Web Design" className="w-full h-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
            <p>Beautiful and functional designs tailored to your needs.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <img src="/seo.jpg" alt="SEO Optimization" className="w-full h-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
            <p>Improve your websites visibility on search engines.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <img src="/responsive.jpg" alt="Responsive Designs" className="w-full h-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-4">Responsive Designs</h3>
            <p>Create websites that work seamlessly across all devices.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <img src="/ecommerce.jpg" alt="E-Commerce Solutions" className="w-full h-auto mb-4"/>
            <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
            <p>Custom online stores to boost your sales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
