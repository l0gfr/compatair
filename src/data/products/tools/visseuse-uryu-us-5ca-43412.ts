const product = {
	"id": "visseuse-uryu-us-5ca-43412",
	"slug": "visseuse-uryu-us-5ca-43412",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-5CA (réf. 43412)",
	"brand": "URYU",
	"model": "US-5CA",
	"mpn": "43412",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-uryu-us-5ca-43412.webp",
		"alt": "Repères techniques : URYU US-5CA (réf. 43412)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-us-5ca",
		"label": "Code constructeur 43412",
		"distinguishingAttributes": {
			"codeCatalogue": "43412",
			"reference": "43412"
		}
	},
	"editorial": {
		"overview": "URYU US-5CA, code 43412. Le tableau publie une consommation moyenne de 0,3 m³/min, soit 300 L/min. Pression de référence retenue : 4 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 43412, page PDF 1.",
			"Consommation moyenne publiée : 300 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)"
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
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "43412",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.3 m³/min ; 10.7 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.4 MPa",
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
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
