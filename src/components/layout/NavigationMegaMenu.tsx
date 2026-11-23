"use client";

import Image from "next/image";
import Link from "next/link";
import { useStoreUI } from "@/context/StoreUIContext";

const MEGA_MENU_CONTENT = {
  Women: {
    highlights: [
      { label: "Shop All New Arrivals", href: "/listing?category=new-arrivals" },
      { label: "The Gift Guide", href: "/listing?category=holiday-gifting" },
      { label: "New Bottoms", href: "/listing?category=pants-jeans" },
      { label: "New Tops", href: "/listing?category=tops-sweaters" },
      { label: "T-Shirt Bundles", href: "/listing?category=clothing" },
      { label: "Under $100", href: "/listing?category=sale" },
    ],
    featuredShops: [
      { label: "The Holiday Outfit Edit", href: "/listing?category=holiday-gifting" },
      { label: "Giftable Sweaters", href: "/listing?category=tops-sweaters" },
      { label: "Uniform & Capsule", href: "/listing?category=best-sellers" },
      { label: "The Performance Chino Shop", href: "/listing?category=pants-jeans" },
      { label: "Top Rated Women's Clothing", href: "/listing?category=best-sellers" },
    ],
    cards: [
      {
        title: "The Holiday Outfit Edit",
        image: "/images/promo-1.png",
        href: "/listing?category=holiday-gifting",
      },
      {
        title: "Giftable Sweaters",
        image: "/images/cat-2.png",
        href: "/listing?category=tops-sweaters",
      },
    ],
  },
  Men: {
    highlights: [
      { label: "Shop All New Arrivals", href: "/listing?category=new-arrivals" },
      { label: "The Gift Guide", href: "/listing?category=holiday-gifting" },
      { label: "New Outerwear", href: "/listing?category=outerwear" },
      { label: "Sweaters & Hoodies", href: "/listing?category=tops-sweaters" },
      { label: "Chinos & Denim", href: "/listing?category=pants-jeans" },
      { label: "Under $100", href: "/listing?category=sale" },
    ],
    featuredShops: [
      { label: "The Cashmere Shop", href: "/listing?category=tops-sweaters" },
      { label: "Winter Outerwear", href: "/listing?category=outerwear" },
      { label: "The Performance Chino Shop", href: "/listing?category=pants-jeans" },
      { label: "Everyday Uniform", href: "/listing?category=best-sellers" },
      { label: "Shoes & Accessories", href: "/listing?category=shoes-bags" },
    ],
    cards: [
      {
        title: "Winter Outerwear",
        image: "/images/cat-5.png",
        href: "/listing?category=outerwear",
      },
      {
        title: "Best-Selling Essentials",
        image: "/images/promo-2.png",
        href: "/listing?category=best-sellers",
      },
    ],
  },
} as const;

export function NavigationMegaMenu() {
  const { activeMegaMenu, setActiveMegaMenu } = useStoreUI();

  if (activeMegaMenu !== "Women" && activeMegaMenu !== "Men") {
    return null;
  }

  const content = MEGA_MENU_CONTENT[activeMegaMenu];

  return (
    <div className="relative z-40 hidden border-b border-border bg-background shadow-sm lg:block">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-[68px] py-10">
        {/* Highlights Column */}
        <div className="col-span-3">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.08em] text-muted uppercase">
            Highlights
          </p>
          <ul className="flex flex-col gap-3">
            {content.highlights.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setActiveMegaMenu(null)}
                  className="text-sm text-ink transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Shops Column */}
        <div className="col-span-3">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.08em] text-muted uppercase">
            Featured Shops
          </p>
          <ul className="flex flex-col gap-3">
            {content.featuredShops.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setActiveMegaMenu(null)}
                  className="text-sm text-ink transition-colors hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Feature Cards */}
        <div className="col-span-6 grid grid-cols-2 gap-6">
          {content.cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              onClick={() => setActiveMegaMenu(null)}
              className="group relative block aspect-[4/3] overflow-hidden bg-surface"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1400px) 25vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                {card.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
