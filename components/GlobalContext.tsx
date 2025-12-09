'use client';

import { LillyProvider } from '@/context/LillyContext';
import { ReactNode } from 'react';

export const GlobalContext = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <LillyProvider>{children}</LillyProvider>;
};