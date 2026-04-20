import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import PageLoader from './components/skeleton/PageLoader';

export default function App() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-cream font-inter antialiased">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Brands />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </PageLoader>
  );
}
