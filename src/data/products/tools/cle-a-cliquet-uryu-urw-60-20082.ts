import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-uryu-urw-60-20082",
	"slug": "cle-a-cliquet-uryu-urw-60-20082",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "URYU URW-60 (réf. 20082)",
	"brand": "URYU",
	"model": "URW-60",
	"mpn": "20082",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 280,
		"typical": 280,
		"max": 280
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-uryu-urw-60-20082.webp",
		"alt": "Repères techniques : URYU URW-60 (réf. 20082)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-urw-60",
		"label": "Code constructeur 20082",
		"distinguishingAttributes": {
			"codeCatalogue": "20082",
			"reference": "20082"
		}
	},
	"editorial": {
		"overview": "URYU URW-60, code 20082. Le tableau publie une consommation moyenne de 0,28 m³/min, soit 280 L/min. Pression de référence retenue : 4 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 20082, page PDF 1.",
			"Consommation moyenne publiée : 280 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.4MPa (57psi)"
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
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "20082",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.28 m³/min ; 9.9 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.4 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p35",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 4ef07a7843585c8812e74e00d36b3d928ce3793e180ffa30a9ea530ffaa7ab17. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p35"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p35"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p35"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p35"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
