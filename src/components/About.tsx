import React from 'react';
import { Clock, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Hot and fresh pizzas delivered to your door in 15 minutes or less'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every pizza is handcrafted with passion using family recipes passed down for generations'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest ingredients sourced from trusted local suppliers'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose PizzaCrave?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 20 years, we've been serving authentic Italian pizzas made with traditional methods and modern convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 pizza-card rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Pizzas Sold</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Locations</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};