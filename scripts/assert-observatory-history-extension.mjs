import { readFile } from 'node:fs/promises';

const [previousFile, currentFile] = process.argv.slice(2);
if (!previousFile || !currentFile) throw new Error('Usage: node scripts/assert-observatory-history-extension.mjs previous.json current.json');
const previousDocument = JSON.parse(await readFile(previousFile, 'utf8'));
const currentDocument = JSON.parse(await readFile(currentFile, 'utf8'));
const historyOf = (document) => document.measurementProgram?.history ?? document.snapshots;
const previous = historyOf(previousDocument);
const current = historyOf(currentDocument);
const errors = [];
if (!Array.isArray(current) || !current.length || current[0]?.kind !== 'baseline') errors.push('Historique mensuel candidat absent ou sans ligne de base.');
else if (!Array.isArray(previous)) {
	console.log(`Initialisation mensuelle vérifiée : ${current.length} snapshot(s) candidat(s).`);
	process.exit(0);
} else {
	for (let index = 0; index < previous.length; index += 1) {
		if (!current[index]) errors.push(`Snapshot mensuel supprimé : ${previous[index].period}`);
		else if (JSON.stringify(current[index]) !== JSON.stringify(previous[index])) errors.push(`Snapshot mensuel publié modifié : ${previous[index].period}`);
	}
	if (current.length < previous.length) errors.push('Le nouvel historique mensuel est plus court que la version publiée.');
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Extension mensuelle stricte vérifiée : ${previous.length} snapshot(s) publié(s), ${current.length} snapshot(s) candidat(s).`);
