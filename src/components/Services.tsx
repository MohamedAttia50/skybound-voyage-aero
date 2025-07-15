import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Globe, HeadphonesIcon, Shield, Clock, Star } from 'lucide-react';
import airplaneInterior from '@/assets/airplane-interior.jpg';
import worldDestinations from '@/assets/world-destinations.jpg';
import customerSupport from '@/assets/customer-support.jpg';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Comfortable Flights',
      description: 'Experience luxury in the sky with our spacious seats, premium amenities, and world-class service.',
      image: airplaneInterior,
      features: ['Premium Seating', 'In-flight Entertainment', 'Gourmet Meals']
    },
    {
      icon: Globe,
      title: 'Global Destinations',
      description: 'Fly to over 200 destinations across 6 continents with our extensive route network.',
      image: worldDestinations,
      features: ['200+ Destinations', 'Daily Flights', 'Seamless Connections']
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available around the clock to assist you.',
      image: customerSupport,
      features: ['Round-the-clock Help', 'Multilingual Support', 'Quick Response']
    }
  ];

  const stats = [
    { icon: Star, value: '4.8/5', label: 'Customer Rating' },
    { icon: Shield, value: '99.9%', label: 'Safety Record' },
    { icon: Clock, value: '85%', label: 'On-time Performance' },
    { icon: Globe, value: '200+', label: 'Destinations' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose SkyWings?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing exceptional air travel experiences with uncompromising 
            safety, comfort, and service excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elevation transition-all duration-300 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;