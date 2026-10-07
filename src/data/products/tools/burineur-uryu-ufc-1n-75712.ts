import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-uryu-ufc-1n-75712",
	"slug": "burineur-uryu-ufc-1n-75712",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "URYU UFC-1N (réf. 75712)",
	"brand": "URYU",
	"model": "UFC-1N",
	"mpn": "75712",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-uryu-ufc-1n-75712.webp",
		"alt": "Repères techniques : URYU UFC-1N (réf. 75712)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P72.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ufc-1n",
		"label": "Code constructeur 75712",
		"distinguishingAttributes": {
			"codeCatalogue": "75712",
			"reference": "75712"
		}
	},
	"editorial": {
		"overview": "URYU UFC-1N, code 75712. Le tableau publie une consommation moyenne de 0,3 m³/min, soit 300 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 75712, page PDF 1.",
			"Consommation moyenne publiée : 300 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)"
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
				"documented-20260930-uryu-p72"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "75712",
			"evidenceIds": [
				"documented-20260930-uryu-p72"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.3 m³/min ; 10.7 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p72"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p72"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p72",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P72.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P72",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 b852cff1aa468efb0c05768f060a38ec591cdddaec940b8593cf70b67e6daf01. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p72"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p72"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p72"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p72"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
