import type { Property, Business, Testimonial } from '@/types';

export const HIGHLIGHTS: Property[] = [
  { id: 1, name: 'Kost Dahlia Indah', location: 'Mampang, Jakarta Selatan', price: 1500000, type: 'Kost Putri', imageUrl: 'https://picsum.photos/400/500?random=1' },
  { id: 2, name: 'Kost Mawar Asri', location: 'Tebet, Jakarta Selatan', price: 1750000, type: 'Kost Putri', imageUrl: 'https://picsum.photos/400/500?random=2' },
  { id: 3, name: 'Kost Anggrek Bulan', location: 'Kebayoran, Jakarta Selatan', price: 2000000, type: 'Campur', imageUrl: 'https://picsum.photos/400/500?random=3' },
  { id: 4, name: 'Kost Melati Wangi', location: 'Cilandak, Jakarta Selatan', price: 1600000, type: 'Kost Putra', imageUrl: 'https://picsum.photos/400/500?random=4' },
  { id: 5, name: 'Kost Tulip Residence', location: 'Pasar Minggu, Jakarta Selatan', price: 1850000, type: 'Campur', imageUrl: 'https://picsum.photos/400/500?random=5' },
];

export const PROPERTIES: Property[] = [
  ...HIGHLIGHTS,
  { id: 6, name: 'Kost Kenanga Jaya', location: 'Pancoran, Jakarta Selatan', price: 1900000, type: 'Kost Putri', imageUrl: 'https://picsum.photos/400/500?random=6' },
  { id: 7, name: 'Kost Flamboyan', location: 'Jagakarsa, Jakarta Selatan', price: 1400000, type: 'Kost Putra', imageUrl: 'https://picsum.photos/400/500?random=7' },
  { id: 8, name: 'Kost Sakura Park', location: 'Setiabudi, Jakarta Selatan', price: 2200000, type: 'Campur', imageUrl: 'https://picsum.photos/400/500?random=8' },
  { id: 9, name: 'Kost Dahlia Indah', location: 'Mampang, Jakarta Selatan', price: 1500000, type: 'Kost Putri', imageUrl: 'https://picsum.photos/400/500?random=9' },
  { id: 10, name: 'Kost Mawar Asri', location: 'Tebet, Jakarta Selatan', price: 1750000, type: 'Kost Putri', imageUrl: 'https://picsum.photos/400/500?random=10' },
];

export const BUSINESSES: Business[] = [
    { id: 1, name: 'Kopi Calva', price: 10000, imageUrl: 'https://images.unsplash.com/photo-1511920183353-3c9c6146c2d4?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, name: 'Smoothie Sehat', price: 50000, imageUrl: 'https://images.unsplash.com/photo-1625937326982-35c913a886a8?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, name: 'Aneka Jus Buah', price: 150000, imageUrl: 'https://images.unsplash.com/photo-1600718374139-8664155590a3?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, name: 'Boneka Beruang', price: 10000, imageUrl: 'https://images.unsplash.com/photo-1543886318-32b5d4983944?q=80&w=2070&auto=format&fit=crop' },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, quote: 'Setelah daftarin kos di caridisekitar.com, penyewa jadi makin banyak! Fitur pendaftarannya gampang banget, dan kosku cepat muncul di hasil pencarian.', name: 'Candra Haris', role: 'Pemilik Kos Dahlia', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop' },
    { id: 2, quote: 'Aplikasi ini sangat membantu saya menemukan kos yang sesuai dengan budget dan kriteria. Tampilannya user-friendly dan informasinya akurat. Recommended!', name: 'Anisa Putri', role: 'Mahasiswa', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, quote: 'Sebagai pekerja kantoran, waktu saya sangat terbatas untuk cari kos. Sekitar benar-benar mempermudah segalanya. Dalam sehari saya sudah dapat kos idaman.', name: 'Budi Santoso', role: 'Karyawan Swasta', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
];
