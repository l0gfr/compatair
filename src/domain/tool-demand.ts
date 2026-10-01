import type { ToolProfile } from './catalog';

export type FixedFlowTool = Extract<ToolProfile, { demandModel: 'fixed-flow' }>;

export function isFixedFlowTool(tool: ToolProfile): tool is FixedFlowTool {
	return tool.demandModel === 'fixed-flow';
}

export function toolDemandLabel(tool: ToolProfile): string {
	if (tool.demandModel === 'fixed-flow') {
		if (tool.airflowBasis === 'unqualified') return `${tool.airflowLpm.typical} L/min, régime non documenté`;
		if (tool.airflowBasis === 'free-speed') return `${tool.airflowLpm.typical} L/min à vide, maximum en charge non établi`;
		if (tool.airflowBasis === 'average') return `${tool.airflowLpm.typical} L/min en moyenne`;
		return tool.airflowLpm.min === tool.airflowLpm.max
			? `${tool.airflowLpm.typical} L/min`
			: `${tool.airflowLpm.min} à ${tool.airflowLpm.max} L/min`;
	}
	if (tool.demandModel === 'per-action') return `${tool.airPerActionLiters.toLocaleString('fr-FR')} L par ${tool.actionLabel}`;
	return tool.categoryId === 'gonflage' ? 'Débit variable selon le volume à gonfler' : 'Débit minute non établi';
}

export function toolPressureLabel(tool: ToolProfile): string {
	const pressure = tool.workingPressureBar;
	if (pressure.typical !== undefined && pressure.min === pressure.max) return `${pressure.typical} bar`;
	if (pressure.min !== undefined && pressure.max !== undefined) {
		return pressure.typical !== undefined
			? `${pressure.min} à ${pressure.max} bar, point de référence ${pressure.typical} bar`
			: `${pressure.min} à ${pressure.max} bar`;
	}
	if (pressure.max !== undefined) return `${pressure.max} bar maximum`;
	if (pressure.min !== undefined) return `${pressure.min} bar minimum, maximum non établi`;
	return 'Pression de travail non établie';
}

export function toolSearchText(tool: ToolProfile): string {
	return `${tool.label} ${tool.category} ${toolDemandLabel(tool)} ${toolPressureLabel(tool)}`;
}
