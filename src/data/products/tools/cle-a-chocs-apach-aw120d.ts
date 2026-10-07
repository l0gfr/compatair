import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw120d",
	"slug": "cle-a-chocs-apach-aw120d",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW120D",
	"brand": "APACH",
	"model": "AW120D",
	"mpn": "AW120D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw120d.svg",
		"alt": "Repères techniques : APACH AW120D",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw120d",
		"label": "Référence AW120D",
		"distinguishingAttributes": {
			"reference": "AW120D",
			"Carrés indiqués, sans création de variante": "3/4\" ; 1\"",
			"Vitesse à vide": "7500 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW120D. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carrés indiqués, sans création de variante : 3/4\" ; 1\".",
			"Vitesse à vide : 7500 tr/min.",
			"Couple maximal déclaré : 1500 ft-lb / 2034 N·m.",
			"Longueur totale : 217 mm.",
			"Masse publiée : 3,28 kg.",
			"Consommation moyenne, autre unité imprimée : 218 L/min."
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
			"label": "Carrés indiqués, sans création de variante",
			"value": "3/4\" ; 1\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "1500 ft-lb / 2034 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Longueur totale",
			"value": "217 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,28 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Consommation moyenne, autre unité imprimée",
			"value": "218 L/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "7.7 cfm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,2 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
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
