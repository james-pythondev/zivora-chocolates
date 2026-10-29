export interface ProductSizeOption {
  label: string;
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'chocolate' | 'wellness-oil';
  subCategory?: 'dark' | 'nut-bar' | 'gift-box' | 'milk' | 'oil';
  tagline: string;
  description: string;
  ingredients?: string;
  image: string;
  badge?: string;
  sizeOptions: ProductSizeOption[];
}

export interface CartItem {
  id: string; // combination of productId and selected size
  productId: string;
  name: string;
  category: 'chocolate' | 'wellness-oil';
  selectedSize: ProductSizeOption;
  quantity: number;
  image: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  notes: string;
}

