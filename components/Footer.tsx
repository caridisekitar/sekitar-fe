import React from 'react';

const FooterLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-500">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13V21C1 21.2652 1.10536 21.5196 1.29289 21.7071C1.48043 21.8946 1.73478 22 2 22H7V11H17V22H22C22.2652 22 22.5196 21.8946 22.7071 21.7071C22.8946 21.5196 23 21.2652 23 21V8L12 1L1 8V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-2xl font-bold text-white">Sekitar</span>
  </div>
);

const TikTokIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" aria-hidden="true"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.88-.36-7.02-1.88-1.82-1.26-3.15-3.11-3.8-5.12-.43-1.27-.63-2.61-.6-3.96.02-1.52.43-3.01 1.15-4.35.92-1.72 2.45-3.1 4.2-4.01 1.76-.9 3.73-1.28 5.72-1.15.06 2.39.01 4.78.02 7.18-.01 1.19-.43 2.37-1.12 3.32-.81 1.09-1.93 1.84-3.21 2.22-1.16.34-2.39.34-3.55.16-.8-.12-1.56-.4-2.23-.82v-2.22c.69.42 1.45.74 2.26.91.81.17 1.63.16 2.43-.02 1.18-.28 2.19-.91 2.96-1.8.74-.85 1.14-1.92 1.14-3.08-.02-2.38-.01-4.76-.01-7.14.01-.5.01-1 .03-1.5z" fill="currentColor"/></svg>
);

const InstagramIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" aria-hidden="true"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.455.717-2.126 1.387C1.333 2.705.92 3.377.63 4.142.333 4.905.13 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.306.783.718 1.455 1.387 2.126.67.67 1.343 1.079 2.126 1.387.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.783-.305 1.455-.718 2.126-1.387.67-.67 1.079-1.343 1.387-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.305-.784-.718-1.455-1.387-2.126C21.314 1.333 20.643.92 19.86.63c-.765-.297-1.636-.5-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164 1.057.36 2.227.413C8.415 2.175 8.797 2.16 12 2.16zm0 5.48c-2.618 0-4.72 2.102-4.72 4.72s2.102 4.72 4.72 4.72 4.72-2.102 4.72-4.72-2.102-4.72-4.72-4.72zm0 7.8c-1.705 0-3.08-1.375-3.08-3.08s1.375-3.08 3.08-3.08 3.08 1.375 3.08 3.08-1.375 3.08-3.08 3.08zm6.36-7.38c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96z" fill="currentColor"/></svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Cari kost terasa lebih mudah, <br /> bersama Sekitar.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-b border-gray-700 py-12">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-gray-400 text-sm">Temukan kost & properti impianmu dengan mudah, aman, dan nyaman bersama kami.</p>
             <div className="flex space-x-4">
              <a href="#" aria-label="TikTok" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"><TikTokIcon /></a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"><InstagramIcon /></a>
            </div>
          </div>
          
          {/* Column 2: Menu Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">MENU</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white">HOME</a></li>
              <li><a href="#" className="hover:text-white">CARI KOST</a></li>
              <li><a href="#" className="hover:text-white">MAPS</a></li>
              <li><a href="#" className="hover:text-white">WISHLIST</a></li>
              <li><a href="#" className="hover:text-white">KALKULATOR BUDGET</a></li>
            </ul>
          </div>
          
          {/* Column 3: Information Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">INFORMATION</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white">PRIVACY</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">CONTACTS</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-sm tracking-wider">CONTACT US</h4>
             <button className="bg-gray-800 text-white px-6 py-2.5 rounded-md hover:bg-gray-700 transition-colors border border-gray-600 w-full text-center">Contact Us</button>
             <p className="text-sm text-gray-400">caridisekitar@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-8">
          <p>© 2025 Sekitar All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
