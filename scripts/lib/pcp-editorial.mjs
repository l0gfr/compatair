import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assessGuideValue } from './page-value.mjs';
import { editorialText } from './indexation-planner.mjs';
import { indexationDay } from './indexation-policy.mjs';

export const pcpEditorialInputPaths = [
	'src/data/pcp-editorial.ts',
	'src/data/pcp.ts',
	'src/pages/pcp/index.astro',
	'src/components/PcpReferenceCard.astro',
	'src/layouts/BaseLayout.astro',
	'src/styles/global.css',
];

const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const slug = value => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

function assertSource(source, today) {
	if (!source || !nonempty(source.label) || typeof source.url !== 'string') throw new Error('Source éditoriale PCP absente.');
	let url;
	try { url = new URL(source.url); } catch { throw new Error('URL de source PCP invalide.'); }
	if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Source PCP HTTPS sans identifiants requise.');
	if (typeof source.checkedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt)) throw new Error('Date de source PCP invalide.');
	const date = new Date(`${source.checkedAt}T12:00:00Z`);
	if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== source.checkedAt || source.checkedAt > today) throw new Error('Date de source PCP invalide ou future.');
}

// The only PCP admission is this editorial hub. Brief reference dossiers remain
// outside the candidate set, and never inherit the hub's indexability.
export function pcpEditorialCandidate({ editorial, references, guides, inputs, now = new Date() }) {
	const today = indexationDay(now);
	const fields = ['title', 'description', 'lead', 'scopeTitle', 'scopeText', 'readingTitle', 'methodTitle', 'methodText', 'limitsText'];
	if (!editorial || fields.some(field => !nonempty(editorial[field])) || !Array.isArray(editorial.paragraphs) || !editorial.paragraphs.length) throw new Error('Contenu éditorial PCP incomplet.');
	for (const paragraph of editorial.paragraphs) {
		if (!nonempty(paragraph.text)) throw new Error('Paragraphe PCP vide.');
		assertSource(paragraph.source, today);
	}
	if (!Array.isArray(references) || !references.length || !Array.isArray(guides) || !guides.length) throw new Error('Références ou guides PCP absents.');
	const slugs = new Set();
	for (const reference of references) {
		if (!slug(reference.slug) || slugs.has(reference.slug) || !nonempty(reference.brand) || !nonempty(reference.model) || !nonempty(reference.summary)
			|| !['airgun', 'hand-pump', 'compressor'].includes(reference.kind) || !Array.isArray(reference.facts) || !reference.facts.length
			|| !Array.isArray(reference.unavailable) || !reference.unavailable.length || reference.unavailable.some(value => !nonempty(value))
			|| !Array.isArray(reference.sources) || !reference.sources.length) throw new Error('Référence documentaire PCP incomplète ou dupliquée.');
		slugs.add(reference.slug);
		const sourceIds = new Set();
		for (const source of reference.sources) {
			assertSource(source, today);
			if (!nonempty(source.id) || sourceIds.has(source.id)) throw new Error('Identifiant de source PCP absent ou dupliqué.');
			sourceIds.add(source.id);
		}
		for (const fact of reference.facts) if (!nonempty(fact.label) || !nonempty(fact.value) || !sourceIds.has(fact.sourceId)) throw new Error('Caractéristique PCP sans provenance résolue.');
	}
	const guideSlugs = new Set();
	for (const guide of guides) {
		if (!slug(guide.slug) || guideSlugs.has(guide.slug) || !nonempty(guide.title) || !nonempty(guide.description)) throw new Error('Guide PCP invalide ou dupliqué.');
		guideSlugs.add(guide.slug);
	}
	if (!inputs || pcpEditorialInputPaths.some(path => !nonempty(inputs[path]))) throw new Error('Entrée de rendu PCP absente.');
	const sources = [...new Set([...editorial.paragraphs.map(paragraph => paragraph.source.url), ...references.flatMap(reference => reference.sources.map(source => source.url))])];
	const markdown = [
		editorial.lead, `## ${editorial.scopeTitle}`, editorial.scopeText,
		`## ${editorial.readingTitle}`,
		...editorial.paragraphs.map(paragraph => `${paragraph.text} [${paragraph.source.label}](${paragraph.source.url})`),
		'## Armes à air précomprimé et équipements de remplissage',
		...references.map(reference => `[${reference.brand} ${reference.model}](/pcp/${reference.slug}/) : ${reference.summary}`),
		'## Avant de comparer les fiches',
		...guides.map(guide => `[${guide.title}](/guides/${guide.slug}/) : ${guide.description}`),
		`## ${editorial.methodTitle}`, editorial.methodText, editorial.limitsText,
	].join('\n\n');
	const value = assessGuideValue({ title: editorial.title, description: editorial.description, sources }, markdown);
	// Render source files belong only to the complete fingerprint. Text comparison
	// above uses the shared visible copy, never imports, Astro syntax or CSS.
	value.contentHash = digest({ editorial, references, guides, inputs });
	return { path: '/pcp/', family: 'guides', topic: 'PCP:documentation', text: editorialText(markdown), identities: [], value, blockedReason: value.reasons[0] };
}

export async function collectPcpEditorialCandidate(root, { now = new Date() } = {}) {
	const inputs = Object.fromEntries(await Promise.all(pcpEditorialInputPaths.map(async path => [path, await readFile(join(root, path), 'utf8')])));
	const importInput = async path => {
		const url = pathToFileURL(join(root, path));
		url.searchParams.set('content', digest(inputs[path]));
		return import(url.href);
	};
	const [{ pcpEditorial }, { pcpReferences, pcpGuides }] = await Promise.all([importInput('src/data/pcp-editorial.ts'), importInput('src/data/pcp.ts')]);
	return pcpEditorialCandidate({ editorial: pcpEditorial, references: pcpReferences, guides: pcpGuides, inputs, now });
}
