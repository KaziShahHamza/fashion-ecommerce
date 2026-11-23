import Image from "next/image";

const VALUES = [
  {
    title: "Complimentary Shipping",
    description: "Enjoy free shipping on U.S. orders over $100.",
    image: "/images/value-1.png",
  },
  {
    title: "Consciously Crafted",
    description: "Designed with you and the planet in mind.",
    image: "/images/value-2.png",
  },
  {
    title: "Come Say Hi",
    description: "We have 11 stores across the U.S.",
    image: "/images/value-3.png",
  },
];

export function ValuesStrip() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-16 lg:px-[77px] lg:py-[90px]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {VALUES.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-5 px-4 text-center">
            <div className="relative h-12 w-12">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] leading-[16.8px] font-semibold tracking-[0.04em] text-ink">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[16.8px] font-normal tracking-[0.04em] text-ink">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
