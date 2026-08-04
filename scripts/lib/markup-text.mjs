const XML_ENTITIES = new Map([
	['&amp;', '&'],
	['&lt;', '<'],
	['&gt;', '>'],
	['&quot;', '"'],
	['&apos;', "'"],
]);

export function decodeXmlEntities(value) {
	let decoded = '';
	for (let index = 0; index < value.length;) {
		if (value[index] !== '&') {
			decoded += value[index];
			index += 1;
			continue;
		}
		let semicolon = -1;
		for (let cursor = index + 1; cursor < value.length && cursor <= index + 6; cursor += 1) {
			if (value[cursor] === ';') { semicolon = cursor; break; }
		}
		const entity = semicolon === -1 ? undefined : value.slice(index, semicolon + 1);
		const replacement = entity === undefined ? undefined : XML_ENTITIES.get(entity);
		if (replacement === undefined) {
			decoded += '&';
			index += 1;
			continue;
		}
		decoded += replacement;
		index = semicolon + 1;
	}
	return decoded;
}

function findTagEnd(html, start) {
	let quote;
	for (let index = start; index < html.length; index += 1) {
		const character = html[index];
		if (quote) {
			if (character === quote) quote = undefined;
			continue;
		}
		if (character === '"' || character === "'") quote = character;
		else if (character === '>') return index;
	}
	return -1;
}

function findH1OpeningTag(html) {
	const lower = html.toLowerCase();
	let offset = 0;
	while (offset < lower.length) {
		const start = lower.indexOf('<h1', offset);
		if (start === -1) return undefined;
		const boundary = lower[start + 3];
		if (boundary === '>' || boundary === ' ' || boundary === '\t' || boundary === '\n' || boundary === '\r' || boundary === '\f') {
			const end = findTagEnd(html, start + 3);
			if (end !== -1) return { lower, bodyStart: end + 1 };
			return undefined;
		}
		offset = start + 3;
	}
	return undefined;
}

function stripMarkup(value) {
	let text = '';
	let tagEnd = -1;
	for (let index = 0; index < value.length; index += 1) {
		if (value[index] !== '<') {
			text += value[index];
			continue;
		}
		tagEnd = findTagEnd(value, index + 1);
		if (tagEnd === -1) break;
		index = tagEnd;
	}
	return text;
}

export function extractH1Text(html) {
	const opening = findH1OpeningTag(html);
	if (!opening) return '';
	const closeStart = opening.lower.indexOf('</h1', opening.bodyStart);
	if (closeStart === -1) return '';
	const boundary = opening.lower[closeStart + 4];
	if (!(boundary === '>' || boundary === ' ' || boundary === '\t' || boundary === '\n' || boundary === '\r' || boundary === '\f')) return '';
	if (findTagEnd(html, closeStart + 4) === -1) return '';
	return stripMarkup(html.slice(opening.bodyStart, closeStart));
}
