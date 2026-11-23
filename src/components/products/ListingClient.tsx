"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { ALL_COLORS, ALL_SIZES, LISTING_CATEGORIES, PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export function ListingClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const initialQuery = searchParams.get("q") ?? "";
  const initialGender = searchParams.get("gender") ?? "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName) ? prev.filter((c) => c !== colorName) : [...prev, colorName]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy("featured");
  };

  const filteredProducts = useMemo(() => {
    const queryLower = initialQuery.trim().toLowerCase();

    const list = PRODUCTS.filter((product) => {
      if (initialGender && product.gender !== "unisex" && product.gender !== initialGender) {
        return false;
      }

      if (selectedCategory !== "all") {
        const matchesCat = product.category === selectedCategory;
        const matchesTag = product.tags.includes(
          selectedCategory as (typeof product.tags)[number]
        );
        if (!matchesCat && !matchesTag) return false;
      }

      if (selectedSizes.length > 0) {
        if (!selectedSizes.some((s) => product.sizes.includes(s))) return false;
      }

      if (selectedColors.length > 0) {
        if (!selectedColors.some((c) => product.colors.some((pc) => pc.name === c))) {
          return false;
        }
      }

      if (queryLower) {
        const haystack = `${product.name} ${product.categoryLabel} ${product.description}`.toLowerCase();
        if (!haystack.includes(queryLower)) return false;
      }

      return true;
    });

    if (sortBy === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [initialGender, initialQuery, selectedCategory, selectedSizes, selectedColors, sortBy]);

  const activeCategoryLabel =
    LISTING_CATEGORIES.find((c) => c.slug === selectedCategory)?.label ?? "All Clothing";

  const hasActiveFilters =
    selectedCategory !== "all" || selectedSizes.length > 0 || selectedColors.length > 0;

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 lg:px-[68px]">
      {/* Breadcrumb & Header */}
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs text-muted">
            Home / {initialGender ? `${initialGender} / ` : ""}
            {activeCategoryLabel}
          </p>
          <h1 className="text-[28px] leading-9 font-normal text-ink">
            {initialQuery ? `Search: “${initialQuery}”` : activeCategoryLabel}
          </h1>
          <p className="mt-1 text-xs text-muted">{filteredProducts.length} products</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-ink lg:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>

          <label className="flex items-center gap-2 text-xs text-muted">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-border bg-white px-3 py-2 text-xs text-ink focus:border-ink focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Sidebar Filters */}
        <aside
          className={`lg:col-span-3 ${
            mobileFiltersOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex flex-col gap-8 border-b border-border pb-8 lg:border-b-0">
            <div className="flex items-center justify-between lg:hidden">
              <span className="text-sm font-semibold text-ink">Filters</span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="h-4 w-4 text-ink" />
              </button>
            </div>

            {/* Category */}
            <div>
              <h2 className="mb-3 text-xs font-semibold tracking-[0.06em] text-ink uppercase">
                Category
              </h2>
              <ul className="flex flex-col gap-2">
                {LISTING_CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`text-left text-sm transition-colors ${
                        selectedCategory === cat.slug
                          ? "font-semibold text-ink underline underline-offset-4"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size */}
            <div className="border-t border-border pt-6">
              <h2 className="mb-3 text-xs font-semibold tracking-[0.06em] text-ink uppercase">
                Size
              </h2>
              <div className="grid grid-cols-3 gap-2">
                {ALL_SIZES.map((size) => {
                  const active = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => toggleSize(size)}
                      className={`border py-2 text-xs transition-colors ${
                        active
                          ? "border-ink bg-ink text-white"
                          : "border-border bg-white text-ink hover:border-ink"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color */}
            <div className="border-t border-border pt-6">
              <h2 className="mb-3 text-xs font-semibold tracking-[0.06em] text-ink uppercase">
                Color
              </h2>
              <div className="grid grid-cols-2 gap-2.5">
                {ALL_COLORS.map((color) => {
                  const active = selectedColors.includes(color.name);
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => toggleColor(color.name)}
                      className={`flex items-center gap-2 border px-2.5 py-2 text-left text-xs transition-colors ${
                        active ? "border-ink font-semibold text-ink" : "border-border text-muted hover:text-ink"
                      }`}
                    >
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/15"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="w-full border border-ink py-2.5 text-xs font-medium tracking-[0.06em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center border border-border bg-surface px-6 py-20 text-center">
              <p className="text-base text-ink">No products match your selected filters.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 bg-ink px-6 py-2.5 text-xs tracking-[0.08em] text-white uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
