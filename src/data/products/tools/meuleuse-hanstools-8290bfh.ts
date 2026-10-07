import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hanstools-8290bfh",
	"slug": "meuleuse-hanstools-8290bfh",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "HansTools 8290BFH",
	"brand": "HansTools",
	"model": "8290BFH",
	"mpn": "8290BFH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hanstools-8290bfh.svg",
		"alt": "Repères techniques : HansTools 8290BFH",
		"sourceUrl": "https://www.hanstool.com/product/8290bfh-high-speed-tire-buffer-air-tool/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-8290bfh",
		"label": "Référence 8290BFH",
		"distinguishingAttributes": {
			"reference": "8290BFH",
			"CHUCK SIZE": "⁷ᐟ₁₆",
			"FREE SPEED R.P.M.": "20,000"
		}
	},
	"editorial": {
		"overview": "HansTools 8290BFH. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"CHUCK SIZE : ⁷ᐟ₁₆.",
			"FREE SPEED R.P.M. : 20,000.",
			"EXHAUST : RAER.",
			"Overall Length : 225mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La colonne AVG.DLR CONSUMPTION CFM est une consommation moyenne ; le cycle de travail n’est pas documenté. Elle ne représente pas le débit continu en charge.",
			"Les pressions Air Pressure bar/psi sont des prescriptions de fonctionnement, sans point de mesure de consommation explicitement qualifié.",
			"Les éventuelles affirmations de FAQ ne remplacent pas le régime Average/DLR imprimé dans les tableaux. Les variantes ne sont retenues que lorsqu’un numéro propre figure dans une ligne technique.",
			"Tire buffer décrit la préparation de pneus ; ce n’est pas une polisseuse de finition automobile.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "CHUCK SIZE",
			"value": "⁷ᐟ₁₆",
			"evidenceIds": [
				"october5-tools-hans-tool-022-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "20,000",
			"evidenceIds": [
				"october5-tools-hans-tool-022-p1"
			]
		},
		{
			"label": "EXHAUST",
			"value": "RAER",
			"evidenceIds": [
				"october5-tools-hans-tool-022-p1"
			]
		},
		{
			"label": "Overall Length",
			"value": "225mm",
			"evidenceIds": [
				"october5-tools-hans-tool-022-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-022-p1",
			"sourceUrl": "https://www.hanstool.com/product/8290bfh-high-speed-tire-buffer-air-tool/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 517c2663682e6c5b25caf17d99fdfcedef9e3f406f713a05319d7ab0c1b57d6f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-022-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-022-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-022-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
