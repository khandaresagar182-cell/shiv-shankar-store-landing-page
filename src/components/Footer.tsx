import { Phone, Mail, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Brands', href: '#brands' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'WhatsApp Catalog', href: 'https://wa.me/c/917498093633', external: true },
  { name: 'Visit on Maps', href: 'https://maps.app.goo.gl/bY697UhbHq58mx9PA?g_st=aw', external: true },
];

const services = [
  'Blinds & Curtains',
  'Custom Sofas',
  'Ortho Mattresses',
  'Upholstery',
  'Carpets & Grass',
  'Bedsheets',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-maroon-950 relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z" fill="#FFF9F1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-playfair font-bold text-white text-lg">Mauli Furnishing</h3>
              <p className="text-gold-400/70 text-[10px] tracking-[0.15em] uppercase">
                Home Decor & Mattresses
              </p>
            </div>
            <p className="text-white/40 font-inter text-sm leading-relaxed mb-6">
              Your one-stop destination for premium home furnishing solutions.
              Quality products, personalized service, and years of trusted expertise.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href={
                    social === 'WhatsApp'
                      ? 'https://wa.me/c/917498093633'
                      : social === 'Instagram'
                        ? 'https://www.instagram.com/mauli_furnishing_official?igsh=Z29ybXRzbHh3dTJh'
                        : '#'
                  }
                  target={social === 'WhatsApp' || social === 'Instagram' ? '_blank' : undefined}
                  rel={social === 'WhatsApp' || social === 'Instagram' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-maroon-950 text-white/50 transition-all duration-300"
                  aria-label={social}
                >
                  {social === 'Facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social === 'Instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                  {social === 'WhatsApp' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-white/40 hover:text-gold-400 font-inter text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500/30 rounded-full group-hover:bg-gold-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/40 font-inter text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-maroon-500/30 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+917498093633" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                  <Phone size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white/70 font-inter text-sm">+91 7498093633</p>
                  <p className="text-white/30 font-inter text-xs">Mon-Sat, 10AM-10PM</p>
                </div>
              </a>

              <a href="mailto:akshayshete2170@gmail.com" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                  <Mail size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white/70 font-inter text-sm break-all">akshayshete2170@gmail.com</p>
                  <p className="text-white/30 font-inter text-xs">24/7 Email Support</p>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/bY697UhbHq58mx9PA?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-300">
                  <MapPin size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white/70 font-inter text-sm">Mauli Handloom Gadi Karkhana, 2 Bhairavnager, Dhanori Rd, Bhairav Nagar, Dhanori, Pune, Maharashtra 411015</p>
                  <p className="text-white/30 font-inter text-xs hover:text-gold-400 transition-colors">Click to open on Google Maps</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white/70 font-inter text-sm">Working Hours</p>
                  <p className="text-white/30 font-inter text-xs">Mon - Sat: 10 AM - 10 PM (Sunday Closed)</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/c/917498093633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  <span className="text-xl">📱</span>
                  View Our WhatsApp Catalog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 font-inter text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mauli Furnishing (Mauli Handloom & Gadi Karkhana Furnishing). All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 font-inter text-sm">
            Developed <Heart size={14} className="text-red-500" fill="currentColor" /> by omii
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-br from-maroon-700 to-maroon-800 text-gold-400 rounded-full flex items-center justify-center shadow-xl shadow-maroon-900/30 hover:shadow-maroon-900/50 hover:-translate-y-1 transition-all duration-300 border border-maroon-600/30"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
