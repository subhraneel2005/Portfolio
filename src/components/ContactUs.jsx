// components/ContactUs.js

import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-lg mx-auto bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">Send Message</button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-center text-gray-400">
          Have questions? Email us at <a href="mailto:subhraneeljobs@gmail.com" className="text-purple-400 hover:underline">subhraneeljobs@gmail.com</a>
        </p>
      </div>
    </section>
  );
}

export default ContactUs;
