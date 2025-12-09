'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Send, Sparkles } from 'lucide-react';
import { Input } from './ui/input';

export const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Lilly Cosmetics!', {
        description: `You've been added to our newsletter.`,
      });
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Exclusive Offers</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Join Our Beauty Circle
          </h2>

          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to receive exclusive offers, new arrivals, and beauty tips
            delivered straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-background border-border focus:border-primary"
              required
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};