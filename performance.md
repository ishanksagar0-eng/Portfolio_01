# Performance Optimizations

## Why Performance Matters
A responsive site must be **fast** — mobile users often have slower connections and less powerful devices. This project follows performance best practices from the ground up.

---

## 1. Minimal Dependencies
- ✅ **Zero frameworks** (no Bootstrap, Tailwind, or React)
- ✅ **Zero external fonts** (uses system-ui stack)
- ✅ **Zero icon libraries** (uses emoji for visual cues)
- Total CSS: ~3.5 KB (minified)
- Total JS: < 1 KB

---

## 2. Optimized Images
- No external images in this demo
- For production: use `<picture>` with `srcset` or `WebP` formats
- Always set `width` / `height` attributes to prevent layout shift (CLS)

```html
<picture>
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="Hero" width="1200" height="600" loading="lazy" />
</picture>
