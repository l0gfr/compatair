import { resolveAvailableFad } from './compatibility';
import { sizeConfiguration, sizingInputSchema, type SizingInput, type SizingResult } from './sizing';

export type CounterfactualKind = 'pressure' | 'flexible' | 'simultaneity' | 'leak' | 'cadence' | 'machine';

export type CounterfactualMachine = {
	id: string;
	label: string;
	maxPressureBar: number;
	confidence?: 'A' | 'B' | 'C' | 'D';
	fadCurve?: Array<{ pressureBar: number; litersPerMinute: number }>;
	availableFadLpm?: number;
	documentedFadPressureBar?: number;
	tankLiters?: number;
	dutyCycle?: number;
};

export type CounterfactualCandidate = {
	kind: CounterfactualKind;
	changedField: string;
	beforeValue: string | number | null;
	afterValue: string | number;
	unit?: string;
	impactScore: number;
	demandId?: string;
	machineId?: string;
	machineLabel?: string;
	result: SizingResult;
};

export type CounterfactualReport = {
	status: 'already_possible' | 'recommended' | 'no_verified_change';
	current: SizingResult;
	recommendation?: CounterfactualCandidate;
	alternatives: CounterfactualCandidate[];
	untested: CounterfactualKind[];
	definition: string;
};

const isPossible = (result: SizingResult) => result.verdict === 'continuous' || result.verdict === 'intermittent';
const samePressure = (left: number, right: number) => Math.abs(left - right) < 1e-6;
const score = (before: number, after: number) => Number((Math.abs(before - after) / Math.max(Math.abs(before), Math.abs(after), 0.001)).toFixed(6));

function machineInput(machine: CounterfactualMachine, requiredPressureBar: number) {
	const availableFadLpm = ['C', 'D'].includes(machine.confidence ?? '')
		? undefined
		: machine.fadCurve
			? resolveAvailableFad({ fadCurve: machine.fadCurve }, requiredPressureBar)?.litersPerMinute
			: machine.documentedFadPressureBar !== undefined && samePressure(machine.documentedFadPressureBar, requiredPressureBar)
				? machine.availableFadLpm
				: undefined;
	return { maxPressureBar: machine.maxPressureBar, availableFadLpm, tankLiters: machine.tankLiters, dutyCycle: machine.dutyCycle };
}

function evaluate(configuration: SizingInput, machine?: CounterfactualMachine) {
	const requirement = sizeConfiguration({ ...configuration, compressor: undefined });
	return sizeConfiguration({ ...configuration, compressor: machine ? machineInput(machine, requirement.requiredPressureBar) : undefined });
}

function maximumPassing(current: number, minimum: number, evaluateAt: (value: number) => SizingResult, precision: number) {
	const minimumResult = evaluateAt(minimum);
	if (!isPossible(minimumResult)) return undefined;
	let passing = minimum;
	let failing = current;
	for (let iteration = 0; iteration < 48; iteration += 1) {
		const candidate = (passing + failing) / 2;
		if (isPossible(evaluateAt(candidate))) passing = candidate;
		else failing = candidate;
	}
	const factor = 1 / precision;
	const roundedUp = Math.ceil((passing - precision * 1e-8) * factor) / factor;
	const roundedUpResult = evaluateAt(roundedUp);
	if (roundedUp < current && isPossible(roundedUpResult)) return { value: roundedUp, result: roundedUpResult };
	const roundedDown = Math.floor((passing + Number.EPSILON) * factor) / factor;
	const roundedDownResult = evaluateAt(roundedDown);
	return isPossible(roundedDownResult) ? { value: roundedDown, result: roundedDownResult } : { value: minimum, result: minimumResult };
}

