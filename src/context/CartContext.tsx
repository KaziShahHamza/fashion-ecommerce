"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export interface CartItem {
  key: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  colorName: string;
  size: string;
  image: string;
  quantity: number;
}

interface AddCartPayload {
  productId: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  colorName: string;
  size: string;
  image: string;
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (payload: AddCartPayload) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "everlane_cart_v1";
const EMPTY_CART: CartItem[] = [];

let cachedRaw: string | null = null;
let cachedItems: CartItem[] = EMPTY_CART;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function getSnapshot(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedItems = raw ? (JSON.parse(raw) as CartItem[]) : EMPTY_CART;
    }
  } catch {
    return EMPTY_CART;
  }
  return cachedItems;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (typeof window !== "undefined") {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  }
  return () => {
    listeners.delete(listener);
  };
}

function writeCart(nextItems: CartItem[]) {
  const raw = JSON.stringify(nextItems);
  cachedRaw = raw;
  cachedItems = nextItems;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, raw);
    } catch {
      // Ignore storage quota errors
    }
  }
  notifyListeners();
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addItem = useCallback((payload: AddCartPayload) => {
    const current = getSnapshot();
    const key = `${payload.productId}-${payload.colorName}-${payload.size}`;
    const existing = current.find((item) => item.key === key);
    const next = existing
      ? current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...current, { ...payload, key, quantity: 1 }];
    writeCart(next);
  }, []);

  const removeItem = useCallback((key: string) => {
    const current = getSnapshot();
    writeCart(current.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    const current = getSnapshot();
    if (quantity <= 0) {
      writeCart(current.filter((item) => item.key !== key));
      return;
    }
    writeCart(
      current.map((item) => (item.key === key ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    writeCart(EMPTY_CART);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
