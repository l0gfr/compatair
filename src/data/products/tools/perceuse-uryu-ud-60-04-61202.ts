import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-uryu-ud-60-04-61202",
	"slug": "perceuse-uryu-ud-60-04-61202",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "URYU UD-60-04 (réf. 61202)",
	"brand": "URYU",
	"model": "UD-60-04",
	"mpn": "61202",
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
		"src": "/images/products/perceuse-uryu-ud-60-04-61202.webp",
		"alt": "Repères techniques : URYU UD-60-04 (réf. 61202)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ud-60-04",
		"label": "Code constructeur 61202",
		"distinguishingAttributes": {
			"codeCatalogue": "61202",
			"reference": "61202"
		}
	},
	"editorial": {
		"overview": "URYU UD-60-04, code 61202. Le tableau publie une consommation moyenne de 0,5 m³/min, soit 500 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 61202, page PDF 1.",
			"Consommation moyenne publiée : 500 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)"
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
			"value": "61202",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.5 m³/min ; 18.0 ft³/min",
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
