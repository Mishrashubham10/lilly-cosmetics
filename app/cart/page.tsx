'use client';

import { Button } from '@/components/ui/button';
import { useLilly } from '@/context/LillyContext';
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CartPage() {
  const { state, dispatch } = useLilly();
  const [open, setOpen] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    toast('Item removed', {
      description: 'Item has been removed from your cart.',
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast('Cart cleared', {
      description: 'All items have been removed from your cart.',
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-24">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link href="/products">
                  Start Shopping
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const handleCheckout = () => {
    setIsProcessing(true);
    setOpen(true);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">
                Shopping Bag
              </h1>
              <p className="text-muted-foreground">
                {state.items.length}{' '}
                {state.items.length === 1 ? 'item' : 'items'} in your bag
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              Clear All
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 bg-card rounded-xl border border-border group hover:border-primary/30 transition-colors duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-32 h-40 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-lg font-semibold text-foreground">
                          ₹{item.price.toFixed(2)}
                        </span>
                        {item.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{item.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium text-foreground w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="text-sm">Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-muted-foreground mb-1">Total</p>
                    <p className="font-display text-xl font-semibold text-foreground">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-card rounded-xl border border-border p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>₹{(state.total * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-display text-lg font-semibold text-foreground">
                      Total
                    </span>
                    <span className="font-display text-2xl font-semibold text-gradient">
                      ₹{(state.total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button variant="secondary" className="w-full mb-4" size="lg">
                  Proceed to Checkout
                </Button>

                <Link href="/shop">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}