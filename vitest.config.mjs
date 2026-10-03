import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineConfig } from 'vitest/config';
import { catalogBuildInputs } from './scripts/lib/catalog-build-inputs.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const catalog = catalogBuildInputs(root);
const entries = new Set([
  join(root, 'src/data/products/compressors/index.ts'),
  join(root, 'src/data/products/tools/index.ts'),
  join(root, 'src/data/product-seo-titles.ts'),
  join(root, 'src/data/evidence-history.snapshot.json'),
]);

// Run-mode inputs are immutable during the suite. Watch mode keeps live modules.
export default defineConfig({
  plugins: process.argv[2] === 'run' ? [{
    ...catalog,
    apply: 'serve',
    async transform(source, id) {
      if (!entries.has(id)) return;
      return catalog.transform.call(this, source, id);
    },
  }] : [],
});
