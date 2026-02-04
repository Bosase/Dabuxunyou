
import React from 'react';
import { SectionProps } from '../types';
import { IMAGES } from '../imageConfig';

const Hero: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105 hover:scale-100"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${IMAGES.HERO_BG}')`,
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block animate-bounce">
            <span className="bg-traditional-red text-white text-xs px-3 py-1 rounded-full tracking-[0.2em] font-bold shadow-lg border border-white/20">
                广东·东莞·麻涌
            </span>
        </div>
        <h1 className="font-serif-sc text-white text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl text-shadow-lg">
          盛世华章 · <span className="text-gold">非遗大步</span>
        </h1>
        <p className="text-white/95 text-lg md:text-2xl font-light tracking-[0.3em] mb-10 max-w-2xl mx-auto leading-relaxed border-t border-b border-white/30 py-4 bg-black/10 backdrop-blur-sm rounded-sm">
          传颂百年民俗文化 · 领略麻涌非遗风采
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="#heritage" className="bg-traditional-red hover:bg-red-700 text-white px-8 py-4 rounded-sm tracking-widest transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-2 border border-red-800">
                探索非遗历史
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#gallery" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-sm tracking-widest transition-all shadow-lg hover:shadow-white/10">
                精彩瞬间
            </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-pulse">
        <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-[0.5em] mb-2 uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-white/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
