"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import type { Product } from "@/types/product";
import { useStoreUI } from "@/context/StoreUIContext";
import { ProductCard } from "./ProductCard";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { setIsCartOpen } = useStoreUI();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [activeImage, setActiveImage] = useState(
    product.colors[0]?.image ?? product.images[0]
  );
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<"details" | "shipping" | null>("details");

  const activeColor = product.colors[selectedColorIndex] ?? product.colors[0];

  const handleSelectColor = (index: number) => {
    setSelectedColorIndex(index);
    const colorImage = product.colors[index]?.image;
    if (colorImage) {
      setActiveImage(colorImage);
    }
  };

  const handleAddToBag = () => {
    setAddedFeedback(true);
    setIsCartOpen(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const galleryImages = Array.from(
    new Set([activeColor?.image, ...product.images].filter(Boolean))
  );

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8 lg:px-[68px] lg:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span>/</span>
        <Link href={`/listing?category=${product.category}`} className="hover:text-ink">
          {product.categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      {/* Main 2-Column Product View */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: Gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row lg:col-span-7">
          <div className="flex gap-3 overflow-x-auto sm:w-20 sm:flex-col">
            {galleryImages.map((imgSrc) => (
              <button
                key={imgSrc}
                type="button"
                onClick={() => setActiveImage(imgSrc)}
                className={`relative aspect-[3/4] w-16 shrink-0 overflow-hidden border bg-surface sm:w-full ${
                  activeImage === imgSrc ? "border-ink" : "border-border opacity-75 hover:opacity-100"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${product.name} view`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden bg-surface">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-2.5 py-1 text-[11px] font-semibold tracking-[0.06em] uppercase ${
                  product.badge === "Sale"
                    ? "bg-sale text-white"
                    : "bg-white/95 text-ink"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Right: Product Info & Controls */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="border-b border-border pb-5">
            <p className="mb-1 text-xs tracking-[0.08em] text-muted uppercase">
              {product.categoryLabel}
            </p>
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-[24px] leading-[32px] font-normal text-ink">
                {product.name}
              </h1>
              <div className="flex shrink-0 items-center gap-2 text-lg">
                {product.originalPrice && (
                  <span className="text-muted line-through">${product.originalPrice}</span>
                )}
                <span className={product.originalPrice ? "font-semibold text-sale" : "text-ink"}>
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-muted">
              <div className="flex items-center gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3.5 w-3.5 ${
                      idx < Math.round(product.rating) ? "fill-current" : "text-border"
                    }`}
                  />
                ))}
              </div>
              <span>
                {product.rating.toFixed(1)} ({product.reviewCount} Reviews)
              </span>
            </div>
          </div>

          <p className="text-sm leading-6 text-ink">{product.description}</p>

          {/* Color Selector */}
          <div>
            <p className="mb-2.5 text-xs font-semibold tracking-[0.06em] text-ink uppercase">
              Color: <span className="font-normal text-muted">{activeColor?.name}</span>
            </p>
            <div className="flex items-center gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => handleSelectColor(index)}
                  aria-label={`Select color ${color.name}`}
                  className={`h-7 w-7 rounded-full border p-[3px] transition-all ${
                    selectedColorIndex === index ? "border-ink" : "border-transparent"
                  }`}
                >
                  <span
                    className="block h-full w-full rounded-full border border-black/15"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.06em] text-ink uppercase">
                Size: <span className="font-normal text-muted">{selectedSize}</span>
              </p>
              <span className="text-xs text-muted underline underline-offset-4">
                Size Guide
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2.5 text-xs font-medium transition-colors ${
                    selectedSize === size
                      ? "border-ink bg-ink text-white"
                      : "border-border bg-white text-ink hover:border-ink"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag CTA */}
          <button
            type="button"
            onClick={handleAddToBag}
            className="flex w-full items-center justify-center gap-2 bg-ink py-4 text-xs font-medium tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-90"
          >
            {addedFeedback ? (
              <>
                <Check className="h-4 w-4" />
                Added to Bag
              </>
            ) : (
              `Add to Bag — $${product.price}`
            )}
          </button>

          {/* Value Props */}
          <div className="flex flex-col gap-3 border-t border-b border-border py-5 text-xs text-ink">
            <div className="flex items-center gap-3">
              <Truck className="h-4 w-4 shrink-0 text-muted" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-4 w-4 shrink-0 text-muted" />
              <span>Easy returns & exchanges within 30 days</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-muted" />
              <span>Sustainably crafted with radical transparency</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="divide-y divide-border border-b border-border">
            <div>
              <button
                type="button"
                onClick={() =>
                  setOpenAccordion(openAccordion === "details" ? null : "details")
                }
                className="flex w-full items-center justify-between py-4 text-left text-xs font-semibold tracking-[0.06em] text-ink uppercase"
              >
                <span>Details & Care</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openAccordion === "details" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "details" && (
                <ul className="mb-4 flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() =>
                  setOpenAccordion(openAccordion === "shipping" ? null : "shipping")
                }
                className="flex w-full items-center justify-between py-4 text-left text-xs font-semibold tracking-[0.06em] text-ink uppercase"
              >
                <span>Shipping & Returns</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openAccordion === "shipping" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === "shipping" && (
                <p className="mb-4 text-sm leading-6 text-muted">
                  Complimentary ground shipping on U.S. orders over $100. Unworn items
                  with tags attached may be returned or exchanged within 30 days of
                  delivery.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20 border-t border-border pt-14">
        <h2 className="mb-8 text-center text-[24px] leading-[33.24px] font-normal text-ink">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
