import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-12 lg:px-[68px] lg:py-16">
      <div className="mb-12 border-b border-border pb-8 text-center">
        <p className="mb-2 text-xs tracking-[0.14em] text-muted uppercase">
          Everworld Stories
        </p>
        <h1 className="text-[32px] leading-[40px] font-normal text-ink sm:text-[42px] sm:leading-[50px]">
          everworld
        </h1>
        <p className="mx-auto mt-3 max-w-[560px] text-sm leading-6 text-muted">
          We’re on a mission to clean up a dirty industry. These are the people, stories,
          and ideas driving cleaner fashion forward.
        </p>
      </div>

      {/* Featured Story */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mb-16 grid grid-cols-1 items-center gap-8 border-b border-border pb-14 lg:grid-cols-12"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface lg:col-span-7">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:pl-6">
          <span className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">
            {featured.category} · {featured.readTime}
          </span>
          <h2 className="text-[26px] leading-[34px] font-normal text-ink group-hover:underline sm:text-[32px] sm:leading-[40px]">
            {featured.title}
          </h2>
          <p className="text-sm leading-6 text-muted">{featured.excerpt}</p>
          <span className="mt-2 text-xs font-medium tracking-[0.08em] text-ink underline underline-offset-4 uppercase">
            Read Story
          </span>
        </div>
      </Link>

      {/* Article Grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <span className="mt-1 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              {post.category} · {post.readTime}
            </span>
            <h3 className="text-lg leading-6 font-normal text-ink group-hover:underline">
              {post.title}
            </h3>
            <p className="text-sm leading-6 text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
