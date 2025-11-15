
export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  type: string;
  imageUrl: string;
}

export interface Business {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}
