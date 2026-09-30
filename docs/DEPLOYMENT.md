# Deployment

The static site in `site/` can be deployed to GitHub Pages, Cloudflare Pages, or any static host.

```bash
npx wrangler deploy --assets=site
```

Use the host's secret manager for any provider configuration. Verify DNS, HTTPS, redirects, security headers, and the canonical URL before publishing.
