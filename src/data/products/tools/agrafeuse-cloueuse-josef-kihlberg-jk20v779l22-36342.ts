import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk20v779l22-36342",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk20v779l22-36342",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK20V779L22 (réf. 36342)",
	"brand": "Josef Kihlberg",
	"model": "JK20V779L22",
	"mpn": "36342",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk20v779l22-36342.svg",
		"alt": "Repères techniques : Josef Kihlberg JK20V779L22 (réf. 36342)",
		"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/36342",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk20v779l22",
		"label": "Référence 36342",
		"distinguishingAttributes": {
			"reference": "36342",
			"Masse publiée, unités originales": "2.2  kg 4.9  lbs",
			"Dimensions publiées, unités originales": "370 × 68 × 333 mm 14.6 x 2.7 x 13.1  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK20V779L22 (réf. 36342). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 2.2  kg 4.9  lbs.",
			"Dimensions publiées, unités originales : 370 × 68 × 333 mm 14.6 x 2.7 x 13.1  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 370.",
			"Capacité du chargeur, valeur publiée : 168.",
			"Longueur des agrafes : 20 - 22 mm ( 3/4 - 7/8 in ).",
			"Profondeur de gorge, valeur web sans unité explicite : 35.",
			"Consommation par pose publiée dans la notice : 0,4 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
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
			"value": "2.2  kg 4.9  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "370 × 68 × 333 mm 14.6 x 2.7 x 13.1  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "370",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "168",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "20 - 22 mm ( 3/4 - 7/8 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Profondeur de gorge, valeur web sans unité explicite",
			"value": "35",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-16-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,4 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-6-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.4 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-6-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-6-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-16-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/36342",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 07c7e99f4e5943c319a794cc73071f8590946e04fe870d2372f98113ad62421f. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-6-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_JK20V779L22_DE_EN_FR_SV_05.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 ba603090fdc9f1144d06d82c7bd7368e165e0c6b646ddc6a52a1d270589d9ff8. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-16-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-16-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-16-p1",
			"october3d-tools-kihlberg-operating-6-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
