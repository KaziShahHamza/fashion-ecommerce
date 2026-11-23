import { Suspense } from "react";
import { ListingClient } from "@/components/products/ListingClient";

export default function ListingPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1400px] px-4 py-16 text-center text-sm text-muted lg:px-[68px]">
          Loading products...
        </div>
      }
    >
      <ListingClient />
    </Suspense>
  );
}
