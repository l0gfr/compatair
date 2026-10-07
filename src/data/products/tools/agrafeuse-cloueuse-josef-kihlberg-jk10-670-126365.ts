import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-josef-kihlberg-jk10-670-126365",
	"slug": "agrafeuse-cloueuse-josef-kihlberg-jk10-670-126365",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Josef Kihlberg JK10-670 (réf. 126365)",
	"brand": "Josef Kihlberg",
	"model": "JK10-670",
	"mpn": "126365",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-josef-kihlberg-jk10-670-126365.svg",
		"alt": "Repères techniques : Josef Kihlberg JK10-670 (réf. 126365)",
		"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126365",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "josef-kihlberg-jk10-670",
		"label": "Référence 126365",
		"distinguishingAttributes": {
			"reference": "126365",
			"Masse publiée, unités originales": "1  kg 2.2  lbs",
			"Dimensions publiées, unités originales": "256 × 43 × 145 mm 10.1 x 1.7 x 5.7  in"
		}
	},
	"editorial": {
		"overview": "Josef Kihlberg JK10-670 (réf. 126365). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Masse publiée, unités originales : 1  kg 2.2  lbs.",
			"Dimensions publiées, unités originales : 256 × 43 × 145 mm 10.1 x 1.7 x 5.7  in.",
			"Longueur publiée, unité non indiquée dans cette cellule : 256.",
			"Lubrification requise : Oui.",
			"Capacité du chargeur, valeur publiée : 179.",
			"Pression maximale, valeur web sans unité explicite : 6.",
			"Longueur du nez, valeur web sans unité explicite : 18.",
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
			"value": "1  kg 2.2  lbs",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Dimensions publiées, unités originales",
			"value": "256 × 43 × 145 mm 10.1 x 1.7 x 5.7  in",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Longueur publiée, unité non indiquée dans cette cellule",
			"value": "256",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Lubrification requise",
			"value": "Oui",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Capacité du chargeur, valeur publiée",
			"value": "179",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Pression maximale, valeur web sans unité explicite",
			"value": "6",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Longueur du nez, valeur web sans unité explicite",
			"value": "18",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Longueur des agrafes",
			"value": "6 - 12 mm ( 1/4 - 1/2 in )",
			"evidenceIds": [
				"october3d-tools-kihlberg-tool-38-p1"
			]
		},
		{
			"label": "Consommation par pose publiée dans la notice",
			"value": "0,2 litres par opération à 6 bar ; base air libre ou normalisée non précisée",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-27-p2"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.2 L/cycle",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-27-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption per driving operation at 6 bar operating pressure",
			"evidenceIds": [
				"october3d-tools-kihlberg-operating-27-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-kihlberg-tool-38-p1",
			"sourceUrl": "https://kihlberg.com/tools/application/bed-manufacturing/126365",
			"sourceLabel": "Josef Kihlberg, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 1bb7be7ad87dc9baf20a52905467ab405eb73c9be5cac1e73787b8f7e1894dca. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-kihlberg-operating-27-p2",
			"sourceUrl": "https://wp.kihlberg.com/wp-content/uploads/2018/09/Bruksanvisning_jk10-670_DE_EN_FR_SV_05.20.pdf#page=2",
			"sourceLabel": "Josef Kihlberg, document technique officiel, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 d0edd38d9a474650f6bab1f68a41c695a38683eaaa87e5164fa5dc9635e83dc5. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-kihlberg-tool-38-p1"
		],
		"workingPressureBar": [
			"october3d-tools-kihlberg-tool-38-p1"
		],
		"demandExplanation": [
			"october3d-tools-kihlberg-tool-38-p1",
			"october3d-tools-kihlberg-operating-27-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
