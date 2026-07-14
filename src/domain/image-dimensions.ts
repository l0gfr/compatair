export type ImageDimensions = { width: number; height: number };

function ascii(bytes: Uint8Array, start: number, length: number) {
	return String.fromCharCode(...bytes.slice(start, start + length));
}

function validDimensions(width: number, height: number): ImageDimensions | undefined {
	return Number.isInteger(width) && Number.isInteger(height) && width > 0 && height > 0 ? { width, height } : undefined;
}

export function readImageDimensions(bytes: Uint8Array): ImageDimensions | undefined {
	if (bytes.length >= 24 && bytes[0] === 0x89 && ascii(bytes, 1, 3) === 'PNG') {
		const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		return validDimensions(view.getUint32(16), view.getUint32(20));
	}

	if (bytes.length >= 10 && ['GIF87a', 'GIF89a'].includes(ascii(bytes, 0, 6))) {
		const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
		return validDimensions(view.getUint16(6, true), view.getUint16(8, true));
	}

	if (bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8) {
		const startOfFrameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
		let offset = 2;
		while (offset + 8 < bytes.length) {
			if (bytes[offset] !== 0xff) { offset += 1; continue; }
			while (bytes[offset] === 0xff) offset += 1;
			const marker = bytes[offset++];
			if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) continue;
			if (offset + 1 >= bytes.length) return undefined;
			const length = (bytes[offset] << 8) | bytes[offset + 1];
			if (length < 2 || offset + length > bytes.length) return undefined;
			if (startOfFrameMarkers.has(marker) && length >= 7) {
				return validDimensions((bytes[offset + 5] << 8) | bytes[offset + 6], (bytes[offset + 3] << 8) | bytes[offset + 4]);
			}
			offset += length;
		}
	}

	if (bytes.length >= 30 && ascii(bytes, 0, 4) === 'RIFF' && ascii(bytes, 8, 4) === 'WEBP') {
		const chunk = ascii(bytes, 12, 4);
		if (chunk === 'VP8X') {
			const width = 1 + bytes[24] + (bytes[25] << 8) + (bytes[26] << 16);
			const height = 1 + bytes[27] + (bytes[28] << 8) + (bytes[29] << 16);
			return validDimensions(width, height);
		}
		if (chunk === 'VP8L' && bytes[20] === 0x2f) {
			const width = 1 + bytes[21] + ((bytes[22] & 0x3f) << 8);
			const height = 1 + (bytes[22] >> 6) + (bytes[23] << 2) + ((bytes[24] & 0x0f) << 10);
			return validDimensions(width, height);
		}
		if (chunk === 'VP8 ' && bytes[23] === 0x9d && bytes[24] === 0x01 && bytes[25] === 0x2a) {
			const width = (bytes[26] | (bytes[27] << 8)) & 0x3fff;
			const height = (bytes[28] | (bytes[29] << 8)) & 0x3fff;
			return validDimensions(width, height);
		}
	}

	return undefined;
}

export function isImageWithinPixelBudget(dimensions: ImageDimensions, maximumEdge = 8_192, maximumPixels = 32_000_000) {
	return dimensions.width <= maximumEdge && dimensions.height <= maximumEdge && dimensions.width * dimensions.height <= maximumPixels;
}
