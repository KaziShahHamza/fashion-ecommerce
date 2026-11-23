import Image from "next/image";
import Link from "next/link";

const PROMOS = [
  {
    title: "New Arrivals",
    cta: "SHOP THE LATEST",
    image: "/images/promo-1.png",
    href: "/listing?category=new-arrivals",
  },
  {
    title: "Best-Sellers",
    cta: "SHOP YOUR FAVORITES",
    image: "/images/promo-2.png",
    href: "/listing?category=best-sellers",
  },
  {
    title: "The Holiday Outfit",
    cta: "SHOP OCCASION",
    image: "/images/promo-3.png",
    href: "/listing?category=holiday-gifting",
  },
];

export function PromoGrid() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 lg:px-[42px]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {PROMOS.map((promo) => (
          <div
            key={promo.title}
            className="group relative flex h-[460px] flex-col items-center justify-center gap-[23px] overflow-hidden bg-surface px-6 text-center lg:h-[534px]"
          >
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/25" />
            <h3 className="relative z-10 text-[32px] leading-[40px] font-normal tracking-[0.005em] text-white lg:text-[40px] lg:leading-[48px]">
              {promo.title}
            </h3>
            <Link
              href={promo.href}
              className="relative z-10 inline-flex items-center justify-center bg-white px-7 py-3 text-[14px] leading-[16.8px] tracking-[0.1em] text-ink uppercase transition-opacity hover:opacity-90"
            >
              {promo.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
