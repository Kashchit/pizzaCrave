import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-pizza.jpg';

export const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuElement = document.querySelector('#menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Delicious pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pizza-brown/80 via-pizza-brown/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Authentic Italian
            <span className="block text-pizza-gold">Pizza Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Handcrafted with love, baked to perfection. Every bite tells a story of tradition and flavor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToMenu}
              className="pizza-button text-white border-none text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              Order Now
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToMenu}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-pizza-brown backdrop-blur-sm text-lg px-8 py-3"
            >
              View Menu
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pizza-gold mb-2">500+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pizza-gold mb-2">25+</div>
              <div className="text-white/80">Pizza Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pizza-gold mb-2">15min</div>
              <div className="text-white/80">Avg Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};