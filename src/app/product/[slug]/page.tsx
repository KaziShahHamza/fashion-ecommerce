import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

async function ProductDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

export default function ProductDetailPage({
  params,
}: PageProps<"/product/[slug]">) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1400px] px-4 py-16 text-center text-sm text-muted lg:px-[68px]">
          Loading product...
        </div>
      }
    >
      <ProductDetailContent params={params} />
    </Suspense>
  );
}
