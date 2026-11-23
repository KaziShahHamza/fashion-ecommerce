# Fashion E-Commerce Website — Project Plan

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4** from the Figma design (**Fashion E-commerce Website (Community)**).

## Git & PR Workflow
- `main` is always updated via **Pull Requests** (never direct feature pushes).
- Every milestone is developed on a dedicated branch (`chore/*`, `docs/*`, or `feat/*`), pushed to GitHub (`KaziShahHamza/fashion-ecommerce`), and merged into `main` via PR.

---

## Current Status & Roadmap

- [x] **Base (`main`)** — `Initial commit from Create Next App`
- [x] **PR #1 (`chore/setup-assets-and-plan`, 1 commit)** — Installed `lucide-react`, created folder structure (`src/components/*`, `src/context`, `src/data`, `src/types`, `public/images`, `public/icons`), downloaded 27 `Landing` Figma images, added `PROJECT_PLAN.md`. *(Merged)*
- [x] **PR #2 (`docs/agent-handoff-guides`, 1 commit)** — Updated `AGENTS.md`, added `FIGMA_GUIDE.md`, and added status tracking to `PROJECT_PLAN.md`.
- [x] **PR #3 (`feat/theme-and-layout`, 2 commits)**
  - Commit 1: Configure Figma colors & typography in `src/app/globals.css` and `src/app/layout.tsx`
  - Commit 2: Build shared `Header`, `Navigation` mega-menu (`#6:368`), `Search` overlay (`#6:552`), and `Footer`
- [x] **PR #4 (`feat/landing-page`, 1 commit)**
  - Build `Landing` page (`src/app/page.tsx`, `#4:181`): Hero, Shop by Category, Promo Grid, Mission Banner, Favorites, Testimonial, Social Gallery, and Values
- [x] **PR #5 (`feat/product-listing`, 2 commits)**
  - Commit 1: Add product types (`src/types`), catalog data (`src/data`), and download `Listing` (`#10:2275`) Figma images
  - Commit 2: Build `/listing` page (`src/app/listing/page.tsx`) with category, size, color filters, and sorting
- [ ] **PR #6 (`feat/product-detail`, 1 commit)** — **NEXT UP**
  - Download `Product Detail` (`#10:3394`) images and build `/product/[slug]` (`src/app/product/[slug]/page.tsx`) with gallery, color/size selectors, and Add to Cart
- [ ] **PR #7 (`feat/cart-drawer`, 1 commit)**
  - Build `CartContext` (`src/context/CartContext.tsx`) + slide-over `Cart` drawer (`#11:2105`) with add/remove, quantity controls, and live subtotal
- [ ] **PR #8 (`feat/editorial-pages`, 2 commits)**
  - Commit 1: Download assets and build `/about` (`#6:726`) and `/stores` (`#10:906`)
  - Commit 2: Download assets and build `/blog` (`#10:1163`) and `/blog/[slug]` (`#10:1405`)
- [ ] **PR #9 (`chore/qa-and-polish`, 1 commit)**
  - Responsive QA across breakpoints, `npm run lint` & `npm run build` verification, and Chrome DevTools visual check
