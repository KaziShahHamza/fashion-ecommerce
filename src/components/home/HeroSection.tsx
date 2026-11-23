import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden lg:min-h-[680px]">
      <Image
        src="/images/hero.png"
        alt="Winter essentials collection"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-8">
        <div className="flex max-w-[632px] flex-col items-center gap-[30px] text-center text-white">
          <div className="flex flex-col gap-[14px]">
            <h1 className="text-[36px] leading-[1.2] font-normal tracking-[0.02em] sm:text-[46px] sm:leading-[55.2px]">
              Your Cozy Era
            </h1>
            <p className="text-[18px] leading-[1.4] font-normal sm:text-[24px] sm:leading-[33.24px]">
              Get peak comfy-chic
              <br />
              with new winter essentials.
            </p>
          </div>
          <Link
            href="/listing"
            className="inline-flex items-center justify-center bg-white px-10 py-3 text-[14px] leading-[16.8px] tracking-[0.1em] text-ink uppercase transition-opacity hover:opacity-90"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
