import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-uryu-ut-60-04-67872",
	"slug": "taraudeuse-uryu-ut-60-04-67872",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "URYU UT-60-04 (réf. 67872)",
	"brand": "URYU",
	"model": "UT-60-04",
	"mpn": "67872",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-uryu-ut-60-04-67872.webp",
		"alt": "Repères techniques : URYU UT-60-04 (réf. 67872)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ut-60-04",
		"label": "Code constructeur 67872",
		"distinguishingAttributes": {
			"codeCatalogue": "67872",
			"reference": "67872"
		}
	},
	"editorial": {
		"overview": "URYU UT-60-04. UT-60-07 partage 244 mm et 1,80 kg mais tourne à 680 tr/min ; UT-60S-04 conserve 400 tr/min avec 316 mm et 1,65 kg. Le suffixe et la longueur distinguent les taraudeuses malgré la moyenne commune 0,5 m³/min. Capacité publiée : 8 mm. Vitesse à vide approximative : 400 tr/min. Longueur totale : 244 mm.",
		"verifiedFacts": [
			"Référence complète imprimée : 67872, page PDF 3.",
			"Consommation moyenne publiée : 500 L/min après conversion de l’unité originale.",
			"Capacité publiée : 8 mm.",
			"Vitesse à vide approximative : 400 tr/min.",
			"Longueur totale : 244 mm.",
			"Masse : 1,80 kg."
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
			"value": "Page PDF 3",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "67872",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.5 m³/min ; 18.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p66-68"
			]
		},
		{
			"label": "Capacité publiée",
			"value": "8 mm",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "400 tr/min",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "244 mm",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,80 kg",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p66-68",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P66_68",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "taraudeuse-uryu-ut-60-04-67872-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU UT-60-04 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p66-68"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p66-68"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p66-68"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p66-68"
		],
		"editorial": [
			"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
		],
		"specifications": [
			"taraudeuse-uryu-ut-60-04-67872-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
