import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hanstools-82901-036",
	"slug": "meuleuse-hanstools-82901-036",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HansTools 82901-036",
	"brand": "HansTools",
	"model": "82901-036",
	"mpn": "82901-036",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hanstools-82901-036.svg",
		"alt": "Repères techniques : HansTools 82901-036",
		"sourceUrl": "https://www.hanstool.com/product/82901-03n-air-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-82901-036",
		"label": "Référence 82901-036",
		"distinguishingAttributes": {
			"reference": "82901-036",
			"COLLECT SIZE": "6mm",
			"MOTOR H.P.": "0.3"
		}
	},
	"editorial": {
		"overview": "HansTools 82901-036. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"COLLECT SIZE : 6mm.",
			"MOTOR H.P. : 0.3.",
			"EXHAUST : REAR.",
			"FREE SPEED R.P.M. : 25000.",
			"AIR INLET INCH : ¼.",
			"AIR HOSE ID : ¼.",
			"OVERALL LENGTH inch/mm : 6.2\"/ 155.",
			"KGS : 0.6."
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
			"label": "COLLECT SIZE",
			"value": "6mm",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "MOTOR H.P.",
			"value": "0.3",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "EXHAUST",
			"value": "REAR",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "25000",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "AIR INLET INCH",
			"value": "¼",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "AIR HOSE ID",
			"value": "¼",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "OVERALL LENGTH inch/mm",
			"value": "6.2\"/ 155",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		},
		{
			"label": "KGS",
			"value": "0.6",
			"evidenceIds": [
				"october5-tools-hans-tool-041-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-041-p1",
			"sourceUrl": "https://www.hanstool.com/product/82901-03n-air-die-grinder/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 5a235f68835cfbe8927d4552ca0f30b54a2dd308cafebd5edbb6f19e192c678a. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-041-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-041-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-041-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
