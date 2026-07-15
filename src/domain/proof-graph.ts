import type { Compressor, ToolProfile } from './catalog';
import { evaluateCompatibility, interpolateFad, type CompatibilityResult, type CompatibilityVerdict } from './compatibility';

export type ProofGraphLayer = 'verdict' | 'calculation' | 'field' | 'evidence' | 'version';
export type ProofGraphNode = {
	id: string;
	layer: ProofGraphLayer;
	kind: string;
	label: string;
	value: string;
	detail: string;
	url?: string;
};
export type ProofGraphEdge = { from: string; to: string; relation: string };
export type PublishedVerdictPair = {
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm?: number;
	availableFadLpm?: number;
	marginPercent?: number;
};

type Versions = { catalogVersion: string; verdictVersion: string; calculationVersion: string; verifiedAt: string };

const verdictLabels: Record<CompatibilityVerdict, string> = {
	continuous: 'Compatible en continu',
	intermittent: 'Compatible par intermittence',
	incompatible: 'Incompatible',
	insufficient_data: 'Données insuffisantes',
};
const formatNumber = (value: number | undefined, unit: string) => value === undefined ? 'Non disponible' : `${value.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} ${unit}`;
const shortVersion = (value: string) => value.length > 16 ? `${value.slice(0, 12)}…` : value;

