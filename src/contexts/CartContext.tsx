import React, { createContext, useContext, useState, useCallback } from 'react';
import { CartItem, Pizza, CartContextType } from '@/types/pizza';
import { toast } from '@/hooks/use-toast';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((pizza: Pizza, size?: string, sizePrice?: number) => {
    const itemId = `${pizza.id}-${size || 'default'}`;
    
    setItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === itemId);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === itemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast({
          title: "Added to cart!",
          description: `${pizza.name} quantity updated`,
        });
        return updatedItems;
      } else {
        const newItem: CartItem = {
          id: itemId,
          pizza,
          quantity: 1,
          size,
          sizePrice
        };
        toast({
          title: "Added to cart!",
          description: `${pizza.name} has been added to your cart`,
        });
        return [...prevItems, newItem];
      }
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => {
      const itemPrice = item.sizePrice || item.pizza.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  }, [items]);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  }, []);

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};