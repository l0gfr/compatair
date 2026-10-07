import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-hanstools-83506",
	"slug": "perceuse-hanstools-83506",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "HansTools 83506",
	"brand": "HansTools",
	"model": "83506",
	"mpn": "83506",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-hanstools-83506.svg",
		"alt": "Repères techniques : HansTools 83506",
		"sourceUrl": "https://www.hanstool.com/product/83506-air-angle-drill/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-83506",
		"label": "Référence 83506",
		"distinguishingAttributes": {
			"reference": "83506",
			"CHUCK SIZE inch/mm": "⅜\"/ 10",
			"MOTOR H.P.": "0.5"
		}
	},
	"editorial": {
		"overview": "HansTools 83506. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"CHUCK SIZE inch/mm : ⅜\"/ 10.",
			"MOTOR H.P. : 0.5.",
			"FREE SPEED R.P.M. : 1900.",
			"EXHAUST : RAER.",
			"AIR INLET INCH : ¼\".",
			"AIR HOSE ID : ⅜\".",
			"OVERALL LENGTH LxH : 210x110.",
			"KGS : 1.1."
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
			"label": "CHUCK SIZE inch/mm",
			"value": "⅜\"/ 10",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "MOTOR H.P.",
			"value": "0.5",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "1900",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "EXHAUST",
			"value": "RAER",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "AIR INLET INCH",
			"value": "¼\"",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "AIR HOSE ID",
			"value": "⅜\"",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "OVERALL LENGTH LxH",
			"value": "210x110",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		},
		{
			"label": "KGS",
			"value": "1.1",
			"evidenceIds": [
				"october5-tools-hans-tool-029-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-029-p1",
			"sourceUrl": "https://www.hanstool.com/product/83506-air-angle-drill/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 5309d2d521e2c14b6919285f097ef3c47f7467c5dd57503c515e8448c4e77fa7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-029-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-029-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-029-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
