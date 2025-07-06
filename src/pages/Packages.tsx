import { useState } from "react";
import Header from "../components/header";

const faqs = [
  {
    question: "What is your photography style?",
    answer:
      "I specialize in natural, candid photography that captures genuine moments.",
  },
  {
    question: "How far in advance can I book your services?",
    answer:
      "I recommend booking at least 6 months in advance to secure your date.",
  },
  {
    question: "Do you require a deposit, and what are your payment plans?",
    answer:
      "A 30% deposit is required to reserve your date. Payment plans are available upon request.",
  },
  {
    question: "Can we customize a photography package to fit your needs?",
    answer:
      "Absolutely! I offer customizable packages tailored to your preferences.",
  },
  {
    question: "How soon after the event will I receive your photos?",
    answer: "Photos are typically delivered within 4-6 weeks after the event.",
  },
];

const Packages = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* Services Title */}
        <section className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase mb-2">Services</p>
          <h1 className="text-4xl font-serif mb-8">Photography Packages</h1>
        </section>

        {/* Packages */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Wedding"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h2 className="text-xl font-serif mb-2">Wedding</h2>
            <p className="mb-2 text-sm">
              200+ High-Quality Photos
              <br />
              6 Hours HD Footage
              <br />
              Additional Photographer subject to charge
              <br />
              Videographer subject to charge
            </p>
            <p className="font-semibold mb-4">Per Session $799</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Portrait"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h2 className="text-xl font-serif mb-2">Portrait</h2>
            <p className="mb-2 text-sm">
              Adjest to High Quality Photos
              <br />
              Professionally Edited
              <br />
              Hourly coverage optional
              <br />
              Videographer subject to charge
            </p>
            <p className="font-semibold mb-4">Per Session $399</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Engagement"
              className="rounded-lg object-cover w-full h-64 mb-4"
            />
            <h2 className="text-xl font-serif mb-2">Engagement</h2>
            <p className="mb-2 text-sm">
              200+ High-Quality Photos
              <br />
              6 Hours HD Footage
              <br />
              Additional Photographer subject to charge
              <br />
              Videographer subject to charge
            </p>
            <p className="font-semibold mb-4">Per Session $799</p>
          </div>
        </section>

        {/* Get in Touch Button */}
        <section className="text-center mb-16">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
            Get in Touch
          </button>
        </section>

        {/* Celebrate Section */}
        <section className="text-center mb-16">
          <p className="text-lg italic mb-4">
            Celebrate your love with stunning images that will be cherished for
            a lifetime
          </p>
        </section>

        {/* Process Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1523438885201-ea5d01a2e7b0"
              alt="Breaking the Ice"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-xl font-serif mb-2">1</h3>
            <h4 className="font-semibold mb-2">Breaking the Ice</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Planning & Preparation"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-xl font-serif mb-2">2</h3>
            <h4 className="font-semibold mb-2">Planning & Preparation</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Session Coverage"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-xl font-serif mb-2">3</h3>
            <h4 className="font-semibold mb-2">Session Coverage</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Post Production & Delivery"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-xl font-serif mb-2">4</h3>
            <h4 className="font-semibold mb-2">Post Production & Delivery</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Rurrum tincidunt consequat
              nec potenti. Justo molestie amet vulputate aliquam viverra ut
              viverra lorem.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">Any Queries?</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <button
                  className="w-full text-left font-semibold"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Quality Service Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-4">Quality Service</h2>
            <p>
              On your big day, you can count on me to turn fleeting moments into
              timeless memories you will cherish for generations.
            </p>
            <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              Enquire Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Service 1"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            alt="Service 2"
            className="rounded-lg object-cover w-full h-48"
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

export default Packages;
