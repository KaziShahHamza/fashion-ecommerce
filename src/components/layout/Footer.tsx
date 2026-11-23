"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Account",
    links: [
      { label: "Log In", href: "/stores" },
      { label: "Sign Up", href: "/stores" },
      { label: "Redeem a Gift Card", href: "/listing?category=holiday-gifting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Environmental Initiatives", href: "/about" },
      { label: "Factories", href: "/about" },
      { label: "DEI", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "International", href: "/stores" },
      { label: "Accessibility", href: "/about" },
    ],
  },
  {
    title: "Get Help",
    links: [
      { label: "Help Center", href: "/stores" },
      { label: "Return Policy", href: "/stores" },
      { label: "Shipping Info", href: "/stores" },
      { label: "Bulk Orders", href: "/stores" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Affiliates", href: "/blog" },
      { label: "Out Stores", href: "/stores" },
    ],
  },
];

const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Do Not Sell or Share My Personal Information",
  "CS Supply Chain Transparency",
  "Vendor Code of Conduct",
  "Sitemap Pages",
  "Sitemap Products",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="mt-auto w-full bg-surface px-6 pt-10 pb-4 text-ink lg:px-[72px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-12">
          {/* 4 Link Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="mb-4 text-base font-semibold leading-6 text-ink">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pl-4">
            <form onSubmit={handleSubscribe} className="flex w-full max-w-[440px] items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Email Address"
                aria-label="Email Address"
                required
                className="w-full border border-border bg-white px-[15px] py-[14px] text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex shrink-0 items-center justify-center border border-ink bg-ink px-4 text-white transition-opacity hover:opacity-90"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-ink">
                Thanks for subscribing to our updates.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-10 flex flex-col items-center gap-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((label) => (
              <Link
                key={label}
                href="/about"
                className="text-[12px] leading-4 tracking-[0.0167em] text-muted hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-[12px] leading-4 tracking-[0.0167em] text-muted">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
