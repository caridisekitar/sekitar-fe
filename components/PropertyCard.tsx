import React from 'react';
import type { Property } from '@/types';
import Image from 'next/image';

interface PropertyCardProps {
  property: Property;
  isPlaceholder?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isPlaceholder = false }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price).replace('Rp', 'Rp');
  };

  const cardClasses = `group rounded-2xl overflow-hidden relative shadow-lg h-full aspect-[3/4] transition-all duration-300 ${isPlaceholder ? 'opacity-50 pointer-events-none' : 'hover:shadow-2xl'}`;

  return (
    <div className={cardClasses}>
      <Image src={property.imageUrl} alt={property.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.5 3A1.5 1.5 0 002 4.5v9A1.5 1.5 0 003.5 15h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0016.5 3h-13zM13 8a1 1 0 11-2 0 1 1 0 012 0z" />
              <path d="M2 5.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" />
            </svg>
            <span>{property.type}</span>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h3 className="font-bold text-lg">{property.name}</h3>
        <div className="flex items-center text-sm text-gray-200 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.location}
        </div>
        <p className="font-bold text-xl mt-2">{formatPrice(property.price)}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
