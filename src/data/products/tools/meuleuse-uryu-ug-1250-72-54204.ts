import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-uryu-ug-1250-72-54204",
	"slug": "meuleuse-uryu-ug-1250-72-54204",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "URYU UG-1250-72 (réf. 54204)",
	"brand": "URYU",
	"model": "UG-1250-72",
	"mpn": "54204",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-uryu-ug-1250-72-54204.webp",
		"alt": "Repères techniques : URYU UG-1250-72 (réf. 54204)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ug-1250-72",
		"label": "Code constructeur 54204",
		"distinguishingAttributes": {
			"codeCatalogue": "54204",
			"reference": "54204"
		}
	},
	"editorial": {
		"overview": "URYU UG-1250-72, code 54204. Le tableau publie une consommation moyenne de 0,9 m³/min, soit 900 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 54204, page PDF 5.",
			"Consommation moyenne publiée : 900 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa (85psi)"
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 5",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "54204",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.9 m³/min ; 32.7 ft³/min",
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
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
