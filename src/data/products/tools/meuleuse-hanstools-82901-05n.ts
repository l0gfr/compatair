import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hanstools-82901-05n",
	"slug": "meuleuse-hanstools-82901-05n",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HansTools 82901-05N",
	"brand": "HansTools",
	"model": "82901-05N",
	"mpn": "82901-05N",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hanstools-82901-05n.svg",
		"alt": "Repères techniques : HansTools 82901-05N",
		"sourceUrl": "https://www.hanstool.com/product/82901-05n-air-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-82901-05n",
		"label": "Référence 82901-05N",
		"distinguishingAttributes": {
			"reference": "82901-05N",
			"COLLECT SIZE": "¼\"",
			"MOTOR H.P.": "0.5"
		}
	},
	"editorial": {
		"overview": "HansTools 82901-05N. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"COLLECT SIZE : ¼\".",
			"MOTOR H.P. : 0.5.",
			"EXHAUST : REAR.",
			"FREE SPEED R.P.M. : 22000.",
			"AIR INLET INCH : ¼.",
			"AIR HOSE ID : ¼.",
			"OVERALL LENGTH inch/mm : 7\"/ 175.",
			"KGS : 0.7."
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
			"value": "¼\"",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "MOTOR H.P.",
			"value": "0.5",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "EXHAUST",
			"value": "REAR",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "22000",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "AIR INLET INCH",
			"value": "¼",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "AIR HOSE ID",
			"value": "¼",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "OVERALL LENGTH inch/mm",
			"value": "7\"/ 175",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		},
		{
			"label": "KGS",
			"value": "0.7",
			"evidenceIds": [
				"october5-tools-hans-tool-039-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-039-p1",
			"sourceUrl": "https://www.hanstool.com/product/82901-05n-air-die-grinder/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 f47ed4e99a8657bcc2ea40c37fced5d03268d66b3806c561621abaad139385a7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-039-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-039-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-039-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
