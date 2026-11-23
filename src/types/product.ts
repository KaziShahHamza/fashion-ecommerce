export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category:
    | "clothing"
    | "tops-sweaters"
    | "pants-jeans"
    | "outerwear"
    | "shoes-bags";
  categoryLabel: string;
  tags: ("new-arrivals" | "best-sellers" | "holiday-gifting" | "sale")[];
  gender: "men" | "women" | "unisex";
  sizes: string[];
  colors: ProductColor[];
  badge?: string;
  description: string;
  details: string[];
  images: string[];
  rating: number;
  reviewCount: number;
}
