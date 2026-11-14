import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { describe, it } from 'vitest';

const root = createRequire(import.meta.url);
const astro = createRequire(root.resolve('astro'));
const { jsx } = await import(pathToFileURL(root.resolve('astro/jsx-runtime')).href);
const { renderJSX } = await import(pathToFileURL(root.resolve('astro/runtime/server/jsx.js')).href);
const { renderStreaming } = await import(pathToFileURL(root.resolve('astro/runtime/server/render/streaming.js')).href);
const { renderComponentToString } = await import(pathToFileURL(root.resolve('astro/runtime/server/render/component.js')).href);
const { sanitizeElementName } = await import(pathToFileURL(root.resolve('astro/runtime/server/render/util.js')).href);
const { isParentDirectory } = await import(pathToFileURL(astro.resolve('@astrojs/internal-helpers/path')).href);
const result = () => ({
	pathname: '/security-fixture', renderers: [], clientDirectives: new Map(), compressHTML: false,
	partial: false, cancelled: false,
	_metadata: { propagators: new Set(), hasHydrationScript: false, hasDirectives: new Set(), hasRenderedHead: false, rendererSpecificHydrationScripts: new Set() },
});
const streaming = async (tag: string, props: Record<string, unknown>) => {
	let html = '';
	await renderStreaming(jsx(tag, props), result(), { write(chunk: unknown) { html += String(chunk); } });
	return html;
};

describe('official Astro tag-name backport through installed renderers', () => {
	it('rejects slash, equals and whitespace attribute injection in Astro, JSX and streaming', async () => {
		for (const tag of ['span/data-injected=true', 'span=attribute', 'span\tonmouseover=fixture', 'span><img/src/onerror=fixture>']) {
			assert.equal(sanitizeElementName(tag), 'span');
			assert.equal(String(await renderJSX(result(), jsx(tag, { id: 'target', children: 'hello' }))), '<span id="target">hello</span>');
			assert.equal(await streaming(tag, { id: 'target', children: 'hello' }), '<span id="target">hello</span>');
			assert.equal(await streaming(tag, { children: 'hello' }), '<span>hello</span>');
			assert.equal(await renderComponentToString(result(), 'Fixture', tag, { id: 'target' }), '<span id="target"></span>');
		}
		for (const tag of ['img/src/onerror=fixture', 'svg/onload=fixture']) {
			for (const output of [String(await renderJSX(result(), jsx(tag, {}))), await streaming(tag, {}), await streaming(tag, { id: 'target' }), await renderComponentToString(result(), 'Fixture', tag, {})]) {
				assert.doesNotMatch(output, /onerror|onload|fixture/);
			}
		}
	});

	it('preserves normal tags, custom elements, SVG names and escaped children', async () => {
		for (const tag of ['div', 'H1', 'my-element', 'foreignObject', 'x-é', 'a.b_c:d']) {
			assert.equal(sanitizeElementName(tag), tag);
			assert.equal(String(await renderJSX(result(), jsx(tag, { children: '<unsafe>' }))), `<${tag}>&lt;unsafe&gt;</${tag}>`);
			assert.equal(await streaming(tag, { children: '<unsafe>' }), `<${tag}>&lt;unsafe&gt;</${tag}>`);
		}
		assert.equal(sanitizeElementName('  div  '), 'div');
		assert.equal(String(await renderJSX(result(), jsx('img', { src: '/fixture.png' }))), '<img src="/fixture.png"/>');
	});

	it('rejects strings without an element name through every rendering path', async () => {
		for (const tag of [' ', '!--', '1div', '/div', '-div']) {
			assert.throws(() => sanitizeElementName(tag), /Invalid element name/);
			await assert.rejects(renderJSX(result(), jsx(tag, {})), /Invalid element name/);
			await assert.rejects(streaming(tag, {}), /Invalid element name/);
			await assert.rejects(renderComponentToString(result(), 'Fixture', tag, {}), /Invalid element name/);
		}
	});
});

describe('official Astro image-path backport through its installed helper', () => {
	it('rejects case-variant siblings, parent traversal and invalid path representations', () => {
		for (const [parent, child] of [
			['/app/dist/client', '/app/DIST/client/secret.png'], ['/app/dist/client/', '/app/dist/CLIENT/secret.png'],
			['/srv/app/dist', '/srv/App/dist/file.png'], ['src/components', 'SRC/components/Button.astro'],
			['/app/dist', '/app/distribution/file.png'], ['/app/dist', '/app/dist/../secret.png'],
			['/app/dist', '/app/dist'], ['', '/app/dist/file.png'], ['/app/dist', 'https://example.test/image.png'],
			['/app/dist', '/app/dist/\0image.png'], ['C:\\Users', 'D:\\Users\\image.png'],
		]) assert.equal(isParentDirectory(parent, child), false, `${parent} / ${child}`);
	});

	it('preserves exact POSIX children and Windows drive-letter case folding', () => {
		for (const [parent, child] of [
			['/app/dist/client/', '/app/dist/client/image.png'], ['src/components', 'src/components/Button.astro'],
			['C:\\Users\\App\\dist', 'c:\\users\\app\\DIST\\image.png'], ['C:/Users/App/dist', 'c:/users/app/dist/image.png'],
		]) assert.equal(isParentDirectory(parent, child), true, `${parent} / ${child}`);
	});
});
