import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-uryu-up-26nb-54792",
	"slug": "polisseuse-uryu-up-26nb-54792",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "URYU UP-26NB (réf. 54792)",
	"brand": "URYU",
	"model": "UP-26NB",
	"mpn": "54792",
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
		"src": "/images/products/polisseuse-uryu-up-26nb-54792.webp",
		"alt": "Repères techniques : URYU UP-26NB (réf. 54792)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-up-26nb",
		"label": "Code constructeur 54792",
		"distinguishingAttributes": {
			"codeCatalogue": "54792",
			"reference": "54792"
		}
	},
	"editorial": {
		"overview": "URYU UP-26NB, code 54792. Le tableau publie une consommation moyenne de 0,6 m³/min, soit 600 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 54792, page PDF 1.",
			"Consommation moyenne publiée : 600 L/min après conversion de l’unité originale.",
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
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "54792",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.6 m³/min ; 21.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p62",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 daaddcba105d4bd9dc97a38929d5b89c6543ad8e8d447e6b9c00c1bb64865b3b. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p62"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p62"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p62"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p62"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
