import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw200c",
	"slug": "cle-a-chocs-apach-aw200c",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW200C",
	"brand": "APACH",
	"model": "AW200C",
	"mpn": "AW200C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw200c.svg",
		"alt": "Repères techniques : APACH AW200C",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw200c",
		"label": "Référence AW200C",
		"distinguishingAttributes": {
			"reference": "AW200C",
			"Carré d’entraînement": "1\"",
			"Vitesse à vide": "3300 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW200C. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 1\".",
			"Vitesse à vide : 3300 tr/min.",
			"Couple maximal déclaré : 2000 ft-lb / 2712 N·m.",
			"Longueur totale : 350 mm.",
			"Masse, unité métrique publiée : 10,5 kg.",
			"Consommation moyenne, autre unité imprimée : 170 L/min."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Une consommation moyenne du catalogue n’est pas un débit en charge ; aucune pression de mesure ni fraction de marche n’est supposée.",
			"Les couples/vitesses et masses sont des déclarations constructeur, sans essai physique CompatAir.",
			"La table raster a été relue dans la capture primaire ; aucune sortie OCR n’est utilisée comme preuve.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Carré d’entraînement",
			"value": "1\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3300 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "2000 ft-lb / 2712 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Longueur totale",
			"value": "350 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Masse, unité métrique publiée",
			"value": "10,5 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Consommation moyenne, autre unité imprimée",
			"value": "170 L/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,2 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-1-p8",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl6#page=8",
			"sourceLabel": "APACH, document technique officiel, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4d0dbade211705fbfdf82795be42bf8faa2bbe12ea036c6ba7ac3eb52aef2d59. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-1-p8"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-1-p8"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-1-p8"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
