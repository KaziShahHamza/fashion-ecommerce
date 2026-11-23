<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Context & Agent Handoff

Before starting work in a new chat, **read these two files first**:
1. `PROJECT_PLAN.md` — Current progress (`[x]` done vs `[ ]` remaining), PR roadmap, and next PR to build.
2. `FIGMA_GUIDE.md` — Figma `fileKey`, all 10 frame `nodeId`s, design tokens, and downloaded image paths.

### Mandatory Git & GitHub PR Workflow
- **Repository:** `KaziShahHamza/fashion-ecommerce` (`origin` on GitHub).
- **Never push feature work directly to `main`.**
- For every milestone in `PROJECT_PLAN.md`:
  1. Ensure you are on an up-to-date `main` (`git checkout main && git pull origin main`).
  2. Create a feature branch (e.g., `feat/theme-and-layout`).
  3. Make clean, scoped commits, push the branch (`git push -u origin <branch>`).
  4. Open a Pull Request to `main` via `github-mcp` (`create_pull_request`), merge it (`merge_pull_request`), and sync local `main`.
  5. Update the `[x]` checkboxes in `PROJECT_PLAN.md` as milestones are completed.

### Tech Stack & Conventions
- **Framework:** Next.js 16 (App Router, `src/` directory, `@/*` alias).
- **Styling:** Tailwind CSS v4 (`src/app/globals.css` uses `@import "tailwindcss";` and `@theme inline`).
- **Icons:** `lucide-react` + SVG assets in `public/icons/`.
- **Figma MCP:** `figma-developer-mcp` is connected (`get_figma_data`, `download_figma_images`). Always fetch the target frame's `nodeId` from `FIGMA_GUIDE.md` and download missing page images into `public/images/` before coding that page.
- **Verification:** Run `npm run lint` and `npm run build` before opening/merging each PR.

