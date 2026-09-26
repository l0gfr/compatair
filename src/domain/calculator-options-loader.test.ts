import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadCalculatorOptions } from './calculator-options-loader';

const integrity = `sha256-${'A'.repeat(43)}=`;
afterEach(() => vi.unstubAllGlobals());

describe('calculator suggestion loading', () => {
	it('requires the exact page integrity and returns the verified response', async () => {
		const rows = [['tool-id', [120, 6.3]]];
		const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(rows)));
		vi.stubGlobal('fetch', fetchMock);
		await expect(loadCalculatorOptions(integrity)).resolves.toEqual(rows);
		expect(fetchMock).toHaveBeenCalledWith('/calculateur/options.json', expect.objectContaining({ integrity, cache: 'no-cache', priority: 'low', signal: expect.any(AbortSignal) }));
	});

	it('does not fetch without an integrity value', async () => {
		const fetchMock = vi.fn(); vi.stubGlobal('fetch', fetchMock);
		await expect(loadCalculatorOptions('')).rejects.toThrow('Empreinte');
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it('rejects HTTP failures instead of using an empty catalogue', async () => {
		vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Not found', { status: 404 })));
		await expect(loadCalculatorOptions(integrity)).rejects.toThrow('indisponible');
	});

	it('propagates integrity or network failures and invalid JSON', async () => {
		vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Integrity mismatch')));
		await expect(loadCalculatorOptions(integrity)).rejects.toThrow('Integrity mismatch');
		vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('<html>error</html>')));
		await expect(loadCalculatorOptions(integrity)).rejects.toThrow();
	});
});
