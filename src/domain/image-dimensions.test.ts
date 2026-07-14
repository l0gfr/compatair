import { describe, expect, it } from 'vitest';
import { isImageWithinPixelBudget, readImageDimensions } from './image-dimensions';

describe('image dimension headers', () => {
	it('reads PNG dimensions without decoding pixels', () => {
		const bytes = new Uint8Array(24);
		bytes.set([0x89, 0x50, 0x4e, 0x47], 0);
		new DataView(bytes.buffer).setUint32(16, 4_032);
		new DataView(bytes.buffer).setUint32(20, 3_024);
		expect(readImageDimensions(bytes)).toEqual({ width: 4_032, height: 3_024 });
	});

	it('reads JPEG dimensions from a start-of-frame segment', () => {
		const bytes = new Uint8Array([0xff, 0xd8, 0xff, 0xc0, 0x00, 0x11, 0x08, 0x0b, 0xb8, 0x0f, 0xa0, 0x03, 0x01, 0x11, 0x00, 0x02, 0x11, 0x00, 0x03, 0x11, 0x00, 0xff, 0xd9]);
		expect(readImageDimensions(bytes)).toEqual({ width: 4_000, height: 3_000 });
	});

	it('fails closed for an unsupported header or an excessive pixel surface', () => {
		expect(readImageDimensions(new Uint8Array([1, 2, 3]))).toBeUndefined();
		expect(isImageWithinPixelBudget({ width: 10_000, height: 10_000 })).toBe(false);
		expect(isImageWithinPixelBudget({ width: 4_000, height: 3_000 })).toBe(true);
	});
});
