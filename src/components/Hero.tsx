
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-12 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
      <div className="relative container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 leading-tight">
            6 Kalimas of Islam with Audio - Complete Learning Guide
          </h1>
          <h2 className="text-2xl md:text-3xl text-emerald-700 mb-6 leading-relaxed">
            Master All Six Kalmas with Perfect Arabic Pronunciation
          </h2>
          <p className="text-lg text-emerald-600 mb-8 max-w-3xl mx-auto">
            Learn the essential Islamic declarations that strengthen faith and spiritual connection. 
            Each Kalima includes high-quality audio recitation, Arabic text, English translation, and detailed meanings.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Perfect Audio</h3>
              <p className="text-emerald-700">High-quality Arabic pronunciation for each Kalima</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Complete Translation</h3>
              <p className="text-emerald-700">English translation and transliteration included</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Learn at Your Pace</h3>
              <p className="text-emerald-700">Self-paced learning with memorization tips</p>
            </div>
          </div>
          <p className="text-emerald-800 leading-relaxed text-lg max-w-3xl mx-auto">
            From Kalima Tayyibah to Kalima Radde Kufr, discover the profound meanings and spiritual significance 
            of these sacred Islamic declarations used by Muslims worldwide for over 1400 years.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <a
              href="/six-kalimas"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition"
              aria-label="Open the complete 6 Kalimas pillar guide"
            >
              Open Complete Guide
            </a>
          </div>
          <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
