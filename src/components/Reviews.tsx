import { Star, ExternalLink, Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Patil',
    role: 'Homeowner, Satara',
    text: 'Mauli Furnishing transformed our entire living room! The custom sofa and curtains are absolutely stunning. Excellent quality and great service.',
    rating: 5,
  },
  {
    name: 'Priya Kulkarni',
    role: 'Interior Designer',
    text: 'I recommend Mauli to all my clients. Their mattress collection from top brands is unmatched, and the staff is incredibly helpful and knowledgeable.',
    rating: 5,
  },
  {
    name: 'Amit Deshmukh',
    role: 'Regular Customer',
    text: 'Best furnishing shop in the area! We got our entire home furnished — blinds, carpets, bedsheets. Everything was delivered on time with perfect finishing.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 text-maroon-100/50">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-10 right-10 text-maroon-100/50 rotate-180">
        <Quote size={150} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gold-500 rounded-full" />
            <span className="text-maroon-700 text-sm font-semibold font-inter tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 leading-tight mb-4">
            What Our Customers{' '}
            <span className="text-gold-600">Say</span>
          </h2>
          <p className="text-maroon-900/50 font-inter text-lg">
            Don't just take our word for it — hear from the families who trust us
            with their homes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-maroon-900/5 transition-all duration-500 hover:-translate-y-1 relative"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 left-8">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <MessageCircle size={18} className="text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-maroon-900/60 font-inter text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-maroon-100/50">
                <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-full flex items-center justify-center">
                  <span className="text-gold-400 font-playfair font-bold text-sm">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-maroon-900 text-sm font-inter">
                    {review.name}
                  </h4>
                  <p className="text-maroon-900/40 text-xs font-inter">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-maroon-800 to-maroon-900 rounded-3xl p-10 sm:p-14 shadow-2xl shadow-maroon-900/20 max-w-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
              <Star size={30} className="text-gold-400" fill="currentColor" />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
              Love Our Service?
            </h3>
            <p className="text-white/60 font-inter text-sm sm:text-base mb-8 max-w-md">
              Your feedback means the world to us! Share your experience and help others
              discover premium home furnishing.
            </p>
            <a
              href="https://g.page/r/CcTPrjpAYn27EBE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-950 px-8 py-4 rounded-full font-bold text-base hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-1 pulse-glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Rate Us on Google
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
