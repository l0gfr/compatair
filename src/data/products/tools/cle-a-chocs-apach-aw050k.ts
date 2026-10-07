import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-apach-aw050k",
	"slug": "cle-a-chocs-apach-aw050k",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "APACH AW050K",
	"brand": "APACH",
	"model": "AW050K",
	"mpn": "AW050K",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-apach-aw050k.svg",
		"alt": "Repères techniques : APACH AW050K",
		"sourceUrl": "https://www.apach.com.tw/en-US/dl6",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "apach-aw050k",
		"label": "Référence AW050K",
		"distinguishingAttributes": {
			"reference": "AW050K",
			"Carré d’entraînement": "1/2\"",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "APACH AW050K. Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
		"verifiedFacts": [
			"Carré d’entraînement : 1/2\".",
			"Vitesse à vide : 9000 tr/min.",
			"Couple maximal déclaré : 600 ft-lb / 813 N·m.",
			"Longueur totale : 86 mm.",
			"Masse publiée : 1,35 kg.",
			"Interface décrite : 3/8\" Common Low Profile Impact Short Sockets Directly Connectable.",
			"Consommation moyenne, autre unité imprimée : 113 L/min."
		],
		"limitations": [
			"Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.",
			"Une consommation moyenne du catalogue n’est pas un débit en charge ; aucune pression de mesure ni fraction de marche n’est supposée.",
			"Les couples/vitesses et masses sont des déclarations constructeur, sans essai physique CompatAir.",
			"La page imprime 40 CFM (113 L/min), deux unités incompatibles ; les deux valeurs originales restent visibles et aucune n’est arbitrée pour le calcul.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Carré d’entraînement",
			"value": "1/2\"",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Couple maximal déclaré",
			"value": "600 ft-lb / 813 N·m",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Longueur totale",
			"value": "86 mm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,35 kg",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Interface décrite",
			"value": "3/8\" Common Low Profile Impact Short Sockets Directly Connectable",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Consommation moyenne, autre unité imprimée",
			"value": "113 L/min",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "40 cfm",
			"evidenceIds": [
				"october3d-tools-apach-doc-1-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi (6,2 bar) ; pression d’utilisation publiée, pas de point de mesure explicitement associé à la consommation.",
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
		"Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit."
	]
};

export default product;
