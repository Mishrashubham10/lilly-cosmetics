import { Categories } from '@/components/Categories';
import { Featured } from '@/components/Featured';
import { NewsLetter } from '@/components/NewsLetter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 mt-24">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm animate-fade-up">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">
                  New Collection 2027
                </span>
              </div>

              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                Unveil Your
                <span className="block text-gradient">Natural Beauty</span>
              </h1>

              <p
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                Discover our luxurious collection of premium cosmetics, crafted
                with the finest ingredients to enhance your unique radiance.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Link href="/products">
                  <Button variant="secondary" size="lg">
                    Shop Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div>
                  <p className="font-display text-3xl font-semibold text-gradient">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-gradient">
                    10K+
                  </p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-gradient">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground">Cruelty Free</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="relative hidden lg:block animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden border-gradient glow-primary">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                  alt="Luxury cosmetics collection"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 p-6 bg-card/90 backdrop-blur-xl rounded-2xl border border-border shadow-2xl glow-accent animate-float">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&q=80"
                      alt="Featured product"
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <p className="font-display font-medium text-foreground">
                      Bestseller
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Velvet Matte Lipstick
                    </p>
                    <p className="text-primary font-semibold">₹299</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <Featured />
      <NewsLetter />
    </div>
  );
}