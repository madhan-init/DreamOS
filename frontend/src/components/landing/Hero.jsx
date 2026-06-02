import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      gsap.from('.hero-card', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="hero-text text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight">
            Your Dreams <br />
            <span className="bg-secondary text-white px-2 mt-2 inline-block -rotate-2 transform">Have Stories.</span>
          </h1>
          
          <p className="hero-text text-xl sm:text-2xl font-medium max-w-lg border-l-4 border-black pl-4">
            Write down your dreams. Let AI uncover patterns, emotions, and hidden meanings.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-4">
            <button className="neo-button bg-primary text-black px-8 py-4 text-lg flex items-center justify-center gap-2 group">
              START DREAMING
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="neo-button bg-white text-black px-8 py-4 text-lg flex items-center justify-center gap-2">
              SEE DEMO
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-card relative mt-10 lg:mt-0">
          {/* Main Dream Card */}
          <div className="neo-box bg-white p-6 md:p-8 relative z-10 rotate-1 transform">
            <div className="border-b-[3px] border-black pb-4 mb-4">
              <span className="font-bold text-sm uppercase tracking-wider text-gray-500">Dream Entry</span>
              <p className="font-medium text-lg mt-2">"I was flying above the ocean, but the water was made of glass..."</p>
            </div>
            
            <div className="bg-gray-100 p-4 border-[3px] border-black border-dashed">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-secondary" size={20} />
                <span className="font-bold uppercase text-sm">AI Analysis</span>
              </div>
              
              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between border-b-[2px] border-black pb-1">
                  <span>Emotion:</span>
                  <span className="bg-primary/20 px-2 border border-black">Freedom, Anxiety</span>
                </div>
                <div className="flex justify-between border-b-[2px] border-black pb-1">
                  <span>Theme:</span>
                  <span className="bg-secondary/20 px-2 border border-black">Exploration</span>
                </div>
                <div className="flex justify-between">
                  <span>Symbols:</span>
                  <span className="font-bold">Ocean, Glass</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Background Card */}
          <div className="neo-box bg-primary absolute inset-0 -translate-x-4 translate-y-4 -z-10 -rotate-3"></div>
        </div>
      </div>
    </section>
  );
}
