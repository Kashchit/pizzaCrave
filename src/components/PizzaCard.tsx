import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pizza } from '@/types/pizza';
import { useCart } from '@/contexts/CartContext';

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (pizza.sizes && pizza.sizes.length > 0) {
      if (!selectedSize) {
        alert('Please select a size!');
        return;
      }
      const size = pizza.sizes.find(s => s.name === selectedSize);
      addToCart(pizza, selectedSize, size?.price);
    } else {
      addToCart(pizza);
    }
  };

  const getDisplayPrice = () => {
    if (pizza.sizes && selectedSize) {
      const size = pizza.sizes.find(s => s.name === selectedSize);
      return size ? size.price : pizza.price;
    }
    return pizza.price;
  };

  return (
    <div className="pizza-card rounded-xl p-6 h-full flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={pizza.image} 
          alt={pizza.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-foreground">{pizza.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{pizza.description}</p>

        {/* Size Selection */}
        {pizza.sizes && pizza.sizes.length > 0 && (
          <div className="mb-4">
            <label className="text-sm font-medium text-foreground mb-2 block">Size:</label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {pizza.sizes.map((size) => (
                  <SelectItem key={size.name} value={size.name}>
                    {size.name} - ₹{size.price.toFixed(0)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ₹{getDisplayPrice().toFixed(0)}
          </span>
          
          <Button 
            onClick={handleAddToCart}
            className="pizza-button text-white group/btn"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1 transition-transform duration-200 group-hover/btn:rotate-90" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};