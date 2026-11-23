"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useStoreUI } from "@/context/StoreUIContext";

const FREE_SHIPPING_THRESHOLD = 100;

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen } = useStoreUI();
  const { items, totalItems, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isCartOpen) {
    return null;
  }

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleCheckout = () => {
    clearCart();
    setCheckedOut(true);
    setTimeout(() => {
      setCheckedOut(false);
      setIsCartOpen(false);
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 transition-opacity"
      />

      {/* Drawer Panel */}
      <aside
        aria-label="Shopping Cart"
        className="relative z-10 flex h-full w-full max-w-[420px] flex-col bg-background shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-base font-medium text-ink">
            Your Cart {totalItems > 0 ? `(${totalItems})` : ""}
          </h2>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="p-1 text-ink transition-opacity hover:opacity-60"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {items.length > 0 && (
          <div className="border-b border-border bg-surface px-6 py-3">
            <p className="mb-2 text-center text-xs text-ink">
              {remainingForFreeShipping === 0
                ? "You’ve unlocked Complimentary U.S. Shipping!"
                : `Add $${remainingForFreeShipping} more for Complimentary U.S. Shipping`}
            </p>
            <div className="h-1.5 w-full overflow-hidden bg-border">
              <div
                className="h-full bg-ink transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {checkedOut ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-ink" />
              <p className="text-base font-medium text-ink">Order Confirmed</p>
              <p className="text-sm text-muted">
                Thank you for shopping with Everlane.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-9 w-9 text-muted" />
              <div>
                <p className="text-base text-ink">Your cart is empty.</p>
                <p className="mt-1 text-xs text-muted">
                  Explore our latest winter essentials and best-sellers.
                </p>
              </div>
              <Link
                href="/listing"
                onClick={() => setIsCartOpen(false)}
                className="mt-2 bg-ink px-6 py-3 text-xs font-medium tracking-[0.08em] text-white uppercase"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-border">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5 first:pt-0">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="relative h-28 w-20 shrink-0 overflow-hidden bg-surface"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-sm text-ink hover:underline"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-xs text-muted">
                          {item.size} | {item.colorName}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1 text-muted hover:text-ink"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-ink hover:bg-surface"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-7 text-center text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-ink hover:bg-surface"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm">
                        {item.originalPrice && (
                          <span className="text-xs text-muted line-through">
                            ${item.originalPrice * item.quantity}
                          </span>
                        )}
                        <span className="font-medium text-ink">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !checkedOut && (
          <div className="border-t border-border bg-background px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">
                Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
              <span className="text-base font-semibold text-ink">${subtotal}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full bg-ink py-3.5 text-xs font-medium tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-90"
            >
              Continue to Checkout
            </button>
            <p className="mt-2.5 text-center text-[11px] text-muted">
              Taxes and shipping calculated at checkout.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
