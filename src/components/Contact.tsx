import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact-info" className="py-24 bg-maroon-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">Visit Our Showroom</h2>
          <p className="text-white/70 max-w-2xl">
            Experience our premium collection in person. Our experts are ready to help you find the perfect pieces for your home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="https://maps.app.goo.gl/bY697UhbHq58mx9PA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon-800 p-8 rounded-2xl flex flex-col gap-4 hover:bg-maroon-700 transition-colors"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
              <MapPin className="text-gold-400" />
            </div>
            <h3 className="font-bold text-lg">Visit Us</h3>
            <p className="text-white/60 text-sm">Mauli Handloom Gadi Karkhana, 2 Bhairavnager, Dhanori Rd, Bhairav Nagar, Dhanori, Pune, Maharashtra 411015</p>
          </a>

          <a
            href="tel:+917498093633"
            className="bg-maroon-800 p-8 rounded-2xl flex flex-col gap-4 hover:bg-maroon-700 transition-colors"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
              <Phone className="text-gold-400" />
            </div>
            <h3 className="font-bold text-lg">Call Us</h3>
            <p className="text-white/60 text-sm">+91 7498093633</p>
            <p className="text-white/40 text-xs">Mon-Sat: 10 AM - 10 PM</p>
          </a>

          <a
            href="mailto:akshayshete2170@gmail.com"
            className="bg-maroon-800 p-8 rounded-2xl flex flex-col gap-4 hover:bg-maroon-700 transition-colors"
          >
            <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
              <Mail className="text-gold-400" />
            </div>
            <h3 className="font-bold text-lg">Email Us</h3>
            <p className="text-white/60 text-sm">akshayshete2170@gmail.com</p>
            <p className="text-white/40 text-xs">We reply within 24 hours</p>
          </a>
        </div>
      </div>
    </section>
  );
}
