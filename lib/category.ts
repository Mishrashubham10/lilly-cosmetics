import { Product } from '../context/LillyContext';
import { products } from '../data/products';

// lib/category.ts
export type CategoryMeta = {
  name: string;
  slug: string;
  count: number;
};

export function slugify(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export function getAllCategories(): CategoryMeta[] {
  const map = new Map<string, CategoryMeta>();
  for (const p of products) {
    const name = p.category ?? 'uncategorized';
    const slug = slugify(name);
    const existing = map.get(slug);
    if (existing) existing.count++;
    else map.set(slug, { name, slug, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

/** Returns category metadata and items for a given slug */
export function getCategoryBySlug(slug: string): {
  meta: CategoryMeta | null;
  items: Product[];
} {
  const all = getAllCategories();
  const meta = all.find((c) => c.slug === slug) ?? null;
  const items = products.filter(
    (p) => slugify(p.category ?? 'uncategorized') === slug
  );
  return { meta, items };
}