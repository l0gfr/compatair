import { access, readdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises';
import { basename, extname, join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const KINDS = { compressors: { exportName: 'rawCompressors' }, tools: { exportName: 'rawTools' } };
export const MAX_PRODUCT_IMAGE_BYTES = 250 * 1024;
export const MAX_PRODUCT_IMAGE_DIMENSION = 1600;
export const PRODUCT_IMAGE_WEBP_QUALITY = 82;

export function productImageSizeError(productId, imageSrc, bytes) {
	if (bytes <= MAX_PRODUCT_IMAGE_BYTES) return null;
	return `Image produit trop lourde : ${productId} ${imageSrc} (${Math.ceil(bytes / 1024)} Ko, maximum ${MAX_PRODUCT_IMAGE_BYTES / 1024} Ko). Optimiser l’image avant publication.`;
}

export async function optimizeImportedProductImage(root, product) {
	const relativeImagePath = product.image.src.replace(/^\/+/, '');
	const productImagesRoot = resolve(root, 'public/images/products');
	const sourcePath = resolve(root, 'public', relativeImagePath);
	if (!sourcePath.startsWith(`${productImagesRoot}${sep}`)) {
		throw new Error(`L’image importée doit se trouver dans /images/products : ${product.image.src}`);
	}

	const sourceInfo = await stat(sourcePath);
	const { default: sharp } = await import('sharp');
	const metadata = await sharp(sourcePath).metadata();
	const alreadyOptimized = extname(sourcePath).toLowerCase() === '.webp'
		&& sourceInfo.size <= MAX_PRODUCT_IMAGE_BYTES
		&& (metadata.width ?? 0) <= MAX_PRODUCT_IMAGE_DIMENSION
		&& (metadata.height ?? 0) <= MAX_PRODUCT_IMAGE_DIMENSION;
	if (alreadyOptimized) return product.image.src;

	const targetPath = sourcePath.slice(0, -extname(sourcePath).length) + '.webp';
	const temporaryPath = `${targetPath}.import-${process.pid}-${Date.now()}`;
	if (targetPath !== sourcePath) {
		try {
			await access(targetPath);
			throw new Error(`L’image optimisée existe déjà : ${targetPath}`);
		} catch (error) {
			if (error.code !== 'ENOENT') throw error;
		}
	}

	try {
		await sharp(sourcePath)
			.rotate()
			.resize({
				width: MAX_PRODUCT_IMAGE_DIMENSION,
				height: MAX_PRODUCT_IMAGE_DIMENSION,
				fit: 'inside',
				withoutEnlargement: true,
			})
			.webp({ quality: PRODUCT_IMAGE_WEBP_QUALITY, alphaQuality: 100, smartSubsample: true, effort: 6 })
			.toFile(temporaryPath);
		const optimizedInfo = await stat(temporaryPath);
		const sizeError = productImageSizeError(product.id, product.image.src, optimizedInfo.size);
		if (sizeError) throw new Error(sizeError);
		await rename(temporaryPath, targetPath);
		if (targetPath !== sourcePath) await unlink(sourcePath);
	} catch (error) {
		await unlink(temporaryPath).catch(() => {});
		throw error;
	}

	product.image.src = `/${relativeImagePath.slice(0, -extname(relativeImagePath).length)}.webp`;
	return product.image.src;
}

export function buildCatalogIndexSource(kind, files) {
	const exportName = KINDS[kind]?.exportName;
	if (!exportName) throw new Error(`Type de catalogue inconnu : ${kind}`);
	const names = files.map((file) => basename(file, '.ts')).sort();
	const imports = names.map((name, index) => `import product${index + 1} from './${name}';`).join('\n');
	const entries = names.map((_, index) => `\tproduct${index + 1},`).join('\n');
	return `${imports}\n\n// Raw records are validated by the catalog schema before use.\nexport const ${exportName} = Array.of<unknown>(\n${entries}\n);\n`;
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
	const errors = []; const allIds = new Set(); const evidenceById = new Map();
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
			try {
				const imageInfo = await stat(resolve(root, 'public', product.image.src.replace(/^\//, '')));
				const sizeError = productImageSizeError(product.id, product.image.src, imageInfo.size);
				if (sizeError) errors.push(sizeError);
			} catch { errors.push(`Image locale absente : ${product.id} ${product.image.src}`); }
			const evidenceIds = new Set(product.evidence.map((item) => item.id));
			for (const [field, ids] of Object.entries(product.fieldSources)) for (const id of ids) if (!evidenceIds.has(id)) errors.push(`Source de champ inconnue : ${product.id}.${field} -> ${id}`);
			const criticalFields = kind === 'compressors' ? ['fadCurve', 'maxPressureBar'] : ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : [])];
			for (const field of criticalFields) if (!(product.fieldSources[field]?.length)) errors.push(`Source explicite absente pour le champ critique : ${product.id}.${field}`);
			for (const specification of product.specifications) {
				for (const id of specification.evidenceIds) if (!evidenceIds.has(id)) errors.push(`Source de spécification inconnue : ${product.id}.${specification.label} -> ${id}`);
			}
			for (const evidence of product.evidence) {
				if (!evidence.sourceUrl.startsWith('https://')) errors.push(`Source non HTTPS : ${product.id}/${evidence.id}`);
				const serialized = JSON.stringify(evidence);
				const previous = evidenceById.get(evidence.id);
				if (previous && previous !== serialized) errors.push(`Identifiant de preuve réutilisé avec un contenu différent : ${evidence.id}`);
				evidenceById.set(evidence.id, serialized);
			}
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
	await optimizeImportedProductImage(root, product);
	await writeFile(target, `const product = ${JSON.stringify(product, null, 2)};\n\nexport default product;\n`, { flag: 'wx' });
	await generateCatalogIndexes(root);
	return target;
}
