# Figma Design Reference (`FIGMA_GUIDE.md`)

Use `figma-developer-mcp` (`get_figma_data` and `download_figma_images`) with the details below to inspect frames and download page assets.

## Figma File
- **Name:** `Fashion E-commerce Website (Community)`
- **File Key:** `Atj7gtvKMTOEAPPOVdVOMC`
- **URL:** `https://www.figma.com/design/Atj7gtvKMTOEAPPOVdVOMC/Fashion-E-commerce-Website--Community-?node-id=0-1`

## Frame Node IDs (Canvas `#0:1` — `"→ Template"`)
| Frame Name | Node ID | Target Route / Component |
| :--- | :--- | :--- |
| `Landing` | `4:181` | `src/app/page.tsx` (`/`) |
| `Navigation` | `6:368` | Mega-menu in `src/components/layout/` |
| `Search` | `6:552` | Search overlay in `src/components/layout/` |
| `About` | `6:726` | `src/app/about/page.tsx` (`/about`) |
| `Stores` | `10:906` | `src/app/stores/page.tsx` (`/stores`) |
| `Blog` | `10:1163` | `src/app/blog/page.tsx` (`/blog`) |
| `Blog Post` | `10:1405` | `src/app/blog/[slug]/page.tsx` (`/blog/[slug]`) |
| `Listing` | `10:2275` | `src/app/listing/page.tsx` (`/listing`) |
| `Product Detail` | `10:3394` | `src/app/product/[slug]/page.tsx` (`/product/[slug]`) |
| `Cart` | `11:2105` | Slide-over drawer in `src/components/cart/` |

## Core Design Tokens (Extracted from `Landing`)
- **Colors:**
  - `white`: `#FFFFFF`
  - `100`: `#F5F4F4`
  - `200`: `#DDDBDC`
  - `500`: `#262626`
  - `600`: `#000000`
- **Font Family:** `Maison Neue` (commercial; pair with `Plus Jakarta Sans` / `Inter` via `next/font/google` as web fallback).
- **Desktop Frame Width:** `1400px`

## Downloaded Assets (`public/images/`)
Already downloaded from `Landing` (`4:181`):
- `hero.png`, `mission-banner.png`, `testimonial-1.png`
- `cat-1.png` – `cat-6.png`
- `promo-1.png` – `promo-3.png`
- `fav-1.png` – `fav-4.png`, `fav-5-3ca8d3.png`
- `look-1.png`, `look-2.png`
- `social-1.png` – `social-5.png`
- `value-1.png` – `value-3.png`
