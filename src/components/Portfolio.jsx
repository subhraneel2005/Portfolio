// components/Portfolio.js

import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      name: 'Wholesome Bites',
      description: 'Organic greenhouse website for eco-friendly products and services.',
      link: 'https://wholesome-bites.vercel.app/',
      image: '/wholesome.png',
    },
    {
      name: 'Health Coach Website',
      description: 'Website promoting health coaching services and wellness programs.',
      link: 'https://health-coach-website.vercel.app/',
      image: '/health.png',
    },
    {
      name: 'Coffee Shop Website',
      description: 'Virtual cafe showcasing coffee products and ambiance.',
      link: 'https://coffee-shop-eight-sigma.vercel.app/',
      image: '/coffee.png',
    },
    {
      name: 'Shopiverse: Ecommerce Website',
      description: 'Ecommerce platform offering a variety of products for online shopping.',
      link: 'https://shopiverse-iota.vercel.app/',
      image: '/shopiverse.png',
    },
  ];

  return (
    <section id="portfolio" className="bg-gradient-to-r from-purple-900 to-slate-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-75 shadow-md rounded-lg overflow-hidden border-8 border-slate-900">
              <div className="relative">
                <img src={project.image} alt={project.name} className="w-full h-64 object-cover object-center" />
                <div className="absolute inset-0 pointer-events-none"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg inline-block">Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
