# Cloudflare Deployment Guide

Choose configuration by repository type.

## Plain HTML at repository root
- Build command: leave blank
- Deploy command: `npx wrangler deploy --assets=.`
- Root directory: `/`
- Production branch: `main`

## Plain HTML in `public/`
- Build command: leave blank
- Deploy command: `npx wrangler deploy --assets=public`
- Root directory: `/`
- Production branch: `main`

## Worker-code project
- Build command: `npm ci && npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Production branch: `main`

## Framework project
- Build command: `npm ci && npm run build`
- Deploy command: `npx wrangler deploy --assets=dist`
- Root directory: `/`
- Production branch: `main`

Do not configure Hugo or a build command unless the repository actually uses Hugo or requires a build.
