import React, { useState } from 'react';
import { PizzaCard } from './PizzaCard';
import { Pizza } from '@/types/pizza';
import { Button } from '@/components/ui/button';

// Import pizza images
import pepperoniImage from '@/assets/pepperoni-pizza.jpg';
import supremeImage from '@/assets/supreme-pizza.jpg';
import hawaiianImage from '@/assets/hawaiian-pizza.jpg';

// Import sides images
import garlicBreadImage from '@/assets/garlic-bread.jpg';
import chickenWingsImage from '@/assets/chicken-wings.jpg';
import mozzarellaSticksImage from '@/assets/mozzarella-sticks.jpg';

// Import drinks images
import cocaColaImage from '@/assets/coca-cola.jpg';
import spriteImage from '@/assets/sprite.jpg';
import orangeJuiceImage from '@/assets/orange-juice.jpg';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'pizza' | 'sides' | 'drinks'>('pizza');

  const pizzas: Pizza[] = [
    {
      id: 'margherita',
      name: 'Margherita Classic',
      description: 'Fresh mozzarella, tomato sauce, basil, extra virgin olive oil',
      price: 399,
      image: pepperoniImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 299 },
        { name: 'Medium (12")', price: 399 },
        { name: 'Large (16")', price: 549 },
        { name: 'Extra Large (18")', price: 649 }
      ]
    },
    {
      id: 'pepperoni',
      name: 'Pepperoni Supreme',
      description: 'Classic pepperoni, mozzarella cheese, marinara sauce',
      price: 449,
      image: pepperoniImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 349 },
        { name: 'Medium (12")', price: 449 },
        { name: 'Large (16")', price: 599 },
        { name: 'Extra Large (18")', price: 699 }
      ]
    },
    {
      id: 'supreme',
      name: 'Supreme Deluxe',
      description: 'Pepperoni, sausage, mushrooms, bell peppers, olives, onions',
      price: 549,
      image: supremeImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 449 },
        { name: 'Medium (12")', price: 549 },
        { name: 'Large (16")', price: 699 },
        { name: 'Extra Large (18")', price: 799 }
      ]
    },
    {
      id: 'hawaiian',
      name: 'Hawaiian Paradise',
      description: 'Ham, pineapple, mozzarella cheese, tomato sauce',
      price: 479,
      image: hawaiianImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 379 },
        { name: 'Medium (12")', price: 479 },
        { name: 'Large (16")', price: 619 },
        { name: 'Extra Large (18")', price: 719 }
      ]
    },
    {
      id: 'meat-lovers',
      name: 'Meat Lovers',
      description: 'Pepperoni, sausage, bacon, ham, ground beef',
      price: 599,
      image: supremeImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 499 },
        { name: 'Medium (12")', price: 599 },
        { name: 'Large (16")', price: 749 },
        { name: 'Extra Large (18")', price: 849 }
      ]
    },
    {
      id: 'veggie-delight',
      name: 'Veggie Delight',
      description: 'Mushrooms, bell peppers, onions, tomatoes, olives',
      price: 499,
      image: hawaiianImage,
      category: 'pizza',
      sizes: [
        { name: 'Small (10")', price: 399 },
        { name: 'Medium (12")', price: 499 },
        { name: 'Large (16")', price: 649 },
        { name: 'Extra Large (18")', price: 749 }
      ]
    }
  ];

  const sides: Pizza[] = [
    {
      id: 'garlic-bread',
      name: 'Garlic Bread',
      description: 'Freshly baked bread with garlic butter and herbs',
      price: 149,
      image: garlicBreadImage,
      category: 'sides'
    },
    {
      id: 'chicken-wings',
      name: 'Buffalo Wings',
      description: '8 pieces of crispy wings with buffalo sauce',
      price: 299,
      image: chickenWingsImage,
      category: 'sides'
    },
    {
      id: 'mozzarella-sticks',
      name: 'Mozzarella Sticks',
      description: '6 pieces of crispy mozzarella with marinara sauce',
      price: 199,
      image: mozzarellaSticksImage,
      category: 'sides'
    }
  ];

  const drinks: Pizza[] = [
    {
      id: 'coca-cola',
      name: 'Coca Cola',
      description: 'Refreshing classic cola drink',
      price: 65,
      image: cocaColaImage,
      category: 'drinks'
    },
    {
      id: 'sprite',
      name: 'Sprite',
      description: 'Lemon-lime flavored soft drink',
      price: 65,
      image: spriteImage,
      category: 'drinks'
    },
    {
      id: 'orange-juice',
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 89,
      image: orangeJuiceImage,
      category: 'drinks'
    }
  ];

  const getItems = () => {
    switch (activeCategory) {
      case 'pizza': return pizzas;
      case 'sides': return sides;
      case 'drinks': return drinks;
      default: return pizzas;
    }
  };

  const categories = [
    { id: 'pizza' as const, name: 'Pizzas', count: pizzas.length },
    { id: 'sides' as const, name: 'Sides', count: sides.length },
    { id: 'drinks' as const, name: 'Drinks', count: drinks.length }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with the finest ingredients, each dish tells a story of authentic Italian flavors
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-card rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "ghost"}
                className={`rounded-full px-6 py-2 mx-1 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'pizza-button text-white shadow-lg' 
                    : 'hover:bg-muted'
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {getItems().map((item) => (
            <PizzaCard key={item.id} pizza={item} />
          ))}
        </div>
      </div>
    </section>
  );
};