import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-uryu-uan-611r-30c-26862",
	"slug": "boulonneuse-uryu-uan-611r-30c-26862",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "URYU UAN-611R-30C (réf. 26862)",
	"brand": "URYU",
	"model": "UAN-611R-30C",
	"mpn": "26862",
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
		"src": "/images/products/boulonneuse-uryu-uan-611r-30c-26862.webp",
		"alt": "Repères techniques : URYU UAN-611R-30C (réf. 26862)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uan-611r-30c",
		"label": "Code constructeur 26862",
		"distinguishingAttributes": {
			"codeCatalogue": "26862",
			"reference": "26862"
		}
	},
	"editorial": {
		"overview": "URYU UAN-611R-30C. La UAN-611R-40C couvre 10–18 Nm à 400 tr/min ; la 30C couvre 13–25 Nm à 270 tr/min, avec la même longueur et la même consommation moyenne 0,6 m³/min. La plage de serrage différencie le choix, pas cette moyenne partagée. Plage de couple publiée : 13,0–25,0 Nm. Vitesse à vide approximative : 270 tr/min. Longueur sans douille : 373 mm.",
		"verifiedFacts": [
			"Référence complète imprimée : 26862, page PDF 1.",
			"Consommation moyenne publiée : 600 L/min après conversion de l’unité originale.",
			"Plage de couple publiée : 13,0–25,0 Nm.",
			"Vitesse à vide approximative : 270 tr/min.",
			"Longueur sans douille : 373 mm.",
			"Masse sans douille : 1,6 kg.",
			"Carré de sortie : 9,5 mm (3/8\")."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"La pression recommandée du tableau n’est pas une attestation de pression de mesure d’un maximum de consommation. La moyenne reste hors verdict conclusif."
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
			"value": "26862",
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
			"label": "Plage de couple publiée",
			"value": "13,0–25,0 Nm",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "270 tr/min",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur sans douille",
			"value": "373 mm",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
			]
		},
		{
			"label": "Masse sans douille",
			"value": "1,6 kg",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "9,5 mm (3/8\")",
			"evidenceIds": [
				"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
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
			"id": "boulonneuse-uryu-uan-611r-30c-26862-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
			"sourceLabel": "URYU UAN-611R-30C : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 89b37c84865085c98aa0bfaa6639cfbe9e7634d09c3657d12e05e9a8cef17a7b. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P37.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 89b37c84865085c98aa0bfaa6639cfbe9e7634d09c3657d12e05e9a8cef17a7b. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
			"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
		],
		"specifications": [
			"boulonneuse-uryu-uan-611r-30c-26862-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
