export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  prescription_required: boolean;
  in_stock: boolean;
  rating: number;
  reviews: Review[];
  dosageForm: string;  // tablet, syrup, etc.
  packSize: string;
  activeIngredients: string[];
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address[];
  prescriptions: Prescription[];
}

export interface Address {
  id: string;
  userId: string;
  street: string;
  city: string;
  county: string;
  postalCode: string;
  isDefault: boolean;
}

export interface Prescription {
  id: string;
  userId: string;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  products: Product[];
} 