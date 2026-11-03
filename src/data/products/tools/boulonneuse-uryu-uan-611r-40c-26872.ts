import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-uryu-uan-611r-40c-26872",
	"slug": "boulonneuse-uryu-uan-611r-40c-26872",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "URYU UAN-611R-40C (réf. 26872)",
	"brand": "URYU",
	"model": "UAN-611R-40C",
	"mpn": "26872",
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
		"src": "/images/products/boulonneuse-uryu-uan-611r-40c-26872.webp",
		"alt": "Repères techniques : URYU UAN-611R-40C (réf. 26872)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uan-611r-40c",
		"label": "Code constructeur 26872",
		"distinguishingAttributes": {
			"codeCatalogue": "26872",
			"reference": "26872"
		}
	},
	"editorial": {
		"overview": "URYU UAN-611R-40C. La UAN-611R-40C privilégie 10–18 Nm à environ 400 tr/min. La 611R-60C annonce 6,5–12 Nm et 620 tr/min ; la 611RM-40C mesure 409 mm et pèse 2,0 kg, contre 373 mm et 1,6 kg ici. La consommation moyenne reste 600 L/min pour ces lignes.",
		"verifiedFacts": [
			"Référence complète imprimée : 26872, page PDF 1.",
			"Consommation moyenne publiée : 600 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa (85 psi)",
			"Capacité de boulon publiée : 6–8 mm.",
			"Plage de couple indicative : 10–18 Nm.",
			"Vitesse à vide approximative : 400 tr/min.",
			"Longueur hors douille : 373 mm.",
			"Masse hors douille : 1,6 kg.",
			"Carré de sortie : 9,5 mm (3/8\")."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"La plage de couple du catalogue est indicative et demande une sélection adaptée à l’assemblage."
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
			"value": "26872",
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
		},
		{
			"label": "Capacité de boulon publiée",
			"value": "6–8 mm",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple indicative",
			"value": "10–18 Nm",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "400 tr/min",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur hors douille",
			"value": "373 mm",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors douille",
			"value": "1,6 kg",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "9,5 mm (3/8\")",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
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
		},
		{
			"id": "boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 89b37c84865085c98aa0bfaa6639cfbe9e7634d09c3657d12e05e9a8cef17a7b. La UAN-611R-40C privilégie 10–18 Nm à environ 400 tr/min. La 611R-60C annonce 6,5–12 Nm et 620 tr/min ; la 611RM-40C mesure 409 mm et pèse 2,0 kg, contre 373 mm et 1,6 kg ici. La consommation moyenne reste 600 L/min pour ces lignes."
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
		],
		"editorial": [
			"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
		],
		"specifications": [
			"boulonneuse-uryu-uan-611r-40c-26872-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
