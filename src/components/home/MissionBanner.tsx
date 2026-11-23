import Image from "next/image";
import Link from "next/link";

export function MissionBanner() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-14 lg:px-[42px] lg:py-[90px]">
      <div className="relative flex min-h-[281px] w-full flex-col items-center justify-center gap-5 overflow-hidden px-6 py-11 text-center text-white">
        <Image
          src="/images/mission-banner.png"
          alt="Sustainability mission banner"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col gap-3">
          <h2 className="text-[28px] leading-[1.25] font-normal sm:text-[32px] sm:leading-[40px]">
            We’re on a Mission To Clean Up the Industry
          </h2>
          <p className="text-[16px] leading-6 font-normal">
            Read about our progress in our latest Impact Report.
          </p>
        </div>
        <Link
          href="/about"
          className="relative z-10 inline-flex items-center justify-center bg-white px-8 py-3 text-[14px] leading-[16.8px] tracking-[0.1em] text-ink uppercase transition-opacity hover:opacity-90"
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}
