# Repo Type Checklist

| Repository type | Expected files | Deploy command |
|---|---|---|
| Plain HTML root | `index.html`, inline or local assets | `npx wrangler deploy --assets=.` |
| Plain HTML in folder | `public/index.html` and assets | `npx wrangler deploy --assets=public` |
| Worker code | `package.json`, `wrangler.jsonc`, `src/index.js` | `npm ci && npm run build`; then `npx wrangler deploy` |
| Framework | `package.json`, `src/`, `public/` | `npm ci && npm run build`; then `npx wrangler deploy --assets=dist` |
