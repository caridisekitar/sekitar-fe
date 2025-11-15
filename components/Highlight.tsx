
"use client";
import React, { useRef, useState } from 'react';
import { HIGHLIGHTS } from '@/constants';
import PropertyCard from '@/components/PropertyCard';

const Highlight: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Card width (w-72 = 288px) + gap (space-x-6 = 24px)
      const scrollAmount = 288 + 24; 
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsAtStart(e.currentTarget.scrollLeft === 0);
  };

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3 flex-shrink-0">
            <p className="text-sm font-semibold text-gray-500 tracking-widest mb-2">✦ HIGHLIGHT</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">5 Kost Pilihan Kami</h2>
            <p className="text-gray-600 mb-6">
              Ini dia pilihan kost yang nyaman, aman, dan strategis pilihan Sekitar!
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => scroll('left')} 
                aria-label="Scroll left"
                disabled={isAtStart}
                className={`w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center transition ${isAtStart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 flex items-center justify-center transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 min-w-0">
            <div ref={scrollContainerRef} onScroll={handleScroll} className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
              {HIGHLIGHTS.map(property => (
                <div key={property.id} className="flex-shrink-0 w-72 snap-start">
                   <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;