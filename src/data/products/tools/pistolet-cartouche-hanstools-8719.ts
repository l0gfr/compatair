import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-cartouche-hanstools-8719",
	"slug": "pistolet-cartouche-hanstools-8719",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "HansTools 8719",
	"brand": "HansTools",
	"model": "8719",
	"mpn": "8719",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-cartouche-hanstools-8719.svg",
		"alt": "Repères techniques : HansTools 8719",
		"sourceUrl": "https://www.hanstool.com/product/8719s-air-grease-gun/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-8719",
		"label": "Référence 8719",
		"distinguishingAttributes": {
			"reference": "8719",
			"MODLE": "ONE-SHOT",
			"CAPACITY LOADING": "BULK 400cc"
		}
	},
	"editorial": {
		"overview": "HansTools 8719. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"MODLE : ONE-SHOT.",
			"CAPACITY LOADING : BULK 400cc.",
			"AIR INLET inch : 1/4\".",
			"g : 14.3.",
			"g : 17.7."
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
			"label": "MODLE",
			"value": "ONE-SHOT",
			"evidenceIds": [
				"october5-tools-hans-tool-026-p1"
			]
		},
		{
			"label": "CAPACITY LOADING",
			"value": "BULK 400cc",
			"evidenceIds": [
				"october5-tools-hans-tool-026-p1"
			]
		},
		{
			"label": "AIR INLET inch",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-hans-tool-026-p1"
			]
		},
		{
			"label": "g",
			"value": "14.3",
			"evidenceIds": [
				"october5-tools-hans-tool-026-p1"
			]
		},
		{
			"label": "g",
			"value": "17.7",
			"evidenceIds": [
				"october5-tools-hans-tool-026-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-026-p1",
			"sourceUrl": "https://www.hanstool.com/product/8719s-air-grease-gun/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 14887669d8ebce3ffb857040cd571186469cc9afa841c0ef58af1115a93605d4. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-026-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-026-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-026-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
