import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const mutableWidget = readFileSync(new URL('../public/widget/v1/compatair-widget.js', import.meta.url), 'utf8');
const immutableWidget = readFileSync(new URL('../public/widget/v1.0.0/compatair-widget.js', import.meta.url));
const currentImmutableWidget = readFileSync(new URL('../public/widget/v1.1.0/compatair-widget.js', import.meta.url));
const immutableManifest = JSON.parse(readFileSync(new URL('../config/immutable-assets.json', import.meta.url), 'utf8'));

describe('widget compatibility migration', () => {
	it('keeps the pinned v1.0.0 bytes and its legacy URL compatibility intact', () => {
		const sri = `sha384-${createHash('sha384').update(immutableWidget).digest('base64')}`;
		expect(sri).toBe(immutableManifest.assets['/widget/v1.0.0/compatair-widget.js']);
		expect(immutableWidget.toString()).toContain('^\\/compatibilite\\/');
	});

	it('lets the mutable v1 alias accept only the current calculator continuation', () => {
		expect(mutableWidget).not.toContain('^\\/compatibilite\\/');
		expect(mutableWidget).toContain("url.pathname === '/calculateur/'");
		expect(mutableWidget).toContain("view.link.textContent = 'Compléter le calcul'");
		expect(mutableWidget).toContain("&channel=widget");
		expect(immutableWidget.toString()).not.toContain("&channel=widget");
	});

	it('pins a widget that accepts the current API response contract', () => {
		const sri = `sha384-${createHash('sha384').update(currentImmutableWidget).digest('base64')}`;
		expect(sri).toBe(immutableManifest.assets['/widget/v1.1.0/compatair-widget.js']);
		expect(currentImmutableWidget.toString()).toContain("'2.0.0': true");
		expect(currentImmutableWidget.toString()).toContain("compatible_with_limits: 'Compatible avec limites'");
		expect(currentImmutableWidget.toString()).toContain('result.engine_verdict');
		expect(currentImmutableWidget.toString()).toContain("url.pathname === '/calculateur/'");
		expect(currentImmutableWidget.toString()).toContain('&channel=widget');
		expect(currentImmutableWidget.toString()).toContain('result.metrics.required_fad_lpm');
		expect(mutableWidget).toContain("'2.0.0': true");
	});
});
