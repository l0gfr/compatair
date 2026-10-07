import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-apach-adr001t",
	"slug": "perceuse-apach-adr001t",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "APACH ADR001T",
	"brand": "APACH",
	"model": "ADR001T",
	"mpn": "ADR001T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-apach-adr001t.svg",
		"alt": "Repères techniques : APACH ADR001T",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-adr001t",
		"label": "Référence ADR001T",
		"distinguishingAttributes": {
			"reference": "ADR001T",
			"Diamètre de foret déclaré": "8 mm (O.D.)",
			"Puissance publiée": "0,6 hp"
		}
	},
	"editorial": {
		"overview": "APACH ADR001T. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Diamètre de foret déclaré : 8 mm (O.D.).",
			"Puissance publiée : 0,6 hp.",
			"Vitesses à vide, trois étages et deux modes : 450/1200 ; 700/1800 ; 900/2400 tr/min.",
			"Tolérance de vitesse indiquée : ±5 %.",
			"Longueur totale : 200 mm.",
			"Masse publiée : 1,8 kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Une consommation moyenne du catalogue n’est pas un débit en charge ; aucune pression de mesure ni fraction de marche n’est supposée.",
			"Les couples/vitesses et masses sont des déclarations constructeur, sans essai physique CompatAir.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Diamètre de foret déclaré",
			"value": "8 mm (O.D.)",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,6 hp",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Vitesses à vide, trois étages et deux modes",
			"value": "450/1200 ; 700/1800 ; 900/2400 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Tolérance de vitesse indiquée",
			"value": "±5 %",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Longueur totale",
			"value": "200 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,8 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,3 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-1-p5",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl6#page=5",
			"sourceLabel": "APACH, document technique officiel, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4d0dbade211705fbfdf82795be42bf8faa2bbe12ea036c6ba7ac3eb52aef2d59. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-1-p5"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-1-p5"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-1-p5"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