export function createCounterfactualRecommendation(input: {
	configuration: SizingInput;
	selectedMachine?: CounterfactualMachine;
	machines: CounterfactualMachine[];
}): CounterfactualReport {
	const configuration = sizingInputSchema.parse(input.configuration);
	const current = evaluate(configuration, input.selectedMachine);
	const definition = 'Chaque scénario modifie une seule variable, relance le moteur et n’est retenu que si le nouveau verdict devient continu ou intermittent.';
	if (isPossible(current)) return { status: 'already_possible', current, alternatives: [], untested: [], definition };

	const candidates: CounterfactualCandidate[] = [];
	const untested = new Set<CounterfactualKind>();
	const add = (candidate: CounterfactualCandidate | undefined) => { if (candidate && isPossible(candidate.result)) candidates.push(candidate); };

	if (configuration.supplyPressureBar !== undefined && input.selectedMachine) {
		const target = current.requiredPressureBar;
		if (configuration.supplyPressureBar < target && target <= input.selectedMachine.maxPressureBar) {
			const result = evaluate({ ...configuration, supplyPressureBar: target }, input.selectedMachine);
			add({ kind: 'pressure', changedField: 'supplyPressureBar', beforeValue: configuration.supplyPressureBar, afterValue: target, unit: 'bar', impactScore: score(configuration.supplyPressureBar, target), result });
		}
	} else untested.add('pressure');

	if (configuration.measuredPressureDropBar !== undefined && configuration.measuredPressureDropBar > 0 && input.selectedMachine?.fadCurve) {
		const change = maximumPassing(configuration.measuredPressureDropBar, 0, (value) => evaluate({ ...configuration, measuredPressureDropBar: value }, input.selectedMachine), 0.01);
		if (change && change.value < configuration.measuredPressureDropBar) add({ kind: 'flexible', changedField: 'measuredPressureDropBar', beforeValue: configuration.measuredPressureDropBar, afterValue: change.value, unit: 'bar', impactScore: score(configuration.measuredPressureDropBar, change.value), result: change.result });
	} else untested.add('flexible');

	if (configuration.mode === 'simultaneous' && configuration.demands.length > 1) {
		const result = evaluate({ ...configuration, mode: 'successive' }, input.selectedMachine);
		add({ kind: 'simultaneity', changedField: 'mode', beforeValue: 'simultaneous', afterValue: 'successive', impactScore: 1, result });
	} else untested.add('simultaneity');

	if (configuration.measuredLeakLpm !== undefined && configuration.measuredLeakLpm > 0) {
		const change = maximumPassing(configuration.measuredLeakLpm, 0, (value) => evaluate({ ...configuration, measuredLeakLpm: value }, input.selectedMachine), 0.1);
		if (change && change.value < configuration.measuredLeakLpm) add({ kind: 'leak', changedField: 'measuredLeakLpm', beforeValue: configuration.measuredLeakLpm, afterValue: change.value, unit: 'L/min', impactScore: score(configuration.measuredLeakLpm, change.value), result: change.result });
	} else untested.add('leak');

	configuration.demands.forEach((demand, index) => {
		if (demand.model !== 'per-action') return;
		const evaluateCadence = (actionsPerMinute: number) => {
			const demands = configuration.demands.map((item, demandIndex) => demandIndex === index && item.model === 'per-action' ? { ...item, actionsPerMinute } : item);
			return evaluate({ ...configuration, demands }, input.selectedMachine);
		};
		const change = maximumPassing(demand.actionsPerMinute, 0.1, evaluateCadence, 0.1);
		if (change && change.value < demand.actionsPerMinute) add({ kind: 'cadence', changedField: `demands.${index}.actionsPerMinute`, beforeValue: demand.actionsPerMinute, afterValue: change.value, unit: 'actions/min', impactScore: score(demand.actionsPerMinute, change.value), demandId: demand.id, result: change.result });
	});
	if (!configuration.demands.some((demand) => demand.model === 'per-action')) untested.add('cadence');

	for (const machine of input.machines) {
		if (machine.id === input.selectedMachine?.id) continue;
		const result = evaluate(configuration, machine);
		if (!isPossible(result)) continue;
		const flowDistance = Math.abs((machineInput(machine, result.requiredPressureBar).availableFadLpm ?? Number.POSITIVE_INFINITY) - result.peakFlowLpm) / Math.max(result.peakFlowLpm, 1);
		const pressureDistance = Math.abs(machine.maxPressureBar - result.requiredPressureBar) / Math.max(result.requiredPressureBar, 0.1);
		add({ kind: 'machine', changedField: 'machine', beforeValue: input.selectedMachine?.id ?? null, afterValue: machine.id, machineId: machine.id, machineLabel: machine.label, impactScore: Number((1 + flowDistance + pressureDistance).toFixed(6)), result });
	}
	if (!input.machines.length) untested.add('machine');

	const kindOrder: CounterfactualKind[] = ['pressure', 'flexible', 'leak', 'cadence', 'simultaneity', 'machine'];
	candidates.sort((left, right) => left.impactScore - right.impactScore || kindOrder.indexOf(left.kind) - kindOrder.indexOf(right.kind));
	return {
		status: candidates.length ? 'recommended' : 'no_verified_change',
		current,
		recommendation: candidates[0],
		alternatives: candidates.slice(1),
		untested: [...untested],
		definition,
	};
}
