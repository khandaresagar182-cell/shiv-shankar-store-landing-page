import { Gem, Heart, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Quality',
    desc: 'Only the finest materials sourced from trusted manufacturers across India.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    desc: 'Custom designs tailored to your unique taste and home requirements.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    desc: 'Years of expertise in furnishing with attention to every detail.',
  },
  {
    icon: Users,
    title: 'Customer First',
    desc: '500+ happy families trust us for their home furnishing needs.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-maroon-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-maroon-900/10">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Beautiful Interior"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[160px] sm:max-w-[200px]">
              <div className="text-2xl sm:text-3xl font-playfair font-bold text-maroon-700">10+</div>
              <div className="text-xs sm:text-sm text-maroon-900/60 font-inter mt-1">
                Years of Trusted Service
              </div>
              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold-400/30 rounded-3xl hidden sm:block" />
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-maroon-600 rounded-full" />
              <span className="text-maroon-700 text-sm font-semibold font-inter tracking-wide uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-6">
              Crafting Beautiful Spaces{' '}
              <span className="text-gold-600">Since Day One</span>
            </h2>

            <p className="text-maroon-900/60 font-inter leading-relaxed text-lg mb-8">
              At <strong className="text-maroon-800">Mauli Furnishing</strong>, we believe every home deserves
              to be a masterpiece. From luxurious sofas to perfectly fitted curtains,
              orthopaedic mattresses to elegant carpets — we bring your vision to life
              with premium quality products and personalized service.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-cream transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-xl flex items-center justify-center shadow-lg shadow-maroon-900/20 group-hover:scale-110 transition-transform duration-300">
                    <f.icon size={20} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maroon-900 font-inter text-sm mb-1">
                      {f.title}
                    </h4>
                    <p className="text-maroon-900/50 text-xs leading-relaxed font-inter">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
