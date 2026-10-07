import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-uryu-uan-701rm-60c-27032",
	"slug": "boulonneuse-uryu-uan-701rm-60c-27032",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "URYU UAN-701RM-60C (réf. 27032)",
	"brand": "URYU",
	"model": "UAN-701RM-60C",
	"mpn": "27032",
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
		"src": "/images/products/boulonneuse-uryu-uan-701rm-60c-27032.webp",
		"alt": "Repères techniques : URYU UAN-701RM-60C (réf. 27032)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uan-701rm-60c",
		"label": "Code constructeur 27032",
		"distinguishingAttributes": {
			"codeCatalogue": "27032",
			"reference": "27032"
		}
	},
	"editorial": {
		"overview": "URYU UAN-701RM-60C, code 27032. Le tableau publie une consommation moyenne de 0,9 m³/min, soit 900 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 27032, page PDF 1.",
			"Consommation moyenne publiée : 900 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa (85psi)"
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
				"documented-20260930-uryu-p37"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "27032",
			"evidenceIds": [
				"documented-20260930-uryu-p37"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.9 m³/min ; 31.8 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p37"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p37",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 89b37c84865085c98aa0bfaa6639cfbe9e7634d09c3657d12e05e9a8cef17a7b. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p37"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p37"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p37"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p37"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
