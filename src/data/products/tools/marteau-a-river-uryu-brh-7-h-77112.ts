import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-uryu-brh-7-h-77112",
	"slug": "marteau-a-river-uryu-brh-7-h-77112",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "URYU BRH-7(H) (réf. 77112)",
	"brand": "URYU",
	"model": "BRH-7(H)",
	"mpn": "77112",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-uryu-brh-7-h-77112.webp",
		"alt": "Repères techniques : URYU BRH-7(H) (réf. 77112)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P72.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-brh-7-h",
		"label": "Code constructeur 77112",
		"distinguishingAttributes": {
			"codeCatalogue": "77112",
			"reference": "77112"
		}
	},
	"editorial": {
		"overview": "URYU BRH-7(H), code 77112. Le tableau publie une consommation moyenne de 0,48 m³/min, soit 480 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 77112, page PDF 1.",
			"Consommation moyenne publiée : 480 L/min après conversion de l’unité originale.",
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
			"value": "77112",
			"evidenceIds": [
				"documented-20260930-uryu-p72"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.48 m³/min ; 17.0 ft³/min",
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
