import { Button } from "../components/ui/button";
import Header from "../components/header";
import { images } from "../config/images";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt="Wedding couple"
              className="object-cover w-full h-full -z-10"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container h-full flex flex-col justify-center items-center text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Timeless Wedding Memories
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Capturing your love story with artistry and passion
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Portfolio</Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:text-primary hover:border-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.weddings.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Wedding ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="w-full text-white border-white hover:text-primary hover:border-primary">
                    View Gallery
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-secondary py-16">
          <div className="container text-center w-full">
            <blockquote className="text-xl italic mb-4">
              "Working with them was an absolute pleasure. They captured our
              special day perfectly and the photos are breathtaking!"
            </blockquote>
            <p className="font-medium">- Sarah &amp; James</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