export function createProofGraph(
	compressor: Compressor,
	tool: ToolProfile,
	versions: Versions,
	publishedPair?: PublishedVerdictPair,
) {
	const calculated = evaluateCompatibility(compressor, tool);
	const result = publishedPair ?? calculated;
	const nodes: ProofGraphNode[] = [];
	const edges: ProofGraphEdge[] = [];
	const nodeIds = new Set<string>();
	const addNode = (node: ProofGraphNode) => { if (!nodeIds.has(node.id)) { nodes.push(node); nodeIds.add(node.id); } };
	const addEdge = (from: string, to: string, relation: string) => edges.push({ from, to, relation });
	const evidenceNodes = new Map<string, string>();

	function addField(owner: 'compressor' | 'tool', fieldKey: string, label: string, value: string, detail: string) {
		const product = owner === 'compressor' ? compressor : tool;
		const fieldId = `field:${owner}:${fieldKey}`;
		addNode({ id: fieldId, layer: 'field', kind: fieldKey, label, value, detail });
		const evidenceIds = product.fieldSources[fieldKey] ?? [];
		if (!evidenceIds.length) {
			const missingId = `evidence:${owner}:${fieldKey}:missing`;
			addNode({ id: missingId, layer: 'evidence', kind: 'missing', label: 'Liaison documentaire absente', value: 'Aucune preuve liée au champ', detail: `Le catalogue ne déclare aucun evidenceId pour ${fieldKey}. Le graphe ne remplace pas cette liaison par la première source du produit.` });
			addEdge(missingId, fieldId, 'ne documente pas encore');
			return fieldId;
		}
		for (const evidenceId of evidenceIds) {
			const evidence = product.evidence.find((item) => item.id === evidenceId);
			if (!evidence) continue;
			const evidenceKey = `${owner}:${evidence.id}`;
			let evidenceNodeId = evidenceNodes.get(evidenceKey);
			if (!evidenceNodeId) {
				evidenceNodeId = `evidence:${evidenceKey}`;
				evidenceNodes.set(evidenceKey, evidenceNodeId);
				const evidenceOwner = owner === 'compressor' ? 'Compresseur' : 'Outil';
				addNode({ id: evidenceNodeId, layer: 'evidence', kind: evidence.sourceType, label: `${evidenceOwner} · ${evidence.sourceLabel}`, value: `Consultée le ${evidence.retrievedAt} · fiabilité ${evidence.confidence}`, detail: evidence.notes ?? 'Aucune note documentaire supplémentaire.', url: evidence.sourceUrl });
			}
			addEdge(evidenceNodeId, fieldId, 'documente');
		}
		return fieldId;
	}

	addNode({ id: 'verdict:published', layer: 'verdict', kind: result.verdict, label: 'Verdict publié', value: verdictLabels[result.verdict], detail: `Confiance ${result.confidence}. Facteur limitant : ${result.limitingFactor ?? 'aucun identifié'}.` });
	addNode({ id: 'calculation:required-fad', layer: 'calculation', kind: 'required-fad', label: 'FAD recommandé', value: formatNumber(result.requiredFadLpm, 'L/min'), detail: 'Consommation publiée de l’outil majorée par la réserve de dimensionnement sélectionnée.' });
	addNode({ id: 'calculation:available-fad', layer: 'calculation', kind: 'available-fad', label: 'FAD disponible', value: formatNumber(result.availableFadLpm, 'L/min'), detail: `Débit restitué recherché à ${tool.workingPressureBar.typical ?? 'une pression non documentée'} bar, sans extrapolation hors de la courbe publiée.` });
	addNode({ id: 'calculation:margin', layer: 'calculation', kind: 'margin', label: 'Écart au besoin brut', value: result.marginPercent === undefined ? 'Non calculable' : `${result.marginPercent.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} %`, detail: 'Écart entre le FAD disponible et la consommation brute publiée de l’outil.' });
	addEdge('calculation:required-fad', 'verdict:published', 'fixe le seuil');
	addEdge('calculation:available-fad', 'verdict:published', 'est comparé au seuil');
	addEdge('calculation:margin', 'verdict:published', 'explique la réserve');

	const airflow = tool.demandModel === 'fixed-flow' ? `${tool.airflowLpm.typical.toLocaleString('fr-FR')} L/min` : 'Débit minute non documenté';
	const airflowField = addField('tool', 'airflowLpm', 'Consommation de l’outil', airflow, `${tool.brand} ${tool.model} · modèle de demande ${tool.demandModel}.`);
	const pressureField = addField('tool', 'workingPressureBar', 'Pression de travail', tool.workingPressureBar.typical === undefined ? 'Non documentée' : `${tool.workingPressureBar.typical.toLocaleString('fr-FR')} bar`, 'La pression sert à choisir le point FAD comparable sur le compresseur.');
	const curveField = addField('compressor', 'fadCurve', 'Courbe FAD du compresseur', compressor.fadCurve.length ? compressor.fadCurve.map((point) => `${point.litersPerMinute} L/min à ${point.pressureBar} bar`).join(' · ') : 'Aucun point publié', 'Seuls les points documentés et l’interpolation entre deux points sont autorisés.');
	const maxPressureField = addField('compressor', 'maxPressureBar', 'Pression maximale', `${compressor.maxPressureBar.toLocaleString('fr-FR')} bar`, 'Une pression maximale inférieure au besoin rend la configuration incompatible.');
	addEdge(airflowField, 'calculation:required-fad', 'alimente');
	addEdge(pressureField, 'calculation:available-fad', 'sélectionne la pression');
	addEdge(curveField, 'calculation:available-fad', 'permet interpolation ou valeur exacte');
	addEdge(maxPressureField, 'verdict:published', 'borne la pression');

	addNode({ id: 'version:catalog', layer: 'version', kind: 'catalog', label: 'Version du catalogue', value: shortVersion(versions.catalogVersion), detail: versions.catalogVersion });
	addNode({ id: 'version:verdict', layer: 'version', kind: 'verdict', label: 'Version des verdicts', value: shortVersion(versions.verdictVersion), detail: versions.verdictVersion });
	addNode({ id: 'version:calculation', layer: 'version', kind: 'calculation', label: 'Version du calcul', value: versions.calculationVersion, detail: `Méthode de calcul ${versions.calculationVersion}.` });
	addNode({ id: 'version:verified-at', layer: 'version', kind: 'date', label: 'Catalogue vérifié le', value: versions.verifiedAt, detail: 'Date d’édition du snapshot de catalogue utilisé par le verdict.' });
	addEdge('version:catalog', 'verdict:published', 'fige les champs');
	addEdge('version:verdict', 'verdict:published', 'identifie le snapshot');
	addEdge('version:calculation', 'calculation:required-fad', 'définit la formule');
	addEdge('version:verified-at', 'version:catalog', 'date');

	const recalculatedMatchesSnapshot = !publishedPair || ['verdict', 'requiredFadLpm', 'availableFadLpm', 'marginPercent'].every((key) => {
		const published = publishedPair[key as keyof PublishedVerdictPair];
		const current = calculated[key as keyof CompatibilityResult];
		return typeof published === 'number' && typeof current === 'number' ? Math.abs(published - current) < 1e-9 : published === current;
	});

	return {
		schemaVersion: '1.0.0' as const,
		compressor: { id: compressor.id, label: `${compressor.brand} ${compressor.model}` },
		tool: { id: tool.id, label: tool.label },
		result,
		nodes,
		edges,
		recalculatedMatchesSnapshot,
		simulationDefaults: {
			compressorFadLpm: interpolateFad(compressor, tool.workingPressureBar.typical ?? -1),
			toolAirflowLpm: tool.demandModel === 'fixed-flow' ? tool.airflowLpm.typical : undefined,
			toolPressureBar: tool.workingPressureBar.typical,
			safetyMarginPercent: 25,
		},
	};
}

