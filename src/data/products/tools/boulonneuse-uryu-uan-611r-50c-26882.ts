const product = {
	"id": "boulonneuse-uryu-uan-611r-50c-26882",
	"slug": "boulonneuse-uryu-uan-611r-50c-26882",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "URYU UAN-611R-50C (réf. 26882)",
	"brand": "URYU",
	"model": "UAN-611R-50C",
	"mpn": "26882",
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
		"src": "/images/products/boulonneuse-uryu-uan-611r-50c-26882.webp",
		"alt": "Repères techniques : URYU UAN-611R-50C (réf. 26882)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uan-611r-50c",
		"label": "Code constructeur 26882",
		"distinguishingAttributes": {
			"codeCatalogue": "26882",
			"reference": "26882"
		}
	},
	"editorial": {
		"overview": "URYU UAN-611R-50C, code 26882. Le tableau publie une consommation moyenne de 0,6 m³/min, soit 600 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 26882, page PDF 1.",
			"Consommation moyenne publiée : 600 L/min après conversion de l’unité originale.",
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
			"value": "26882",
			"evidenceIds": [
				"documented-20260930-uryu-p37"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.6 m³/min ; 21.2 ft³/min",
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
