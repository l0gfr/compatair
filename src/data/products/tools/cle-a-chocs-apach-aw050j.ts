import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw050j",
	"slug": "cle-a-chocs-apach-aw050j",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW050J",
	"brand": "APACH",
	"model": "AW050J",
	"mpn": "AW050J",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw050j.svg",
		"alt": "Repères techniques : APACH AW050J",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw050j",
		"label": "Référence AW050J",
		"distinguishingAttributes": {
			"reference": "AW050J",
			"Carré d’entraînement": "1/2\"",
			"Vitesse à vide": "8000 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW050J. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 1/2\".",
			"Vitesse à vide : 8000 tr/min.",
			"Couple maximal déclaré : 650 ft-lb / 881 N·m.",
			"Longueur totale : 127 mm.",
			"Masse, unité métrique publiée : 1,43 kg.",
			"Consommation moyenne, autre unité imprimée : 142 L/min."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Une consommation moyenne du catalogue n’est pas un débit en charge ; aucune pression de mesure ni fraction de marche n’est supposée.",
			"Les couples/vitesses et masses sont des déclarations constructeur, sans essai physique CompatAir.",
			"La ligne Working Torque 500 FT-LB/770 N.m n’a pas d’unités équivalentes ; elle n’est pas convertie ni assimilée au couple maximal.",
			"Les unités de masse 1,43 kg/3,37 lb sont discordantes ; la ligne kg est conservée comme déclaration.",
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
			"value": "8000 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "650 ft-lb / 881 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Longueur totale",
			"value": "127 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Masse, unité métrique publiée",
			"value": "1,43 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Consommation moyenne, autre unité imprimée",
			"value": "142 L/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p4"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "5 cfm",
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
