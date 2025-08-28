export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'pizza' | 'sides' | 'drinks';
  sizes?: { name: string; price: number }[];
}

export interface CartItem {
  id: string;
  pizza: Pizza;
  quantity: number;
  size?: string;
  sizePrice?: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (pizza: Pizza, size?: string, sizePrice?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  clearCart: () => void;
}