import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-6"
    >
      {/* Background Image with auto-fit, customized opacity and darkness */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
          alt="Cinematic Coastal Background"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none opacity-40 brightness-50 contrast-110 saturate-[0.85]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle cinematic gradient overlays for high-contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.1)_0%,rgba(9,9,11,0.9)_90%)] z-10" />
      </div>
      
      {/* Subtle background overlay grid lines */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] z-10" />

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto space-y-6 select-none animate-fade-in">
        <h1
          id="hero-name"
          className="font-display text-5xl sm:text-7xl md:text-9xl font-black tracking-wide text-white uppercase translate-y-2 select-text"
        >
          TAN QUANG
        </h1>
        
        <p
          id="hero-subtitle"
          className="font-serif italic text-lg sm:text-2xl md:text-4xl text-zinc-300 font-light tracking-wide duration-700"
        >
          — Videographer - Video Editor —
        </p>
      </div>

      {/* Scroll to Explore indicator */}
      <div
        id="scroll-explorer"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-3 cursor-pointer select-none group focus:outline-none"
        onClick={() => {
          document.getElementById('gioi-thieu')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors duration-300">
          CUỘN ĐỂ KHÁM PHÁ
        </span>
        <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-y-1 transition-all duration-300" />
      </div>
    </section>
  );
}
