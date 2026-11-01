import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-uryu-up-15-53812",
	"slug": "polisseuse-uryu-up-15-53812",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "URYU UP-15 (réf. 53812)",
	"brand": "URYU",
	"model": "UP-15",
	"mpn": "53812",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-uryu-up-15-53812.webp",
		"alt": "Repères techniques : URYU UP-15 (réf. 53812)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-up-15",
		"label": "Code constructeur 53812",
		"distinguishingAttributes": {
			"codeCatalogue": "53812",
			"reference": "53812"
		}
	},
	"editorial": {
		"overview": "URYU UP-15. UP-25DB conserve un diamètre 125 mm mais publie 11000 tr/min,259 W et 1,70 kg. Le diamètre seul ne permet donc pas de choisir la vitesse ni le gabarit de la polisseuse. Diamètre de plateau/papier publié : 125 mm. Vitesse à vide maximale : 8 500 tr/min. Puissance publiée : 210 W.",
		"verifiedFacts": [
			"Référence complète imprimée : 53812, page PDF 1.",
			"Consommation moyenne publiée : 450 L/min après conversion de l’unité originale.",
			"Diamètre de plateau/papier publié : 125 mm.",
			"Vitesse à vide maximale : 8 500 tr/min.",
			"Puissance publiée : 210 W.",
			"Longueur totale : 112 mm.",
			"Hauteur : 93 mm.",
			"Masse hors accessoire : 1,20 kg."
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
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "53812",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.45 m³/min ; 16.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p62"
			]
		},
		{
			"label": "Diamètre de plateau/papier publié",
			"value": "125 mm",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide maximale",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "210 W",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "112 mm",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		},
		{
			"label": "Hauteur",
			"value": "93 mm",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		},
		{
			"label": "Masse hors accessoire",
			"value": "1,20 kg",
			"evidenceIds": [
				"polisseuse-uryu-up-15-53812-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p62",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 daaddcba105d4bd9dc97a38929d5b89c6543ad8e8d447e6b9c00c1bb64865b3b. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "polisseuse-uryu-up-15-53812-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
			"sourceLabel": "URYU UP-15 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 daaddcba105d4bd9dc97a38929d5b89c6543ad8e8d447e6b9c00c1bb64865b3b. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "polisseuse-uryu-up-15-53812-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P62.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 daaddcba105d4bd9dc97a38929d5b89c6543ad8e8d447e6b9c00c1bb64865b3b. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p62"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p62"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p62"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p62"
		],
		"editorial": [
			"polisseuse-uryu-up-15-53812-reserved-20261101-1"
		],
		"specifications": [
			"polisseuse-uryu-up-15-53812-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
