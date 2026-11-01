import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-uryu-urw-10n-21412",
	"slug": "cle-a-cliquet-uryu-urw-10n-21412",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "URYU URW-10N (réf. 21412)",
	"brand": "URYU",
	"model": "URW-10N",
	"mpn": "21412",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 700,
		"typical": 700,
		"max": 700
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-uryu-urw-10n-21412.webp",
		"alt": "Repères techniques : URYU URW-10N (réf. 21412)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-urw-10n",
		"label": "Code constructeur 21412",
		"distinguishingAttributes": {
			"codeCatalogue": "21412",
			"reference": "21412"
		}
	},
	"editorial": {
		"overview": "URYU URW-10N. URW-12N partage la moyenne 0,70 m³/min mais publie 59 Nm,145 tr/min,397 mm et 2,70 kg. La tête et les douilles prévues doivent être vérifiées ; une moyenne identique ne rend pas les versions interchangeables. Couple publié : 57 Nm. Vitesse à vide approximative : 155 tr/min. Longueur totale : 394 mm.",
		"verifiedFacts": [
			"Référence complète imprimée : 21412, page PDF 1.",
			"Consommation moyenne publiée : 700 L/min après conversion de l’unité originale.",
			"Couple publié : 57 Nm.",
			"Vitesse à vide approximative : 155 tr/min.",
			"Longueur totale : 394 mm.",
			"Masse : 2,65 kg.",
			"Douilles métriques listées : 10, 12, 13, 14, 15, 16, 17, 18, 19 mm."
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
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "21412",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.7 m³/min ; 25.0 ft³/min",
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
		},
		{
			"label": "Couple publié",
			"value": "57 Nm",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "155 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "394 mm",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,65 kg",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
			]
		},
		{
			"label": "Douilles métriques listées",
			"value": "10, 12, 13, 14, 15, 16, 17, 18, 19 mm",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
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
		},
		{
			"id": "cle-a-cliquet-uryu-urw-10n-21412-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
			"sourceLabel": "URYU URW-10N : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 4ef07a7843585c8812e74e00d36b3d928ce3793e180ffa30a9ea530ffaa7ab17. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 4ef07a7843585c8812e74e00d36b3d928ce3793e180ffa30a9ea530ffaa7ab17. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
		],
		"editorial": [
			"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-cliquet-uryu-urw-10n-21412-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
