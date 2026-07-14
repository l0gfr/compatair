import { readFile } from 'node:fs/promises';

const [previousFile, currentFile] = process.argv.slice(2);
if (!previousFile || !currentFile) throw new Error('Usage: node scripts/assert-evidence-history-extension.mjs previous.json current.json');
const previous = JSON.parse(await readFile(previousFile, 'utf8'));
const current = JSON.parse(await readFile(currentFile, 'utf8'));
const errors = [];
if (previous.schemaVersion !== current.schemaVersion) errors.push('Le schéma de l’historique publié a changé.');
if (previous.startedAt !== current.startedAt) errors.push('La date de début de l’historique publié a changé.');
const currentById = new Map((current.events ?? []).map((event) => [event.id, event]));
for (const event of previous.events ?? []) {
	const candidate = currentById.get(event.id);
	if (!candidate) errors.push(`Événement publié supprimé : ${event.id}`);
	else if (JSON.stringify(candidate) !== JSON.stringify(event)) errors.push(`Événement publié modifié : ${event.id}`);
}
if ((current.events?.length ?? 0) < (previous.events?.length ?? 0)) errors.push('Le nouvel historique est plus court que la version publiée.');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Extension stricte vérifiée : ${previous.events.length} événement(s) publié(s), ${current.events.length} événement(s) candidat(s).`);
