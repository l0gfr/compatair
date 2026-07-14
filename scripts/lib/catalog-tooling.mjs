import { access, readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const KINDS = { compressors: { exportName: 'rawCompressors' }, tools: { exportName: 'rawTools' } };

export function buildCatalogIndexSource(kind, files) {
	const exportName = KINDS[kind]?.exportName;
	if (!exportName) throw new Error(`Type de catalogue inconnu : ${kind}`);
	const names = files.map((file) => basename(file, '.ts')).sort();
	const imports = names.map((name, index) => `import product${index + 1} from './${name}';`).join('\n');
	const entries = names.map((_, index) => `\tproduct${index + 1},`).join('\n');
	return `${imports}\n\nexport const ${exportName} = [\n${entries}\n];\n`;
}

export async function loadCatalogProducts(root, kind) {
	if (!KINDS[kind]) throw new Error(`Type de catalogue inconnu : ${kind}`);
	const directory = resolve(root, 'src/data/products', kind);
	const files = (await readdir(directory)).filter((file) => file.endsWith('.ts') && file !== 'index.ts').sort();
	const products = [];
	for (const file of files) products.push({ file, product: (await import(`${pathToFileURL(join(directory, file)).href}?catalog-check=${Date.now()}`)).default });
	return { directory, files, products };
}

export async function validateCatalog(root, schemas, seoTitles, toolUseSeoTitles) {
	const errors = []; const allIds = new Set();
	for (const kind of Object.keys(KINDS)) {
		const { directory, files, products } = await loadCatalogProducts(root, kind);
		const expectedIndex = buildCatalogIndexSource(kind, files);
		const currentIndex = await readFile(join(directory, 'index.ts'), 'utf8');
		if (currentIndex !== expectedIndex) errors.push(`${kind}/index.ts n’est pas synchronisé. Exécuter pnpm catalog:index.`);
		for (const { file, product: raw } of products) {
			const parsed = (kind === 'compressors' ? schemas.compressorSchema : schemas.toolProfileSchema).safeParse(raw);
			if (!parsed.success) { errors.push(`${kind}/${file}: ${parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ')}`); continue; }
			const product = parsed.data;
			if (file !== `${product.slug}.ts`) errors.push(`${kind}/${file}: le fichier doit suivre le slug ${product.slug}.ts`);
			if (allIds.has(product.id)) errors.push(`Identifiant produit dupliqué : ${product.id}`); allIds.add(product.id);
			if (!seoTitles[product.id]) errors.push(`Titre SEO éditorial absent : ${product.id}`);
			else if (seoTitles[product.id].length > 60) errors.push(`Titre SEO supérieur à 60 caractères : ${product.id}`);
			if (kind === 'tools' && !toolUseSeoTitles[product.id]) errors.push(`Titre SEO éditorial d’usage absent : ${product.id}`);
			else if (kind === 'tools' && toolUseSeoTitles[product.id].length > 60) errors.push(`Titre SEO d’usage supérieur à 60 caractères : ${product.id}`);
			try { await access(resolve(root, 'public', product.image.src.replace(/^\//, ''))); } catch { errors.push(`Image locale absente : ${product.id} ${product.image.src}`); }
			const evidenceIds = new Set(product.evidence.map((item) => item.id));
			for (const [field, ids] of Object.entries(product.fieldSources)) for (const id of ids) if (!evidenceIds.has(id)) errors.push(`Source de champ inconnue : ${product.id}.${field} -> ${id}`);
			for (const evidence of product.evidence) if (!evidence.sourceUrl.startsWith('https://')) errors.push(`Source non HTTPS : ${product.id}/${evidence.id}`);
		}
	}
	if (errors.length) throw new Error(errors.join('\n'));
	return allIds.size;
}

export async function generateCatalogIndexes(root) {
	for (const kind of Object.keys(KINDS)) {
		const directory = resolve(root, 'src/data/products', kind);
		const files = (await readdir(directory)).filter((file) => file.endsWith('.ts') && file !== 'index.ts');
		await writeFile(join(directory, 'index.ts'), buildCatalogIndexSource(kind, files));
	}
}

export async function addCatalogProduct(root, kind, draftPath, schema) {
	if (!KINDS[kind]) throw new Error('Le type doit être compressors ou tools.');
	const draft = JSON.parse(await readFile(resolve(draftPath), 'utf8'));
	const product = schema.parse(draft);
	const target = resolve(root, 'src/data/products', kind, `${product.slug}.ts`);
	try { await access(target); throw new Error(`Le produit existe déjà : ${target}`); } catch (error) { if (error.code !== 'ENOENT') throw error; }
	await writeFile(target, `const product = ${JSON.stringify(product, null, 2)};\n\nexport default product;\n`, { flag: 'wx' });
	await generateCatalogIndexes(root);
	return target;
}
