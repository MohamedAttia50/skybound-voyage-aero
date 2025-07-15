import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown, Calendar, MapPin, Users, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    class: 'economy'
  });

  const popularDestinations = [
    'New York (NYC)', 'London (LHR)', 'Paris (CDG)', 'Tokyo (NRT)', 
    'Dubai (DXB)', 'Sydney (SYD)', 'Singapore (SIN)', 'Hong Kong (HKG)'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.from || !formData.to || !formData.departure) {
      toast({
        title: "Please fill in all required fields",
        description: "From, To, and Departure Date are required.",
        variant: "destructive"
      });
      return;
    }

    if (formData.from === formData.to) {
      toast({
        title: "Invalid destinations",
        description: "Departure and destination cities cannot be the same.",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful booking search
    toast({
      title: "Searching flights...",
      description: `Finding the best flights from ${formData.from} to ${formData.to}`,
    });

    // In a real app, this would redirect to search results
    setTimeout(() => {
      toast({
        title: "Flights found!",
        description: "Redirecting to flight selection...",
      });
    }, 2000);
  };

  const swapDestinations = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Flight
          </h2>
          <p className="text-xl text-muted-foreground">
            Find and book the perfect flight for your next adventure
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-elevation">
            <CardHeader className="bg-gradient-sky text-white">
              <CardTitle className="text-2xl text-center">Flight Search</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Origin and Destination */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      From
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('from', value)} value={formData.from}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select departure city" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularDestinations.map((destination) => (
                          <SelectItem key={destination} value={destination}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="to" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      To
                    </Label>
                    <div className="flex gap-2">
                      <Select onValueChange={(value) => handleInputChange('to', value)} value={formData.to}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {popularDestinations.map((destination) => (
                            <SelectItem key={destination} value={destination}>
                              {destination}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="icon"
                        onClick={swapDestinations}
                        className="shrink-0"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departure" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Departure Date
                    </Label>
                    <Input 
                      id="departure"
                      type="date"
                      value={formData.departure}
                      onChange={(e) => handleInputChange('departure', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="return" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Return Date (Optional)
                    </Label>
                    <Input 
                      id="return"
                      type="date"
                      value={formData.return}
                      onChange={(e) => handleInputChange('return', e.target.value)}
                      min={formData.departure || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Passengers and Class */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passengers" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Passengers
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('passengers', value)} value={formData.passengers}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class">Travel Class</Label>
                    <Select onValueChange={(value) => handleInputChange('class', value)} value={formData.class}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium-economy">Premium Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Flights
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;