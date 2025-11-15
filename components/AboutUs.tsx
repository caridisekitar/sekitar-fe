import React from 'react';
import Image from 'next/image';

const SparkleIcon: React.FC = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0L28.1436 19.8564L48 24L28.1436 28.1436L24 48L19.8564 28.1436L0 24L19.8564 19.8564L24 0Z" fill="currentColor"/>
    </svg>
);

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 gap-y-12">

          {/* Left Column: Title and Images */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-semibold text-gray-500 tracking-widest mb-4">+ ABOUT US</p>
            
            <div className="relative mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight pr-12 lg:pr-20">
                Sama seperti jodoh, kadang kost dan hunian idaman bisa kamu <span className="text-cyan-400">#CariDiSekitar</span>
              </h2>
              <div className="absolute top-0 right-0 -mt-2 text-black">
                <SparkleIcon />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pr-12 lg:pr-20">
              <div className="relative aspect-[4/5] w-full">
                  <Image src="https://picsum.photos/400/500?random=34" alt="House exterior 1" fill className="rounded-2xl shadow-lg object-cover transform transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative aspect-[4/5] w-full">
                  <Image src="https://picsum.photos/400/500?random=35" alt="House exterior 2" fill className="rounded-2xl shadow-lg object-cover transform transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
          
          {/* Right Column: Description */}
          <div className="w-full lg:w-1/3">
            <p className="text-2xl text-gray-300 leading-relaxed">
              Dengan data yang akurat dan filter yang personal, Sekitar hadir untuk bantu kamu menemukan kost terbaik yang sesuai dengan kebutuhan mu, di mana pun kamu berada.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
