"use client";

import Link from "next/link";
import { ArrowRight, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useStoreUI, type MegaMenuTab } from "@/context/StoreUIContext";
import { useCart } from "@/context/CartContext";
import { NavigationMegaMenu } from "./NavigationMegaMenu";
import { SearchOverlay } from "./SearchOverlay";

const PRIMARY_TABS: { label: MegaMenuTab & string; href?: string; hasMegaMenu?: boolean }[] = [
  { label: "Women", hasMegaMenu: true },
  { label: "Men", hasMegaMenu: true },
  { label: "About", href: "/about" },
  { label: "Everworld Stories", href: "/blog" },
];

const SUB_NAV_ITEMS: { label: string; href: string; isSale?: boolean }[] = [
  { label: "Holiday Gifting", href: "/listing?category=holiday-gifting" },
  { label: "New Arrivals", href: "/listing?category=new-arrivals" },
  { label: "Best-Sellers", href: "/listing?category=best-sellers" },
  { label: "Clothing", href: "/listing?category=clothing" },
  { label: "Tops & Sweaters", href: "/listing?category=tops-sweaters" },
  { label: "Pants & Jeans", href: "/listing?category=pants-jeans" },
  { label: "Outerwear", href: "/listing?category=outerwear" },
  { label: "Shoes & Bags", href: "/listing?category=shoes-bags" },
  { label: "Sale", href: "/listing?category=sale", isSale: true },
];

export function Header() {
  const {
    activeMegaMenu,
    setActiveMegaMenu,
    isSearchOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsCartOpen,
  } = useStoreUI();
  const { totalItems } = useCart();

  const toggleMegaMenu = (tab: MegaMenuTab) => {
    setIsSearchOpen(false);
    setActiveMegaMenu(activeMegaMenu === tab ? null : tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      {/* Top Announcement Bar */}
      <div className="relative flex items-center justify-between bg-ink-strong px-4 py-[7px] text-white md:px-[30px]">
        <div className="hidden w-14 md:block" />
        <div className="flex flex-wrap items-center justify-center gap-1 text-center text-[12px] leading-4 tracking-[0.0167em]">
          <span className="font-semibold">Get early access on launches and offers.</span>
          <Link
            href="/listing"
            className="inline-flex items-center gap-1 font-normal underline underline-offset-2 hover:opacity-80"
          >
            Sign Up For Texts
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="hidden items-center gap-2 text-[12px] leading-4 tracking-[0.0167em] md:flex">
          <span
            aria-label="United States"
            className="inline-flex h-[15px] w-[21px] items-center justify-center overflow-hidden rounded-[2px] border border-white/20 text-[10px] font-semibold"
          >
            US
          </span>
          <span>USD</span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="relative flex items-center justify-between border-b border-border px-4 lg:px-[68px]">
        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center py-4 text-ink lg:hidden"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Left Tabs */}
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {PRIMARY_TABS.map((tab) => {
            const isActive = activeMegaMenu === tab.label;
            if (tab.hasMegaMenu) {
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => toggleMegaMenu(tab.label)}
                  className={`relative px-3 py-5 text-[12px] leading-4 tracking-[0.0167em] text-ink transition-colors hover:text-ink-strong ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute right-3 bottom-0 left-3 h-[2px] bg-ink" />
                  )}
                </button>
              );
            }
            return (
              <Link
                key={tab.label}
                href={tab.href ?? "/"}
                onClick={() => setActiveMegaMenu(null)}
                className="px-3 py-5 text-[12px] leading-4 tracking-[0.0167em] text-ink transition-colors hover:text-ink-strong"
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        {/* Center Brand Wordmark */}
        <Link
          href="/"
          onClick={() => setActiveMegaMenu(null)}
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 text-[15px] font-bold tracking-[0.26em] text-ink-strong uppercase"
        >
          EVERLANE
        </Link>

        {/* Right Utility Icons */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {
              setActiveMegaMenu(null);
              setIsSearchOpen(!isSearchOpen);
            }}
            aria-label="Search"
            className="p-3 text-ink transition-colors hover:text-ink-strong"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            href="/stores"
            aria-label="Stores and Account"
            className="p-3 text-ink transition-colors hover:text-ink-strong"
          >
            <User className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open shopping cart"
            className="relative p-3 text-ink transition-colors hover:text-ink-strong"
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute top-1.5 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Sub-Navigation Category Bar */}
      <nav
        aria-label="Categories"
        className="hidden items-center justify-center border-b border-border/60 bg-background px-4 lg:flex"
      >
        {SUB_NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-3 py-4 text-[12px] leading-4 tracking-[0.0167em] whitespace-nowrap transition-opacity hover:opacity-70 ${
              item.isSale ? "text-sale" : "text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col border-b border-border pb-3">
              {PRIMARY_TABS.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href ?? `/listing?gender=${tab.label.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-ink"
                >
                  {tab.label}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {SUB_NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1.5 text-xs ${item.isSale ? "text-sale" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu & Search Overlays */}
      <NavigationMegaMenu />
      <SearchOverlay />
    </header>
  );
}
