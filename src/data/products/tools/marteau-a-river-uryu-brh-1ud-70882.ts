import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
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
		"overview": "URYU BRH-1UD. BRH-5UD :1800 coups/min,211 mm et course 100 mm. BRH-1UD est l’ensemble 143 mm/course 38 mm ; la table regroupe les variantes R/H et leurs codes. La queue exacte doit être confirmée à la commande. Cadence approximative : 2 800 coups/min. Longueur totale : 143 mm. Masse sans bouterolle : 1,40 kg.",
		"verifiedFacts": [
			"Référence complète imprimée : 70882, page PDF 1.",
			"Consommation moyenne publiée : 340 L/min après conversion de l’unité originale.",
			"Cadence approximative : 2 800 coups/min.",
			"Longueur totale : 143 mm.",
			"Masse sans bouterolle : 1,40 kg.",
			"Course de piston : 38 mm.",
			"Codes associés à la ligne R/H : 70882 / 70892."
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
		},
		{
			"label": "Cadence approximative",
			"value": "2 800 coups/min",
			"evidenceIds": [
				"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "143 mm",
			"evidenceIds": [
				"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
			]
		},
		{
			"label": "Masse sans bouterolle",
			"value": "1,40 kg",
			"evidenceIds": [
				"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
			]
		},
		{
			"label": "Course de piston",
			"value": "38 mm",
			"evidenceIds": [
				"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
			]
		},
		{
			"label": "Codes associés à la ligne R/H",
			"value": "70882 / 70892",
			"evidenceIds": [
				"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
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
		},
		{
			"id": "marteau-a-river-uryu-brh-1ud-70882-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
			"sourceLabel": "URYU BRH-1UD : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 51a1fe7622e1fe09d10ce44fc0fdbe4bc87c11f14d72836a26e18c2a733d7884. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 51a1fe7622e1fe09d10ce44fc0fdbe4bc87c11f14d72836a26e18c2a733d7884. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
		],
		"editorial": [
			"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
		],
		"specifications": [
			"marteau-a-river-uryu-brh-1ud-70882-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
