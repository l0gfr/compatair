import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-uryu-uw-10shrk-05072",
	"slug": "cle-a-chocs-uryu-uw-10shrk-05072",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "URYU UW-10SHRK (réf. 05072)",
	"brand": "URYU",
	"model": "UW-10SHRK",
	"mpn": "05072",
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
		"src": "/images/products/cle-a-chocs-uryu-uw-10shrk-05072.webp",
		"alt": "Repères techniques : URYU UW-10SHRK (réf. 05072)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P38_43.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uw-10shrk",
		"label": "Code constructeur 05072",
		"distinguishingAttributes": {
			"codeCatalogue": "05072",
			"reference": "05072"
		}
	},
	"editorial": {
		"overview": "URYU UW-10SHRK. La UW-10SHRK mesure 183 mm et pèse 2,13 kg ; la UW-13SRK de même vitesse et de même consommation moyenne mesure 215 mm et pèse 2,61 kg. La capacité de boulon 10–12 mm identifie cette version ; aucun couple maximal absent du tableau n’est ajouté.",
		"verifiedFacts": [
			"Référence complète imprimée : 05072, page PDF 3.",
			"Consommation moyenne publiée : 450 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                        Recommended Air Pressure:0.6MPa(85 psi)",
			"Capacité nominale de boulon : 10–12 mm.",
			"Carré de sortie : 12,7 mm (1/2\").",
			"Vitesse à vide approximative : 6 000 tr/min.",
			"Longueur hors douille ou embout : 183 mm.",
			"Masse hors douille ou embout : 2,13 kg."
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
				"documented-20260930-uryu-p38-43"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "05072",
			"evidenceIds": [
				"documented-20260930-uryu-p38-43"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.45 m³/min ; 16.0 ft³/min",
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
		},
		{
			"label": "Capacité nominale de boulon",
			"value": "10–12 mm",
			"evidenceIds": [
				"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "12,7 mm (1/2\")",
			"evidenceIds": [
				"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur hors douille ou embout",
			"value": "183 mm",
			"evidenceIds": [
				"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors douille ou embout",
			"value": "2,13 kg",
			"evidenceIds": [
				"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
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
		},
		{
			"id": "cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P38_43.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 90b725f7cea6b3034cca423bf66e2277b337b80dc68d216aa85b8105caf2b941. La UW-10SHRK mesure 183 mm et pèse 2,13 kg ; la UW-13SRK de même vitesse et de même consommation moyenne mesure 215 mm et pèse 2,61 kg. La capacité de boulon 10–12 mm identifie cette version ; aucun couple maximal absent du tableau n’est ajouté."
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
		],
		"editorial": [
			"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-uryu-uw-10shrk-05072-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
