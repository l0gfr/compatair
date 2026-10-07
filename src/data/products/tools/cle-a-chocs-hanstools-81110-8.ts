import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hanstools-81110-8",
	"slug": "cle-a-chocs-hanstools-81110-8",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "HansTools 81110-8",
	"brand": "HansTools",
	"model": "81110-8",
	"mpn": "81110-8",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hanstools-81110-8.svg",
		"alt": "Repères techniques : HansTools 81110-8",
		"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-long-anvil-247mm-81110%e2%80%918/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-81110-8",
		"label": "Référence 81110-8",
		"distinguishingAttributes": {
			"reference": "81110-8",
			"ANVIL inch(mm)": "3.39./72\" (247)",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC": "2500 (3390)"
		}
	},
	"editorial": {
		"overview": "HansTools 81110-8. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"ANVIL inch(mm) : 3.39./72\" (247).",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC : 2500 (3390).",
			"MINI TORQUE FT · LB(Nm) : 500-2300 (678-3119).",
			"STDBOLT SIZE inch(mm) : M50.",
			"FREE SPEED R.P.M. : 3000.",
			"MECHANISM : NEW TWIN HAMMER."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La colonne AVG.DLR CONSUMPTION CFM est une consommation moyenne ; le cycle de travail n’est pas documenté. Elle ne représente pas le débit continu en charge.",
			"Les pressions Air Pressure bar/psi sont des prescriptions de fonctionnement, sans point de mesure de consommation explicitement qualifié.",
			"Les éventuelles affirmations de FAQ ne remplacent pas le régime Average/DLR imprimé dans les tableaux. Les variantes ne sont retenues que lorsqu’un numéro propre figure dans une ligne technique.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "ANVIL inch(mm)",
			"value": "3.39./72\" (247)",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		},
		{
			"label": "MAX TORQUE FT · LB(Nm) @ 5 SEC",
			"value": "2500 (3390)",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		},
		{
			"label": "MINI TORQUE FT · LB(Nm)",
			"value": "500-2300 (678-3119)",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		},
		{
			"label": "STDBOLT SIZE inch(mm)",
			"value": "M50",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "3000",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		},
		{
			"label": "MECHANISM",
			"value": "NEW TWIN HAMMER",
			"evidenceIds": [
				"october5-tools-hans-tool-012-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-012-p1",
			"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-long-anvil-247mm-81110%e2%80%918/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 037d155d4f509f5ca1504379b942d531a519de1b8eebb6d828620f024c761378. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-012-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-012-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-012-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
