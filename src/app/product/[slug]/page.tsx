import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
