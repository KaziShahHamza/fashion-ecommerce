import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

const STORES = [
  {
    city: "San Francisco",
    name: "Valencia Street",
    address: "461 Valencia St, San Francisco, CA 94103",
    hours: "Mon–Sat 11am–7pm · Sun 11am–6pm",
    image: "/images/social-1.png",
  },
  {
    city: "New York",
    name: "SoHo — Prince Street",
    address: "28 Prince St, New York, NY 10012",
    hours: "Mon–Sat 11am–7pm · Sun 11am–6pm",
    image: "/images/social-2.png",
  },
  {
    city: "New York",
    name: "Williamsburg",
    address: "104 N 6th St, Brooklyn, NY 11249",
    hours: "Mon–Sat 11am–7pm · Sun 11am–6pm",
    image: "/images/social-3.png",
  },
  {
    city: "Los Angeles",
    name: "Abbot Kinney",
    address: "1101 Abbot Kinney Blvd, Venice, CA 90291",
    hours: "Mon–Sun 11am–7pm",
    image: "/images/social-4.png",
  },
  {
    city: "Boston",
    name: "Newbury Street",
    address: "152 Newbury St, Boston, MA 02116",
    hours: "Mon–Sat 11am–7pm · Sun 12pm–6pm",
    image: "/images/social-5.png",
  },
  {
    city: "Austin",
    name: "South Congress",
    address: "1115 S Congress Ave, Austin, TX 78704",
    hours: "Mon–Sat 11am–7pm · Sun 12pm–6pm",
    image: "/images/promo-3.png",
  },
];

export default function StoresPage() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-12 lg:px-[68px] lg:py-16">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs tracking-[0.12em] text-muted uppercase">
          Retail Locations
        </p>
        <h1 className="text-[32px] leading-[40px] font-normal text-ink sm:text-[40px] sm:leading-[48px]">
          Stores
        </h1>
        <p className="mx-auto mt-3 max-w-[540px] text-sm leading-6 text-muted">
          Find your closest store to try on essentials in person, pick up online orders,
          or drop off clean denim for recycling.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {STORES.map((store) => (
          <article key={store.name} className="flex flex-col gap-3 border-b border-border pb-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
              <Image
                src={store.image}
                alt={`${store.city} — ${store.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="mt-1 flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
                {store.city}
              </span>
              <h2 className="text-lg font-normal text-ink">{store.name}</h2>
              <p className="flex items-start gap-2 text-xs text-muted">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{store.address}</span>
              </p>
              <p className="flex items-start gap-2 text-xs text-muted">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{store.hours}</span>
              </p>
            </div>

            <Link
              href="/listing"
              className="mt-2 inline-block text-xs tracking-[0.08em] text-ink underline underline-offset-4 uppercase"
            >
              Shop Store Favorites
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
