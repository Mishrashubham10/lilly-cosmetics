'use client';

import { useLilly } from '@/context/LillyContext';
import { products } from '@/data/products';
import { useEffect } from 'react';

export const ClientInitializer = () => {
  const { setProducts } = useLilly();

  useEffect(() => {
    setProducts(products);
  }, []);

  return null;
};