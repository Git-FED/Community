# Before Deploying Checklist

- [ ] `index.html` exists at the repository root or inside the configured assets folder.
- [ ] The deploy command matches the assets folder.
- [ ] Build command is blank for a plain HTML repo.
- [ ] Root directory is `/`.
- [ ] Production branch is `main`.

For this plain HTML repository use:

```bash
npx wrangler deploy --assets=.
```
