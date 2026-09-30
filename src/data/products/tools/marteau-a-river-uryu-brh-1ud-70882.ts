const product = {
	"id": "marteau-a-river-uryu-brh-1ud-70882",
	"slug": "marteau-a-river-uryu-brh-1ud-70882",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "URYU BRH-1UD (réf. 70882)",
	"brand": "URYU",
	"model": "BRH-1UD",
	"mpn": "70882",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-uryu-brh-1ud-70882.webp",
		"alt": "Repères techniques : URYU BRH-1UD (réf. 70882)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-brh-1ud",
		"label": "Code constructeur 70882",
		"distinguishingAttributes": {
			"codeCatalogue": "70882",
			"reference": "70882"
		}
	},
	"editorial": {
		"overview": "URYU BRH-1UD, code 70882. Le tableau publie une consommation moyenne de 0,34 m³/min, soit 340 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 70882, page PDF 1.",
			"Consommation moyenne publiée : 340 L/min après conversion de l’unité originale.",
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
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "70882",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.34 m³/min ; 12.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p70-71",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P70_71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 51a1fe7622e1fe09d10ce44fc0fdbe4bc87c11f14d72836a26e18c2a733d7884. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p70-71"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p70-71"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p70-71"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p70-71"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
