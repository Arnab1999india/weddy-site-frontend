import React from "react";
import Header from "../components/header";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Hero Banner */}
        <section className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Couple"
            className="w-full h-96 object-cover rounded-lg"
          />
        </section>

        {/* Contact Title */}
        <section className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase mb-2">Contact</p>
          <h1 className="text-4xl font-serif mb-8">Get in Touch</h1>
        </section>

        {/* Contact Form and Image */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="date"
              placeholder="Wedding / Event Date"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Tell me about yourself / event plan"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </form>
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
            alt="Bride with flowers"
            className="rounded-lg object-cover w-full h-96"
          />
        </section>

        {/* Enquire Now Section */}
        <section className="text-center mb-16 italic text-lg font-serif">
          <p>
            “You will never know the value of a moment until it becomes a
            memory.”
          </p>
        </section>

        {/* Contact Info Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>contact@TessaMorgan.xyz</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>5396 North Reese Avenue, Fresno CA 93722</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>+1 901 247 5467</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-12">
          <nav className="mb-4 space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/portfolio" className="hover:underline">
              Portfolio
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
          <p className="mb-2">
            © 2024 Wedding Photography. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-700">
              FB
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">
              TW
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-700">
              IG
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ContactUs;
