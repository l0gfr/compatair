const product = {
	"id": "cle-a-chocs-uryu-uw-401-11362",
	"slug": "cle-a-chocs-uryu-uw-401-11362",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "URYU UW-401 (réf. 11362)",
	"brand": "URYU",
	"model": "UW-401",
	"mpn": "11362",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 1200,
		"typical": 1200,
		"max": 1200
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-uryu-uw-401-11362.webp",
		"alt": "Repères techniques : URYU UW-401 (réf. 11362)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P38_43.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uw-401",
		"label": "Code constructeur 11362",
		"distinguishingAttributes": {
			"codeCatalogue": "11362",
			"reference": "11362"
		}
	},
	"editorial": {
		"overview": "URYU UW-401, code 11362. Le tableau publie une consommation moyenne de 1,2 m³/min, soit 1 200 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 11362, page PDF 4.",
			"Consommation moyenne publiée : 1 200 L/min après conversion de l’unité originale.",
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
			"value": "Page PDF 4",
			"evidenceIds": [
				"documented-20260930-uryu-p38-43"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "11362",
			"evidenceIds": [
				"documented-20260930-uryu-p38-43"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "1.2 m³/min ; 42.4 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p38-43"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p38-43"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p38-43",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P38_43.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P38_43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 90b725f7cea6b3034cca423bf66e2277b337b80dc68d216aa85b8105caf2b941. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p38-43"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p38-43"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p38-43"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p38-43"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
