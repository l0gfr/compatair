import type { ToolProfile } from './catalog';

export type FixedFlowTool = Extract<ToolProfile, { demandModel: 'fixed-flow' }>;

export function isFixedFlowTool(tool: ToolProfile): tool is FixedFlowTool {
	return tool.demandModel === 'fixed-flow';
}

export function toolDemandLabel(tool: ToolProfile): string {
	if (tool.demandModel === 'fixed-flow') {
		return tool.airflowLpm.min === tool.airflowLpm.max
			? `${tool.airflowLpm.typical} L/min`
			: `${tool.airflowLpm.min} à ${tool.airflowLpm.max} L/min`;
	}
	if (tool.demandModel === 'per-action') return `${tool.airPerActionLiters.toLocaleString('fr-FR')} L par ${tool.actionLabel}`;
	return 'Débit variable selon le volume à gonfler';
}

export function toolPressureLabel(tool: ToolProfile): string {
	const pressure = tool.workingPressureBar;
	if (pressure.typical !== undefined && pressure.min === pressure.max) return `${pressure.typical} bar`;
	if (pressure.min !== undefined && pressure.max !== undefined) {
		return pressure.typical !== undefined
			? `${pressure.min} à ${pressure.max} bar, point de référence ${pressure.typical} bar`
			: `${pressure.min} à ${pressure.max} bar`;
	}
	return `${pressure.max} bar maximum`;
}

export function toolSearchText(tool: ToolProfile): string {
	return `${tool.label} ${tool.category} ${toolDemandLabel(tool)} ${toolPressureLabel(tool)}`;
}
