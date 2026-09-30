# Cloudflare Workers Builds

Cloudflare Workers Builds clones the selected repository and runs the configured build and deploy commands.

## Plain HTML root
- Build: blank
- Deploy: `npx wrangler deploy --assets=.`
- Root: `/`
- Branch: `main`

## Plain HTML in public/
- Build: blank
- Deploy: `npx wrangler deploy --assets=public`

## Worker code
- Build: `npm ci && npm run build`
- Deploy: `npx wrangler deploy`

## Framework
- Build: `npm ci && npm run build`
- Deploy: `npx wrangler deploy --assets=dist`

Static assets are uploaded from the folder specified by the deploy command or Wrangler configuration.
