# Performance Notes & Checklist

This portfolio is built with performance and accessibility in mind.

## What is already optimized

| Area | Implementation |
|------|----------------|
| **CSS** | Single shared stylesheet, no unused frameworks |
| **Fonts** | Google Fonts with `preconnect` + `display=swap` |
| **Images** | Placeholders only – replace with optimized WebP/AVIF |
| **JavaScript** | Minimal, no libraries, deferred by default (inline at bottom) |
| **Layout** | CSS Grid + Flexbox, no heavy frameworks |
| **Accessibility** | Semantic HTML, proper labels, focus styles, `aria` attributes |
| **Reduced motion** | Respects `prefers-reduced-motion` |
| **Theme color** | Meta tag for browser chrome |

## Recommended next steps

1. **Images**
   - Convert project screenshots to WebP
   - Add `width` / `height` attributes or aspect-ratio
   - Use `loading="lazy"` for below-the-fold images

2. **Form backend**
   - Formspree, Netlify Forms, or EmailJS (no extra JS weight if possible)

3. **Hosting**
   - Deploy on Netlify / Vercel / Cloudflare Pages (automatic HTTPS + CDN)

4. **Caching**
   - Set long cache headers for CSS & static assets
   - Use a service worker only if you need offline support

5. **Lighthouse targets**
   - Performance ≥ 95
   - Accessibility ≥ 95
   - Best Practices ≥ 95
   - SEO ≥ 95

## Core Web Vitals focus

- **LCP**: Keep hero text lightweight; avoid large hero images above the fold
- **CLS**: Reserve space for images and avoid late-loading fonts that shift layout
- **INP**: Keep JS tiny; no heavy event listeners

## Quick audit command (local)

```bash
# After deploying, run Lighthouse in Chrome DevTools
# or use: npx lighthouse https://your-site.com --view
```

---

*Last updated: September 2026*
