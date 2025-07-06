import React from "react";
import Header from "../components/header";

const AboutPage: React.FC = () => {
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

        {/* My Story */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 uppercase mb-2">About</p>
            <h1 className="text-4xl font-serif mb-6">My Story</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem. Velit tellus vitae massa sed egestas ornare
              pretium.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem. Velit tellus vitae massa sed egestas ornare
              pretium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem. Velit tellus vitae massa sed egestas ornare
              pretium.
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              View Portfolio
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Portrait"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
            "https://images.unsplash.com/photo-1523438885201-ea5d01a2e7b0",
            "https://images.unsplash.com/photo-1523438885201-ea5d01a2e7b0",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="rounded-lg object-cover w-full h-48"
            />
          ))}
        </section>

        {/* A Few Facts About Myself */}
        <section className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-sm text-gray-500 uppercase mb-2">Get to Know Me</p>
          <h2 className="text-3xl font-serif mb-8">A Few Facts About Myself</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1523438885201-ea5d01a2e7b0"
              alt="Fact 1"
              className="rounded-lg object-cover w-full h-48 md:col-span-2"
            />
            <div className="text-left md:col-span-1">
              <h3 className="text-4xl font-serif font-bold mb-2">1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus vitae massa sed egestas
                ornare pretium.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Fact 2"
              className="rounded-lg object-cover w-full h-48 md:col-span-2"
            />
            <div className="text-left md:col-span-1">
              <h3 className="text-4xl font-serif font-bold mb-2">2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus vitae massa sed egestas
                ornare pretium.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Fact 3"
              className="rounded-lg object-cover w-full h-48 md:col-span-2"
            />
            <div className="text-left md:col-span-1">
              <h3 className="text-4xl font-serif font-bold mb-2">3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra lorem. Velit tellus vitae massa sed egestas
                ornare pretium.
              </p>
            </div>
          </div>
        </section>

        {/* Your Story, My Lens */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-16">
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500 uppercase mb-2">
              Crafting Memories
            </p>
            <h2 className="text-3xl font-serif mb-6">Your Story, My Lens</h2>
            <p className="mb-6">
              Your wedding day is a once-in-a-lifetime event, and choosing the
              right photographer is essential to preserving its magic for years
              to come. I would be honored to be a part of your special day.
            </p>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              Book Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Wedding couple"
            className="rounded-lg object-cover w-full h-64"
          />
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            alt="Wedding venue"
            className="rounded-lg object-cover w-full h-64"
          />
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

export default AboutPage;
