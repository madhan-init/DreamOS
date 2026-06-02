import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import Demo from '../components/landing/Demo';
import Footer from '../components/layout/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
