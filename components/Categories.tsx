'use client';

import { useLilly } from '@/context/LillyContext';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Categories = () => {
  const { products } = useLilly();

  const categories = products.filter((p) => p.category).slice(0, 10);

  return (
    <>
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              Explore
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Shop by Category
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((p, index) => (
              <Link
                key={p.name}
                href={p.id}
                className="group relative aspect-3/4 rounded-2xl overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <Image
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={400}
                  height={400}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};