import { litersPerSecondToLitersPerMinute } from '../../domain/units.ts';

const catalogUrl = 'https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf';

type ImpactWrenchData = {
	model: string;
	mpn: string;
	page: number;
	drive: '3/8 pouce' | '1/2 pouce' | '3/4 pouce' | '1 pouce';
	mechanism: string;
	blowsPerMinute: number;
	freeSpeedRpm: number;
	workingTorqueNm: { min: number; max: number };
	maxReverseTorqueNm: number;
	weightKg: number;
	lengthMm: number;
	airLitersPerSecond: number;
	vibration: number;
	vibrationUncertainty: number;
	soundPressureDb: number;
	soundPowerDb: number;
	airInlet: '1/4' | '3/8' | '1/2';
};

const impactWrenches = {
	'chicago-pneumatic-cp8222-r': { model: 'CP8222-R', mpn: '6151590230', page: 19, drive: '3/8 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1250, freeSpeedRpm: 11500, workingTorqueNm: { min: 80, max: 400 }, maxReverseTorqueNm: 450, weightKg: 1.2, lengthMm: 177, airLitersPerSecond: 10, vibration: 5.8, vibrationUncertainty: 2.4, soundPressureDb: 89, soundPowerDb: 100, airInlet: '1/4' },
	'chicago-pneumatic-cp7732c': { model: 'CP7732C', mpn: '8941077321', page: 20, drive: '1/2 pouce', mechanism: 'Single hammer', blowsPerMinute: 1400, freeSpeedRpm: 9410, workingTorqueNm: { min: 70, max: 387 }, maxReverseTorqueNm: 625, weightKg: 1, lengthMm: 108, airLitersPerSecond: 10.2, vibration: 10.8, vibrationUncertainty: 1.4, soundPressureDb: 95.5, soundPowerDb: 106.5, airInlet: '1/4' },
	'chicago-pneumatic-cp7729': { model: 'CP7729', mpn: '8941077290', page: 21, drive: '3/8 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1700, freeSpeedRpm: 9400, workingTorqueNm: { min: 68, max: 407 }, maxReverseTorqueNm: 563, weightKg: 1.25, lengthMm: 163, airLitersPerSecond: 9.4, vibration: 6.4, vibrationUncertainty: 1.9, soundPressureDb: 91, soundPowerDb: 102, airInlet: '1/4' },
	'chicago-pneumatic-cp7729-p': { model: 'CP7729-P', mpn: '8941077292', page: 21, drive: '3/8 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1700, freeSpeedRpm: 9400, workingTorqueNm: { min: 68, max: 407 }, maxReverseTorqueNm: 563, weightKg: 1.25, lengthMm: 163, airLitersPerSecond: 9.4, vibration: 6.4, vibrationUncertainty: 1.9, soundPressureDb: 91, soundPowerDb: 102, airInlet: '1/4' },
	'chicago-pneumatic-cp6738-p05r': { model: 'CP6738-P05R', mpn: '6151590560', page: 24, drive: '1/2 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1300, freeSpeedRpm: 11500, workingTorqueNm: { min: 110, max: 350 }, maxReverseTorqueNm: 475, weightKg: 1.7, lengthMm: 175, airLitersPerSecond: 11.4, vibration: 5.2, vibrationUncertainty: 1.9, soundPressureDb: 89, soundPowerDb: 100, airInlet: '1/4' },
	'chicago-pneumatic-cp6500-rsr': { model: 'CP6500-RSR', mpn: 'T025216', page: 24, drive: '1/2 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1320, freeSpeedRpm: 6400, workingTorqueNm: { min: 170, max: 680 }, maxReverseTorqueNm: 850, weightKg: 2.65, lengthMm: 178, airLitersPerSecond: 11.8, vibration: 8, vibrationUncertainty: 2.5, soundPressureDb: 96, soundPowerDb: 107, airInlet: '1/4' },
	'chicago-pneumatic-cp6500-rs': { model: 'CP6500-RS', mpn: 'T025214', page: 24, drive: '1/2 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1320, freeSpeedRpm: 6400, workingTorqueNm: { min: 170, max: 680 }, maxReverseTorqueNm: 850, weightKg: 2.65, lengthMm: 178, airLitersPerSecond: 11.8, vibration: 8, vibrationUncertainty: 2.5, soundPressureDb: 96, soundPowerDb: 107, airInlet: '1/4' },
	'chicago-pneumatic-cp772h': { model: 'CP772H', mpn: 'T024598', page: 27, drive: '3/4 pouce', mechanism: 'Pin clutch', blowsPerMinute: 900, freeSpeedRpm: 4200, workingTorqueNm: { min: 203, max: 949 }, maxReverseTorqueNm: 1350, weightKg: 4.76, lengthMm: 245, airLitersPerSecond: 11.3, vibration: 5.8, vibrationUncertainty: 2, soundPressureDb: 96, soundPowerDb: 107, airInlet: '3/8' },
	'chicago-pneumatic-cp7763': { model: 'CP7763', mpn: '8941077630', page: 27, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 900, freeSpeedRpm: 6300, workingTorqueNm: { min: 136, max: 1280 }, maxReverseTorqueNm: 1630, weightKg: 5.25, lengthMm: 229, airLitersPerSecond: 16.4, vibration: 10.4, vibrationUncertainty: 4.2, soundPressureDb: 96, soundPowerDb: 107, airInlet: '3/8' },
	'chicago-pneumatic-cp7769': { model: 'CP7769', mpn: '8941077691', page: 28, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1200, freeSpeedRpm: 6500, workingTorqueNm: { min: 407, max: 1460 }, maxReverseTorqueNm: 1950, weightKg: 3.15, lengthMm: 200, airLitersPerSecond: 14.7, vibration: 12.97, vibrationUncertainty: 1.5, soundPressureDb: 96.8, soundPowerDb: 107.8, airInlet: '3/8' },
	'chicago-pneumatic-cp7769-p': { model: 'CP7769-P', mpn: '8941077692', page: 28, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1200, freeSpeedRpm: 6500, workingTorqueNm: { min: 407, max: 1460 }, maxReverseTorqueNm: 1950, weightKg: 3.15, lengthMm: 200, airLitersPerSecond: 14.7, vibration: 12.97, vibrationUncertainty: 1.5, soundPressureDb: 96.8, soundPowerDb: 107.8, airInlet: '3/8' },
	'chicago-pneumatic-cp9561': { model: 'CP9561', mpn: '6151909561', page: 28, drive: '3/4 pouce', mechanism: 'Pin clutch', blowsPerMinute: 900, freeSpeedRpm: 5500, workingTorqueNm: { min: 200, max: 950 }, maxReverseTorqueNm: 1250, weightKg: 5.1, lengthMm: 216, airLitersPerSecond: 14.1, vibration: 7.7, vibrationUncertainty: 2.4, soundPressureDb: 100, soundPowerDb: 111, airInlet: '3/8' },
	'chicago-pneumatic-cp8272-d': { model: 'CP8272-D', mpn: '6151590260', page: 28, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1000, freeSpeedRpm: 6500, workingTorqueNm: { min: 250, max: 1250 }, maxReverseTorqueNm: 1650, weightKg: 3.65, lengthMm: 230, airLitersPerSecond: 18, vibration: 15.5, vibrationUncertainty: 6.8, soundPressureDb: 96, soundPowerDb: 107, airInlet: '3/8' },
	'chicago-pneumatic-cp8272-p': { model: 'CP8272-P', mpn: '6151590220', page: 28, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1000, freeSpeedRpm: 6500, workingTorqueNm: { min: 250, max: 1250 }, maxReverseTorqueNm: 1650, weightKg: 3.3, lengthMm: 230, airLitersPerSecond: 18, vibration: 15.5, vibrationUncertainty: 6.8, soundPressureDb: 96, soundPowerDb: 107, airInlet: '3/8' },
	'chicago-pneumatic-cp6763': { model: 'CP6763', mpn: '6151590400', page: 29, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 900, freeSpeedRpm: 6300, workingTorqueNm: { min: 350, max: 1290 }, maxReverseTorqueNm: 1630, weightKg: 5.5, lengthMm: 222, airLitersPerSecond: 14.2, vibration: 9.4, vibrationUncertainty: 1.3, soundPressureDb: 96, soundPowerDb: 107, airInlet: '3/8' },
	'chicago-pneumatic-cp6763-d18d': { model: 'CP6763-D18D', mpn: '6151590640', page: 29, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 730, freeSpeedRpm: 6600, workingTorqueNm: { min: 340, max: 1450 }, maxReverseTorqueNm: 1760, weightKg: 6.6, lengthMm: 290, airLitersPerSecond: 19.3, vibration: 11.4, vibrationUncertainty: 2.9, soundPressureDb: 98, soundPowerDb: 109, airInlet: '1/2' },
	'chicago-pneumatic-cp6060-p15h': { model: 'CP6060-P15H', mpn: '6151590090', page: 30, drive: '3/4 pouce', mechanism: '2-jaws', blowsPerMinute: 1100, freeSpeedRpm: 4000, workingTorqueNm: { min: 270, max: 1220 }, maxReverseTorqueNm: 1490, weightKg: 5.3, lengthMm: 222, airLitersPerSecond: 25, vibration: 13.9, vibrationUncertainty: 4.1, soundPressureDb: 92, soundPowerDb: 103, airInlet: '3/8' },
	'chicago-pneumatic-cp6060-p15r': { model: 'CP6060-P15R', mpn: '6151590100', page: 30, drive: '3/4 pouce', mechanism: '2-jaws', blowsPerMinute: 1100, freeSpeedRpm: 4000, workingTorqueNm: { min: 270, max: 1220 }, maxReverseTorqueNm: 1490, weightKg: 5.3, lengthMm: 222, airLitersPerSecond: 25, vibration: 13.9, vibrationUncertainty: 4.1, soundPressureDb: 92, soundPowerDb: 103, airInlet: '3/8' },
	'chicago-pneumatic-cp6768ex-p18d': { model: 'CP6768EX-P18D', mpn: '6151590580', page: 30, drive: '3/4 pouce', mechanism: 'Twin hammer', blowsPerMinute: 1050, freeSpeedRpm: 5100, workingTorqueNm: { min: 400, max: 1400 }, maxReverseTorqueNm: 1750, weightKg: 4.4, lengthMm: 250, airLitersPerSecond: 18, vibration: 9.4, vibrationUncertainty: 2.4, soundPressureDb: 94, soundPowerDb: 105, airInlet: '3/8' },
	'chicago-pneumatic-cp6070-p15h': { model: 'CP6070-P15H', mpn: '6151590110', page: 32, drive: '1 pouce', mechanism: '2-jaws', blowsPerMinute: 1100, freeSpeedRpm: 4000, workingTorqueNm: { min: 270, max: 1220 }, maxReverseTorqueNm: 1490, weightKg: 5.4, lengthMm: 227, airLitersPerSecond: 25, vibration: 13.9, vibrationUncertainty: 4.1, soundPressureDb: 92, soundPowerDb: 103, airInlet: '3/8' },
} as const satisfies Record<string, ImpactWrenchData>;

type RatchetData = {
	model: string;
	mpn: string;
	page: number;
	drive: '1/4 pouce' | '3/8 pouce' | '1/2 pouce';
	freeSpeedRpm: number;
	workingTorqueNm: number;
	maxTorqueNm: number;
	weightKg: number;
	lengthMm: number;
	airLitersPerSecond: number;
	vibration: number;
	soundPressureDb: number;
	soundPowerDb: number;
};

const ratchets = {
	'chicago-pneumatic-cp825c': { model: 'CP825C', mpn: '8941082511', page: 39, drive: '1/4 pouce', freeSpeedRpm: 280, workingTorqueNm: 5, maxTorqueNm: 25, weightKg: 0.5, lengthMm: 169, airLitersPerSecond: 5.1, vibration: 4, soundPressureDb: 82, soundPowerDb: 93 },
	'chicago-pneumatic-cp826t': { model: 'CP826T', mpn: 'T025075', page: 39, drive: '3/8 pouce', freeSpeedRpm: 250, workingTorqueNm: 7, maxTorqueNm: 21, weightKg: 0.51, lengthMm: 203, airLitersPerSecond: 6.6, vibration: 2.9, soundPressureDb: 91, soundPowerDb: 102 },
	'chicago-pneumatic-cp7829': { model: 'CP7829', mpn: '8941078293', page: 40, drive: '3/8 pouce', freeSpeedRpm: 225, workingTorqueNm: 15, maxTorqueNm: 68, weightKg: 1.24, lengthMm: 272, airLitersPerSecond: 5.2, vibration: 8.6, soundPressureDb: 85, soundPowerDb: 96 },
	'chicago-pneumatic-cp7829h': { model: 'CP7829H', mpn: '8941078294', page: 40, drive: '1/2 pouce', freeSpeedRpm: 225, workingTorqueNm: 15, maxTorqueNm: 74, weightKg: 1.24, lengthMm: 272, airLitersPerSecond: 5.2, vibration: 8.6, soundPressureDb: 85, soundPowerDb: 96 },
	'chicago-pneumatic-cp7830q': { model: 'CP7830Q', mpn: '8941078306', page: 40, drive: '3/8 pouce', freeSpeedRpm: 190, workingTorqueNm: 13, maxTorqueNm: 122, weightKg: 1.2, lengthMm: 305, airLitersPerSecond: 8.7, vibration: 4.1, soundPressureDb: 85, soundPowerDb: 96 },
	'chicago-pneumatic-cp886h': { model: 'CP886H', mpn: 'T024391', page: 41, drive: '1/2 pouce', freeSpeedRpm: 160, workingTorqueNm: 13, maxTorqueNm: 68, weightKg: 1.19, lengthMm: 260, airLitersPerSecond: 8, vibration: 3.7, soundPressureDb: 99, soundPowerDb: 110 },
	'chicago-pneumatic-cp886': { model: 'CP886', mpn: 'T024240', page: 41, drive: '3/8 pouce', freeSpeedRpm: 160, workingTorqueNm: 13, maxTorqueNm: 68, weightKg: 1.19, lengthMm: 260, airLitersPerSecond: 8, vibration: 3.7, soundPressureDb: 99, soundPowerDb: 110 },
	'chicago-pneumatic-cp828h': { model: 'CP828H', mpn: 'T022970', page: 41, drive: '1/2 pouce', freeSpeedRpm: 150, workingTorqueNm: 13, maxTorqueNm: 70, weightKg: 1.1, lengthMm: 254, airLitersPerSecond: 7.1, vibration: 3.2, soundPressureDb: 97, soundPowerDb: 108 },
	'chicago-pneumatic-cp828': { model: 'CP828', mpn: 'T022708', page: 41, drive: '3/8 pouce', freeSpeedRpm: 150, workingTorqueNm: 13, maxTorqueNm: 70, weightKg: 1.1, lengthMm: 254, airLitersPerSecond: 7.1, vibration: 3.2, soundPressureDb: 97, soundPowerDb: 108 },
	'chicago-pneumatic-cp7830hq': { model: 'CP7830HQ', mpn: '8941078308', page: 41, drive: '1/2 pouce', freeSpeedRpm: 190, workingTorqueNm: 13, maxTorqueNm: 122, weightKg: 1.2, lengthMm: 305, airLitersPerSecond: 8.7, vibration: 4.1, soundPressureDb: 85, soundPowerDb: 96 },
} as const satisfies Record<string, RatchetData>;

type DrillData = {
	model: string;
	mpn: string;
	page: number;
	chuck: string;
	freeSpeedRpm: number;
	powerW: number;
	stallTorqueNm: number;
	weightKg: number;
	lengthMm: number;
	airLitersPerSecond: number;
	vibration: string;
	soundPressureDb: number;
	soundPowerDb: number;
};

const drills = {
	'chicago-pneumatic-cp1014p24': { model: 'CP1014P24', mpn: '6151580050', page: 157, chuck: '1/4 pouce (6,4 mm)', freeSpeedRpm: 2400, powerW: 370, stallTorqueNm: 4.6, weightKg: 0.54, lengthMm: 160, airLitersPerSecond: 9, vibration: '3,1 m/s² ; incertitude K 2 m/s²', soundPressureDb: 78, soundPowerDb: 89 },
	'chicago-pneumatic-cp1014p33': { model: 'CP1014P33', mpn: '6151580030', page: 157, chuck: '1/4 pouce (6,4 mm)', freeSpeedRpm: 3300, powerW: 370, stallTorqueNm: 3.5, weightKg: 0.54, lengthMm: 160, airLitersPerSecond: 9, vibration: 'Non publiée dans le tableau', soundPressureDb: 78, soundPowerDb: 89 },
	'chicago-pneumatic-cp1014p45': { model: 'CP1014P45', mpn: '6151580010', page: 157, chuck: '1/4 pouce (6,4 mm)', freeSpeedRpm: 4500, powerW: 375, stallTorqueNm: 3.2, weightKg: 0.54, lengthMm: 160, airLitersPerSecond: 10, vibration: '3 m/s² ; incertitude K 1,4 m/s²', soundPressureDb: 78, soundPowerDb: 89 },
	'chicago-pneumatic-cp1014p05': { model: 'CP1014P05', mpn: '6151580190', page: 158, chuck: '3/8 pouce (10 mm)', freeSpeedRpm: 500, powerW: 370, stallTorqueNm: 24.5, weightKg: 0.64, lengthMm: 195, airLitersPerSecond: 9, vibration: 'Non publiée dans le tableau', soundPressureDb: 78, soundPowerDb: 89 },
	'chicago-pneumatic-cp9285c': { model: 'CP9285C', mpn: '8941092850', page: 158, chuck: '3/8 pouce (10 mm)', freeSpeedRpm: 3000, powerW: 460, stallTorqueNm: 5.5, weightKg: 1.09, lengthMm: 209, airLitersPerSecond: 10, vibration: '< 2,5 m/s²', soundPressureDb: 83.7, soundPowerDb: 94.7 },
	'chicago-pneumatic-cp9287c': { model: 'CP9287C', mpn: '8941092870', page: 158, chuck: '3/8 pouce (10 mm)', freeSpeedRpm: 3000, powerW: 460, stallTorqueNm: 5.5, weightKg: 1.08, lengthMm: 209, airLitersPerSecond: 10, vibration: '< 2,5 m/s²', soundPressureDb: 83.7, soundPowerDb: 94.7 },
	'chicago-pneumatic-cp785qc': { model: 'CP785QC', mpn: 'T024242', page: 158, chuck: '3/8 pouce (10 mm)', freeSpeedRpm: 2400, powerW: 370, stallTorqueNm: 4.2, weightKg: 1.02, lengthMm: 178, airLitersPerSecond: 6, vibration: '< 2,5 m/s²', soundPressureDb: 90, soundPowerDb: 101 },
	'chicago-pneumatic-cp789r-26': { model: 'CP789R-26', mpn: 'T025180', page: 160, chuck: '3/8 pouce (10 mm)', freeSpeedRpm: 2600, powerW: 320, stallTorqueNm: 4.2, weightKg: 1.13, lengthMm: 178, airLitersPerSecond: 14, vibration: '< 2,5 m/s²', soundPressureDb: 95, soundPowerDb: 106 },
	'chicago-pneumatic-cp9286c': { model: 'CP9286C', mpn: '8941092860', page: 161, chuck: '1/2 pouce (13 mm)', freeSpeedRpm: 600, powerW: 360, stallTorqueNm: 22, weightKg: 1.49, lengthMm: 250, airLitersPerSecond: 11, vibration: '< 2,5 m/s²', soundPressureDb: 84.2, soundPowerDb: 95.2 },
	'chicago-pneumatic-cp9288c': { model: 'CP9288C', mpn: '8941092880', page: 161, chuck: '1/2 pouce (13 mm)', freeSpeedRpm: 600, powerW: 360, stallTorqueNm: 22, weightKg: 1.45, lengthMm: 250, airLitersPerSecond: 11, vibration: '< 2,5 m/s²', soundPressureDb: 84.2, soundPowerDb: 95.2 },
} as const satisfies Record<string, DrillData>;

function evidence(model: string, mpn: string, page: number) {
	return {
		id: `cp-${mpn.toLowerCase()}-general-industry-2026`,
		sourceUrl: catalogUrl,
		sourceLabel: `Chicago Pneumatic, General Industry Catalog v4.04.2026, ${model}, page ${page}`,
		sourceType: 'manufacturer' as const,
		sourceRole: 'primary' as const,
		retrievedAt: '2026-08-29',
		confidence: 'A' as const,
		notes: 'Valeurs lues dans la ligne métrique du tableau officiel ; pression de référence 90 psi (6,3 bar) indiquée au pied du même tableau.',
	};
}

function decimal(value: number) {
	return String(value).replace('.', ',');
}

export type ChicagoPneumaticImpact2026Id = keyof typeof impactWrenches;
export type ChicagoPneumaticRatchet2026Id = keyof typeof ratchets;
export type ChicagoPneumaticDrill2026Id = keyof typeof drills;

export function chicagoPneumaticImpact2026(id: ChicagoPneumaticImpact2026Id) {
	const data = impactWrenches[id];
	const source = evidence(data.model, data.mpn, data.page);
	const airflowLpm = litersPerSecondToLitersPerMinute(data.airLitersPerSecond);
	return {
		id,
		slug: `cle-a-chocs-${id}`,
		categoryId: 'cle-a-chocs',
		category: 'Clé à chocs',
		label: `Clé à chocs pneumatique Chicago Pneumatic ${data.model} ${data.drive}`,
		brand: 'Chicago Pneumatic',
		model: data.model,
		mpn: data.mpn,
		demandModel: 'fixed-flow',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
		airflowLpm: { min: airflowLpm, typical: airflowLpm, max: airflowLpm },
		connectorSize: `Entrée ${data.airInlet} pouce ; flexible intérieur 10 mm`,
		usagePattern: 'burst',
		recommendedHose: { innerDiameterMm: 10 },
		confidence: 'A',
		image: {
			src: '/images/products/chicago-pneumatic-impact-wrenches-2026.webp',
			alt: `Gamme de clés à chocs Chicago Pneumatic, dont ${data.model}`,
			sourceUrl: catalogUrl,
			sourceLabel: 'Visuel officiel de la gamme de clés à chocs Chicago Pneumatic, catalogue 2026',
		},
		editorial: {
			overview: `La Chicago Pneumatic ${data.model} est une clé à chocs ${data.drive} documentée à 6,3 bar. Sa consommation en charge de ${decimal(data.airLitersPerSecond)} L/s correspond exactement à ${airflowLpm} L/min.`,
			verifiedFacts: [
				`Le tableau constructeur publie une plage de couple de travail de ${data.workingTorqueNm.min} à ${data.workingTorqueNm.max} Nm et un couple maximal en marche arrière de ${data.maxReverseTorqueNm} Nm.`,
				`La même ligne indique ${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min, ${data.blowsPerMinute.toLocaleString('fr-FR')} coups/min, ${data.lengthMm} mm et ${decimal(data.weightKg)} kg.`,
			],
			limitations: [
				'La consommation en charge est conservée comme besoin instantané ; aucun facteur d’usage arbitraire ne la réduit.',
				'Le couple maximal en marche arrière ne constitue pas un couple de serrage contrôlé.',
				'Le visuel est celui de la gamme ; l’aspect exact dépend de la référence et du système de retenue.',
			],
		},
		specifications: [
			{ label: 'Pression dynamique de service', value: '6,3 bar', evidenceIds: [source.id] },
			{ label: 'Consommation en charge', value: `${decimal(data.airLitersPerSecond)} L/s (${airflowLpm} L/min)`, evidenceIds: [source.id] },
			{ label: 'Carré d’entraînement', value: data.drive, evidenceIds: [source.id] },
			{ label: 'Mécanisme de frappe', value: data.mechanism, evidenceIds: [source.id] },
			{ label: 'Cadence de frappe', value: `${data.blowsPerMinute.toLocaleString('fr-FR')} coups/min`, evidenceIds: [source.id] },
			{ label: 'Vitesse à vide', value: `${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min`, evidenceIds: [source.id] },
			{ label: 'Plage de couple de travail', value: `${data.workingTorqueNm.min} à ${data.workingTorqueNm.max} Nm`, evidenceIds: [source.id] },
			{ label: 'Couple maximal en marche arrière', value: `${data.maxReverseTorqueNm} Nm`, evidenceIds: [source.id] },
			{ label: 'Entrée d’air', value: `${data.airInlet} pouce`, evidenceIds: [source.id] },
			{ label: 'Flexible recommandé', value: '10 mm de diamètre intérieur', evidenceIds: [source.id] },
			{ label: 'Longueur', value: `${data.lengthMm} mm`, evidenceIds: [source.id] },
			{ label: 'Poids net', value: `${decimal(data.weightKg)} kg`, evidenceIds: [source.id] },
			{ label: 'Vibrations ISO 28927', value: `${decimal(data.vibration)} m/s² ; incertitude K ${decimal(data.vibrationUncertainty)} m/s²`, evidenceIds: [source.id] },
			{ label: 'Pression acoustique ISO 15744', value: `${decimal(data.soundPressureDb)} dB(A)`, evidenceIds: [source.id] },
			{ label: 'Puissance acoustique ISO 15744', value: `${decimal(data.soundPowerDb)} dB(A)`, evidenceIds: [source.id] },
		],
		evidence: [source],
		fieldSources: {
			model: [source.id],
			mpn: [source.id],
			workingPressureBar: [source.id],
			airflowLpm: [source.id],
			connectorSize: [source.id],
			recommendedHose: [source.id],
			specifications: [source.id],
		},
		notes: [
			`Conversion exacte : ${decimal(data.airLitersPerSecond)} L/s × 60 = ${airflowLpm} L/min.`,
			`Tableau constructeur vérifié page ${data.page} du catalogue General Industry v4.04.2026.`,
		],
	};
}

export function chicagoPneumaticRatchet2026(id: ChicagoPneumaticRatchet2026Id) {
	const data = ratchets[id];
	const source = evidence(data.model, data.mpn, data.page);
	const airflowLpm = litersPerSecondToLitersPerMinute(data.airLitersPerSecond);
	return {
		id,
		slug: `cle-a-cliquet-${id}`,
		categoryId: 'cle-a-cliquet',
		category: 'Clé à cliquet',
		label: `Clé à cliquet pneumatique Chicago Pneumatic ${data.model} ${data.drive}`,
		brand: 'Chicago Pneumatic',
		model: data.model,
		mpn: data.mpn,
		demandModel: 'fixed-flow',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
		airflowLpm: { min: airflowLpm, typical: airflowLpm, max: airflowLpm },
		connectorSize: 'Entrée 1/4 pouce ; flexible intérieur 10 mm',
		usagePattern: 'intermittent',
		recommendedHose: { innerDiameterMm: 10 },
		confidence: 'A',
		image: {
			src: '/images/products/chicago-pneumatic-ratchets-2026.webp',
			alt: `Gamme de clés à cliquet Chicago Pneumatic, dont ${data.model}`,
			sourceUrl: catalogUrl,
			sourceLabel: 'Visuel officiel de la gamme de clés à cliquet Chicago Pneumatic, catalogue 2026',
		},
		editorial: {
			overview: `La Chicago Pneumatic ${data.model} est une clé à cliquet ${data.drive} documentée à 6,3 bar. Sa consommation en charge de ${decimal(data.airLitersPerSecond)} L/s équivaut à ${airflowLpm} L/min.`,
			verifiedFacts: [
				`Le tableau constructeur publie ${data.workingTorqueNm} Nm de couple de travail, ${data.maxTorqueNm} Nm au maximum et ${data.freeSpeedRpm} tr/min.`,
				`La même ligne indique ${data.lengthMm} mm, ${decimal(data.weightKg)} kg, ${decimal(data.soundPressureDb)} dB(A) de pression acoustique et ${decimal(data.soundPowerDb)} dB(A) de puissance acoustique.`,
			],
			limitations: [
				'La consommation en charge est conservée comme besoin instantané ; aucun facteur d’usage arbitraire ne la réduit.',
				'Le visuel est celui de la gamme et non une photographie contractuelle de chaque variante.',
			],
		},
		specifications: [
			{ label: 'Pression dynamique de service', value: '6,3 bar', evidenceIds: [source.id] },
			{ label: 'Consommation en charge', value: `${decimal(data.airLitersPerSecond)} L/s (${airflowLpm} L/min)`, evidenceIds: [source.id] },
			{ label: 'Carré d’entraînement', value: data.drive, evidenceIds: [source.id] },
			{ label: 'Vitesse à vide', value: `${data.freeSpeedRpm} tr/min`, evidenceIds: [source.id] },
			{ label: 'Couple de travail', value: `${data.workingTorqueNm} Nm`, evidenceIds: [source.id] },
			{ label: 'Couple maximal', value: `${data.maxTorqueNm} Nm`, evidenceIds: [source.id] },
			{ label: 'Entrée d’air', value: '1/4 pouce', evidenceIds: [source.id] },
			{ label: 'Flexible recommandé', value: '10 mm de diamètre intérieur', evidenceIds: [source.id] },
			{ label: 'Longueur', value: `${data.lengthMm} mm`, evidenceIds: [source.id] },
			{ label: 'Poids net', value: `${decimal(data.weightKg)} kg`, evidenceIds: [source.id] },
			{ label: 'Vibrations ISO 28927', value: `${decimal(data.vibration)} m/s²`, evidenceIds: [source.id] },
			{ label: 'Pression acoustique ISO 15744', value: `${decimal(data.soundPressureDb)} dB(A)`, evidenceIds: [source.id] },
			{ label: 'Puissance acoustique ISO 15744', value: `${decimal(data.soundPowerDb)} dB(A)`, evidenceIds: [source.id] },
		],
		evidence: [source],
		fieldSources: {
			model: [source.id],
			mpn: [source.id],
			workingPressureBar: [source.id],
			airflowLpm: [source.id],
			connectorSize: [source.id],
			recommendedHose: [source.id],
			specifications: [source.id],
		},
		notes: [
			`Conversion exacte : ${decimal(data.airLitersPerSecond)} L/s × 60 = ${airflowLpm} L/min.`,
			`Tableau constructeur vérifié page ${data.page} du catalogue General Industry v4.04.2026.`,
		],
	};
}

export function chicagoPneumaticDrill2026(id: ChicagoPneumaticDrill2026Id) {
	const data = drills[id];
	const source = evidence(data.model, data.mpn, data.page);
	const airflowLpm = litersPerSecondToLitersPerMinute(data.airLitersPerSecond);
	return {
		id,
		slug: `perceuse-${id}`,
		categoryId: 'perceuse',
		category: 'Perceuse',
		label: `Perceuse pneumatique Chicago Pneumatic ${data.model}`,
		brand: 'Chicago Pneumatic',
		model: data.model,
		mpn: data.mpn,
		demandModel: 'fixed-flow',
		workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
		airflowLpm: { min: airflowLpm, typical: airflowLpm, max: airflowLpm },
		connectorSize: 'Entrée 1/4 pouce ; flexible intérieur 10 mm',
		usagePattern: 'intermittent',
		recommendedHose: { innerDiameterMm: 10 },
		confidence: 'A',
		image: {
			src: '/images/products/chicago-pneumatic-drills-2026.webp',
			alt: `Gamme de perceuses Chicago Pneumatic, dont ${data.model}`,
			sourceUrl: catalogUrl,
			sourceLabel: 'Visuel officiel de la gamme de perceuses Chicago Pneumatic, catalogue 2026',
		},
		editorial: {
			overview: `La Chicago Pneumatic ${data.model} est une perceuse pneumatique documentée à 6,3 bar. Sa consommation en charge de ${decimal(data.airLitersPerSecond)} L/s équivaut à ${airflowLpm} L/min.`,
			verifiedFacts: [
				`Le tableau constructeur publie ${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min, ${data.powerW} W, un couple de calage de ${decimal(data.stallTorqueNm)} Nm et un mandrin ${data.chuck}.`,
				`La même ligne indique ${data.lengthMm} mm, ${decimal(data.weightKg)} kg, ${decimal(data.soundPressureDb)} dB(A) de pression acoustique et ${decimal(data.soundPowerDb)} dB(A) de puissance acoustique.`,
			],
			limitations: [
				'La consommation en charge est conservée comme besoin instantané ; aucun facteur d’usage arbitraire ne la réduit.',
				'Une vibration indiquée comme non publiée reste explicitement absente ; aucune valeur n’est estimée.',
				'Le visuel est celui de la gamme et non une photographie contractuelle de chaque variante.',
			],
		},
		specifications: [
			{ label: 'Pression dynamique de service', value: '6,3 bar', evidenceIds: [source.id] },
			{ label: 'Consommation en charge', value: `${decimal(data.airLitersPerSecond)} L/s (${airflowLpm} L/min)`, evidenceIds: [source.id] },
			{ label: 'Mandrin', value: data.chuck, evidenceIds: [source.id] },
			{ label: 'Vitesse à vide', value: `${data.freeSpeedRpm.toLocaleString('fr-FR')} tr/min`, evidenceIds: [source.id] },
			{ label: 'Puissance', value: `${data.powerW} W`, evidenceIds: [source.id] },
			{ label: 'Couple de calage', value: `${decimal(data.stallTorqueNm)} Nm`, evidenceIds: [source.id] },
			{ label: 'Entrée d’air', value: '1/4 pouce', evidenceIds: [source.id] },
			{ label: 'Flexible recommandé', value: '10 mm de diamètre intérieur', evidenceIds: [source.id] },
			{ label: 'Longueur', value: `${data.lengthMm} mm`, evidenceIds: [source.id] },
			{ label: 'Poids net', value: `${decimal(data.weightKg)} kg`, evidenceIds: [source.id] },
			{ label: 'Vibrations ISO 28927', value: data.vibration, evidenceIds: [source.id] },
			{ label: 'Pression acoustique ISO 15744', value: `${decimal(data.soundPressureDb)} dB(A)`, evidenceIds: [source.id] },
			{ label: 'Puissance acoustique ISO 15744', value: `${decimal(data.soundPowerDb)} dB(A)`, evidenceIds: [source.id] },
		],
		evidence: [source],
		fieldSources: {
			model: [source.id],
			mpn: [source.id],
			workingPressureBar: [source.id],
			airflowLpm: [source.id],
			connectorSize: [source.id],
			recommendedHose: [source.id],
			specifications: [source.id],
		},
		notes: [
			`Conversion exacte : ${decimal(data.airLitersPerSecond)} L/s × 60 = ${airflowLpm} L/min.`,
			`Tableau constructeur vérifié page ${data.page} du catalogue General Industry v4.04.2026.`,
		],
	};
}
