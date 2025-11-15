
import React from 'react';
import { BUSINESSES } from '@/constants';
import Image from 'next/image';

const BusinessIcon: React.FC = () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-0.5">
      <path d="M8 0L9.38885 6.61115L16 8L9.38885 9.38885L8 16L6.61115 9.38885L0 8L6.61115 6.61115L8 0Z" fill="currentColor"/>
    </svg>
);

const BusinessPartners: React.FC = () => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(price).replace(/\s/g, ''); // Remove spaces for Rp10.000 format
    };

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 tracking-widest mb-2"><BusinessIcon /> BISNIS</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Bisnis Teman Sekitar</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami percaya setiap usaha layak untuk tumbuh. Karena itu, kami bantu #TemanSekitar mempromosikan bisnis kecil/UMKM secara gratis di website ini. 💙
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESSES.map((business) => (
            <div key={business.id} className="group rounded-3xl overflow-hidden relative shadow-lg aspect-[4/5]">
                <Image src={business.imageUrl} alt={business.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/25 backdrop-blur-lg flex items-center justify-between">
                    <div>
                        <h3 className="font-medium text-white">{business.name}</h3>
                        <p className="font-bold text-xl text-white">{formatPrice(business.price)}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPartners;
