import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Highlight from '@/components/Highlight';
import SearchSection from '@/components/SearchSection';
import CallToAction from '@/components/CallToAction';
import BusinessPartners from '@/components/BusinessPartners';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Highlight />
        <SearchSection />
        <div className="py-12 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CallToAction
                imageSrc="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1984&auto=format&fit=crop"
                badge="Gratis"
                title="Daftarkan Kosmu"
                description="Punya kos? Yuk, daftarkan sekarang dan buat kosmu lebih mudah ditemukan oleh ribuan pencari di sekitar kamu!"
                buttonText="Daftar sekarang"
                imageOnLeft={true}
              />
              <CallToAction
                imageSrc="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1984&auto=format&fit=crop"
                badge="Gratis"
                title="Daftarkan Bisnismu"
                description="Punya usaha lokal? Yuk, daftarkan bisnismu biar makin dikenal dan mudah ditemukan orang di sekitar kamu!"
                buttonText="Daftar sekarang"
                imageOnLeft={false}
              />
            </div>
          </div>
        </div>
        <BusinessPartners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
