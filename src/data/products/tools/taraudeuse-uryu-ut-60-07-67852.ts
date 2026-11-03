import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-uryu-ut-60-07-67852",
	"slug": "taraudeuse-uryu-ut-60-07-67852",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "URYU UT-60-07 (réf. 67852)",
	"brand": "URYU",
	"model": "UT-60-07",
	"mpn": "67852",
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
		"src": "/images/products/taraudeuse-uryu-ut-60-07-67852.webp",
		"alt": "Repères techniques : URYU UT-60-07 (réf. 67852)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ut-60-07",
		"label": "Code constructeur 67852",
		"distinguishingAttributes": {
			"codeCatalogue": "67852",
			"reference": "67852"
		}
	},
	"editorial": {
		"overview": "URYU UT-60-07. La UT-60-07 annonce environ 680 tr/min ; la UT-60-04 descend à 400 tr/min avec même longueur et même moyenne de 500 L/min. La UT-60S-07 mesure 316 mm et pèse 1,65 kg, contre 244 mm et 1,80 kg ici.",
		"verifiedFacts": [
			"Référence complète imprimée : 67852, page PDF 3.",
			"Consommation moyenne publiée : 500 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.6MPa(85 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)",
			"Capacité de taraudage : 8 mm.",
			"Vitesse à vide approximative : 680 tr/min.",
			"Longueur totale : 244 mm.",
			"Masse avec mandrin : 1,80 kg."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
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
			"value": "67852",
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
			"label": "Capacité de taraudage",
			"value": "8 mm",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "680 tr/min",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "244 mm",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
			]
		},
		{
			"label": "Masse avec mandrin",
			"value": "1,80 kg",
			"evidenceIds": [
				"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
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
			"id": "taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P66_68.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 36cfc8fdae9f6c8df69d64bdd9f1a6047a1ad848e1c1ea528c04c0c20b07963d. La UT-60-07 annonce environ 680 tr/min ; la UT-60-04 descend à 400 tr/min avec même longueur et même moyenne de 500 L/min. La UT-60S-07 mesure 316 mm et pèse 1,65 kg, contre 244 mm et 1,80 kg ici."
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
			"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
		],
		"specifications": [
			"taraudeuse-uryu-ut-60-07-67852-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
