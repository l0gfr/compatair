import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk35-590-126311",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk35-590-126311",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK35-590 (réf. 126311)",
	"brand": "Josef Kihlberg",
	"model": "JK35-590",
	"mpn": "126311",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk35-590-126311.svg",
		"alt": "Repères techniques : Josef Kihlberg JK35-590 (réf. 126311)",
		"sourceUrl": "https://kihlberg.com/tools/application/transport-packages/126311",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk35-590",
		"label": "Référence 126311",
		"distinguishingAttributes": {
			"reference": "126311",
			"Masse publiée, unités originales": "2.4  kg 5.3  lbs",
			"Dimensions publiées, unités originales": "335 × 65 × 195 mm 13.2 x 2.6 x 7.7  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK35-590 (réf. 126311). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 2.4  kg 5.3  lbs.",
			"Dimensions publiées, unités originales : 335 × 65 × 195 mm 13.2 x 2.6 x 7.7  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 335.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 100.",
			"Pression maximale, valeur web sans unité explicite : 7.",
			"Longueur du nez, valeur web sans unité explicite : 2.",
			"Longueur des agrafes : 16 - 32 mm ( 5/8 - 1 1/4 in ).",
			"Consommation par pose publiée dans la notice : 0,85 litres par opération à 6 bar ; base air libre ou normalisée non précisée."
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
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "335 × 65 × 195 mm 13.2 x 2.6 x 7.7  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "335",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "100",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "7",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Longueur du nez, valeur web sans unité explicite",
			"value": "2",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "16 - 32 mm ( 5/8 - 1 1/4 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-9-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,85 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-48-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.85 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-48-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-48-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-9-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/transport-packages/126311",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 767fd40e65b1e4c761de78a86ee61f813f695c130e9438a1f9632ab4e40d15b2. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-48-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_jk35-590_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 5236ef50e8fc38f1c4b9198ac9c1fa75a792be6df9a4e0983bc5e1d5344c4c13. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-9-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-9-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-9-p1",
			"october3d-tools-kihlberg-operating-48-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
