'use client';

import { useLilly } from '@/context/LillyContext';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const Featured = () => {
  const { products } = useLilly();
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              Curated Selection
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Featured Products
            </h2>
          </div>
          <Link href="/shop">
            <Button variant="outline">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* ========== PRODUCTS GRID ======== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={`/products/${product.id}`}>
                <ProductCard {...product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};