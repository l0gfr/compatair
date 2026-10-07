import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk20-680fn-126141",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk20-680fn-126141",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK20-680FN (réf. 126141)",
	"brand": "Josef Kihlberg",
	"model": "JK20-680FN",
	"mpn": "126141",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk20-680fn-126141.svg",
		"alt": "Repères techniques : Josef Kihlberg JK20-680FN (réf. 126141)",
		"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126141",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk20-680fn",
		"label": "Référence 126141",
		"distinguishingAttributes": {
			"reference": "126141",
			"Masse publiée, unités originales": "1  kg 2.2  lbs",
			"Dimensions publiées, unités originales": "230 × 43 × 203 mm 9.1 x 1.7 x 8.0  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK20-680FN (réf. 126141). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 1  kg 2.2  lbs.",
			"Dimensions publiées, unités originales : 230 × 43 × 203 mm 9.1 x 1.7 x 8.0  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 230.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 143.",
			"Pression maximale, valeur web sans unité explicite : 7.",
			"Longueur du nez, valeur web sans unité explicite : 40.",
			"Longueur des agrafes : 6 - 14 mm ( 1/4 - 9/16 in ).",
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
			"value": "1  kg 2.2  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "230 × 43 × 203 mm 9.1 x 1.7 x 8.0  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "230",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "143",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "7",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Longueur du nez, valeur web sans unité explicite",
			"value": "40",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 14 mm ( 1/4 - 9/16 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-17-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-7-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.2 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-7-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-7-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-17-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126141",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 75c1e87c4080dd0d836fb1c4133afe9cb817afb432837ebbcc346ab727e16649. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-7-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_jk20-680FN_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 27d068f3d9dcb5257cce9e15df4617bc623ac80131bcb434a66e786022c75dac. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-17-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-17-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-17-p1",
			"october3d-tools-kihlberg-operating-7-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
