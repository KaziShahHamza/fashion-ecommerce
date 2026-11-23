"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useStoreUI } from "@/context/StoreUIContext";

const POPULAR_CATEGORIES = [
  { label: "Women's Sweaters", image: "/images/cat-2.png", href: "/listing?category=tops-sweaters" },
  { label: "Women's Bottom", image: "/images/cat-3.png", href: "/listing?category=pants-jeans" },
  { label: "Women's Boots", image: "/images/cat-4.png", href: "/listing?category=shoes-bags" },
  { label: "Men's Best Sellers", image: "/images/cat-5.png", href: "/listing?category=best-sellers" },
];

export function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useStoreUI();
  const [query, setQuery] = useState("");
  const router = useRouter();

  if (!isSearchOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    setIsSearchOpen(false);
    router.push(trimmed ? `/listing?q=${encodeURIComponent(trimmed)}` : "/listing");
  };

  return (
    <div className="relative z-40 border-b border-border bg-background shadow-md">
      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-[140px]">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sweaters, denim, outerwear..."
            autoFocus
            className="w-full bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-ink"
          />
          <button
            type="submit"
            className="bg-ink px-6 py-3 text-xs font-medium tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
            className="flex items-center gap-1 px-2 py-2 text-xs text-muted hover:text-ink"
          >
            <span>Cancel</span>
            <X className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-8">
          <p className="mb-4 text-xs font-medium tracking-[0.05em] text-muted uppercase">
            Popular Categories
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {POPULAR_CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setIsSearchOpen(false)}
                className="group flex flex-col gap-2"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <span className="text-sm text-ink group-hover:underline">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
