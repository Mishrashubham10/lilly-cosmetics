'use client';

import { BackLink } from '@/components/BackLink';
import { ProductCard } from '@/components/ProductCard';
import { useLilly } from '@/context/LillyContext';

export default function NewArrivals() {
  const { products } = useLilly();

  const featuredProducts = products.filter((p) => p.isNew);

  return (
    <section className="py-4 px-8 mt-32 mb-12">
      <div className="space-y-4">
        <BackLink href="/products">Products</BackLink>
        <h1 className="text-2xl font-bold text-primary">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}