import { mkdir, readFile, rename, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { writeCatalogDatabase } from '../server/catalog-repository.mjs';
const directory = resolve('dist/_server');
await mkdir(directory, { recursive: true });
const temporary = resolve(directory, 'catalog.sqlite.partial');
await rm(temporary, { force: true });
const catalog = JSON.parse(await readFile('dist/data/catalog.json', 'utf8'));
const knowledge = JSON.parse(await readFile('dist/data/search-index.json', 'utf8'));
try {
 const metadata = writeCatalogDatabase(temporary, catalog, knowledge);
 await rename(temporary, resolve(directory, 'catalog.sqlite'));
 console.log(`Catalogue indexé : ${metadata.count} références, moteur ${metadata.calculationVersion}.`);
} finally { await rm(temporary, { force: true }); }
