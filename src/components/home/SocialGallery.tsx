"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const SOCIAL_PHOTOS = [
  { image: "/images/social-1.png", alt: "Everlane community look 1", href: "/listing" },
  { image: "/images/social-2.png", alt: "Everlane community look 2", href: "/listing" },
  { image: "/images/social-3.png", alt: "Everlane community look 3", href: "/listing" },
  { image: "/images/social-4.png", alt: "Everlane community look 4", href: "/listing" },
  { image: "/images/social-5.png", alt: "Everlane community look 5", href: "/listing" },
];

export function SocialGallery() {
  const [offset, setOffset] = useState(0);

  const ordered = [
    ...SOCIAL_PHOTOS.slice(offset),
    ...SOCIAL_PHOTOS.slice(0, offset),
  ];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 lg:px-[54px]">
      <div className="border-t border-ink pt-14 lg:pt-[90px]">
        <div className="mb-8 flex flex-col items-center gap-3 text-center text-ink">
          <h2 className="text-[28px] leading-[1.25] font-normal sm:text-[32px] sm:leading-[40px]">
            Everlane On You
          </h2>
          <p className="text-[14px] leading-[16.8px] tracking-[0.04em]">
            Share your latest look with #EverlaneOnYou for a chance to be featured.
          </p>
          <Link
            href="/listing"
            className="text-[14px] leading-5 tracking-[0.1em] underline underline-offset-4"
          >
            Add Your Photo
          </Link>
        </div>

        <div className="relative flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOffset((prev) => (prev - 1 + SOCIAL_PHOTOS.length) % SOCIAL_PHOTOS.length)}
            aria-label="Previous community looks"
            className="hidden h-9 w-9 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[18px]">
            {ordered.map((photo) => (
              <Link
                key={photo.image}
                href={photo.href}
                className="group relative aspect-[4/5] w-full overflow-hidden bg-surface"
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <span className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-transform group-hover:scale-110">
                  <ShoppingBag className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOffset((prev) => (prev + 1) % SOCIAL_PHOTOS.length)}
            aria-label="Next community looks"
            className="hidden h-9 w-9 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
