import React from 'react';
import { PROPERTIES } from '@/constants';
import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';

const SearchSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 tracking-widest mb-2">✦ CARI KOS</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Mulai Cari Kos</h2>
          <p className="text-gray-600 mt-2">Kalau biasanya kamu butuh 30 hari untuk cari kost yang sesuai, di Sekitar kamu hanya butuh 30 menit!</p>
        </div>
        
        <div className="bg-sky-50 p-6 rounded-2xl mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-1">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Cari</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" placeholder="Cari Kos..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Lokasi</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option>Pilih Lokasi</option>
                <option>Jakarta Selatan</option>
                <option>Jakarta Pusat</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Tipe</label>
               <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option>Kost Putri</option>
                <option>Kost Putra</option>
                <option>Campur</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Harga</label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option>1.000.000-2.000.000</option>
                <option>2.000.000-3.000.000</option>
              </select>
            </div>
            <button className="w-full bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors ">Cari</button>
          </div>
        </div>

        <p className="text-gray-600 mb-6">Menampilkan 10 dari hasil pencarian</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} isPlaceholder={index >= 5} />
          ))}
        </div>
        
        <Pagination />

      </div>
    </section>
  );
};

export default SearchSection;
