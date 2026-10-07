import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-uryu-usg-5vla-55922",
	"slug": "ponceuse-rotative-uryu-usg-5vla-55922",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "URYU USG-5VLA (réf. 55922)",
	"brand": "URYU",
	"model": "USG-5VLA",
	"mpn": "55922",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-uryu-usg-5vla-55922.webp",
		"alt": "Repères techniques : URYU USG-5VLA (réf. 55922)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P57_61.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-usg-5vla",
		"label": "Code constructeur 55922",
		"distinguishingAttributes": {
			"codeCatalogue": "55922",
			"reference": "55922"
		}
	},
	"editorial": {
		"overview": "URYU USG-5VLA, code 55922. Le tableau publie une consommation moyenne de 0,85 m³/min, soit 850 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 55922, page PDF 3.",
			"Consommation moyenne publiée : 850 L/min après conversion de l’unité originale.",
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
			"value": "Page PDF 3",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "55922",
			"evidenceIds": [
				"documented-20260930-uryu-p57-61"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.85 m³/min ; 30.0 ft³/min",
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
