import { resolve } from 'node:path';
import { compressorSchema, toolProfileSchema } from '../src/domain/catalog.ts';
import { productSeoTitles, toolUseSeoTitles } from '../src/data/product-seo-titles.ts';
import { addCatalogProduct, generateCatalogIndexes, validateCatalog } from './lib/catalog-tooling.mjs';

const root = resolve(import.meta.dirname, '..');
const [command = 'check', kind, draftPath] = process.argv.slice(2);
const schemas = { compressorSchema, toolProfileSchema };
if (command === 'check') {
	const count = await validateCatalog(root, schemas, productSeoTitles, toolUseSeoTitles);
	console.log(`Catalogue industrialisé valide : ${count} produit(s).`);
} else if (command === 'index') {
	await generateCatalogIndexes(root);
	console.log('Index compresseurs et outils régénérés.');
} else if (command === 'add') {
	if (!kind || !draftPath) throw new Error('Usage : pnpm catalog:add -- <compressors|tools> chemin/produit.json');
	const schema = kind === 'compressors' ? compressorSchema : kind === 'tools' ? toolProfileSchema : undefined;
	if (!schema) throw new Error('Le type doit être compressors ou tools.');
	console.log(`Produit ajouté : ${await addCatalogProduct(root, kind, draftPath, schema)}`);
} else throw new Error(`Commande inconnue : ${command}`);
