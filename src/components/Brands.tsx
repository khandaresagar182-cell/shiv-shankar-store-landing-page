import { Award, ShieldCheck } from 'lucide-react';

const brands = [
  { name: 'Centuary', tagline: 'India Ka Sleep Specialist', logo: '/images/brands/century.jpg' },
  { name: 'Peps', tagline: 'Rest. Relieve. Restore.', logo: '/images/brands/peps.png' },
  { name: 'Kurlon', tagline: 'Sleep Beautiful', logo: '/images/brands/kurlon.png' },
  { name: 'Sleepwell', tagline: 'Sleepwell, Live Well', logo: '/images/brands/sleepwell.jpeg' },
  { name: 'Duroflex', tagline: 'Sleep Smart', logo: '/images/brands/duroflex.jpg' },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B1F3E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-maroon-50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-maroon-600 rounded-full" />
            <span className="text-maroon-700 text-sm font-semibold font-inter tracking-wide uppercase">
              Our Partners
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-4">
            Trusted Mattress{' '}
            <span className="text-gold-600">Brands</span>
          </h2>
          <p className="text-maroon-900/50 font-inter text-lg">
            We partner with India's most trusted brands to bring you the best quality
            mattresses for a perfect night's sleep.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {brands.map((brand, idx) => (
            <div
              key={brand.name}
              className="group relative bg-gradient-to-b from-cream to-white rounded-2xl p-4 sm:p-6 text-center border border-maroon-100/50 hover:border-gold-400/50 shadow-sm hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Decorative corner */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ShieldCheck size={14} className="text-gold-500" />
              </div>

              {/* Brand Logo */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-maroon-900/20 group-hover:shadow-maroon-900/40 transition-shadow duration-300">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain bg-white p-1"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-maroon-700 to-maroon-800 flex items-center justify-center">
                    <span className="text-gold-400 font-playfair font-bold text-xl sm:text-2xl">
                      {brand.name[0]}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-playfair font-bold text-lg text-maroon-900 mb-1">
                {brand.name}
              </h3>
              <p className="text-maroon-900/40 text-xs font-inter italic">
                {brand.tagline}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-500 mx-auto" />
            </div>
          ))}
        </div>

        {/* Marquee Strip */}
        <div className="mt-16 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 rounded-2xl p-1 overflow-hidden">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center shrink-0">
                  {brands.map((brand) => (
                    <div key={`${setIdx}-${brand.name}`} className="flex items-center gap-8 mx-8">
                      <div className="flex items-center gap-3">
                        <Award size={18} className="text-gold-600" />
                        <span className="font-playfair font-bold text-maroon-900 text-lg">
                          {brand.name}
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
