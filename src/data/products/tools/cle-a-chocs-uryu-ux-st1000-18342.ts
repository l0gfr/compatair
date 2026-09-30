const product = {
	"id": "cle-a-chocs-uryu-ux-st1000-18342",
	"slug": "cle-a-chocs-uryu-ux-st1000-18342",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "URYU UX-ST1000 (réf. 18342)",
	"brand": "URYU",
	"model": "UX-ST1000",
	"mpn": "18342",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-uryu-ux-st1000-18342.webp",
		"alt": "Repères techniques : URYU UX-ST1000 (réf. 18342)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ux-st1000",
		"label": "Code constructeur 18342",
		"distinguishingAttributes": {
			"codeCatalogue": "18342",
			"reference": "18342"
		}
	},
	"editorial": {
		"overview": "URYU UX-ST1000, code 18342. Le tableau publie une consommation moyenne de 0,48 m³/min, soit 480 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 18342, page PDF 5.",
			"Consommation moyenne publiée : 480 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)"
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 5",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "18342",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.48 m³/min ; 16.8 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p30-34",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P30_34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 bfedea87f312ccc461b6512e0086d674afcec922db3881306259e050187bb373. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p30-34"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p30-34"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p30-34"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p30-34"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
