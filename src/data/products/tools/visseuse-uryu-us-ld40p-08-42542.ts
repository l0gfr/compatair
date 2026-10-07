import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-uryu-us-ld40p-08-42542",
	"slug": "visseuse-uryu-us-ld40p-08-42542",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-LD40P-08 (réf. 42542)",
	"brand": "URYU",
	"model": "US-LD40P-08",
	"mpn": "42542",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 5,
		"max": 5
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-uryu-us-ld40p-08-42542.webp",
		"alt": "Repères techniques : URYU US-LD40P-08 (réf. 42542)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-us-ld40p-08",
		"label": "Code constructeur 42542",
		"distinguishingAttributes": {
			"codeCatalogue": "42542",
			"reference": "42542"
		}
	},
	"editorial": {
		"overview": "URYU US-LD40P-08, code 42542. Le tableau publie une consommation moyenne de 0,4 m³/min, soit 400 L/min. Pression de référence retenue : 5 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 42542, page PDF 2.",
			"Consommation moyenne publiée : 400 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.5MPa (72psi)"
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
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "42542",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.4 m³/min ; 14.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.5 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p52-54",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P52_54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p52-54"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p52-54"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p52-54"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p52-54"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.5."
	]
};

export default product;
