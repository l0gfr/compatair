import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk45-783-126305",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk45-783-126305",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK45-783 (réf. 126305)",
	"brand": "Josef Kihlberg",
	"model": "JK45-783",
	"mpn": "126305",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk45-783-126305.svg",
		"alt": "Repères techniques : Josef Kihlberg JK45-783 (réf. 126305)",
		"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126305",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk45-783",
		"label": "Référence 126305",
		"distinguishingAttributes": {
			"reference": "126305",
			"Masse publiée, unités originales": "2.4  kg 5.3  lbs",
			"Dimensions publiées, unités originales": "345 × 82 × 282 mm 13.6 x 3.2 x 11.1  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK45-783 (réf. 126305). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 2.4  kg 5.3  lbs.",
			"Dimensions publiées, unités originales : 345 × 82 × 282 mm 13.6 x 3.2 x 11.1  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 345.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 138.",
			"Pression maximale, valeur web sans unité explicite : 8.",
			"Longueur du nez, valeur web sans unité explicite : 21.",
			"Longueur des agrafes : 25 - 51 mm ( 1\" - 2\" in ).",
			"Consommation par pose publiée dans la notice : 1,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
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
			"value": "2.4  kg 5.3  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "345 × 82 × 282 mm 13.6 x 3.2 x 11.1  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "345",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "138",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "8",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Longueur du nez, valeur web sans unité explicite",
			"value": "21",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "25 - 51 mm ( 1\" - 2\" in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-37-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "1,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-4-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "1.2 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-4-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-4-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-37-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126305",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 e38667bcf24b8117192be09462c334a6f790708a2cd58bc0434ec70d1a37c6f6. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-4-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2023/03/Bruksanvisning_jk45-783_DE_EN_FR_SV_02.21.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 afc15dd6a9d11d0f9248f36fdfc787fed633ac24d7f9429f63a38d1c6e1534e2. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-37-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-37-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-37-p1",
			"october3d-tools-kihlberg-operating-4-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
