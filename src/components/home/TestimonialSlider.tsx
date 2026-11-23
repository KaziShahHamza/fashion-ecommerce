"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
    author: "JonSnSF",
    product: "The Heavyweight Overshirt",
    href: "/product/the-heavyweight-overshirt",
    image: "/images/testimonial-1.png",
  },
  {
    quote:
      "The cleanest winter bomber I own. Warm, structured, and works with everything.",
    author: "MarcusV",
    product: "The Bomber Jacket | Uniform",
    href: "/product/the-bomber-jacket",
    image: "/images/fav-2.png",
  },
  {
    quote:
      "Super soft organic cotton with just enough stretch for all-day comfort.",
    author: "ElenaR",
    product: "The Slim 4-Way Stretch Organic Jean",
    href: "/product/the-slim-4-way-stretch-chino",
    image: "/images/fav-3.png",
  },
  {
    quote:
      "My go-to waffle knit layer for cold mornings—holds its shape wash after wash.",
    author: "DevonK",
    product: "The Waffle Long-Sleeve Crew",
    href: "/product/the-waffle-long-sleeve-crew",
    image: "/images/fav-1.png",
  },
];

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 lg:px-[35px]">
      <div className="flex items-center justify-between gap-6 lg:gap-[74px]">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Quote Column */}
          <div className="flex flex-col gap-8 px-2 lg:px-[62px]">
            <p className="text-[16px] leading-6 font-normal text-ink-strong">
              People Are Talking
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-ink-strong" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-[22px] leading-[1.35] font-normal text-ink-strong lg:text-[24px] lg:leading-[33.24px]">
                “{current.quote}”
              </blockquote>
            </div>
            <p className="text-[14px] leading-5 tracking-[0.02em] text-ink-strong">
              -- {current.author},{" "}
              <Link href={current.href} className="underline underline-offset-4">
                {current.product}
              </Link>
            </p>
          </div>

          {/* Image Column */}
          <div className="relative h-[460px] w-full overflow-hidden bg-surface lg:h-[695px]">
            <Image
              src={current.image}
              alt={current.product}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="hidden h-10 w-10 shrink-0 items-center justify-center text-ink transition-opacity hover:opacity-60 md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots + Bottom Rule */}
      <div className="mt-8 flex flex-col items-center gap-10 px-4 lg:px-[42px]">
        <div className="flex items-center gap-3">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.author}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeIndex === idx ? "bg-ink-strong" : "bg-border"
              }`}
            />
          ))}
        </div>
        <div className="h-px w-full bg-ink-strong" />
      </div>
    </section>
  );
}
