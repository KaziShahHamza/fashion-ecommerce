import Image from "next/image";
import Link from "next/link";

const PILLARS = [
  {
    title: "Our Factories",
    description:
      "We spend months finding the best factories around the world—the same ones that produce your favorite designer labels—and build lasting, transparent partnerships.",
    image: "/images/look-2.png",
  },
  {
    title: "Designed to Last",
    description:
      "At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and timeless silhouettes.",
    image: "/images/promo-2.png",
  },
  {
    title: "Radical Transparency",
    description:
      "We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation.",
    image: "/images/social-2.png",
  },
];

const IMPACT_STATS = [
  { metric: "97%", label: "Certified organic, recycled, or lower-impact materials" },
  { metric: "35+", label: "Audited partner factories worldwide" },
  { metric: "0%", label: "Virgin plastic in our shipping polybags" },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden px-6 py-24 text-center text-white lg:min-h-[520px]">
        <Image
          src="/images/mission-banner.png"
          alt="We believe we can all make a difference"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[700px]">
          <p className="mb-3 text-xs tracking-[0.14em] uppercase">Our Mission</p>
          <h1 className="text-[34px] leading-[1.2] font-normal sm:text-[46px] sm:leading-[55.2px]">
            We believe we can all make a difference.
          </h1>
          <p className="mt-4 text-base leading-6 text-white/90 sm:text-lg">
            Our way: Exceptional quality. Ethical factories. Radical Transparency.
          </p>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="mx-auto max-w-[820px] px-6 py-16 text-center lg:py-24">
        <h2 className="text-[24px] leading-[34px] font-normal text-ink sm:text-[32px] sm:leading-[42px]">
          At Everlane, we want the right choice to be as easy as putting on a great T-shirt.
        </h2>
        <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
          That’s why we partner with the best, ethical factories around the world. Source
          only the finest materials. And share those stories with you—down to the true
          cost of every product we make. It’s a new way of doing things. We call it Radical
          Transparency.
        </p>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 lg:px-[68px] lg:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-normal text-ink">{pillar.title}</h3>
              <p className="text-sm leading-6 text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-surface px-6 py-16 lg:px-[68px] lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-10 text-center text-[24px] leading-[33.24px] font-normal text-ink">
            Cleaner Fashion by the Numbers
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {IMPACT_STATS.map((item) => (
              <div
                key={item.metric}
                className="flex flex-col items-center border border-border bg-white px-6 py-10 text-center"
              >
                <span className="text-[40px] leading-[48px] font-normal text-ink">
                  {item.metric}
                </span>
                <p className="mt-2 max-w-[260px] text-sm leading-6 text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/listing"
              className="bg-ink px-8 py-3.5 text-xs font-medium tracking-[0.1em] text-white uppercase transition-opacity hover:opacity-90"
            >
              Shop Essentials
            </Link>
            <Link
              href="/stores"
              className="border border-ink bg-white px-8 py-3.5 text-xs font-medium tracking-[0.1em] text-ink uppercase transition-colors hover:bg-ink hover:text-white"
            >
              Visit Our Stores
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
