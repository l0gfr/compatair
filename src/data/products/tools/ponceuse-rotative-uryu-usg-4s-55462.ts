import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-uryu-usg-4s-55462",
	"slug": "ponceuse-rotative-uryu-usg-4s-55462",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "URYU USG-4S (réf. 55462)",
	"brand": "URYU",
	"model": "USG-4S",
	"mpn": "55462",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-uryu-usg-4s-55462.webp",
		"alt": "Repères techniques : URYU USG-4S (réf. 55462)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-usg-4s",
		"label": "Code constructeur 55462",
		"distinguishingAttributes": {
			"codeCatalogue": "55462",
			"reference": "55462"
		}
	},
	"editorial": {
		"overview": "URYU USG-4S. La USG-4S associe 100 mm et 13 500 tr/min à la broche IN. La USG-7S passe à 180 mm et 7 600 tr/min, pour une moyenne de 1 300 L/min contre 600 ici. La AG-100(OUT) a un autre montage de broche ; accessoires et vitesse doivent correspondre.",
		"verifiedFacts": [
			"Référence complète imprimée : 55462, page PDF 2.",
			"Consommation moyenne publiée : 600 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)",
			"Diamètre de meule : 100 mm.",
			"Vitesse à vide maximale : 13 500 tr/min.",
			"Puissance publiée : 450 W.",
			"Longueur totale : 236 mm.",
			"Hauteur : 94 mm.",
			"Masse hors meule : 1,65 kg.",
			"Type de broche : IN, broche spéciale URYU avec petite bride."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 2",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "55462",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.6 m³/min ; 22.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Diamètre de meule",
			"value": "100 mm",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide maximale",
			"value": "13 500 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "450 W",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "236 mm",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Hauteur",
			"value": "94 mm",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors meule",
			"value": "1,65 kg",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		},
		{
			"label": "Type de broche",
			"value": "IN, broche spéciale URYU avec petite bride",
			"evidenceIds": [
				"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p57-61",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P57_61",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 f00ce52018de3cd2c8f093e9762bb4f6c63230f68c6a1b04217089408fe89245. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f00ce52018de3cd2c8f093e9762bb4f6c63230f68c6a1b04217089408fe89245. La USG-4S associe 100 mm et 13 500 tr/min à la broche IN. La USG-7S passe à 180 mm et 7 600 tr/min, pour une moyenne de 1 300 L/min contre 600 ici. La AG-100(OUT) a un autre montage de broche ; accessoires et vitesse doivent correspondre."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p57-61"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p57-61"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p57-61"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p57-61"
		],
		"editorial": [
			"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-uryu-usg-4s-55462-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
