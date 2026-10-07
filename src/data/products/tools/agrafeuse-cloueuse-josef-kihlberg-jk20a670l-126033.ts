import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk20a670l-126033",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk20a670l-126033",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK20A670L (réf. 126033)",
	"brand": "Josef Kihlberg",
	"model": "JK20A670L",
	"mpn": "126033",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk20a670l-126033.svg",
		"alt": "Repères techniques : Josef Kihlberg JK20A670L (réf. 126033)",
		"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126033",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk20a670l",
		"label": "Référence 126033",
		"distinguishingAttributes": {
			"reference": "126033",
			"Masse publiée, unités originales": "1.2  kg 2.6  lbs",
			"Dimensions publiées, unités originales": "365 × 43 × 150 mm 14.4 x 1.7 x 5.9  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK20A670L (réf. 126033). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 1.2  kg 2.6  lbs.",
			"Dimensions publiées, unités originales : 365 × 43 × 150 mm 14.4 x 1.7 x 5.9  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 365.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 358.",
			"Pression maximale, valeur web sans unité explicite : 7.",
			"Longueur du nez, valeur web sans unité explicite : 14.",
			"Longueur des agrafes : 6 - 12 mm ( 1/4 - 1/2 in ).",
			"Consommation par pose publiée dans la notice : 0,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
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
			"value": "1.2  kg 2.6  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "365 × 43 × 150 mm 14.4 x 1.7 x 5.9  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "365",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "358",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "7",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Longueur du nez, valeur web sans unité explicite",
			"value": "14",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 12 mm ( 1/4 - 1/2 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-23-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-13-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.2 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-13-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-13-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-23-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126033",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 dc9f6ef7198fba7aad3380ae3aed5d49dc6cf6b2031332c69b383c4abf75fbf0. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-13-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_jk20A670L_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 1001d0031dbb1671f00c5dca6b25804c62a9e5ecaf2aa6f24a2427e21895e6cd. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-23-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-23-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-23-p1",
			"october3d-tools-kihlberg-operating-13-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
