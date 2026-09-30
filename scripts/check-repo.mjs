import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const required = ['README.md','LICENSE','SECURITY.md','CONTRIBUTING.md','package.json','site/index.html','site/styles.css','site/effects.js','docs/BUILD.md','docs/ROADMAP.md'];
const missing = required.filter(p => !existsSync(join(root,p)));
if (missing.length) { console.error('Missing required files:', missing.join(', ')); process.exit(1); }
const forbidden = new RegExp(['pk_live_[A-Za-z0-9]', 'P-[A-Z0-9]{10,}', 'buy_btn_[A-Za-z0-9]{10,}', 'iid=[0-9]{6,}'].join('|'));
const ignored = new Set(['.git','node_modules']);
function walk(dir) { const out=[]; for (const name of readdirSync(dir)) { if (ignored.has(name)) continue; const p=join(dir,name); const s=statSync(p); if (s.isDirectory()) out.push(...walk(p)); else out.push(p); } return out; }
for (const file of walk(root)) {
  if (!/\.(md|html|css|js|json|yml|yaml|txt|xml|jsonc)$/.test(file)) continue;
  const text = readFileSync(file, 'utf8');
  if (forbidden.test(text)) { console.error('Potential live payment/provider identifier in', relative(root,file)); process.exit(1); }
}
const packages = readdirSync(join(root,'packages')).filter(n => statSync(join(root,'packages',n)).isDirectory());
for (const pkg of packages) {
  for (const needed of ['README.md','package.json','CHANGELOG.md','docs/IMPLEMENTATION.md','tests/README.md']) {
    if (!existsSync(join(root,'packages',pkg,needed))) { console.error(`Missing ${needed} in ${pkg}`); process.exit(1); }
  }
}
console.log(`Repository check passed: ${packages.length} packages, ${required.length} root requirements.`);
