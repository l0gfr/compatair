import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-uryu-ud-50s-200-61972",
	"slug": "perceuse-uryu-ud-50s-200-61972",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "URYU UD-50S-200 (réf. 61972)",
	"brand": "URYU",
	"model": "UD-50S-200",
	"mpn": "61972",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-uryu-ud-50s-200-61972-technical-20261116-reviews.svg",
		"alt": "Repères techniques : URYU UD-50S-200 (réf. 61972)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "uryu-ud-50s-200",
		"label": "Code constructeur 61972",
		"distinguishingAttributes": {
			"codeCatalogue": "61972",
			"reference": "61972"
		}
	},
	"editorial": {
		"overview": "UD-50S-200, code 61972 : perceuse de capacité publiée 3 mm à environ 23 000 tr/min, longueur avec mandrin 193 mm et masse 0,70 kg. La UD-50-200 mesure 135 mm ; la UD-50S-22 est donnée pour 8 mm à 2 200 tr/min et 205 mm. La moyenne commune de 0,4 m³/min ne remplace pas le choix de capacité et de vitesse.",
		"verifiedFacts": [
			"Référence complète imprimée : 61972, page PDF 1.",
			"Consommation moyenne publiée : 400 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)",
			"Capacité de perçage publiée : 3 mm.",
			"Vitesse à vide approximative : 23 000 tr/min.",
			"Longueur avec mandrin : 193 mm.",
			"Masse avec mandrin : 0,70 kg.",
			"Mandrin nominal : 8 mm (5/16 pouce).",
			"Filetage de broche : 3/8–24 UNF."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 1",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "61972",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.4 m³/min ; 14.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Capacité de perçage publiée",
			"value": "3 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "23 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		},
		{
			"label": "Longueur avec mandrin",
			"value": "193 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		},
		{
			"label": "Masse avec mandrin",
			"value": "0,70 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		},
		{
			"label": "Mandrin nominal",
			"value": "8 mm (5/16 pouce)",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8–24 UNF",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p66-68",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P66_68",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "review:2026-11-16-reviews:perceuse-uryu-ud-50s-200-61972:0",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "UD-50S-200, code 61972 : perceuse de capacité publiée 3 mm à environ 23 000 tr/min, longueur avec mandrin 193 mm et masse 0,70 kg. La UD-50-200 mesure 135 mm ; la UD-50S-22 est donnée pour 8 mm à 2 200 tr/min et 205 mm. La moyenne commune de 0,4 m³/min ne remplace pas le choix de capacité et de vitesse. GET complet SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. Pages PDF lues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p66-68"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p66-68"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p66-68"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p66-68"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
