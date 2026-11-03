import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-uryu-ag-100-out-53962",
	"slug": "meuleuse-uryu-ag-100-out-53962",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "URYU AG-100(OUT) (réf. 53962)",
	"brand": "URYU",
	"model": "AG-100(OUT)",
	"mpn": "53962",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-uryu-ag-100-out-53962.webp",
		"alt": "Repères techniques : URYU AG-100(OUT) (réf. 53962)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ag-100-out",
		"label": "Code constructeur 53962",
		"distinguishingAttributes": {
			"codeCatalogue": "53962",
			"reference": "53962"
		}
	},
	"editorial": {
		"overview": "URYU AG-100(OUT). La AG-100(OUT) utilise une broche filetée 3/8\"-24 avec grande bride, différente de la broche spéciale IN. La AG-100 L(OUT) mesure 179 mm et pèse 1,05 kg, contre 175 mm et 0,95 kg ici. Les 500 L/min moyens communs ne suffisent pas au choix de montage.",
		"verifiedFacts": [
			"Référence complète imprimée : 53962, page PDF 2.",
			"Consommation moyenne publiée : 500 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)",
			"Diamètre de meule : 100 mm.",
			"Vitesse à vide maximale : 13 500 tr/min.",
			"Puissance publiée : 315 W.",
			"Longueur totale : 175 mm.",
			"Masse hors meule : 0,95 kg.",
			"Type de broche : OUT, 3/8\"-24 avec grande bride."
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
			"value": "53962",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.5 m³/min ; 18.0 ft³/min",
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
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide maximale",
			"value": "13 500 tr/min",
			"evidenceIds": [
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "315 W",
			"evidenceIds": [
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "175 mm",
			"evidenceIds": [
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors meule",
			"value": "0,95 kg",
			"evidenceIds": [
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
			]
		},
		{
			"label": "Type de broche",
			"value": "OUT, 3/8\"-24 avec grande bride",
			"evidenceIds": [
				"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
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
			"id": "meuleuse-uryu-ag-100-out-53962-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f00ce52018de3cd2c8f093e9762bb4f6c63230f68c6a1b04217089408fe89245. La AG-100(OUT) utilise une broche filetée 3/8\"-24 avec grande bride, différente de la broche spéciale IN. La AG-100 L(OUT) mesure 179 mm et pèse 1,05 kg, contre 175 mm et 0,95 kg ici. Les 500 L/min moyens communs ne suffisent pas au choix de montage."
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
			"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-uryu-ag-100-out-53962-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
