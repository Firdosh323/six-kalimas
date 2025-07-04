
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-12 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
      <div className="relative container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 leading-tight">
            The Six Kalimas
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 mb-8 leading-relaxed">
            Essential Islamic declarations that strengthen faith and spiritual connection
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-100">
          <p className="text-emerald-800 leading-relaxed text-lg max-w-3xl mx-auto">
            Discover the profound meanings and spiritual significance of these sacred Islamic declarations. 
            Each Kalima offers unique guidance for deepening your faith and understanding of Islam.
          </p>
        </div>

        <div className="mt-8">
          <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
