# Fashion E-Commerce Website — Project Plan

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4** from the Figma design (**Fashion E-commerce Website (Community)**).

## Git & PR Workflow
- `main` is always updated via **Pull Requests** (never direct feature pushes).
- Every milestone is developed on a dedicated branch (`chore/*` or `feat/*`), pushed to GitHub, and merged into `main` via PR.

---

## Commit & PR Roadmap (11 Commits Total across 8 PRs)

| PR # | Branch | Commits | Scope & Deliverables |
| :--- | :--- | :---: | :--- |
| *Base* | `main` | 1 | `Initial commit from Create Next App` |
| **PR #1** | `chore/setup-assets-and-plan` | 1 | Install `lucide-react`, add 27 downloaded Landing Figma images (`public/images/`), and add `PROJECT_PLAN.md` |
| **PR #2** | `feat/theme-and-layout` | 2 | **1.** Configure Figma colors & typography in `globals.css` / `layout.tsx`<br>**2.** Build shared `Header`, `Navigation` mega-menu, `Search` overlay, and `Footer` |
| **PR #3** | `feat/landing-page` | 1 | Build `Landing` page (`/`): Hero, Shop by Category, Promo Grid, Mission Banner, Favorites, Testimonial, Social Gallery, and Values |
| **PR #4** | `feat/product-listing` | 2 | **1.** Add product types, catalog data, and download `Listing` Figma images<br>**2.** Build `/listing` page with category, size, color filters, and sorting |
| **PR #5** | `feat/product-detail` | 1 | Build `/product/[slug]` (`Product Detail`): image gallery, color/size selectors, accordion specs, and Add to Cart |
| **PR #6** | `feat/cart-drawer` | 1 | Build `CartContext` + slide-over `Cart` drawer (add/remove items, quantity controls, live subtotal) |
| **PR #7** | `feat/editorial-pages` | 2 | **1.** Build `/about` and `/stores` pages with downloaded Figma assets<br>**2.** Build `/blog` and `/blog/[slug]` (`Blog Post`) pages with downloaded Figma assets |
| **PR #8** | `chore/qa-and-polish` | 1 | Responsive QA across breakpoints, `npm run lint` & `npm run build` verification, and browser visual check |

**Total:** **11 commits** (1 base commit + 10 project commits across **8 Pull Requests**).
