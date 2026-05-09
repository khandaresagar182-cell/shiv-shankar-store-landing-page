import { ArrowRight, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero-bg.png',
  '/images/hero-bg-2.png',
  '/images/hero-bg-3.png',
  '/images/hero-bg-4.png',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Premium Curtain Showroom ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: index === currentImage ? 1 : 0 }}
          />
        ))}
        {/* Overlays — same as before */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/90 via-maroon-900/80 to-maroon-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-maroon-950/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-maroon-600/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Star size={14} className="text-gold-400" fill="currentColor" />
            <span className="text-gold-300 text-sm font-medium font-inter">
              Premium Home Furnishing
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="fade-in-up-delay-1 font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Transform Your Home with{' '}
            <span className="text-gradient-gold">Premium Furnishing</span>
          </h1>

          {/* Sub-headline */}
          <p className="fade-in-up-delay-2 text-lg sm:text-xl text-white/70 font-inter leading-relaxed mb-4 max-w-2xl">
            Your one-stop destination for exquisite curtains, luxurious sofas,
            orthopaedic mattresses, elegant carpets, and everything to make your
            home beautifully complete.
          </p>

          {/* Marathi Tagline */}
          <p className="fade-in-up-delay-2 font-marathi text-gold-400/80 text-lg mb-10">
            होम डेकोर आणि मॅट्रेसेस — घराला सोबतचा सजावट
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up-delay-3 flex flex-wrap gap-3">
            <a
              href="#services"
              className="group flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-1"
            >
              <ShoppingBag size={16} />
              Explore Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/c/917498093633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-green-700 transition-all duration-300 shadow-xl shadow-green-900/20 hover:-translate-y-1"
            >
              View Full Catalog
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '50+', label: 'Product Varieties' },
            { value: '5', label: 'Top Brands' },
            { value: '100%', label: 'Quality Assured' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-in-up-delay-${i + 1} text-center md:text-left bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-0 sm:bg-transparent sm:backdrop-blur-none`}
            >
              <div className="text-xl sm:text-3xl font-playfair font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs sm:text-sm font-inter mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase font-inter">Scroll</span>
        <ChevronDown size={20} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
