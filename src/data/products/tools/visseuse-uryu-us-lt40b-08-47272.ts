const product = {
	"id": "visseuse-uryu-us-lt40b-08-47272",
	"slug": "visseuse-uryu-us-lt40b-08-47272",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-LT40B-08 (réf. 47272)",
	"brand": "URYU",
	"model": "US-LT40B-08",
	"mpn": "47272",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 5,
		"max": 5
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-uryu-us-lt40b-08-47272.webp",
		"alt": "Repères techniques : URYU US-LT40B-08 (réf. 47272)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P50_51.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-us-lt40b-08",
		"label": "Code constructeur 47272",
		"distinguishingAttributes": {
			"codeCatalogue": "47272",
			"reference": "47272"
		}
	},
	"editorial": {
		"overview": "URYU US-LT40B-08, code 47272. Le tableau publie une consommation moyenne de 0,3 m³/min, soit 300 L/min. Pression de référence retenue : 5 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 47272, page PDF 1.",
			"Consommation moyenne publiée : 300 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.5MPa (72psi)"
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
				"documented-20260930-uryu-p50-51"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "47272",
			"evidenceIds": [
				"documented-20260930-uryu-p50-51"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.3 m³/min ; 10.5 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p50-51"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.5 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p50-51"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p50-51",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P50_51.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P50_51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 6cd4a6cabf99f71e218a0882b40a4f02651ca2ed0bb8bdfc8fd22eb8314cc941. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p50-51"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p50-51"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p50-51"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p50-51"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.5."
	]
};

export default product;
