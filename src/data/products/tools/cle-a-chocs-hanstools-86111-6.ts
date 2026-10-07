import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hanstools-86111-6",
	"slug": "cle-a-chocs-hanstools-86111-6",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "HansTools 86111-6",
	"brand": "HansTools",
	"model": "86111-6",
	"mpn": "86111-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hanstools-86111-6.svg",
		"alt": "Repères techniques : HansTools 86111-6",
		"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-148mm-shaft-86111%e2%80%916/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-86111-6",
		"label": "Référence 86111-6",
		"distinguishingAttributes": {
			"reference": "86111-6",
			"ANVIL inch(mm)": "5.82\" (148)",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC": "800 (1085)"
		}
	},
	"editorial": {
		"overview": "HansTools 86111-6. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"ANVIL inch(mm) : 5.82\" (148).",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC : 800 (1085).",
			"MINI TORQUE FT · LB(Nm) : 150-650 (203-881).",
			"STDBOLT SIZE inch(mm) : M24.",
			"FREE SPEED R.P.M. : 6500.",
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
			"value": "5.82\" (148)",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		},
		{
			"label": "MAX TORQUE FT · LB(Nm) @ 5 SEC",
			"value": "800 (1085)",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		},
		{
			"label": "MINI TORQUE FT · LB(Nm)",
			"value": "150-650 (203-881)",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		},
		{
			"label": "STDBOLT SIZE inch(mm)",
			"value": "M24",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "6500",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		},
		{
			"label": "MECHANISM",
			"value": "NEW TWIN HAMMER",
			"evidenceIds": [
				"october5-tools-hans-tool-009-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-009-p1",
			"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-148mm-shaft-86111%e2%80%916/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 e51d16ce0c0e2171653735bb95749435e37e0c5e55b6627d5bf9b8919b183e3f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-009-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-009-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-009-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
