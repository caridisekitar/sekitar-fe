"use client";
import React, { useState } from 'react';
import { TESTIMONIALS } from '@/constants';
import Image from 'next/image';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? TESTIMONIALS.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextTestimonial = () => {
        const isLastSlide = currentIndex === TESTIMONIALS.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Apa Kata <span className="text-cyan-400">#TemanSekitar</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami percaya setiap usaha layak untuk tumbuh. Karena itu, kami bantu #TemanSekitar mempromosikan bisnis kecil/UMKM secara gratis di website ini. 💙
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center gap-x-4 lg:gap-x-8">
            {/* Prev Button */}
            <button 
                onClick={prevTestimonial} 
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center transition flex-shrink-0">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4M10 18l-6-6 6-6"/>
                </svg>
            </button>
            
            {/* Testimonial Card */}
            <div className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg bg-gray-50 min-h-[400px]">
                {/* Image */}
                <div className="w-full md:w-2/5 bg-sky-100 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-[250px] md:max-w-none aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image 
                            src={TESTIMONIALS[currentIndex].imageUrl} 
                            alt={TESTIMONIALS[currentIndex].name} 
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-5xl font-serif text-black mb-4">“</p>
                    <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed mb-6">
                        {TESTIMONIALS[currentIndex].quote}
                    </blockquote>
                    <footer className="mt-auto md:mt-6">
                        <p className="font-bold text-lg text-gray-900">{TESTIMONIALS[currentIndex].name}</p>
                        <p className="text-sm text-gray-500">{TESTIMONIALS[currentIndex].role}</p>
                    </footer>
                </div>
            </div>

            {/* Next Button */}
            <button 
                onClick={nextTestimonial} 
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m-6 6l6-6-6-6"/>
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
