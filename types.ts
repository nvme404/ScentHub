
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  sold: number;
  isBestSeller: boolean;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  reviews: Review[];
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  rating: number;
  followers: string;
  productsCount: number;
  responseRate: string;
  joinedDate: string;
  isOfficial: boolean;
  perfumes: Perfume[];
}

export interface CartItem extends Perfume {
  cartQuantity: number;
}