export type ProofCorrectionTarget = 'compressor-fad' | 'tool-airflow' | 'tool-pressure' | 'safety-margin';

export function simulateProofCorrection(compressor: Compressor, tool: ToolProfile, target: ProofCorrectionTarget, rawValue: number) {
	if (!Number.isFinite(rawValue) || rawValue <= 0) throw new Error('La valeur simulée doit être un nombre strictement positif.');
	let simulatedCompressor = compressor;
	let simulatedTool = tool;
	let safetyMargin = .25;
	let change = '';
	if (target === 'compressor-fad') {
		const pressure = tool.workingPressureBar.typical;
		if (pressure === undefined) throw new Error('La pression de travail doit être documentée pour simuler un point FAD.');
		simulatedCompressor = { ...compressor, fadCurve: [...compressor.fadCurve.filter((point) => point.pressureBar !== pressure), { pressureBar: pressure, litersPerMinute: rawValue }].sort((a, b) => a.pressureBar - b.pressureBar) };
		change = `Point FAD simulé : ${rawValue} L/min à ${pressure} bar.`;
	} else if (target === 'tool-airflow') {
		if (tool.demandModel !== 'fixed-flow') throw new Error('Cet outil ne possède pas de débit minute corrigeable.');
		simulatedTool = { ...tool, airflowLpm: { min: Math.min(tool.airflowLpm.min, rawValue), typical: rawValue, max: Math.max(tool.airflowLpm.max, rawValue) } };
		change = `Consommation simulée : ${rawValue} L/min.`;
	} else if (target === 'tool-pressure') {
		if (tool.workingPressureBar.typical === undefined) throw new Error('Cet outil ne possède pas de pression nominale corrigeable.');
		simulatedTool = { ...tool, workingPressureBar: { ...tool.workingPressureBar, min: Math.min(tool.workingPressureBar.min ?? rawValue, rawValue), typical: rawValue, max: Math.max(tool.workingPressureBar.max, rawValue) } } as ToolProfile;
		change = `Pression de travail simulée : ${rawValue} bar.`;
	} else {
		if (rawValue > 100) throw new Error('La réserve simulée ne peut pas dépasser 100 %.');
		safetyMargin = rawValue / 100;
		change = `Réserve simulée : ${rawValue} %.`;
	}
	return { change, result: evaluateCompatibility(simulatedCompressor, simulatedTool, { safetyMargin }) };
}
