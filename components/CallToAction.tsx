
import React from 'react';
import Image from 'next/image';

interface CallToActionProps {
  imageSrc: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageOnLeft: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ imageSrc, badge, title, description, buttonText, imageOnLeft }) => {
  // imageOnLeft={true} -> Image portion is on the left, content overlay on the right.
  // imageOnLeft={false} -> Image portion is on the right, content overlay on the left.
  
  const gradientClass = imageOnLeft
    ? 'bg-gradient-to-r from-transparent via-[#8AC2ED]/75 to-[#8AC2ED]'
    : 'bg-gradient-to-l from-transparent via-[#8AC2ED]/75 to-[#8AC2ED]';

  const contentJustifyClass = imageOnLeft ? 'justify-end' : 'justify-start';
  
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
      <div className={`absolute inset-0 ${gradientClass}`} />
      
      <div className={`relative min-h-[150px] flex items-center p-8 sm:p-12 ${contentJustifyClass}`}>
        <div className="w-full md:w-4/5 lg:w-3/5 text-white">
          <span className="inline-block bg-white text-gray-800 text-sm font-semibold px-5 py-2 rounded-full mb-6">
            {badge}
          </span>
          <h3 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h3>
          <p className="mb-8">{description}</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
