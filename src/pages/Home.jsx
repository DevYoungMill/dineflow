import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}
