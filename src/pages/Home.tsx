import { Button } from "../components/ui/button";
import Header from "../components/header";
import { images } from "../config/images";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Hero Banner */}
        <section className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Couple"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40 rounded-lg">
            <p className="text-lg italic mb-2">Your Dream Wedding Awaits</p>
            <h1 className="text-5xl font-serif font-bold">
              Artistic Wedding Photography
            </h1>
          </div>
        </section>

        {/* Award Winning Photography */}
        <section className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase mb-2">
            Award Winning Photography
          </p>
          <h2 className="text-3xl font-serif mb-4">
            Showcasing your big day in a memorable and unforgettable way.
          </h2>
        </section>

        {/* Introduction */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
            alt="Photographer"
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">
              Hello, My Name is Tessa
            </h2>
            <p className="mb-4 italic">
              Lorem ipsum dolor sit amet consectetur. Digissim mauris et egestas
              dignissim.
            </p>
            <p className="mb-4">
              Tessa is a wedding photographer with a passion for capturing the
              magic of your special day.
            </p>
            <Button variant="outline" size="default">
              Learn More
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase mb-2">Services</p>
          <h2 className="text-3xl font-serif mb-8">What I Offer</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Wedding", price: "$2999" },
              { title: "Portrait", price: "$399" },
              { title: "Engagement", price: "$999" },
            ].map(({ title, price }) => (
              <div
                key={title}
                className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">Per Session {price}</p>
                <Button variant="outline" size="sm">
                  More Details
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Featured Story */}
        <section className="text-center mb-16">
          <p className="text-sm text-gray-500 uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl font-serif mb-8">Featured Story</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <h3 className="text-4xl font-serif font-bold mb-2">01</h3>
              <p className="mb-4">Ricardo & Michelle</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Digissim mauris et
                egestas dignissim.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Featured 1"
              className="rounded-lg object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Featured 2"
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          <div className="mt-6">
            <Button variant="outline" size="default">
              View Gallery
            </Button>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-8 italic">
            Client Testimonials
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <p className="mb-4 italic">
                "Showcasing your big day in a memorable & delightful way."
              </p>
              <p className="font-semibold">Sarah & Luke</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Testimonial 1"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Testimonial 2"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-8 uppercase">
            Helping Couples Bring to Life Their Wedding Dreams
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6 text-center text-2xl font-bold">
            <div>
              <p>12</p>
              <p className="text-sm font-normal">Years Experience</p>
            </div>
            <div>
              <p>10K</p>
              <p className="text-sm font-normal">Photos Delivered</p>
            </div>
            <div>
              <p>300</p>
              <p className="text-sm font-normal">Events Captured</p>
            </div>
            <div>
              <p>6</p>
              <p className="text-sm font-normal">Awards</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif mb-4 uppercase">Contact</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded px-4 py-2 h-32 resize-none"
              />
              <Button type="submit" variant="outline" size="default">
                Send
              </Button>
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Contact"
            className="rounded-lg object-cover w-full h-80"
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

export default Home;
