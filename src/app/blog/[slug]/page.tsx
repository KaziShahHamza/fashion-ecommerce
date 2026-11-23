import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto w-full max-w-[1400px] px-4 py-10 lg:px-[68px] lg:py-14">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-xs tracking-[0.06em] text-muted uppercase hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Everworld
      </Link>

      {/* Header */}
      <header className="mx-auto max-w-[780px] text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.1em] text-muted uppercase">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="text-[30px] leading-[1.25] font-normal text-ink sm:text-[42px] sm:leading-[50px]">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">By {post.author}</p>
      </header>

      {/* Hero Image */}
      <div className="relative mx-auto mt-10 aspect-[16/9] max-w-[1040px] overflow-hidden bg-surface">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1040px) 100vw, 1040px"
        />
      </div>

      {/* Article Body */}
      <div className="mx-auto mt-12 flex max-w-[680px] flex-col gap-6 text-base leading-8 text-ink">
        <p className="text-lg leading-8 text-muted">{post.excerpt}</p>

        <blockquote className="my-4 border-l-2 border-ink pl-6 text-xl leading-8 font-normal text-ink italic">
          “{post.pullQuote}”
        </blockquote>

        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Related Stories */}
      <section className="mt-20 border-t border-border pt-14">
        <h2 className="mb-8 text-center text-[24px] leading-[33.24px] font-normal text-ink">
          More From Everworld
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex flex-col gap-2.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <span className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {item.category}
              </span>
              <h3 className="text-base font-normal text-ink group-hover:underline">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1400px] px-4 py-16 text-center text-sm text-muted lg:px-[68px]">
          Loading story...
        </div>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}
