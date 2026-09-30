const product = {
	"id": "cle-a-cliquet-uryu-urw-9n-22742",
	"slug": "cle-a-cliquet-uryu-urw-9n-22742",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "URYU URW-9N (réf. 22742)",
	"brand": "URYU",
	"model": "URW-9N",
	"mpn": "22742",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 670,
		"typical": 670,
		"max": 670
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-uryu-urw-9n-22742.webp",
		"alt": "Repères techniques : URYU URW-9N (réf. 22742)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-urw-9n",
		"label": "Code constructeur 22742",
		"distinguishingAttributes": {
			"codeCatalogue": "22742",
			"reference": "22742"
		}
	},
	"editorial": {
		"overview": "URYU URW-9N, code 22742. Le tableau publie une consommation moyenne de 0,67 m³/min, soit 670 L/min. Pression de référence retenue : 4 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 22742, page PDF 1.",
			"Consommation moyenne publiée : 670 L/min après conversion de l’unité originale.",
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
			"value": "22742",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.67 m³/min ; 23.7 ft³/min",
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
