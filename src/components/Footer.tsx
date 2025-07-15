import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "Email address is required for newsletter subscription.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful subscription
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Fleet', href: '#fleet' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Travel Guide', href: '#guide' },
    { label: 'Careers', href: '#careers' },
    { label: 'News', href: '#news' }
  ];

  const services = [
    { label: 'Flight Booking', href: '#booking' },
    { label: 'Manage Booking', href: '#manage' },
    { label: 'Check-in', href: '#checkin' },
    { label: 'Baggage Info', href: '#baggage' },
    { label: 'Special Assistance', href: '#assistance' },
    { label: 'Group Travel', href: '#group' }
  ];

  const support = [
    { label: 'Customer Service', href: '#support' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Feedback', href: '#feedback' },
    { label: 'Lost & Found', href: '#lost' },
    { label: 'Travel Insurance', href: '#insurance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-sky">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with SkyWings
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Get the latest deals, travel tips, and exclusive offers delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button type="submit" variant="premium" className="shrink-0">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-sky rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SkyWings</span>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner in air travel. We connect people and places with 
              exceptional service, safety, and comfort since 2008.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@skywings.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Aviation Blvd, Sky City, SC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60">
              © 2024 SkyWings Airlines. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;