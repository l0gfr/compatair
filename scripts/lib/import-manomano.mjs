import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import { basename } from 'node:path';

const AWIN_ADVERTISER_ID = '17547';

function normalizeHeader(value) { return value.trim().toLowerCase().replace(/^\uFEFF/, ''); }
function normalizeGtin(value) { const raw = String(value ?? '').trim(); if (!/^[0-9\s-]+$/.test(raw)) return undefined; const digits = raw.replace(/[\s-]/g, ''); return /^\d{8,14}$/.test(digits) ? digits : undefined; }
function normalizeMpn(value) { const normalized = String(value ?? '').trim().toUpperCase().replace(/[^A-Z0-9]/g, ''); return normalized || undefined; }

function detectDelimiter(text) {
	const line = text.split(/\r?\n/, 1)[0] ?? '';
	return [',', '\t', ';'].sort((left, right) => line.split(right).length - line.split(left).length)[0];
}

export function parseDelimited(text, delimiter = detectDelimiter(text)) {
	const rows = []; let row = []; let cell = ''; let quoted = false;
	const input = text.replace(/^\uFEFF/, '');
	for (let index = 0; index < input.length; index++) {
		const char = input[index];
		if (quoted) {
			if (char === '"' && input[index + 1] === '"') { cell += '"'; index++; }
			else if (char === '"') quoted = false;
			else cell += char;
		} else if (char === '"') quoted = true;
		else if (char === delimiter) { row.push(cell); cell = ''; }
		else if (char === '\n') { row.push(cell.replace(/\r$/, '')); if (row.some(Boolean)) rows.push(row); row = []; cell = ''; }
		else cell += char;
	}
	if (quoted) throw new Error('Guillemet non fermé dans le flux Awin.');
	if (cell || row.length) { row.push(cell.replace(/\r$/, '')); rows.push(row); }
	const headers = (rows.shift() ?? []).map(normalizeHeader);
	if (new Set(headers).size !== headers.length) throw new Error('Colonnes dupliquées dans le flux Awin.');
	return rows.map((values, index) => ({ line: index + 2, row: Object.fromEntries(headers.map((header, column) => [header, (values[column] ?? '').trim()])) }));
}

function indexCatalog(catalog) {
	const products = [...(catalog.compressors ?? []), ...(catalog.tools ?? [])];
	const indexes = { gtin: new Map(), mpn: new Map() };
	for (const product of products) {
		for (const value of [product.ean, product.gtin].map(normalizeGtin).filter(Boolean)) addIndex(indexes.gtin, value, product.id);
		const mpn = normalizeMpn(product.mpn); if (mpn) addIndex(indexes.mpn, mpn, product.id);
	}
	for (const product of catalog.normalized?.products ?? []) {
		for (const value of [product.identity?.ean, product.identity?.gtin].map(normalizeGtin).filter(Boolean)) addIndex(indexes.gtin, value, product.id);
		const mpn = normalizeMpn(product.identity?.mpn); if (mpn) addIndex(indexes.mpn, mpn, product.id);
		for (const alias of product.identity?.aliases ?? []) {
			if (alias.type === 'ean' || alias.type === 'gtin') { const value = normalizeGtin(alias.value); if (value) addIndex(indexes.gtin, value, product.id); }
			else { const value = normalizeMpn(alias.value); if (value) addIndex(indexes.mpn, value, product.id); }
		}
	}
	return indexes;
}

function addIndex(index, key, productId) {
	const ids = index.get(key) ?? new Set(); ids.add(productId); index.set(key, ids);
}

function matchProduct(row, indexes) {
	const identifiers = { ean: normalizeGtin(row.ean), gtin: normalizeGtin(row.gtin), mpn: String(row.mpn ?? '').trim() || undefined };
	const candidates = new Set(); const matchedBy = new Set(); let ambiguous = false;
	for (const [kind, gtin] of [['ean', identifiers.ean], ['gtin', identifiers.gtin]].filter(([, value]) => Boolean(value))) { const ids = indexes.gtin.get(gtin); if (ids?.size > 1) ambiguous = true; if (ids?.size) matchedBy.add(kind); for (const id of ids ?? []) candidates.add(id); }
	const normalizedMpn = normalizeMpn(identifiers.mpn); const mpnIds = normalizedMpn ? indexes.mpn.get(normalizedMpn) : undefined;
	if (mpnIds?.size > 1) ambiguous = true; if (mpnIds?.size) matchedBy.add('mpn'); for (const id of mpnIds ?? []) candidates.add(id);
	if (ambiguous || candidates.size > 1) return { error: 'identifier_conflict' };
	if (candidates.size === 0) return { identifiers, unmatched: true };
	return { identifiers, productId: [...candidates][0], matchedBy: [...matchedBy] };
}

function parseMoney(value) {
	const raw = String(value ?? '').trim();
	if (/^(free|gratuit)$/i.test(raw)) return 0;
	let normalized = raw.replace(/[^0-9,.-]/g, '');
	if (normalized.includes(',') && normalized.includes('.')) {
		const decimal = normalized.lastIndexOf(',') > normalized.lastIndexOf('.') ? ',' : '.';
		normalized = decimal === ',' ? normalized.replace(/\./g, '').replace(',', '.') : normalized.replace(/,/g, '');
	} else normalized = normalized.replace(',', '.');
	const amount = Number(normalized); return Number.isFinite(amount) && amount >= 0 ? amount : undefined;
}

