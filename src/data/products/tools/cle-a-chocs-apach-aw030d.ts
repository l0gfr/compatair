import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw030d",
	"slug": "cle-a-chocs-apach-aw030d",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW030D",
	"brand": "APACH",
	"model": "AW030D",
	"mpn": "AW030D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw030d.svg",
		"alt": "Repères techniques : APACH AW030D",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw030d",
		"label": "Référence AW030D",
		"distinguishingAttributes": {
			"reference": "AW030D",
			"Carré d’entraînement": "3/8\"",
			"Vitesse à vide": "5700 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW030D. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 3/8\".",
			"Vitesse à vide : 5700 tr/min.",
			"Couple maximal déclaré : 273 ft-lb / 370 N·m.",
			"Longueur totale : 127 mm.",
			"Masse publiée : 1,44 kg."
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
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5700 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "273 ft-lb / 370 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Longueur totale",
			"value": "127 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,44 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "3.65 cfm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,3 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-1-p6",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl6#page=6",
			"sourceLabel": "APACH, document technique officiel, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4d0dbade211705fbfdf82795be42bf8faa2bbe12ea036c6ba7ac3eb52aef2d59. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-1-p6"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-1-p6"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-1-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
