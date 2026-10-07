import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw070e",
	"slug": "cle-a-chocs-apach-aw070e",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW070E",
	"brand": "APACH",
	"model": "AW070E",
	"mpn": "AW070E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw070e.svg",
		"alt": "Repères techniques : APACH AW070E",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw070e",
		"label": "Référence AW070E",
		"distinguishingAttributes": {
			"reference": "AW070E",
			"Carré d’entraînement": "1/2\"",
			"Vitesse à vide": "8500 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW070E. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 1/2\".",
			"Vitesse à vide : 8500 tr/min.",
			"Couple maximal déclaré : 800 ft-lb / 1085 N·m.",
			"Longueur totale : 159 mm.",
			"Masse publiée : 1,85 kg.",
			"Consommation moyenne, autre unité imprimée : 155 L/min."
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
			"value": "1/2\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "800 ft-lb / 1085 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Longueur totale",
			"value": "159 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,85 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Consommation moyenne, autre unité imprimée",
			"value": "155 L/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "5.48 cfm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,2 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-apach-doc-1-p4",
			"sourceUrl": "https://www.apach.com.tw/en-US/dl6#page=4",
			"sourceLabel": "APACH, document technique officiel, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4d0dbade211705fbfdf82795be42bf8faa2bbe12ea036c6ba7ac3eb52aef2d59. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-apach-doc-1-p4"
		],
		"workingPressureBar": [
			"october3d-tools-apach-doc-1-p4"
		],
		"demandExplanation": [
			"october3d-tools-apach-doc-1-p4"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
