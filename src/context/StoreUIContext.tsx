"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type MegaMenuTab = "Women" | "Men" | "About" | "Everworld Stories" | null;

interface StoreUIContextValue {
  activeMegaMenu: MegaMenuTab;
  setActiveMegaMenu: (tab: MegaMenuTab) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  closeAllOverlays: () => void;
}

const StoreUIContext = createContext<StoreUIContextValue | null>(null);

export function StoreUIProvider({ children }: { children: ReactNode }) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuTab>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeAllOverlays = useCallback(() => {
    setActiveMegaMenu(null);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  }, []);

  return (
    <StoreUIContext.Provider
      value={{
        activeMegaMenu,
        setActiveMegaMenu,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isCartOpen,
        setIsCartOpen,
        closeAllOverlays,
      }}
    >
      {children}
    </StoreUIContext.Provider>
  );
}

export function useStoreUI() {
  const ctx = useContext(StoreUIContext);
  if (!ctx) {
    throw new Error("useStoreUI must be used within StoreUIProvider");
  }
  return ctx;
}
