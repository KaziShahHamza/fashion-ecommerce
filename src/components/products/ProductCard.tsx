"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const activeColor = product.colors[selectedColorIndex] ?? product.colors[0];

  return (
    <div className="group flex flex-col gap-2.5">
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-surface"
      >
        <Image
          src={activeColor.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 px-2 py-1 text-[10px] font-semibold tracking-[0.06em] uppercase ${
              product.badge === "Sale"
                ? "bg-sale text-white"
                : "bg-white/90 text-ink"
            }`}
          >
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex items-start justify-between gap-2 text-[13px] leading-[18px]">
        <Link
          href={`/product/${product.slug}`}
          className="text-ink transition-colors hover:underline"
        >
          {product.name}
        </Link>
        <div className="flex shrink-0 items-center gap-1.5">
          {product.originalPrice && (
            <span className="text-muted line-through">${product.originalPrice}</span>
          )}
          <span className={product.originalPrice ? "font-medium text-sale" : "text-ink"}>
            ${product.price}
          </span>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="flex items-center gap-2">
        {product.colors.map((color, index) => (
          <button
            key={color.name}
            type="button"
            onClick={() => setSelectedColorIndex(index)}
            aria-label={`Select ${color.name} color for ${product.name}`}
            title={color.name}
            className={`h-4 w-4 rounded-full border p-[2px] transition-all ${
              selectedColorIndex === index ? "border-ink" : "border-transparent"
            }`}
          >
            <span
              className="block h-full w-full rounded-full border border-black/15"
              style={{ backgroundColor: color.hex }}
            />
          </button>
        ))}
        <span className="text-[11px] text-muted">{activeColor.name}</span>
      </div>
    </div>
  );
}
