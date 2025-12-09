'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from './ui/button';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  image,
  rating,
  isNew,
  isBestseller,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ========= IMG CONTAINER ========== */}
      <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-card border-gradient">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          height={400}
          width={400}
        />

        {/* ======== OVERLAY ======== */}
        <div
          className={cn(
            'absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* ======== BADGES ========== */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              New
            </span>
          )}
          {isBestseller && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
              Bestseller
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* ======== WISHLIST BUTTON ======== */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-background"
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-colors duration-300',
              isWishlisted
                ? 'fill-accent text-accent'
                : 'text-muted-foreground hover:text-accent'
            )}
          />
        </button>

        {/* ========= QUICK ADD BUTTON ======== */}
        <div
          className={cn(
            'absolute bottom-4 left-4 right-4 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <Button variant="secondary" className="w-full">
            <ShoppingBag className="h-4 w-4" />
            Add to Bag
          </Button>
        </div>
      </div>

      {/* ========= PRODUCT INFO ========= */}
      <div className="mt-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </p>
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* ========= RATING ========= */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-3.5 w-3.5',
                  i < Math.floor(rating)
                    ? 'fill-gold text-gold'
                    : 'text-muted-foreground/30'
                )}
              />
            ))}
          </div>
        </div>

        {/* ======= PRICE ======= */}
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-foreground">
            ₹{price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};