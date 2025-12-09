'use client';

import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useLilly } from '@/context/LillyContext';
import { cn } from '@/lib/utils';
import { Grid3X3, LayoutList } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const { products } = useLilly();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = products.filter((p) => p.category).slice(0, 6);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Collection
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our curated selection of premium cosmetics designed to
              enhance your natural beauty.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((p) => (
                <Button
                  key={p.id}
                  variant={
                    selectedCategory === p.category ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(p.category)}
                >
                  {p.category}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('grid')}
                className={cn(viewMode === 'grid' && 'bg-muted')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('list')}
                className={cn(viewMode === 'list' && 'bg-muted')}
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={cn(
              'grid gap-8',
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2'
            )}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link href={`/products/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
