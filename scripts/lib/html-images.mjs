import { createRequire } from 'node:module';

// Use the maintained HTML parser already declared by Astro's checking tools.
const checkDependencies = createRequire(import.meta.resolve('@astrojs/check'));
const languageServerDependencies = createRequire(checkDependencies.resolve('@astrojs/language-server'));
const { getLanguageService, TextDocument } = languageServerDependencies('vscode-html-languageservice');
const htmlService = getLanguageService();

function attributeValue(value) {
	if (value === null) return '';
	if ((value[0] === '"' || value[0] === "'") && value.at(-1) === value[0]) return value.slice(1, -1);
	return value;
}

function dimension(value) {
	return value !== undefined && /^\d+$/.test(value) ? Number(value) : undefined;
}

export function extractHtmlImages(html) {
	if (!html.toLowerCase().includes('<img')) return [];
	const document = TextDocument.create('file:///audit.html', 'html', 0, html);
	const pending = htmlService.parseHTMLDocument(document).roots.toReversed();
	const images = [];
	while (pending.length) {
		const node = pending.pop();
		if (node.tag?.toLowerCase() === 'img') {
			const attributes = new Map();
			for (const [name, value] of Object.entries(node.attributes ?? {})) {
				const normalized = name.toLowerCase();
				if (!attributes.has(normalized)) attributes.set(normalized, attributeValue(value));
			}
			images.push({ alt: attributes.get('alt'), source: attributes.get('src'), width: dimension(attributes.get('width')), height: dimension(attributes.get('height')) });
		}
		pending.push(...node.children.toReversed());
	}
	return images;
}
