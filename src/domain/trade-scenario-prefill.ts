import type { GuideMetierId } from './editorial-taxonomy';

export type TradeScenarioMode = 'successive' | 'simultaneous';
export type TradeScenarioDutyFactor = 0.1 | 0.3 | 0.6 | 1;

export type TradeScenarioPreset = {
	id: string;
	metierId: GuideMetierId;
	title: string;
	toolId: string;
	sessionMinutes: number;
	hoseLengthMeters: number;
	hoseDiameterMm: number;
	mode: TradeScenarioMode;
	dutyFactor?: TradeScenarioDutyFactor;
	actionsPerMinute?: number;
	inflation?: {
		volumeLiters: number;
		initialPressureBar: number;
		targetPressureBar: number;
		durationSeconds: number;
	};
	assumptions: string[];
};

export const tradeScenarioPresets = {
	'garage-service-roues': {
		id: 'garage-service-roues', metierId: 'garage-automobile', title: 'Service roues et clé à chocs', toolId: 'chicago-pneumatic-cp7748',
		sessionMinutes: 30, hoseLengthMeters: 5, hoseDiameterMm: 10, mode: 'successive', dutyFactor: 0.3,
		assumptions: ['Fréquence intermittente de 30 % proposée pour démarrer.', 'Flexible de 5 m et 10 mm à confirmer sur le poste réel.'],
	},
	'garage-gonflage-temporise': {
		id: 'garage-gonflage-temporise', metierId: 'garage-automobile', title: 'Gonflage et contrôle de pression', toolId: 'einhell-4137000-manometre',
		sessionMinutes: 30, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive',
		inflation: { volumeLiters: 100, initialPressureBar: 0, targetPressureBar: 2.5, durationSeconds: 120 },
		assumptions: ['Volume interne de 100 L et cible de 2,5 bar posés comme exemple, à remplacer par les valeurs du pneumatique.', 'Temps cible de 120 s proposé pour rendre le calcul immédiatement rejouable.'],
	},
	'garage-poncage-prolonge': {
		id: 'garage-poncage-prolonge', metierId: 'garage-automobile', title: 'Ponçage ou préparation prolongée', toolId: 'metabo-dsx-150',
		sessionMinutes: 45, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 1,
		assumptions: ['Fonctionnement continu proposé pour révéler le besoin dimensionnant.', 'Session de 45 min et flexible de 10 m à adapter à l’atelier.'],
	},
	'poids-lourds-cp5000': {
		id: 'poids-lourds-cp5000', metierId: 'atelier-poids-lourds', title: 'Dépose de roues avec une CP5000', toolId: 'chicago-pneumatic-cp5000',
		sessionMinutes: 45, hoseLengthMeters: 5, hoseDiameterMm: 13, mode: 'successive', dutyFactor: 0.3,
		assumptions: ['Fréquence intermittente de 30 % proposée, sans modifier la consommation en charge publiée.', 'Passage de 13 mm sur 5 m repris comme configuration de départ de la référence.'],
	},
	'poids-lourds-cp7776': {
		id: 'poids-lourds-cp7776', metierId: 'atelier-poids-lourds', title: 'Maintenance lourde avec une CP7776', toolId: 'chicago-pneumatic-cp7776',
		sessionMinutes: 45, hoseLengthMeters: 5, hoseDiameterMm: 13, mode: 'successive', dutyFactor: 0.3,
		assumptions: ['Fréquence intermittente de 30 % proposée pour une première lecture.', 'Flexible de 13 mm sur 5 m repris comme point de départ documenté.'],
	},
	'poids-lourds-gonflage': {
		id: 'poids-lourds-gonflage', metierId: 'atelier-poids-lourds', title: 'Gonflage d’un pneumatique poids lourd', toolId: 'einhell-4137000-manometre',
		sessionMinutes: 30, hoseLengthMeters: 10, hoseDiameterMm: 10, mode: 'successive',
		inflation: { volumeLiters: 400, initialPressureBar: 0, targetPressureBar: 8, durationSeconds: 600 },
		assumptions: ['Volume interne de 400 L et cible de 8 bar posés comme hypothèses de calcul, pas comme caractéristiques d’un pneumatique.', 'Temps cible de 10 min à remplacer par l’objectif et les prescriptions du poste réel.'],
	},
	'carrosserie-hvlp': {
		id: 'carrosserie-hvlp', metierId: 'carrosserie-peinture', title: 'Pulvérisation avec un pistolet HVLP identifié', toolId: 'abac-g-550f',
		sessionMinutes: 30, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 1,
		assumptions: ['Pulvérisation continue retenue pour tester le débit maximal du scénario.', 'Flexible de 10 m et 9 mm à vérifier après les organes de traitement.'],
	},
	'carrosserie-lvlp': {
		id: 'carrosserie-lvlp', metierId: 'carrosserie-peinture', title: 'Retouche avec un pistolet LVLP identifié', toolId: 'metabo-fsp-600-lvlp',
		sessionMinutes: 20, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 1,
		assumptions: ['Pulvérisation continue retenue pour comparer la capacité documentaire.', 'Session de 20 min et flexible de 10 m modifiables avant le calcul.'],
	},
	'carrosserie-poncage': {
		id: 'carrosserie-poncage', metierId: 'carrosserie-peinture', title: 'Ponçage continu avant mise en peinture', toolId: 'metabo-dsx-150',
		sessionMinutes: 45, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 1,
		assumptions: ['Fonctionnement continu proposé pour ne pas minorer un poste prolongé.', 'La maîtrise des poussières reste hors du calcul pneumatique.'],
	},
	'menuiserie-clouage-tc-pn-50': {
		id: 'menuiserie-clouage-tc-pn-50', metierId: 'menuiserie-agencement', title: 'Clouage en série avec la TC-PN 50', toolId: 'einhell-tc-pn-50',
		sessionMinutes: 45, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', actionsPerMinute: 30,
		assumptions: ['Cadence de 30 tirs/min proposée comme hypothèse de production, à remplacer par une observation.', 'Flexible de 9 mm sur 10 m à confirmer dans l’implantation réelle.'],
	},
	'menuiserie-clouage-scheppach': {
		id: 'menuiserie-clouage-scheppach', metierId: 'menuiserie-agencement', title: 'Agrafage avec la Scheppach 7906100715', toolId: 'scheppach-7906100715',
		sessionMinutes: 45, hoseLengthMeters: 10, hoseDiameterMm: 10, mode: 'successive', actionsPerMinute: 20,
		assumptions: ['Cadence de 20 tirs/min proposée pour rendre la conversion par action explicite.', 'La pointe instantanée et la récupération restent à contrôler sur une séquence réelle.'],
	},
	'menuiserie-poncage-continu': {
		id: 'menuiserie-poncage-continu', metierId: 'menuiserie-agencement', title: 'Ponçage pneumatique continu', toolId: 'metabo-dsx-150',
		sessionMinutes: 60, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 1,
		assumptions: ['Fonctionnement continu proposé pour distinguer ce poste du clouage par action.', 'Session de 60 min à rapprocher du cycle de service documenté du compresseur.'],
	},
	'btp-burineur-cp7110': {
		id: 'btp-burineur-cp7110', metierId: 'btp-chantier', title: 'Burineur CP7110 en séquence soutenue', toolId: 'chicago-pneumatic-cp7110',
		sessionMinutes: 20, hoseLengthMeters: 5, hoseDiameterMm: 10, mode: 'successive', dutyFactor: 0.6,
		assumptions: ['Fréquence soutenue de 60 % proposée pour représenter une séquence avec reprises.', 'Flexible de 10 mm sur 5 m repris comme configuration documentée de départ.'],
	},
	'btp-clouage-mobile': {
		id: 'btp-clouage-mobile', metierId: 'btp-chantier', title: 'Clouage mobile avec la TC-PN 50', toolId: 'einhell-tc-pn-50',
		sessionMinutes: 45, hoseLengthMeters: 25, hoseDiameterMm: 9, mode: 'successive', actionsPerMinute: 20,
		assumptions: ['Cadence de 20 tirs/min proposée comme hypothèse modifiable.', 'Longueur de 25 m choisie pour exposer la contrainte de chantier, sans prétendre qu’elle est recommandée par le fabricant.'],
	},
	'btp-burineur-cas-limite': {
		id: 'btp-burineur-cas-limite', metierId: 'btp-chantier', title: 'Burineur TC-PC 45 comme cas limite', toolId: 'einhell-tc-pc-45',
		sessionMinutes: 15, hoseLengthMeters: 5, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 0.3,
		assumptions: ['Fréquence intermittente de 30 % proposée uniquement pour le calcul.', 'La notice exclut l’usage professionnel ou industriel : le préremplissage ne vaut pas recommandation de service.'],
	},
	'maintenance-meulage-continu': {
		id: 'maintenance-meulage-continu', metierId: 'maintenance-industrielle', title: 'Meulage continu avec la Metabo DW 125', toolId: 'metabo-dw-125',
		sessionMinutes: 60, hoseLengthMeters: 10, hoseDiameterMm: 10, mode: 'successive', dutyFactor: 1,
		assumptions: ['Fonctionnement continu proposé pour établir une ligne de base exigeante.', 'Session de 60 min à confronter au cycle de service et aux mesures du réseau.'],
	},
	'maintenance-derouillage': {
		id: 'maintenance-derouillage', metierId: 'maintenance-industrielle', title: 'Dérouillage intermittent avec le CP7120', toolId: 'chicago-pneumatic-cp7120',
		sessionMinutes: 30, hoseLengthMeters: 5, hoseDiameterMm: 10, mode: 'successive', dutyFactor: 0.6,
		assumptions: ['Fréquence de 60 % proposée pour une séquence d’intervention soutenue.', 'Flexible de 10 mm sur 5 m repris comme configuration documentée de départ.'],
	},
	'maintenance-vissage-serie': {
		id: 'maintenance-vissage-serie', metierId: 'maintenance-industrielle', title: 'Vissage en série avec la Metabo DS 14', toolId: 'metabo-ds-14',
		sessionMinutes: 60, hoseLengthMeters: 10, hoseDiameterMm: 9, mode: 'successive', dutyFactor: 0.6,
		assumptions: ['Fréquence de 60 % proposée comme hypothèse de travail.', 'La coactivité avec d’autres postes doit être ajoutée comme un scénario distinct.'],
	},
} as const satisfies Record<string, TradeScenarioPreset>;

export type TradeScenarioId = keyof typeof tradeScenarioPresets;

export function getTradeScenarioPreset(value: string | null | undefined): TradeScenarioPreset | undefined {
	if (!value || !Object.prototype.hasOwnProperty.call(tradeScenarioPresets, value)) return undefined;
	return tradeScenarioPresets[value as TradeScenarioId];
}

export function tradeScenarioCalculatorHref(id: TradeScenarioId) {
	return `/calculateur/#scenario=${encodeURIComponent(id)}`;
}
