"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FAVORITES = [
  {
    slug: "the-waffle-long-sleeve-crew",
    name: "The Waffle Long-Sleeve Crew",
    price: 60,
    color: "Bone",
    image: "/images/fav-1.png",
  },
  {
    slug: "the-bomber-jacket",
    name: "The Bomber Jacket | Uniform",
    price: 148,
    color: "Toasted Coconut",
    image: "/images/fav-2.png",
  },
  {
    slug: "the-slim-4-way-stretch-chino",
    name: "The Slim 4-Way Stretch Organic Jean",
    price: 98,
    color: "Dark Indigo",
    image: "/images/fav-3.png",
  },
  {
    slug: "the-essential-organic-crew",
    name: "The Essential Organic Crew",
    price: 30,
    color: "Vintage Black",
    image: "/images/fav-4.png",
  },
  {
    slug: "the-heavyweight-overshirt",
    name: "The Heavyweight Overshirt",
    price: 118,
    color: "Heather Charcoal",
    image: "/images/fav-5-3ca8d3.png",
  },
];

export function FavoritesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalDots = 4;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalDots) % totalDots);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalDots);
  };

  const orderedFavorites = [
    ...FAVORITES.slice(activeSlide),
    ...FAVORITES.slice(0, activeSlide),
  ];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 pt-6 pb-14 lg:px-8 lg:pb-[73px]">
      <div className="mb-[30px] flex flex-col items-center gap-2 text-center text-ink">
        <h2 className="text-[24px] leading-[33.24px] font-normal">Everlane Favorites</h2>
        <p className="text-[16px] leading-6 font-normal">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </div>

      <div className="relative flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous favorites"
          className="hidden h-10 w-10 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-5">
          {orderedFavorites.map((item) => (
            <Link
              key={item.slug}
              href={`/product/${item.slug}`}
              className="group flex flex-col gap-2"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="flex items-start justify-between gap-2 text-[12px] leading-4 text-ink">
                <span className="font-normal group-hover:underline">{item.name}</span>
                <span className="shrink-0">${item.price}</span>
              </div>
              <span className="text-[12px] leading-4 text-muted">{item.color}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next favorites"
          className="hidden h-10 w-10 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="mt-5 flex items-center justify-center gap-3 py-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              activeSlide === index ? "bg-ink" : "bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
