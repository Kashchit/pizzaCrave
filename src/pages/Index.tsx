import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-pizza-brown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pizza-gold">PizzaCrave</h3>
              <p className="text-white/80 mb-4">
                Authentic Italian pizzas made with love and tradition since 2004.
              </p>
              <p className="text-white/80">
                Follow us for daily specials and pizza inspiration!
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-pizza-gold transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-pizza-gold transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-pizza-gold transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-pizza-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-white/80">
                <li><span>Specialty Pizzas</span></li>
                <li><span>Classic Favorites</span></li>
                <li><span>Appetizers</span></li>
                <li><span>Beverages</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-white/80">
                <li>RV University</li>
                <li>Bengaluru, Karnataka</li>
                <li>+91-XXXXX-XXXXX</li>
                <li>kashchit10@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 PizzaCrave. All rights reserved. Made with ❤️ and lots of cheese by Kashchit</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
