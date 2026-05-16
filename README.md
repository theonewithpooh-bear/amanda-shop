# Hygge Tygge — Curated Living

A static website for Hygge Tygge, a lifestyle concept store.
Scandinavian calm meets Chiswick elegance.

## Pages
- `index.html` — landing page: full-bleed hero, the edit, **Stockists**,
  **Instagram feed**, and **The Hygge Circle** newsletter signup.
- `about.html` — the store's story.

## Build / run
No build step. Open `index.html` in a browser, or serve locally:

```
python3 -m http.server
```

## Design notes
- **Palette:** greige base with dusty rose and sage accents. No teal.
- **Type:** Cormorant Garamond (headings), Jost (body) — loaded from Google Fonts.
- Fully responsive; mobile navigation in `js/main.js`.

## Placeholders to replace before launch
- **Hero image** — `.hero` in `css/styles.css` uses a greige gradient + an
  inline olive-branch SVG. Drop in the final linen photograph there.
- **Product imagery** — `.card__media` and `.insta-tile` use colour tints.
- **Instagram feed** — `.insta-grid` tiles are placeholders. Connect the
  Instagram Basic Display API (or an embed widget); see `js/main.js`.
- **Newsletter** — the form shows a front-end confirmation only. Point it at
  your email platform's endpoint; see `js/main.js`.
