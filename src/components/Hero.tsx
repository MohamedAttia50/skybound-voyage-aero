import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-airplane.jpg';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Global Destinations',
    'Premium Comfort',
    '24/7 Support'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fly Beyond
              <span className="block text-accent">Your Dreams</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Experience premium air travel with SkyWings. We connect you to over 200 destinations 
              worldwide with unmatched comfort and service excellence.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToBooking}
                className="group"
              >
                Book Your Flight
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;