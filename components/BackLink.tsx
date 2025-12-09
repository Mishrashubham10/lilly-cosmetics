import { ReactNode } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const BackLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn('-ml-3', className)}
    >
      <Link
        href={href}
        className="flex gap-2 items-center text-md text-muted-foreground"
      >
        <ArrowLeft />
        {children}
      </Link>
    </Button>
  );
};