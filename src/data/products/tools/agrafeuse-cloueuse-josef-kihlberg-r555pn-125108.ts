import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-r555pn-125108",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-r555pn-125108",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg R555PN (réf. 125108)",
	"brand": "Josef Kihlberg",
	"model": "R555PN",
	"mpn": "125108",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-r555pn-125108.svg",
		"alt": "Repères techniques : Josef Kihlberg R555PN (réf. 125108)",
		"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125108",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-r555pn",
		"label": "Référence 125108",
		"distinguishingAttributes": {
			"reference": "125108",
			"Masse publiée, unités originales": "1.8  kg 4.0  lbs",
			"Dimensions publiées, unités originales": "235 × 104 × 205 mm 9.3 x 4.1 x 8.1  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg R555PN (réf. 125108). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 1.8  kg 4.0  lbs.",
			"Dimensions publiées, unités originales : 235 × 104 × 205 mm 9.3 x 4.1 x 8.1  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 235.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 1000.",
			"Pression maximale, valeur web sans unité explicite : 8.",
			"Longueur des agrafes : 15 - 18 mm ( 5/8 - 3/8 in ).",
			"Consommation par pose publiée dans la notice : 0,95 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
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
			"value": "1.8  kg 4.0  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "235 × 104 × 205 mm 9.3 x 4.1 x 8.1  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "235",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "1000",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "8",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "15 - 18 mm ( 5/8 - 3/8 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-51-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,95 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-39-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.95 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-39-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-39-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-51-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125108",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 164bc06272a901bc80aabb8cace564dea8f34f244d151b22cfb6e07f8fd25c96. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-39-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_R555PN_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 69f7101761111462c1e5695155c54b6ae1f4b616c27bd9ee0feb1b95032ff23c. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-51-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-51-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-51-p1",
			"october3d-tools-kihlberg-operating-39-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
