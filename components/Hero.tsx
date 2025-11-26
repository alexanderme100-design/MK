import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6 inline-block animate-bounce">
           <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full font-bold text-sm md:text-base shadow-lg">
             114學年度交通安全訪視
           </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
          鷺江國民小學
          <br />
          <span className="text-3xl md:text-5xl font-medium mt-4 block">交通安全教育宣導</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light max-w-2xl mx-auto">
          重視效能、效率與效益 · 追求品質、品味與品牌
          <br/>
          <span className="text-lg opacity-90 mt-2 block">守護每位學子的通學安全，朝著零事故的目標穩健邁進</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#overview" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-transform hover:scale-105 shadow-xl">
              探索成果
            </a>
             <a href="#chat" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-transform hover:scale-105">
              AI 智能助理
            </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;