'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

export const SizeComponent = ({
  sizes,
  onSizeSelect,
}: {
  sizes: string[];
  onSizeSelect: (size: string) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!sizes || sizes.length === 0) {
    return <p className="text-gray-500">No size available</p>;
  }

  const handleSelect = (size: string) => {
    setSelectedSize(size);
    if (selectedSize) onSizeSelect(size);
  };

  const handleClear = () => {
    setSelectedSize(null);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg">
          {selectedSize ? `Size: ${selectedSize}` : 'Select Size'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-background text-foreground shadow"
        align="start"
      >
        <DropdownMenuItem
          onClick={handleClear}
          className="cursor-pointer text-md font-normal w-full px-2"
        >
          Select
        </DropdownMenuItem>
        {sizes.map((size, i) => (
          <DropdownMenuItem
            key={i}
            className={`cursor-pointer py-1 hover:bg-muted space-y-px w-full px-2 ${
              selectedSize === size ? 'bg-blue-100 font-semibold' : ''
            }`}
            onSelect={() => handleSelect(size)}
          >
            {size}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};