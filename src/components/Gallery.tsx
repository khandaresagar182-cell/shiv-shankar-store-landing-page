import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    alt: 'Modern Living Room',
    category: 'Living Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    alt: 'Elegant Interior Design',
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    alt: 'Premium Sofa Set',
    category: 'Sofas',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    alt: 'Cozy Bedroom Setup',
    category: 'Bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    alt: 'Window Curtains',
    category: 'Curtains',
  },
  {
    src: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80',
    alt: 'Premium Carpet',
    category: 'Carpets',
  },
  {
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80',
    alt: 'Upholstered Furniture',
    category: 'Upholstery',
  },
  {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    alt: 'Beautiful Bedsheet',
    category: 'Bedsheets',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-maroon-600 rounded-full" />
            <span className="text-maroon-700 text-sm font-semibold font-inter tracking-wide uppercase">
              Our Work
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-4">
            A Glimpse Into{' '}
            <span className="text-gold-600">Our Craft</span>
          </h2>
          <p className="text-maroon-900/50 font-inter text-lg">
            Explore our portfolio of beautifully furnished homes and premium
            decor installations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  idx === 0 ? 'h-64 md:h-full' : 'h-48 md:h-56'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 border border-white/30">
                  <ZoomIn size={20} className="text-white" />
                </div>
                <span className="text-white font-inter text-sm font-medium">
                  {img.category}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute bottom-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="bg-maroon-900/60 backdrop-blur-sm text-white text-xs font-inter px-3 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage.replace('w=600', 'w=1200')}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
