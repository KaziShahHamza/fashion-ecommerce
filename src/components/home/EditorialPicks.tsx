import Image from "next/image";
import Link from "next/link";

const EDITORIAL_PICKS = [
  {
    title: "Our Holiday Gift Picks",
    description: "The best presents for everyone on your list.",
    cta: "Read More",
    image: "/images/look-1.png",
    href: "/blog",
  },
  {
    title: "Cleaner Fashion",
    description: "See the sustainability efforts behind each of our products.",
    cta: "Learn More",
    image: "/images/look-2.png",
    href: "/about",
  },
];

export function EditorialPicks() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-14 lg:px-[185px] lg:py-[90px]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {EDITORIAL_PICKS.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-[24px] leading-[33.24px] font-normal text-ink">
              {item.title}
            </h3>
            <Link
              href={item.href}
              className="group relative aspect-[4/5] w-full overflow-hidden bg-surface"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </Link>
            <p className="text-[14px] leading-[16.8px] tracking-[0.04em] text-ink">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="text-[14px] leading-5 tracking-[0.1em] text-ink underline underline-offset-4"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
