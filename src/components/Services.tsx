import { Sun, Armchair, Moon, Layers, Grid3X3, Bed } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    icon: Sun,
    title: 'Blinds & American Curtains',
    desc: 'Elegant window solutions with a wide range of fabrics, textures, and automated options to perfect your living space.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80',
    color: 'from-maroon-700 to-maroon-900',
  },
  {
    icon: Armchair,
    title: 'Custom & New Sofas',
    desc: 'Handcrafted sofas designed for comfort and style — choose from contemporary, classic, or fully customized designs.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    color: 'from-gold-600 to-gold-800',
  },
  {
    icon: Moon,
    title: 'Ortho & Cotton Mattresses',
    desc: 'Sleep better with our range of orthopaedic and cotton mattresses from top brands like Kurlon, Sleepwell & more.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
    color: 'from-maroon-600 to-maroon-800',
  },
  {
    icon: Layers,
    title: 'Upholstery',
    desc: 'Premium fabric upholstery services to refresh and revitalize your existing furniture with style and durability.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80',
    color: 'from-gold-500 to-gold-700',
  },
  {
    icon: Grid3X3,
    title: 'Carpets & Artificial Grass',
    desc: 'Transform your floors with our exquisite carpet collection and lifelike artificial grass for indoor & outdoor use.',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&q=80',
    color: 'from-maroon-700 to-maroon-800',
  },
  {
    icon: Bed,
    title: 'Bedsheets & Bed Headboards',
    desc: 'Luxurious bed linens and designer headboards that create the perfect bedroom sanctuary for restful nights.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
    color: 'from-gold-600 to-gold-800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-100/40 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-maroon-700 text-sm font-semibold font-inter tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-4">
            Everything Your Home{' '}
            <span className="text-gold-600">Deserves</span>
          </h2>
          <p className="text-maroon-900/50 font-inter text-lg">
            From curtains to carpets, mattresses to sofas — we offer a complete range
            of premium home furnishing solutions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-maroon-900/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50 group-hover:opacity-40 transition-opacity duration-300`} />
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon size={22} className="text-gold-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-maroon-900 mb-2 group-hover:text-maroon-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-maroon-900/50 text-sm font-inter leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-maroon-700 text-sm font-semibold font-inter group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
