import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-hanstools-81967",
	"slug": "riveteuse-hanstools-81967",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "HansTools 81967",
	"brand": "HansTools",
	"model": "81967",
	"mpn": "81967",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-hanstools-81967.svg",
		"alt": "Repères techniques : HansTools 81967",
		"sourceUrl": "https://www.hanstool.com/product/81967-air-hydraulic-riveter/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-81967",
		"label": "Référence 81967",
		"distinguishingAttributes": {
			"reference": "81967",
			"RIVET CAPACITY inch/mm": "M4~M10",
			"MAX. RIVET CAPACITY AL. & STEEL/ STAINLESS mm": "M10/ M4"
		}
	},
	"editorial": {
		"overview": "HansTools 81967. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RIVET CAPACITY inch/mm : M4~M10.",
			"MAX. RIVET CAPACITY AL. & STEEL/ STAINLESS mm : M10/ M4.",
			"TRACTION POWER LBS/KGS : 3638/ 1650.",
			"STROKE LENGTH mm : 10.",
			"AIR INLET INCH : 1/4\".",
			"AIR HOSE ID : 1/4.",
			"OVERALL LENGTH LxH : 190X270.",
			"KGS : 1.63."
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
			"label": "RIVET CAPACITY inch/mm",
			"value": "M4~M10",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "MAX. RIVET CAPACITY AL. & STEEL/ STAINLESS mm",
			"value": "M10/ M4",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "TRACTION POWER LBS/KGS",
			"value": "3638/ 1650",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "STROKE LENGTH mm",
			"value": "10",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "AIR INLET INCH",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "AIR HOSE ID",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "OVERALL LENGTH LxH",
			"value": "190X270",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		},
		{
			"label": "KGS",
			"value": "1.63",
			"evidenceIds": [
				"october5-tools-hans-tool-018-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-018-p1",
			"sourceUrl": "https://www.hanstool.com/product/81967-air-hydraulic-riveter/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 65bf8710896721547fb38d9c9a87fc2a18226c256e197c8a53ecfc5237aabece. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-018-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-018-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-018-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
