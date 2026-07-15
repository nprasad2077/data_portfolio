import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full hero-bg-in">
          <img
            src="/hero-bg.webp"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="hero-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Nick Prasad</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Data Engineer and Full Stack Developer building reliable data systems at scale
          </p>
        </div>

        <div className="hero-fade-late flex flex-col md:flex-row gap-6 justify-center">
          <a href="#work" className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-lg">
            View Portfolio
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg">
            Get in Touch
          </a>
          <a href="https://tinyurl.com/nickpras" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg">
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-fade-latest absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="hero-bounce">
          <ArrowDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
}
