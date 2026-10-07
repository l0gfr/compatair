import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-r557pn-125111",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-r557pn-125111",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg R557PN (réf. 125111)",
	"brand": "Josef Kihlberg",
	"model": "R557PN",
	"mpn": "125111",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-r557pn-125111.svg",
		"alt": "Repères techniques : Josef Kihlberg R557PN (réf. 125111)",
		"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125111",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-r557pn",
		"label": "Référence 125111",
		"distinguishingAttributes": {
			"reference": "125111",
			"Masse publiée, unités originales": "1.8  kg 4.0  lbs",
			"Dimensions publiées, unités originales": "235 × 104 × 205 mm 9.3 x 4.1 x 8.1  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg R557PN (réf. 125111). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
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
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "235 × 104 × 205 mm 9.3 x 4.1 x 8.1  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "235",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "1000",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "8",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "15 - 18 mm ( 5/8 - 3/8 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-50-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,95 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-38-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.95 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-38-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-38-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-50-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/top-stapling/125111",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 2c72495e265b6d642723bb58bf85d39607ebb0c1739ef9c882c630c51c24304d. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-38-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_R557PN_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 f9b248276410dd6d42eafaed07a670f54685cb10aca11dc6638589c18d7cd223. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-50-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-50-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-50-p1",
			"october3d-tools-kihlberg-operating-38-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
