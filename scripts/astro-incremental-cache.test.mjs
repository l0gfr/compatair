import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const astroRoot = dirname(require.resolve('astro/package.json'));
const { pluginIncremental } = await import(pathToFileURL(join(astroRoot, 'dist/core/build/plugins/plugin-incremental.js')).href);
const { VIRTUAL_PAGE_RESOLVED_MODULE_ID } = await import(pathToFileURL(join(astroRoot, 'dist/vite-plugin-pages/const.js')).href);

function dependencyHash({ reference = 'opaqueA', asset = '_assets/font.content.woff2', cssSuffix = '', pageCode = 'import "./global.css"', resolvable = true } = {}) {
 const page = '/src/pages/test.astro', css = '/src/global.css';
 const graph = new Map([
  [page, { id: page, code: pageCode, importers: [VIRTUAL_PAGE_RESOLVED_MODULE_ID + 'test'], dynamicImporters: [], importedIds: [css], dynamicallyImportedIds: [] }],
  [css, { id: css, code: '', importers: [page], dynamicImporters: [], importedIds: [], dynamicallyImportedIds: [] }],
 ]);
 const internals = { pagesByViteID: new Map([[page, { component: 'src/pages/test.astro' }]]) };
 const plugin = pluginIncremental(internals, new URL('file:///src/'));
 const context = {
  environment: { name: 'prerender' }, getModuleIds: () => graph.keys(), getModuleInfo: id => graph.get(id),
  getFileName: () => { if (!resolvable) throw new Error('unresolved asset'); return asset; },
 };
 plugin.transform.call(context, `@font-face{src:url("__VITE_ASSET__${reference}__")}${cssSuffix}`, css);
 plugin.generateBundle.call(context);
 return internals.pageDependencyHashes.get('src/pages/test.astro');
}

describe('Astro CSS dependency hashes consume the real asset identity', () => {
 it('keeps the dependency hash stable when only opaque emission references change', () => {
  expect(dependencyHash()).toMatch(/^[a-f0-9]{64}$/);
  expect(dependencyHash({ reference: 'opaqueA' })).toBe(dependencyHash({ reference: 'opaqueB' }));
 });
 it('invalidates the page when a referenced font asset changes', () => {
  expect(dependencyHash()).not.toBe(dependencyHash({ asset: '_assets/font.changed.woff2' }));
 });
 it('still invalidates on real CSS or renderer changes', () => {
  expect(dependencyHash()).not.toBe(dependencyHash({ cssSuffix: 'body{color:red}' }));
  expect(dependencyHash()).not.toBe(dependencyHash({ pageCode: 'import "./global.css";const changed=true' }));
 });
 it('does not claim equivalence when an asset cannot be resolved', () => {
  expect(dependencyHash({ resolvable: false, reference: 'opaqueA' })).not.toBe(dependencyHash({ resolvable: false, reference: 'opaqueB' }));
 });
});
