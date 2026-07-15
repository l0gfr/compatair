import { readFile, readdir, rename, writeFile } from 'node:fs/promises';
import { request as httpRequest } from 'node:http';
import { basename, resolve } from 'node:path';
import YAML from 'yaml';

const root = resolve(process.cwd(), 'src/content/guides');
const output = resolve(process.cwd(), 'src/data/agent-guides.en.generated.json');
const endpoint = process.env.OLLAMA_URL ?? 'http://127.0.0.1:11434/api/generate';
const model = process.env.OLLAMA_TRANSLATION_MODEL ?? 'qwen3.6:latest';

function postJson(url, value) {
	return new Promise((resolve, reject) => {
		const body = JSON.stringify(value);
		const request = httpRequest(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
		}, (response) => {
			const chunks = [];
			response.on('data', (chunk) => chunks.push(chunk));
			response.on('end', () => {
				const text = Buffer.concat(chunks).toString('utf8');
				if (response.statusCode !== 200) reject(new Error(`Ollama HTTP ${response.statusCode}: ${text.slice(0, 500)}`));
				else { try { resolve(JSON.parse(text)); } catch (error) { reject(error); } }
			});
			response.on('error', reject);
		});
		request.setTimeout(15 * 60 * 1_000, () => request.destroy(new Error('Ollama translation timeout')));
		request.on('error', reject);
		request.end(body);
	});
}

function splitGuide(source, file) {
	const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) throw new Error(`${file}: frontmatter unreadable`);
	return { data: YAML.parse(match[1]), body: match[2].trim() };
}

function occurrences(value, expression) {
	return [...value.matchAll(expression)].map((match) => match[0]).sort();
}

function assertPreserved(source, translated, id) {
	const invariants = [
		['absolute URLs', /https?:\/\/[^\s)"'<>]+/g],
		['internal paths', /\/(?:guides|glossaire|compresseurs|outils-pneumatiques|calculateur|graphe-preuve)\/[A-Za-z0-9_?&=#%./-]*/g],
		['numeric tokens', /\d+(?:[.,]\d+)?/g],
		['HTML tags', /<\/?[A-Za-z][^>]*>/g],
	];
	for (const [label, expression] of invariants) {
		const before = occurrences(source, expression);
		const after = occurrences(translated, expression);
		if (JSON.stringify(before) !== JSON.stringify(after)) throw new Error(`${id}: ${label} changed`);
	}
	if (translated.length < source.length * .55 || translated.length > source.length * 1.8) throw new Error(`${id}: suspicious translated length`);
	if (translated.includes('```') && occurrences(source, /```/g).length !== occurrences(translated, /```/g).length) throw new Error(`${id}: code fences changed`);
}

async function translate(id, title, description, body) {
	const prompt = `You are translating a source-backed technical guide about compressed-air systems from French to English for machine consumption.

Return JSON only with exactly these keys: title, description, bodyMarkdown.

Hard constraints:
- Translate all French prose, headings, link labels, SVG title/desc/text nodes and list items into precise technical English.
- Preserve every number byte-for-byte, including decimal commas, units, formulas, standards and dates.
- Preserve Markdown, inline HTML, SVG structure, attributes, IDs, URLs, internal paths and code byte-for-byte except for human-readable text nodes.
- Do not add, remove, summarize, correct, reinterpret or soften any statement.
- Preserve the distinction between intake displacement and delivered free air/FAD.
- Preserve all uncertainty, insufficient-data boundaries and source attribution.
- Do not add a translator note or frontmatter.

SOURCE TITLE:
${title}

SOURCE DESCRIPTION:
${description}

SOURCE MARKDOWN:
${body}`;
	const envelope = await postJson(endpoint, {
			model,
			prompt,
			stream: false,
			think: false,
			format: {
				type: 'object',
				required: ['title', 'description', 'bodyMarkdown'],
				properties: { title: { type: 'string' }, description: { type: 'string' }, bodyMarkdown: { type: 'string' } },
				additionalProperties: false,
			},
			options: { temperature: 0.1, num_ctx: 32768 },
		});
	const result = JSON.parse(envelope.response);
	if (!result.title?.trim() || !result.description?.trim() || !result.bodyMarkdown?.trim()) throw new Error(`${id}: incomplete translation`);
	assertPreserved(`${title}\n${description}`, `${result.title}\n${result.description}`, `${id}:metadata`);
	assertPreserved(body, result.bodyMarkdown, id);
	return result;
}

const files = (await readdir(root)).filter((file) => file.endsWith('.md')).sort();
let translated = [];
try { translated = JSON.parse(await readFile(output, 'utf8')); } catch {}
const completed = new Set(translated.map((guide) => guide.sourceId));

for (const file of files) {
	const id = basename(file, '.md');
	if (completed.has(id)) continue;
	const { data, body } = splitGuide(await readFile(resolve(root, file), 'utf8'), file);
	const result = await translate(id, data.title, data.description, body);
	translated.push({
		sourceId: id,
		title: result.title.trim(),
		description: result.description.trim(),
		bodyMarkdown: result.bodyMarkdown.trim(),
		sourceUrls: data.sources,
		translationStatus: 'machine_translated_unreviewed',
	});
	translated.sort((left, right) => left.sourceId.localeCompare(right.sourceId));
	const temporary = `${output}.tmp`;
	await writeFile(temporary, `${JSON.stringify(translated, null, 2)}\n`, { mode: 0o644 });
	await rename(temporary, output);
	console.log(`${translated.length}/${files.length} ${id}`);
}

console.log(`Translations complete: ${translated.length}/${files.length}`);
