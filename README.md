SYSTEM // PORTFOLIO_V1

A local-first portfolio system built with Astro, React, and Tailwind CSS.
Designed for zero-latency interactions and strict data minimalism.

:: SYSTEM_SPECS

Core: Astro 5.0 (Static Site Generation)

Styling: Tailwind CSS (System & Signal Design Tokens)

Typography: Inter (Headers) + Spline Sans Mono (Data) + Maple Mono (Code blocks)

Content: MDX (Type-safe Markdown with React Islands)

State: LocalStorage (Theme Persistence)

:: INITIALIZATION

# Install dependencies

npm install

# Initialize local dev server (http://localhost:4321)

npm run dev

:: FILE_STRUCTURE

/src
/images # Optimized Images (Dithered/Raw)
/components # React "Islands" (Interactive UI)
/content # MDX Blog Posts (The "Logs")
/layouts # BaseLayout.astro (The "Shell")
/pages # Routing logic

:: CONTENT_MANAGEMENT

To add a new log entry:

Create a new .mdx file in src/content/blog/.

Ensure frontmatter matches the schema:

```markdown
---
title: "SYSTEM UPDATE"
description: "Brief log description."
date: "2025-12-08"
tags: ["SYS", "UPDATE"]
---
```

:: LICENSE

UNLICENSED // PRIVATE OPERATOR
