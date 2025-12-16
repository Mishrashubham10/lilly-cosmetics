import { getBestSellers } from '@/lib/bestSeller';
import { ProductCard } from '@/components/ProductCard';
import type { Metadata } from 'next';

type Props = {
  searchParams?: {
    limit?: string;
    minRating?: string;
    inStock?: string;
  };
};

export const metadata: Metadata = {
  title: 'Best Sellers',
};

export default function BestSellersPage({ searchParams }: Props) {
  // parse search params (they come as strings)
  const limit = searchParams?.limit
    ? parseInt(searchParams.limit, 10)
    : undefined;
  const minRating = searchParams?.minRating
    ? parseFloat(searchParams.minRating)
    : undefined;
  const onlyInStock = searchParams?.inStock === 'false' ? false : true;

  const items = getBestSellers({
    limit: limit ?? 8,
    minRating: minRating ?? 0,
    onlyInStock,
  });

  return (
    <main className="container mx-auto p-6 mt-32">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Best Sellers</h1>
          <p className="text-sm text-muted-foreground">
            Top products by rating {minRating ? ` (min ${minRating}★)` : ''} —
            showing {items.length}
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          {/* quick hint for dev testing */}
          Try{' '}
          <code className="rounded px-1 py-0.5 bg-gray-100">
            ?limit=12&minRating=4.6&inStock=false
          </code>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No best-sellers found for the selected filters.
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </section>
      )}
    </main>
  );
}