import { ChevronDown } from 'lucide-react';
const Hero = () => {
  return <section className="relative py-8 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 px-0"></div>
      <div className="relative container mx-auto max-w-4xl px-[5px]">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2 leading-tight md:text-4xl">
            The Six Kalimas
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 mb-8 leading-relaxed">
            Sacred declarations that form the foundation of Islamic faith
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm p-8 shadow-lg border border-emerald-100 mx-0 px-[5px] rounded-lg py-[5px] my-0">
          <p className="text-emerald-800 leading-relaxed text-base">
            The Six Kalimas are fundamental Islamic declarations that express the core beliefs of Islam. Each Kalima serves a unique purpose in strengthening faith, seeking forgiveness, and affirming the oneness of Allah.
          </p>
        </div>

        <div className="mt-2 my-[2px]">
          <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;