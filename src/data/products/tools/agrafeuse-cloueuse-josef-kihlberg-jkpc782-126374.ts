import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jkpc782-126374",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jkpc782-126374",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JKPC782 (réf. 126374)",
	"brand": "Josef Kihlberg",
	"model": "JKPC782",
	"mpn": "126374",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jkpc782-126374.svg",
		"alt": "Repères techniques : Josef Kihlberg JKPC782 (réf. 126374)",
		"sourceUrl": "https://kihlberg.com/tools/industry/126374",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jkpc782",
		"label": "Référence 126374",
		"distinguishingAttributes": {
			"reference": "126374",
			"Masse publiée, unités originales": "1.8  kg 4.0  lbs",
			"Dimensions publiées, unités originales": "225 × 130 × 270 mm 8.9 x 5.1 x 10.6  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JKPC782 (réf. 126374). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 1.8  kg 4.0  lbs.",
			"Dimensions publiées, unités originales : 225 × 130 × 270 mm 8.9 x 5.1 x 10.6  in.",
			"CE declared : Oui.",
			"Capacité du chargeur, valeur publiée : 100.",
			"Pression maximale, valeur web sans unité explicite : 7.",
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
			"value": "1.8  kg 4.0  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-7-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "225 × 130 × 270 mm 8.9 x 5.1 x 10.6  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-7-p1"
			]
		},
		{
			"label": "CE declared",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-7-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "100",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-7-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "7",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-7-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-47-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.2 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-47-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-47-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-7-p1",
			"sourceUrl": "https://kihlberg.com/tools/industry/126374",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 267ce05b49e0a994e3b524e307f1180c2ebd249ee819585f5e3475a61463a868. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-47-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2019/03/126374.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 c4ec753d18060ea5ce7139c6467a234f32802013b1c620e8019b671351bb99bc. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-7-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-7-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-7-p1",
			"october3d-tools-kihlberg-operating-47-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
