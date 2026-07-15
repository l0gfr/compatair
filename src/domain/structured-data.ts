const htmlSensitiveCharacters = /[<>&\u2028\u2029]/g;
const escapedCharacters: Record<string, string> = {
	'<': '\\u003c',
	'>': '\\u003e',
	'&': '\\u0026',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029',
};

export function serializeJsonLd(value: unknown): string {
	const serialized = JSON.stringify(value);
	if (serialized === undefined) throw new TypeError('Les données structurées doivent être sérialisables en JSON.');
	return serialized.replace(htmlSensitiveCharacters, (character) => escapedCharacters[character]);
}
