import { compressors, tools } from './catalog';
import { DIRECTORY_PAGE_SIZE } from '../domain/pagination';
import { sourceRoleForEvidence } from '../domain/catalog-normalization';

type Source = (typeof compressors)[number]['evidence'][number];

export const sourceConfidencePriority: Record<Source['confidence'], number> = { A: 0, B: 1, C: 2, D: 3 };
export const sourceTypePriority: Record<Source['sourceType'], number> = { manufacturer: 0, manual: 1, measured: 2, merchant: 3 };
export const sourceTypeLabel: Record<Source['sourceType'], string> = {
	manufacturer: 'Documentation constructeur',
	manual: 'Manuel constructeur',
	measured: 'Mesure documentée',
	merchant: 'Source marchande',
};
export const sourceRoleLabel = {
	primary: 'Source primaire',
	independent_corroboration: 'Corroboration indépendante',
	secondary: 'Source secondaire',
} as const;

const evidence = [...compressors.flatMap((item) => item.evidence), ...tools.flatMap((item) => item.evidence)];

export const sourceDirectory = [...new Map(evidence.map((source) => [source.id, source])).values()]
	.sort((a, b) => sourceConfidencePriority[a.confidence] - sourceConfidencePriority[b.confidence]
		|| sourceTypePriority[a.sourceType] - sourceTypePriority[b.sourceType]
		|| b.retrievedAt.localeCompare(a.retrievedAt)
		|| a.sourceLabel.localeCompare(b.sourceLabel, 'fr-FR', { sensitivity: 'base' })
		|| a.id.localeCompare(b.id));

export const sourceDirectoryTotalPages = Math.ceil(sourceDirectory.length / DIRECTORY_PAGE_SIZE);
export const sourceDirectoryCounts = Object.fromEntries(['A', 'B', 'C', 'D'].map((confidence) => [confidence, sourceDirectory.filter((source) => source.confidence === confidence).length])) as Record<Source['confidence'], number>;
export const sourceRoleCounts = Object.fromEntries(['primary', 'independent_corroboration', 'secondary'].map((role) => [role, sourceDirectory.filter((source) => sourceRoleForEvidence(source) === role).length])) as Record<ReturnType<typeof sourceRoleForEvidence>, number>;
