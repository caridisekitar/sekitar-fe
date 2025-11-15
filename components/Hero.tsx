import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] lg:h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/90 to-blue-600/90">
        <Image src="https://picsum.photos/1600/1200?random=0" alt="Modern architecture" fill className="object-cover opacity-20" />
      </div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight flex flex-wrap items-center justify-center gap-x-4">
          Cari kost terasa lebih mudah, <br className="hidden md:block" /> bersama 
          <span className="inline-flex items-center gap-x-4">
            <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13V21C1 21.2652 1.10536 21.5196 1.29289 21.7071C1.48043 21.8946 1.73478 22 2 22H7V11H17V22H22C22.2652 22 22.5196 21.8946 22.7071 21.7071C22.8946 21.5196 23 21.2652 23 21V8L12 1L1 8V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
             Sekitar.
          </span>
        </h1>
        <div className="w-full max-w-xl">
            <form className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            <div className="pl-5 pr-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
                type="text" 
                placeholder="Tulis nama kost disini..." 
                className="w-full py-3.5 text-gray-700 focus:outline-none"
            />
            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full m-1 hover:bg-gray-800 transition-colors whitespace-nowrap">
                Cari
            </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
