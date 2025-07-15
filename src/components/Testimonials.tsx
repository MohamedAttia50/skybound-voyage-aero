import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Absolutely fantastic experience! The crew was professional, the seats were comfortable, and the in-flight service exceeded my expectations. Will definitely fly with SkyWings again.',
      trip: 'San Francisco to Tokyo'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      text: 'Best airline I\'ve ever flown with. The booking process was smooth, check-in was quick, and the flight was on time. The premium economy seats were worth every penny.',
      trip: 'Madrid to New York'
    },
    {
      name: 'Emma Thompson',
      location: 'London, UK',
      rating: 5,
      text: 'SkyWings made our family vacation stress-free. The kids loved the entertainment system, and the staff went above and beyond to make us comfortable. Highly recommend!',
      trip: 'London to Sydney'
    },
    {
      name: 'David Kim',
      location: 'Seoul, South Korea',
      rating: 5,
      text: 'Professional service from start to finish. The business class lounge was excellent, and the flight was smooth. Great value for money and exceptional customer service.',
      trip: 'Seoul to Paris'
    },
    {
      name: 'Lisa Johnson',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'I travel frequently for business, and SkyWings has become my go-to airline. Reliable, comfortable, and always on time. The loyalty program benefits are fantastic too.',
      trip: 'Toronto to Dubai'
    },
    {
      name: 'Antonio Silva',
      location: 'São Paulo, Brazil',
      rating: 5,
      text: 'Outstanding experience from booking to landing. The meal service was delicious, the entertainment options were great, and the crew was incredibly friendly and helpful.',
      trip: 'São Paulo to London'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-accent fill-accent' : 'text-muted'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied travelers 
            have to say about their SkyWings experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Trip Info */}
                <div className="text-sm text-primary font-medium mb-3">
                  {testimonial.trip}
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-sky rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Destinations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;