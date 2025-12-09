'use client';

import { ReactNode } from 'react';

interface PolicyPageProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const PolicyPage = ({
  title,
  lastUpdated,
  children,
}: PolicyPageProps) => {
  return (
    <>
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>

            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