function availability(row) {
	if (/^(1|true|yes|y)$/i.test(row.pre_order ?? '')) return 'preorder';
	if (/^(0|false|no|n)$/i.test(row.is_for_sale ?? '')) return 'out_of_stock';
	if (/^(1|true|yes|y|in stock|in_stock|available)$/i.test(row.in_stock ?? '')) return 'in_stock';
	if (/^(0|false|no|n|out of stock|out_of_stock|unavailable)$/i.test(row.in_stock ?? '')) return 'out_of_stock';
	return 'unknown';
}

function validateLink(value) {
	let url; try { url = new URL(value); } catch { throw new Error('invalid_deep_link'); }
	if (url.protocol !== 'https:') throw new Error('non_https_deep_link');
	const host = url.hostname.toLowerCase();
	if (host === 'manomano.fr' || host.endsWith('.manomano.fr')) return url.toString();
	if (!(host === 'awin1.com' || host.endsWith('.awin1.com'))) throw new Error('unauthorized_deep_link_host');
	if (!['/pclick.php', '/cread.php'].includes(url.pathname)) throw new Error('unauthorized_awin_path');
	if ((url.searchParams.get('m') ?? url.searchParams.get('awinmid')) !== AWIN_ADVERTISER_ID) throw new Error('wrong_awin_advertiser');
	return url.toString();
}

function validateImage(value) {
	let url; try { url = new URL(value); } catch { throw new Error('invalid_image_url'); }
	if (url.protocol !== 'https:') throw new Error('non_https_image_url');
	return url.toString();
}

export function importManoManoFeed({ bytes, fileName, catalog, collectedAt }) {
	if (bytes.length > 100 * 1024 * 1024) throw new Error('Flux compressé supérieur à 100 Mio.');
	const checksum = createHash('sha256').update(bytes).digest('hex');
	const payload = /\.gz$/i.test(fileName) ? gunzipSync(bytes, { maxOutputLength: 250 * 1024 * 1024 }) : bytes;
	if (payload.length > 250 * 1024 * 1024) throw new Error('Flux décompressé supérieur à 250 Mio.');
	const parsed = parseDelimited(payload.toString('utf8'));
	const headers = parsed[0] ? Object.keys(parsed[0].row) : [];
	for (const field of ['product_id', 'product_name', 'price', 'deep_link', 'image_url']) if (!headers.includes(field)) throw new Error(`Colonne Awin absente : ${field}`);
	if (Number.isNaN(Date.parse(collectedAt))) throw new Error('Date de collecte invalide.');
	const indexes = indexCatalog(catalog); const offers = []; const issues = []; const matches = []; const unmatchedSamples = []; const seen = new Set(); let unmatched = 0;
	for (const { line, row } of parsed) {
		const merchantProductId = row.product_id;
		const match = matchProduct(row, indexes);
		if (match.unmatched) { unmatched++; if (unmatchedSamples.length < 100) unmatchedSamples.push({ line, merchantProductId, identifiers: Object.fromEntries(Object.entries(match.identifiers).filter(([, value]) => value)) }); continue; }
		if (match.error) { issues.push({ line, merchantProductId, reason: match.error }); continue; }
		try {
			if (!merchantProductId || seen.has(merchantProductId)) throw new Error(merchantProductId ? 'duplicate_product_id' : 'missing_product_id');
			if (!row.product_name) throw new Error('missing_product_name');
			if ((row.currency || 'EUR').toUpperCase() !== 'EUR') throw new Error('non_eur_price');
			const priceEur = parseMoney(row.price); if (priceEur === undefined) throw new Error('invalid_price');
			const shippingEur = row.delivery_cost ? parseMoney(row.delivery_cost) : undefined;
			if (row.delivery_cost && shippingEur === undefined) throw new Error('invalid_delivery_cost');
			const url = validateLink(row.deep_link); const imageUrl = validateImage(row.image_url);
			seen.add(merchantProductId);
			offers.push({
				id: `manomano-fr-${createHash('sha256').update(merchantProductId).digest('hex').slice(0, 16)}`,
				productId: match.productId, merchantId: 'manomano-fr', merchantProductId, productName: row.product_name, imageUrl, url, priceEur,
				...(shippingEur === undefined ? {} : { shippingEur }), availability: availability(row), collectedAt,
				sourceId: `awin:${AWIN_ADVERTISER_ID}:${basename(fileName)}`, sourceChecksum: checksum,
				identifiers: Object.fromEntries(Object.entries(match.identifiers).filter(([, value]) => value)),
			});
			if (matches.length < 100) matches.push({ line, merchantProductId, productId: match.productId, matchedBy: match.matchedBy });
		} catch (error) { issues.push({ line, merchantProductId, reason: error instanceof Error ? error.message : 'invalid_row' }); }
	}
	const rejectionReasons = Object.fromEntries([...new Set(issues.map((issue) => issue.reason))].sort().map((reason) => [reason, issues.filter((issue) => issue.reason === reason).length]));
	return { offers, report: { generatedAt: collectedAt, sourceId: `awin:${AWIN_ADVERTISER_ID}:${basename(fileName)}`, sourceChecksum: checksum, rows: parsed.length, imported: offers.length, unmatched, rejected: issues.length, rejectionReasons, sampleLimits: { matches: 100, unmatched: 100 }, matches, unmatchedSamples, issues } };
}
