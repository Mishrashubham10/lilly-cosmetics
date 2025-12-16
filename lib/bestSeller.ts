// lib/bestseller.ts
import type { Product } from '@/context/LillyContext';
import { products } from '@/data/products';

/** Options to control what counts as best-seller */
export type BestSellerOptions = {
  limit?: number; // how many products to return
  minRating?: number; // minimum rating threshold
  onlyInStock?: boolean; // only include in-stock items
};

/**
 * Returns best-seller products from the in-memory products array.
 * Primary sort: rating (desc)
 * Secondary sort: inStock (true first), then rating tie-breaker by price (asc).
 */
export function getBestSellers(opts: BestSellerOptions = {}): Product[] {
  const { limit = 8, minRating = 0, onlyInStock = true } = opts;

  // Defensive copy
  let list = products.slice();

  // Filter
  if (onlyInStock) list = list.filter((p) => p.inStock);
  if (minRating) list = list.filter((p) => (p.rating ?? 0) >= minRating);

  // Rank: rating desc, then higher rating ties: lower price preferred
  list.sort((a, b) => {
    const ra = a.rating ?? 0;
    const rb = b.rating ?? 0;
    if (rb !== ra) return rb - ra; // higher rating first
    // prefer inStock (true -> 1), but since we may already filter, we keep price tie-breaker
    if ((b.inStock ? 1 : 0) !== (a.inStock ? 1 : 0))
      return (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
    return a.price - b.price; // cheaper first
  });

  return list.slice(0, limit);
}