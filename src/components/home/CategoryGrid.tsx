import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { label: "SHIRTS", image: "/images/cat-1.png", href: "/listing?category=clothing" },
  { label: "DENIM", image: "/images/cat-2.png", href: "/listing?category=pants-jeans" },
  { label: "TEES", image: "/images/cat-3.png", href: "/listing?category=tops-sweaters" },
  { label: "PANTS", image: "/images/cat-4.png", href: "/listing?category=pants-jeans" },
  { label: "SWEATERS", image: "/images/cat-5.png", href: "/listing?category=tops-sweaters" },
  { label: "OUTERWEAR", image: "/images/cat-6.png", href: "/listing?category=outerwear" },
];

export function CategoryGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-14 lg:px-[42px] lg:py-[90px]">
      <h2 className="mb-[25px] text-center text-[24px] leading-[33.24px] font-normal text-ink">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map((cat) => (
          <Link key={cat.label} href={cat.href} className="group flex flex-col gap-3">
            <div className="relative h-[263px] w-full overflow-hidden bg-surface">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
            <span className="text-center text-[14px] leading-5 tracking-[0.1em] text-ink underline underline-offset-4">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
