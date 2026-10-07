import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-561-18pn-125006",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-561-18pn-125006",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg 561-18PN (réf. 125006)",
	"brand": "Josef Kihlberg",
	"model": "561-18PN",
	"mpn": "125006",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-561-18pn-125006.svg",
		"alt": "Repères techniques : Josef Kihlberg 561-18PN (réf. 125006)",
		"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125006",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-561-18pn",
		"label": "Référence 125006",
		"distinguishingAttributes": {
			"reference": "125006",
			"Masse publiée, unités originales": "2.5  kg 5.5  lbs",
			"Dimensions publiées, unités originales": "470 × 100 × 305 mm 18.5 x 3.9 x 12.0  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg 561-18PN (réf. 125006). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 2.5  kg 5.5  lbs.",
			"Dimensions publiées, unités originales : 470 × 100 × 305 mm 18.5 x 3.9 x 12.0  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 470.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 150.",
			"Pression maximale, valeur web sans unité explicite : 7.",
			"Longueur des agrafes : 18 mm ( 3/4 in ).",
			"Consommation par pose publiée dans la notice : 1,0 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La notice donne des litres par opération à 6 bar. Elle ne précise pas ici si le volume est détendu, normalisé ou comprimé ; aucune conversion en besoin d’air libre n’est faite.",
			"La pression maximale sans unité dans la fiche web est conservée comme cellule brute ; seule la notice donne explicitement des bar pour le point de consommation.",
			"Les dimensions, masses et capacités de la fiche article restent attachées à cette référence ; aucune valeur d’un modèle voisin n’est transférée.",
			"Les pressions de service conseillées ne sont pas assimilées au point de consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée, unités originales",
			"value": "2.5  kg 5.5  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "470 × 100 × 305 mm 18.5 x 3.9 x 12.0  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "470",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "150",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "7",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "18 mm ( 3/4 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-10-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "1,0 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-0-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "1 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-0-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-0-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-10-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125006",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 2731d59088381cbc15e259ace35f30e4180c968941a76e6d0317fe3bf91e576c. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-0-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/561-18PN_04.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 338797c34715cef9b12c22a51a7f3313e48a756ff43996bce54749679a138168. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-10-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-10-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-10-p1",
			"october3d-tools-kihlberg-operating-0-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
